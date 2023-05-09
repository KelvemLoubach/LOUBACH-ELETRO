"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducts = void 0;
const services = __importStar(require("../services/servicesCreateProducts"));
const client_s3_1 = require("@aws-sdk/client-s3");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    region: 'sa-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
};
const clientS3 = new client_s3_1.S3Client(config);
const createProducts = async (req, res) => {
    try {
        const { oldPrice, name, description, price, inStock, category, guarantee } = req.body;
        const photos = req.files;
        let image = [];
        for (let i = 0; i < photos.image.length; i++) {
            const namePhoto = photos.image[i].fieldname + Math.floor(Math.random() * 10000000);
            const bucket = {
                Bucket: 'photosnodeapi',
                Key: namePhoto,
                Body: photos.image[i].buffer,
                ACL: 'public-read',
                ContentType: photos.image[i].originalname
            };
            image[i] = `https://photosnodeapi.s3.sa-east-1.amazonaws.com/${namePhoto}`;
            const data = await clientS3.send(new client_s3_1.PutObjectCommand(bucket));
        }
        ;
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
        return res.status(201).json({ OK: 'Tudo correto por aqui!' });
    }
    catch (err) {
        return res.status(401).json({ Errop: err });
    }
};
exports.createProducts = createProducts;
