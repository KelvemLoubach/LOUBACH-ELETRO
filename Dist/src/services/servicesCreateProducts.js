"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.createProductService = {
    createProduct: async (data) => {
        const product = await prisma.products.create({
            data
        });
        return product;
    }
};
