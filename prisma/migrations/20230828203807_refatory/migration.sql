/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `medias` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `medias` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "medias" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "publications" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "date" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "medias_title_key" ON "medias"("title");

-- CreateIndex
CREATE UNIQUE INDEX "medias_username_key" ON "medias"("username");
