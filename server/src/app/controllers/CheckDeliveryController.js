import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class CheckDeliveryController{
    async index(req, res){
        const { id } = req.params;

        const deliveries = await Delivery.findAll({ where: { deliveryman_id: id, canceled_at: null, end_date: null }});

        return res.json(deliveries);
    }
}

export default new CheckDeliveryController();