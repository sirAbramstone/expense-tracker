import { mutationTree, actionTree } from 'nuxt-typed-vuex';
import { Category } from '~/interfaces/Category';

export const state = () => ({
  categories: [] as Category[],
});

type CategoryModuleState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  addCategory(state: CategoryModuleState, category: Category) {
    state.categories.push(category);
  },

  setCategories(state: CategoryModuleState, categories: Category[]) {
    state.categories = categories;
  },
});

export const actions = actionTree(
  { state },
  {
    async createCategory(
      { commit, rootState },
      { name, limit }: Category
    ): Promise<any> {
      try {
        const { key } = await this.$fireDb
          .ref(`users/${rootState.uid}/categories`)
          .push({ name, limit });

        commit('addCategory', { name, limit, id: key });
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },

    async fetchCategories({ rootState, commit }) {
      const catsObj =
        (
          await this.$fireDb
            .ref(`users/${rootState.uid}/categories`)
            .once('value')
        ).val() ?? {};

      const categories = Object.keys(catsObj).map((key: string) => ({
        ...catsObj[key],
        id: key,
      }));

      commit('setCategories', categories);
    },

    async updateCategory(
      { rootState, dispatch, commit },
      { name, limit, id }: Category
    ) {
      try {
        await this.$fireDb
          .ref(`users/${rootState.uid}/categories`)
          .child(id)
          .update({ name, limit });

        await dispatch('fetchCategories');
      } catch (e) {
        commit('setError', e, { root: true });
        throw e;
      }
    },
  }
);
