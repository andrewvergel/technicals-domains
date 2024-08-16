import { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');
    res.status(404);
    next(error);
};

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(res.statusCode || 500).json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
    });
};