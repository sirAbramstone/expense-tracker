<template lang="pug">
  section.container
    expense-form(@add="addExpense")
    expenses-list(:expenses="expenses")
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api';
import { useExpenses } from '~/compositions/expenses';
import ExpenseForm from '~/components/expenseForm.vue';
import ExpensesList from '~/components/expensesList.vue';

export default defineComponent({
  components: {
    ExpenseForm,
    ExpensesList,
  },

  setup(props: any, context: SetupContext) {
    const { expenses, addExpense } = useExpenses(props, context);
    return { expenses, addExpense };
  },
});
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
