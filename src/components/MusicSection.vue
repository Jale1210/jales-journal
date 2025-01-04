<template>
  <div class="music" style="position: relative">

    <img src="../assets/music-img/arctic.png"
         style="height: 220px; position: absolute; top: 0%; left: 0%;  "/>

    <img src="../assets/music-img/nirvana.png"
         style="height: 200px; position: absolute; top: 15%; left: -5%; transform: rotate(25deg); "/>

<!--    <img src="../assets/decorations/details4.png"-->
<!--         style="width: 170px; position: absolute; top: 0%; right: 1%; transform: rotate(10deg);"/>-->

    <div class="container" style="padding-bottom: 50px">
      <h1 style="display: flex">
        <div class="animation">
          <div class="animation-left"><span>MUSIC</span></div>
          <div class="animation-right"><span>MUSIC</span></div>
        </div>
      </h1>
    </div>


    <div>
      <CardSection/>
    </div>

    <div class="musicTxtContainer">

      <!--      <span style="font-size: 42px;font-family: 'Tangerine', cursive; color: white ">-->
      <!--        Did you know?-->
      <!--      </span>-->

      <span style="font-size: 42px;font-family: 'Tangerine', cursive; color: white ">
<!--      color: rgb(112, 55, 25);  Don't know what to listen?-->
        According to a legend: When a song gets stuck in your head, your soulmate is singing that very song at the same moment.
      </span>


      <!--        <button   type="button"-->
      <!--                  data-cursor-hover-->
      <!--                  style="font-family: 'Cardo', serif; font-size: 1.125rem;margin: 50px 0"-->
      <!--                  class="shiny-button">-->
      <!--          Let me help-->
      <!--        </button>-->
    </div>

    <div class="vinylContainer">
      <!--      first vinyl-->
      <div style="z-index: 999; position: relative; ">
        <!--       margin-left: 40px  -->
        <div class="vinyl-jacket">
          <div class="vinyl-wrapper">
            <div class="vinyl"></div>
          </div>
        </div>
      </div>
      <!--      second vinyl-->
      <div class="vinyl-jacket2">
        <div class="vinyl-wrapper2">
          <div class="vinyl2"></div>
        </div>
      </div>

      <!--      third  vinyl-->
      <div class="vinyl-jacket3">
        <div class="vinyl-wrapper3">
          <div class="vinyl3"></div>
        </div>
      </div>

      <!--      forth  vinyl-->
      <div class="vinyl-jacket4">
        <div class="vinyl-wrapper4">
          <div class="vinyl4"></div>
        </div>
      </div>


    </div>


    <!--  <img src="@/assets/vinyl.gif" />-->

    <!--    <div style="position: relative">-->
    <!--      &lt;!&ndash;       first vinyl &ndash;&gt;-->
    <!--      <div style="z-index: 999; position: relative; margin-left: 40px">-->
    <!--        <div class="vinyl-jacket">-->
    <!--          <div class="vinyl-wrapper">-->
    <!--            <div class="vinyl"></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--&lt;!&ndash;      <img style="width:16%; left:-4%; position:absolute; top: -20%; z-index: 0"&ndash;&gt;-->
    <!--&lt;!&ndash;           src="../assets/abba.png"/>&ndash;&gt;-->

    <!--      <div style="margin-top: 40px;margin-left: 70px; z-index: 999; position: relative">-->

    <!--        <div class="vinyl-jacket2">-->
    <!--          <div class="vinyl-wrapper2">-->
    <!--            <div class="vinyl2"></div>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->

    <!--      <img style="width:20%; left:-10%; position:absolute; bottom: 20%; z-index: 0"-->
    <!--           src="../assets/nirvana.png"/>-->


    <!--      <img src="../assets/linkin-park.png"-->
    <!--           style="position: absolute;width: 19%; left: -6%; bottom: -28%;"/>-->


    <!--    </div>-->


  </div>
</template>

<script>


import CardSection from "@/components/CardSection";


export default {
  name: "MusicSection",
  components: {CardSection}
}
</script>

<style scoped>

.music {
  padding: 50px 30px;
  /*height: 100vh*/
}

.musicTxtContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 30px
}


.vinylContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /*justify-content: space-evenly;*/
  align-items: center;
  flex-direction: row;
  /*padding : 0 10px 50px 10px;*/
  gap: 125px
}

/* first vinyl*/

.vinyl-jacket {
  position: relative;
  border-radius: 1px;
  width: 200px;
  height: 200px;
  perspective: 200px;
  transform-style: preserve-3d;
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0)),
  url('https://i.pinimg.com/564x/18/f4/44/18f444f4bb248172537fa08253070dfc.jpg');
  background-size: cover;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6),
  inset 1px 0 1px rgba(0, 0, 0, 0.3),
  inset 0 -1px 1px rgba(0, 0, 0, 0.6);
  /*cursor: pointer;*/
}

.vinyl-jacket::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://i.pinimg.com/564x/18/f4/44/18f444f4bb248172537fa08253070dfc.jpg');
  background-size: cover;
  transform: translateY(8%) scaleY(-1) scaleX(1.18) rotateX(-20deg);
  -webkit-mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  pointer-events: none;
}

.vinyl-wrapper {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  top: 0;
  left: 16%;
  width: 100%;
  height: 100%;
  transform: translateZ(-8px);
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.6));
  transition: left 0.4s;
}

.vinyl-jacket:hover > .vinyl-wrapper {
  left: 62%;
}

.vinyl {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #21201e;
  background-image: conic-gradient(
      from 45deg,
      rgba(255, 255, 255, 0.25),
      transparent 6.25% 43.75%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 56.25% 93.75%,
      rgba(255, 255, 255, 0.25)
  ),
  radial-gradient(
      farthest-side,
      transparent 0 calc(100% - 1px),
      #342d2b 95.23% 100%),
  radial-gradient(
      farthest-side,
      transparent 0 95.23%,
      #342d2b 95.23% 100%
  ),
  radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.06) 0 40%,
      rgba(0, 0, 0, 0.2) 40% calc(40% + 1px),
      rgba(0, 0, 0, 0.12) calc(40% + 1px) 48%,
      #282826 48% calc(48% + 1px),
      transparent calc(48% + 1px) 100%
  ),
  radial-gradient(
      farthest-side,
      transparent 63.8%,
      rgba(255, 255, 255, 0.03) 63.8% calc(63.8% + 1px),
      transparent calc(63.8% + 1px) 81.9%,
      rgba(255, 255, 255, 0.03) 81.9% calc(81.9% + 1px),
      transparent 0
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 2px
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 5px
  ),
  repeating-radial-gradient(
      farthest-side,
      #1e1d1c,
      #21201e 12.5%
  );
  -webkit-mask-image: radial-gradient(transparent 2.4%, #fff 2.4%);
  box-shadow: inset 0 0 1px 1px #000,
  inset 0 0 0 2px rgba(110, 100, 101, 0.6);
}

.vinyl::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border: 1px solid #3b3b38;
  border-radius: 50%;
  width: 33.33%;
  height: 33.33%;
  background-image: url('https://i.pinimg.com/564x/da/60/34/da60347a91cd6181c32eea30bded4dd2.jpg');
  background-size: cover;
  image-rendering: crisp-edges;
}

/*  second vinyl  */

.vinyl-jacket2 {
  position: relative;
  border-radius: 1px;
  width: 200px;
  height: 200px;
  perspective: 200px;
  transform-style: preserve-3d;
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0)),
  url('https://m.media-amazon.com/images/I/B1HYJn9MrPS._AC_SL1500_.jpg');
  background-size: cover;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6),
  inset 1px 0 1px rgba(0, 0, 0, 0.3),
  inset 0 -1px 1px rgba(0, 0, 0, 0.6);
  /*cursor: pointer;*/
}

.vinyl-jacket2::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://m.media-amazon.com/images/I/B1HYJn9MrPS._AC_SL1500_.jpg');
  background-size: cover;
  transform: translateY(8%) scaleY(-1) scaleX(1.18) rotateX(-20deg);
  -webkit-mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  /*pointer-events: none;*/
}

.vinyl-wrapper2 {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  top: 0;
  left: 16%;
  width: 100%;
  height: 100%;
  transform: translateZ(-8px);
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.6));
  transition: left 0.4s;
}

.vinyl-jacket2:hover > .vinyl-wrapper2 {
  left: 62%;
}

.vinyl2 {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #21201e;
  background-image: conic-gradient(
      from 45deg,
      rgba(255, 255, 255, 0.25),
      transparent 6.25% 43.75%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 56.25% 93.75%,
      rgba(255, 255, 255, 0.25)
  ),
  radial-gradient(
      farthest-side,
      transparent 0 calc(100% - 1px),
      #342d2b 95.23% 100%),
  radial-gradient(
      farthest-side,
      transparent 0 95.23%,
      #342d2b 95.23% 100%
  ),
  radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.06) 0 40%,
      rgba(0, 0, 0, 0.2) 40% calc(40% + 1px),
      rgba(0, 0, 0, 0.12) calc(40% + 1px) 48%,
      #282826 48% calc(48% + 1px),
      transparent calc(48% + 1px) 100%
  ),
  radial-gradient(
      farthest-side,
      transparent 63.8%,
      rgba(255, 255, 255, 0.03) 63.8% calc(63.8% + 1px),
      transparent calc(63.8% + 1px) 81.9%,
      rgba(255, 255, 255, 0.03) 81.9% calc(81.9% + 1px),
      transparent 0
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 2px
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 5px
  ),
  repeating-radial-gradient(
      farthest-side,
      #1e1d1c,
      #21201e 12.5%
  );
  -webkit-mask-image: radial-gradient(transparent 2.4%, #fff 2.4%);
  box-shadow: inset 0 0 1px 1px #000,
  inset 0 0 0 2px rgba(110, 100, 101, 0.6);
}

.vinyl2::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border: 1px solid #3b3b38;
  border-radius: 50%;
  width: 33.33%;
  height: 33.33%;
  background-image: url('https://m.media-amazon.com/images/I/B1HYJn9MrPS._AC_SL1500_.jpg');
  background-size: cover;
  image-rendering: crisp-edges;
}

/*  third vinyl  */

.vinyl-jacket3 {
  position: relative;
  border-radius: 1px;
  width: 200px;
  height: 200px;
  perspective: 200px;
  transform-style: preserve-3d;
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0)),
  url('../assets/music-img/magomayev.jpeg');
  background-size: cover;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6),
  inset 1px 0 1px rgba(0, 0, 0, 0.3),
  inset 0 -1px 1px rgba(0, 0, 0, 0.6);
  /*cursor: pointer;*/
}

.vinyl-jacket3::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/music-img/magomayev.jpeg');
  background-size: cover;
  transform: translateY(8%) scaleY(-1) scaleX(1.18) rotateX(-20deg);
  -webkit-mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  pointer-events: none;
}

.vinyl-wrapper3 {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  top: 0;
  left: 16%;
  width: 100%;
  height: 100%;
  transform: translateZ(-8px);
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.6));
  transition: left 0.4s;
}

.vinyl-jacket3:hover > .vinyl-wrapper3 {
  left: 62%;
}

.vinyl3 {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #21201e;
  background-image: conic-gradient(
      from 45deg,
      rgba(255, 255, 255, 0.25),
      transparent 6.25% 43.75%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 56.25% 93.75%,
      rgba(255, 255, 255, 0.25)
  ),
  radial-gradient(
      farthest-side,
      transparent 0 calc(100% - 1px),
      #342d2b 95.23% 100%),
  radial-gradient(
      farthest-side,
      transparent 0 95.23%,
      #342d2b 95.23% 100%
  ),
  radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.06) 0 40%,
      rgba(0, 0, 0, 0.2) 40% calc(40% + 1px),
      rgba(0, 0, 0, 0.12) calc(40% + 1px) 48%,
      #282826 48% calc(48% + 1px),
      transparent calc(48% + 1px) 100%
  ),
  radial-gradient(
      farthest-side,
      transparent 63.8%,
      rgba(255, 255, 255, 0.03) 63.8% calc(63.8% + 1px),
      transparent calc(63.8% + 1px) 81.9%,
      rgba(255, 255, 255, 0.03) 81.9% calc(81.9% + 1px),
      transparent 0
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 2px
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 5px
  ),
  repeating-radial-gradient(
      farthest-side,
      #1e1d1c,
      #21201e 12.5%
  );
  -webkit-mask-image: radial-gradient(transparent 2.4%, #fff 2.4%);
  box-shadow: inset 0 0 1px 1px #000,
  inset 0 0 0 2px rgba(110, 100, 101, 0.6);
}

.vinyl3::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border: 1px solid #3b3b38;
  border-radius: 50%;
  width: 33.33%;
  height: 33.33%;
  background-image: url('../assets/music-img/magomayev.jpeg');
  background-size: cover;
  image-rendering: crisp-edges;
}


/*  forth vinyl  */

.vinyl-jacket4 {
  position: relative;
  border-radius: 1px;
  width: 200px;
  height: 200px;
  perspective: 200px;
  transform-style: preserve-3d;
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0)),
  url('../assets/music-img/coldplay.jpg');
  background-size: cover;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6),
  inset 1px 0 1px rgba(0, 0, 0, 0.3),
  inset 0 -1px 1px rgba(0, 0, 0, 0.6);
  /*cursor: pointer;*/
}

.vinyl-jacket4::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/music-img/coldplay.jpg');
  background-size: cover;
  transform: translateY(8%) scaleY(-1) scaleX(1.18) rotateX(-20deg);
  -webkit-mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  mask-image: linear-gradient(transparent 80%, rgba(255, 255, 255, 0.1));
  pointer-events: none;
}

.vinyl-wrapper4 {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  top: 0;
  left: 16%;
  width: 100%;
  height: 100%;
  transform: translateZ(-8px);
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.6));
  transition: left 0.4s;
}

.vinyl-jacket4:hover > .vinyl-wrapper4 {
  left: 62%;
}

.vinyl4 {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #21201e;
  background-image: conic-gradient(
      from 45deg,
      rgba(255, 255, 255, 0.25),
      transparent 6.25% 43.75%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 56.25% 93.75%,
      rgba(255, 255, 255, 0.25)
  ),
  radial-gradient(
      farthest-side,
      transparent 0 calc(100% - 1px),
      #342d2b 95.23% 100%),
  radial-gradient(
      farthest-side,
      transparent 0 95.23%,
      #342d2b 95.23% 100%
  ),
  radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.06) 0 40%,
      rgba(0, 0, 0, 0.2) 40% calc(40% + 1px),
      rgba(0, 0, 0, 0.12) calc(40% + 1px) 48%,
      #282826 48% calc(48% + 1px),
      transparent calc(48% + 1px) 100%
  ),
  radial-gradient(
      farthest-side,
      transparent 63.8%,
      rgba(255, 255, 255, 0.03) 63.8% calc(63.8% + 1px),
      transparent calc(63.8% + 1px) 81.9%,
      rgba(255, 255, 255, 0.03) 81.9% calc(81.9% + 1px),
      transparent 0
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 2px
  ),
  repeating-radial-gradient(
      farthest-side,
      rgba(255, 255, 255, 0.005) 0 1px,
      transparent 1px 5px
  ),
  repeating-radial-gradient(
      farthest-side,
      #1e1d1c,
      #21201e 12.5%
  );
  -webkit-mask-image: radial-gradient(transparent 2.4%, #fff 2.4%);
  box-shadow: inset 0 0 1px 1px #000,
  inset 0 0 0 2px rgba(110, 100, 101, 0.6);
}

.vinyl4::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border: 1px solid #3b3b38;
  border-radius: 50%;
  width: 33.33%;
  height: 33.33%;
  background-image: url('../assets/music-img/coldplay.jpg');
  background-size: cover;
  image-rendering: crisp-edges;
}


/*        */

.container {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  /*font-family: Helvetica, Arial, sans-serif;*/
  font-size: 50px;
  color: #fff;
  margin: 0 auto;

@media screen and (max-width: 800px) {
  font-size:

30px
}

}

.animation {
  position: relative;
  width: 100%;

div {
  overflow: hidden;
  width: 50%;
  height: 100%;
  transform: skewX(-20deg);

&
::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 4px;
  background: #fff;
}

}

span {
  padding: 0 10px;
}

}
.animation-left {

&
::before {
  left: 0;
  animation: widthLineLeft 1.2s 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.10) forwards;
}

span {
  display: block;
  animation: slideLeft 1.2s 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.10) forwards;
  transform: translateX(200px) skewX(20deg);
}

}

.animation-right {
  position: absolute;
  right: 0;
  top: 0;

&
:before {
  bottom: 0;
  right: 0;
  animation: widthLineRight 1.2s 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.10) forwards;
}

span {
  position: absolute;
  width: 100%;
  left: -100%;
  transform: translateX(-200px) skewX(20deg);
  animation: slideRight 1.2s 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.10) forwards;
}

}

@keyframes slideLeft {
  from {
    transform: translateX(200px) skewX(20deg);
  }
  to {
    transform: translateX(0%) skewX(20deg);
  }
}

@keyframes slideRight {
  from {
    transform: translateX(-200px) skewX(20deg);
  }
  to {
    transform: translateX(0%) skewX(20deg);
  }
}

@keyframes widthLineLeft {
  0% {
    width: 0%;
    left: 0%;
  }
  50% {
    width: 100%;
    left: 0%;
  }
  100% {
    width: 0%;
    left: 100%;
  }
}

@keyframes widthLineRight {
  0% {
    width: 0%;
    right: 0%;
  }
  50% {
    width: 100%;
    right: 0%;
  }
  100% {
    width: 0%;
    right: 100%;
  }
}


/* shiny effect btn */

.shiny-button {
  position: relative;
  display: inline-block;
  padding: 15px 40px;
  font-size: 16px;
  color: #573019;
  letter-spacing: 1.5px;
  background-color: transparent;
  border: 2px solid transparent;
  border-image: linear-gradient(45deg, #e19050, #a9652c, #703719, #573019);
  border-image-slice: 1;
  /*cursor: pointer;*/
  overflow: hidden;
  transition: background-color 0.3s ease, border 0.3s ease;
}

.shiny-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -150%;
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.4);
  transform: rotate(25deg);
  transition: all 0.7s ease;
}

.shiny-button:hover::before {
  left: 150%;
}

.shiny-button:hover {
  color: white;
  background-color: #e19050;
  border-color: transparent;
}

.shiny-button:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  background: transparent;
  background-size: 200%;
  z-index: -1;
  animation: borderMove 2s linear infinite;
}

@keyframes borderMove {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
</style>