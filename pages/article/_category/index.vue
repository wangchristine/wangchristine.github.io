<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h2>Category: {{ category.name }}</h2>
      </div>
      <div class="articles-block">
        <div
          v-for="article in allArticlesByCategory"
          :key="article.title"
          class="article"
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
        <div class="paginate">
          <NuxtLink
            v-for="pageItem in Math.ceil(totalCountByCategory / perPage)"
            :key="pageItem"
            :to="{
              name: 'article-category',
              params: { category: category.routeName },
              query: { page: pageItem },
            }"
            :class="{
              'nuxt-link-exact-active nuxt-link-active':
                page === 1 && pageItem === 1,
            }"
            >{{ pageItem }}</NuxtLink
          >
        </div>
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
  data() {
    return {
      category: '',
      perPage: 10,
    };
  },
  computed: {
    page() {
      return this.$route.query.page || 1;
    },
    allArticlesByCategory() {
      return this.$store.getters.getAllArticles
        .filter((article) => article.category === this.category.routeName)
        .slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    totalCountByCategory() {
      return this.$store.getters.getAllArticles.filter(
        (article) => article.category === this.category.routeName
      ).length;
    },
  },
  mounted() {
    this.category = this.$store.getters.getCategories.find(
      (category) =>
        category.routeName === this.$route.params.category.toLowerCase()
    );

    if (this.page > Math.ceil(this.totalCountByCategory / this.perPage)) {
      this.$nuxt.error({ statusCode: 404, message: 'Page not found' });
    }
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

.articles-block .article a {
  padding: 10px;
  margin: 15px;
  display: block;
  text-decoration: none;
  border-bottom: solid 1px;
  color: #9f3448;
}
.articles-block .article a > .title {
  margin-bottom: 20px;
  font-weight: bold;
}

.articles-block .paginate {
  text-align: center;
  padding: 10px;
  margin: 15px;
}

.articles-block .paginate a {
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  color: #9f3448;
}

.articles-block .paginate a.nuxt-link-exact-active {
  background-color: #e7ccba;
}
</style>
