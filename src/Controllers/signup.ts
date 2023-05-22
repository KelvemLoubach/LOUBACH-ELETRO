import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { jwtCreated } from '../middlewares/jwt';
import { createUser } from '../interfacer&types/typesSignup';
import { z, ZodSchema, ZodString } from 'zod';
import { FindOrCreate } from '../services/signUp';

const emailSchema: ZodString = z.string().email();
const passwordSchema: ZodString = z.string().min(6);

const signUpSchema: ZodSchema<{ email: string; password: string }> = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signup = async (req: Request, res: Response) => {

  try {
    const { email, password } = req.body as createUser;

    if (!email || !password) {

      return res.status(400).json({ Erro: 'Email or password not found.' })
    }

      signUpSchema.parse({ email, password });

      const passwordCript = await bcrypt.hash(password, 15);

      const objectSignUp = {
        email,
        password: passwordCript
      };

      const newUser = await FindOrCreate(objectSignUp as createUser);

      if (!newUser) {

        return res.status(400).json({ Erro: 'Usuário já existe!' })
      }

      const id = newUser.idUser.toString()

      const token = jwtCreated(id)

      return res.status(201).json({token:`${token}`} )
    
  } catch (err:any) {

    return res.status(404).json({ Erro_singup: err.message })
  }

};


