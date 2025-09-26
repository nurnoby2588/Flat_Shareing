/*
  Warnings:

  - Changed the type of `squareFeet` on the `flats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."flats" DROP COLUMN "squareFeet",
ADD COLUMN     "squareFeet" INTEGER NOT NULL;
