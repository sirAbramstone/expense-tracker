<template lang="pug">
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

            md-table-row
              md-table-cell руб
              md-table-cell 12121
              md-table-cell 12.12.12
</template>

<script>
export default {
  name: 'CurrencyCard',
};
</script>

<style lang="scss" scoped>
@import '~vue-material/dist/theme/engine';

.currency-card {
  background-color: md-get-palette-color(red, 500);
}
</style>
