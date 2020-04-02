<template lang="pug">
  div
    .page-title
      h3 Профиль

    form.form
      md-field
        md-input#description(type="text")
        label(for="description") Имя
        span.helper-text.md-error name

      md-button.md-raised Обновить
        md-icon send
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style scoped></style>
