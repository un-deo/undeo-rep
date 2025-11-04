import { PrismaClient } from "./client/client.ts";
const prisma = new PrismaClient();

//const class_users = ["Ben", "Georgi", "Marcel", "Dejan", "Moritz"];
const seed_users = [
  { name: "Ben", email: "ben@example.com", password: "abc123" },
  { name: "Georgi", email: "Georgi@example.com", password: "abc123" },
  { name: "Marcel", email: "Marcel@example.com", password: "abc123" }
];
 

const seed_posts = [{
  title: "hello world",
  content: "guten tag",
  username: "Marcel"
},
{
  title: "hello mars",
  content: "its cold",
  username: "Georgi"
  },
{
  title: "Guten Morgen",
  content: "hab hunger",
  username: "Georgi"
  },
{
  title: "Notebook",
  content: "dell hat bloede stecker",
  username: "Ben"
  },
{
  title: "Gruene Giesskanne",
  content: "neben mir",
  username: "Gerogi"
}]


export async function main() {
  for (const user of seed_users) {
    await prisma.user.create({
      data: user
    });
  }
  for (const post of seed_posts) { 
    await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        user: { connect: { name: post.username } }
      }
    })
  }
}
  

if (import.meta.main) {
    await main();
    console.log("Seeding finished.");
}