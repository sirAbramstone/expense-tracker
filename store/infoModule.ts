import { actionTree, mutationTree } from 'nuxt-typed-vuex';

export const state = () => ({
  info: {},
});

type InfoModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async fetchInfo({ rootState, commit }): Promise<any> {
      try {
        const info = (
          await this.$fireDb.ref(`/users/${rootState.uid}/info`).once('value')
        ).val();

        commit('setInfo', info);
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },

    async updateInfo({ rootState, state, commit }, toUpdate) {
      try {
        const updatedData = { ...state.info, ...toUpdate };
        await this.$fireDb
          .ref(`users/${rootState.uid}/info`)
          .update(updatedData);

        commit('setInfo', updatedData);
      } catch (e) {
        commit('setError', e, { root: true });
      }
    },
  }
);

export const mutations = mutationTree(state, {
  setInfo(state: InfoModuleState, info: any): void {
    state.info = info;
  },
  clearInfo(state): void {
    state.info = {};
  },
});
