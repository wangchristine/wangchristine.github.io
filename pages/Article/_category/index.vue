<template>
  <div class="category-block">
    <h1>Category: {{ category }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CategoryIndex',
  asyncData({ params }) {
    // const slug =  || 'index';

    return {
      category: params.category,
    }
  },
}
</script>

<style scoped>
.category-block {
  background-color: #f3f4f6;
  padding: 20px 40px;
}
</style>
