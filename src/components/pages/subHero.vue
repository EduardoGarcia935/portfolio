<script>
  export default {
    name: "subHero",
    components: {},
  };
</script>

<template>
  <main>
    <div class="container">
      <div class="row1">
        <h4>{{ $t("subHero.iAM.intro") }}</h4>
        <h2>{{ $t("subHero.iAM.title") }}</h2>
        <p>
          {{ $t("subHero.iAM.text") }}
        </p>
        <div class="group">
          <div class="dot"></div>
          <p>{{ $t("subHero.iAM.current") }}</p>
        </div>
      </div>
      <div class="row2">
        <div class="arrow">
          <img src="../../assets/img/arrow.svg" alt="arrow" />
        </div>
        <p class="p1">{{ $t("subHero.help") }}</p>
        <p class="p2">{{ $t("subHero.things") }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #1a1a1a; */
    background-color: #fffaf8;
  }

  .container {
    width: 1100px;
    height: max-content;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }

  .row1 {
    padding: 90px 0 200px 0;
  }

  .row1 h2 {
    max-width: 400px;
    line-height: 3rem;
    color: #14cf93;
    margin: 10px 0 15px 0;
  }

  .row1 h4 {
    color: #878787;
  }

  .row1 p {
    max-width: 400px;
    line-height: 2.2rem;
  }

  .row1 .group {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .row1 .group p {
    margin: 0;
    font-size: 14px;
  }

  .row1 .group .dot {
    width: 30px;
    height: 30px;
    position: relative;
  }

  .row1 .group .dot::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #d9d9d9;
    border-radius: 50%;
  }

  .row1 .group .dot::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #b5b0b0;
    border-radius: 50%;
    scale: 0.6;
  }

  .row2 {
    height: 150px;
    padding: 40px 0 300px 0;
    position: relative;
    border-bottom: 1px solid #d9d9d9;
  }

  .row2 .arrow {
    position: absolute;
    left: 280px;
    top: -40px;
  }

  .row2 .p1 {
    color: #878787;
    margin-bottom: 40px;
  }

  .row2 .p2 {
    font-size: 20px;
    max-width: 250px;
    line-height: 140%;
  }

  @media screen and (max-width: 400px) {
    .row2 .arrow {
      left: 200px;
    }

    .arrow img {
      width: 40px;
      height: 40px;
    }
  }
</style>
