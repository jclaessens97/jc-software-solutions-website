<template>
  <section class="h-full xl:pt-16 2xl:pt-40">
    <div class="col-span-full h-28">
      <h3>Timeline</h3>
      <hr>
    </div>
    <div>
      <h4>Work experience</h4>
      <VerticalTimeline :input="workData" class="ml-10 mt-5" />
    </div>
    <div class="mt-5">
      <h4>Education</h4>
      <VerticalTimeline :input="educationData" class="ml-10 mt-5" />
    </div>
    <p class="py-3 text-white">
      For more detailed information, please visit my
      <a href="https://www.linkedin.com/in/jclaessens" target="_blank" class="text-link">
        LinkedIn
      </a>.
    </p>
    <button class="action-button">
      Get in touch
    </button>
  </section>
</template>

<script>
import education from '../assets/data/education.json';
import work from '../assets/data/work.json';

export default {
  computed: {
    educationData() {
      return education;
    },
    workData() {
      return work;
    },
  },
};
</script>
