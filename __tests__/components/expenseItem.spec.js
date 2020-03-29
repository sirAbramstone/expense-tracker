import { shallowMount } from '@vue/test-utils'
import ExpenseItem from '~/components/expenseItemF'

const factory = (propsData) => {
  return shallowMount(ExpenseItem, {
    propsData: {
      ...propsData
    }
  })
};

const expense = {
  amount: 1000,
  tag: 'Супермаркеты',
  id: '123'
};

describe('ExpenseItem', () => {
  it('should not display comment if expense item dosn`t have it', () => {
    const wrapper = factory({ expense });

    expect(wrapper.find('.expense-item__comment').exists()).toBeFalsy();
  });

  it('should display comment if expense item has it', () => {
    expense['comment'] = 'I`m here';

    const wrapper = factory({ expense });

    const commentEl = wrapper.find('.expense-item__comment');
    expect(commentEl.exists()).toBeTruthy();
    expect(commentEl.find('.value').text()).toBe('I`m here');
  });
});
