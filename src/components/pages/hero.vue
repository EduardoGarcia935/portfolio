<script>
  export default {
    name: "hero",
    components: {},
    mounted() {},
  };
</script>

<template>
  <main class="container_img ukiyo">
    <div class="container ukiyo">
      <h2
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="5400"
        class=".h3"
      >
        {{ $t("hero.hello[0]") }}<span>{{ $t("hero.name") }}</span
        >{{ $t("hero.hello[1]") }}
      </h2>
      <h1
        id="h1"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="5400"
      >
        {{ $t("hero.phrase[0]") }}<span>{{ $t("hero.phrase[1]") }}</span
        >{{ $t("hero.phrase[2]") }}
      </h1>
    </div>
  </main>
</template>

<style scoped>
  body[data-aos-delay="5400"] [data-aos],
  [data-aos][data-aos][data-aos-delay="5400"] {
    transition-delay: 5400ms;
  }

  body[data-aos-delay="5700"] [data-aos],
  [data-aos][data-aos][data-aos-delay="5700"] {
    transition-delay: 5700ms;
  }
  main {
    height: 100vh;
    max-width: 100%;
    height: 100vh;
    background: url("../../assets/img/heroGB_desktop-min.jpg") no-repeat;
    background-size: cover;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    margin: 0 auto;
    width: 1100px;
    max-width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0px 20px;
    background-color: transparent;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  h1 {
    max-width: 600px;
    color: var(--white);
  }

  h2 {
    color: var(--white);
  }

  h1 span {
    color: var(--gray);
  }

  h2 span {
    color: var(--gray);
  }

  @media screen and (max-width: 600px) {
    main {
      background: url("../../assets/img/heroBG_mobile.jpg") no-repeat;
      background-size: cover;
    }

    h1 {
      max-width: 400px;
    }
  }
</style>
