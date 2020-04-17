<template lang="pug">
  form(@submit.prevent="onSubmit")
    md-card.auth-card
      md-card-header
        span.md-title Домашняя бухгалтерия

      md-card-content
        md-field(:class="{ 'md-invalid': isInvalidEmail || isRequireEmail }")
          md-input#email(v-model.trim="$v.email.$model" type="text")
          label(for="email") Email
          small.helper-text(v-if="isRequireEmail") Поле Email обязательно для заполнения
          small.helper-text(v-else-if="isInvalidEmail") Введите корректный Email
        md-field(:class="{ 'md-invalid': isRequirePass }")
          md-input#password(v-model.trim="$v.password.$model" type="password")
          label(for="password") Пароль
          small.helper-text(v-if="isRequirePass") Поле Password обязательно для заполнения
        md-field(:class="{ 'md-invalid': isRequireName || !nameHasMinLength }")
          md-input#name(v-model.trim="$v.name.$model" type="text")
          label(for="name") Имя
          small.helper-text(v-if="isRequireName") Поле Name обязательно для заполнения
          small.helper-text(v-else-if="!nameHasMinLength")
            | Имя должно содержать не менее {{ $v.name.$params.minLength.min }} символов

        p
          label
            md-checkbox.md-primary(v-model="$v.agree.$model")
            span С правилами согласен

      md-card-actions
        md-button.md-raised.md-primary.auth-submit(type="submit") Зарегистрироваться
          md-icon send

      p.center Уже есть аккаунт?
        router-link(to="/login")  Войти!
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { required, email, minLength } from 'vuelidate/lib/validators';

interface RegisterData {
  email: string;
  password: string;
  name: string;
  agree?: boolean;
}

export default defineComponent({
  name: 'Register',
  layout: 'auth',
  data: (): RegisterData => ({
    email: '',
    password: '',
    name: '',
    agree: false,
  }),
  computed: {
    isRequirePass(): boolean {
      return this.$isDirty('password') && this.$isRequired('password');
    },
    isInvalidEmail(): boolean {
      return this.$isDirty('email') && this.$v.email.$invalid;
    },
    isRequireEmail(): boolean {
      return this.$isDirty('email') && this.$isRequired('email');
    },
    isRequireName(): boolean {
      return this.$isDirty('name') && this.$isRequired('name');
    },
    nameHasMinLength(): boolean {
      return this.$isDirty('name') && this.$v.name.minLength;
    },
  },
  validations: {
    email: { email, required },
    password: { required },
    name: { required, minLength: minLength(6) },
    agree: { checked: (v: boolean): boolean => v },
  },
  methods: {
    async onSubmit(): Promise<T> {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData: RegisterData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      try {
        await this.$accessor.authModule.register(formData);
        this.$router.push('/bill');
      } catch (e) {}
    },
  },
});
</script>

<style scoped></style>
