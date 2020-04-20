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

  setCategories(state, categories: Category[]) {
    state.categories = categories;
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

    async fetchCategories({ dispatch, commit }) {
      const uid = await dispatch('getUid', null, { root: true });
      const catsObj =
        (
          await this.$fireDb.ref(`users/${uid}/categories`).once('value')
        ).val() ?? {};

      const categories = Object.keys(catsObj).reduce<Category[]>(
        (cats, key: string): Category[] => {
          cats.push({
            name: catsObj[key].name,
            limit: catsObj[key].limit,
          });
          return cats;
        },
        []
      );

      commit('setCategories', categories);
    },
  }
);
