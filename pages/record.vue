<template lang="pug">
  div
    .page-title
      h3 Новая запись

    form.md-layout(novalidate)
      md-field
        md-select#category(md-dense)
          md-option(value="cat") Cat
        label(for="category") Выберите категорию

      label
        md-radio(name="type" value="income")
        span Доход

      label
        md-radio(name="type" value="outcome")
        span Расход

    md-field
      md-input#amount(name="amount" type="number")
      label(for="amount") Сумма
      span.helper-text.md-error amount

    md-field
      md-input#description(type="text")
      label(for="description") Описание
      span.helper-text.md-error description

    md-button.md-raised.md-primary Создать
      md-icon send
</template>

<script>
export default {
  name: 'Record',
};
</script>

<style scoped></style>
