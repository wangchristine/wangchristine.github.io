<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Image",
  },
  name: {
    type: String,
    default: "來源",
  },
  originLink: {
    type: String,
    default: null,
  },
});

const getImageUrl = (name) => {
  const assets = import.meta.glob("@/assets/articles/*", { eager: true, import: "default" });
  return assets[`/assets/${name}`];
};
</script>

<template>
  <div class="img-block">
    <img :src="getImageUrl(src)" :alt="alt" />
    <span v-if="originLink">
      <a :href="originLink" target="_blank">{{ name }}<el-icon><ELink /></el-icon></a>
    </span>
  </div>
</template>

<style scoped>
.img-block {
  width: fit-content;
  margin: 0 auto;
}

img {
  max-width: 100%;
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 50%);
  margin: 5px 0;
}

span {
  display: block;
  text-align: center;
  padding: 8px;
}
</style>
