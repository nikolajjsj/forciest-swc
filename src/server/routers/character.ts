// https://swapi.dev/api/

import { Prisma } from '@prisma/client';
import { prisma } from '~/server/prisma';
import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server/dist/declarations/src/TRPCError';

const defaultCharacterSelect = Prisma.validator<Prisma.CharacterSelect>()({
  charId: true,
  likes: true,
  createdAt: true,
  updatedAt: true,
});

export const characterRouter = createRouter()
  .query('byId', {
    input: z.object({ id: z.string() }),
    async resolve({ input }) {
      const { id } = input;
      const char = await prisma.character.findUnique({
        where: { id },
        select: defaultCharacterSelect,
      });
      if (!char) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No post with id '${id}'`,
        });
      }
      return char;
    },
  })
  // update
  .mutation('edit', {
    input: z.object({
      id: z.string().uuid(),
      data: z.object({
        title: z.string().min(1).max(32).optional(),
        text: z.string().min(1).optional(),
      }),
    }),
    async resolve({ input }) {
      const { id, data } = input;
      const char = await prisma.character.update({
        where: { id },
        data,
        select: defaultCharacterSelect,
      });
      return char;
    },
  });
