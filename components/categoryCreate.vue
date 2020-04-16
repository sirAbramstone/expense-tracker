<template lang="pug">
  .md-layout-item.md-small-size-100
    .page-subtitle
      h4 Создать

    form(novalidate)
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

      md-button.md-raised.md-primary Создать
        md-icon send
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { required, minValue } from 'vuelidate/lib/validators';

interface CategoryCreateData {
  name: string;
  limit: number;
}

export default defineComponent({
  name: 'CategoryCreate',
  data: (): CategoryCreateData => ({
    name: '',
    limit: 0,
  }),
  validations: {
    name: { required },
    limit: { required, minValue: minValue(100) },
  },
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
});
</script>

<style scoped></style>
