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
        <h3>About me</h3>
        <h2>Eduardo Amengual Garcia</h2>
        <p class="bigtext">
          I'm a nerdy fan of pop culture, who when not studying or developing a
          personal project is playing video games. I have been studying software
          development for 4 years and currently live in the state of Rio Grande
          do Sul, Brazil.
        </p>
        <p>
          I am currently studying <span>Software Engineering at PUCRS</span>
        </p>
        <p>
          And working as <span>Junior Frond End Developer Fully Remote</span>
        </p>
        <button>Contact</button>
      </div>
      <div class="col2">
        <div class="bigImg">
          <div class="smallImg"></div>
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
    background-color: #fffaf8;
  }

  .container {
    width: 1100px;
    height: 100%;
    padding: 20px 20px;

    display: grid;
    grid-template-areas: "col1 col2";
  }

  .container .col1 h3 {
    color: #878787;
  }

  .container .col1 h2 {
    font-size: 50px;
    max-width: 500px;
    margin: 10px 0 20px 0;
  }

  .container .col1 p {
    line-height: 40px;
  }

  .container .col1 p span {
    font-weight: 600;
    color: #878787;
  }

  .container .col1 p.bigtext {
    max-width: 500px;
  }

  .container .col1 button {
    font-size: 14px;
    padding: 16px 40px;
    border: none;
    outline: none;
    border-radius: 5px;
  }

  .container .col2 {
    display: flex;
    justify-content: end;
  }

  .container .col2 .bigImg {
    width: 400px;
    height: 500px;
    background-color: #d9d9d9;
    position: relative;
  }

  .container .col2 .smallImg {
    width: 200px;
    height: 300px;
    background-color: #c2c2c2;
    position: absolute;
    left: -100px;
    top: 150px;
  }

  @media screen and (max-width: 1100px) {
    .container {
      display: grid;
      grid-template-areas: "col1" "col2";

      gap: 50px;
    }

    .container .col2 {
      justify-content: start;
    }

    .container .col2 .smallImg {
      top: 150px;
      left: 320px;
    }
  }

  @media screen and (max-width: 800px) {
    .container {
      padding: 100px 20px;
    }
  }

  @media screen and (max-width: 600px) {
    .container .col2 .bigImg {
      width: 100%;
      height: 400px;
    }

    .container .col2 .smallImg {
      display: none;
    }
  }
</style>
