<script setup>
import { useAppStore } from "@/store/app";

definePageMeta({
  validate: async (route) => {
    const appStore = useAppStore();

    if (!appStore.categories.map((category) => category.routeName).includes(route.params.category.toLowerCase())) {
      return false;
    }
    return true;
  },
});

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const perPage = ref(9);
const categories = computed(() => appStore.categories);
const category = computed(() => {
  return categories.value.find((category) => category.routeName === route.params.category.toLowerCase());
});
const page = computed(() => parseInt(route.params.page) || 1);

const { data: articlesByCategory } = await useAsyncData("article-" + category.value.routeName, () =>
  queryContent("article", category.value.routeName).sort({ updatedAt: -1 }).find(),
);
const articles = computed(() =>
  articlesByCategory.value?.slice((page.value - 1) * perPage.value, page.value * perPage.value),
);

useSeoMeta({
  title: () => (category.value.name ?? "Blog") + " - Chris",
  description: () => (category.value.name ?? "Blog") + "分類筆記",
  ogTitle: () => (category.value.name ?? "Blog") + " - Chris",
  ogDescription: () => (category.value.name ?? "Blog") + "分類筆記",
});

onMounted(() => {
  if (page.value > Math.ceil(articlesByCategory.value.length / perPage.value)) {
    throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }
});

const setCurrentPage = (pageItem) => {
  router.push({
    params: { page: pageItem },
  });
};
</script>

<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h1>{{ category.name }}</h1>
      </div>
      <div class="articles-block">
        <div class="detail-block">
          <ContentNavigation>
            <div v-for="article in articles" :key="article._path" class="article">
              <NuxtLink :to="article._path">
                <div class="title">
                  {{ article.title }}
                  <span class="updated-at">更新於 {{ new Date(article.updatedAt).toLocaleDateString() }}</span>
                </div>
                <div class="description">{{ article.body.children[0].children[0].value.slice(0, 80) }}......</div>
              </NuxtLink>
            </div>
          </ContentNavigation>
        </div>

        <ListPagination
          v-if="articlesByCategory && articlesByCategory.length !== 0"
          :page-size="perPage"
          :current-page="page"
          :total-count="articlesByCategory.length"
          :origin-category="category"
          @current-change="setCurrentPage"
        />
      </div>
    </div>
    <SideBar />
  </div>
</template>

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
  padding: 20px 40px;
}

.category-block h1 {
  color: var(--main-theme);
}

.search-block {
  display: flex;
  align-items: center;
  padding: 0 40px;
}

.search-block .description {
  margin-right: 10px;
}

.search-block input {
  padding: 8px 10px;
  border: var(--main-secondary-color) 1px solid;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  background-color: #1e1e1e;
  color: #a7a7a7;
}

.articles-block {
  padding: 0 40px;
}

.articles-block .article a {
  padding: 30px 0;
  display: block;
  text-decoration: none;
  border-bottom: solid 1px var(--main-theme);
  color: var(--main-font-color);
  letter-spacing: 1px;
}

.articles-block .article a > .title {
  margin-bottom: 20px;
  color: var(--main-theme);
  font-size: 18px;
}

.articles-block .article a > .title > .updated-at {
  float: right;
  font-size: 16px;
  font-weight: normal;
  color: var(--main-secondary-color);
}

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .main-block {
    width: 100%;
  }

  .category-block {
    padding: 10px;
  }

  .articles-block {
    padding: 10px 10px;
  }

  .articles-block .article a {
    padding: 20px 0;
  }
}
</style>
