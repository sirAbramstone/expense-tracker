import { actionTree } from 'nuxt-typed-vuex';
import { User } from '~/interfaces/User';

export const state = () => ({});

type AuthModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async login({ commit }, { email, password }: User) {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },

    async logout({ commit }): Promise<any> {
      await this.$fireAuth.signOut();
      commit('clearInfo', null, { root: true });
    },

    async register({ dispatch, commit }, { email, password, name }: User) {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await this.$fireDb.ref(`users/${uid}/info`).set({
          bill: 10000,
          name,
        });
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },

    getUid(): string | null {
      const user = this.$fireAuth.currentUser;
      return user ? user.uid : null;
    },
  }
);

export const namespaced = true;
