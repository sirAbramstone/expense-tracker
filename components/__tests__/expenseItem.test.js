import { shallowMount } from '@vue/test-utils'
import ExpenseItem from '@/components/expenseItemF'

const factory = (propsData) => {
  return shallowMount(ExpenseItem, {
    propsData: {
      ...propsData
    }
  })
};

describe('ExpenseItem', () => {
  it('should not display comment if expense item dosn`t have it', () => {
    const wrapper = factory({
      expense: {
        amount: 1000,
        tag: 'Супермаркеты',
        id: '123'
      }
    });

    expect(wrapper.find('.expense-item__comment').exists()).toBeFalsy();
  });

  it('should display comment if expense item has it', () => {
    const wrapper = factory({
      expense: {
        amount: 1000,
        tag: 'Супермаркеты',
        comment: 'I`m here',
        id: '123'
      }
    });

    const comment = wrapper.find('.expense-item__comment');
    expect(comment.exists()).toBeTruthy();
    expect(comment.find('.value').text()).toBe('I`m here');
  });
});
