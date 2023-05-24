import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

interface myRequest extends Request {
    userId?: string
};

export const auth = (req: myRequest, res: Response, next: NextFunction) => {

    try {

        if (!req.cookies.access_token) {
            return res.status(401).json('No token found!')
        }

        jwt.verify(req.cookies.access_token,
            process.env.SECRET_KEY as string,
            (error: jwt.VerifyErrors | null, decoded: any | undefined) => {

                if (error) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' })

                req.userId = jwt.decode(req.cookies.access_token) as string;

                console.log(req.userId)
                return next()
            })

    } catch (err) {
        res.status(401).json({ Auth: err })
    }
};



