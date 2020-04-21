<template lang="pug">
  .md-layout-item.md-small-size-100
    .page-subtitle
      h4 Создать

    form(novalidate @submit.prevent="createHandler")
      md-field(:class="{'md-invalid': isRequiredName}")
        md-input#name(v-model.trim="$v.name.$model" type="text")
        label(for="name") Название
        span.md-error(v-if="isRequiredName") Поле название обязательно для заполнения

      md-field(:class="{'md-invalid': isRequiredLimit || isInvalidLimit}")
        md-input#limit(v-model.number="$v.limit.$model" type="number")
        label(for="limit") Лимит
        span.md-error(v-if="isInvalidLimit")
          | Минимальная величина должна быть не меньше {{ $v.limit.$params.minValue.min }}
        span.md-error(v-else-if="isRequiredLimit") Поле лимит обязательно для заполнения

      md-button.md-raised.md-primary(type="submit") Создать
        md-icon send
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { required, minValue } from 'vuelidate/lib/validators';
import { Category } from '~/interfaces/Category';
import { UserException } from '~/utils/UserException';

export default defineComponent({
  name: 'CategoryCreate',

  props: {
    categories: {
      type: Array as () => Category[],
      default: () => [],
    },
  },

  data: (): Category => ({
    name: '',
    limit: 100,
  }),

  computed: {
    isRequiredName(): boolean {
      return this.$isDirty('name') && this.$isRequired('name');
    },

    isRequiredLimit(): boolean {
      return this.$isDirty('limit') && this.$isRequired('limit');
    },

    isInvalidLimit(): boolean {
      return this.$isDirty('limit') && this.$v.limit.$invalid;
    },
  },

  methods: {
    async createHandler() {
      if (this.$isInvalidForm()) return;

      try {
        const existedCat = this.categories.find(
          ({ name }: Category) => name.toLowerCase() === this.name.toLowerCase()
        );

        if (existedCat) {
          throw new UserException(
            `Категория ${existedCat.name} уже существует`
          );
        }

        await this.createCategory();

        this.name = '';
        this.limit = 100;
        this.$v.$reset();
      } catch (e) {
        this.showError(e);
      }
    },

    async createCategory() {
      await this.$accessor.categoryModule.createCategory({
        name: this.name,
        limit: this.limit,
      });
      this.$toast.global.my_message({
        message: `Категория ${this.name} была создана`,
      });
    },

    showError(e) {
      if (e.message) {
        this.$toast.global.my_error({ message: e.message });
        return;
      }
      this.$toast.global.my_error({
        message: `Произошла ошибка при создании категории ${this.name}`,
      });
    },
  },

  validations: {
    name: { required },
    limit: { required, minValue: minValue(100) },
  },
});
</script>

<style scoped></style>
