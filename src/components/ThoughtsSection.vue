<template>
  <div class="thoughtsPage">

<!--    <div class="content">  </div>-->

<!--      <div style=" display: flex; height: 250px ">-->
<!--        <div class="parallax">-->

<!--        </div>-->
<!--        <span style='position:absolute; top: 15%; font-size: 34px; font-family: "Dancing Script", cursive;-->
<!--                      left: 20%; font-family: "Dancing Script", cursive;'>-->
<!--          May your life be surrounded by the Light of the Divine Universe.</span>-->
<!--      </div>-->

    <h1>Opening my heart to you, dear reader.</h1>

  </div>
</template>


<script>
export default {}
</script>

<style scoped>
.thoughtsPage {
  height: 100vh;
  /*background: url('https://i.pinimg.com/564x/5f/76/d9/5f76d9f938903e44c6a2d5e1f97eb4b4.jpg') no-repeat center center fixed;*/
  background-size: cover;
  position: relative;

}

/*.content {*/
/*  position: relative;*/

/*  padding: 20px;*/
/*  border-radius: 10px;*/
/*  background: rgba(255, 255, 255, 0.9); !* Slightly opaque white background for content *!*/
/*  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);*/
/*  max-width: 800px;*/
/*  margin: 20px auto;*/
/*}*/



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
.content {
  /*height: 600px;*/
  /*background-color: white;*/
  /*padding: 20px;*/
}


.parallax{
  width: 100vw;
}

</style>