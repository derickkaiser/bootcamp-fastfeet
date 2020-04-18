import authConfig from '../../src/config/auth';

import jwt from 'jsonwebtoken';

export default async function authenticate(){
    const token = jwt.sign({id: '1'}, authConfig.secret, {
        expiresIn: authConfig.expiresInTest,
    });

    return token;
}