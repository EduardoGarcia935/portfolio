<script>
  import "../../../assets/tagCanvas.js";

  export default {
    name: "skillGlobe1000PX",
    mounted() {
      window.onload = function () {
        try {
          TagCanvas.textColour = "#08fdd8";
          TagCanvas.depth = 0.8;
          TagCanvas.outlineColour = "transparent";
          TagCanvas.maxSpeed = 0.04;
          TagCanvas.Start("myCanvas", "tags");
        } catch (e) {
          // something went wrong, hide the canvas container
          document.getElementById("myCanvasContainer").style.display = "none";
        }
      };
    },
  };
</script>

<template>
  <canvas width="280" height="500" id="myCanvas">
    <ul id="tags">
      <li><a href="#" target="_blank">HTML</a></li>
      <li><a href="#" target="_blank">CSS</a></li>
      <li><a href="#" target="_blank">ES6</a></li>
      <li><a href="#" target="_blank">TypeScript</a></li>
      <li><a href="#" target="_blank">C</a></li>
      <li><a href="#" target="_blank">JSON</a></li>
      <li><a href="#" target="_blank">C++</a></li>
      <li><a href="#" target="_blank">PHP</a></li>
      <li><a href="#" target="_blank">Vue.js</a></li>
      <li><a href="#" target="_blank">React.js</a></li>
      <li><a href="#" target="_blank">Bootstrap</a></li>
      <li><a href="#" target="_blank">Node JS</a></li>
      <li><a href="#" target="_blank">Git</a></li>
      <li><a href="#" target="_blank">SASS</a></li>
      <li><a href="#" target="_blank">mySQL</a></li>
      <li><a href="#" target="_blank">AGILE</a></li>
      <li><a href="#" target="_blank">SQI</a></li>
      <li><a href="#" target="_blank">npm</a></li>
      <li><a href="#" target="_blank">Figma</a></li>
      <li><a href="#" target="_blank">Motion</a></li>
    </ul>
  </canvas>
</template>
