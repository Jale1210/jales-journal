<template>
  <header class="header">
    <div class="header-nav">

      <div class="show-desktop">
        <router-link to="/">
          <img class="main-logo" src="../assets/J5.png">
        </router-link>
      </div>

      <h1 class="elegant-text" style="color: #e5b5a1">
        {{ loca.welcomeTxt }}</h1>
      <!--      color: #f8d3a5;-->
    </div>

    <div>
      <span class="main-txt">
     {{ loca.welcomeDesc }}
        <!-- Whether you're here to find insightful articles, practical tips, or just to enjoy some engaging stories, you’re in the right place.-->
        <!--        My goal is to create a community where we can explore ideas, learn together, and inspire each other. I believe in the power of connection, and through this blog, I hope to connect with you on topics that matter to us both.-->
      </span>

      <span class="sincerelyYours">
      {{ loca.sincerelyYours }}
        <img class="heart-img" src="../assets/decorations/heart.png">
      </span>

    </div>
  </header>
</template>

<script>
import {mapActions, mapState} from 'vuex';

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

  computed: {
    ...mapState(['loca']),

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
  right: 10%;
  /*left: 190px;*/
  top: 50px;
  transform: rotate(40deg);
}

.sincerelyYours {
  font-family: 'Playfair Display', cursive;
  font-style: italic;
  font-size: 34px;
  padding-top: 30px;
  display: flex;
  position: relative;
}

.elegant-text:hover {
  color: #e19d72;
}

/* Extra small devices (phones, 770px and down) */
@media only screen and (max-width: 770px) {
  .elegant-text {
    font-size: 32px;
  }

  .sincerelyYours {
    font-size: 24px;
  }

  .header {
    gap: 20px
  }

  .main-logo {
    width: 220px;
  }
}

</style>