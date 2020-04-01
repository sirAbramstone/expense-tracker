<template lang="pug">
  ul.sidenav.app-sidenav(:class="{open: value}")
    router-link(
      v-for="(link, idx) in links"
      :key="idx"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact || false"
    )
      a.waves-effect.waves-orange.pointer(href="#") {{ link.title }}
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

<style scoped></style>
