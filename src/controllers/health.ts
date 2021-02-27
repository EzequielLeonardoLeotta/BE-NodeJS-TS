import { Request, Response } from 'express';

const healthCheck = (_req: Request, res: Response): void => {
    const healthCheck = {
        uptime: process.uptime(),
        message: 'OK',
        date: new Date().toDateString(),
        statusCode: res.statusCode,
        status: res.status,
    };
    res.send(healthCheck);
};

export default { healthCheck };