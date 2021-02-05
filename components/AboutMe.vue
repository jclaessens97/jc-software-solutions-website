<template>
  <section class="h-full xl:mt-16 2xl:mt-30">
    <div class="col-span-full h-28">
      <h3>{{ $t('aboutMe.title') }}</h3>
      <hr>
    </div>
    <div class="flex flex-col xl:flex-row">
      <div class="wrapper w-2/5 sm:w-1/4 xl:w-3/5 max-w-xs h-auto mx-auto mt-5">
        <picture>
          <source srcset="~/assets/img/webp/me.webp">
          <source srcset="~/assets/img/jpg/me.jpg">
          <img
            src="~/assets/img/jpg/me.jpg"
            alt="avatar"
            class="rounded-md border-4 border-teal-300 "
          >
        </picture>
      </div>
      <div class="text-white mt-10 md:text-base 2xl:text-lg xl:pl-12">
        <p>
          {{ $t('aboutMe.paragraph1') }}
        </p>
        <p class="mt-5" v-html="$t('aboutMe.paragraph2')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph3')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph4')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph5')" />
        <p class="mt-5" v-html="$t('aboutMe.paragraph6')" />
      </div>
    </div>
    <div class="my-5">
      <div class="w-4/5 sm:w-3/5 md:w-2/5 mx-auto mt-3">
        <SkillsHex />
      </div>
    </div>
    <div class="text-center">
      <button v-smooth-scroll href="#contact" class="action-button mt-5">
        Get in touch
      </button>
    </div>
  </section>
</template>

<style scoped>
img {
  box-shadow: 20px 20px 0 -3px #1a202c, 20px 20px #81e6d9;
}
</style>
