import { PrismaClient } from "./client/client.ts";
const prisma = new PrismaClient();

const users = ["Ben", "Georgi", "Marcel", "Dejan", "Moritz"];

export async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: { 
        Name: user,
      },
    });
  }
}

if (import.meta.main) {
    await main();
    console.log("Seeding finished.");
}