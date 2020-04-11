import { actionTree } from 'nuxt-typed-vuex';
import { User } from '~/interfaces/User';

export const state = () => ({});

type AuthModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async login(
      { commit, dispatch, getters, state },
      { email, password }: User
    ) {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(email, password);
      } catch (e) {
        console.error(e);
      }
    },
  }
);
