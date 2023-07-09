<script>
  import "../../assets/tagCanvas.js";

  export default {
    name: "skillGlobe",
    mounted() {
      if (window.innerWidth > 900) {
        this.isLarge = true;

        try {
          TagCanvas.Delete("myCanvas2");

          TagCanvas.textColour = "#000000";
          TagCanvas.depth = 0.8;
          TagCanvas.outlineColour = "transparent";
          TagCanvas.maxSpeed = 0.04;
          TagCanvas.Start("myCanvas", "tags");
        } catch (error) {
          console.log(error);
        }
      } else {
        this.isLarge = false;

        try {
          TagCanvas.Delete("myCanvas");

          TagCanvas.textColour = "#000000";
          TagCanvas.depth = 0.8;
          TagCanvas.outlineColour = "transparent";
          TagCanvas.maxSpeed = 0.04;
          TagCanvas.Start("myCanvas2", "tags2");
        } catch (error) {
          console.log(error);
        }
      }

      window.addEventListener("resize", (e) => {
        if (window.innerWidth > 900) {
          this.isLarge = true;

          try {
            TagCanvas.Delete("myCanvas2");

            TagCanvas.textColour = "#000000";
            TagCanvas.depth = 0.8;
            TagCanvas.outlineColour = "transparent";
            TagCanvas.maxSpeed = 0.04;
            TagCanvas.Start("myCanvas", "tags");
          } catch (error) {
            console.log(error);
          }
        } else {
          this.isLarge = false;

          try {
            TagCanvas.Delete("myCanvas");

            TagCanvas.textColour = "#000000";
            TagCanvas.depth = 0.8;
            TagCanvas.outlineColour = "transparent";
            TagCanvas.maxSpeed = 0.04;
            TagCanvas.Start("myCanvas2", "tags2");
          } catch (error) {
            console.log(error);
          }
        }
      });
    },
    data() {
      return {
        isLarge: true,
      };
    },
  };
</script>

<template>
  <canvas width="500" height="500" id="myCanvas" v-if="isLarge">
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

  <canvas width="240" height="400" id="myCanvas2" v-else>
    <ul id="tags2">
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
