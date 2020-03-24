import { getAccessorType } from 'nuxt-typed-vuex';

import * as expenseModule from '~/store/expenseModule.ts';

export const state = () => ({
  name: 'expenses tracker',
});

type RootState = ReturnType<typeof state>;

export const accessorType = getAccessorType({
  state,
  modules: {
    expenseModule,
  },
});
