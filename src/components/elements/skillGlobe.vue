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
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">ES6+</a></li>
      <li><a href="#">C</a></li>
      <li><a href="#">JSON</a></li>
      <li><a href="#">PHP</a></li>
      <li><a href="#">Vue.js</a></li>
      <li><a href="#">React.js</a></li>
      <li><a href="#">C++</a></li>
      <li><a href="#">Bootstrap</a></li>
      <li><a href="#">Node JS</a></li>
      <li><a href="#">Git</a></li>
      <li><a href="#">SASS</a></li>
      <li><a href="#">mySQL</a></li>
      <li><a href="#">AGILE</a></li>
      <li><a href="#">SQI</a></li>
      <li><a href="#">npm</a></li>
      <li><a href="#">Figma</a></li>
      <li><a href="#">Motion</a></li>
    </ul>
  </canvas>

  <canvas width="280" height="340" id="myCanvas2" v-else>
    <ul id="tags2">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">ES6+</a></li>
      <li><a href="#">TypeScript</a></li>
      <li><a href="#">C</a></li>
      <li><a href="#">JSON</a></li>
      <li><a href="#">C++</a></li>
      <li><a href="#">PHP</a></li>
      <li><a href="#">Vue.js</a></li>
      <li><a href="#">React.js</a></li>
      <li><a href="#">Bootstrap</a></li>
      <li><a href="#">Node JS</a></li>
      <li><a href="#">Git</a></li>
      <li><a href="#">SASS</a></li>
      <li><a href="#">mySQL</a></li>
      <li><a href="#">AGILE</a></li>
      <li><a href="#">SQI</a></li>
      <li><a href="#">npm</a></li>
      <li><a href="#">Figma</a></li>
      <li><a href="#">Motion</a></li>
    </ul>
  </canvas>
</template>
