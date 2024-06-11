import prisma from "@/server/database/client";
import { IExample } from "@/types/IExample";

const getExamples = async () => {
  return await prisma.examples.findMany();
};

const getExample = async (id: number) => {
  return await prisma.examples.findUnique({
    where: {
      id,
    },
  });
};

const createExample = async (payload: IExample) => {
  const exam = await prisma.examples.create({
    data: {
      title: payload.title,
      createdAt: new Date(),
    },
  });
  return exam;
};

const updateExample = async (payload: IExample, id: number) => {
  const exam = await prisma.examples.update({
    where: {
      id,
    },
    data: {
      title: payload.title,
    },
  });
  return exam;
};

const deleteExample = async (id: number) => {
  const exam = await prisma.examples.delete({
    where: {
      id,
    },
  });
  return exam;
};

export default {
  getExamples,
  getExample,
  createExample,
  updateExample,
  deleteExample,
};
