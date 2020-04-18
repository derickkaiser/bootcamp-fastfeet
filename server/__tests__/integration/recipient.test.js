import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';
import authenticate from '../util/authenticate';

describe('Recipient', () =>{
    const recipient = {
        name:"José Claudio da Silva",
        cep:"13035050",
        street:"Avenida Paulista",
        city:"São Paulo",
        state:"SP",
        number:"1230"
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

    it('should return a valid recipient id when inserting a recipient', async () =>{
        const response = await request(app)
                                .post('/recipients')
                                .send(recipient)
                                .set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(200);
    });

    it('should return status 400 when inserting a recipient with empty attribute', async () =>{
        const response = 
        await request(app)
        .post('/recipients')
        .send({
            name:"José Claudio da Silva",
            cep:"13035050",
            street:"Avenida Paulista",
            city:"São Paulo",
            state:"SP"
        }).set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(400);
    });

    /** Index Route */

    it('should return nothing when querying recipient with id like `Z`', async () =>{
        await request(app).post('/recipients').send(recipient).set({ Authorization: 'Bearer ' + token});

        const response = await request(app).get('/recipients?name=Z').set({ Authorization: 'Bearer ' + token});

        expect(response.body).toHaveLength(0);
    });

    it('should return one recipient when querying recipient', async () =>{
        await request(app).post('/recipients').send(recipient).set({ Authorization: 'Bearer ' + token});

        const response = await request(app).get('/recipients').set({ Authorization: 'Bearer ' + token});

        expect(response.body).toHaveLength(1);
    });

    /** Update Route */

    it('should return new name when updating recipient with another name', async () =>{
        const newRecipient = await request(app)
                                .post('/recipients')
                                .send(recipient)
                                .set({ Authorization: 'Bearer ' + token});

        const response = await request(app)
                            .put(`/recipients/${newRecipient.body.id}`)
                            .send({
                                name:"José Claudio da Silva Edited",
                                cep:"13035050",
                                street:"Avenida Paulista",
                                city:"São Paulo",
                                state:"SP",
                                number:"1230"
                            })
                            .set({ Authorization: 'Bearer ' + token});

        expect(response.body.name).toBe("José Claudio da Silva Edited");
    });

    it('should return status 400 when body is not valid', async () =>{
        const newRecipient = await request(app)
                                .post('/recipients')
                                .send(recipient)
                                .set({ Authorization: 'Bearer ' + token});

        const response = await request(app)
                            .put(`/recipients/${newRecipient.body.id}`)
                            .send({
                                name:"José Claudio da Silva Edited",
                                cep:"13035050",
                                street:"Avenida Paulista",
                                city:"São Paulo",
                                state:"SP"
                            })
                            .set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(400);
    });

    it('should return status 400 when body recipient id does not exist', async () =>{
        const response = await request(app)
                            .put(`/recipients/88340980934`)
                            .send({
                                name:"José Claudio da Silva Edited",
                                cep:"13035050",
                                street:"Avenida Paulista",
                                city:"São Paulo",
                                state:"SP",
                                number:"1230"
                            })
                            .set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(400);
    });

    /** Delete route */

    it('should remove recipient when passing a valid recipient id', async () =>{
        const newRecipient = await request(app)
                                .post('/recipients')
                                .send(recipient)
                                .set({ Authorization: 'Bearer ' + token});

        const response = await request(app)
                            .delete(`/recipients/${newRecipient.body.id}`)
                            .set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(200);
    });

    it('should return new name when updating recipient with another name', async () =>{
        const response = await request(app)
                            .delete(`/recipients/7534759837`)
                            .set({ Authorization: 'Bearer ' + token});

        expect(response.status).toBe(400);
    });

});