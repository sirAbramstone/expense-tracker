<template lang="pug">
  div
    .breadcrumb-wrap
      a.breadcrumb(href="/history") История
      a.breadcrumb Расход

    .md-layout
      .md-layout-item.md-small-size-100
        md-card
          md-card-content
            p Описание:
            p Сумма:
            p Категория:

            small 12.12.12
</template>

<script>
export default {
  name: 'DetailRecord',
};
</script>

<style scoped></style>
