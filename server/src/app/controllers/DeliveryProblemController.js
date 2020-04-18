import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class DeliveryProblemController {
  async store(req, res) {
    const { id } = req.params;

    const deliveryExist = await Delivery.findOne({ where: { id } });

    if (!deliveryExist) {
      return res
        .status(401)
        .json({ error: `Delivery with id ${id} does not exist.` });
    }

    const { description } = req.body;

    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: id,
      description,
    });

    return res.json(deliveryProblem);
  }

  async index(req, res) {
    const { id } = req.params;

    const deliveryExist = await Delivery.findOne({ where: { id } });

    if (!deliveryExist) {
      return res
        .status(401)
        .json({ error: `Delivery with id ${id} does not exist.` });
    }

    const deliveryProblems = await DeliveryProblem.findAll({
      where: { delivery_id: id },
    });

    return res.json(deliveryProblems);
  }
}

export default new DeliveryProblemController();
