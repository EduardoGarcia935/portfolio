<script>
  export default {
    name: "about",
    components: {},
  };
</script>

<template>
  <main id="contact">
    <div class="container">
      <div class="row1">
        <h2>{{ $t("contact.title[0]") }}</h2>
        <h2>
          <a
            href="https://api.whatsapp.com/send?phone=5551996700348"
            target="_blank"
            >{{ $t("contact.title[1]") }}</a
          >
        </h2>
      </div>
      <div class="row2">
        <div class="info">
          <h3>{{ $t("contact.labels[0]") }}</h3>
          <p>eduardo.agarcia117@gmail.com</p>
        </div>
        <div class="info">
          <h3>{{ $t("contact.labels[1]") }}</h3>
          <a
            href="https://api.whatsapp.com/send?phone=5551996700348"
            target="_blank"
            >55 51 99670-0348</a
          >
        </div>
      </div>
      <div class="row3">
        <p>{{ $t("contact.labels[2]") }}</p>
        <ul>
          <li>
            <a href="https://github.com/EduardoGarcia935" target="_blank">{{
              $t("contact.links[0]")
            }}</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/eduardogarcia935/"
              target="_blank"
              >{{ $t("contact.links[1]") }}</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/duduagarcia_/" target="_blank">{{
              $t("contact.links[2]")
            }}</a>
          </li>
        </ul>
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
    padding: 80px 20px 0 20px;
  }

  .container .row1 {
    margin-bottom: 100px;
  }

  .container .row1 h2 {
    font-size: 70px;
  }

  .container .row1 h2:nth-child(2) a {
    color: var(--green-water);
    position: relative;
  }

  .container .row1 h2:nth-child(2) a::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: var(--green-water);
    position: absolute;
    bottom: -2px;
    transition: all 0.5s ease;
  }

  .container .row1 h2:nth-child(2) a:hover::before {
    width: 100%;
  }

  .container .row2 {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 50px;
  }

  .container .row2 .info:nth-child(2) {
    margin-left: 100px;
  }

  .container .row2 .info h3 {
    font-size: 17px;
    margin-bottom: 20px;
    color: var(--gray);
  }

  .container .row2 .info p,
  .container .row2 .info a {
    font-size: 20px;
    color: var(--black);
    position: relative;
    transition: all 0.5s ease;
  }

  .container .row2 .info p::before,
  .container .row2 .info a::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: var(--green-water);
    position: absolute;
    bottom: -2px;
    transition: all 0.5s ease;
  }

  .container .row2 .info a:hover,
  .container .row2 .info p:hover {
    color: #14cf93;
  }

  .container .row2 .info a:hover::before,
  .container .row2 .info p:hover::before {
    width: 100%;
  }

  .container .row3 {
    margin-bottom: 50px;
  }

  .container .row3 p {
    color: #a8a8a8;
  }

  .container .row3 ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .container .row3 ul li {
    margin-right: 30px;
  }

  .container .row3 ul li a {
    color: #1a1a1a;
    transition: all 0.5s ease;
    position: relative;
  }

  .container .row3 ul li a::before {
    content: "";
    width: 0;
    height: 2px;
    background-color: var(--green-water);
    position: absolute;
    bottom: -2px;
  }

  .container .row3 ul li a:hover::before {
    width: 100%;
    transition: all 0.5s ease;
  }

  .container .row3 ul li a:hover {
    color: #14cf93;
  }

  @media screen and (max-width: 780px) {
    .container .row2 .info:nth-child(2) {
      margin-left: 0px;
    }
  }

  @media screen and (max-width: 670px) {
    .container .row1 h2 {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 500px) {
    .container .row1 h2 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 350px) {
    .container .row1 h2 {
      font-size: 30px;
    }
  }
</style>
