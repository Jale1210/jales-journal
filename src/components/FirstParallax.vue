<template>
  <div class="first-parallax">
    <div class="content">

      <div style=" display: flex; height: 250px ">
        <div class="parallax">

        </div>
        <span style='position:absolute; top: 35%; font-size: 34px; font-family: "Dancing Script", cursive;
                        left: 20%; font-family: "Dancing Script", cursive;'>
            May your life be surrounded by the Light of the Divine Universe.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstParallax"
}
</script>

<style scoped>

.content {
  position: relative;

  padding: 0;

}


/* Style for the parallax image */
.parallax {
  /* The image used */
  background-image: url('../assets/images/books-roses.jpg');
  filter: brightness(50%);
  /* Full height */
  /*height: 200px;*/

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  /*background-position: left;*/
  background-repeat: no-repeat;
  background-size: 100% auto;

}

/* Content section */
/*.content {*/
/*height: 600px;*/
/*background-color: white;*/
/*padding: 20px;*/
/*}*/


.parallax {
  width: 100vw;
}

</style>