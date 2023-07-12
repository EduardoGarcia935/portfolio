<script>
  import { storeToRefs } from "pinia";
  import { useMainStore } from "../../store/mainStore";
  export default {
    name: "menuVue",
    setup() {
      const mainStore = useMainStore();
      const { menu, lang } = storeToRefs(mainStore);
      return { menu, lang };
    },
    methods: {
      changeLang(lang) {
        this.lang = lang;
        this.$root.$i18n.locale = this.lang;
      },
    },
  };
</script>

<template>
  <div id="menu" :class="{ active: menu }">
    <ul>
      <li>
        <a href="#works" @click="menu = !menu">{{ $t("menu.links[0]") }}</a>
      </li>
      <li>
        <a href="#about" @click="menu = !menu">{{ $t("menu.links[1]") }}</a>
      </li>
      <li>
        <a href="#skills" @click="menu = !menu">{{ $t("menu.links[2]") }}</a>
      </li>
      <li>
        <a href="#contact" @click="menu = !menu">{{ $t("menu.links[3]") }}</a>
      </li>
    </ul>
    <label>{{ $t("menu.labels[0]") }}</label>
    <div class="languages">
      <p>
        <span
          id="en"
          :class="{ currentLang: this.lang === 'en' }"
          @click="changeLang('en')"
          >{{ $t("menu.labels[1]") }}</span
        >
        /
        <span
          id="br"
          :class="{ currentLang: this.lang === 'pt' }"
          @click="changeLang('pt')"
          >{{ $t("menu.labels[2]") }}</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
  #menu {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 900;
    padding: 70px 70px;
    background-color: var(--black);

    transition: all 0.5s ease;
    top: -900px;
  }

  #menu.active {
    height: 100vh;
    top: 0;
  }

  ul li {
    margin: 30px 0;
    font-size: 40px;
    cursor: pointer;
    width: max-content;
    position: relative;
  }

  ul li a {
    transition: all 0.5s ease;
    color: var(--gray);
  }

  ul li a:hover {
    color: var(--green-water);
  }

  ul li:nth-child(1)::before {
    content: "01.";
    position: absolute;
    color: var(--gray);
    font-size: 20px;
    left: -50px;
    top: -12px;
    transition: all 0.5s ease;
  }

  ul li:nth-child(1):hover::before {
    color: var(--green-water);
  }

  ul li:nth-child(2)::before {
    content: "02.";
    position: absolute;
    color: var(--gray);
    font-size: 20px;
    left: -50px;
    top: -12px;
    transition: all 0.5s ease;
  }

  ul li:nth-child(2):hover::before {
    color: var(--green-water);
  }

  ul li:nth-child(3)::before {
    content: "03.";
    position: absolute;
    color: var(--gray);
    font-size: 20px;
    left: -50px;
    top: -12px;
    transition: all 0.5s ease;
  }

  ul li:nth-child(3):hover::before {
    color: var(--green-water);
  }

  ul li:nth-child(4)::before {
    content: "04.";
    position: absolute;
    color: var(--gray);
    font-size: 20px;
    left: -50px;
    top: -12px;
    transition: all 0.5s ease;
  }

  ul li:nth-child(4):hover::before {
    color: var(--green-water);
  }

  label {
    color: var(--gray);
  }

  .languages {
    margin-top: 10px;
    color: var(--gray);
  }

  #br,
  #en {
    cursor: pointer;
  }

  .currentLang {
    color: var(--green-water);
  }
</style>
