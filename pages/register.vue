<template lang="pug">
  form
    md-card.auth-card
      md-card-header
        span.md-title Домашняя бухгалтерия

      md-card-content
        md-field
          md-input#email(type="text")
          label(for="email") Email
          small.helper-text.md-error Email
        md-field
          md-input#password.validate(type="password")
          label(for="password") Пароль
          small.helper-text.md-error Password
        md-field
          md-input#name.validate(type="text")
          label(for="name") Имя
          small.helper-text.md-error Name

        p
          label
            md-checkbox.md-primary
            span С правилами согласен

      md-card-actions
        md-button.md-raised.md-primary.auth-submit(type="submit") Зарегистрироваться
          md-icon send

      p.center Уже есть аккаунт?
        router-link(to="/login")  Войти!
</template>

<script>
export default {
  name: 'Register',
  layout: 'auth',
};
</script>

<style scoped></style>
