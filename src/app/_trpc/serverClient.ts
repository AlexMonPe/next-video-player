import { appRouter } from '@/server';

import { httpBatchLink } from '@trpc/client';

//Create caller to support SSR

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api/trpc',
    }),
  ],
});
