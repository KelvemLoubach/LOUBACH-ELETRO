-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "deliveryAvailable" BOOLEAN DEFAULT false,
    "color" TEXT,
    "name" TEXT NOT NULL,
    "guarantee" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
