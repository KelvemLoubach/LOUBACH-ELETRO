import { Request, Response } from "express";
import * as services from '../services/createProducts';
import { configs3 } from "../middlewares/s3Client";
import createProductsInterface from '../interfacer&types/interfaces'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

interface myRequest extends Request {
    userId?: string
}

const clientS3 = new S3Client(configs3);

export const createProducts = async (req: myRequest, res: Response) => {

    try {

        const { oldPrice, name, description, inStock, category, guarantee } = req.body as createProductsInterface;
        const { price } = req.body;
        const priceInt = parseInt(price);

        if (!oldPrice || !name || !description || !price || !inStock || !category || !guarantee) {

            return res.status(404).json({ Erro: 'Preencha todos os campos do cadastro!' })
        }

        const photos = req.files as { image: Express.Multer.File[] };
        const image = [];

        for (let i = 0; i < photos.image.length; i++) {

            const namePhoto = photos.image[i].fieldname + Math.floor(Math.random() * 10000000);

            const bucket = {
                Bucket: process.env.BUCKET_S3,
                Key: namePhoto,
                Body: photos.image[i].buffer,
                ACL: 'public-read',
                ContentType: photos.image[i].originalname
            }

            image[i] = `${process.env.URL_S3}${namePhoto}`;

            await clientS3.send(new PutObjectCommand(bucket));

        }

        const image1 = image[0];
        const image2 = image[1];
        const image3 = image[2];
        const image4 = image[3];

        const id = req.userId as string;

        await services.createProductService.createProduct({

            userId: parseInt(id),
            oldPrice,
            price: priceInt,
            inStock,
            guarantee,
            description,
            name,
            category,
            image1,
            image2,
            image4,
            image3,

        });

        return res.status(201).json({ Certo: 'Tudo correto por aqui!' });

    } catch (error:any) {

        return res.status(401).json({ CreateProducts_controller: error.message })
    }

}

