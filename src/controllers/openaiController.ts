import { Request, Response } from 'express';
import openaiService from '../services/openaiService';

const generateText = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const generatedText = await openaiService.generateText(prompt);
    res.json({ generatedText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { generateText };
