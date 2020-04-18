import * as Yup from 'yup';

import Recipient from '../models/Recipient';

import { Sequelize } from 'sequelize';
const Op = Sequelize.Op;

class RecipientController{
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            cep: Yup.number().min(8).required(),
            street: Yup.string().required(),
            number: Yup.number().required(),
            street: Yup.string().required(),
            complement: Yup.string().notRequired(),
            city: Yup.string().required(),
            state: Yup.string().required(),
        });
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Validation fails.' });
        }

        const recipient = await Recipient.create(req.body);

        if(!recipient){
            res.status(401).json({ error: 'Erro ao inserir destinatario.'});
        }

        return res.json(recipient);
    }

    async index(req,res){
        const { name } = req.query;

        const where =
        name ? 
        {
            where: {
                name: {
                    [Op.like]:  `%${name}%`
                }
            },
        } :
        {};

        const recipients = await Recipient.findAll(where);


        return res.json(recipients);
    }

    async update(req, res){
        const { id } = req.params;
        const schema = Yup.object().shape({
            name: Yup.string().notRequired(),
            cep: Yup.number().min(8).notRequired(),
            street: Yup.string().notRequired(),
            number: Yup.number().notRequired(),
            street: Yup.string().notRequired(),
            complement: Yup.string().notRequired(),
            city: Yup.string().notRequired(),
            state: Yup.string().notRequired(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Validation fails.' });
        }

        const recipient = await Recipient.findOne({ where: { id }});

        if(!recipient){
            return res.status(400).json({ error: 'Recipient does not exist.' });
        }

        await recipient.update(req.body);

        return res.json(recipient);
    }

    async delete(req, res){
        const {id} = req.params;

        const recipient = await Recipient.findOne({ where: { id }});

        if(!recipient){
            return res.status(400).json({ error: 'Recipient does not exist.' });
        }

        await recipient.destroy();

        return res.json({ msg: `Recipient with id ${id} removed successfully.` });
    }
}

export default new RecipientController();