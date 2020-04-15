<template lang="pug">
  div
    .page-title
      h3 Счет
      md-button.md-icon-button.md-primary
        md-icon refresh

    loader(v-if="isLoading")

    .md-layout(v-else)
      bill-card(:bill="bill")
      currency-card(:rates="currency.rates")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BillCard from '~/components/billCard';
import CurrencyCard from '~/components/currencyCard';

export default defineComponent({
  name: 'Bill',
  components: {
    BillCard,
    CurrencyCard,
  },
  data: () => ({
    isLoading: true,
    currency: null,
  }),
  computed: {
    bill(): string {
      return this.$accessor.infoModule.info?.bill ?? 0;
    },
  },
  async mounted(): Promise<any> {
    this.currency = await this.$accessor.fetchCurrency();
    this.isLoading = false;
  },
});
</script>

<style scoped></style>
