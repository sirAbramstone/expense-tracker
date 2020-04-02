<template lang="pug">
  md-app-drawer(:md-active.sync="value" md-persistent="full")
    md-toolbar.md-transparent(md-elevation="0")
      .md-toolbar-section-end
        md-button.md-icon-button.md-dense(@click="$emit('click')")
          md-icon keyboard_arrow_left
    md-list
      md-list-item(v-for="(link, idx) in links" :key="idx")
        md-button.md-accent(
          active-class="active"
          :to="link.url"
          :exact="link.exact || false"
        )
          span {{ link.title }}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Link } from '~/interfaces/Link';

interface SidebarData {
  links: Link[];
}

export default defineComponent({
  name: 'SideBar',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: (): SidebarData => ({
    links: [
      { title: 'Счет', url: '/bill' },
      { title: 'История', url: '/history' },
      { title: 'Планирование', url: '/planning' },
      { title: 'Новая запись', url: '/record' },
      { title: 'Категории', url: '/categories' },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.md-drawer {
  width: 250px;
  height: 100vh;
}
</style>
