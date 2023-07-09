<script>
  import "../../assets/tagCanvas.js";

  export default {
    name: "skillGlobe",
    mounted() {
      if (window.innerWidth > 600) {
        this.isLarge = true;

        try {
          TagCanvas.Delete("myCanvas2");

          TagCanvas.textColour = "#14cf93";
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

          TagCanvas.textColour = "#14cf93";
          TagCanvas.depth = 0.8;
          TagCanvas.outlineColour = "transparent";
          TagCanvas.maxSpeed = 0.04;
          TagCanvas.Start("myCanvas2", "tags2");
        } catch (error) {
          console.log(error);
        }
      }

      window.addEventListener("resize", (e) => {
        if (window.innerWidth > 600) {
          this.isLarge = true;

          try {
            TagCanvas.Delete("myCanvas2");

            TagCanvas.textColour = "#14cf93";
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

            TagCanvas.textColour = "#14cf93";
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
      <li><a>HTML</a></li>
      <li><a>CSS</a></li>
      <li><a>ES6+</a></li>
      <li><a>C</a></li>
      <li><a>JSON</a></li>
      <li><a>PHP</a></li>
      <li><a>Vue.js</a></li>
      <li><a>React.js</a></li>
      <li><a>C++</a></li>
      <li><a>Bootstrap</a></li>
      <li><a>Node JS</a></li>
      <li><a>Git</a></li>
      <li><a>SASS</a></li>
      <li><a>mySQL</a></li>
      <li><a>AGILE</a></li>
      <li><a>SQI</a></li>
      <li><a>npm</a></li>
      <li><a>Figma</a></li>
      <li><a>Motion</a></li>
    </ul>
  </canvas>

  <canvas width="280" height="340" id="myCanvas2" v-else>
    <ul id="tags2">
      <li><a>HTML</a></li>
      <li><a>CSS</a></li>
      <li><a>ES6+</a></li>
      <li><a>TypeScript</a></li>
      <li><a>C</a></li>
      <li><a>JSON</a></li>
      <li><a>C++</a></li>
      <li><a>PHP</a></li>
      <li><a>Vue.js</a></li>
      <li><a>React.js</a></li>
      <li><a>Bootstrap</a></li>
      <li><a>Node JS</a></li>
      <li><a>Git</a></li>
      <li><a>SASS</a></li>
      <li><a>mySQL</a></li>
      <li><a>AGILE</a></li>
      <li><a>SQI</a></li>
      <li><a>npm</a></li>
      <li><a>Figma</a></li>
      <li><a>Motion</a></li>
    </ul>
  </canvas>
</template>
