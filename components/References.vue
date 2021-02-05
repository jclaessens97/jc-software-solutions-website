<template>
  <section class="h-full xl:pt-16 2xl:pt-30">
    <div class="col-span-full h-28">
      <h3>References</h3>
      <hr>
    </div>
    <div>
      <carousel
        :autoplay="options.autoplay"
        :autoplay-hover-pause="options.autoplayHoverPause"
        :autoplay-timeout="options.autoplayTimeout"
        :loop="options.loop"
        :per-page="options.perPage"
        :pagination-active-color="options.paginationActiveColor"
        :pagination-color="options.paginationColor"
        class="w-full md:w-3/4 md:mx-auto mt-5"
      >
        <slide v-for="ref in references" :key="ref.id">
          <Quote :reference="ref" />
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import references from '../assets/data/references.json';

export default {
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    references,
    options: {
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3500,
      loop: true,
      perPage: 1,
      paginationActiveColor: '#81e6d9',
      paginationColor: '#fff',
    },
  }),
};
</script>
