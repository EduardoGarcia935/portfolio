<script>
  import Lenis from "@studio-freight/lenis";
  import Ukiyo from "ukiyojs";

  // import loader from "./components/elements/loader.vue";
  import navBar from "./components/pages/navBar.vue";
  import menuVue from "./components/elements/menu.vue";
  import hero from "./components/pages/hero.vue";
  import subHero from "./components/pages/subHero.vue";
  import works from "./components/pages/works.vue";
  import about from "./components/pages/about.vue";
  import skills from "./components/pages/skills.vue";
  import contact from "./components/pages/contact.vue";
  import footerVue from "./components/pages/footer.vue";

  import { storeToRefs } from "pinia";
  import { useMainStore } from "./store/mainStore";

  export default {
    name: "App",
    components: {
      // loader,
      navBar,
      menuVue,
      hero,
      subHero,
      works,
      about,
      skills,
      contact,
      footerVue,
    },
    setup() {
      const mainStore = useMainStore();
      const { menu, lang } = storeToRefs(mainStore);
      return { menu, lang };
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

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 4600);

      let browserLang = navigator.language.substring(0, 2);

      switch (browserLang) {
        case "pt":
          this.lang = "pt";
          this.$root.$i18n.locale = this.lang;
          break;
        case "en":
          this.lang = "en";
          this.$root.$i18n.locale = this.lang;
          break;
        default:
          this.lang = "en";
          this.$root.$i18n.locale = this.lang;
          break;
      }
    },
  };
</script>

<template>
  <div id="app">
    <!-- <loader /> -->
    <navBar />
    <menuVue />
    <hero />
    <div class="wrapper">
      <div id="subhero">
        <subHero />
      </div>
      <div id="works">
        <works />
      </div>
      <div id="about">
        <about />
      </div>
      <div id="skills">
        <skills />
      </div>
      <div id="contact">
        <contact />
      </div>
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
