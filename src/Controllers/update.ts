import { Request } from 'express';
import {updateProductsServices } from '../services/update';


interface myRequest extends Request {
    userId?: string
};

export const updateProduct = async (req:myRequest) =>{

    const idProducts = req.params.id
    const iduser = req.userId as string;

    const id = {
        idUserLogin: parseInt(iduser),
        idProducts: parseInt(idProducts)
    }

    const productsReturnUpdate = await updateProductsServices(id)


}