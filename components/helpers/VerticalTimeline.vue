<template>
  <ul class="timeline text-white">
    <li
      v-for="item in input"
      :key="item.id"
      class="grid grid-flow-row auto-rows-min auto-cols-auto tl-item"
    >
      <div class="flex -mt-1 pb-3">
        <div
          class="rounded bg-teal-300 text-gray p-1 w-auto text-center font-bold"
        >
          {{ period(item) }}
        </div>
        <div
          class="align-middle text-teal-300 ml-auto text-lg italic uppercase font-thin"
        >
          {{ item.location.split(',')[0] }},
          <flag :iso="parseFlagIcon(item)" :squared="false" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row pb-3">
        <div class="w-40 my-auto flex-shrink-0 text-center">
          <img
            :src="require(`~/assets/img/logos/${item.logo}`)"
            :alt="item.logo.slice(0, item.logo.length - 4)"
            class="w-24 mx-auto mb-4 md:mb-8"
          >
        </div>
        <div class="flex flex-col my-auto">
          <h5 class="font-bold text-base md:text-lg">
            {{ parseName(item) }}
          </h5>
          <p v-if="type === 'edu'" class="mt-3">
            {{ parseDescription(item) }}
          </p>
          <div v-if="type === 'work'" class="mt-3">
            <ul class="list-disc ml-10">
              <li
                v-for="(highlight, index) in parseDescription(item)"
                :key="`${highlight}-${index}`"
              >
                {{ highlight }}
              </li>
            </ul>
          </div>

          <div class="flex mt-2 space-x-4 mt-3">
            <a
              v-if="item.url"
              :href="item.url"
              class="text-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              view website
              <sup class="text-xs">
                <font-awesome-icon :icon="['fas', 'external-link-alt']" />
              </sup>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import sizeMixin from '../../mixins/sizeMixin';

export default {
  mixins: [sizeMixin],
  props: {
    input: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    parseName(item) {
      if (this.type === 'edu') {
        return item.institution;
      }

      return `${item.position} @ ${item.name}`;
    },
    parseFlagIcon(item) {
      const alpha = item.location.split(',')[1].trim();
      return alpha.toLowerCase();
    },
    parseDescription(item) {
      if (this.type === 'edu') {
        return item.area;
      }

      return item.highlights;
    },
    period(item) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ];

      const start = new Date(item.startDate);
      const end = new Date(item.endDate);

      let startMonth = monthNames[start.getMonth()];
      let endMonth = monthNames[end.getMonth()];

      if (this.width < 768) {
        startMonth = startMonth.substring(0, 3);
        endMonth = endMonth.substring(0, 3);
      }

      return `${startMonth} ${start.getFullYear()} - ${endMonth} ${end.getFullYear()}`;
    },
  },
};
</script>

<style scoped>
.timeline .tl-item {
    position:relative;
    margin-bottom: 0;
    padding-bottom: .5em;
}

.timeline .tl-item:after {
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

.timeline .tl-item:before {
    /* lines */
    content: '';
    position: absolute;
    left: -16px;
    border-left: 1px solid #81e6d9;
    height: 100%;
    width: 1px;
}

.text-link {
  @apply text-teal-300 transition-all duration-300 uppercase font-bold;
}

.text-link:hover {
  @apply opacity-75;
}
</style>
