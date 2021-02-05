<template>
  <section class="h-full xl:pt-16 2xl:pt-30">
    <div class="col-span-full h-28">
      <h3>Timeline</h3>
      <hr>
    </div>
    <div>
      <h4>Work experience</h4>
      <VerticalTimeline :input="workData" type="work" class="ml-10 mt-5" />
    </div>
    <div class="mt-5">
      <h4>Education</h4>
      <VerticalTimeline :input="educationData" type="edu" class="ml-10 mt-5" />
    </div>
    <div class="text-center">
      <button v-smooth-scroll href="#contact" class="action-button mt-5">
        Get in touch
      </button>
    </div>
  </section>
</template>

<script>
import resume from '../assets/data/resume.json';

export default {
  computed: {
    educationData() {
      return resume.education;
    },
    workData() {
      return resume.work;
    },
  },
};
</script>

<style scoped>
h4 {
  @apply text-teal-300 text-3xl font-thin;
}
</style>
