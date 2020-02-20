import { ref } from '@vue/composition-api'
import { Expense } from '~/interfaces/Expense'

export function useExpenses () {
  const expenses = ref<Expense[]>([])

  const addExpense = (expense: Expense): void => {
    expenses.value.push(expense)
  }

  return { expenses, addExpense }
}
