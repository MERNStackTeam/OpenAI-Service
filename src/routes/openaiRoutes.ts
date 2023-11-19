import { Router } from 'express';
import openaiController from '../controllers/openaiController';

const router = Router(); // Use Router from express

router.post('/generate-text', openaiController.generateText);

export default router;
