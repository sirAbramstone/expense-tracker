<template lang="pug">
  ul.sidenav.app-sidenav.open
    li
      a.waves-effect.waves-orange.pointer(href="#") Счет
    li
      a.waves-effect.waves-orange.pointer(href="#") История
    li
      a.waves-effect.waves-orange.pointer(href="#") Планирование
    li
      a.waves-effect.waves-orange.pointer(href="#") Новая запись
    li
      a.waves-effect.waves-orange.pointer(href="#") Категории
</template>

<script lang="ts">
export default {
  name: 'SideBar',
};
</script>

<style scoped></style>
