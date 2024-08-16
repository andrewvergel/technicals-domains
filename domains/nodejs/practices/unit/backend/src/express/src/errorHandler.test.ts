import request from 'supertest';
import express from 'express';
import { notFoundHandler, errorHandler } from './errorHandler';

const app = express();
app.use(notFoundHandler);
app.use(errorHandler);

describe('Error Handling', () => {
    it('should return 404 for unknown routes', async () => {
        const res = await request(app).get('/unknown');
        expect(res.status).toBe(404);
        expect(res.body.message).toBe('Not Found');
    });
});