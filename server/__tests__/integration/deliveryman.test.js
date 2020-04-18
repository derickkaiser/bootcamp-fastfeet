import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';
import authenticate from '../util/authenticate';

describe('Deliveryman', () =>{
    const deliveryman = {
        name:"Seu Zé Entregador",
        avatar_id:"1",
        email:"entregador@gmail.com"
    };

    beforeEach(async() => {
        await truncate();
    });

    let token;

    /** Store route */

    beforeAll(async() => {
        const response = await request(app).post('/sessions').send({
            email: 'admin@fastfeet.com',
            password: '123456'
        });
        token = response.body.token;
    });

    it('should return status 200 when inserting a valid deliveryman', async () =>{
        const response = await request(app)
                                .post('/deliverymen')
                                .send(deliveryman)
                                .set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(200);
    });

    it('should return status 400 when passing empty values for mandatory attributes', async () =>{
        const response = await request(app)
                                .post('/deliverymen')
                                .send({
                                    name:"Seu Zé Entregador",
                                    avatar_id:"1"
                                })
                                .set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(400);
    });

    /** Index route */

    it('should return one object after inserting a deliveryman', async () =>{
        await request(app)
            .post('/deliverymen')
            .send(deliveryman)
            .set({ Authorization: 'Bearer ' + token});

        const response = await request(app)
                .get('/deliverymen')
                .set({ Authorization: 'Bearer ' + token});

        console.log(response.body);
        expect(response.body).toHaveLength(1);
    });
});