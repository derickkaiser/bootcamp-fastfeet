import Sequelize from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

const { Op } = Sequelize;

class CheckDeliveredDeliveryController {
  async index(req, res) {
    const { id } = req.params;

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: null,
        end_date: {
          [Op.ne]: null,
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
          attributes: ['id', 'name', 'created_at'],
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
}

export default new CheckDeliveredDeliveryController();
