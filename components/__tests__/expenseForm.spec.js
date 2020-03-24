import { createLocalVue, shallowMount } from '@vue/test-utils';
import ExpenseForm from '@/components/expenseForm';
import VueCompositionApi from '@vue/composition-api';
import Vuelidate from 'vuelidate';
import useExpenseForm from '@/compositions/useExpenseForm';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);
localVue.use(Vuelidate);

describe('ExpenseForm', () => {
  it('should create event after submit form', function() {
    const wrapper = shallowMount(ExpenseForm, {
      localVue
    });

    wrapper.find('[data-amount]').setValue(1000);
    wrapper.find('[data-comment]').setValue('hi');
    wrapper.find('#t1').setChecked(true);

    wrapper.vm.submit();
    console.log(wrapper.emitted());
  });
});
