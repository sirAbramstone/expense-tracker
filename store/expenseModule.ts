import { mutationTree } from 'nuxt-typed-vuex'
import { Expense } from '~/interfaces/Expense'

export const state = () => ({
  expenses: [] as Expense[],
})

type ExpenseModuleState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  addExpense: (state: ExpenseModuleState, newExpense: Expense) => (state.expenses.push(newExpense))
})
