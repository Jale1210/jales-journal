<template>
  <div class="aboutPage" >
    <!--    class="frostedGlass"     -->

<div class="imagesContainer">
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

    

    <div style="width: auto; display: flex; flex-direction: column;  padding: 0 70px">
      <img src="../assets/decorations/details1.png" style="position:absolute; width: 170px;    top: 2%;
    right: 2%;" />
      <span class="elegant-text" style="margin-top: 0;   color: #f8d3a5;">About me</span>

      <span class="main-txt">
       My name is Jale and I am a frontend developer with a passion for music, stories, poetry, mythology, and philosophy.
      </span>
      <span class="main-txt">
         For a long time, I wanted to create a place where people could find strength, energy and motivation.
       </span>
      <span class="main-txt">
         When I was creating this website, I aimed to craft a space that feels like a warm home — a place where we can escape reality and gather the strength to achieve the most wonderful things.
       </span>
      <span class="main-txt">
         I believe that I can inspire you to become the best version of yourself.
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection"
}
</script>

<style scoped>

.imagesContainer{
  display: flex;
  flex-direction: row;
}

.aboutPage {
  margin: auto;  align-items: center;
  overflow: hidden;
  z-index: 1;
  position: relative;
  background: inherit;
  display: flex;
  /*padding: 30px 0;*/
  height: 100vh
}

.aboutPage:before {
  content: '';
  position: absolute;
  background: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -20px;
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
  opacity: 0; /* Hide the overlay */
  transition: opacity 0.3s ease; /* Smooth transition for showing the overlay */
}

/* Show the overlay when hovering over the container */
.imgContainer:hover .imgTxt {
  opacity: 1; /* Show the overlay */
}

.elegant-text:hover {
  color: #e19d72; /* Saddle brown color on hover for a subtle, sophisticated effect */
}

</style>