import express from 'express';
import {exampleRoute} from '../controllers/example-controller';
import healthController from '../controllers/health';

const router = express.Router();
router.get('/example', exampleRoute);

router.get('/health', healthController.healthCheck);

export default router;