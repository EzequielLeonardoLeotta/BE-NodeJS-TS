import { Request, Response } from 'express';
import {example} from '../services/example-service';

export const exampleRoute = async (req: Request, res: Response): Promise<void> => {
    try {
        await example(req, res);
    } catch (e) {
        throw e;
    }
};