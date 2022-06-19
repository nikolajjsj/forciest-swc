import { z } from 'zod';
import { createRouter } from '../createRouter';

import allCharacters from '../data/characters.json';

const MAX_ID = 88;
// const URL = 'https://swapi.dev/api/people/';

const Option = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
});
export type Option = z.infer<typeof Option>;

const randomId = (prevId?: number): number => {
  const id = Math.floor(Math.random() * MAX_ID) + 1;
  if (id !== prevId) {
    return id;
  }
  return randomId(prevId);
};

export const optionsRouter = createRouter().query('get-two-characters', {
  async resolve() {
    const options: Option[] = [...allCharacters];

    const firstId = randomId();
    const secondId = randomId(firstId);

    const first = options[firstId - 1];
    const second = options[secondId - 1];

    return { first, second };
  },
});
