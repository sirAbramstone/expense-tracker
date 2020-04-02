<template lang="pug">
  div
    .page-title
      h3 История записей

    .history-chart
      canvas

    section
      md-card
        md-card-content
          md-table
            md-table-row
              md-table-head(md-numeric) #
              md-table-head Сумма
              md-table-head Дата
              md-table-head Категория
              md-table-head Тип
              md-table-head Открыть
            md-table-row
              md-table-cell(md-numeric) 1
              md-table-cell 1212
              md-table-cell 12.12.32
              md-table-cell name
              md-table-cell
                md-badge.md-square(md-content="Расход")
              md-table-cell
                md-button.md-dense
                  md-icon open_in_new
</template>

<script>
export default {
  name: 'History',
};
</script>

<style scoped></style>
