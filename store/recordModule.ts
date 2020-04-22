import { actionTree, mutationTree } from 'nuxt-typed-vuex';
export { Record } from '~/interfaces/Record';

export const state = () => ({
  records: [] as Record<string, any>[],
});

type RecordModuleState = ReturnType<typeof state>;

export const mutations = mutationTree(state, {
  setRecords(state: RecordModuleState, records: Record<string, any>[]) {
    state.records = records;
  },
});

export const actions = actionTree(
  { state },
  {
    async fetchRecords({ rootState, commit }) {
      try {
        const recObj =
          (
            await this.$fireDb
              .ref(`users/${rootState.uid}/records`)
              .once('value')
          )?.val() ?? {};
        const records = Object.keys(recObj).map((key: string) => ({
          ...recObj[key],
          id: key,
        }));

        commit('setRecords', records);
      } catch (e) {
        commit('setError', e, { root: true });
      }
    },

    async createRecord({ rootState, commit }, record: Record<string, string>) {
      try {
        return await this.$fireDb
          .ref(`users/${rootState.uid}/records`)
          .push(record);
      } catch (e) {
        commit('setError', e, { root: true });
      }
    },
  }
);
