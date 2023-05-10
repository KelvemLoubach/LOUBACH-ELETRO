import { Request, Response } from "express";
import * as services from '../services/servicesAllProducts'

export const home = async (req:Request, res:Response) =>{
    
    try{
        const productsAll = await services.getProducts.getAllProducts();
         
        if(!productsAll){
            return res.status(200).json({Erro: `Nenhum produto para ser retornado`});
         }
        console.log(productsAll)
         return res.status(200).json({productsAll});

    }catch(err){
        return res.status(404).json(err);
    }
  
};

export const teste = (req:Request, res: Response) => {
    return res.status(200).json({OK: 'Tudo certo meninão!'})
};