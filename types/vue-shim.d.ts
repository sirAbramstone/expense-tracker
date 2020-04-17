import { accessorType } from '~/store';
import VueRouter, { Route } from 'vue-router';
import env from '~/.nuxt/nuxt-env';

declare module '*.vue' {
  // @ts-ignore
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType;
    $router: VueRouter;
    $route: Route;
    $env: typeof env;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType;
  }
}
