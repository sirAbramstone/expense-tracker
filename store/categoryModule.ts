import { mutationTree, actionTree, getterTree } from 'nuxt-typed-vuex';
import { Category } from '~/interfaces/Category';
import { Record } from '~/interfaces/Record';
import { RootState } from '~/store/index';

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

export const getters = getterTree(state, {
  progressCats(
    state: CategoryModuleState,
    _getters: unknown,
    rootState: RootState
  ) {
    if (!rootState.recordModule.records.length) return [];

    return state.categories.map((cat) => {
      const spend = rootState.recordModule.records
        .filter((r: Record) => r.categoryId === cat.id && r.type === 'outcome')
        .reduce<number>((sum: number, { amount }: Record) => sum + amount, 0);

      const percent = (100 * spend) / cat.limit;
      const progressPercent = percent > 100 ? 100 : percent;
      const left = cat.limit - spend;

      return {
        ...cat,
        progressPercent,
        spend,
        left,
      };
    });
  },
});
