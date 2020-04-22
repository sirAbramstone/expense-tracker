import { actionTree } from 'nuxt-typed-vuex';
import { User } from '~/interfaces/User';

export const state = () => ({});

type AuthModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async login({ commit, dispatch }, { email, password }: User) {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(email, password);
        await dispatch('getUid', null, { root: true });
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },

    async logout({ commit }): Promise<any> {
      await this.$fireAuth.signOut();
      commit('infoModule/clearInfo', null, { root: true });
    },

    async register(
      { rootState, dispatch, commit },
      { email, password, name }: User
    ) {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(email, password);
        await dispatch('getUid', null, { root: true });
        await this.$fireDb.ref(`users/${rootState.uid}/info`).set({
          bill: 10000,
          name,
        });
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },
  }
);
