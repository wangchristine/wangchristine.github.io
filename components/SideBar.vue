<template>
  <div class="side-block">
    <MyProfile />
    <div class="popular">
      <div class="title">熱門文章 📌</div>
      <div class="list">
        <NuxtLink
          v-for="article in articlesByPopular"
          :key="article.title"
          class="article"
          :to="{
            name: 'article-category-slug',
            params: { category: article.category, slug: article.slug },
          }"
        >
          {{ article.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import MyProfile from '@/components/MyProfile';
export default {
  name: 'SideBar',
  components: {
    MyProfile,
  },
  computed: {
    articlesByPopular() {
      return this.$store.getters.getAllArticles.filter(
        (article) => article.isPopular === true
      );
    },
  },
};
</script>

<style scoped>
.side-block {
  width: 400px;
  text-align: center;
  margin: 0 0 40px 40px;
}

.popular {
  background-color: #f9f2e9;
  padding: 20px;
  margin-top: 20px;
}
.popular .title {
  font-size: 18px;
  border-bottom: 1px solid #9b9b9b;
  padding: 5px;
}

.popular .list {
  margin-top: 10px;
}

.popular .article {
  display: block;
  text-decoration: none;
  padding: 5px;
  color: #9f3448;
}
</style>
