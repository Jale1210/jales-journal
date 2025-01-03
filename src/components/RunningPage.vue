<template>
  <div class="runningPage ticker-wrapper">
    <div class="ticker-wrapper__first-half">
      <img src= "../assets/images/sea.jpg"  alt="leadership">
      <p>Don't you dare to give up !</p>
      <img src="../assets/images/sky.jpg" alt="leadership">
      <p>I'm proud of you</p>
<!--      <img src="../assets/icons/motivate.png" alt="leadership">-->
    </div>
    <div class="ticker-wrapper__second-half"  ><p>Don't you dare to give up !</p>
      <img src= "../assets/images/sea.jpg"  alt="leadership">

<!--      <img src="../assets/icons/letsGo.png" alt="leadership">-->
      <p>I'm proud of you</p>
      <img src="../assets/images/sky.jpg" alt="leadership">
    </div>

  </div>
</template>

<script>
export default {
  name: "RunningPage"
}
</script>

<style scoped  >

.runningPage {
  background: #212121;
  overflow: hidden;
  height: 65px;
  position: relative;
}

.runningPage > div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 65px;
  transform: translate(100%, 0);
}

.runningPage > div p {
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
  color: #fff339;
  text-transform: uppercase;
}

.runningPage > div img {
  height: 60px;
}

.ticker-wrapper__first-half  {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  animation: ticker 30s infinite linear forwards;
}

.ticker-wrapper__second-half {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  /*animation: ticker 30s/2  infinite linear forwards;*/
}

@keyframes ticker {
  0% {
    transform: translate(100%, 0);
  }
  50% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

</style>