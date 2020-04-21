import { actionTree, mutationTree } from 'nuxt-typed-vuex';

export const state = () => ({});

type RecordModuleState = ReturnType<typeof state>;

export const actions = actionTree({ state }, {
  async createRecord({dispatch, commit}, record) {

  }
});
