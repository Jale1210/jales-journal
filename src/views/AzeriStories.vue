<template>
  <div class="azeri-container">

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


      <div class="hero-content">

          <span class="elegant-text  ">
            {{ stories.azeriStories.storyHeader }}
          </span>

          <div class="title-with-underline">
            <span class="fancy-title">{{ stories.azeriStories.firstHeader }}</span>
            <img style="width: 150px" src="../assets/stories/line.png">
          </div>


          <div class="main-txt">
            {{ stories.azeriStories.firstDesc }}

            <div style="display: block; height: max-content">
              <ul class="grid-layout">
                <li class="tall">
                  <figure>
                    <img src="../assets/stories/nizami2.png" alt="Nizami 2" />
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <div class="quote">
                      {{ stories.azeriStories.nizamiQuote }}

                    </div>
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img src="../assets/stories/poetry1.jpg" alt="Nizami 3" />
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img src="../assets/stories/nizami1.png" alt="Nizami 1" />
                  </figure>
                </li>
              </ul>

            </div>
          </div>

            <div class="title-with-underline"  >
              <span class="fancy-title">{{ stories.azeriStories.secondHeader }}</span>
              <img style="width: 150px" src="../assets/stories/line.png">
            </div>

          <div class="main-txt">
            {{ stories.azeriStories.secondDesc }}

            <div style="display: block; height: max-content">
              <ul class="grid-layout">
                <li class="tall">
                  <figure>
                    <img   src="../assets/stories/mirror.jpg">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img     src="../assets/stories/mirze.jpeg">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img    src="../assets/stories/mirze2.jpg">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img    src="../assets/stories/candles.webp">
                  </figure>
                </li>
              </ul>
            </div>


          </div>

          <div class="title-with-underline"  >
              <span class="fancy-title">{{ stories.azeriStories.thirdHeader }}</span>
              <img style="width: 150px" src="../assets/stories/line.png">
          </div>

          <div class="main-txt">
            {{ stories.azeriStories.thirdDesc }}

            <div style="display: block; height: max-content">
              <ul class="grid-layout">
                <li class="tall">
                  <figure>
                    <img   src="../assets/stories/roseBook.jpg">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img     src="../assets/stories/Natavan.jpg">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                   <img    src="../assets/stories/roses.gif">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img    src="../assets/stories/natavan-poetry.jpg">
                  </figure>
                </li>

              </ul>
            </div>
          </div>

            <div class="title-with-underline"  >
              <span class="fancy-title">{{ stories.azeriStories.forthHeader }}</span>
              <img style="width: 150px" src="../assets/stories/line.png">
            </div>

            <div class="main-txt">
              {{ stories.azeriStories.forthDesc }}


              <div style="display: block; height: max-content">
                <ul class="grid-layout">
                  <li class="tall">
                    <figure>
                      <img  src="../assets/stories/poetry.jpg">
                    </figure>
                  </li>

                  <li class="tall">
                    <figure>
                      <img      src="../assets/stories/Celil.jpg">
                    </figure>
                  </li>

                  <li class="tall">
                    <figure>
                      <img    src="../assets/stories/poetry2.webp">
                    </figure>
                  </li>

                  <li class="tall">
                    <figure>
                      <img    src="../assets/stories/celil2.webp">
                    </figure>
                  </li>

                </ul>
              </div>


          </div>

          <div class="title-with-underline" >
            <span class="fancy-title">{{ stories.azeriStories.fifthHeader }}</span>
            <img style="width: 150px" src="../assets/stories/line.png">
          </div>

          <div class="main-txt">
            {{ stories.azeriStories.fifthDesc }}

            <div style="display: block; height: max-content">
              <ul class="grid-layout">
                <li class="tall">
                  <figure>
                    <img   src="../assets/stories/saz.jpg">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img      src="../assets/stories/dedeqorgud.png">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img    src="../assets/stories/mountains.webp">
                  </figure>
                </li>

                <li class="tall">
                  <figure>
                    <img    src="../assets/stories/church.webp">
                  </figure>
                </li>

              </ul>
            </div>






          </div>
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
  name: "azeriStories",
  components: {LangContainer},
  computed: {
    ...mapState(["loca", "stories"]),
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


.title-with-underline {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  justify-content: center;
  align-items: center;
}

.fancy-title {
  font-size: 24px;
  color: #3b2b20;
  padding: 20px 0 10px 0;
  display: block;
  text-align: center;
  font-weight: 500;
  font-style: italic;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: white;
  margin: 0;
}

.underline {
  width: 100%;
  height: 20px;
}


@keyframes fadeInSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.image-top {
  display: none;
}

.decorated-image {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 250px;
  width: 100%;
}

.decorated-image:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.vintage-style {
  filter: sepia(0.3) contrast(1.1);
}

.image-row {
  display: flex;
  justify-content: space-around;
  align-content: center;
  gap: 20px
}


.image-frame {
  text-align: center;
  margin: 2rem 0;
}

.inkImg {
  height: 100px;
  float: right
}

.image-frame figcaption {
  font-style: italic;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: #555;
}

.main-txt {
  padding-top: 30px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-family: 'Garamond', serif;
  line-height: 30px;
  letter-spacing: 1px;
}

.quote-sign {
  width: 150px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  opacity: 0; /* Start hidden */
  animation: fadeInSlideUp 1.2s ease-out forwards;
  animation-delay: 0.3s; /* Optional delay for dramatic effect */
}

.quote-span {
  display: inline-block;
  opacity: 0; /* Start hidden */
  animation: fadeInSlideUp 1.2s ease-out forwards;
  animation-delay: 0.3s; /* Optional delay for dramatic effect */
}

.image-right {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 20%;
  margin-top: -30px;
  margin-bottom: -30px;
}

.quote {
  white-space: pre-line;
  font-style: italic;
  font-weight: 500;
  position: relative;
  padding: 0 10%;
  display: flex;
  height: 100%;
  text-align: center;
  line-height: 1.6;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  flex-direction: column;

  font-size: 20px;
  background-color: #DDBA9A;
  color: #333;
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
  background-color: #38050F;
  box-shadow: none;
}

#sidemenu nav {
  background-color: #38050F;
}


ol {
  list-style: symbols(cyclic "♪");
}

@counter-style thumbs {
  system: cyclic;
  symbols: "♪" ;
  suffix: " ";
}


.justify {
  text-align: justify;
}

.block {
  display: block !important;
}

/******** General Page Styling ********/
.azeri-container {
  font-family: 'Playfair Display', serif;
  background-image: url("../assets/stories/carpet.jpg");

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/******** Header Styling ********/
.header {
  background-color: #38050F;
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
  color: #DFA196;
}

/******** Hero Section Styling ********/
.hero {
  display: flex;
  /* justify-content: center;
   align-items: center;*/
  justify-content: space-between;
  margin: 30px auto;
  text-align: center;
}

.hero-content {

  margin: 20px 70px;
  background: rgba(255, 254, 253, 0.9);
  /* margin: 20px 70px;*/

  color: #333;
  font-family: 'Playfair Display', serif;
  line-height: 1.6;
  /* max-width: 50.1%;
  max-width: calc(80% - 140px);*/
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
  background-color: #38050F;
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
  color: #DFA196;
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


@media only screen and (max-width: 1180px) {
.quote{
  padding: 0 18px!important;
}
}

/* less than 1077 */
@media only screen and (max-width: 1077px) {
  .image-right {
    display: none;
  }

  .hero {
    flex-direction: column;
  }

  .hero-content {
    margin: 40px 50px !important;
    width: auto;
  }

  .image-top {
    margin-top: 120px;
    display: flex;
  }

  .image-top > img {
    max-height: 250px;
  }

  .image-row {
    flex-direction: column;
    gap: 0;
  }

  .inkImg {
    padding-bottom: 20px;
  }

  .quote {
    padding: 30px 20px 50px 20px;
  }

  .quote-span {
    margin: auto;
    font-size: 14px;
    width: 200px;
  }

  .quote-sign {
    width: 110px;
  }


  .slider-wrapper {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .slider-track {
    display: flex;
    width: max-content;
  }

  .slide {
    flex: 0 0 100%;
    scroll-snap-align: start;
    box-sizing: border-box;
    /* padding: 1rem;*/
  }


}





/* less than 950
@media only screen and (max-width: 950px) {*/
  @media only screen and (max-width: 1050px) {
.hero-content{
  margin: 130px 50px 20px 50px !important;
  }


  .fancy-title:first-child{
    padding-top:0;
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
    font-size: 20px!important;
    flex-wrap: wrap!important;
  }
  .footer{
    padding: 30px 0;
  }
  .grid-layout{
    grid-template-columns: repeat(2, 2fr)!important;
  }

  .quote{
    font-size: 14px!important;
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
.grid-layout {
  display: grid
;
  grid-template-columns: repeat(4, 2fr);
  /* grid-auto-rows: 200px; */
  gap: 20px;
  padding: 0;
  list-style: none;
}

/* Default styling */
.grid-layout li {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-layout li:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.grid-layout figure {
  margin: 0;
  height: 100%;
  width: 100%;
}

.grid-layout img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.grid-layout li:hover img {
  transform: scale(1.05);
}

/* Custom height behavior */
.grid-layout .tall {
  grid-row: span 2;
}

.grid-layout .short {
  grid-row: span 1;
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