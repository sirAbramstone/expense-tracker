<template lang="pug">
  div
    .page-title
      h3 Категории
    section
      .md-layout.md-gutter
        category-create
        category-edit
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CategoryCreate from '~/components/categoryCreate';
import CategoryEdit from '~/components/categoryEdit';

export default defineComponent({
  name: 'Categories',
  components: {
    CategoryCreate,
    CategoryEdit,
  },
});
</script>

<style scoped></style>
