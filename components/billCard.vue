<template lang="pug">
  .md-layout-item.md-large-size-33.md-small-size-100
    md-card.bill-card(md-with-hover)
      md-ripple
        md-card-header
          span.md-title Счет в валюте
        md-card-content
          p.currency-line(v-for="cur of currencies" :key="cur")
            span {{ getCurrency(cur) | currency(cur) }}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

interface BillCardData {
  currencies: Array<string>;
}

export default defineComponent({
  name: 'BillCard',
  props: {
    rates: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data: (): BillCardData => ({
    currencies: ['RUB', 'EUR', 'USD'],
  }),
  computed: {
    base(): number {
      return (
        this.$accessor.infoModule.info.bill / (this.rates.RUB / this.rates.EUR)
      );
    },
  },
  methods: {
    getCurrency(currency: string): string {
      return (this.base * this.rates[currency]).toFixed(2);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~vue-material/dist/theme/engine';

.bill-card {
  height: 310px;
  background-color: md-get-palette-color(blue, 500);
  color: white;
}
</style>
