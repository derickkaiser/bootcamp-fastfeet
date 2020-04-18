import Delivery from '../models/Delivery';

class EndDeliveryController{
    async update(req, res){
        const { signature_id } = req.body;
        const { id } = req.params;
        const delivery = await Delivery.findOne({ where: { id }});

        if(!delivery){
            return res.status(400).json({ error: `Delivery with id ${id} does not exist.` });
        }

        await delivery.update({ signature_id, end_date: new Date()});

        return res.json(delivery);
    }
}

export default new EndDeliveryController();