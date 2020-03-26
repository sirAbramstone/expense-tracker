import { createLocalVue, shallowMount } from '@vue/test-utils';
import merge from 'lodash.merge';
import ExpenseForm from '@/components/expenseForm';
import CompositionApi from '@vue/composition-api';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuelidate);

function createWrapper(overrides) {
  const defaultMountingOptions = {
    localVue
  };
  return shallowMount(ExpenseForm, merge(defaultMountingOptions, overrides));
}

describe('ExpenseForm', () => {
  let wrapper;
  const dataWithoutId = ({ id, ...data }) => data;

  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('should after the user submit button $v.$invalid return true', () => {
    wrapper.find('button').trigger('submit');

    expect(wrapper.vm.$v.$invalid).toBeTruthy();
  });

  it('should create event after the user submit button', async () => {
    wrapper.setData({ form: { amount: 1000, comment: 'hi', tag: 'супермаркеты' } });

    wrapper.vm.submit();
    expect(dataWithoutId(wrapper.emitted().add[0][0]))
      .toEqual({ amount: 1000, comment: 'hi', tag: 'супермаркеты' });
  });
});
