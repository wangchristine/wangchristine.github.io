<template>
  <div class="img-block">
    <img :src="require('@/assets/' + src)" :alt="alt" />
    <span v-if="originLink"><a :href="originLink" target="_blank">{{ name }}</a></span>
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
    name: {
      type: String,
      default: "來源",
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
