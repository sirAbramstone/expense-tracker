<template lang="pug">
  .grey.darken-1.empty-layout
    nuxt
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import messages from '~/utils/messages';

export default defineComponent({
  computed: {
    error() {
      return this.$accessor.error;
    },
  },
  watch: {
    error(fbError) {
      this.$toast.global.my_error({
        message: messages[fbError.code] || 'Возникла неизвестная ошибка',
      });
    },
  },
});
</script>

<style scoped></style>
