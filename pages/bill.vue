<template lang="pug">
  div
    .page-title
      h3 Счет
      md-button.md-icon-button.md-primary
        md-icon refresh

    .md-layout
      .md-layout-item.md-large-size-33.md-small-size-100
        md-card.bill-card(md-with-hover)
          md-ripple
            md-card-header
              span.md-title Счет в валюте
            md-card-content
              p.currency-line
                span 12.0 Р
      .md-layout-item.md-large-size-66.md-small-size-100
        md-card.bill-card(md-with-hover)
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
  name: 'Bill',
};
</script>

<style scoped></style>
