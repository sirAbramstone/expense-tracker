<template lang="pug">
  div
    .page-title
      h3 Новая запись

    form.form
      .input-field
        select
          option(name="cat")
        label Выберите категорию

      p
        label
          input.with-gap(name="type" type="radio" value="income")
          span Доход

      p
        label
          input.with-gap(name="type" type="radio" value="outcome")
          span Расход

    .input-field
      input#amount(type="number")
      label(for="amount") Сумма
      span.helper-text.invalid amount
    .input-field
      input#description(type="text")
      label(for="description") Описание
      span.helper-text.invalid description

    button.btn.waves-effect.waves-light Создать
      i.material-icons.right send
</template>

<script>
export default {
  name: 'Record',
  // created() {
  //   if (process.client) {
  //     const selects = document.querySelectorAll('select');
  //     const instances = window.M.FormSelect.init(selects);
  //   }
  // },
};
</script>

<style scoped></style>
