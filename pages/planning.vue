<template lang="pug">
  div
    .page-title
      h3 Планирование
      h4 {{ bill | currency }}

    section.md-layout.md-alignment-center
      loader(v-if="isLoading")

      p.md-layout-item(v-else-if="!categories.length")
       | Категорий пока нет.
       router-link(to="/categories")  Добавить новую категорию

      .md-layout-item.md-size-75.md-small-size-100.progress(
        v-else
        v-for="({id, name, spend, limit, progressPercent, left}) of categories"
        :key="id"
      )
        p
          strong {{ name }}:
          |  {{ spend | currency }} из {{ limit | currency }}
        md-progress-bar(md-mode="determinate" :md-value="progressPercent")
        md-tooltip.plan-tooltip(md-direction="top")
          | {{ `${left < 0 ? 'Превышение на' : 'Осталось'} ${$options.filters.currency(Math.abs(left))}` }}
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
      return this.$accessor.categoryModule.progressCats;
    },
    records(): Record[] {
      return this.$accessor.recordModule.records;
    },
    bill(): number {
      return this.$accessor.infoModule.info.bill;
    },
  },
  async mounted() {
    if (!this.$accessor.categoryModule.categories.length) {
      await this.$accessor.categoryModule.fetchCategories();
    }
    if (!this.records.length) {
      await this.$accessor.recordModule.fetchRecords();
    }
    this.isLoading = false;
  },
});
</script>

<style lang="scss" scoped>
.progress {
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  & > p {
    margin-bottom: 0.5rem;
  }
}
</style>
