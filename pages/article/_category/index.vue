<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h2>Category: {{ category.name }}</h2>
      </div>
      <div class="search-block">
        <div class="description">
          <p>搜尋文章標題：</p>
          <input type="text" placeholder="請輸入..." v-model="searchText" @input="changeSearchText" />
        </div>
      </div>
      <div class="articles-block">
        <div
          v-for="article in articlesByCategory"
          :key="article.title"
          class="article"
        >
          <NuxtLink
            :to="{
              name: 'article-category-slug',
              params: { category: category.routeName, slug: article.slug },
            }"
          >
            <div class="title">
              {{ article.title }}
              <span class="updated-at">更新於 {{ new Date(article.updatedAt).toLocaleDateString() }}</span>
            </div>
            <div class="description">
              {{ article.description.slice(0, 80) }} ......
            </div>
          </NuxtLink>
        </div>
        <h4 v-if="totalCountByCategory === 0">查無結果，換個關鍵字吧！</h4>

        <ListPagination
          v-if="totalCountByCategory !== 0"
          :page-size="perPage"
          :current-page="page"
          :total-count="totalCountByCategory"
          @currentChange="setCurrentPage"
        />
      </div>
    </div>
    <side-bar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import ListPagination from '@/components/ListPagination';

export default {
  name: 'CategoryIndex',
  components: {
    SideBar,
    ListPagination,
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
      perPage: 9,
      searchText: '',
    };
  },
  head() {
    return {
      title: (this.category.name ?? 'Blog') + ' - Chris',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: (this.category.name ?? 'Blog') + ' - Chris',
        },
      ],
    };
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    articlesByCategory() {
      return this.$store.getters
        .getArticles(this.searchText)
        .filter((article) => article.category === this.category.routeName)
        .slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    totalCountByCategory() {
      return this.$store.getters
        .getArticles(this.searchText)
        .filter((article) => article.category === this.category.routeName)
        .length;
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
  methods: {
    setCurrentPage(pageItem) {
      this.$router.push({
        name: 'article-category',
        params: { category: this.category.routeName },
        query: { page: pageItem },
      });
    },
    changeSearchText() {
      this.$router.push({
        name: 'article-category',
        params: { category: this.category.routeName },
        query: { page: 1 },
      });
    },
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

.search-block {
  display: flex;
  align-items: center;
  background-color: #f9f2e9;
  padding: 20px 40px;
  margin-top: 20px;
}

.search-block .description {
  margin-right: 10px;
}

.search-block input {
  padding: 8px 10px;
  border: #b1b0b0 1px solid;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
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
  letter-spacing: 1px;
}

.articles-block .article a > .title {
  margin-bottom: 20px;
  font-weight: bold;
}

.articles-block .article a > .title > .updated-at {
  float: right;
  font-weight: normal;
  color: #a57269;
}

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .main-block {
    width: 100%;
  }

  .articles-block {
    padding: 10px 10px;
  }
}
</style>
