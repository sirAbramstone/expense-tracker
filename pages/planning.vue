<template lang="pug">
  div
    .page-title
      h3 Планирование
      h4 12 212

    loader(v-if="isLoading")

    p(v-else-if="!categories.length")
      | Категорий пока нет.
      router-link(to="/categories")  Добавить новую категорию

    section(v-else)
      div
        p
          strong Девушка:
          |  12 122 из 14 0000
        md-progress-bar(md-mode="determinate" :md-value="40")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Category } from '~/interfaces/Category';
import { Record } from '~/interfaces/Record';

export default defineComponent({
  name: 'Planning',
  data: () => ({
    isLoading: true,
  }),
  computed: {
    categories(): Category[] {
      return this.$accessor.categoryModule.categories;
    },
    records(): Record[] {
      return this.$accessor.recordModule.records;
    },
  },
  async mounted() {
    if (!this.categories.length) {
      await this.$accessor.categoryModule.fetchCategories();
    }
    if (!this.records.length) {
      await this.$accessor.recordModule.fetchRecords();
    }
    this.isLoading = false;
  },
});
</script>

<style scoped></style>
