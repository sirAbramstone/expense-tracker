import { mutationTree } from 'nuxt-typed-vuex'
import { Expense } from '~/interfaces/Expense'

export const state = () => ({
  expenses: [] as Expense[]
})

export const mutations = mutationTree(state, {
  addExpense: (state, newExpense: Expense) => state.expenses.push(newExpense)
})
