import { PrismaClient } from "@prisma/client";
import createProductsInterface from '../interfacer&types/interfaces'

const prisma = new PrismaClient();

type dataTypeId = {
    idUserLogin: number,
    idProducts: number
}

export const updateProductsServices = async (userAndProductIdObject: dataTypeId, updateProductsObject: createProductsInterface) => {

    const product = await prisma.products.findFirst({
        where: {
            userId: userAndProductIdObject.idUserLogin,
            id: userAndProductIdObject.idProducts
        }
    })

    if (!product) {
        return
    }


    return await prisma.products.update({
        where: { id: userAndProductIdObject.idProducts },

        data: {
            category: updateProductsObject.category,
            description: updateProductsObject.description,
            guarantee: updateProductsObject.guarantee,
            inStock: updateProductsObject.inStock,
            name: updateProductsObject.name,
            oldPrice: updateProductsObject.oldPrice,
            price: updateProductsObject.price
        }
    })

}

