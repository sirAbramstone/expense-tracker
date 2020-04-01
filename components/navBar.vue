<template lang="pug">
  md-toolbar
    .md-toolbar-row
      .md-toolbar-section-start
        md-button.md-icon-button(href="#" @click.prevent="$emit('click')")
          md-icon menu
        span.black-text 12.12.12

      .md-toolbar-section-end
        md-menu(md-size="medium" md-align-trigger)
          md-button(md-menu-trigger) USER NAME
            md-icon arrow_drop_down

          md-menu-content
            md-menu-item
              a.black-text(href="#")
                md-icon account_circle
                | Профиль
            md-divider
            md-menu-item
              a.black-text(href="#")
                md-icon assignment_return
                | Выйти
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api';

export default defineComponent({
  name: 'NavBar',
  setup() {
    onMounted(() => {
      // console.log(Materialize);
    });
  },
});
</script>

<style lang="scss" scoped>
@import '~vue-material/dist/theme/engine';

.md-toolbar {
  background-color: md-get-palette-color(orange, 500);
}
</style>
