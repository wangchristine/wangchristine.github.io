<script setup>
import { useAppStore } from '@/store/app';

definePageMeta({
  validate: async (route) => {
    const appStore = useAppStore();

    if(!appStore.categories.map((category) => category.routeName).includes(route.params.category.toLowerCase())) {
      return false;
    }
    return true;
  }
})

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const perPage = ref(9);
const categories = computed(() => appStore.categories);
const category = computed(() => {
  return categories.value.find((category) =>
    category.routeName === route.params.category.toLowerCase()
  )
});
const page = computed(() => parseInt(route.params.page) || 1);

const { data: articlesByCategory } = await useAsyncData('article-' + category.value.routeName, () => 
  queryContent('article', category.value.routeName).sort({ updatedAt: -1 }).find()
);
const articles = computed(() => articlesByCategory.value?.slice((page.value - 1) * perPage.value, page.value * perPage.value));

useSeoMeta({
  title: () => (category.value.name ?? 'Blog') + ' - Chris',
  description: () => (category.value.name ?? 'Blog') + '分類筆記',
  ogTitle: () => (category.value.name ?? 'Blog') + ' - Chris',
  ogDescription: () => (category.value.name ?? 'Blog') + '分類筆記',
})

onMounted(() => {
  if (page.value > Math.ceil(articlesByCategory.value.length / perPage.value)) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
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
      <div class="category-block shadow-block">
        <h2>{{ category.name }}</h2>
      </div>
      <div class="articles-block shadow-block">
        <div class="detail-block">
          <ContentNavigation>
            <div
              v-for="article in articles"
              :key="article._path"
              class="article"
            >
              <NuxtLink :to="article._path">
                <div class="title">
                  {{ article.title }}
                  <span class="updated-at">更新於 {{ new Date(article.updatedAt).toLocaleDateString() }}</span>
                </div>
                <div class="description">
                  {{ article.description.slice(0, 80) }} ......
                </div>
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

.search-block {
  display: flex;
  align-items: center;
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
  padding: 20px 40px;
  margin-top: 20px;
}

.articles-block .article a {
  padding: 10px;
  margin: 15px;
  display: block;
  text-decoration: none;
  border-bottom: solid 1px #9c362e;
  color: #333;
  letter-spacing: 1px;
}

.articles-block .article a>.title {
  margin-bottom: 20px;
  font-weight: bold;
  color: #943d24;
}

.articles-block .article a>.title>.updated-at {
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
