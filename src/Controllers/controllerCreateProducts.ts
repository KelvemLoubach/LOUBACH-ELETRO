import { Request, Response } from "express";
import * as services from '../services/servicesCreateProducts';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import sharp from 'sharp';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    region: 'sa-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    }
};

const clientS3 = new S3Client(config);

export const createProducts = async (req: Request, res: Response) => {

    try {

        const { oldPrice, name, description, price, inStock, category, guarantee } = req.body;

        if (oldPrice && name && description && price && inStock && category && guarantee) {

            const photos = req.files as { image: Express.Multer.File[] };
            let image = [];

            for (let i = 0; i < photos.image.length; i++) {

                const namePhoto = photos.image[i].fieldname + Math.floor(Math.random() * 10000000);

                const bucket = {
                    Bucket: 'photosnodeapi',
                    Key: namePhoto,
                    Body: await sharp(photos.image[i].buffer).resize(385,595),
                    ACL: 'public-read',
                    ContentType: photos.image[i].originalname
                }

                image[i] = `https://photosnodeapi.s3.sa-east-1.amazonaws.com/${namePhoto}`;

                const data = await clientS3.send(new PutObjectCommand(bucket));



            };
            const image1 = image[0];
            const image2 = image[1];
            const image3 = image[2];
            const image4 = image[3];

            const newProduct = await services.createProductService.createProduct({
                oldPrice,
                price: parseInt(price),
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

        } else {
            return res.status(404).json({ Erro: 'Preencha todos os campos do cadastro!' })
        }

    } catch (err) {
        return res.status(401).json({ Erro: err })
    }

}

