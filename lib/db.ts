// db.ts
import { PrismaClient } from "./generated/prisma/client.js";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type GlobalThisWithPrisma = typeof globalThis & {
  prisma?: ReturnType<typeof prismaClientSingleton>;
};

const globalForPrisma = globalThis as GlobalThisWithPrisma;

export const db = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;