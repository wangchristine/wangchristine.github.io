<template>
  <div class="img-block">
    <img :src="require('@/assets/' + src)" :alt="alt" />
    <span v-if="originLink">▲ <a :href="originLink" target="_blank">原圖網址</a></span>
  </div>
</template>

<script>
export default {
  name: 'MarkdownImg',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "Image",
    },
    originLink: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.img-block {
  width: fit-content;
}

img {
  max-width: 100%;
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 50%);
  margin: 10px 0;
}

span {
  display: block;
  text-align: center;
}

</style>
