import {
  subDays,
  setHours,
  setMinutes,
  setSeconds,
  isAfter,
  isBefore,
} from 'date-fns';
import { Sequelize } from 'sequelize';
import Delivery from '../models/Delivery';

const { Op } = Sequelize;

class StartDeliveryController {
  async update(req, res) {
    const { id } = req.params;
    const now = new Date();
    const yesterday = subDays(now, 1);

    const delivery = await Delivery.findOne({ where: { id } });

    const { deliveryman_id } = delivery;

    const initialPeriod = setHours(setMinutes(setSeconds(now, 0), 0), 8);
    const finalPeriod = setHours(setMinutes(setSeconds(now, 0), 0), 17);

    if (isBefore(now, initialPeriod) || isAfter(now, finalPeriod))
      return res.status(401).json({
        message: 'You can withdraw a delivery between 8 AM and 5 PM.',
      });

    const count = await Delivery.count({
      where: {
        deliveryman_id,
        start_date: {
          [Op.between]: [Number(yesterday), Number(now)],
        },
      },
    });

    if (count > 5) {
      return res.status(401).json({
        error: 'You cannot withdraw more than 5 deliveries in one day.',
      });
    }
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
