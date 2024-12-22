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

const selectStore = (event) => {
  currentPage.value = 1;
  storeId.value = event.target.value;
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
      <div class="category-block shadow-block">
        <h2>食物</h2>
      </div>
      <div class="search-block shadow-block">
        <div class="description">
          <p>星等為依據個人喜好跟主觀判斷所評分，僅供參考。</p>
          <p>1⭐: 不喜歡； 2⭐: 普通，以填飽肚子為主； 3⭐: 還不錯； 4⭐: 超好吃</p>
        </div>
        <div class="search">
          <span>店家：</span>
          <select name="store" @change="selectStore($event)">
            <option value="null">-- 全部 --</option>
            <option v-for="store in stores" :key="store.id" :value="store.id">
              {{ store.name }}
            </option>
          </select>
        </div>
      </div>
      <el-skeleton
        :loading="isFoodsLoading"
        animated
        :count="6"
        class="foods-block shadow-block detail-block"
        style="width: auto"
      >
        <template #template>
          <div class="food">
            <el-skeleton-item variant="image" style="width: 100%; height: 135px" />
            <el-skeleton-item variant="h3" style="width: 70%; height: 24px; margin: 1em 0" />
            <el-skeleton-item variant="text" style="width: 60%; height: 20px" />
            <el-skeleton-item variant="text" style="width: 60%; height: 20px; margin: 8px 0" />
            <el-skeleton-item variant="text" style="width: 100%; height: 40px" />
          </div>
        </template>
        <template #default>
          <div class="foods-block shadow-block">
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
          </div>
        </template>
      </el-skeleton>
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

.search-block .search {
  margin: auto;
}

.search-block select {
  padding: 8px 10px;
  border: #b1b0b0 1px solid;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
}

.foods-block {
  padding: 20px;
  margin-top: 20px;
}

.detail-block {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.food {
  position: relative;
  display: inline-block;
  flex-basis: 25%;
  margin: 10px 0;
  padding: 20px;
  box-shadow: 2px 2px 10px -1px rgb(0 0 0 / 30%);
  text-align: center;
  background-color: #f7eade;
  min-width: 180px;
}

.comment-button {
  display: inline-block;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 20px);
  font-size: 32px;
  color: #ff8100;
  margin-top: 5px;
  cursor: pointer;
  width: 38px;
  height: 38px;
  border: #ff8100 2px solid;
  border-radius: 50%;
}

.comment-button:hover {
  color: #f7eade;
  background-color: #ff8100;
}

.comment-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(90deg, #ddc3b5 25%, #e7d0c2 37%, #ddc3b5 63%);
  /*background: linear-gradient(90deg,#cdbeb7 25%,#dbcdc4 37%,#cdbeb7 63%);*/
  background-size: 400% 100%;
  -webkit-animation: el-skeleton-loading 1.4s ease infinite;
  animation: el-skeleton-loading 1.4s ease infinite;
}

:deep(.el-overlay-dialog .comment-dialog) {
  min-width: 300px;
  width: 55%;
  background-color: #fffbf0;
}

:deep(.comment-dialog .el-dialog__body .el-aside) {
  padding-right: 20px;
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
