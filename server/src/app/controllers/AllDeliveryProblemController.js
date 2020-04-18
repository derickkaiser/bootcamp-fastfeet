import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class AllDeliveryProblemController{
    async index(req,res){
        const deliveryProblems = await DeliveryProblem.findAll({ 
            include: [
                {
                    model: Delivery,
                    as: 'delivery',
                    attributes: ['canceled_at'],
                }
            ]
        });

        const dps = deliveryProblems.filter(d => d.delivery.canceled_at === null);

        return res.json(dps);
    }
}

export default new AllDeliveryProblemController();