<template lang="pug">
  div
    .page-title
      h3 Счет
      md-button.md-icon-button.md-primary
        md-icon refresh

    .md-layout
      bill-card(:bill="bill")
      currency-card
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
  computed: {
    bill(): string {
      return (+this.$accessor.infoModule.info.bill).toFixed(2);
    },
  },
});
</script>

<style scoped></style>
