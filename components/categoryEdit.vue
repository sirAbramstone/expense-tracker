<template lang="pug">
  .md-layout-item.md-small-size-100
    .page-subtitle
      h4 Редактировать

    form
      md-field
        md-select#category(v-model="category" name="category")
          md-option(v-for="cat in categories" :key="cat.id" :value="cat.name") {{ cat.name }}
        label(for="category") Выберите категорию

      md-field
        md-input#title(type="text")
        label(for="title") Название
        span.helper-text.md-error Введите название

      md-field
        md-input#limit2(type="number")
        label(for="limit2") Лимит
        span.helper-text.md-error Минимальная величина

      md-button.md-raised.md-primary Обновить
        md-icon send
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Category } from '~/interfaces/Category';

export default defineComponent({
  name: 'CategoryEdit',
  props: {
    categories: {
      type: Array as () => Category[],
      default: () => [],
    },
  },
  data: () => ({
    category: '',
  }),
});
</script>

<style scoped></style>
