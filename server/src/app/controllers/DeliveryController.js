import * as Yup from 'yup';

import { Sequelize } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';


import Mail from '../../lib/Mail';

const {Op} = Sequelize;

class DeliveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      signature_id: Yup.number().notRequired(),
      product_name: Yup.string().required(),
      start_date: Yup.date().notRequired(),
      end_date: Yup.date().notRequired(),
      canceled_at: Yup.date().notRequired(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation fails.' });
    }

    const {
      recipient_id,
      deliveryman_id,
      signature_id,
      product_name,
      start_date,
      end_date,
      canceled_at,
    } = req.body;

    const recipientExists = await Recipient.findOne({
      where: { id: recipient_id },
    });

    if (!recipientExists) {
      return res.status(400).json({ error: 'Recipient does not exist.' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { id: deliveryman_id },
    });

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman does not exist.' });
    }

    const delivery = await Delivery.create({
      recipient_id,
      deliveryman_id,
      signature_id,
      product_name,
      start_date,
      end_date,
      canceled_at,
    });

    await Mail.sendMail({
      to: `${deliverymanExists.name} <${deliverymanExists.email}>`,
      subject: 'Encomenda disponibilizada para retirada',
      template: 'delivery_ready',
      context: {
        deliveryman: deliverymanExists.name,
        product_name: delivery.product_name,
        recipient_name: recipientExists.name,
      },
    });
    // send mail warning deliveryman with delivery's details.

    return res.json(delivery);
  }

  async index(req, res) {
    const { name } = req.query;
    const deliveries = !name
      ? await Delivery.findAll({
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: [
                'id',
                'name',
                'street',
                'city',
                'state',
                'cep',
                'number',
              ],
            },
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['id', 'name'],
              include: {
                model: File,
                as: 'avatar',
                attributes: ['id', 'url', 'path'],
              },
            },
          ],
        })
      : await Delivery.findAll({
          where: {
            product_name: {
              [Op.like]: `%${name}%`,
            },
          },
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: ['name', 'street', 'city', 'state'],
            },
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['id', 'name'],
              include: {
                model: File,
                as: 'avatar',
                attributes: ['id', 'url', 'path'],
              },
            },
          ],
        });

    return res.json(deliveries);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      signature_id: Yup.number().notRequired(),
      product_name: Yup.string().required(),
      start_date: Yup.date().notRequired(),
      end_date: Yup.date().notRequired(),
      canceled_at: Yup.date().notRequired(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation fails.' });
    }

    const { recipient_id, deliveryman_id, product_name } = req.body;

    const recipientExists = await Recipient.findOne({
      where: { id: recipient_id },
    });

    if (!recipientExists) {
      return res.status(400).json({ error: 'Recipient does not exist.' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { id: deliveryman_id },
    });

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman does not exist.' });
    }

    const { id } = req.params;

    const delivery = await Delivery.findOne({ where: { id } });

    if (!delivery) {
      return res
        .status(401)
        .json({ error: `Delivery with id ${id} does not exist.` });
    }

    await delivery.update(req.body);

    return res.json(delivery);
  }

  async delete(req, res) {
    const { id } = req.params;

    const delivery = await Delivery.findOne({ where: { id } });

    if (!delivery) {
      return res
        .status(401)
        .json({ error: `Delivery with ${id} does not exist.` });
    }

    await delivery.destroy();

    return res.json({ msg: `Delivery with ${id} removed successfully.` });
  }
}

export default new DeliveryController();
