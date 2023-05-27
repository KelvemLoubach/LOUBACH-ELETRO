import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const searchProductAndDelete = async (productId: number) => {

    const productInDatabase = await prisma.products.findUnique({
        where: { id: productId }
    })

    if (productInDatabase) {

        return await prisma.products.delete({
            where: { id: productId }
        });
     
    }

    return productInDatabase
}
