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
        <h2 data-aos="fade-up" data-aos-duration="1200" class=".h3">
          {{ $t("subHero.iAM.intro") }}
        </h2>
        <h2 data-aos="fade-up" data-aos-duration="1200">
          {{ $t("subHero.iAM.title") }}
        </h2>
        <p data-aos="fade-up" data-aos-duration="1200">
          {{ $t("subHero.iAM.text") }}
        </p>
        <div class="group">
          <div class="dot" data-aos-duration="1200"></div>
          <p data-aos-duration="1200">{{ $t("subHero.iAM.current") }}</p>
        </div>
      </div>
      <div class="row2">
        <div class="arrow">
          <img src="../../assets/img/arrow.svg" alt="arrow" />
        </div>
        <p class="p1" data-aos="fade-up" data-aos-duration="1200">
          {{ $t("subHero.help") }}
        </p>
        <p class="p2" data-aos="fade-up" data-aos-duration="1200">
          {{ $t("subHero.things") }}
        </p>
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
    background-color: var(--white);
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

  .row1 h2:nth-child(1) {
    color: var(--gray);
  }

  .row1 h2 {
    max-width: 400px;
    line-height: 3rem;
    color: var(--green-water);
    margin: 10px 0 15px 0;
  }

  .row1 h4 {
    color: var(--gray);
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
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: relative;
    background-color: rgba(18, 139, 101, 0.7);
    animation: animate 2s linear infinite;
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
    color: var(--gray);
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

  @keyframes animate {
    0% {
      box-shadow: 0 0 0 0 rgba(20, 207, 147, 0.7);
    }
    40% {
      box-shadow: 0 0 0 10px rgba(0, 206, 209, 0);
    }
    80% {
      box-shadow: 0 0 0 10px rgba(0, 206, 209, 0);
    }
    100% {
      box-shadow: 0 0 0 rgba(0, 206, 209, 0);
    }
  }
</style>
