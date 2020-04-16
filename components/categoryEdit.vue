<template lang="pug">
  .md-layout-item.md-small-size-100
    .page-subtitle
      h4 Редактировать

    form
      md-field
        md-select#category
          md-option Category
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
export default {
  name: 'CategoryEdit',
};
</script>

<style scoped></style>
