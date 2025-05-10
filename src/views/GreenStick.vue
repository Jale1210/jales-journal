<template>
  <div class="green-container">

    <!--       mobile version -->
    <div class="nav-mobile show-mobile ">
      <router-link to="/">
        <img class="main-logo" style="width: 120px;" src="../assets/../assets/J5.png">
      </router-link>
    </div>

    <div id="sidemenu">
      <button class="sidemenu__btn" v-on:click="isMenuOpen=!isMenuOpen"
              v-bind:class="{active:isMenuOpen}">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="translateX">
        <nav v-show="isMenuOpen">
          <div class="sidemenu__wrapper">
            <ul class="sidemenu__list">

              <div data-cursor-hover class="container header-container"
                   style="display: flex;   position: absolute;
                            left: 50px; top: 30px; justify-content: flex-start;">
                <div class="lang-header">
                  <LangContainer style=" padding:0 "/>
                </div>
              </div>


              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="/">
                  {{ loca.welcome }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="#about">
                  {{ loca.about }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="#music">
                  {{ loca.music }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="">
                  {{ loca.stories }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="#contact">
                  {{ loca.contact }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>

    <!--    mobile version end-->

    <!-- Header Section -->
    <header class="header show-desktop">
      <router-link to="/" data-cursor-hover>
        <img class="main-logo" src="../assets/J5.png" alt="Jale's Journal Logo"/>
      </router-link>

      <nav class="nav">
        <a data-cursor-hover class="navTxt">{{ loca.welcome }}</a>
        <a data-cursor-hover href="/#about"

           class="navTxt">{{ loca.about }}</a>

        <a data-cursor-hover href="/#music" class="navTxt">{{ loca.music }}</a>
        <a data-cursor-hover href="/#stories" class="navTxt">{{
            loca.stories
          }}</a>
        <a data-cursor-hover href="/#contact" class="navTxt">{{
            loca.contact
          }}</a>
      </nav>


      <LangContainer/>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content" style="position: relative">

        <div>
        <span class="elegant-text  ">
          {{ music.bluePage.blueMainTxt }}
        </span>

        </div>


      </div>

      <div class="image-right">
        <img src="../assets/stories/Tolstoy2.jpg"/>

        <div class="quote">
          <span>
            If you feel  pain, you're alive.<br/>
            If you feel other people's pain, you're a human being.<br/>
          </span>
        </div>
        <img src="../assets/stories/Tolstoy3.jpg"/>
        <img src="../assets/stories/Tolstoy4.jpg"/>
        <div class="quote">
          <span>
          Seize the moments of happiness, love and be loved! <br/>
            That is the only reality in the world, all else is folly. It is the one thing we are interested in here.
          </span>
        </div>
        <img src="../assets/stories/Tolstoy5.jpg"/>
        <img src="../assets/stories/Tolstoy6.jpg"/>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <nav class="footer-links">
        <a data-cursor-hover href="#" class="footer-link">{{ loca.welcome }}</a>
        <a data-cursor-hover href="/#about" class="footer-link">{{ loca.about }}</a>
        <a data-cursor-hover href="/#music" class="footer-link">{{ loca.music }}</a>
        <a data-cursor-hover href="/#stories" class="footer-link">{{ loca.stories }}</a>
        <a data-cursor-hover href="/#contact" class="footer-link">{{ loca.contact }}</a>
      </nav>
      <p class="footer-text">{{ loca.copyright }}</p>
    </footer>
  </div>
</template>

<script>
import {mapState} from "vuex";
import LangContainer from "@/UI/LangContainer";

export default {
  name: "greenStick",
  components: {LangContainer},
  computed: {
    ...mapState(["loca", "music"]),
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  mounted() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      let scroll = document.querySelector('.scroll');
      scroll.style.display = "none";

      document.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 20) {
          scroll.style.display = "block";
        } else {
          scroll.style.display = "none";
          console.log(scroll.style.opacity);
        }
      });
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    // navigateAndScroll(refName) {
    //   this.$router.push("/").then(() => {
    //     this.$nextTick(() => {
    //       this.$emit("scrollToSection", refName);
    //     });
    //   });
    // },
    scrollToComponent(refName) {
      if (this.$route.path !== "/") {
        // If not on home page, navigate first
        this.$router.push("/").then(() => {
          this.$nextTick(() => {
            this.scrollToRef(refName);
          });
        });
      } else {
        // If already on home page, just scroll
        this.scrollToRef(refName);
      }
    },
    scrollToRef(refName) {
      this.$nextTick(() => {
        const component = this.$refs[refName];
        if (component) {
          component.scrollIntoView({behavior: "smooth", block: "start"});
        }
      });
    }

  }
};
</script>

<style scoped>


.image-right {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 20%;
  margin-top: -30px;
  margin-bottom: -30px;
}

.quote {
  padding: 30px 20px;
  margin: 0;
  display: flex;
  font-family: 'Tangerine', cursive;
  flex-direction: column;
  line-height: 40px;
  font-size: 32px;
  /* gap: 15px;*/
  background-color: black;
  color: white
}

.imgContainer > img {
  width: 30%;
  display: flex;
  gap: 10px
}

.nav-mobile {
  padding: 10px 50px;
  text-align: center;
  color: #fff;
  background: none;
}

.nav-mobile:before {
  background-color: rgba(5, 40, 51, 0.94);
  box-shadow: none;
}

#sidemenu nav {
  background-color: rgb(5, 40, 51);
}


ol {
  list-style: symbols(cyclic "♪");
}

@counter-style thumbs {
  system: cyclic;
  symbols: "♪" ;
  suffix: " ";
}

ul {
  flex-direction: column;
  align-items: initial;
  list-style: thumbs;
}

li {
  text-align: left;
  padding: 0 5px
}

.justify {
  text-align: justify;
}

.block {
  display: block !important;
}

/******** General Page Styling ********/
.green-container {
  font-family: 'Playfair Display', serif;
  background-color: #CACABC;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/******** Header Styling ********/
.header {
  background-color: rgba(37, 37, 33, 0.89);
  padding: 20px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.main-logo {
  width: 180px;
}

.nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px
}

.navTxt {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  /*color: #f2cd9d;*/
  color: #fff;
  transition: color 0.3s ease;
  cursor: pointer;
}

.navTxt:hover {
  color: #d1e7ff;
}

/******** Hero Section Styling ********/
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  text-align: center;
}

.hero-content {
  background: rgba(255, 254, 253, 0.9);
  margin: 20px 70px;
  color: #333;
  font-family: 'Playfair Display', serif;
  line-height: 1.6;
  padding: 30px 70px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.elegant-text {
  font-size: 28px;
  color: #3b2b20;
  padding: 20px 0;
  display: block;
  text-align: center;
  font-weight: 500;
  font-style: italic;
}

.description {
  display: flex;
  font-family: cursive;
  gap: 18px;
  /*align-items: center;
  font-size: 20px;*/
  font-weight: 500;
  padding-left: 20px;
  font-size: 16px;
  color: #333;
}

/******** Footer Styling ********/
.footer {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  background-color: rgba(5, 40, 51, 0.94);
  padding: 20px 50px;
  text-align: center;
  color: #fff;
}

.footer-links {
  padding: 0 10px 20px 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 10px;
}

.footer-link {
  font-size: 22px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #d1e7ff;
}

.footer-text {
  font-size: 14px;
  font-style: italic;
}

.textRight {
  text-align: right;
}

.textLeft {
  text-align: left;
}

.sectionContainer {
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 20px;
  padding: 10px 0px;
}

.listContainer {
  display: flex;
  padding: 10px 0;
  gap: 10px;
  justify-content: space-between;
  align-items: center
}


/* less than 1225 */
@media only screen and (max-width: 1225px) {

  ul {
    /*align-items: center;*/
  }

  li {
    /*text-align: center;*/
  }

  .sidemenu__item {
    text-align: center;
  }
}


/* less than 950 */
@media only screen and (max-width: 950px) {

  .blue-page {
    background: url('../assets/music-img/sea2.jpg') no-repeat center center;
    background-size: cover; /* Ensures it stretches to fit */
    background-attachment: scroll; /* Prevents issues on mobile */
    min-height: 100vh; /* Ensures it covers the full viewport */
    width: 100%; /* Ensures it spans the full width */
  }

  /* just try*/
  .elegant-text {
    font-size: 22px;
    text-align: center;
  }

  .description {
    font-size: 18px;
  }

  a > .description {
    align-items: initial !important;
    text-align: left !important;
  }

  .sectionContainer > span {
    text-align: justify;
    /*text-align: center;*/
  }

  .justify {
    text-align: center;
  }

  .sectionContainer {
    gap: 30px;
    flex-direction: column;
  }

  .show-desktop {
    display: none;
  }

  .show-mobile {
    display: flex;
  }


  .notes-page {
    /*overflow-x: hidden;
    //overflow-y: auto;
    //width: 100vw;
    height: calc(100vh + 50px);
     no-repeat center center
    */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: url("../assets/roses-bg-mobile.jpg") repeat;
  }

  /*repeating-linear-gradient(45deg, black, transparent 100px);*/
  #sidemenu {
    display: flex !important;
  }

  .main-logo {
    width: 130px !important;

  }

  .hero-content {
    padding: 0px 30px;
    margin: 130px 50px 20px 50px;
  }

  .hero {
    margin: 30px 0;
  }
}

/* less than 850 */
@media only screen and (max-width: 850px) {
  .listContainer {
    flex-direction: column;
    justify-content: flex-start;
  }

  ul {
    width: 100%;
  }
}

/* 625px and down) */
@media only screen and (max-width: 625px) {
  .footer-links {
    font-size: 20px;
    flex-wrap: wrap;
  }
}

.shellImg {
  position: absolute;
  width: 17%;
  right: 0;
  top: 0
}

.whaleImg {
  position: absolute;
  width: 25%;
  right: 0;
  bottom: -30px;
  transform: rotate(333deg);
}

.polaroidImg {
  position: absolute;
  width: 25%;
  right: 0;
  bottom: -30px;
  transform: rotate(10deg);
}

.grid li:nth-child(1) {
  grid-column: span 1;
  /*grid-column: span 2;*/
  grid-row: span 2;
}

.grid {
  display: grid;
  grid-gap: 8px;
  /*grid-template-columns: repeat(2, 1fr);*/
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 20vw;
  /*grid-auto-rows: 12vw;
  grid-auto-rows: 30vw;*/
  list-style: none;
}

.grid li {
  padding: 0;
}

.grid figure,
.grid img {
  margin: 0;
  width: 100%;
  height: 100%;
}

.grid img {
  object-fit: cover;
  background: #f5f3f4;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

@media (min-width: 850px) {
  .grid {
    /*grid-gap: 24px;*/
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 12vw;
  }

  .grid li:nth-child(1) {
    grid-column: span 1;
    /*grid-column: span 2;*/
    grid-row: span 2;
  }
}

</style>