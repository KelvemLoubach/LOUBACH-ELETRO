import { PrismaClient } from "@prisma/client";
import { compare } from 'bcrypt';

const prisma = new PrismaClient();

export const loginServices = async (email:string, password:string) =>{

    const userAlreadyRegistered= await prisma.user.findUnique({
        where:{email}
    })

    if(userAlreadyRegistered){

        const match = await compare(password, userAlreadyRegistered.password);
      
        return match ? userAlreadyRegistered : false;          
    }

}