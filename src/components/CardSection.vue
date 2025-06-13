<template>
  <div class="card-section">

    <main class="page-content">
      <div class="d_card" v-for="(card, index) in cards" :key="index" :style="{ '--bg-image': `url(${card.image})` }">
        <div class="content">
          <!--          <h2 class="heading">{{ loca.titleOne }}</h2>-->
          <!--          <p class="data-content">{{ loca.descOne }}</p>-->
          <h2 class="heading">{{ card.title }}</h2>
          <p class="data-content">{{ card.content }}</p>

          <router-link data-cursor-hover v-if="index == '0' " to="/notes">
            <ReadButton :readMore="loca.readMore"/>
          </router-link>

          <router-link data-cursor-hover v-if="index == 1 " to="/blue">
            <ReadButton :readMore="loca.readMore"/>
          </router-link>

        </div>
      </div>
    </main>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import ReadButton from "@/UI/ReadButton";

export default {
  name: "CardSection",
  components: {ReadButton},
  computed: {
    ...mapState(['loca']),
    cards() {
      return [
        {
          title: this.loca.titleOne, // Now it's reactive
          content: this.loca.descOne,
          image: '',
        },
        {
          title: this.loca.titleTwo,
          content: this.loca.descTwo,
          image: '',
        }
      ];
    }
  },
  mounted() {
    console.log(111 + this.loca.titleOne);
  },
  data() {
    return {
      readMore: "Read more",

      // cards: [
      //   {
      //     title: this.loca.titleOne,
      //     content: 'Who breathed names into the seven notes?',
      //     image: '',
      //   },
      //   {
      //      title: 'Explore The Cavas',
      //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      //     image: '',
      //    },
      //   // {
      //   //   title: 'Behind the Band Name',
      //   //   content: 'What is the significance of the name "21 Pilots"?',
      //   //   image: '',
      //   // },
      //   // {
      //   //   title: 'Who is Sandman?',
      //   //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      //   //   image: '',
      //   // },
      //   // {
      //   //   title: 'Explore The Cavas',
      //   //   content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      //   //   image: 'https://images.unsplash.com/photo-1580986475035-f0778c60f5ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjV9&auto=format&fit=crop&w=633&q=80',
      //   // },
      // ],
    };
  },
};
</script>


<style scoped>
/*@import url("https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap");*/

* {
  box-sizing: border-box;
}


body {
  display: grid;
  place-items: center;
}

.dd_heading {
  text-align: center;
  font-family: 'Roboto', sans-serif; /* Make sure you have this font available */
}

.card-section {
  padding-bottom: 50px;

  margin: auto;
  display: flex
}

.page-content {
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  font-family: 'Rubik', sans-serif;
}

/*it used to be 600px*/
@media (min-width: 900px) {
  .page-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 800px) {
  .page-content {
    /*grid-template-columns: repeat(4, 1fr);*/
  }
}

.d_card {
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
  0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
  0 16px 16px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

@media (min-width: 600px) {
  .d_card {
    height: 350px;
    /*  added by me */
    width: 350px;
  }
}

.d_card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  transition: transform 1050ms cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transition: -webkit-transform 1050ms cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: none;
}

.d_card:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.009) 11.7%,
      rgba(0, 0, 0, 0.034) 22.1%,
      rgba(0, 0, 0, 0.072) 31.2%,
      rgba(0, 0, 0, 0.123) 39.4%,
      rgba(0, 0, 0, 0.182) 46.6%,
      rgba(0, 0, 0, 0.249) 53.1%,
      rgba(0, 0, 0, 0.32) 58.9%,
      rgba(0, 0, 0, 0.394) 64.3%,
      rgba(0, 0, 0, 0.468) 69.3%,
      rgba(0, 0, 0, 0.54) 74.1%,
      rgba(0, 0, 0, 0.607) 78.8%,
      rgba(0, 0, 0, 0.668) 83.6%,
      rgba(0, 0, 0, 0.721) 88.7%,
      rgba(0, 0, 0, 0.762) 94.1%,
      rgba(0, 0, 0, 0.79) 100%
  );
  transform: translateY(-50%);
  transition: transform 1400ms cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transition: -webkit-transform 1400ms cubic-bezier(0.19, 1, 0.22, 1);
}

.d_card:nth-child(1):before {
  background-image: url('../assets/music-img/piano.jpg');
}

.d_card:nth-child(2):before {
  background-image: url('../assets/music-img/vinyl.gif');
}

.d_card:nth-child(3):before {
  background-image: url('../assets/music-img/sandman.jpg');
}

/*
.d_card:nth-child(4):before {
   background-image: url('../assets/music-img/baloons.jpg');
}*/

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transition: -webkit-transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
}

.content > * + * {
  margin-top: 1rem;
}

.heading {
  text-shadow: 1px 1px 2px black;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
}

.data-content {
  font-family: 'Cardo', serif; /* Updated directly */
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
}

@media (hover: hover) and (min-width: 600px) {
  .d_card:after {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  .content {
    transform: translateY(calc(100% - 8.5rem));
    -webkit-transform: translateY(calc(100% - 8.5rem));
    /*transform: translateY(calc(100% - 4.5rem));
    -webkit-transform: translateY(calc(100% - 4.5rem));*/
  }

  .content > *:not(.heading) {
    opacity: 0;
    transform: translateY(1rem);
    -webkit-transform: translateY(1rem);
    transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1), transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .d_card:hover,
  .d_card:focus-within {
    align-items: center;
  }

  .d_card:hover:before,
  .d_card:focus-within:before {
    transform: translateY(-4%);
    -webkit-transform: translateY(-4%);
  }

  .d_card:hover:after,
  .d_card:focus-within:after {
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }

  .d_card:hover .content,
  .d_card:focus-within .content {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  .d_card:hover .content > *:not(.heading),
  .d_card:focus-within .content > *:not(.heading) {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    transition-delay: calc(700ms / 8);
    -webkit-transition-delay: calc(700ms / 8);
  }

  .d_card:focus-within:before,
  .d_card:focus-within:after,
  .d_card:focus-within .content,
  .d_card:focus-within .content > *:not(.heading) {
    transition-duration: 0s;
    -webkit-transition-duration: 0s;
  }
}


</style>
