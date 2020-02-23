import { computed, SetupContext } from '@vue/composition-api'
import { Expense } from '~/interfaces/Expense'

export function useExpenses (props: any, {root: {$accessor}} : SetupContext) {
  const expenses =  computed(() => $accessor.expense.expenses)

  const addExpense = (expense: Expense): void => {
    $accessor.expense.addExpense(expense)
  }

  return { expenses, addExpense }
}
