<template>
  <header class="header"  >
    <div class="header-nav">

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


      <div class="show-desktop">
        <img class="main-logo" src="../assets/J5.png">
      </div>


      <h1 class="elegant-text" style="color: #e5b5a1">
        Welcome to My Blog!</h1>
      <!--      color: #f8d3a5;-->
    </div>


    <div>
      <span class="main-txt">
      I'm thrilled to have you here! This space is a reflection of my passions, interests, and experiences, and I’m excited to share it all with you.
        <!-- Whether you're here to find insightful articles, practical tips, or just to enjoy some engaging stories, you’re in the right place.-->
        <!--        My goal is to create a community where we can explore ideas, learn together, and inspire each other. I believe in the power of connection, and through this blog, I hope to connect with you on topics that matter to us both.-->
        I look forward to this journey with you—let’s make it a great one!
      </span>


      <span style="font-family: 'Tangerine', cursive; font-size: 34px;
      padding-top: 30px; display: flex; position:relative;">
      -Sincerely Yours, Jale
        <img class="heart-img" src="../assets/decorations/heart.png">
      </span>

    </div>
  </header>
</template>

<script>

export default {
  name: "MainHeader",
  data() {
    return {
      isMenuOpen: false
    }
  },

  mounted() {
    this.handleScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
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


    scrollToComponent(refName) {
      const component = this.$refs[refName];
      if (component) {
        component.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    onScroll() {
      const element = this.$el.querySelector('.elegant-text');
      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.header {
  position: relative;
  padding: 0px 70px;
  font-family: 'Garamond', serif;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.elegant-text.animate {
  opacity: 1;
  transform: translateY(0); /* Bring to original position */
}

.main-txt {
  line-height: 30px;
  /*width: 80%;*/
  display: flex;
  text-align: justify;
  letter-spacing: 1px;
}

.heart-img {
  position: absolute;
  position: absolute;
  height: 50px;
  left: 190px;
  top: 50px;
  transform: rotate(40deg);
}

.elegant-text:hover {
  color: #e19d72;
}

/* Extra small devices (phones, 770px and down) */
@media only screen and (max-width: 770px) {
  .elegant-text {
    font-size: 32px;
  }
  .header{
    gap:20px
  }
  .main-logo{
    width: 220px;
  }
}

</style>