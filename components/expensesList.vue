<template lang="pug">
  ul.expenses-list(v-if="expenses.length")
    li.expenses-list__item(v-for="expense of expenses" :key="expense.id")
      span {{ expense.amount }} руб.
      span {{ expense.comment }}
      span Категория: {{ expense.tag }}

  p(v-else) В списке трат еще ничего нет.
</template>

<script lang="ts">
import { defineComponent } from '~/node_modules/@vue/composition-api'
import { Expense } from '~/interfaces/Expense'

export default defineComponent({
  name: 'ExpensesList',
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
