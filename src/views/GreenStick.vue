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

      <div class=" mobile-slider">

        <div class="slider-wrapper">
          <div class="slider-track">
            <div class="image-top slide">

      <img src="../assets/stories/Tolstoy2.jpg"/>

      <div class="quote">
          <span class="quote-span">
          {{ stories.greenStick.quoteOne }}
          </span>
        <img class="quote-sign" src="../assets/stories/leoSign.png"/>
      </div>
      <img src="../assets/stories/Tolstoy3.jpg"/>
      <img src="../assets/stories/Tolstoy4.jpg"/>
      <div class="quote">
          <span class="quote-span">
         {{ stories.greenStick.quoteTwo }}
          </span>
        <img class="quote-sign" src="../assets/stories/leoSign.png"/>
      </div>
      <img src="../assets/stories/Tolstoy5.jpg"/>
      <img src="../assets/stories/Tolstoy6.jpg"/>
    </div>
          </div>
        </div>
      </div>

      <div class="hero-content">


        <div>
        <span class="elegant-text  ">
            {{ stories.greenStick.greenMainTxt }}
        </span>

          <span class="main-txt">
            <span>{{ stories.greenStick.greenDescOne }}</span>
            <span>{{ stories.greenStick.greenDescTwo }}</span>
            <span>{{ stories.greenStick.greenDescThree }}</span>

            <div class="image-row">
              <figure class="image-frame">
              <img class="decorated-image vintage-style" src="../assets/stories/greenBook.jpeg" alt=""/>
                <figcaption>The book “Зелёная палочка”</figcaption>
              </figure>

              <figure class="image-frame">
              <img class="decorated-image vintage-style" src="../assets/stories/polyana.jpeg" alt=""/>
                <figcaption>Leo Tolstoy grave, Yasnaya Polyana</figcaption>
              </figure>
            </div>

            <span>{{ stories.greenStick.greenDescFour }}</span>
            <span>{{ stories.greenStick.greenDescFive }}</span>
            <span>{{ stories.greenStick.greenDescSix }}</span>
            <span>{{ stories.greenStick.greenDescSeven }}</span>
          </span>


          <img style="height:100px;  float: right"
               src="../assets/decorations/ink.png" alt=""/>

        </div>


      </div>

      <div class="image-right">
        <img src="../assets/stories/Tolstoy2.jpg"/>

        <div class="quote">
          <span class="quote-span">
          {{ stories.greenStick.quoteOne }}
          </span>
          <img class="quote-sign" src="../assets/stories/leoSign.png"/>
        </div>
        <img src="../assets/stories/Tolstoy3.jpg"/>
        <img src="../assets/stories/Tolstoy4.jpg"/>
        <div class="quote">
          <span class="quote-span">
         {{ stories.greenStick.quoteTwo }}
          </span>
          <img class="quote-sign" src="../assets/stories/leoSign.png"/>
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
    ...mapState(["loca", "stories", "music"]),
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

.image-top{
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
  position: relative;
  padding: 30px 20px 80px 20px;
  margin: 0;
  display: flex;
  font-style: italic;
  font-family: 'Playfair Display', serif;
  flex-direction: column;
  line-height: 40px;
  font-size: 20px;
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
  background-color: black;
  box-shadow: none;
}

#sidemenu nav {
  background-color: black;
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
  background-color: black;
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
 /* justify-content: center;
  align-items: center;*/
  justify-content: space-between;
  margin: 30px auto;
  text-align: center;
}

.hero-content {
  background: rgba(255, 254, 253, 0.9);
 /* margin: 20px 70px;*/
  margin: auto;
  width: 55%;
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
  background-color: black;
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


/* less than 1077 */
@media only screen and (max-width: 1077px) {
.image-right{
  display: none;
}
  .hero{
    flex-direction: column;
  }
  .image-top{
    margin-top: 120px;
    display: flex;
  }
  .image-top>img{
    max-height: 250px;
  }
  .quote{
    padding: 30px 20px 50px 20px;
  }
.quote-span{
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