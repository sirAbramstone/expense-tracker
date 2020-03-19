import { shallowMount } from '@vue/test-utils';
import ExpensesList from '@/components/expensesList';

describe('ExpensesList', () => {
  it('should display usual text if expenses list empty', () => {
    const wrapper = shallowMount(ExpensesList, {
      propsData: {
        expenses: []
      }
    });

    expect(wrapper.find('.notify').text()).toBe('Добавь в меня что-нибудь!');
    expect(wrapper.find('.expenses__list').exists()).toBeFalsy();
  });

  it('should display expense item if expenses list contains it', () => {
    const wrapper = shallowMount(ExpensesList, {
      propsData: {
        expenses: [{
          amount: 1000,
          tag: 'Супермаркеты',
          id: '123'
        }]
      }
    });

    const expenseItem = wrapper.find('.expenses__list-item');
    expect(expenseItem.exists()).toBeTruthy();
    expect(expenseItem.find('.amount .value').text()).toBe('1000 руб.');
    expect(expenseItem.find('.tag .value').text()).toBe('Супермаркеты');
  });

  it('should not display comment if expense item dosn`t have it', () => {
    const wrapper = shallowMount(ExpensesList, {
      propsData: {
        expenses: [{
          amount: 1000,
          tag: 'Супермаркеты',
          id: '123'
        }]
      }
    });

    const expenseItem = wrapper.find('.expenses__list-item');
    expect(expenseItem.find('.comment').exists()).toBeFalsy();
  });

  it('should display comment if expense item has it', () => {
    const wrapper = shallowMount(ExpensesList, {
      propsData: {
        expenses: [{
          amount: 1000,
          tag: 'Супермаркеты',
          comment: 'I`m here',
          id: '123'
        }]
      }
    });

    const expenseItem = wrapper.find('.expenses__list-item');
    const comment = expenseItem.find('.comment');
    expect(comment.exists()).toBeTruthy();
    expect(comment.find('.value').text()).toBe('I`m here');
  });
});
