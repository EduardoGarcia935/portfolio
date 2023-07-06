<script>
  import skillGlobe from "../elements/skillGlobe.vue";

  export default {
    name: "skills",
    components: {
      skillGlobe,
    },
  };
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col text">
        <h3>Skills & Technlogies</h3>
        <h2>My utility belt</h2>
        <p>
          The whole set of practices, teachings and learnings that i'have
          acquired throughout my career and that i use to create amazing things
        </p>
      </div>
      <div class="col-12 col-lg-6 globe">
        <skillGlobe />
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background-color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    background-color: aliceblue;
  }

  .text {
    background-color: yellow;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  }

  .globe {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
  }
</style>
