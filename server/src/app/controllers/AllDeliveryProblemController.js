import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class AllDeliveryProblemController {
  async index(req, res) {
    const deliveryProblems = await DeliveryProblem.findAll({
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: ['canceled_at', 'start_date', 'end_date'],
        },
      ],
    });

    const dps = deliveryProblems.filter(
      d =>
        d.delivery.canceled_at === null &&
        d.delivery.start_date !== null &&
        d.delivery.end_date === null
    );

    return res.json(dps);
  }
}

export default new AllDeliveryProblemController();
