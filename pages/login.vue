<template lang="pug">
  form(@submit.prevent="onSubmit")
    md-card.auth-card
      md-card-header
        span.md-title Домашняя бухгалтерия
      md-card-content
        md-field
          md-input#email(v-model.trim="$v.email.$model" type="text" :class="{ invalid: isInvalidEmail }")
          label(for="email") Email
          small.helper-text(v-if="requiredEmail") Поле Email обязательно для ввода
          small.helper-text(v-else-if="invalidEmail") Введите корректный Email
        md-field
          md-input#password(v-model.trim="$v.password.$model" type="password" :class="{ invalid: isInvalidPass }")
          label(for="password") Пароль
          small.helper-text(v-if="isInvalidPass") Поле Password обязательно для ввода
      md-card-actions
        md-button.md-primary.md-raised.auth-submit(type="submit") Войти
          md-icon send

      p.center Нет аккаунта?
        router-link(to="/register") Зарегистрироваться
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { email, required } from 'vuelidate/lib/validators';

interface LoginData {
  email: string;
  password: string;
}

export default defineComponent({
  name: 'Login',
  layout: 'auth',
  data: (): LoginData => ({
    email: '',
    password: '',
  }),
  computed: {
    isInvalidEmail(): boolean {
      return this.invalidEmail || this.requiredEmail;
    },
    isInvalidPass(): boolean {
      return this.$v.password.$dirty && !this.$v.password.required;
    },
    invalidEmail(): boolean {
      return this.$v.email.$dirty && this.$v.email.$invalid;
    },
    requiredEmail(): boolean {
      return this.$v.email.$dirty && !this.$v.email.required;
    },
  },
  methods: {
    onSubmit(): void {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push('/bill');
    },
  },
  validations: {
    email: { email, required },
    password: { required },
  },
});
</script>

<style scoped></style>
