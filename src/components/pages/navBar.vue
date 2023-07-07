<script>
  export default {
    name: "navBar",
    components: {},
  };
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <a href="#">Eduardo</a>
      </div>
      <div class="menu">
        <div class="hamburguer"></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    width: 100vw;
    max-width: 100%;
    height: 80px;
    background-color: yellow;
    position: fixed;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 990;
  }

  .container {
    background-color: #303030;
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
  }

  .hamburguer::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 80%;
    background-color: aliceblue;
    top: 35%;
  }

  .hamburguer::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 80%;
    background-color: aliceblue;
    top: 55%;
  }
</style>
