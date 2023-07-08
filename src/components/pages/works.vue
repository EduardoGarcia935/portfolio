<script>
  export default {
    name: "works",
    components: {},
  };
</script>

<template>
  <main>
    <div class="container">
      <div class="row1">
        <h2>Selected works</h2>
        <p>Some opportunities and projects that I'm proud of!</p>
      </div>
      <div class="row2">
        <div class="erick">
          <div class="container_img"></div>
          <h3>Erick Avila</h3>
          <p>One of the best designers i know.</p>
          <ul>
            <li>UI/UX Design</li>
            <li>Website</li>
            <li>Motion</li>
            <li>Front end</li>
          </ul>
        </div>
        <div class="nubank">
          <div class="container_img"></div>
          <h3>Nubank</h3>
          <p>A website redesign of one the largest Brazilian fintechs.</p>
          <ul>
            <li>UI Design</li>
            <li>Website</li>
            <li>Motion</li>
            <li>Redesign</li>
            <li>Front end</li>
          </ul>
        </div>
        <div class="lib">
          <div class="container_img"></div>
          <h3>Component lib</h3>
          <p>
            My own component library based on top of the best Javascript
            Framework.
          </p>
          <ul>
            <li>UI/UX Design</li>
            <li>Motion</li>
            <li>Front end</li>
          </ul>
        </div>
        <div class="spiderman">
          <div class="container_img"></div>
          <h3>Spiderman</h3>
          <p>
            A cool motion based website for the Friendly Neighborhood Spidey,
          </p>
          <ul>
            <li>UI Design</li>
            <li>Website</li>
            <li>Motion</li>
            <li>Front end</li>
          </ul>
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
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fffaf8;
  }

  .container {
    width: 1100px;
    height: 100%;
    padding: 150px 20px 0px 20px;
  }

  .container .row1 h2 {
    color: #000;
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

  .container_img {
    background-color: #878787;
    width: 70%;
    height: 70vh;
    max-width: 310px;
    max-height: 432px;
    margin-bottom: 12px;
  }

  ul li {
    color: #878787;
    margin: 12px 0;
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
  }

  .lib {
    grid-area: lib;
  }

  .lib .container_img {
    margin-left: 112px;
    position: relative;
    top: -50px;
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
      gap: 50px;
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
