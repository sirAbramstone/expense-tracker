<template lang="pug" functional>
  article.expense-item
    p.expense-item__amount
      span.name Сумма:
      span.value {{ props.expense.amount }} руб.
    p.expense-item__comment(v-if="props.expense.comment")
      span.name Комментарий:
      span.value {{ props.expense.comment }}
    p.expense-item__tag
      span.name Категория:
      span.value {{ props.expense.tag }}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Expense } from '@/interfaces/Expense'

export default defineComponent({
  name: 'ExpenseItemF',
  props: {
    expense: {
      type: Object as () => Expense,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
  .expense-item {
    padding: 0.5em;
    border-radius: 10px;
    background-color: #fff;

    & > p {
      display: flex;
      justify-content: space-between;
    }
  }

</style>
