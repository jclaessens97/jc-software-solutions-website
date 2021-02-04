<template>
  <div>
    <Header />
    <main class="container px-4 mx-auto">
      <AboutMe />
      <TimeLine />
      <References />
      <Contact class="mb-8" />
    </main>
    <Socials v-if="width > 768" />
    <Footer />
  </div>
</template>

<script>
import sizeMixin from '../mixins/sizeMixin';

export default {
  mixins: [sizeMixin],
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description'),
        },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    };
  },

};
</script>
