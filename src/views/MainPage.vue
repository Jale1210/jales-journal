<template>
  <div class="mainPage">
    <div class="flex">

<!--       test  start -->
      <!--       show on mobile   -->
      <div class="nav-mobile show-mobile "  >

        <img class="main-logo" style="width: 50px" src="../assets/logo.png">

        <div id="sidemenu">
          <button class="sidemenu__btn" v-on:click="isMenuOpen=!isMenuOpen"
                  v-bind:class="{active:isMenuOpen}">
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
          </button>
          <transition name="translateX">
            <nav v-show="isMenuOpen"  >
              <div class="sidemenu__wrapper">
                <ul class="sidemenu__list">

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
                      Welcome
                    </a>
                  </li>
                  <li class="sidemenu__item" @click="this.toggleMenu">
                    <a href="#about" @click.prevent="scrollToComponent('about')">
                      About Me
                    </a>
                  </li>
                  <li class="sidemenu__item" @click="this.toggleMenu">
                    <a href="#music" @click.prevent="scrollToComponent('music')">
                      Music
                    </a>
                  </li>
                  <li class="sidemenu__item" @click="this.toggleMenu">
                    <a href="" @click.prevent="scrollToComponent('stories')">
                      Stories
                    </a>
                  </li>
                  <li class="sidemenu__item" @click="this.toggleMenu">
                    <a href="#contact" @click.prevent="scrollToComponent('contact')">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </transition>
        </div>

      </div>
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
        <div class="frostedGlass" >
<!--            :class="{ 'menu-open': isMenuOpen }" -->

          <nav class="nav">
            <a  data-cursor-hover class="navTxt">Welcome</a>
            <a  data-cursor-hover href="#" @click.prevent="scrollToComponent('about')" class="navTxt">About Me</a>
            <a  data-cursor-hover href="#" @click.prevent="scrollToComponent('music')" class="navTxt">Music</a>
            <a  data-cursor-hover href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">Stories</a>
            <a  data-cursor-hover href="#" @click.prevent="scrollToComponent('contact')" class="navTxt">Contact</a>
<!--            <a  data-cursor-hover href="#" @click.prevent="scrollToComponent('thankYou')" class="navTxt">Thank you</a>-->
<!--            <a  data-cursor-hover href="#" @click.prevent="scrollToComponent('charity')" class="navTxt">Charity</a>-->
          </nav>
        </div>
      </main>


    </div>


    <div ref="about"   class="page-section">
      <AboutPage :key="componentKeys.about"/>
    </div>
    <div ref="music" class="page-section">
      <MusicPage :key="componentKeys.music"/>
    </div>
<!--    <div ref="stories" class="page-section">-->
<!--      <StoriesPage :key="componentKeys.stories"/>-->
<!--    </div>-->
    <div ref="contact" class="page-section">
      <ContactPage :key="componentKeys.contact"/>
    </div>



<!--    <div ref="thankYou" class="page-section">-->
<!--      <ThankYouPage :key="componentKeys.thankYou"/>-->
<!--    </div>-->
<!--    <div ref="charity" class="page-section">-->
<!--      <CharityPage :key="componentKeys.charity"/>-->
<!--    </div>-->


    <!--    <RunningPage />-->

    <footer>
      <div class="parallax" >
        <div style=" justify-content: center; display: flex">
          <div style="  display: flex;
                  justify-content: center; flex-direction: column">
            <nav class="footer-links">
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToTop()">Welcome</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('about')">About Me</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('music')">Music</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('stories')">Stories</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('contact')">Contact</a>
            </nav>
            <span class="footer-txt">© 2024 Ismayilova Jale. All rights reserved.</span></div>
        </div>
      </div>
    </footer>


  </div>
</template>

<script>


import MainHeader from "@/components/MainHeader";
// import NavPage from "@/components/navPage";
import AboutPage from "@/components/AboutSection";
import MusicPage from "@/components/MusicSection";
// import StoriesPage from "@/components/StoriesSection.vue";
import ContactPage from "@/components/ContactSection.vue";


// import ThankYouPage from "@/components/ThankYouSection.vue";
// import CharityPage from "@/components/CharitySection.vue";
// import MainFooter from "@/components/MainFooter";
// import RunningPage from "@/components/RunningPage";
export default {
  name: "MainPage",
  components: {
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
      // currentComponent: 'AboutPage', // Default component to show

      observer: null, // Intersection Observer instance
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
      const component = this.$refs[refName];
      if (component) {
        component.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
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

  // beforeDestroy() {
  //   // Clean up Intersection Observer when the component is destroyed
  //   if (this.observer) {
  //     this.observer.disconnect();
  //   }
  // },
  mounted() {
    this.$nextTick(() => {
      // Create an Intersection Observer instance
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
  /*font-size: 48px; big desktop*/
  font-size: 40px;
  font-family: 'Tangerine', cursive;
  width: 100%;
  display: block;
  /*margin: 60px 0; big desktop*/
  margin: 36px 0
}

/*  footer  */

/*footer {*/
/*  position: relative;*/
/*}*/


/*.parallax {*/
/*  !*height: 200px;*!*/
/*  background-color: rgba(240, 229, 207, 1); !* Pale gold *!*/
/*  padding: 10px;*/
/*  text-align: center;*/
/*  background-image: url('../assets/images/red-roses.jpg');*/
/*  filter: brightness(40%);*/
/*  background-attachment: fixed;*/
/*  background-repeat: no-repeat;*/
/*  background-size: 100% auto;*/
/*}*/

/*.parallax {*/
/*  !*width: 100vw;*!*/
/*}*/

/*.footer-links {*/
/*  padding-bottom: 30px;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  gap: 50px*/
/*}*/

/*.footer-txt {*/
/*  font-family: "Playfair Display", serif;*/
/*  font-weight: 400;*/
/*  font-style: normal;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-content: center;*/
/*  flex-direction: column;*/
/*  font-size: 18px;*/
/*}*/

/*.footer-link-txt {*/
/*  font-family: "Playfair Display", serif;*/
/*  font-weight: 400;*/
/*  font-style: normal;*/
/*  font-size: 22px;*/
/*}*/

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
  padding: 0 10px 20px 10px ;
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
  font-size: 14px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

/* 625px and down) */
@media only screen and (max-width: 625px) {
  .footer-links{
    font-size: 20px;
    flex-wrap: wrap;
  }
  .parallax{
    padding: 30px 0 ;
  }
}


/* Extra small devices (phones, 945px and down) */
@media only screen and (max-width: 945px) {
  .parallax{
    background-attachment: initial;
  }
}

</style>
