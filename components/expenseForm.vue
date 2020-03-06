<template lang="pug">
  form.form(@submit.prevent="submit")
    h1.form__title Мои траты
    .form__group
      input.form__field(id="amount" v-model.number="form.amount" type="text" name="amount" placeholder=" ")
      label.form__label(for="amount") Сумма

    .form__group
      input.form__field(id="comment" v-model="form.comment" type="text" name="comment" placeholder=" ")
      label.form__label(for="comment") Комментарий

    .form__group
      fieldset.form__fieldset
        legend.form__subtitle Категория

        .form__radio-group
          input.form__radio(id="t1" v-model="form.tag" type="radio" name="tag" value="супермаркеты")
          label.form__label(for="t1") Супермаркеты
        .form__radio-group
          input.form__radio(id="t2" v-model="form.tag" type="radio" name="tag" value="рестораны")
          label.form__label(for="t2") Рестораны
        .form__radio-group
          input.form__radio(id="t3" v-model="form.tag" type="radio" name="tag" value="развлечения")
          label.form__label(for="t3") Развлечения
        .form__radio-group
          input.form__radio(id="t4" v-model="form.tag" type="radio" name="tag" value="транспорт")
          label.form__label(for="t4") Транспорт

    button.form__button Создать
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useExpenseForm } from '~/compositions/expenseForm'

export default defineComponent({
  name: 'ExpenseForm',

  setup (props: object, context) {
    const { form, submit } = useExpenseForm(props, context)

    return { form, submit }
  }
})
</script>

<style lang="scss" scoped>
  .form {
    $self: &;

    width: 320px;
    padding: 24px 32px;
    border-radius: 10px;
    box-shadow: 0 4px 16px #ccc;
    font-size: 1rem;

    &__title {
      margin-bottom: 0.75em;
      font-size: 1.5em;
    }

    &__subtitle {
      font-size: 1.25em;
      margin-bottom: 0.75em;
    }

    &__group {
      position: relative;
      margin-bottom: 2em;

      display: flex;
      flex-direction: column;
    }

    &__field {
      padding: 0 10px 0 0;
      width: 100%;
      border: none;
      border-bottom: 1px solid #e0e0e0;
      outline: none;
      background-color: transparent;
      transition: .3s;

      & ~ #{ $self }__label {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: .3s;
        will-change: transform;
        color: #9e9e9e;
      }

      &:focus {
        border-bottom: 1px solid #1a73a8;
      }

      &:focus ~ #{ $self }__label,
      &:not(:placeholder-shown) ~ #{ $self }__label {
        transform: translate(calc(100% / 10 * -1), -18px) scale(0.8);
      }
    }

    &__button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      color: #fff;
      background-color: rgb(0, 113, 240);
      opacity: 1;
      cursor: pointer;
      outline: none;
      transition: opacity .3s;
      font-size: 1em;

      &:focus,
      &:hover {
        opacity: 0.7;
      }
    }

    &__fieldset {
      margin: 0;
      padding: 0;
      border: none;
    }

    &__radio-group {
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 0.5em;
      }
    }
  }

  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    input[type='radio'] {
      --active: #275EFE;
      --active-inner: #fff;
      --focus: 2px rgba(39, 94, 254, .3);
      --border: #BBC1E1;
      --border-hover: #275EFE;
      --background: #fff;
      --disabled: #F6F8FF;
      --disabled-inner: #E1E6F9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background .3s, border-color .3s, box-shadow .2s;

      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
      }

      &:checked {
        --b: var(--active);
        --bc: var(--active);
        --d-o: .3s;
        --d-t: .6s;
        --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
      }

      &:disabled {
        --b: var(--disabled);
        cursor: not-allowed;
        opacity: .9;

        &:checked {
          --b: var(--disabled-inner);
          --bc: var(--border);
        }

        & + label {
          cursor: not-allowed;
        }
      }

      &:hover {
        &:not(:checked) {
          &:not(:disabled) {
            --bc: var(--border-hover);
          }
        }
      }

      &:focus {
        box-shadow: 0 0 0 var(--focus);
      }

      &:not(.switch) {
        width: 21px;

        &:after {
          opacity: var(--o, 0);
        }

        &:checked {
          --o: 1;
        }
      }

      & + label {
        font-size: 0.9em;
        line-height: 21px;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        margin-left: 4px;
      }
    }

    input[type='radio'] {
      border-radius: 50%;

      &:after {
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background: var(--active-inner);
        opacity: 0;
        transform: scale(var(--s, .7));
      }

      &:checked {
        --s: .5;
      }
    }
  }
</style>
