<template>
  <div>

    <!--    <h1>Opening my heart to you, dear reader.</h1>-->
    <div class="storiesPage" style="margin: 50px 0">
      <div style="display: flex; flex-direction: row-reverse; width: 100%; justify-content: space-between;">
        <div style="width: 100%; display: flex; justify-content: center; position: relative;">
          <img style="height: 300px; position: absolute; left: 0" src="../assets/decorations/details2.png"/>
          <img style="top: -100px; height: 200px; position: absolute; right: 0" src="../assets/decorations/pages.png"/>
          <h1 class="elegant-text" style="color:#f8dcbf; border-bottom: 1px solid #f8dcbf; padding: 0 17px">
            {{loca.stories}}
          </h1>
        </div>
      </div>

<!--      <div class="blocks-container">-->

<!--        <div class="animationPage">-->
<!--          <div class="blocks-container">-->

<!--            <div v-for="(block, index) in blocks"-->
<!--                 :key="index"-->
<!--                 class="mouse-cursor-gradient-tracking"-->
<!--                 @mousemove="handleMouseMove($event, block.id)"-->
<!--                 :style="{background: `url(${block.image}) no-repeat center`,-->
<!--                          'background-size': 'cover'    }">-->
<!--              &lt;!&ndash;      &#45;&#45;bg-image        :key="block.id"  &ndash;&gt;-->
<!--              <div class="container">-->
<!--                &lt;!&ndash;              <img :src="block.image" class="block-image" />&ndash;&gt;-->
<!--                <span class="heading" style="display: block">-->
<!--                  {{ block.title }}-->
<!--                </span>-->
<!--                <span class="description">-->
<!--                  {{ block.description }}-->
<!--                </span>-->
<!--              </div>-->

<!--              <router-link data-cursor-hover v-if="index == '0' " to="/">-->
<!--                <ReadButton :readMore="loca.readMore"/>-->
<!--              </router-link>-->

<!--              <router-link data-cursor-hover v-if="index == '1' " to="/greenStick">-->
<!--                <ReadButton :readMore="loca.readMore"/>-->
<!--              </router-link>-->


<!--              <div class="hover-container"></div>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
      <div class="blocks-container">
        <div class="animationPage">
          <div class="blocks-container">
            <div v-for="(block, index) in this.paginatedBlocks"
                 @mousemove="handleMouseMove($event, block.id)"
                 :style="{background: `url(${block.image}) no-repeat center`,
                   'background-size': 'cover'}"
                 :key="index" class="mouse-cursor-gradient-tracking">
              <div class="container">
                <span class="heading">{{ block.title }}</span>
                <span class="description">{{ block.description }}</span>
              </div>
              <router-link v-if="index == 0" to="/azeriStories">
                <ReadButton :readMore="loca.readMore"/>
              </router-link>
              <router-link v-if="index == 1" to="/greenStick">
                <ReadButton :readMore="loca.readMore"/>
              </router-link>
              <div class="hover-container"></div>
            </div>
          </div>
          <div class="pagination-controls">
            <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div>
        </div>
<!--      </div>-->
    </div>

    </div>
    <!--    <FirstParallax class="show-desktop"/>-->
  </div>
</template>


<script>

import FirstParallax from "@/components/FirstParallax";
import ReadButton from "@/UI/ReadButton.vue";
import {mapState} from "vuex";

export default {
  components: {
   ReadButton,
    // FirstParallax
  },

  name: "StoriesSection",
  data() {
    return {
      // blocks: [
      //   {
      //     id: 1, title: this.loca.storyOne ,
      //     description: 'Description 1',
      //     image: require('@/assets/stories/Nizami.png')
      //   },
      //   {
      //     id: 2,
      //     title: 'Тайна могилы Толстого',
      //     description: 'А ты слышал легенду о Зелёной палочке?',
      //     image: require('@/assets/stories/Tolstoy.jpg')
      //   },
      //   {
      //     id: 3,
      //     title: 'Тайна могилы Толстого',
      //     description: 'А ты слышал легенду про зелёную палочку?',
      //     image: require('@/assets/stories/orpheus-Copy.png')
      //   },
      //   // {
      //   //   id: 2,
      //   //   title: 'Тайна могилы Толстого',
      //   //   description: 'А ты слышал легенду про зелёную палочку?',
      //   //   image: require('@/assets/stories/Tolstoy.jpg')
      //   // },
      // ],

      x: 0,
      y: 0,

      currentPage: 1,
      itemsPerPage: 2
    };

  },
  computed: {
    ...mapState(["loca", "stories"]),
    totalPages() {
      return Math.ceil(this.blocks.length / this.itemsPerPage);
    },
    paginatedBlocks() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.blocks.slice(start, end);
    },

    blocks() {
      return [
        {
          id: 1, title: this.loca.storyOne,
          description: this.loca.storyDescOne,
          image: require('@/assets/stories/Nizami.png')
        },
        {
          id: 2,
          title: this.loca.storyTwo,
          description: this.loca.storyDescTwo,
          image: require('@/assets/stories/Tolstoy.jpg')
        },
        {
          id: 3,
          title: 'Тайна могилы Толстого',
          description: 'А ты слышал легенду про зелёную палочку?',
          image: require('@/assets/stories/orpheus-Copy.png')
        },
      ]}

  },
  methods: {
    handleMouseMove(event) {
      const btn = event.currentTarget;
      const rect = btn.getBoundingClientRect();
      this.x = event.clientX - rect.left;
      //
      this.y = event.clientY - rect.top;
      //
      btn.style.setProperty("--x", `${this.x}px`);
      btn.style.setProperty("--y", `${this.y}px`);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  }

};
</script>


<style scoped>
.storiesPage {
  /*height: 100vh;*/
}




.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-controls button {
  padding: 10px;
  background-color: #703719;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.container {
  color: white;
  display: flex;
  gap: 15px;
  width: 270px;
  flex-direction: column;
  margin: 0 auto;
}

.blocks-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-content: center;
  /*width: 80%;*/
  margin: auto;
  flex-wrap: wrap;
}


/**/


.mouse-cursor-gradient-tracking {
  height: 250px;
  width: 300px;
  background-size: cover;
  transition: all 0.5s ease;
  position: relative;
  /* background: #ccc; */
  padding: 15px;
  font-size: 16px;
  border: none;
  color: #111;
  /* cursor: pointer; */
  outline: none;
  overflow: hidden;
  /* width: 400px; */
  /* width: 50%; */
  /* margin: 5% auto; */
  margin: 30px auto 0 auto;
  border-radius: 20px;
  display: flex;
  box-shadow: 1px 1px 0 rgba(25, 25, 25, 0.25);
  justify-content: end;
  flex-direction: column;
  gap: 15px
  /*gap: 30px;*/
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

