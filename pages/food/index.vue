<script setup>
import foodData from "@/config/food.json";
import { useAppStore } from "@/store/app";

const isFoodsLoading = ref(true);
const perPage = ref(9);
const currentPage = ref(1);
const storeId = ref(null);
const dialogVisible = ref(true);
const dialogModal = ref(false);
const clickFood = ref({});
const commentLoading = ref(true);

const appStore = useAppStore();

appStore.setFoods(foodData);

const foods = computed(() => {
  return appStore
    .getFoods(storeId.value)
    .slice((currentPage.value - 1) * perPage.value, currentPage.value * perPage.value);
});
const totalCountFoods = computed(() => {
  return appStore.getFoods(storeId.value).length;
});
const stores = computed(() => {
  return appStore.getStores();
});

useSeoMeta({
  title: () => "食物 - Chris",
  description: () => "吃吃喝喝小紀錄",
  ogTitle: () => "食物 - Chris",
  ogDescription: () => "吃吃喝喝小紀錄",
});

onMounted(() => {
  dialogVisible.value = false;
  dialogModal.value = true;
  isFoodsLoading.value = false;
});

const setCurrentPage = (pageItem) => {
  currentPage.value = pageItem;
};

const selectStore = (selectId) => {
  currentPage.value = 1;
  storeId.value = selectId;
};

const openFoodComment = (food) => {
  clickFood.value = food;
  dialogVisible.value = !dialogVisible.value;
  commentLoading.value = true;

  const fbComment = document.createElement("div");
  fbComment.id = "comment-detail";
  fbComment.className = "fb-comments";
  fbComment.dataset.href = "https://wangchristine.github.io/food/?" + clickFood.value.id;
  fbComment.dataset.width = "100%";
  fbComment.dataset.num_posts = "5";
  fbComment.dataset.lazy = "true";
  const commentMain = document.getElementById("comment-main");
  commentMain.appendChild(fbComment);

  window.FB.XFBML.parse(commentMain, () => {
    commentLoading.value = false;
  });
};

const closeFoodComment = () => {
  clickFood.value = {};
  const commentMain = document.getElementById("comment-main");
  const commentDetail = document.getElementById("comment-detail");
  if (commentDetail !== null) {
    commentMain.removeChild(commentDetail);
  }
};
</script>

<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h1>食物</h1>
      </div>
      <div class="search-block">
        <div class="description">
          <p>星等為依據個人喜好跟主觀判斷所評分，僅供參考。</p>
          <p>
            <span>1</span>
            <el-icon class="star" color="#e98e32" size="18"><StarFilled /></el-icon>
            : 不喜歡；
            <span>2</span>
            <el-icon class="star" color="#e98e32" size="18"><StarFilled /></el-icon>
            : 普通，以填飽肚子為主；
            <span>3</span>
            <el-icon class="star" color="#e98e32" size="18"><StarFilled /></el-icon>
            : 還不錯；
            <span>4</span>
            <el-icon class="star" color="#e98e32" size="18"><StarFilled /></el-icon>
            : 超好吃
          </p>
        </div>
        <div class="search">
          <span>店家：</span>
          <div class="search-store">
            <el-check-tag :checked="storeId == null" type="success" @change="selectStore(null)">- 全部 -</el-check-tag>
            <el-check-tag
              v-for="store in stores"
              :key="store.id"
              :checked="storeId == store.id"
              type="success"
              @change="selectStore(store.id)"
            >
              {{ store.name }} ({{ store.count }})
            </el-check-tag>
          </div>
        </div>
      </div>
      <div class="foods-block">
        <el-skeleton :loading="isFoodsLoading" animated :count="6" class="detail-block" style="width: auto">
          <template #template>
            <div class="food shadow-block">
              <el-skeleton-item variant="image" style="width: 100%; height: 135px" />
              <el-skeleton-item variant="h3" style="width: 70%; height: 24px; margin: 1em 0" />
              <el-skeleton-item variant="text" style="width: 60%; height: 20px" />
              <el-skeleton-item variant="text" style="width: 60%; height: 20px; margin: 8px 0" />
              <el-skeleton-item variant="text" style="width: 100%; height: 40px" />
            </div>
          </template>
          <template #default>
            <div class="detail-block">
              <FoodCard v-for="(food, key) in foods" :key="key" :food="food">
                <template #action>
                  <div style="height: 50px" />
                  <a class="comment-button" @click="openFoodComment(food)">
                    <el-icon class="comment-icon"><Comment /></el-icon>
                  </a>
                </template>
              </FoodCard>
            </div>

            <ListPagination
              :page-size="perPage"
              :current-page="currentPage"
              :total-count="totalCountFoods"
              @current-change="setCurrentPage"
            />
          </template>
        </el-skeleton>
      </div>
      <el-dialog
        ref="commentDialog"
        v-model="dialogVisible"
        class="comment-dialog"
        title="留言"
        :modal="dialogModal"
        top="10vh"
        @close="closeFoodComment()"
      >
        <el-container style="min-height: 50vh">
          <el-aside>
            <FoodCard :food="clickFood" />
          </el-aside>
          <el-main id="comment-main" v-loading="commentLoading" element-loading-background="inherit">
            <!-- prepare for fb -->
          </el-main>
        </el-container>
      </el-dialog>
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
  padding: 0 40px;
}

.search-block .description {
  margin-right: 10px;
}

.search-block .star {
  vertical-align: middle;
}

.search-block .search {
  margin: 10px 0;
}

.search-block .search .search-store {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 5px;
}

.search-block .search .search-store .el-check-tag {
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--main-theme);
  background-color: var(--block-background-color);
  color: var(--main-theme);
  font-weight: normal;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.search-block .search .search-store .el-check-tag:hover {
  background-color: var(--main-theme);
  color: #fff;
}

.search-block .search .search-store .el-check-tag.is-checked {
  background-color: var(--main-theme);
  color: #fff;
}

.foods-block {
  padding: 0 40px;
}

.detail-block {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  border-top: 1px solid var(--main-secondary-color);
}

.food {
  position: relative;
  display: inline-block;
  flex-basis: 25%;
  margin: 10px 0;
  padding: 20px;
  text-align: center;
  min-width: 180px;
}

.comment-button {
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 20px);
  font-size: 32px;
  color: var(--main-theme);
  margin-top: 5px;
  cursor: pointer;
  width: 38px;
  height: 38px;
  border: var(--main-theme) 2px solid;
  border-radius: 50%;
}

.comment-button:hover {
  color: var(--block-background-color);
  background-color: var(--main-theme);
}

.comment-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(90deg, #a7a7a7 25%, #868686 37%, #a7a7a7 63%);
  /*background: linear-gradient(90deg,#cdbeb7 25%,#dbcdc4 37%,#cdbeb7 63%);*/
  background-size: 400% 100%;
  -webkit-animation: el-skeleton-loading 1.4s ease infinite;
  animation: el-skeleton-loading 1.4s ease infinite;
}

:deep(.el-overlay-dialog .comment-dialog) {
  min-width: 300px;
  width: 55%;
  background-color: var(--main-background-color);
}

:deep(.el-overlay-dialog .el-dialog__title) {
  color: var(--main-title);
}

:deep(.comment-dialog .el-dialog__body .el-aside) {
  padding-right: 20px;
}

:deep(.comment-dialog .el-dialog__body .el-main) {
  background-color: #e7e7e7;
  border-radius: 5px;
}

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .main-block {
    width: 100%;
  }

  .search-block {
    flex-direction: column;
  }

  .search-block .description {
    margin-right: 0;
  }

  .food {
    flex-basis: 40%;
  }
}

@media all and (max-width: 1024px) {
  .el-container {
    flex-direction: column;
    align-items: center;
  }

  :deep(.comment-dialog .el-dialog__body .el-aside) {
    padding: 0 10px;
    margin: 0;
  }
}
</style>
