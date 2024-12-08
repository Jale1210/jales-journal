<template>
  <div class="wrapper">
    <div class="blocks-container">
      <div
          v-for="block in blocks"
          :key="block.id"
          :class="['block', block.id]"
          @mouseenter="handleMouseEnter($event, block.id)"
          @mouseleave="handleMouseLeave($event, block.id)"
      >
        <div class="container container-1">
          <div class="subtitle">
            <span>{{ block.subtitle }}</span>
          </div>
          <div>
            <span class="heading">{{ block.heading }}</span>
            <div class="text-block">
              <div v-for="(item, index) in block.list" :key="index">{{ item }}<br></div>
            </div>
          </div>
        </div>
        <div class="container container-2">
          <div class="subtitle">
            <span>{{ block.subtitle }}</span>
          </div>
          <div>
            <span class="heading">{{ block.heading }}</span>
            <div class="text-block">
              <div v-for="(item, index) in block.list" :key="index">{{ item }}<br></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HoverBlocks" ,

    components: {   },
    data() {
      return {
        blocks: [
          {
            id: "block-1",
            heading: "Web Design",
            subtitle: "01",
            list: ["Website Redesign", "UI/UX Design", "Social Media Design"],
          },
          {
            id: "block-2",
            heading: "Motion Design",
            subtitle: "02",
            list: ["Responsive Website", "Custom Animation", "Micro Animation"],
          },
          {
            id: "block-3",
            heading: "Graphics",
            subtitle: "03",
            list: ["3D Experience", "Immersive Design", "Game Development"],
          },
          {
            id: "block-4",
            heading: "Front - End Developer",
            subtitle: "04",
            list: ["Vue/React Developer", "HTML5/Tailwind/SCASS", "Social Media Design"],
          },
          {
            id: "block-5",
            heading: "Graphics",
            subtitle: "03",
            list: ["3D Experience", "Immersive Design", "Game Development"],
          },
          {
            id: "block-6",
            heading: "Front - End Developer",
            subtitle: "04",
            list: ["Vue/React Developer", "HTML5/Tailwind/SCASS", "Social Media Design"],
          },
        ],
        fns: {},
        enterPos: {},
        leavePos: {},
      };
    },
    methods: {
      getRelativePosition(x, y, block) {
        const bbox = block.getBoundingClientRect();
        return {
          x: (100 * (x - bbox.x)) / bbox.width,
          y: (100 * (y - bbox.y)) / bbox.height,
        };
      },
      createAnimation(id, type) {
        let radius = type === "enter" ? 0 : 150;
        let offset = type === "enter" ? 1 : 39;
        const block = document.querySelector(`.${id}`);
        const container = document.querySelector(`.${id} .container-2`);

        const animation = () => {
          if (type === "enter") {
            if (radius < 150) {
              offset *= 1.22;
              radius += offset;
              container.style.clipPath = `circle(${radius}% at ${this.enterPos.x}% ${this.enterPos.y}%)`;
            }
          } else {
            if (radius > 0) {
              offset = offset > 1 ? offset / 1.2 : 1;
              radius -= offset;
              if (radius < 0) radius = 0;
              container.style.clipPath = `circle(${radius}% at ${this.leavePos.x}% ${this.leavePos.y}%)`;
            }
          }
          if (radius <= 0 && type === "leave") return;
          requestAnimationFrame(animation);
        };

        return animation;
      },
      handleMouseEnter(event, id) {
        this.enterPos = this.getRelativePosition(event.clientX, event.clientY, event.currentTarget);
        this.fns[id] = this.createAnimation(id, "enter");
        this.fns[id]();
      },
      handleMouseLeave(event, id) {
        this.leavePos = this.getRelativePosition(event.clientX, event.clientY, event.currentTarget);
        this.fns[id] = this.createAnimation(id, "leave");
        this.fns[id]();
      },
    },

}
</script>

<style scoped>

.wrapper {
  cursor: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blocks-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 20px;
  padding: 20px;
  margin: auto;
}

.block {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid rgb(252, 198, 59);
  border-radius: 20px;
  overflow: hidden;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(252, 198, 59);
}

.container-2 {
  background: rgb(252, 198, 59);
  clip-path: circle(0%);
  color: black;
}

.subtitle {
  display: flex;
  justify-content: flex-end;
  font-size: 26px;
}

.heading {
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
}

.text-block {
  font-weight: 200;
  font-size: 16px;
  margin-top: -16px;
}
</style>