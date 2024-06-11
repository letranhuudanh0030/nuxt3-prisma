-- CreateTable
CREATE TABLE "Examples" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Examples_pkey" PRIMARY KEY ("id")
);
