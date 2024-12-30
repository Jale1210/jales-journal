<template>
  <div>
    <button   type="button"
              data-cursor-hover
              v-if="readMore" class="animated-border-button">
      {{ readMore }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ReadButton",
  props: {
    readMore: String
  }
}
</script>

<style scoped>
.animated-border-button {
  position: relative;
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
  border: none;
  outline: none;
  /*cursor: pointer;*/
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: color 0.3s ease;
}

.animated-border-button::before,
.animated-border-button::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #fff;
  transition: 0.4s;
}

.animated-border-button::before {
  top: 0;
  left: 0;
}

.animated-border-button::after {
  bottom: 0;
  right: 0;
}

.animated-border-button:hover::before {
  width: 100%;
  left: 0;
}

.animated-border-button:hover::after {
  width: 100%;
  right: 0;
}

.animated-border-button::before {
  border-radius: 0 100% 0 100%;
}

.animated-border-button::after {
  border-radius: 100% 0 100% 0;
}

.animated-border-button span::before,
.animated-border-button span::after {
  content: '';
  position: absolute;
  height: 0;
  width: 2px;
  background: #fff;
  transition: 0.4s;
}

.animated-border-button span::before {
  top: 0;
  left: 0;
}

.animated-border-button span::after {
  bottom: 0;
  right: 0;
}

.animated-border-button:hover span::before {
  height: 100%;
  top: 0;
}

.animated-border-button:hover span::after {
  height: 100%;
  bottom: 0;
}

.animated-border-button span::before {
  border-radius: 100% 0 100% 0;
}

.animated-border-button span::after {
  border-radius: 0 100% 0 100%;
}

</style>