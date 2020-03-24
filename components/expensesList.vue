<template lang="pug">
  .expenses
    .expenses__list(v-if="expenses.length")
      .expenses__list-item(v-for="expense of expenses" :key="expense.id")
        expense-item(:expense="expense")

    p.notify(v-else) Добавь в меня что-нибудь!
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Expense } from '@/interfaces/Expense';
const ExpenseItem = () => import('@/components/expenseItemF.vue');

export default defineComponent({
  name: 'ExpensesList',
  components: {
    ExpenseItem,
  },
  props: {
    expenses: {
      type: Array as () => Expense[],
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.expenses {
  display: flex;
  justify-content: center;
  min-width: 360px;
  min-height: 457px;
  padding: 1.5em;
  border-radius: 10px;
  box-shadow: 0 4px 16px #ccc;
  font-size: 1rem;
  background-color: #bfdcfb;

  &__list {
    width: 100%;
  }

  &__list-item {
    &:not(:last-child) {
      margin-bottom: 0.75em;
    }
  }
}

.notify {
  align-self: center;
}
</style>
