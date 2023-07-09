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
  <main>
    <div class="container">
      <div class="col1">
        <h3>{{ $t("skills.subtitle") }}</h3>
        <h2>{{ $t("skills.title") }}</h2>
        <p>{{ $t("skills.text") }}</p>
      </div>
      <div class="col2">
        <skillGlobe />
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    max-width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fffaf8;
    background-color: #111111;
  }
  .container {
    width: 1100px;
    height: 100%;
    padding: 150px 20px;

    display: grid;
    grid-template-areas: "col1 col2";
  }

  .col1 {
    padding-top: 100px;
  }

  .col2 {
  }

  .container .col1 h3 {
    color: #a8a8a8;
    font-size: 20px;
  }

  .container .col1 h2 {
    font-size: 50px;
    margin: 10px 0;
    color: #14cf93;
  }

  .container .col1 p {
    max-width: 450px;
    line-height: 2.2rem;
    color: #fffaf8;
  }

  @media screen and (max-width: 900px) {
    .container {
      display: grid;
      grid-template-areas: "col1" "col2";
    }

    .container .col1 {
      padding: 0;
    }
  }

  @media screen and (max-width: 670px) {
    .container {
      display: grid;
      grid-template-areas: "col1" "col2";
    }

    .container .col2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
