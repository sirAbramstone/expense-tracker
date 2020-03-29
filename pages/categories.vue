<template lang="pug">
  div
    .page-title
      h3 Категории
    section
      .row
        .col.s12.m6
          .page-subtitle
            h4 Создать

          form
            .input-field
              input#name(type="text")
              label(for="name") Название
              span.helper-text.invalid Введите название

            .input-field
              input#limit(type="number")
              label(for="limit") Лимит
              span.helper-text.invalid Минимальная величина

            button.btn.waves-effect.waves-light Создать
              i.material-icons.right send

        .col.s12.m6
          .page-subtitle
            h4 Редактировать

          form
            .input-field
              select#category
                option Category
              label(for="category") Выберите категорию

            .input-field
              input#title(type="text")
              label(for="title") Название
              span.helper-text.invalid Введите название

            .input-field
              input#limit2(type="number")
              label(for="limit2") Лимит
              span.helper-text.invalid Минимальная величина

            button.btn.waves-effect.waves-light Обновить
              i.material-icons.right send
</template>

<script>
export default {
  name: 'Categories',
};
</script>

<style scoped></style>
