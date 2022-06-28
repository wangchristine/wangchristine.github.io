<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h2>Category: {{ category.name }}</h2>
      </div>
      <div
        v-for="article in articles"
        :key="article.title"
        class="articles-block"
      >
        <NuxtLink
          :to="{
            name: 'article-category-slug',
            params: { category: category.routeName, slug: article.slug },
          }"
        >
          <div class="title">{{ article.title }}</div>
          <div class="description">
            {{ article.description.slice(0, 80) }} ......
          </div>
        </NuxtLink>
      </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
export default {
  name: 'CategoryIndex',
  components: {
    SideBar,
  },
  validate({ params, store }) {
    if (
      !store.getters.getCategories
        .map((category) => category.routeName)
        .includes(params.category.toLowerCase())
    ) {
      return false;
    }

    return true;
  },
  async asyncData({ params, $content, error }) {
    const articles = await $content(params.category.toLowerCase())
      .where({ category: params.category.toLowerCase() })
      .sortBy('updatedAt', 'desc')
      .limit(10) // 記得做分頁
      .fetch();
    console.log(articles);

    return {
      articles,
    };
  },
  data() {
    return {
      category: '',
    };
  },
  mounted() {
    this.category = this.$store.getters.getCategories.find(
      (category) =>
        category.routeName === this.$route.params.category.toLowerCase()
    );
  },
};
</script>

<style scoped>
.content-block {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

.main-block {
  width: 1000px;
}

.category-block {
  background-color: #f9f2e9;
  padding: 20px 40px;
}

.articles-block {
  background-color: #f9f2e9;
  padding: 20px 40px;
  margin-top: 20px;
}

.articles-block a {
  padding: 10px;
  margin: 15px;
  display: block;
  text-decoration: none;
  border-bottom: solid 1px;
  color: #9f3448;
}
.articles-block > a > .title {
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
