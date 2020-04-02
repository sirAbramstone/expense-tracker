<template lang="pug">
  div
    .page-title
      h3 Категории
    section
      .md-layout.md-gutter
        .md-layout-item.md-small-size-100
          .page-subtitle
            h4 Создать

          form
            md-field
              md-input#name(type="text")
              label(for="name") Название
              span.helper-text.md-error Введите название

            md-field
              md-input#limit(type="number")
              label(for="limit") Лимит
              span.helper-text.md-error Минимальная величина

            md-button.md-raised.md-primary Создать
              md-icon send

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

<script>
export default {
  name: 'Categories',
};
</script>

<style scoped></style>
