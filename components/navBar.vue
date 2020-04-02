<template lang="pug">
  md-app-toolbar
    .md-toolbar-row
      .md-toolbar-section-start
        md-button.md-icon-button(v-if='!value' @click="$emit('click')")
          md-icon menu
        span.black-text {{ date | date('datetime') }}

      .md-toolbar-section-end
        md-menu(md-size="medium" md-align-trigger)
          md-button(md-menu-trigger) USER NAME
            md-icon arrow_drop_down

          md-menu-content
            md-menu-item
              md-button.md-dense(to="/profile")
                md-icon account_circle
                | Профиль
            md-divider
            md-menu-item
              md-button.md-dense(@click="$emit('exit')")
                md-icon assignment_return
                | Выйти
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
} from '@vue/composition-api';

export default defineComponent({
  name: 'NavBar',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const date = ref(new Date());
    let timerId: NodeJS.Timeout;

    function setTimer() {
      timerId = global.setInterval(() => {
        date.value = new Date();
      }, 1000);
    }

    onMounted((): void => {
      setTimer();
    });

    onBeforeUnmount((): void => {
      clearInterval(timerId);
    });

    return {
      date,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~vue-material/dist/theme/engine';

.md-toolbar {
  background-color: md-get-palette-color(orange, 500);
}
</style>
