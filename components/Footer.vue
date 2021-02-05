<template>
  <footer
    class="
      text-xs md:text-sm bg-teal-300 text-gray w-screen
      h-16 md:h-8 xl:mt-20 2xl:mt-36 text-center rounded-t
    "
  >
    <div class="py-1">
      {{ (new Date()).getFullYear() }} &copy; Jeroen Claessens -
      view this site on
      <font-awesome-icon :icon="['fab', 'github']" />
    </div>
    <div v-if="width < 768">
      <Socials orientation="horizontal" />
    </div>
  </footer>
</template>

<script>
import sizeMixin from '../mixins/sizeMixin';

export default {
  mixins: [sizeMixin],
};
</script>
