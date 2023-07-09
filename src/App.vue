<script>
  import Lenis from "@studio-freight/lenis";
  import navBar from "./components/pages/navBar.vue";
  import hero from "./components/pages/hero.vue";
  import subHero from "./components/pages/subHero.vue";
  import works from "./components/pages/works.vue";
  import about from "./components/pages/about.vue";
  import skills from "./components/pages/skills.vue";
  import contact from "./components/pages/contact.vue";
  import footerVue from "./components/pages/footer.vue";

  import Ukiyo from "ukiyojs";

  export default {
    name: "App",
    components: {
      navBar,
      hero,
      subHero,
      works,
      about,
      skills,
      contact,
      footerVue,
    },
    mounted() {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      const images = document.querySelectorAll(".container_img");
      new Ukiyo(images);
    },
  };
</script>

<template>
  <div id="app">
    <navBar />
    <hero />
    <div class="wrapper">
      <subHero />
      <works />
      <about />
      <skills />
      <contact />
      <footerVue />
    </div>
  </div>
</template>

<style scoped>
  #app {
    width: 100vw;
    max-width: 100%;
    height: max-content;
  }

  .wrapper {
    position: relative;
    z-index: 12;
  }
</style>
