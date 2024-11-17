<script setup>
import { useAppStore } from "@/store/app";
import plantData from "@/config/plant.json";

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
      <div class="category-block shadow-block">
        <h2>花草小徑</h2>
      </div>
      <div class="search-block shadow-block">
        <div class="description">
          <p>搜尋(包含植物名和其屬性)：</p>
          <input v-model="searchText" type="text" placeholder="請輸入..." @input="changeSearchText" />
        </div>
      </div>
      <el-skeleton
        :loading="isPlantsLoading"
        animated
        :count="6"
        class="plants-block shadow-block detail-block"
        style="width: auto"
      >
        <template v-slot:template>
          <div class="plant">
            <el-skeleton-item variant="image" style="flex-basis: 40%; display: flex; height: 200px" />
            <div style="flex-basis: 60%; margin-left: 10px">
              <el-skeleton-item variant="p" style="width: 40%; height: 24px; margin: 1em 0" />
              <el-skeleton-item variant="rect" style="width: 100%; height: 100px" />
            </div>
          </div>
        </template>
        <template v-slot:default>
          <div class="plants-block shadow-block">
            <div class="detail-block">
              <template v-for="(plant, key) in plants">
                <PlantCard :plant="plant" />
              </template>
              <h4 v-if="totalCountPlants === 0" class="no-result">查無結果，換個關鍵字吧！</h4>
            </div>

            <ListPagination
              v-if="totalCountPlants !== 0"
              :page-size="perPage"
              :current-page="currentPage"
              :total-count="totalCountPlants"
              @currentChange="setCurrentPage"
            />
          </div>
        </template>
      </el-skeleton>
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

.plants-block {
  margin-top: 20px;
}

.detail-block {
  display: flex;
  flex-direction: column;
}

.plants-block .no-result {
  padding: 0 20px;
}

.plant {
  position: relative;
  display: flex;
  padding: 20px;
  min-width: 180px;
  border-bottom: 1px solid rgb(0 0 0 / 30%);
}

.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(90deg, #ddc3b5 25%, #e7d0c2 37%, #ddc3b5 63%);
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
