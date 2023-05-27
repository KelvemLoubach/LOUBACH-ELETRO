import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const getProducts =  {

     getAllProducts: async (id:number)=> {
         return await prisma.products.findMany({
            where:{userId:id}
         })
    },

    getSingleProduc: async (id:number) => {

        return await prisma.products.findUnique({
            where:{id:id}
        })
       
      
    }

}; 