<template lang="pug">
  div
    .page-title
      h3 Счет
      md-button.md-icon-button.md-primary(@click="refresh")
        md-icon refresh

    loader(v-if="isLoading")

    .md-layout(v-else)
      bill-card(:rates="currency.rates" :currencies="currencies")
      currency-card(:rates="currency.rates" :date="currency.date" :currencies="currencies")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import BillCard from '~/components/billCard';
import CurrencyCard from '~/components/currencyCard';

interface BillData {
  isLoading: boolean;
  currency: any;
  currencies: string[];
}

export default defineComponent({
  name: 'Bill',
  components: {
    BillCard,
    CurrencyCard,
  },
  data: (): BillData => ({
    isLoading: true,
    currency: null,
    currencies: ['RUB', 'EUR', 'USD'],
  }),
  async mounted(): Promise<any> {
    this.currency = await this.$accessor.fetchCurrency();
    this.isLoading = false;
  },
  methods: {
    async refresh(): Promise<any> {
      this.isLoading = true;
      this.currency = await this.$accessor.fetchCurrency();
      this.isLoading = false;
    },
  },
});
</script>

<style scoped></style>
