import { mount } from '@vue/test-utils';
import ExpensesList from '@/components/expensesList';

describe('ExpensesList', () => {
  it('should display usual text if expenses list empty', () => {
    const wrapper = mount(ExpensesList, {
      propsData: {
        expenses: []
      }
    });

    expect(wrapper.find('.notify').text()).toBe('Добавь в меня что-нибудь!')
  });

  it('should display expense item if expenses list contains it', () => {
    const wrapper = mount(ExpensesList, {
      propsData: {
        expenses: [{
          amount: 1000,
          tag: 'Супермаркеты',
          id: '123'
        }]
      }
    });

    const expenseItem = wrapper.find('.expenses__list-item');
    expect(expenseItem.exists()).toBe(true);
    expect(expenseItem.find('.amount .value').text()).toBe('1000 руб.');
    expect(expenseItem.find('.tag .value').text()).toBe('Супермаркеты');
  });

  it('should not display comment if expense item dosn`t have it', () => {
    const wrapper = mount(ExpensesList, {
      propsData: {
        expenses: [{
          amount: 1000,
          tag: 'Супермаркеты',
          id: '123'
        }]
      }
    });

    const expenseItem = wrapper.find('.expenses__list-item');
    expect(expenseItem.find('.comment').exists()).toBe(false);
  });

  it('should display comment if expense item has it', () => {
    const wrapper = mount(ExpensesList, {
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
    expect(comment.exists()).toBe(true);
    expect(comment.find('.value').text()).toBe('I`m here');
  });
});
