<script>
  import { storeToRefs } from "pinia";
  import { useMainStore } from "../../store/mainStore";
  export default {
    name: "navBar",
    setup() {
      const mainStore = useMainStore();
      const { menu } = storeToRefs(mainStore);
      return { menu };
    },
  };
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <a href="#">Eduardo</a>
      </div>
      <div class="menu">
        <div
          class="hamburguer"
          @click="this.menu = !this.menu"
          :class="{ hamburguerActive: this.menu }"
        ></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100vw;
    max-width: 100%;
    height: 60px;
    position: fixed;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 990;
    background-color: transparent;
    background-color: var(--black);
  }

  .container {
    width: 1100px;
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container .logo a {
    color: aliceblue;
    text-decoration: none;
  }

  .hamburguer {
    width: 50px;
    height: 50px;
    position: relative;
    cursor: pointer;
    transition: all 0.6s ease;
  }

  .hamburguer::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 60%;
    background-color: var(--white);
    top: 35%;
    right: 0;
    transition: all 1s ease;
  }

  .hamburguer::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 60%;
    background-color: var(--white);
    top: 55%;
    right: 0;
    transition: all 0.6s ease;
  }

  .hamburguerActive {
    width: 25px;
    height: 25px;
    position: relative;
    transition: all 0.6s ease;
  }

  .hamburguerActive::before {
    content: "";
    position: absolute;

    top: 50%;
    left: 23%;

    width: 80%;
    height: 2px;
    background-color: var(--white);
    cursor: pointer;

    transform: rotate(225deg);
  }

  .hamburguerActive::after {
    content: "";
    position: absolute;

    top: 50%;
    left: 23%;

    width: 80%;
    height: 2px;
    background-color: var(--white);
    transform: rotate(-405deg);
    cursor: pointer;
  }
</style>
