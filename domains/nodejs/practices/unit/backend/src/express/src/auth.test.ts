import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import { authenticateJWT } from './auth';

const app = express();

app.get('/protected', authenticateJWT, (req, res) => {
    res.send('Protected data');
});

describe('Authentication Middleware', () => {
    it('should allow access with valid JWT', async () => {
        const token = jwt.sign({ username: 'testuser' }, 'your_jwt_secret');
        const res = await request(app)
            .get('/protected')
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.text).toBe('Protected data');
    });

    it('should deny access without JWT', async () => {
        const res = await request(app).get('/protected');
        expect(res.status).toBe(401);
    });
});