<script setup>
import plantData from "@/config/plant.json";
import { useAppStore } from "@/store/app";

const isPlantsLoading = ref(true);
const perPage = ref(6);
const currentPage = ref(1);
const searchText = ref("");

const appStore = useAppStore();

appStore.setPlants(plantData);

const plants = computed(() => {
  return appStore
    .getPlants(searchText.value)
    .slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value);
});
const totalCountPlants = computed(() => appStore.getPlants(searchText.value).length);

useSeoMeta({
  title: () => "花草小徑 - Chris",
  description: () => "花草特性小筆記",
  ogTitle: () => "花草小徑 - Chris",
  ogDescription: () => "花草特性小筆記",
});

onMounted(() => {
  isPlantsLoading.value = false;
});

const setCurrentPage = (pageItem) => {
  currentPage.value = pageItem;
};

const changeSearchText = () => {
  currentPage.value = 1;
};
</script>

<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h1>花草小徑</h1>
      </div>
      <div class="search-block">
        <div class="description">
          <p>搜尋(包含植物名和其屬性)：</p>
          <input v-model="searchText" type="text" placeholder="請輸入..." @input="changeSearchText" />
        </div>
      </div>
      <div class="plants-block">
        <el-skeleton :loading="isPlantsLoading" animated :count="6" class="detail-block" style="width: auto">
          <template #template>
            <div class="plant">
              <el-skeleton-item variant="image" style="flex-basis: 40%; display: flex; height: 200px" />
              <div style="flex-basis: 60%; margin-left: 10px">
                <el-skeleton-item variant="p" style="width: 40%; height: 24px; margin: 1em 0" />
                <el-skeleton-item variant="rect" style="width: 100%; height: 100px" />
              </div>
            </div>
          </template>
          <template #default>
            <div class="detail-block">
              <PlantCard v-for="(plant, key) in plants" :key="key" :plant="plant" />
              <h4 v-if="totalCountPlants === 0" class="no-result">查無結果，換個關鍵字吧！</h4>
            </div>

            <ListPagination
              v-if="totalCountPlants !== 0"
              :page-size="perPage"
              :current-page="currentPage"
              :total-count="totalCountPlants"
              @current-change="setCurrentPage"
            />
          </template>
        </el-skeleton>
      </div>
    </div>

    <side-bar />
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
  margin-bottom: 16px;
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

.plants-block {
  padding: 0 40px;
}

.detail-block {
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-top: 1px solid var(--main-secondary-color);
}

.plants-block .no-result {
  padding: 0 20px;
}

.plant {
  position: relative;
  display: flex;
  min-width: 180px;
  border-bottom: 1px solid var(--block-border-color);
  padding-bottom: 20px;
}

.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(90deg, #a7a7a7 25%, #868686 37%, #a7a7a7 63%);
  background-size: 400% 100%;
  -webkit-animation: el-skeleton-loading 1.4s ease infinite;
  animation: el-skeleton-loading 1.4s ease infinite;
}

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .main-block {
    width: 100%;
  }

  .plant {
    display: block;
  }
}
</style>
