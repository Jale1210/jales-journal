<template>
  <div class="top-page">

    <router-link to="/">
      <button
          class="animated-border-button">Go Back Home</button>
    </router-link>


    <div class="first-parallax">
      <div class="content">

        <div style=" display: flex; height: 100vh ">
          <div class="parallax">

          </div>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="img-container" style="display: flex; flex-direction: column; width: 50%">
        <img style="width: fit-content; position: relative; left: 0" src="../assets/music-img/top4.jpg"/>
        <img style="padding: 15px 0 15px 0px; width: fit-content; position:relative;" src="../assets/music-img/top2.jpg" />
      </div>

    </div>


    <div class="second-parallax">
      <div class="content2">

        <div style=" display: flex; height: 100vh ">
          <div class="parallax2">
            <!--content-->
          </div>
        </div>

      </div>
    </div>


    <div>
      jjhkhjh<br/>
      jhkhdsjkhfj\<br/>
      kslkjaljdkjklj<br/>
      kjljl<br/>
      sakdad<br/>
      ksa;kak;dksk<br/>
      k;k<br/>
      k;k;<br/>
      k<br/>
      k;<br/>
      k;<br/>
    </div>


  </div>
</template>

<script>

export default {
  name: "TopPage",
  components: {},
  data() {
    return {};
  },
}
</script>

<style scoped>
.top-page {
  padding: 30px;
  background-color: #3b3b38;
  display: block;
}


.content {
  position: relative;
  padding: 0;
}


.parallax {
  background-image: url('../assets/music-img/top1.jpg');
  /*filter: brightness(50%);*/
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.parallax {
  width: 100vw;
}

/* go home button */

.animated-border-button {
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin-bottom: 30px;
  background: transparent;
  color: #f3f400;
  border: none;
  font-family: 'Rubik', sans-serif;
  text-transform: uppercase;
  /*cursor: pointer;*/
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease, transform 0.3s ease;
/*  box-shadow 0.3s ease, */
}

.animated-border-button::before,
.animated-border-button::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background: #f3f400;
  transition: transform 0.3s ease;
}

.animated-border-button::before {
  top: 0;
  transform: scaleX(0);
  transform-origin: right;
}

.animated-border-button::after {
  bottom: 0;
  transform: scaleX(0);
  transform-origin: left;
}

.animated-border-button:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.animated-border-button:hover::after {
  transform: scaleX(1);
  transform-origin: right;
}

.animated-border-button:hover {
  color: #f3f400;
  transform: translateY(-3px);
  /*box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2); */
}

/*    */

.main-content {
  position: relative;
  padding: 15px 0;
}


</style>