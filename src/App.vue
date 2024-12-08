<template>
  <div id="app" class="gradient-background" :style="gradientStyle">

    <div>
      <div ref="cursorOuter" :style="styles.cursorOuter">
        <div ref="cursorOuterShadow" :style="styles.cursorOuterShadow"></div>
      </div>
      <div ref="cursorInner" :style="styles.cursorInner"></div>
    </div>

    <!--    <router-link to="/">Main Page</router-link>-->
    <!--    <router-link to="/top">Top Page</router-link>-->
    <router-view></router-view>
    <!--    <MainPage/>-->
  </div>
</template>

<script>
// import MainPage from "./views/MainPage.vue";
import style from "../src/assets/css/style.css"
export default {
  name: "App",
  components: {

    // MainPage,
  },
  data() {
    return {
      scrollY: 0,
      throttledUpdate: null,
      coords: {x: 0, y: 0},
      isVisible: true,
      isActive: false,
      isActiveClickable: false,
      requestRef: null,
      previousTimeRef: null,
      endX: 0,
      endY: 0
    };
  },
  computed: {
    styles() {
      return {
        cursor: {
          zIndex: 999,
          position: 'fixed',
          opacity: 1,
          pointerEvents: 'none',
          transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
        },
        cursorInner: {
          zIndex: 999,
          position: 'fixed',
          borderRadius: '50%',
          width: `${this.innerSize}px`,
          height: `${this.innerSize}px`,
          pointerEvents: 'none',
          backgroundColor: `rgba(${this.color}, 1)`,
          transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out'
        },
        cursorOuter: {
          zIndex: 999,
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          width: `${this.outerSize}px`,
          height: `${this.outerSize}px`,
          backgroundColor: `rgba(${this.color}, ${this.outerAlpha})`,
          transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
        },
        cursorOuterShadow: {
          position: 'absolute',
          borderRadius: '50%',
          width: '20px', // Adjust size for the shadow effect
          height: '20px', // Adjust size for the shadow effect
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // White shadow
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -1, // Place behind the outer cursor
        }
      };
    },


    gradientStyle() {
      // Calculate the gradient based on scroll position
      const scrollPercent = this.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const color0 = `#703719`;   //1
      const color1 = `#b26840`;   //1
      const color2 = `#F0AB86`;   //2
      const color3 = `#F7DBA7`;   //2
      const color4 = `#F7E7CE`;   //3
      const color5 = `rgba(20, 200, 246, 0.87)`;   //3
      const color9 = `rgba(1, 145, 191, 0.87)`;
      const color10 = `#1a99bc`;
      const color6 = `#c0fdfb`;

      const color7 = `#e8d8c4`;
      const color8 = `#c7b7a3`;
      // const color9 = `#7a333c`;
      // const color10 = `#7a3374`;
      // const color10 = `rgb(194, 199, 246)`
      //const color11 = `rgb(149, 158, 241)` //7
      const color12 = `rgba(139, 86, 166, 0.96)`   //8
      const color13 = `#C88284` //8
      const color14 = `#F3D8DB` //9
      const color15 = `#771011`

      return {
        background: `linear-gradient(to bottom, ${color0} , ${color1} , ${color2}  , ${color3},
         ${color4}  ,  ${color5}  ,  ${color9}    , ${color12} , ${color13} , ${color15})`,
      };
    },
  },
  // methods: {
  //   handleScroll() {
  //     // Throttle the scroll updates
  //     if (!this.throttledUpdate) {
  //       this.throttledUpdate = setTimeout(() => {
  //         this.scrollY = window.scrollY;
  //         this.throttledUpdate = null;
  //       }, 100); // Adjust the throttle delay as needed
  //     }
  //   },
  // },
//   mounted() {
//     window.addEventListener('scroll', this.handleScroll);
//   },
//   beforeDestroy() {
//     window.removeEventListener('scroll', this.handleScroll);
//   },
// };

  props: {
    color: {
      type: String,
      default: '220, 90, 90'
    },
    outerAlpha: {
      type: Number,
      default: 0.4
    },
    innerSize: {
      type: Number,
      default: 8
    },
    outerSize: {
      type: Number,
      default: 8
    },
    outerScale: {
      type: Number,
      default: 5
    },
    innerScale: {
      type: Number,
      default: 0.7
    }
  },


  methods: {
    onMouseMove(event) {
      this.coords = {x: event.clientX, y: event.clientY};
      this.$refs.cursorInner.style.top = `${event.clientY}px`;
      this.$refs.cursorInner.style.left = `${event.clientX}px`;
      this.endX = event.clientX;
      this.endY = event.clientY;
    },
    animateOuterCursor(time) {
      if (this.previousTimeRef !== undefined) {
        this.coords.x += (this.endX - this.coords.x) / 8;
        this.coords.y += (this.endY - this.coords.y) / 8;
        this.$refs.cursorOuter.style.top = `${this.coords.y}px`;
        this.$refs.cursorOuter.style.left = `${this.coords.x}px`;
      }
      this.previousTimeRef = time;
      this.requestRef = requestAnimationFrame(this.animateOuterCursor);
    },
    onMouseDown() {
      this.isActive = true;
    },
    onMouseUp() {
      this.isActive = false;
    },
    onMouseEnter() {
      this.isVisible = true;
    },
    onMouseLeave() {
      this.isVisible = false;
    },
    updateClickables() {
      const clickables = document.querySelectorAll(
          'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
      );
      clickables.forEach(el => {
        el.style.cursor = 'none';

        el.addEventListener('mouseover', () => {
          this.isActive = true;
        });
        el.addEventListener('click', () => {
          this.isActive = true;
          this.isActiveClickable = false;
        });
        el.addEventListener('mousedown', () => {
          this.isActiveClickable = true;
        });
        el.addEventListener('mouseup', () => {
          this.isActive = true;
        });
        el.addEventListener('mouseout', () => {
          this.isActive = false;
          this.isActiveClickable = false;
        });
      });
    }
  },
  watch: {
    isActive(newValue) {
      if (newValue) {
        this.$refs.cursorInner.style.transform = `scale(${this.innerScale})`;
        this.$refs.cursorOuter.style.transform = `scale(${this.outerScale})`;
      } else {
        this.$refs.cursorInner.style.transform = 'scale(1)';
        this.$refs.cursorOuter.style.transform = 'scale(1)';
      }
    },
    isActiveClickable(newValue) {
      if (newValue) {
        this.$refs.cursorInner.style.transform = `scale(${this.innerScale * 1.3})`;
        this.$refs.cursorOuter.style.transform = `scale(${this.outerScale * 1.4})`;
      }
    },
    isVisible(newValue) {
      if (newValue) {
        this.$refs.cursorInner.style.opacity = 1;
        this.$refs.cursorOuter.style.opacity = 1;
      } else {
        this.$refs.cursorInner.style.opacity = 0;
        this.$refs.cursorOuter.style.opacity = 0;
      }
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mouseenter', this.onMouseEnter);
    window.addEventListener('mouseleave', this.onMouseLeave);
    this.updateClickables();
    this.requestRef = requestAnimationFrame(this.animateOuterCursor);
  },

  beforeDestroy() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mouseenter', this.onMouseEnter);
    window.removeEventListener('mouseleave', this.onMouseLeave);
    if (this.requestRef) {
      cancelAnimationFrame(this.requestRef);
    }
  }


};


</script>

<style scoped src="./assets/css/style.css"></style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Tangerine:wght@400;700&display=swap');

#app {
  margin: 0;
  padding: 0;
  /*height: 220vh;*/
  /*background:   linear-gradient(to left top, blue, red);*/
  /*background-attachment: fixed; !*edit*!*/
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

body {
  margin: 0;
}

.gradient-background {
  position: relative;
  min-height: 100vh;
  transition: background 0.5s ease; /* Adjust the transition duration as needed */
}

.content {
  padding: 20px;
}

main {
  /*padding: 20px;*/
}


button.primary {
  background-color: rgba(193, 227, 216, 1); /* Mint green */
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

button.secondary {
  background-color: rgba(135, 206, 235, 1); /* Sky blue */
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

/* tryin to fix the cursor*/

/* play with vars for different effets */
:root {
  --color-cursor: 220, 90, 90;
  --cursor-outline-shade: 0.3;
  --cursor-size: 10px;
  --cursor-outline-size: 12px;
}

html,
body {
  cursor: none;
  background-color: #2f2c2c;
  color: #fff;
  font-family: "Inter", sans-serif;
}

html *,
body * {
  cursor: none;
}

#app {
  text-align: center;
}

h1 {
  margin-bottom: 0.7em;
  font-size: 3em;
  font-weight: 800;
  text-align: center;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  /*border-bottom: 1px solid rgba(255, 255, 255, 0.7);*/
  transition: 0.5s ease;
}

a:hover {
  color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

p {
  width: 80%;
  max-width: 32em;
  margin: 0 auto 1em;
  line-height: 1.7;
  font-weight: 300;
}

hr {
  border: 0;
  height: 2px;
  width: 3em;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 auto 1em;
}

h1 + hr {
  margin: 0 auto 2em;
}

#cursor-dot,
#cursor-dot-outline {
  z-index: 999;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}

#cursor-dot {
  width: var(--cursor-size);
  height: var(--cursor-size);
  background-color: rgba(var(--color-cursor), 1);
}

#cursor-dot-outline {
  width: var(--cursor-outline-size);
  height: var(--cursor-outline-size);
  background-color: rgba(var(--color-cursor), var(--cursor-outline-shade));
}

/* frosted glass*/


.frostedGlass {
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  background: inherit;
  overflow: hidden;
  z-index: 1;
  width: 30vw; height: 100vh; padding: 0 50px
}

.frostedGlass:before {
  content: '';
  position: absolute;
  background: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -20px;
  box-shadow: inset 0 0 500px rgba(255, 255, 255, .4);
  filter: blur(10px);
  z-index: -1;
}

/* */


.main-txt {
  font-family: 'Garamond', serif;
  line-height: 30px;
  text-align: justify;
  letter-spacing: 1px;
  /*font-size: 48px;*/
  /*font-family: 'Tangerine', cursive;*/
  /*color: #703719;*/
}

.elegant-text {
  text-align: left;
  font-size: 44px;
  /*padding-top: 26px;*/
  /*color: #f8d3a5;*/
  font-family: 'Playfair Display', serif;
  font-style: italic;
  /*text-align: center;*/
  /* letter-spacing: 0.05em; */
  animation: fadeIn-4f11bcd6 3s ease-in-out;
  transition: color 0.5s ease-in-out;
}


</style>
