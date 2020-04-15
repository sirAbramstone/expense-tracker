<template lang="pug" functional>
  .md-layout-item.md-large-size-33.md-small-size-100
    md-card.bill-card(md-with-hover)
      md-ripple
        md-card-header
          span.md-title Счет в валюте
        md-card-content
          p.currency-line
            span {{ props.bill }} Р
</template>

<script lang="ts">
export default {
  name: 'BillCard',
  props: {
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~vue-material/dist/theme/engine';

.bill-card {
  height: 310px;
  background-color: md-get-palette-color(blue, 500);
  color: white;
}
</style>
