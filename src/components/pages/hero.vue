<script>
  export default {
    name: "hero",
    components: {},
    mounted() {
      // const h1 = new SplitType("#h1", {
      //   types: "lines",
      //   linesClass: "lineChildren",
      //   linesTag: "span",
      // });
    },
  };
</script>

<template>
  <main class="container_img ukiyo">
    <div class="container ukiyo">
      <img src="../../assets/img/Untitled-3" alt="" />
      <h4>
        {{ $t("hero.hello[0]") }}<span>{{ $t("hero.name") }}</span
        >{{ $t("hero.hello[1]") }}
      </h4>
      <h1 id="h1" data-aos="fade-up">
        {{ $t("hero.phrase[0]") }}<span>{{ $t("hero.phrase[1]") }}</span
        >{{ $t("hero.phrase[2]") }}
      </h1>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    max-width: 100%;
    height: 100vh;
    background: url("../../assets/img/Untitled-4.jpg") no-repeat;
    background-size: cover;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    margin: 0 auto !important;
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
    color: #ffffff;
  }

  h4 {
    color: #ffffff;
  }

  h1 span {
    color: #878787;
  }

  h4 span {
    color: #878787;
  }

  @media screen and (max-width: 600px) {
    main {
      background: url("../../assets/img/Untitled-5.jpg") no-repeat;
      background-size: cover;
    }

    h1 {
      max-width: 400px;
    }
  }
</style>
