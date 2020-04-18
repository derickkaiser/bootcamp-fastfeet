import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import Admin from '../models/Admin';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Validation fails'});
        }
        const { email, password } = req.body;

        const admin = await Admin.findOne({ where: {email}});

        if(!admin) {
            res.status(401).json({ error: 'User does not exist.'});
        }

        if(!await admin.checkPassword(password)){
            res.status(401).json({error: 'Password does not match.'});
        }

        const { id, name } = admin;
        
        return res.json({
            admin: {
                name,
                email,
            },
            token: jwt.sign({id}, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })

    }
}

export default new SessionController();