"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.getProducts = {
    getAllProducts: async () => {
        return await prisma.products.findMany();
    },
    getSingleProduc: async (id) => {
        return await prisma.products.findUnique({
            where: { id: id }
        });
    }
};
