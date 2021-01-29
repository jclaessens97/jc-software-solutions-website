<template>
  <aside
    class="text-3xl text-white fixed bottom-0 h-auto z-10
    flex flex-col space-y-3 mb-5 ml-5 justify-center"
  >
    <a href="https://www.linkedin.com/in/jclaessens" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
    <a href="https://github.com/jclaessens97" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a href="https://discordapp.com/users/310137027330965514/" target="_blank">
      <font-awesome-icon :icon="['fab', 'discord']" />
    </a>
    <a href="mailto:jclaessens97@hotmail.com">
      <font-awesome-icon :icon="['far', 'envelope']" />
    </a>
  </aside>
</template>

<style scoped>
svg {
  @apply block m-auto transition-all duration-300;
}

svg:hover {
  @apply text-teal-300;
}
</style>
