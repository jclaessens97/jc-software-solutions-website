<template>
  <header class="flex w-screen h-screen">
    <div class="px-5 md:px-0 m-auto text-white tracking-wider text-center md:text-left">
      <h1 class="text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
        {{ $t('header.headtitle') }} <span class="text-teal-300 font-bold">Jeroen Claessens</span>
      </h1>
      <h2 ref="subtitle" class="text-xl sm:text-2xl md:text-4xl xl:text-5xl" />
      <p class="mt-5 md:text-lg">
        {{ $t('header.subline') }}
      </p>
      <a v-smooth-scroll href="#contact" class="action-button mt-4">
        {{ $t('actions.getInTouch') }}
      </a>
    </div>
    <div class="absolute bottom-0 flex justify-center w-screen animate-bounce">
      <!-- Created by kiddo from the Noun Project -->
      <img class="h-24" src="~/assets/img/scroll.svg" alt="scroll icon">
    </div>
  </header>
</template>

<script>
import TypeWriter from 'typewriter-effect/dist/core';

export default {
  mounted() {
    this.startTypeWriter();
  },
  methods: {
    startTypeWriter() {
      const typewriter = new TypeWriter(
        this.$refs.subtitle,
      );

      typewriter
        .pauseFor(500)
        .typeString(this.$t('header.subtitle1'))
        .pauseFor(750)
        .deleteChars(10)
        .typeString(this.$t('header.subtitle2'))
        .pauseFor(750)
        .deleteChars(8)
        .typeString(this.$t('header.subtitle3'))
        .pauseFor(1000)
        .callFunction((state) => {
          // eslint-disable-next-line
          state.elements.cursor.style.display = 'none';
        })
        .start();
    },
  },
};
</script>

<style scoped>
header {
  position: relative;
  z-index: 1;
}

header::before {
  content: '';
  position: absolute;
  background-image: url('~assets/img/jpg/header-bg1.jpg');
  background-size: cover;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: .6;
  z-index: -1;
}
</style>
