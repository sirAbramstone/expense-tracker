<template lang="pug">
  form
    md-card.auth-card
      md-card-header
        span.md-title Домашняя бухгалтерия
      md-card-content
        md-field
          md-input#email.validate(type="text")
          label(for="email") Email
          small.helper-text.md-error Email
        md-field
          md-input#password.validate(type="password")
          label(for="password") Пароль
          small.helper-text.md-error Password
      md-card-actions
        md-button.md-primary.md-raised.auth-submit Войти
            md-icon send

      p.center Нет аккаунта?
        router-link(to="/register")  Зарегистрироваться
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Login',
  layout: 'auth',
});
</script>

<style scoped></style>
