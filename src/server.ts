import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRoutes from './Routers/router'

dotenv.config();

const app = express(); 

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }

  app.use(mainRoutes);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true}))



app.listen(process.env.PORT ? parseInt(process.env.PORT) : 1655);

console.log(`Rodando na porta ${process.env.PORT}`);   