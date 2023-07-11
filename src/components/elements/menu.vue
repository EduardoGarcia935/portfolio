<script>
  import { storeToRefs } from "pinia";
  import { useMainStore } from "../../store/mainStore";
  export default {
    name: "menuVue",
    setup() {
      const mainStore = useMainStore();
      const { menu } = storeToRefs(mainStore);
      return { menu };
    },
  };
</script>

<template>
  <div id="menu" :class="{ active: menu }">
    <ul>
      <li><a href="#works">Works</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</template>

<style scoped>
  #menu {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 900;
    background-color: brown;
    padding: 100px 50px;
    background-color: var(--black);

    transition: all 0.5s ease;
    top: -900px;
  }

  #menu.active {
    height: 100vh;
    top: 0;
  }

  ul li {
    margin: 20px 0;
    font-size: 40px;
    cursor: pointer;
    width: max-content;
  }

  ul li a {
    transition: all 0.5s ease;
    color: var(--gray);
  }

  ul li a:hover {
    color: var(--green-water);
  }
</style>
