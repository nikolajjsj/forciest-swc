import { createRouter } from '../createRouter';
import superjson from 'superjson';
import { characterRouter } from './character';

export const appRouter = createRouter()
  .transformer(superjson)
  .query('healthy', {
    async resolve() {
      return 'yay!';
    },
  })
  .merge('characters.', characterRouter);

export type AppRouter = typeof appRouter;
