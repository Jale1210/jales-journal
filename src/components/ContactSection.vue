<template>
  <div class="contactPage">

    <!--    <div>-->
    <!--     style="display: flex; gap: 30px;  "   -->
    <div class="film-container show-mobile"
         style="flex-direction: row; ">

      <div class="show-mobile" style="flex-direction: row;  background-color: #D2E1D8 ">
        <div class="film-strip">
          <img alt="" src="../assets/contact/contact1.jpeg">
        </div>
        <div class="film-strip">
          <img alt="" src="../assets/contact/contact2.jpeg">
        </div>
        <div class="film-strip">
          <img alt="" src="../assets/contact/contact3.jpeg">
        </div>
      </div>

    </div>


    <div class="film-container show-desktop">
      <div class="film-strip">
        <img alt="" src="../assets/contact/contact1.jpeg">
      </div>
      <div class="film-strip">
        <img alt="" src="../assets/contact/contact2.jpeg">
      </div>
      <div class="film-strip">
        <img alt="" src="../assets/contact/contact3.jpeg">
      </div>
    </div>

    <div class="text-container">

      <h1 class="elegant-text" style="color:white">
        {{loca.contactTitle}}
      </h1>

      <span class="description">
         {{loca.contactDesc}}
        </span>

      <div>
        <span class="mainTxt">{{loca.socialLinks}}</span>

        <div class="icons">
          <ul>
            <li>
              <a href="mailto:jales_journal@mail.ru" target="_blank"
                  data-cursor-hover class="envelope">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </a>

              <a  href="mailto:jales_journal@mail.ru" target="_blank"
                  data-cursor-hover class="description" style="font-size:18px">
                jales_journal@mail.ru
              </a>

            </li>

            <li>
              <a href="https://www.instagram.com/jales_journal" target="_blank"
                  data-cursor-hover class="instagram">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>

              <a  href="https://www.instagram.com/jales_journal" target="_blank"
                  data-cursor-hover class="description" style="font-size:18px">
                  jales_journal
              </a>
            </li>

          </ul>
        </div>


      </div>
    </div>

    <div class="second-film"
         style="display: flex; flex-direction: column;  background: #faebd7c7;">
      <div class="film-strip">
        <img alt="" src="../assets/contact/contact3.jpeg">
      </div>
      <div class="film-strip">
        <img alt="" src="../assets/contact/contact2.jpeg">
      </div>
      <div class="film-strip">
        <img alt="" src="../assets/contact/contact1.jpeg">
      </div>
    </div>
  </div>

  <!--    <div class="content">  </div>-->

  <!--      <div style=" display: flex; height: 250px ">-->
  <!--        <div class="parallax">-->

  <!--        </div>-->
  <!--        <span style='position:absolute; top: 15%; font-size: 34px; font-family: "Dancing Script", cursive;-->
  <!--                      left: 20%; font-family: "Dancing Script", cursive;'>-->
  <!--          May your life be surrounded by the Light of the Divine Universe.</span>-->
  <!--      </div>-->


  <!--  </div>-->
</template>


<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: "ContactSection",
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['loca']),

  },
}
</script>

<style scoped>
.contactPage {
  display: flex;
  gap: 30px;
  /*height: 100vh;*/
  /*background: url('https://i.pinimg.com/564x/5f/76/d9/5f76d9f938903e44c6a2d5e1f97eb4b4.jpg') no-repeat center center fixed;*/
  background-size: cover;
  position: relative;

}

.text-container {
  margin: auto 70px;
  text-align: justify;
}


.description {
  font-weight: 700;
  font-family: 'Garamond', serif;
  line-height: 30px;
  text-align: justify;
  letter-spacing: 1px;
  display: flex;
  margin: auto 0;
  padding: 20px 0
}

.description:hover {

  color: #f8dcbf;
}

.film-container {
  /*display: flex;*/
  flex-direction: column;
  background: #faebd7c7;
}


/* HTML: <img class="film-strip" src="" alt=""> */
.film-strip {
  --s: 12px; /* control the size */
  --c: #222;
  /**/
  /*rotate: 90deg;*/
  /*width: 80px;*/
  /**/
  /*width: calc(20 * var(--s));*/
  aspect-ratio: 1.25;
  background: conic-gradient(at 50% var(--s), var(--c) 75%, #0000 0) 0 0/calc(2 * var(--s)) calc(100% - var(--s)) padding-box;
  border: var(--s) solid var(--c);
  padding: calc(var(--s) * 2.5) calc(var(--s) * 1.5);
  box-sizing: content-box;
  /* you can add a filter for an oldish effect
  filter: sepia(1) brightness(0.9) grayscale(.2);
  */
}

.film-strip > img {
  width: 140px;
}

.mainTxt {
  display: block;
  padding: 30px 0;
  font-size: 40px;
  font-family: "Dancing Script", serif;
}

/*icons*/

.icons {
  position: relative;
}

ul {
  padding: 0;
  justify-content: space-between;
  /*align-items: center;*/
  display: flex;
}

ul li {
  display: flex;
  list-style: none;
  align-items: center;
}

ul li a {
  display: block;
  position: relative;
  width: 100px;
  //height: 100px;
  line-height: 100px;
  font-size: 40px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  margin: 0 30px 0 0;
  transition: .5s;
}

ul li a span {
  position: absolute;
  transition: transform .5s;
}

ul li a span:nth-child(1),
ul li a span:nth-child(3) {
  width: 100%;
  height: 3px;
  background: #ffffff;
}

ul li a span:nth-child(1) {
  top: 0;
  left: 0;
  transform-origin: right;
}

ul li a:hover span:nth-child(1) {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .5s;
}

ul li a span:nth-child(3) {
  bottom: 0;
  left: 0;
  transform-origin: left;
}

ul li a:hover span:nth-child(3) {
  transform: scaleX(0);
  transform-origin: right;
  transition: transform .5s;
}

ul li a span:nth-child(2),
ul li a span:nth-child(4) {
  width: 3px;
  height: 100%;
  background: #404040;
}

ul li a span:nth-child(2) {
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: bottom;
}

ul li a:hover span:nth-child(2) {
  transform: scale(1);
  transform-origin: top;
  transition: transform .5s;
}

ul li a span:nth-child(4) {
  top: 0;
  right: 0;
  transform: scale(0);
  transform-origin: top;
}

ul li a:hover span:nth-child(4) {
  transform: scale(1);
  transform-origin: bottom;
  transition: transform .5s;
}

.envelope:hover {
  color: #f8dcbf;
}

.envelope:hover span {
  background: #f8dcbf;
}

.instagram:hover {
  color: #f8dcbf;
}

.instagram:hover span {
  background: #f8dcbf;
}


/* less than 480px */
@media only screen and (max-width: 480px) {

  ul li {
    flex-direction: initial;
  }

  ul li a {
    height: auto;
    line-height: 0;
    margin: 0 10px 0 0;
  }

  .film-strip > img {
    max-width: 100px;
  }

}

/* less than 500px */
@media only screen and (max-width: 500px) {
  .show-desktop {
    display: none !important;
  }

  .show-mobile {
    justify-content: center;
    display: flex;
  }

  .contactPage {
    flex-direction: column;
  }


  .film-container {
    flex-direction: row;
    background: #222222;
    width: -webkit-fill-available;;
    /*margin: auto;*/
    /*max-width: calc(100vw - 72px);*/
  }

  .film-strip {
    border-top: 9px solid var(--c);
    border-bottom: 9px solid var(--c);
    border-left: 0;
    border-right: 0;
    /*padding: 0;*/
    margin: 0;
    padding: calc(var(--s) * 1.3) 10px;
    display: flex;
    align-items: center;
    /*height: min-content;*/
  }

  .film-strip > img {
    /*width: auto;*/
    height: 100px;
    object-fit: cover;
  }
}

/* more than 670px */
@media only screen and (min-width: 670px) {
  .show-mobile {
    display: none;
  }

  .show-desktop {
    display: flex;
  }


}

/* less than 670px */
@media only screen and (max-width: 670px) {
  .contactPage {
    gap: 10px;
  }

  .text-container {
    margin: auto 50px auto 20px;
  }

  ul {
    gap: 0 !important;
  }

  ul li a {
    width: auto;
    height: auto;
    margin: 0 30px 0 10px;
    /*width: 50px;*/
    /*height: 100px;*/
    font-size: 24px;
  }

  ul li a span {
    display: none;
  }

  .text-container {
    margin: 30px 50px auto 50px;
  }
}


/* less than 1130px */
@media only screen and (max-width: 1130px) {
  .second-film {
    display: none !important;
  }

  ul {
    flex-direction: column;
    gap: 20px
  }

  .mainTxt {
    padding: 0;
  }
}


</style>