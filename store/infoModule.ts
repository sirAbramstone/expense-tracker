import { actionTree, mutationTree } from 'nuxt-typed-vuex';

export const state = () => ({
  info: null,
});

type InfoModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async fetchInfo({ dispatch, commit }): Promise<any> {
      try {
        const uid = await dispatch('getUid', null, { root: true });
        const info = (
          await this.$fireDb.ref(`/users/${uid}/info`).once('value')
        ).val();

        commit('setInfo', info);
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },
  }
);

export const mutations = mutationTree(state, {
  setInfo(state: InfoModuleState, info: any): void {
    state.info = info;
  },
  clearInfo(state): void {
    state.info = null;
  },
});
