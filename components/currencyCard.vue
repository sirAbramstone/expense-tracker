<template lang="pug" functional>
  .md-layout-item.md-large-size-66.md-small-size-100
    md-card.currency-card(md-with-hover)
      md-ripple
        md-card-header
          span.md-title Курс валют

        md-card-content
          md-table
            md-table-row
              md-table-head Валюта
              md-table-head Курс
              md-table-head Дата

            md-table-row(v-for="cur in props.currencies" :key="cur")
              md-table-cell {{ cur }}
              md-table-cell {{ props.rates[cur] }}
              md-table-cell {{ props.date }}
</template>

<script>
export default {
  name: 'CurrencyCard',
  props: {
    rates: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    date: {
      type: String,
      required: true,
    },
    currencies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~vue-material/dist/theme/engine';

.currency-card {
  min-height: 310px;
  background-color: md-get-palette-color(red, 500);
  color: white;
}
</style>
