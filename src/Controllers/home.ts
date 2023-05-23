import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import * as services from '../services/allProducts'

export const home = async (req:Request, res:Response) =>{
    
    try{
        const idUser = jwt.decode(req.cookies.access_token) as string;
        const id = parseInt(idUser)

        const productsAll = await services.getProducts.getAllProducts(id);
         
        if(!productsAll){
            return res.status(200).json({Erro: `Nenhum produto para ser retornado`});
         }
        console.log(productsAll)
         return res.status(200).json({productsAll});

    }catch(err){
        return res.status(404).json({Erro:err});
    } 
};

export const teste = (req:Request, res: Response) => {
    return res.status(200).json({OK: 'Tudo certo meninão!'})
};