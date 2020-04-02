<template lang="pug">
  div
    .page-title
      h3 Планирование
      h4 12 212
    section
      div
        p
          strong Девушка:
          |  12 122 из 14 0000
        md-progress-bar(md-mode="determinate" :md-value="40")
</template>

<script>
export default {
  name: 'Planning',
};
</script>

<style scoped></style>
