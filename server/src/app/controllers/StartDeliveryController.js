import { subDays } from 'date-fns';
import Delivery from '../models/Delivery';

class StartDeliveryController {
  async update(req, res) {
    const { id } = req.params;

    const { deliveryman_id } = req.body;

    const now = new Date();
    const yesterday = subDays(now, 1);

    const count = await Delivery.count({
      where: { deliveryman_id, start_date: yesterday },
    });

    if (count > 5) {
      return res.status(401).json({
        error: 'You cannot withdraw more than 5 deliveries in one day.',
      });
    }

    const delivery = await Delivery.findOne({ where: { id } });

    if (!delivery) {
      return res
        .status(401)
        .json({ error: `Delivery with id ${id} does not exist.` });
    }

    await delivery.update({ start_date: now });

    return res.json(delivery);
  }
}

export default new StartDeliveryController();
