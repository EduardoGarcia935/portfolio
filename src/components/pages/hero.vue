<script>
  export default {
    name: "hero",
    components: {},
  };
</script>

<template>
  <main>
    <div class="container">
      <div class="col1">
        <h4>Hi, i'm <span>Eduardo Garcia</span> and</h4>
        <h1>I create <span>good shit</span> and hide the bad ones.</h1>
      </div>
      <div class="col2">
        <div class="glass">
          <div class="bubble white"></div>
          <div class="bubble green"></div>
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
    background-color: #fffaf8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 1100px;
    height: 100%;
    display: grid;
    grid-template-areas: "col1 col2";
    padding: 200px 20px 200px 20px;
  }

  .col1 {
    /* min-width: 600px; */
    grid-area: col1;
  }

  .col1 h1 {
    max-width: 600px;
  }

  .col1 h1 span {
    color: #878787;
  }

  .col1 h4 span {
    color: #878787;
  }

  .col2 {
    grid-area: col2;
    min-width: 240px;
  }

  .glass {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .glass::before {
    content: "";
    height: 100%;
    width: 40%;
    left: 0;
    top: 0;
    background: rgba(3, 9, 23, 0.01);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    position: absolute;
    z-index: 2;
  }

  .glass::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 40%;
    top: 0;
    right: 0;
    background: rgba(3, 9, 23, 0.01);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    position: absolute;
    z-index: 2;
  }

  .bubble {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;

    /* top: 50%;
    left: 50%; */
  }

  .green {
    /* background-color: greenyellow; */
    background-color: #a7a7a7;
    animation: move-ball 5s ease infinite alternate;
  }

  .white {
    background-color: #d9d9d9;
    animation: move-ball 5s ease infinite 3s alternate;
  }

  @keyframes move-ball {
    0% {
      top: 20%;
      right: 30%;
    }
    50% {
      top: 50%;
      right: 50%;
    }
    100% {
      top: 30%;
      right: 65%;
    }
  }

  @media screen and (max-width: 1000px) {
    .container {
      grid-template-areas: "col1" "col2";
      gap: 50px;
    }

    .col1 {
      min-width: none;
    }

    .col2 {
      min-height: 200px;
    }
  }
</style>
