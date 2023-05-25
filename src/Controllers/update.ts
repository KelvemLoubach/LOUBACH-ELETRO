import { Request, Response } from 'express';
import {updateProductsServices } from '../services/update';


interface myRequest extends Request {
    userId?: string
}

export const updateProduct = async (req:myRequest, res:Response) =>{

    try{

        const idProducts = req.params.id
        const iduser = req.userId as string;
    
        console.log(req.userId+'<----->')
    
        const id = {
            idUserLogin: parseInt(iduser),
            idProducts: parseInt(idProducts)
        }
    
        const productsReturnUpdate = await updateProductsServices(id);

        if(!productsReturnUpdate){
            return res.status(400).json({Error: 'Product not found.'})
        }

        
    

    }catch(error){

    }

}