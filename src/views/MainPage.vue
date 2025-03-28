<template>
  <div class="mainPage">
    <div class="flex">
      <!--       test  start -->
      <!--       show on mobile   -->
      <div class="nav-mobile show-mobile ">
        <router-link  to="/">
          <img class="main-logo" style="width: 120px;" src="../assets/../assets/J5.png">


<!--        <img class="main-logo" style="width: 50px" src="../assets/logo.png">-->
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

                <div  data-cursor-hover class="container header-container"
                      style="display: flex;   position: absolute;
                            left: 50px; top: 30px; justify-content: flex-start;">
                    <div class="lang-header">
                <LangContainer style=" padding:0 "/>
                </div>
                </div>

                <!--        <a href="#about"-->
                <!--           @click.prevent="scrollToComponent('about')" class="navTxt">-->
                <!--          About Me-->
                <!--        </a>-->
                <!--        <a href="#" @click.prevent="scrollToComponent('music')" class="navTxt">Music</a>-->
                <!--        <a href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">Stories</a>-->
                <!--        <a href="#" @click.prevent="scrollToComponent('thoughts')" class="navTxt">Thoughts</a>-->
                <!--        <a href="#" @click.prevent="scrollToComponent('thankYou')" class="navTxt">Thank you</a>-->
                <!--        <a href="#" @click.prevent="scrollToComponent('charity')" class="navTxt">Charity</a>-->

                <!--                <li class="sidemenu__item"> <a class="navTxt">Welcome</a></li>-->

                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="#welcome" @click.prevent="scrollToTop()">
                    {{ loca.welcome }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="#about" @click.prevent="scrollToComponent('about')">
                    {{ loca.about }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="#music" @click.prevent="scrollToComponent('music')">
                    {{ loca.music }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="" @click.prevent="scrollToComponent('stories')">
                    {{ loca.stories }}
                  </a>
                </li>
                <li class="sidemenu__item" @click="this.toggleMenu">
                  <a href="#contact" @click.prevent="scrollToComponent('contact')">
                    {{ loca.contact }}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </transition>
      </div>

      <!--      </div>-->
      <!--       test end  -->

      <MainHeader/>

      <!--      <main id="background-container">-->
      <!--        &lt;!&ndash;&lt;!&ndash;      <div class="form-container" id="form-container-1">&ndash;&gt;&ndash;&gt;-->
      <!--        &lt;!&ndash;        <nav-page/>&ndash;&gt;-->
      <!--        <div class="frostedGlass" style="width: 30vw;height: 100vh; padding: 0 50px;">-->
      <!--          <nav class="nav">-->
      <!--            <a class="navTxt">Welcome</a>-->
      <!--            <a href="#" @click.prevent="scrollToComponent('about')" class="navTxt">About Me</a>-->
      <!--            <a href="#" @click.prevent="scrollToComponent('music')" class="navTxt">Music</a>-->
      <!--            <a href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">Stories</a>-->
      <!--            <a href="#" @click.prevent="scrollToComponent('thoughts')" class="navTxt">Thoughts</a>-->
      <!--            <a href="#" @click.prevent="scrollToComponent('thankYou')" class="navTxt">Thank you</a>-->
      <!--            <a href="#" @click.prevent="scrollToComponent('charity')" class="navTxt">Charity</a>-->
      <!--          </nav>-->

      <!--        </div>-->
      <!--      </main>-->

      <main id="background-container">

        <!-- Navigation Menu -->
        <div class="frostedGlass">
          <!--            :class="{ 'menu-open': isMenuOpen }" -->

          <div  data-cursor-hover class="container header-container"
                style=" display: flex;  padding: 0 50px; justify-content: flex-end;">
            <div class="lang-header" style="height: 42px">
          <LangContainer/>
<!--            style=""   -->
            </div>
          </div>

          <nav class="nav">
            <a data-cursor-hover class="navTxt">{{ loca.welcome }}</a>
            <a data-cursor-hover href="#" @click.prevent="scrollToComponent('about')" class="navTxt">{{loca.about}}</a>
            <a data-cursor-hover href="#" @click.prevent="scrollToComponent('music')" class="navTxt">{{loca.music}}</a>
            <a data-cursor-hover href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">{{loca.stories}}</a>
            <a data-cursor-hover href="#" @click.prevent="scrollToComponent('contact')" class="navTxt">{{loca.contact}}</a>
          </nav>
        </div>
      </main>
    </div>


    <div id="about" ref="about" class="page-section">
      <AboutPage :key="componentKeys.about"/>
    </div>
    <div id="music" ref="music" class="page-section">
      <MusicPage :key="componentKeys.music"/>
    </div>
    <!--    <div ref="stories" class="page-section">-->
    <!--      <StoriesPage :key="componentKeys.stories"/>-->
    <!--    </div>-->
    <div id="contact" ref="contact" class="page-section">
      <ContactPage :key="componentKeys.contact"/>
    </div>

    <footer>
      <div class="parallax">
        <div style=" justify-content: center; display: flex">
          <div style="  display: flex;
                  justify-content: center; flex-direction: column">
            <nav class="footer-links">
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToTop()">{{loca.welcome}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('about')">{{loca.about}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('music')">{{loca.music}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('stories')">{{loca.stories}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('contact')">{{loca.contact}}</a>
            </nav>
            <span class="footer-txt">{{loca.copyright}}</span></div>
        </div>
      </div>
    </footer>


  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex';
import MainHeader from "@/components/MainHeader";
// import NavPage from "@/components/navPage";
import AboutPage from "@/components/AboutSection";
import MusicPage from "@/components/MusicSection";
// import StoriesPage from "@/components/StoriesSection.vue";
import ContactPage from "@/components/ContactSection.vue";
import LangContainer from "@/UI/LangContainer";


// import ThankYouPage from "@/components/ThankYouSection.vue";
// import CharityPage from "@/components/CharitySection.vue";
// import MainFooter from "@/components/MainFooter";
// import RunningPage from "@/components/RunningPage";
export default {
  name: "MainPage",
  components: {
    LangContainer,
    // MainFooter,
    // CharityPage,
    // ThankYouPage,
    ContactPage,
    // StoriesPage,
    MusicPage,
    AboutPage,
    MainHeader
  },
  data() {
    return {
      observer: null,
      componentKeys: {
        welcome: 0,
        about: 0,
        music: 0,
        stories: 0,
        contact: 0,
        // thankYou: 0,
        // charity: 0
      },

      isMenuOpen: false

    }
  },
  computed: {
    ...mapState(['loca']),

  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
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
          component.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    },

    handleIntersection(entries) {
      entries.forEach(entry => {
        const refName = Object.keys(this.$refs).find(
            key => this.$refs[key] === entry.target
        );

        if (entry.isIntersecting) {
          console.log(`Element with ref "${refName}" is in view.`);
          this.refreshComponent(refName);
        }
      });
    },
    refreshComponent(refName) {
      if (this.componentKeys[refName] !== undefined) {
        this.componentKeys[refName] += 1; // Change key to force re-render
        console.log(`Refreshing component for ref: ${refName}`);
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.observer = new IntersectionObserver(this.handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
      });

      // Start observing the elements
      Object.keys(this.$refs).forEach(refName => {
        const element = this.$refs[refName];
        if (element) {
          this.observer.observe(element);
        }
      });
    });

    console.log('mainpage' + JSON.stringify(this.loca))
  },

  beforeDestroy() {
    // Clean up Intersection Observer when the component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }


};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* General styles */

.lang-header{
    box-sizing: border-box;
    /*height: 42px;*/
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex {
  display: flex;
  /*align-items: center;*/
  justify-content: space-between;
}


.mainPage {
  /*background-color: rgba(245, 245, 245, 1); !* Light gray background *!*/
  /*color: rgba(79, 79, 79, 1); !* Charcoal gray text *!*/
  font-family: Arial, sans-serif;
}


/*  frosted glass*/
#background-container {
  display: flex;
  justify-content: center;
}

#form-container-1 {
  position: relative;
  max-width: 480px;
  height: 180px;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px 40px;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(0px);
  overflow: hidden;
  /* Before animation */
  opacity: 0.2;
  top: -700px;
  animation: 1.5s formInAnim cubic-bezier(.03, 1.08, .71, .95) forwards;
  animation-delay: 1s;
}


@keyframes formInAnim {
  0% {
    opacity: .2;
    top: -700px;
    backdrop-filter: blur(0px);
  }

  100% {
    opacity: 1;
    top: 0;
    backdrop-filter: blur(15px);
  }
}


#form-container-1 .form-block {
  margin: 15px 0;
}

#form-container-1 .form-block label {
  font-family: "Consolas", monospace;
  display: block;
  padding-left: 8px;
  margin-bottom: 8px;
  font-size: 0.85em;
  color: #fff;
  text-align: left;
}

#form-container-1 .form-block input {
  font-size: 0.75em;
  padding: 8px;
  border: none;
  border: 0px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: 0.1s all ease-in-out;
}

#form-container-1 > form input:focus {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  outline: none;
}


.navTxt {
  font-size: 30px;
  font-family: 'Playfair Display', cursive;
  width: 100%;
  display: block;font-style: italic;
  margin: 36px 0
}

footer {
  display: flex;
  justify-content: center;
  margin: auto;
  position: relative;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: white;
}

/* Style for the parallax image */
.parallax {
  width: 100vw;
  /*height: 200px;*/
  background-color: rgba(240, 229, 207, 1); /* Pale gold */
  padding: 60px 0;
  text-align: center;
  /* The image used */
  background-image: url('../assets/images/red-roses.jpg');
  /*filter: brightness(40%);*/
  /* Full height */
  /*height: 200px;*/

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  /*background-position: left;*/
  background-repeat: no-repeat;
  background-size: 100% auto;

}

.footer-links {
  padding: 0 10px 20px 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  gap: 50px
}

.footer-txt {
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

/* 625px and down) */
@media only screen and (max-width: 625px) {
  .footer-links {
    font-size: 20px;
    flex-wrap: wrap;
  }

  .parallax {
    padding: 30px 0;
  }
}


/* Extra small devices (phones, 945px and down) */
@media only screen and (max-width: 945px) {
  .parallax {
    background-attachment: initial;
  }
}

</style>
