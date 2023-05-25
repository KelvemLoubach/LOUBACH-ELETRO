import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type data = {
    idUserLogin:number,
    idProducts:number
}

export const updateProductsServices = async (dataId:data) =>{

    return await prisma.products.findFirst({
        where:{
            userId:dataId.idUserLogin,
            id:dataId.idProducts
        }
    })

}