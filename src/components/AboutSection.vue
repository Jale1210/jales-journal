<template>
  <div class="aboutPage">
    <!--    class="frostedGlass"     -->

    <div class="imagesContainer show-desktop">
      <div class="imgContainer">
        <img src="@/assets/images/sea.jpg" class="img">

        <div class="imgTxt">
          <span>Life</span><br/>
          <span>is</span><br/>
          <span>beautiful</span>
        </div>
      </div>

      <div class="imgContainer">
        <img src="@/assets/images/flowers.jpg" class="img ">

        <div class="imgTxt">
          <span>Don't</span><br/>
          <span>give</span><br/>
          <span>up</span>
        </div>
      </div>

      <div class="imgContainer">
        <img src="@/assets/images/sky.jpg" class="img">

        <div class="imgTxt">
          <span>Yes, </span><br/>
          <span>You</span><br/>
          <span>can</span>
        </div>
      </div>
    </div>


    <!--    trying to fix  -->
    <div class="film-container show-laptop ">
      <div style="flex-direction: row; display: flex; background-color: #D2E1D8 ">
        <div class="film-strip ">
          <img alt="" src="@/assets/images/sea.jpg">
        </div>

        <div class="film-strip" style="width: 70px; height: 112px">
          <div class="smallImgTxt" >
            <span>Life is beautiful</span>
          </div>
        </div>
        <div class="film-strip" >
          <img alt="" src="@/assets/images/flowers.jpg">
        </div>

        <div class="film-strip"  style="width: 70px; height: 112px">
          <div class="smallImgTxt" >
            <span>Don't give up</span>
          </div>
        </div>


        <div class="film-strip">
          <img alt="" src="@/assets/images/sky.jpg">
        </div>

        <div class="film-strip" style="width: 70px; height: 112px">
          <div class="smallImgTxt" >
            <span>Yes, You can</span>
          </div>
        </div>

      </div>

    </div>

    <div class="aboutContainer">
      <img class="bow" src="../assets/decorations/details1.png"/>
      <h1 class="elegant-text" style="margin-top: 0; color: rgb(112 59 13); ">{{loca.about}}</h1>

      <span class="main-txt txt-brown">
        {{loca.aboutDesc}}
      </span>
    </div>


    <!--    trying to fix  -->
    <div class="film-container show-laptop ">
      <div style="flex-direction: row; display: flex; background-color: #D2E1D8 ">
        <div class="film-strip" style="width: 70px; height: 112px">
          <div class="smallImgTxt" >
             <span>Don't give up</span>
          </div>
        </div>

        <div class="film-strip ">
          <img alt="" src="@/assets/images/sea.jpg">
        </div>

        <div class="film-strip"  style="width: 70px; height: 112px">
          <div class="smallImgTxt" >
            <span>Yes, You can</span>
          </div>
        </div>

        <div class="film-strip" >
          <img alt="" src="@/assets/images/eyes.jpeg">
        </div>


        <div class="film-strip" style="width: 70px; height: 112px">
          <div class="smallImgTxt" >
            <span>You are the art</span>
          </div>
        </div>

        <div class="film-strip">
          <img alt="" src="@/assets/images/sky.jpg">
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: "AboutSection",
  components: {},
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
.show-laptop {
  display: none;
}

.bow {
  position: absolute;
  width: 170px;
  top: 2%;
  right: 2%;
}

.txt-brown {
  color: rgb(115 54 0);
}

.imagesContainer {
  display: flex;
  flex-direction: row;
}

.aboutContainer {
  width: auto;
  display: flex;
  flex-direction: column;
  padding: 0 70px
}

.aboutPage {
  margin: auto;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  position: relative;
  background: inherit;
  display: flex;
  padding: 30px 0 ;
  /*height: 100vh*/
}

.aboutPage:before {
  content: '';
  position: absolute;
  background: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -20px 0 -20px 0px;
  /*margin: -20px;*/
  box-shadow: inset 0 0 500px rgba(255, 255, 255, .4);
  filter: blur(10px);
  z-index: -1;
}


.img {
  /*position: absolute;*/
  width: 280px;
  object-fit: fill;
  height: 490px
}

.imgContainer {
  position: relative;
  /*background-color: rgba(0, 0, 0, 0.5);*/
  width: 280px;
  height: 490px;
  /*height: 497.438px;*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgTxt {
  position: absolute;
  z-index: 99;
  font-family: 'Tangerine', cursive;
  font-size: 52px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 0; /* Align the overlay at the bottom of the container */
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  text-align: center;
  /*padding: 10px;*/
  opacity: 0;
  transition: opacity 0.3s ease;
}


.smallImgTxt{
  opacity: 1;
  width: 140px;
  margin: auto;
  background: transparent;
  position: relative;

  font-family: 'Tangerine', cursive;
  font-size: 32px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*bottom: 0; !* Align the overlay at the bottom of the container *!*/
  /*left: 0;*/

  color: white;
  text-align: center;
  /*padding: 10px;*/
  /*opacity: 0;*/
  /*transition: opacity 0.3s ease;*/
}


.imgContainer:hover .imgTxt {
  opacity: 1;
}

.elegant-text:hover {
  color: #e19d72;
}

/* less than 600 */
@media only screen and (max-width: 600px) {
  .aboutContainer {
    padding: 0 50px
  }

  .aboutPage {
    z-index: auto;
  }
}


/* less than 1275px */
@media only screen and (max-width: 1275px) {
  .imgContainer, .img {
    width: 230px;
  }
}


/* film strip */


.film-container {
  width: 100vw;
  justify-content: center;
  /*display: flex;*/
  flex-direction: row;
  background: #faebd7c7;
  max-height: 162px;
}


.film-strip {
  --s: 12px;
  --c: #222;
  aspect-ratio: 1.25;
  background: conic-gradient(at 50% var(--s), var(--c) 75%, #0000 0) 0 0/calc(2 * var(--s)) calc(100% - var(--s)) padding-box;
  border: var(--s) solid var(--c);
  padding: calc(var(--s) * 2.5) calc(var(--s) * 1.5);
  box-sizing: content-box;

  height: min-content;
}

.film-strip > img {
  width: 140px;
}


/* less than 1160 */
@media only screen and (max-width: 1160px) {
  .aboutPage {
    flex-direction: column;
  }

  .show-desktop {
    display: none;
  }


  .bow {
    display: none;
  }

  .show-laptop {

    display: flex;
  }

  .aboutPage {
    padding: 0;
  }

  .aboutContainer {
    padding: 30px 50px 30px 50px
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
    height: 100px;
    object-fit: cover;
  }
}


</style>