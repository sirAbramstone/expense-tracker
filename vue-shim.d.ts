import { accessorType } from '~/store';
import VueRouter, { Route } from 'vue-router';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType;
    $router: VueRouter;
    $route: Route;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType;
  }
}
