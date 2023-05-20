import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const jwtCreated =  (id:string) => {
    return  jwt.sign(id, process.env.SECRET_KEY as string)
     
}