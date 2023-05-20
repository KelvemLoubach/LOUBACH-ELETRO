import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
import { verify } from 'jsonwebtoken'



dotenv.config();

export const auth = (req: Request, res: Response, next: NextFunction) => {

    try {

        if (!req.headers.authorization) {
            return res.status(400).json('Not token found!')
        }

            const [authType, token] = req.headers.authorization.split(' ')

            if (authType !== 'Bearer') {
                return res.status(401).json({ err: 'erro no auth' })              
            }

            const decoded = verify(token, process.env.SECRET_KEY as string)
             
             decoded !== 'string' ? next() : '';

        

    } catch (err) {
        res.status(400).json({ Auth: err })
    }

}