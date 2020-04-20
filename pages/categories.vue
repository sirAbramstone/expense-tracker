<template lang="pug">
  div
    .page-title
      h3 Категории
    section
      .md-layout.md-gutter
        category-create(:categories="categories")
        category-edit
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CategoryCreate from '~/components/categoryCreate';
import CategoryEdit from '~/components/categoryEdit';
import { Category } from '~/interfaces/Category';

export default defineComponent({
  name: 'Categories',
  components: {
    CategoryCreate,
    CategoryEdit,
  },
  computed: {
    categories(): Category[] {
      return this.$accessor.categoryModule.categories;
    },
  },
});
</script>

<style scoped></style>
