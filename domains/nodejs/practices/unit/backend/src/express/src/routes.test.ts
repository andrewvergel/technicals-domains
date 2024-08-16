import request from 'supertest';
import express from 'express';
import router from './routes';

const app = express();
app.use(router);

describe('GET /user/:id', () => {
    it('should return user ID', async () => {
        const res = await request(app).get('/user/123');
        expect(res.text).toBe('User ID: 123');
        expect(res.status).toBe(200);
    });
});