import { getAccessorType, mutationTree, actionTree } from 'nuxt-typed-vuex';

import * as expenseModule from '~/store/expenseModule';
import * as authModule from '~/store/authModule';
import * as infoModule from '~/store/infoModule';
import * as categoryModule from '~/store/categoryModule';
import * as recordModule from '~/store/recordModule';

export const state = () => ({
  uid: null,
  error: null,
});

export type RootState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async fetchCurrency(): Promise<any> {
      const key = this.$env.FixerKey;
      const res = await fetch(
        `http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`
      );
      return await res.json();
    },

    getUid({ commit }): void {
      const user = this.$fireAuth.currentUser;
      if (user) {
        commit('setUid', user.uid);
      }
    },
  }
);

export const mutations = mutationTree(state, {
  setUid(state, uid) {
    state.uid = uid;
  },

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
    categoryModule,
    recordModule,
  },
});
