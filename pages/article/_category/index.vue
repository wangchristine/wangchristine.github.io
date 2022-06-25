<template>
  <div class="category-block">
    <h1>Category: {{ category }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CategoryIndex',
  validate({ params, store }) {
    if (
      !store.getters.getCategories
        .map((category) => category.toLowerCase())
        .includes(params.category.toLowerCase())
    ) {
      return false;
    }
    return true;
  },
  asyncData({ params }) {
    // const slug =  || 'index';

    return {
      category: params.category,
    };
  },
};
</script>

<style scoped>
.category-block {
  background-color: #f9f2e9;
  padding: 20px 40px;
}
</style>
