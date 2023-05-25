import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

interface myRequest extends Request {
    userId?: string
}

export const auth = (req: myRequest, res: Response, next: NextFunction) => {

    try {

        if (!req.cookies.access_token) {
            return res.status(401).json('No token found!')
        }

        // Função verify do jwt, recebe dois parâmetros e uma função de callback, primeiro parâmetro é o token recebido dos cookies,
        // segundo parâmetro é a secret key. A função de callback recebe dois parâmetros, o primeiro é error que é do tipo 'jwt.VerifyErrors' ou 
        // null, o segundo parâmetro decoded é do tipo any. A função executa uma condicional if para verificar se erro existe, se existir
        // retorna o status 401, caso erro não exista atribuimos o parametro decoded que contêm o id do usuário a variavel userId do objeto req,
        // depois prosseguimos para a próxima pilha de execução do express que nesse caso é a rota desejada.
        jwt.verify(req.cookies.access_token,
            process.env.SECRET_KEY as string,
            (error: jwt.VerifyErrors | null, decoded: any) => {

                if (error) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' })

                req.userId = decoded

                console.log(req.userId)
                return next()
            })

    } catch (err) {
        res.status(401).json({ Auth: err })
    }
};



