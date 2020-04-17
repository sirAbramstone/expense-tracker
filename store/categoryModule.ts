import { actionTree } from 'nuxt-typed-vuex';
import { Category } from '~/interfaces/Category';

export const state = () => ({});

type CategoryModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async createCategory(
      { commit, dispatch },
      { name, limit }: Category
    ): Promise<any> {
      try {
        const uid = await dispatch('getUid', null, { root: true });
        const { key } = await this.$fireDb
          .ref(`users/${uid}/categories`)
          .push({ name, limit });

        return { name, limit, id: key };
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },
  }
);
