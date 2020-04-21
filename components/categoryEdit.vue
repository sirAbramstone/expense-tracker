<template lang="pug">
  .md-layout-item.md-small-size-100
    .page-subtitle
      h4 Редактировать

    form(novalidate @submit.prevent="changeHandler")
      md-field
        md-select#category(v-model="current" name="category")
          md-option(v-for="cat in categories" :key="cat.id" :value="cat.id") {{ cat.name }}
        label(for="category") Выберите категорию

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

      md-button.md-raised.md-primary(type="submit") Обновить
        md-icon send
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { required, minValue } from 'vuelidate/lib/validators';
import { Category } from '~/interfaces/Category';

export default defineComponent({
  name: 'CategoryEdit',

  props: {
    categories: {
      type: Array as () => Category[],
      default: () => [],
    },
  },

  data: () => ({
    current: null,
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

  watch: {
    current(catId: string): void {
      const { name, limit } = this.categories.find(
        ({ id }: Category) => id === catId
      );
      this.name = name;
      this.limit = limit;
    },
  },

  created(): void {
    const { id, name, limit } = this.categories[0];
    this.current = id;
    this.name = name;
    this.limit = limit;
  },

  methods: {
    async changeHandler() {
      if (this.$isInvalidForm()) return;

      try {
        await this.changeCategory();
      } catch (e) {}
    },

    async changeCategory() {
      await this.$accessor.categoryModule.updateCategory({
        id: this.current,
        name: this.name,
        limit: this.limit,
      });

      this.$toast.global.my_message({
        message: `Категория ${this.name} была успешно изменена`,
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
