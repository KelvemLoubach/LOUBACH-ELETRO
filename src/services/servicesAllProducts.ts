import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()


export const getProducts =  {

     getAllProducts: async ()=> {
         return await prisma.products.findMany()
    },

    getSingleProduc: async (id:number) => {

        return await prisma.products.findUnique({
            where:{id:id}
        })
       
      
    }

}; 