import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex';

import * as expenseModule from '~/store/expenseModule.ts';
import * as authModule from '~/store/authModule.ts';
import * as infoModule from '~/store/infoModule';

export const state = () => ({
  name: 'expenses tracker',
  error: null,
});

type RootState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async fetchCurrency(): Promise<any> {
      const key = this.$env.FixerKey;
      console.log(this.$env);
      const res = await fetch(
        `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`
      );
      return await res.json();
    },
  }
);

export const mutations = mutationTree(state, {
  setError(state, error) {
    state.error = error;
  },

  clearError(state) {
    state.error = null;
  },
});

export const getters = {
  error: (state: RootState) => state.error,
};

export const accessorType = getAccessorType({
  mutations,
  getters,
  state,
  modules: {
    expenseModule,
    authModule,
    infoModule,
  },
});
