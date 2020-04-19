import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

import Queue from '../../lib/Queue';

import CancellationDeliveryMail from '../jobs/CancellationDeliveryMail';

class CancelDeliveryController {
  async delete(req, res) {
    const { id } = req.params;

    const deliveryProblem = await DeliveryProblem.findOne({ where: { id } });

    if (!deliveryProblem) {
      return res
        .status(401)
        .json({ error: `Delivery problem with id ${id} does not exist.` });
    }

    const { delivery_id } = deliveryProblem;

    const delivery = await Delivery.findOne({
      where: { id: delivery_id },
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
        },
      ],
    });

    delivery.update({ canceled_at: new Date() });

    await Queue.add(CancellationDeliveryMail.key, {
      delivery,
      deliveryProblem,
    });

    return res.json(delivery);
  }
}

export default new CancelDeliveryController();
