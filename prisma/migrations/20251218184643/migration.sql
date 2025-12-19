/*
  Warnings:

  - Added the required column `productId` to the `UserProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserProducts" ADD COLUMN     "productId" INTEGER NOT NULL;
