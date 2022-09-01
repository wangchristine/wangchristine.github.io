<template>
  <div class="content-block">
    <div class="article-block">
      <div class="article-header">
        <h1>{{ page.title }}</h1>
        <div class="timeAt">
          建立於 {{ new Date(page.createdAt).toLocaleDateString() }} • 更新於
          {{ new Date(page.updatedAt).toLocaleDateString() }}
        </div>
      </div>
      <!--      <p>{{ page.description }}</p>-->
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
    const page = await $content(params.category.toLowerCase(), params.slug)
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
  overflow-x: hidden;
}

.article-header {
  border-bottom: 1px solid #d7d7d7;
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.timeAt {
  color: #6e7780;
  font-size: 14px;
}
</style>
