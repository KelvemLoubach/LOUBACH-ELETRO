import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

export const auth = (req: Request, res: Response, next: NextFunction) => {

    try {

        if (!req.cookies.access_token) {
            return res.status(403).json('Not token found!')
        }

        const token = req.cookies.access_token;
            
           const decoded = jwt.verify(token, process.env.SECRET_KEY as string)
             
             decoded !== 'string' ? next() : '';

    } catch (err) {
        res.status(400).json({ Auth: err })
    }

};



