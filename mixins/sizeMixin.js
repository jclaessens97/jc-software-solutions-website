export default {
  data: () => ({
    width: 0,
  }),
  mounted() {
    window.onresize = this.handleResize;
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
