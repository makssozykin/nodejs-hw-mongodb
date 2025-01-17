import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';

const PORT = 3000;

export const startServer = () => {
  const app = express();
  const logger = pino();

  app.use(cors());
  app.use(pinoHttp({ logger }));

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
