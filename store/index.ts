import { getAccessorType } from 'nuxt-typed-vuex';

import * as expenseModule from '~/store/expenseModule.ts';
import * as authModule from '~/store/authModule.ts';

export const state = () => ({
  name: 'expenses tracker',
});

type RootState = ReturnType<typeof state>;

export const accessorType = getAccessorType({
  state,
  modules: {
    expenseModule,
    authModule,
  },
});
