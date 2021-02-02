<template>
  <header class="flex w-screen h-screen">
    <div class="px-5 md:px-0 m-auto text-white tracking-wider text-center md:text-left">
      <h1 class="text-2xl sm:text-4xl md:text-5xl xl:text-6xl">
        Hello, my name is <span class="text-teal-300 font-bold">Jeroen Claessens</span>
      </h1>
      <h2 ref="subline" class="text-xl sm:text-2xl md:text-4xl xl:text-5xl">
        I develop <span class="text-teal-300 font-bold">software</span>
      </h2>
      <p class="mt-5 md:text-lg">
        I'm a freelance software engineer based in Belgium
        and I love to build challenging (web)applications.
      </p>
      <a v-smooth-scroll href="#contact" class="action-button mt-4">
        Get in touch
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
        this.$refs.subline,
      );

      typewriter
        .pauseFor(500)
        .typeString('I write <span class="text-teal-300 font-bold">code</span>')
        .pauseFor(750)
        .deleteChars(10)
        .typeString(' build <span class="text-teal-300 font-bold">software</span>')
        .pauseFor(750)
        .deleteChars(8)
        .typeString('<span class="text-teal-300 font-bold">solutions</span>.')
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
  background-image: url('~assets/img/webp/header-bg1.webp');
  background-size: cover;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: .6;
  z-index: -1;
}
</style>
