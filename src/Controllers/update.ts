import { Request, Response } from 'express';
import { myRequest} from '../interfacer&types/myRequest'
import { updateProductsServices } from '../services/update';
import createProductsInterface from '../interfacer&types/interfaces'

export const updateProduct = async (req: myRequest, reqExpress:Request, res: Response) => {

    try {

        const productId = reqExpress.params.id
        const userId = req.userId as string;

        const userAndProductIdObject = {
            idUserLogin: parseInt(userId),
            idProducts: parseInt(productId)
        }

        const { oldPrice, name, description, inStock, category, guarantee } = reqExpress.body as createProductsInterface;

        const updateProductsObject = {

            oldPrice,
            name,
            description,
            inStock,
            category,
            guarantee,

        }

        const productsReturnUpdate = await updateProductsServices(userAndProductIdObject, updateProductsObject)

        if (!productsReturnUpdate) {
            return res.status(200).json('Product not found!')
        }

        return res.status(201).json(productsReturnUpdate);

    } catch (error: any) {

        return res.status(404).json({ erro: error.message })
    }

} 