<template lang="pug">
  .grid
    side-bar
    nuxt
</template>

<script lang="ts">
import SideBar from '~/components/sideBar.vue'

export default {
  components: {
    SideBar
  }
}
</script>

<style>
  :root {
    --root-font-size: 16px;
    --grid-columns: 8;
    --grid-gap-size: 10px;
  }

  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: var(--root-font-size);
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  .grid {
    display: grid;
    grid-gap: var(--grid-gap-size);
    grid-template-columns: 2fr 10fr;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
