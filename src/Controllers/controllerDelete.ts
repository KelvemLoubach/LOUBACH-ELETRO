import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

let prisma = new PrismaClient();

export const deleteProducts = async (req:Request, res:Response) => {

    const {id} = req.params;

    const Id = parseInt(id);

    const product = await prisma.products.delete({
        where: {id:Id}
    });

    return res.status(200).json({Deletado:product})
}