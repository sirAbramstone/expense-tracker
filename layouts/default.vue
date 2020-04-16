<template lang="pug">
  div
    loader(v-if="isLoading")

    .page-container(v-else)
      md-app
        nav-bar(@click="isOpen = !isOpen" v-model="isOpen" slot="md-app-toolbar")
        side-bar(@click="isOpen = !isOpen" v-model="isOpen" slot="md-app-drawer")
        md-app-content
          nuxt

      md-button.md-fab.md-primary.md-fab-bottom-right(to="/record")
          md-icon add
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SideBar from '~/components/sideBar.vue';
import NavBar from '~/components/navBar.vue';

interface DefaultLayoutData {
  isOpen: boolean;
  isLoading: boolean;
}

export default defineComponent({
  components: {
    SideBar,
    NavBar,
  },
  data: (): DefaultLayoutData => ({
    isOpen: true,
    isLoading: true,
  }),
  async mounted(): Promise<any> {
    if (!this.$accessor.infoModule.info) {
      await this.$accessor.infoModule.fetchInfo();
    }

    this.isLoading = false;
  },
});
</script>

<style>
:root {
  --root-font-size: 16px;
  --grid-columns: 8;
  --grid-gap-size: 10px;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--root-font-size);
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.md-app-container {
  min-height: 100vh;
}
</style>
