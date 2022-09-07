<template>
  <img :src="require('@/assets/' + src)" :alt="alt" />
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
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 50%);
  margin: 10px 0;
}
</style>
