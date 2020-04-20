import { mutationTree, actionTree } from 'nuxt-typed-vuex';
import { Category } from '~/interfaces/Category';

export const state = () => ({
  categories: [] as Category[],
});

type CategoryModuleState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  addCategory(state, category: Category) {
    state.categories.push(category);
  },
});

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

        commit('addCategory', { name, limit, id: key });
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },
  }
);
