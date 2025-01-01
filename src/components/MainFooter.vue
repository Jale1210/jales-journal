<template>
  <footer>
    <div class="parallax">

    </div>

    <div style="position: absolute; bottom: 30px; width: 100%;">
      <div style="display: flex; justify-content: center; flex-direction: column">

          <nav class="footer-links">
            <a class="navTxt">Welcome</a>
            <a href="#" @click.prevent="scrollToComponent('about')" class="navTxt">About Me</a>
            <a href="#" @click.prevent="scrollToComponent('music')" class="navTxt">Music</a>
            <a href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">Stories</a>
            <a href="#" @click.prevent="scrollToComponent('thoughts')" class="navTxt">Thoughts</a>
<!--            <a href="#" @click.prevent="scrollToComponent('thankYou')" class="navTxt">Thank you</a>-->
<!--            <a href="#" @click.prevent="scrollToComponent('charity')" class="navTxt">Charity</a>-->
          </nav>

        <p class="footer-txt">© 2024 Ismayilova Jale. All rights reserved.</p></div>
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
  position: relative;
}


/* Style for the parallax image */
.parallax {
  height: 200px;
  background-color: rgba(240, 229, 207, 1); /* Pale gold */
  padding: 10px;
  text-align: center;
  /* The image used */
  background-image: url('../assets/images/red-roses.jpg');
  filter: brightness(40%);
  /* Full height */
  /*height: 200px;*/

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  /*background-position: left;*/
  background-repeat: no-repeat;
  background-size: 100% auto;

}

/* Content section */
.content {
  /*height: 600px;*/
  /*background-color: white;*/
  /*padding: 20px;*/
}


.parallax {
  /*width: 100vw;*/
}

.footer-links {padding-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 50px
}

.footer-txt {
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 18px;

}

</style>