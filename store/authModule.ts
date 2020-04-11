import { actionTree } from 'nuxt-typed-vuex';
import { User } from '~/interfaces/User';

export const state = () => ({});

type AuthModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async login(_ctx, { email, password }: User) {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(email, password);
      } catch (e) {
        console.error(e);
      }
    },
    async logout() {
      await this.$fireAuth.signOut();
    },
  }
);
