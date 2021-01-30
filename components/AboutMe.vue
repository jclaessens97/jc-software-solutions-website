<template>
  <section class="h-full xl:pt-16 2xl:pt-40">
    <div class="col-span-full h-28">
      <h3>About Me</h3>
      <hr>
    </div>
    <div class="grid grid-rows-1 grid-cols-2">
      <div class="text-white mt-10 md:text-base 2xl:text-lg">
        <p>
          Hi! I'm Jeroen, a freelance software engineer based in Antwerp, Belgium.
        </p>
        <p class="mt-5">
          Since I was younger I've always been passionate about everything that involved computers.
          As soon as I could I followed a course in high school that involved basic
          computer programming, networking and hardware.
          After finishing high school I decided I want more and went to
          Karel de Grote University College in Antwerp where
          I studied Applied Computer Science with a focus on Application Development.
        </p>
        <p class="mt-5">
          Apart from writing code, I play basketball and I love to travel and go on hikes.
          The header image you see at the top of the page is from one of the hikes
          I did when I did an internship/worked in Finland for 6 months.
        </p>
        <p class="mt-5">
          Altough I have experience with both frontend,
          backend and deployment aspects of the development cycle,
          I prefer doing backend development but frontend
          development/deployment definetly doesn't scare me.
        </p>
        <p class="mt-5">
          Because computer technologies are always changing and there is always
          a new technology lurking around the block it's hard to list all the technologies
          I came across with. In my eyes it's also important as a developer to
          always stay up to date with the newest trends and technologies,
          that's why I'm always open to step into new technologies and gain knowledge on them.
          On of my biggest plusses is that I can adapt quickly to new technologies.
        </p>
        <p class="mt-5 mb-5">
          That said, I compiled a list of technologies where
          I feel myself very confident to work with below:
        </p>
        <SkillsHex />
      </div>
      <div>
        <div class="wrapper w-3/5 h-auto mx-auto">
          <picture>
            <source srcset="~/assets/img/webp/me.webp">
            <source srcset="~/assets/img/jpg/me.jpg">
            <img
              src="~/assets/img/jpg/me.jpg"
              alt="avatar"
              class="rounded-md border-4 border-teal-300"
            >
          </picture>
        </div>
      </div>
      <button class="action-button mt-5">
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
