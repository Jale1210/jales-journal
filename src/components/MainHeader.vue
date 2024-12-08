<template>
  <header class="header">
    <h1 class="elegant-text" style="color: #f8d3a5;">
      Welcome to My Blog!</h1>

    <div>
      <span class="main-txt">
        I'm thrilled to have you here! This space is a reflection of my passions, interests, and experiences, and I’m excited to share it all with you. Whether you're here to find insightful articles, practical tips, or just to enjoy some engaging stories, you’re in the right place.

        My goal is to create a community where we can explore ideas, learn together, and inspire each other. I believe in the power of connection, and through this blog, I hope to connect with you on topics that matter to us both.

        Feel free to explore, leave your thoughts, and make yourself at home. I look forward to this journey with you—let’s make it a great one!
      </span>


      <span style="font-family: 'Tangerine', cursive; font-size: 34px;
      padding-top: 30px; display: flex">
      -Sincerely Yours, Jale
      </span>
      
      <img class="heart-img" src="../assets/decorations/heart.png">
      
    </div>

    <!--  animated  closing icon-->
    <!--    <div class="icon">-->
    <!--      <span></span>-->
    <!--      <span></span>-->
    <!--      <span></span>-->
    <!--    </div>-->
    <!--    animated closing icon-->

  </header>
</template>

<script>

export default {
  name: "MainHeader",

  mounted() {
    this.handleScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    onScroll() {
      const element = this.$el.querySelector('.elegant-text');
      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
header {
  position: relative;
  padding: 0 70px;
  font-family: 'Garamond', serif;
  display: flex;
  /* align-items: center; */
  /*text-align: left;*/
  /* justify-content: space-between; */
  /*padding-top: 0px;*/
  /* padding-left: 50px;*/
  /* background: transparent;*/
  flex-direction: column;
  gap: 40px;
  /*background-color: rgba(247, 231, 206, 1); !* Champagne *!*/
}


/*.icon {*/
/*  width: 20px;*/
/*  height: 20px;*/
/*  position:relative;*/
/*  background-color:green;*/
/*}*/
/*.icon span{*/
/*  display:block;*/
/*  width: 20px;*/
/*  height: 4px;*/
/*  margin-bottom:3px;*/
/*  background-color: red;*/
/*  transition:400ms;*/
/*  position:absolute;*/
/*}*/
/*.icon span:nth-of-type(1){*/
/*  top:0;*/
/*}*/
/*.icon span:nth-of-type(2){*/
/*  top:50%;*/
/*  transform:translatey(-50%);*/
/*}*/
/*.icon span:nth-of-type(3){*/
/*  bottom:-3px;*/
/*}*/
/*.icon:hover span:nth-of-type(2){*/
/*  opacity:0;*/
/*  visibility:hiddin;*/
/*  width:0;*/
/*}*/
/*.icon:hover span:nth-of-type(1){*/
/*  top:50%;*/
/*  transform: translateY(-50%) rotate(-45deg);*/
/*}*/
/*.icon:hover span:nth-of-type(3){*/
/*  bottom:50%;*/
/*  transform: translateY(140%) rotate(45deg);*/
/*}*/


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.elegant-text.animate {
  opacity: 1;
  transform: translateY(0); /* Bring to original position */
}

.main-txt {
  line-height: 30px;
  /*width: 80%;*/
  display: flex;
  text-align: justify;
  letter-spacing: 1px;
}

.heart-img{
  position: absolute;
  height: 50px;
  left: 33%;
  top: 70%;
  transform: rotate(30deg);
}

.elegant-text:hover {
  color: #e19d72; /* Saddle brown color on hover for a subtle, sophisticated effect */
}

</style>