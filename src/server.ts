import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';

import mainRouters from './Routers/router'

dotenv.config();

const app = express(); 

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true}))
//app.use(express.json());


app.use(mainRouters);

app.listen(process.env.PORT ? parseInt(process.env.PORT) : 1655);

console.log(`Rodando na porta ${process.env.PORT}`);   