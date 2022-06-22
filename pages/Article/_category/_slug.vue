<template>
  <div class="article-block">
    <h1>{{ page.title }}</h1>
    <h2>Last Modify Datetime: {{ page.updatedAt }}</h2>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // const slug =  || 'index';
    const page = await $content(params.slug)
      .where({ category: params.category })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page,
    }
  },
}
</script>

<style scoped>
.article-block {
  background-color: #f9f2e9;
  padding: 20px 40px;
}
</style>
