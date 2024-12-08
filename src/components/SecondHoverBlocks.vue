<template>

  <div class="mouse-cursor-gradient-tracking"
       @mousemove="handleMouseMove">
    <span>hover me</span>
  </div>

</template>

<script>

export default {
  components: {},

  name: "SecondHoverBlocks",
  data() {
    return {
      x: 0,
      y: 0,
    };
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
  },

};
</script>


<style scoped>

.mouse-cursor-gradient-tracking {
  transition: all 0.5s ease;
  position: relative;
  background: #ccc;
  padding: 2rem 4rem;
  font-size: 1.2rem;
  border: none;
  color: #111;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  width: 150px;
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
  font-size: 1.24em;
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
  --size: 75vw;
}
</style>

