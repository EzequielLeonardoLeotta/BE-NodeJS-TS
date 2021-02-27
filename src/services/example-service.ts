import {Request, Response} from 'express';

export const example = (req: Request, res: Response) => {
    res.send("Example service has been called");
    return;
};