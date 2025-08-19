<template>
  <div>
    <div class="storiesPage" style="margin: 50px 0">
      <div style="display: flex; flex-direction: row-reverse; width: 100%; justify-content: space-between;">
        <div style="width: 100%; display: flex; justify-content: center; position: relative;">
          <img style="height: 300px; position: absolute; left: 0" src="../assets/decorations/details2.png"/>
          <img style="top: -100px; height: 200px; position: absolute; right: 0" src="../assets/decorations/pages.png"/>
          <h1 class="elegant-text" style="color:#f8dcbf; border-bottom: 1px solid #f8dcbf; padding: 0 17px">
            {{ loca.stories }}
          </h1>
        </div>
      </div>

      <div class="blocks-container">
        <div class="animationPage">
          <div class="blocks-container">
            <div v-for="(block, index) in paginatedBlocks"
                 :key="index"
                 @mousemove="handleMouseMove($event, block.id)"
                 :style="{ background: `url(${block.image}) no-repeat center`, 'background-size': 'cover' }"
                 class="mouse-cursor-gradient-tracking">
              <div class="container">
                <span class="heading">{{ block.title }}</span>
                <span class="description">{{ block.description }}</span>
              </div>
              <router-link v-if="index === 0" to="/azeriStories">
                <ReadButton :readMore="loca.readMore" />
              </router-link>
              <router-link v-if="index === 1" to="/greenStick">
                <ReadButton :readMore="loca.readMore" />
              </router-link>
              <div class="hover-container"></div>
            </div>
          </div>

          <!-- Accessible Pagination -->
          <nav aria-label="pagination" class="pagination-nav">
            <ul class="pagination">
              <!-- Previous -->
              <li>
                <a href="javascript:void(0)"
                   @click="previousPage"
                   :class="{ disabled: currentPage === 1 }">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="visuallyhidden">previous set of pages</span>
                </a>
              </li>

              <!-- Page Numbers -->
              <li v-for="page in totalPages" :key="page">
                <a href="javascript:void(0)"
                   @click="goToPage(page)"
                   :aria-current="currentPage === page ? 'page' : null">
                  <span class="visuallyhidden">page </span>{{ page }}
                </a>
              </li>

              <!-- Next -->
              <li>
                <a href="javascript:void(0)"
                   @click="nextPage"
                   :class="{ disabled: currentPage === totalPages }">
                  <span class="visuallyhidden">next set of pages</span>
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReadButton from "@/UI/ReadButton.vue";
import { mapState } from "vuex";

export default {
  name: "StoriesSection",
  components: { ReadButton },
  data() {
    return {
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
          id: 1,
          title: this.loca.storyOne,
          description: this.loca.storyDescOne,
          image: require('@/assets/stories/Nizami.png')
        },
        {
          id: 2,
          title: this.loca.storyTwo,
          description: this.loca.storyDescTwo,
          image: require('@/assets/stories/Tolstoy.jpg')
        },
        // {
        //   id: 3,
        //   title: 'Тайна могилы Толстого',
        //   description: 'А ты слышал легенду про зелёную палочку?',
        //   image: require('@/assets/stories/orpheus-Copy.png')
        // },
        // {
        //   id: 4,
        //   title: 'Тайна могилы Толстого',
        //   description: 'А ты слышал легенду про зелёную палочку?',
        //   image: require('@/assets/stories/orpheus-Copy.png')
        // },
        // {
        //   id: 5,
        //   title: 'Тайна могилы Толстого',
        //   description: 'А ты слышал легенду про зелёную палочку?',
        //   image: require('@/assets/stories/orpheus-Copy.png')
        // }
      ];
    }
  },
  methods: {
    handleMouseMove(event) {
      const btn = event.currentTarget;
      const rect = btn.getBoundingClientRect();
      this.x = event.clientX - rect.left;
      this.y = event.clientY - rect.top;
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
    goToPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
.storiesPage {}

.pagination-nav {
  margin-top: 1em;
  padding-top: 0.5em;
  font: 14px sans-serif;
  display: flex;
  justify-content: center;
}

.pagination {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.pagination li {
  margin: 0 2px;
}

.pagination a {
  display: block;
  padding: 0.5em 1em;
  border: 1px solid #999999;
  border-radius: 0.2em;
  text-decoration: none;
  color: inherit;
}

.pagination a[aria-current="page"] {
  background-color: #371f02;
  color: white;
}

.pagination a.disabled {
  pointer-events: none;
  background-color: #ccc;
  color: #777;
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
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
  margin: auto;
  flex-wrap: wrap;
}

.mouse-cursor-gradient-tracking {
  height: 250px;
  width: 300px;
  background-size: cover;
  transition: all 0.5s ease;
  position: relative;
  padding: 15px;
  font-size: 16px;
  border: none;
  outline: none;
  overflow: hidden;
  margin: 30px auto 0 auto;
  border-radius: 20px;
  display: flex;
  box-shadow: 1px 1px 0 rgba(25, 25, 25, 0.25);
  justify-content: end;
  flex-direction: column;
  gap: 15px;
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