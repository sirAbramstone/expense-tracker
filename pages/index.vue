<template lang="pug">
  section.container
    expense-form(@add="addExpense")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Expense } from '~/interfaces/Expense'
import ExpenseForm from '~/components/expenseForm.vue'

export default defineComponent({
  components: {
    ExpenseForm
  },

  setup () {
    const addExpense = (expanse: Expense): void => {
      console.log(expanse)
    }

    return { addExpense }
  }
})
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
</style>
