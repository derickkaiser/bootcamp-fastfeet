import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('Session', () =>{
    // beforeEach(async() => {
    //     await truncate();
    // });

    // it('should return a valid token when passing a login and a password', async () =>{
    //     const response = await request(app).post('/sessions').send({
    //         email: 'admin@fastfeet.com',
    //         password: '123456'
    //     });

    //     expect(response.body.token).toContain('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
    // });

    it('should return invalid values when passing a valid login without password', async () =>{
        const response = await request(app).post('/sessions').send({
            email: 'admin@fastfeet.com'
        });

        expect(response.status).toBe(400);
    });

    it('should return invalid password when passing a valid email with a invalid password', async () =>{
        const response = await request(app).post('/sessions').send({
            email: 'admin@fastfeet.com',
            password: '1234567'
        });

        expect(response.status).toBe(401);
    });

    it('should return that user does not exist when passing a invalid email', async () =>{
        const response = await request(app).post('/sessions').send({
            email: 'fake_admin@fastfeet.com',
            password: '123456'
        });

        expect(response.status).toBe(401);
    });
});