import { Request, Response } from 'express';
import { createUser } from '../interfacer&types/typesSignup'
import { jwtCreated } from '../middlewares/jwt';
import { loginServices } from '../services/login';



export const login = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body as createUser;

        if (!email || !password) {
            return res.status(401).json('Email or password not found.')
        }

        const loginUser = await loginServices(email, password);

        if (loginUser !== undefined && loginUser !== false) {

            const jwt = jwtCreated(loginUser.idUser.toString());

            return res.status(200).json({ OK: `Correct login, jwt: ${jwt}` })

        } else if (loginUser !== false) {

            return res.status(401).json({ Error: 'Unregistered user' });

        }else {

            return res.status(401).json({ Error: 'Incorrect password' })
        }

    } catch (err) {
        res.status(400).json({Erro_login:err})
    }

}