// express.d.ts
import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: any;  // You can replace `any` with a more specific type if you know what type `user` should be.
        }
    }
}
