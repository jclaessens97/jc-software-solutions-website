<template>
  <ul class="timeline text-white">
    <li
      v-for="item in input"
      :key="item.id"
      class="grid grid-flow-row auto-rows-min auto-cols-auto"
    >
      <div class="flex -mt-1 pb-3">
        <div
          class="rounded bg-teal-300 text-white p-1 w-auto text-center font-bold"
        >
          {{ item.period }}
        </div>
        <div
          class="align-middle text-teal-300 ml-auto text-lg italic uppercase font-thin"
        >
          {{ item.location }}
        </div>
      </div>
      <div class="flex pb-3">
        <div class="w-40 my-5 flex-shrink-0">
          <img
            :src="require(`~/assets/img/logos/${item.logo}`)"
            :alt="item.logo.slice(0, item.logo.length - 4)"
            class="w-24 m-auto"
          >
        </div>
        <div class="flex flex-col my-auto">
          <h5 class="font-bold text-lg">
            {{ item.title }}
          </h5>
          <p class="mt-3">
            {{ parseDescription(item.description) }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    input: {
      type: Array,
      required: true,
    },
  },
  methods: {
    parseDescription(desc) {
      if (Array.isArray(desc)) {
        return desc.join(' ');
      }
      return desc;
    },
  },
};
</script>

<style scoped>
ul li {
    position:relative;
    margin-bottom: 0;
    padding-bottom: .5em;
}

ul li:after {
    content: '';
    background-image: url('~assets/img/timelinemarker.svg');
    background-size: 20px;
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    position: absolute;
    left: -26px;
    top: 0px;
    font-size: 1rem;
}

ul li:before {
    /* lines */
    content: '';
    position: absolute;
    left: -16px;
    border-left: 1px solid #81e6d9;
    height: 100%;
    width: 1px;
}
</style>
