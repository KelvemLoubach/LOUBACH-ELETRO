import { PrismaClient } from "@prisma/client";
import { compare } from 'bcrypt';

const prisma = new PrismaClient();

export const loginServices = async (email:string, password:string) =>{

    const registeredUser= await prisma.user.findUnique({
        where:{email}
    })

    if(registeredUser){

        const match = await compare(password, registeredUser.password);
        console.log(match)
        return match ? registeredUser : false;          
    }

}