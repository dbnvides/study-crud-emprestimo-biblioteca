/*
  Warnings:

  - You are about to drop the column `avaliable` on the `Book` table. All the data in the column will be lost.
  - Added the required column `available` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "avaliable",
ADD COLUMN     "available" BOOLEAN NOT NULL;
