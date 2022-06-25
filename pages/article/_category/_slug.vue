<template>
  <div class="content-block">
    <div class="article-block">
      <h1>{{ page.title }}</h1>
      <h2>Last Modify Datetime: {{ page.updatedAt }}</h2>
      <p>{{ page.description }}</p>
      <nuxt-content :document="page" />
    </div>
    <side-bar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
export default {
  components: {
    SideBar,
  },
  async asyncData({ params, $content, error }) {
    // const slug =  || 'index';
    const page = await $content(params.slug)
      .where({ category: params.category })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    return {
      page,
    };
  },
};
</script>

<style scoped>
.content-block {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

.article-block {
  background-color: #f9f2e9;
  padding: 20px 40px;
  width: 1000px;
}
</style>
