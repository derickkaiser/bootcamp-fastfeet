import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class CancelDeliveryController{
    async delete(req, res){
        const { id } = req.params;

        const deliveryProblem = await DeliveryProblem.findOne({ where: { id }});

        if(!deliveryProblem){
            return res.status(401).json({ error: `Delivery problem with id ${id} does not exist.`});
        }

        const { delivery_id } = deliveryProblem;

        const delivery = await Delivery.findOne({ where: { id: delivery_id }});

        delivery.update({canceled_at: new Date()});

        //send cancellation's mail.

        return res.json(delivery);
    }
}

export default new CancelDeliveryController();