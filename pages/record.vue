<template lang="pug">
  div
    .page-title
      h3 Новая запись

    section.md-layout.md-alignment-center-center
      loader(v-if="isLoading")

      p(v-else-if="!categories.length")
        | Категорий пока нет.
        router-link(to="/categories")  Добавить новую категорию

      form.md-layout-item.md-size-50.md-small-size-100(v-else novalidate @submit.prevent="submitHandler")
        md-field
          md-select#category(v-model="category" name="category" md-dense)
            md-option(v-for="cat in categories" :key="cat.id" :value="cat.id") {{ cat.name }}
          label(for="category") Выберите категорию

        md-radio(v-model="type" name="type" value="income") Доход
        md-radio(v-model="type" name="type" value="outcome") Расход

        md-field(:class="{'md-invalid': isAmountRequired || isAmountInvalid}")
          md-input#amount(v-model.number="$v.amount.$model" name="amount" type="number")
          label(for="amount") Сумма
          span.md-error(v-if="isAmountRequired") Введите сумму
          span.md-error(v-else-if="isAmountInvalid") Сумма должна быть не меньше {{ $v.amount.$params.minValue.min }}

        md-field(:class="{'md-invalid': isDescRequired }")
          md-input#description(v-model.trim="$v.description.$model" type="text")
          label(for="description") Описание
          span.md-error(v-if="isDescRequired") Введите описание записи

        md-button.md-raised.md-primary(type="submit") Создать
          md-icon send
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { required, minValue } from 'vuelidate/lib/validators';
import { Category } from '~/interfaces/Category';

export default defineComponent({
  name: 'Record',
  data: () => ({
    isLoading: true,
    category: null,
    type: 'outcome',
    amount: 1,
    description: '',
  }),
  computed: {
    categories(): Category[] {
      return this.$accessor.categoryModule.categories;
    },

    isAmountRequired(): boolean {
      return this.$isDirty('amount') && this.$isRequired('amount');
    },

    isAmountInvalid(): boolean {
      return this.$isInvalid('amount');
    },

    isDescRequired(): boolean {
      return this.$isDirty('description') && this.$isRequired('description');
    },
  },
  async mounted(): Promise<any> {
    await this.$accessor.categoryModule.fetchCategories();

    if (this.categories.length) {
      this.category = this.categories[0].id;
    }
    this.isLoading = false;
  },
  methods: {
    submitHandler() {},
  },
  validations: {
    type: { required },
    amount: { required, minValue: minValue(1) },
    description: { required },
  },
});
</script>

<style scoped></style>
