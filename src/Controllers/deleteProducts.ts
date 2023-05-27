
import { Request, Response } from "express";
import { searchProductAndDelete } from '../services/deleteProduct'

export const deleteProducts = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        const productId = parseInt(id);

        const returnSearchProductFunction = await searchProductAndDelete(productId)

        if (!returnSearchProductFunction) {
            return res.status(200).json('Product not found in database')
        }

        return res.status(200).json({ ProductDelet: returnSearchProductFunction })

    } catch (error: any) {

        return res.status(400).json(error.message)
    }
}