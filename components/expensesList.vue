<template lang="pug">
  .expenses
    ul.expenses__list(v-if="expenses.length")
      li.expenses__list-item(v-for="expense of expenses" :key="expense.id")
        p
          span.name Сумма:
          span.value {{ expense.amount }} руб.
        p(v-if="expense.comment")
          span.name Комментарий:
          span.value {{ expense.comment }}
        p
          span.name Категория:
          span.value {{ expense.tag }}

    p.notify(v-else) Добавь в меня что-нибудь!
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
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
  .expenses {
    display: flex;
    justify-content: center;
    min-width: 360px;
    min-height: 457px;
    padding: 1.5em;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;
    font-size: 1rem;
    background-color: #BFDCFB;

    &__list {
      width: 100%;
    }

    &__list-item {
      padding: 0.5em;
      border-radius: 10px;
      background-color: #fff;

      &:not(:last-child) {
        margin-bottom: 0.75em;
      }

      & > p {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .notify {
    align-self: center;
  }
</style>
