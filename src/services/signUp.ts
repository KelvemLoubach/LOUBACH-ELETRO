import { PrismaClient } from "@prisma/client";
import { createUser } from '../interfacer&types/typesSignup';

const prisma = new PrismaClient();

export const FindOrCreate = async (data:createUser) => {

    const user = await prisma.user.findUnique({
        where:{email:data.email}
    });

    if(!user){
        const userCreate = await prisma.user.create({data})
        return userCreate
    }
    
    return null;
}