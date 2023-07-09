<script>
  export default {
    name: "loader",
  };
</script>

<template>
  <div id="main_container">
    <svg
      width="2295"
      height="1960"
      viewBox="0 0 2295 1960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Logo">
        <g id="letra_G">
          <path
            d="M2244.76 827.466H1281.61L1106.35 1957.49H822.133L949.384 1122.35L1036.25 548.58H2292L2244.76 827.466Z"
            fill="url(#paint0_linear_114_17)"
          />
          <path
            d="M1879 1390.57H1501.06H1490.39L1533.06 1123.12H2192.94L2066.45 1957.49H1405.05L1447.72 1697.65H1833.29L1879 1390.57Z"
            fill="url(#paint1_linear_114_17)"
          />
          <path
            d="M2244.76 827.466H1281.61L1106.35 1957.49H822.133L949.384 1122.35L1036.25 548.58H2292L2244.76 827.466Z"
            stroke="#14CF93"
            stroke-width="5"
          />
          <path
            d="M1879 1390.57H1501.06H1490.39L1533.06 1123.12H2192.94L2066.45 1957.49H1405.05L1447.72 1697.65H1833.29L1879 1390.57Z"
            stroke="#14CF93"
            stroke-width="5"
          />
        </g>
        <path
          id="letra_E"
          d="M365.704 827.467L321.509 1124.64H952.432L909.761 1395.91H3L214.832 3H1255.7L1208.46 278.838H446.475L408.376 551.628H781.748L737.553 827.467H365.704Z"
          fill="url(#paint2_radial_114_17)"
          stroke="white"
          stroke-width="5"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_114_17"
          x1="1842.43"
          y1="1957.49"
          x2="568.392"
          y2="907.475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#14CF93" />
          <stop offset="1" stop-color="#14CF93" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_114_17"
          x1="1842.43"
          y1="1957.49"
          x2="568.392"
          y2="907.475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#14CF93" />
          <stop offset="1" stop-color="#14CF93" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_114_17"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(172.16 -37.3852) rotate(57.4029) scale(2127.28 1913.15)"
        >
          <stop stop-color="#FDFDFD" />
          <stop offset="1" stop-color="#EEEEEE" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
    <p>Eduardo Garcia</p>
    <div class="box"></div>
  </div>
</template>

<style scoped>
  #main_container {
    background-color: #111111;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    z-index: 1000;
    animation: endLoader 4s ease 4100ms forwards;
  }

  svg {
    width: 100px;
    height: 100px;
    fill-opacity: 0;
    animation: logo-animated 6300ms ease 0s forwards;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    letter-spacing: 1.5px;
    color: #faf8f5;
    animation: revealWords 4200ms ease 0s forwards;
  }

  @keyframes endLoader {
    from {
      top: 0;
    }
    to {
      top: -2000px;
    }
  }

  @keyframes revealWords {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes logo-animated {
    0% {
      fill-opacity: 0;
      stroke-dasharray: 1 1000;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
    30% {
      fill-opacity: 0;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 1;
      opacity: 1;
    }
    85%,
    100% {
      fill-opacity: 1;
      stroke-dasharray: 150 0;
      stroke-dashoffset: 0;
      stroke-width: 0;
      opacity: 1;
    }
  }

  .box {
    width: 100%;
    height: 500px;
    background-color: #14cf93;
    position: fixed;
    bottom: -100%;
    animation: line 1.6s ease 4100ms forwards,
      encolher 1.5s ease 4400ms forwards;
  }

  @keyframes line {
    from {
      bottom: -100%;
    }
    to {
      bottom: 100%;
    }
  }

  @keyframes encolher {
    from {
      height: 500px;
    }
    to {
      height: 20px;
    }
  }
</style>
