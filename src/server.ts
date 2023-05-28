import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import mainRoutes from './Routers/router'

dotenv.config();

const app = express(); 

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
  }

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true}))

app.use(mainRoutes);

app.listen(process.env.PORT ? parseInt(process.env.PORT) : 1655);

console.log(`Rodando na porta ${process.env.PORT}`);   