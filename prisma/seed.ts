import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const firstCharId = 1;
  await prisma.character.upsert({
    where: {
      charId: firstCharId,
    },
    create: {
      charId: firstCharId,
      likes: 1,
    },
    update: {},
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
