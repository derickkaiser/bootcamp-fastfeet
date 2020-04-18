import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;

class DeliverymanController{
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            avatar_id: Yup.number().required(),
            email: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Validation fails.' });
        }

        const { name, avatar_id, email }  = req.body;

        const deliveryman = await Deliveryman.create({ name, avatar_id, email });

        return res.json(deliveryman);
    }

    async index(req, res){
        const {name} = req.query;
        const deliverymen = name 
        ? (await Deliveryman.findAll(
            {
                where: {
                    name: {
                        [Op.like]:  `%${name}%`
                    }
                },
                include: [
                    {
                        model: File,
                        as: 'avatar',
                        attributes: ['name', 'path', 'url'],
                    },
                ]
            })) : (await Deliveryman.findAll(
                { include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['name', 'path', 'url'],
                },
            ]}));

        return res.json(deliverymen);
    }

    async update(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            avatar_id: Yup.number().required(),
            email: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Validation fails.' });
        }

        const {id} = req.params;

        const deliverymanExists = await Deliveryman.findOne({ where: { id }});

        if(!deliverymanExists){
            return res.status(401).json({ error: 'Deliveryman does not exists.' });
        }

        await deliverymanExists.update(req.body);

        return res.json(deliverymanExists);
    }

    async delete(req, res){
        const { id } = req.params;

        const deliverymanExists = await Deliveryman.findOne({ where: { id }});

        if(!deliverymanExists){
            return res.status(400).json({ error: 'Deliveryman does not exist.' });
        }

        await deliverymanExists.destroy();

        return res.json({msg:`Deliveryman with id ${id} removed successfully.`});
    }
}

export default new DeliverymanController();