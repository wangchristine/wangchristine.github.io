<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h2>Category: 食物</h2>
      </div>
      <div class="search-block">
        <div class="description">
          <p>星等為依據個人喜好跟主觀判斷所評分，僅供參考。</p>
          <p>
            1⭐: 不喜歡； 2⭐: 普通，以填飽肚子為主； 3⭐: 還不錯； 4⭐: 超好吃
          </p>
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
      <el-skeleton :loading="isFoodsLoading" animated>
        <template slot="template">
          <div class="foods-block">
            <div v-for="(item, key) in 6" :key="key" class="food">
              <el-skeleton-item
                variant="image"
                style="width: 100%; height: 135px"
              />
              <el-skeleton-item
                variant="h3"
                style="width: 70%; height: 24px; margin: 1em 0"
              />
              <el-skeleton-item
                variant="text"
                style="width: 60%; height: 20px"
              />
              <el-skeleton-item
                variant="text"
                style="width: 60%; height: 20px; margin: 8px 0"
              />
              <el-skeleton-item
                variant="text"
                style="width: 100%; height: 40px"
              />
            </div>
          </div>
        </template>
        <template slot="default">
          <!-- 這邊 style 同 <div class="foods-block">，但不確定為何無法直接吃 class -->
          <div
            style="
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
              background-color: #f9f2e9;
              padding: 20px;
              margin-top: 20px;
            "
          >
            <template v-for="(food, key) in foods">
              <FoodCard :food="food" :key="key">
                <template #action>
                  <a class="comment-button" @click="openFoodComment(food)"><i class="el-icon-s-comment"></i></a>
                </template>
              </FoodCard>
            </template>
          </div>
          <!-- 這邊 style 同 <div class="paginate">，但不確定為何無法直接吃 class -->
          <div
            style="
              text-align: center;
              padding: 15px 25px 25px 25px;
              background-color: #f9f2e9;
            ">
            <el-pagination
              class="food-pagination"
              background
              :page-size="9"
              layout="prev, pager, next"
              :current-page="currentPage"
              :total="totalCountFoods"
              @current-change="setCurrentPage"
            >
            </el-pagination>
          </div>
        </template>
      </el-skeleton>
      <el-dialog
        ref="commentDialog"
        class="comment-dialog"
        title="留言"
        :visible.sync="dialogVisible"
        :modal="dialogModal"
        style="display:none;"
        @close="clickFood = {};"
      >
        <el-container style="min-height: 50vh;">
          <el-aside style="padding-right: 20px;">
            <FoodCard :food="clickFood">
            </FoodCard>
          </el-aside>
          <el-main>
            <div class="fb-comments" :data-href="'https://wangchristine.github.io/food#' + clickFood.id"
                 data-width="100%" data-numposts="5" data-lazy="true"></div>
          </el-main>
        </el-container>
      </el-dialog>
    </div>

    <side-bar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import FoodCard from '@/components/FoodCard';

export default {
  name: 'FoodIndex',
  components: {
    SideBar,
    FoodCard,
  },
  data() {
    return {
      isFoodsLoading: true,
      perPage: 9,
      currentPage: 1,
      storeId: null,
      dialogVisible: true,
      dialogModal: false,
      clickFood: {},
    };
  },
  computed: {
    foods() {
      return this.$store.getters
        .getFoods(this.storeId)
        .slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        );
    },
    totalCountFoods() {
      return this.$store.getters.getFoods(this.storeId).length;
    },
    stores() {
      return this.$store.getters.getStores;
    },
  },
  mounted() {
    this.dialogVisible = false;
    this.dialogModal = true;
    this.$store.dispatch('setFoods');
    this.isFoodsLoading = false;
  },
  methods: {
    setCurrentPage(pageItem) {
      this.currentPage = pageItem;
    },
    selectStore(event) {
      this.currentPage = 1;
      this.storeId = event.target.value;
    },
    openFoodComment(food) {
      this.dialogVisible = !this.dialogVisible;
      this.clickFood = food;
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #f9f2e9;
  padding: 20px;
  margin-top: 20px;
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
  font-size: 32px;
  color: #ff7d2d;
  margin-top: 5px;
  cursor: pointer;
}

.paginate {
  text-align: center;
  padding: 15px 25px 25px 25px;
  background-color: #f9f2e9;
}

.food-pagination:deep {
  overflow-x: auto;
}

.food-pagination:deep button {
  padding: 10px;
  margin: 5px;
  color: #9f3448 !important;
  background-color: transparent !important;
  height: 40px;
}

.food-pagination:deep li {
  padding: 10px;
  margin: 5px;
  color: #9f3448 !important;
  font-size: 16px;
  background-color: transparent !important;
  font-weight: initial;
  height: initial;
  line-height: initial;
}

.food-pagination:deep li.active {
  background-color: #e7ccba !important;
}

.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(90deg, #ddc3b5 25%, #e7d0c2 37%, #ddc3b5 63%);
  /*background: linear-gradient(90deg,#cdbeb7 25%,#dbcdc4 37%,#cdbeb7 63%);*/
  background-size: 400% 100%;
  -webkit-animation: el-skeleton-loading 1.4s ease infinite;
  animation: el-skeleton-loading 1.4s ease infinite;
}

.comment-dialog:deep .el-dialog__header {
  background-color: #f9f2e9;
}

.comment-dialog:deep .el-dialog__body {
  background-color: #fffbf0;
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
</style>
