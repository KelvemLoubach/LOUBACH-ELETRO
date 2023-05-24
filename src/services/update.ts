import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type data = {
    idUserLogin:number,
    idProducts:number
}

export const updateProductsServices = async (ids:data) =>{

    return await prisma.products.findUnique({
        where:{}
    })

}