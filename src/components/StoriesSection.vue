<template>
  <div>
  <div class="storiesPage" style="margin: 50px 0">
    <div style="display: flex; flex-direction: row-reverse; width: 100%; justify-content: space-between;">
      <div style="width: 100%; display: flex; justify-content: center; position: relative;">
        <img style="height: 300px; position: absolute; left: 0" src="../assets/decorations/details3.png" />
        <img style="height: 300px; position: absolute; right: 0" src="../assets/decorations/pages.png" />
        <h1 class="elegant-text" style="color: #703719; border-bottom: 1px solid #703719; padding: 0 17px">
          Stories
        </h1>
      </div>
    </div>

    <div class="blocks-container" >

      <div class="animationPage">
        <div class="blocks-container">

          <div  v-for="block in blocks"
              :key="block.id"
              class="mouse-cursor-gradient-tracking"
              @mousemove="handleMouseMove($event, block.id)"
          >
            <div class="container">
<!--              <img :src="block.image" class="block-image" />-->
              <span class="heading">{{ block.title }}</span>
              <span class="description">{{ block.description }}</span>
            </div>
            <div class="hover-container"></div>
          </div>
        </div>
      </div>



    </div>

<!--        <div style="padding: 30px 0 50px 0">-->
<!--          If you like reading about-->
<!--        </div>-->


      </div> <FirstParallax />
  </div>
</template>



<script>


import FirstParallax from "@/components/FirstParallax";
export default {
  components: {  FirstParallax },

    name: "StoriesSection",
  data() {
    return {
      blocks: [
        { id: 1, title: 'Block ', description: 'Description 1', image: require('@/assets/images/universe.jpg') },
        { id: 2, title: 'Block 2', description: 'Description 2',image: require('@/assets/images/universe.jpg') },
        { id: 3, title: 'Block 3', description: 'Description 3', image: require('@/assets/images/universe.jpg') }

      ],

      x: 0,
      y: 0,



    };
  },
  methods:{
    handleMouseMove(event) {
      const btn = event.currentTarget;
      const rect = btn.getBoundingClientRect();
      this.x = event.clientX- rect.left ;
          //
      this.y = event.clientY - rect.top;
          //
      btn.style.setProperty("--x", `${this.x}px`);
      btn.style.setProperty("--y", `${this.y}px`);
    },
  }

};
</script>


<style scoped>
.storiesPage {
   height: 100vh;
}

.blocks-container {
  display: flex;
  gap: 20px;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
}


/**/


.mouse-cursor-gradient-tracking {
  transition: all 0.5s ease;
  position: relative;
  background: #ccc;
  padding: 15px;
  font-size: 16px;
  border: none;
  color: #111;
  /*cursor: pointer;*/
  outline: none;
  overflow: hidden;
  width: 400px;
  /*width: 50%;*/
  /*margin: 5% auto;*/
  margin: 30px auto 0 auto;
  border-radius: 20px;
  display: block;
  box-shadow: 1px 1px 0 rgba(25, 25, 25, 0.25);
}

.mouse-cursor-gradient-tracking:hover {
  box-shadow: 0px 11px 30px rgba(25, 25, 25, 0.25);
  color: #777;
  font-size: 18px;
}

.mouse-cursor-gradient-tracking span {
  position: relative;
}

.mouse-cursor-gradient-tracking::before {
  --size: 0;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, #ffc, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.mouse-cursor-gradient-tracking:hover::before {
  --size: 5vw;
}
</style>

