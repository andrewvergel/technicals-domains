import { logger } from './logger';
import { Request, Response, NextFunction } from 'express';

describe('Logger Middleware', () => {
    it('should log the HTTP method and URL', () => {
        const req = { method: 'GET', url: '/' } as Request;
        const res = {} as Response;
        const next = jest.fn() as NextFunction;

        console.log = jest.fn();

        logger(req, res, next);

        expect(console.log).toHaveBeenCalledWith('GET /');
        expect(next).toHaveBeenCalled();
    });
});