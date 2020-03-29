import { shallowMount } from '@vue/test-utils';
import ExpensesList from '~/components/expensesList';

const factory = (propsData) => {
  return shallowMount(ExpensesList, {
    propsData: {
      ...propsData
    }
  })
};

describe('ExpensesList', () => {
  it('should display usual text if expenses list empty', () => {
    const wrapper = factory({ expenses: [] });

    expect(wrapper.find('.notify').text()).toBe('Добавь в меня что-нибудь!');
    expect(wrapper.find('.expenses__list').exists()).toBeFalsy();
  });

  it('should display expenses list if it received expenses prop', () => {
    const wrapper = factory({
      expenses: [{
        amount: 1000,
        tag: 'Супермаркеты',
        id: '123'
      }]
    });

    expect(wrapper.find('.expenses__list').exists()).toBeTruthy();
    expect(wrapper.find('.notify').exists()).toBeFalsy();
  });
});
