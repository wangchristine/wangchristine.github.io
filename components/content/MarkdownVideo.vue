<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="video">
    <iframe
      :src="src"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
.video {
  position: relative;
  width: 100%;
  padding-top: calc(100% * 9 / 16);
}
.video iframe {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100%;
  max-width: 560px;
  max-height: 315px;
}
</style>
