import { actionTree } from 'nuxt-typed-vuex';
export { Record } from '~/interfaces/Record';

export const state = () => ({});

type RecordModuleState = ReturnType<typeof state>;

export const actions = actionTree(
  { state },
  {
    async createRecord({ dispatch, commit }, record: Record<string, string>) {
      try {
        const uid = await dispatch('getUid', null, { root: true });
        return await this.$fireDb.ref(`users/${uid}/records`).push(record);
      } catch (e) {
        commit('setError', e, { root: true });
      }
    },
  }
);
