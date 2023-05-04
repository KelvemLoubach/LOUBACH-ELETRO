import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

import mainRouters from './Routers/router'

dotenv.config();

const app = express(); 

app.use(cors());
app.use(express.static(path.join(__dirname, './uploads/img')));
app.use(express.urlencoded({ extended: true}))
//app.use(express.json());

app.use(mainRouters);

app.listen(process.env.PORT);

console.log(`Rodando na porta ${process.env.PORT}`);  