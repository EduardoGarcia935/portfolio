<script>
  export default {
    name: "about",
    components: {},
  };
</script>

<template>
  <main>
    <div class="container">
      <div class="col1">
        <h3>{{ $t("about.title") }}</h3>
        <h2>{{ $t("about.name") }}</h2>
        <p class="bigtext">
          {{ $t("about.bigText") }}
        </p>
        <p>
          {{ $t("about.studying[0]")
          }}<span>{{ $t("about.studying[1]") }}</span>
        </p>
        <p>
          {{ $t("about.working[0]") }}<span>{{ $t("about.working[1]") }}</span>
        </p>
      </div>
      <div class="col2">
        <div class="container_img bigImg">
          <img
            src="../../assets/img/perfil.jpg"
            :alt="$t('about.alt')"
            class="ukiyo"
          />
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

    background-color: var(--black);
  }

  .container {
    width: 1100px;
    height: 100%;
    padding: 120px 20px;

    display: grid;
    grid-template-areas: "col1 col2";
  }

  .container .col1 h3 {
    color: var(--gray);
  }

  .container .col1 h2 {
    font-size: 50px;
    max-width: 500px;
    margin: 10px 0 20px 0;
    color: var(--green-water);
  }

  .container .col1 p {
    line-height: 40px;
    color: var(--white);
  }

  .container .col1 p span {
    font-weight: 600;
    color: var(--green-water);
  }

  .container .col1 p.bigtext {
    max-width: 500px;
  }

  .container .col2 {
    display: flex;
    justify-content: end;
  }

  .container .col2 .bigImg {
    width: 400px;
    height: 500px;
    background-color: var(--light-gray);
  }

  .container .col2 .bigImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: all 0.6s ease;
  }

  .container .col2 .bigImg img:hover {
    filter: none;
  }

  @media screen and (max-width: 1000px) {
    .container {
      display: grid;
      grid-template-areas: "col1" "col2";

      gap: 50px;
    }

    .container .col2 {
      justify-content: start;
    }

    .container .col2 .bigImg {
      width: 100%;
      height: 500px;
      background-color: #d9d9d9;
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      padding: 100px 20px;
    }
  }
</style>
