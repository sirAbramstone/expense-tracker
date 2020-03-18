import { mount } from '@vue/test-utils';
import ExpensesList from '@/components/expensesList';

describe('ExpensesList', () => {
  it('should display usual text if expenses list empty', () => {
    const wrapper = mount(ExpensesList, {
      propsData: {
        expenses: []
      }
    });

    expect(wrapper.find('p').text()).toBe('Добавь в меня что-нибудь!')
  });
});
