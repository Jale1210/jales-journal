<template>
  <!--  <footer>-->
  <!--    <div class="parallax">-->

  <!--    </div>-->

  <!--    <div style="position: absolute; bottom: 30px; width: 100%;">-->
  <!--      <div style="display: flex; justify-content: center; flex-direction: column">-->

  <!--        <nav class="footer-links">-->
  <!--          <a class="navTxt">Welcome</a>-->
  <!--          <a href="#" @click.prevent="scrollToComponent('about')" class="navTxt">About Me</a>-->
  <!--          <a href="#" @click.prevent="scrollToComponent('music')" class="navTxt">Music</a>-->
  <!--          <a href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">Stories</a>-->
  <!--          <a href="#" @click.prevent="scrollToComponent('contact')" class="navTxt">Contact</a>-->
  <!--          &lt;!&ndash;            <a href="#" @click.prevent="scrollToComponent('thankYou')" class="navTxt">Thank you</a>&ndash;&gt;-->
  <!--          &lt;!&ndash;            <a href="#" @click.prevent="scrollToComponent('charity')" class="navTxt">Charity</a>&ndash;&gt;-->
  <!--        </nav>-->

  <!--        <span class="footer-txt">© 2024 Ismayilova Jale. All rights reserved.</span></div>-->
  <!--    </div>-->


  <!--  </footer>-->
  <footer>
    <div class="parallax" >
<!--  style="position:relative;z-index: 0"    -->



    <div style=" justify-content: center; display: flex">
      <!--    z-index: 1;  style="position: absolute; bottom: 30px; width: 100%;"    -->

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
          <!--            <a href="#" class="footer-link-txt"-->
          <!--               @click.prevent="scrollToComponent('thankYou')">Thank you</a>-->
          <!--            <a href="#" class="footer-link-txt"-->
          <!--               @click.prevent="scrollToComponent('charity')">Charity</a>-->
        </nav>

        <span class="footer-txt">© 2024 Ismayilova Jale. All rights reserved.</span></div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style scoped>
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
  background-size:  cover;
}
}

</style>