<template>
<div>
  <template>
    <div class="blue-page fake-shader" >

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
                  <a href="/" >
                    <!--                @click.prevent="scrollToTop()"  -->
                    {{ loca.welcome }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="#about">
                    <!--               @click.prevent="scrollToComponent('about')"    -->
                    {{ loca.about }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="#music" >
                    <!--             @click.prevent="scrollToComponent('music')"     -->
                    {{ loca.music }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="">
                    <!--                 @click.prevent="scrollToComponent('stories')"  -->
                    {{ loca.stories }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="#contact" >
                    <!--             @click.prevent="scrollToComponent('contact')"     -->
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
          <!--      @click.prevent=" scrollToComponent('about')"  -->

          <a data-cursor-hover href="/#music" class="navTxt">{{ loca.music }}</a>
          <!--  @click.prevent="scrollToComponent('music')"      -->
          <a data-cursor-hover href="/#stories" class="navTxt">{{
              loca.stories
            }}</a>
          <!--     @click.prevent="scrollToComponent('stories')"   -->
          <a data-cursor-hover href="/#contact" class="navTxt">{{
              loca.contact
            }}</a>
          <!--       @click.prevent="scrollToComponent('contact')"   -->
        </nav>


        <LangContainer/>
      </header>

      <!-- Hero Section -->
<!--      <section class="hero">-->
<!--        <div class="hero-content">-->

<!--          <div class="sectionContainer">-->

<!--          </div>-->

<!--        </div>-->
<!--      </section>-->

      <!-- Footer Section -->
<!--      <footer class="footer">-->
<!--        <nav class="footer-links">-->
<!--          <a href="#" class="footer-link">{{ loca.welcome }}</a>-->
<!--          &lt;!&ndash;       @click.prevent="scrollToTop()"   &ndash;&gt;-->
<!--          <a href="/#about" class="footer-link">{{ loca.about }}</a>-->
<!--          &lt;!&ndash;    @click.prevent="scrollToComponent('about')"     &ndash;&gt;-->
<!--          <a href="/#music" class="footer-link">{{ loca.music }}</a>-->
<!--          &lt;!&ndash;   @click.prevent="scrollToComponent('music')"      &ndash;&gt;-->
<!--          <a href="/#stories" class="footer-link">{{ loca.stories }}</a>-->
<!--          &lt;!&ndash;     @click.prevent="scrollToComponent('stories')"   &ndash;&gt;-->
<!--          <a href="/#contact" class="footer-link">{{ loca.contact }}</a>-->
<!--          &lt;!&ndash;     @click.prevent="scrollToComponent('contact')"    &ndash;&gt;-->
<!--        </nav>-->
<!--        <p class="footer-text">© 2025 Исмаилова Жале. Все права защищены.</p>-->
<!--      </footer>-->
    </div>
  </template>
</div>
</template>

<script>
import LangContainer from "@/UI/LangContainer.vue";
import {mapState} from "vuex";

export default {
  name: "bluePage",
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
}
</script>

<style scoped>
  .blue-page {
    font-family: 'Playfair Display', serif;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;
    background-size: cover !important;
    /*filter: blur(1px);*/
    background: url("https://i.pinimg.com/originals/fc/d5/b1/fcd5b15d42a95b5b56f2cc2eff85e02d.gif") no-repeat;
  }

  .nav-mobile {
    padding: 10px 50px;
    text-align: center;
    color: #f2cd9d;
    background: none;
  }

  .nav-mobile:before {
    background-color: rgba(16, 76, 56, 0.9);

    box-shadow: none;
  }

  #sidemenu nav {
    background-color: rgba(16, 76, 56, 1);;
  }


  .header {
    background-color: rgba(16, 76, 56, 0.9);
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
    /*gap: 20px;*/
  }

  .navTxt {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;
    color: #f2cd9d;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .navTxt:hover {
    color: #ffad60;
  }


  .elegant-text {
    font-size: 28px;
    color: #3b2b20;
    padding: 20px 0;
    display: block;
    text-align: center;
    font-weight: 500;
    /*font-size: 32px;*/
    font-style: italic;
    /*color: #333;*/
  }


</style>