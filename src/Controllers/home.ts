import { Request, Response } from "express";
import * as services from '../services/allProducts';

interface myRequest extends Request {
    userId?: string;
}


export const home = async (req:myRequest, res:Response) =>{
    
    try{
        const userId = req.userId as string;

        const id = parseInt(userId)

        const productsAll = await services.getProducts.getAllProducts(id);
         
        if(!productsAll){
            return res.status(200).json({Erro: `Nenhum produto para ser retornado`});
         }
     
         return res.status(200).json({productsAll});

    }catch(error: any){
        return res.status(404).json({Erro:error.message});
    } 
};

export const teste = (req:Request, res: Response) => {
    return res.status(200).json({OK: 'Tudo certo meninão!'})
};