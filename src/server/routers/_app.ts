import { createRouter } from '../createRouter';
import superjson from 'superjson';
import { characterRouter } from './character';
import { optionsRouter } from './options';

export const appRouter = createRouter()
  .transformer(superjson)
  .query('healthy', {
    async resolve() {
      return 'yay!';
    },
  })
  .merge('characters.', characterRouter)
  .merge('options.', optionsRouter);

export type AppRouter = typeof appRouter;
