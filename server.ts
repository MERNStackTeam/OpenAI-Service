import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import openaiRoutes from './src/routes/openaiRoutes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/openai', openaiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
