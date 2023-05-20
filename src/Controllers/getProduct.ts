import { Request, Response } from "express";
import * as services from '../services/allProducts';

export const getProductId = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const Id = parseInt(id);

        const product = await services.getProducts.getSingleProduc(Id);

        if(product){
            return res.status(200).json(product)
        }
        return res.status(200).json({Erro:'Não existe nenhum produto para ser exibido!'})
        
    } catch (err) {
        return res.status(404).json({Erro:err})
    }

}