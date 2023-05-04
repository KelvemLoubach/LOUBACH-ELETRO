/*
  Warnings:

  - You are about to drop the column `deliveryAvailable` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "deliveryAvailable",
ADD COLUMN     "inStock" BOOLEAN DEFAULT false;
