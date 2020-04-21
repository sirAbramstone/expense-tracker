<template lang="pug">
  div
    .page-title
      h3 Категории
    section
      loader(v-if="isLoading")

      .md-layout.md-gutter(v-else)
        category-create(:categories="categories")
        category-edit(v-if="categories.length" :categories="categories")
        p(v-else) Ни одной категории еще не создано.
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
  data: () => ({
    isLoading: true,
  }),
  computed: {
    categories(): Category[] {
      return this.$accessor.categoryModule.categories;
    },
  },
  async mounted() {
    await this.$accessor.categoryModule.fetchCategories();
    this.isLoading = false;
  },
});
</script>

<style scoped></style>
