import { useAccessor, actionTree, mutationTree } from 'nuxt-typed-vuex';
import * as authModule from '~/store/authModule';

export const state = () => ({
  info: null,
});

type InfoModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async fetchInfo({ commit }): Promise<any> {
      const auth = useAccessor(this.app.store, authModule, 'authModule');
      try {
        const uid = await auth.getUid();
        const info = (
          await this.$fireDb.ref(`/users/${uid}/info`).once('value')
        ).val();

        commit('setInfo', info);
      } catch (e) {
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
