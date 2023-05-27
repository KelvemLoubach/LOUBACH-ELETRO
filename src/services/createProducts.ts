import {PrismaClient} from '@prisma/client';
import createProductsInterface from '../interfacer&types/interfaces';

const prisma = new PrismaClient();

export const createProductService = {

    createProduct: async (data:createProductsInterface) => {

        const product = await prisma.products.create({
            data:{
                category:data.category,
                description:data.description,
                name:data.name,
                price:data.price as number,
                guarantee:data.guarantee,
                image1:data.image1,
                image2:data.image2,
                image3:data.image3,
                image4:data.image4,
                inStock:data.inStock,
                oldPrice:data.oldPrice,
                userId:data.userId as number
            }
        })

       return product;
    }
}