import {PrismaClient} from '@prisma/client';
import createProductsInterface from '../interfacer&types/interfaces';

const prisma = new PrismaClient();

export const createProductService = {

    createProduct: async (data:createProductsInterface) => {

        const product = await prisma.products.create({
            data
        })

       return product;
    }
}