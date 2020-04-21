<template lang="pug">
  form(@submit.prevent="onSubmit")
    md-card.auth-card
      md-card-header
        span.md-title Домашняя бухгалтерия
      md-card-content
        md-field(:class="{ 'md-invalid': $isInvalid('email') || $isRequired('email') }")
          md-input#email(v-model.trim="$v.email.$model" type="text")
          label(for="email") Email
          small.helper-text(v-if="$isRequired('email')") Поле Email обязательно для заполнения
          small.helper-text(v-else-if="$isInvalid('email')") Введите корректный Email
        md-field(:class="{ 'md-invalid': $isRequired('password') }")
          md-input#password(v-model.trim="$v.password.$model" type="password")
          label(for="password") Пароль
          small.helper-text(v-if="$isRequired('password')") Поле Password обязательно для заполнения
      md-card-actions
        md-button.md-primary.md-raised.auth-submit(type="submit") Войти
          md-icon send

      p.center Нет аккаунта?
        router-link(to="/register") Зарегистрироваться
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { email, required } from 'vuelidate/lib/validators';
import messages from '~/utils/messages';

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
  methods: {
    async onSubmit(): Promise<T> {
      if (this.$isInvalidForm()) return;

      const formData: LoginData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$accessor.authModule.login(formData);
        this.$router.push('/bill');
      } catch (e) {}
    },
  },
  mounted(): void {
    if (messages[this.$route.query.message]) {
      this.$toast.global.my_message({
        message: messages[this.$route.query.message],
      });
    }
  },
  validations: {
    email: { email, required },
    password: { required },
  },
});
</script>

<style scoped></style>
