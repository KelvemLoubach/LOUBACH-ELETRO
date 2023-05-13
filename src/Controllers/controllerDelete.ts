import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

let prisma = new PrismaClient();

export const deleteProducts = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;

        if (id) {

            const Id = parseInt(id);

            const existingProduct = await prisma.products.findUnique({

                where: { id: Id }
            });

            if(existingProduct){

                const product = await prisma.products.delete({
                    where: { id: Id }
                });

                return res.status(200).json({ Deletado: product });

            }else{

                return res.status(400).json({Error: 'Product not found!'});
            }

        } else {

            return res.status(404).json({ Erro: 'Id not found!' })
        }

    } catch (err) {

        return res.status(400).json(err)
    }
}