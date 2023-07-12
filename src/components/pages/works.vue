<script>
  export default {
    name: "works",
  };
</script>

<template>
  <main>
    <div class="container">
      <div class="row1">
        <h2>{{ $t("works.title") }}</h2>
        <p>{{ $t("works.subTitle") }}</p>
      </div>
      <div class="row2">
        <div class="erick">
          <a href="#">
            <div class="container_img"></div>
            <h3>{{ $t("works.erick.title") }}</h3>
            <p>{{ $t("works.erick.desc") }}</p>
            <ul>
              <li>{{ $t("works.erick.list[0]") }}</li>
              <li>{{ $t("works.erick.list[1]") }}</li>
              <li>{{ $t("works.erick.list[2]") }}</li>
              <li>{{ $t("works.erick.list[3]") }}</li>
            </ul>
          </a>
        </div>
        <div class="nubank">
          <a href="#">
            <div class="container_img"></div>
            <h3>{{ $t("works.nubank.title") }}</h3>
            <p>{{ $t("works.nubank.desc") }}</p>
            <ul>
              <li>{{ $t("works.nubank.list[0]") }}</li>
              <li>{{ $t("works.nubank.list[1]") }}</li>
              <li>{{ $t("works.nubank.list[2]") }}</li>
              <li>{{ $t("works.nubank.list[3]") }}</li>
              <li>{{ $t("works.nubank.list[4]") }}</li>
            </ul>
          </a>
        </div>
        <div class="lib">
          <a href="#">
            <div class="container_img"></div>
            <h3>{{ $t("works.lib.title") }}</h3>
            <p>{{ $t("works.lib.desc") }}</p>
            <ul>
              <li>{{ $t("works.lib.list[0]") }}</li>
              <li>{{ $t("works.lib.list[1]") }}</li>
              <li>{{ $t("works.lib.list[2]") }}</li>
            </ul>
          </a>
        </div>
        <div class="spiderman">
          <a href="#">
            <div class="container_img"></div>
            <h3>{{ $t("works.spiderman.title") }}</h3>
            <p>{{ $t("works.spiderman.desc") }}</p>
            <ul>
              <li>{{ $t("works.spiderman.list[0]") }}</li>
              <li>{{ $t("works.spiderman.list[1]") }}</li>
              <li>{{ $t("works.spiderman.list[2]") }}</li>
              <li>{{ $t("works.spiderman.list[3]") }}</li>
            </ul>
          </a>
        </div>
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
    background-color: var(--white);
  }

  .container {
    width: 1100px;
    height: 100%;
    padding: 150px 20px 0px 20px;
  }

  .container .row1 h2 {
    font-size: 6rem;
    font-style: normal;
    font-weight: 300;
    line-height: 5.625rem;
    margin-bottom: 20px;
  }

  .container .row1 p {
    line-height: 2.5rem;
    max-width: 300px;
    color: #878787;
  }

  .container .row2 {
    height: max-content;

    display: grid;
    grid-template-areas:
      "erick nubank"
      "lib spiderman";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 50px;
  }

  .container .row2 p {
    font-size: 14px;
    color: var(--gray);
  }

  .container .row2 h3 {
    color: var(--black);
  }

  .container_img {
    width: 70%;
    height: 70vh;
    max-width: 310px;
    max-height: 432px;
    margin-bottom: 12px;
  }

  .container_img img {
    width: 100%;
    height: 100%;
    background-color: var(--gray);
  }

  ul li {
    color: var(--gray);
    margin: 12px 0;
    color: var(--green-water);
  }

  .container .row2 p {
    margin-top: 12px;
    max-width: 310px;
  }

  .erick {
    grid-area: erick;
  }

  .erick .container_img {
    margin-left: 112px;
    margin-top: 94px;
    background: url("../../assets/img/1.jpg") no-repeat;
    background-size: cover;
  }

  .erick p,
  .erick ul,
  .erick h3 {
    margin-left: 112px;
  }

  .nubank {
    grid-area: nubank;
  }

  .nubank .container_img {
    margin-top: 309px;
    background: url("../../assets/img/nubank.svg") no-repeat;
    background-size: cover;
  }

  .lib {
    grid-area: lib;
  }

  .lib .container_img {
    margin-left: 112px;
    position: relative;
    top: -50px;
    background: url("../../assets/img/3.jpg") no-repeat;
    background-size: cover;
  }

  .lib p,
  .lib ul,
  .lib h3 {
    margin-left: 112px;
    position: relative;
    top: -50px;
  }

  .spiderman {
    grid-area: spiderman;
  }

  .spiderman .container_img {
    margin-top: 124px;
    background-color: var(--gray);
    background: url("../../assets/img/spiderman-desktop.svg") no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 850px) {
    .container .row1 h2 {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 800px) {
    .container .row2 {
      grid-template-areas:
        "erick"
        "nubank"
        "lib"
        "spiderman";
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      gap: 80px;
    }

    .container_img {
      max-width: none;
      max-height: none;

      width: 100%;
      min-width: 220px;
      height: 300px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .erick {
      padding-top: 70px;
    }

    .erick .container_img,
    .erick p,
    .erick ul,
    .erick h3 {
      margin: 0;
    }

    .erick h3 {
      margin-top: 12px;
    }

    .nubank .container_img {
      margin: 0;
    }

    .nubank h3 {
      margin-top: 12px;
    }

    .lib .container_img {
      margin: 0;
      position: static;
    }

    .lib p,
    .lib ul,
    .lib h3 {
      margin: 0;
      position: static;
    }

    .lib h3 {
      margin-top: 12px;
    }

    .spiderman .container_img {
      margin: 0;
    }

    .spiderman h3 {
      margin-top: 12px;
    }
  }

  @media screen and (max-width: 500px) {
    .container .row1 h2 {
      font-size: 3rem;
    }
  }
</style>
