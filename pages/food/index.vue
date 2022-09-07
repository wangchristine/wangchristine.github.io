<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h2>Category: 食物</h2>
      </div>
      <div class="search-block">
        <p>星等為依據個人喜好跟主觀判斷所評分，僅供參考。</p>
        <p>
          1⭐: 不喜歡； 2⭐: 普通，以填飽肚子為主； 3⭐: 還不錯； 4⭐: 超好吃
        </p>
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
            <div v-for="(food, key) in foods" :key="key" class="food">
              <div class="star-block">
                <el-rate
                  class="star-rate"
                  disabled
                  :value="food.star"
                  :colors="['#ff8100', '#ff8100', '#ff8100']"
                  disabled-void-color="#bfb5b3"
                  :score-template="food.star.toString()"
                >
                </el-rate>
                <span class="star-number">{{ food.star }}</span>
              </div>
              <img
                class="image"
                :src="require(`~/assets/${food.image}`)"
                :alt="food.name"
              />
              <h3 class="name">
                {{ food.name }}
                <span v-if="food.price" class="price">${{ food.price }}</span>
              </h3>
              <h4 class="store-name">{{ food.storeName }}</h4>
              <h4 class="created-at">{{ food.createdAt }}</h4>
              <p class="description">{{ food.description }}</p>
            </div>
          </div>
          <!-- 這邊 style 同 <div class="paginate">，但不確定為何無法直接吃 class -->
          <div style="text-align: center; padding: 15px 25px 25px 25px; background-color: #f9f2e9;">
            <a href="#"
               :class="{'paginate-active': currentPage === pageItem}"
               style="display: inline-block; padding: 10px; margin: 5px; text-decoration: none; color: #9f3448;"
               v-for="pageItem in Math.ceil(totalCountFoods / perPage)" :key="pageItem"
               @click.prevent="setCurrentPage(pageItem)">{{ pageItem }}</a>
          </div>
        </template>
      </el-skeleton>
    </div>

    <side-bar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';

export default {
  name: 'FoodIndex',
  components: {
    SideBar,
  },
  data() {
    return {
      isFoodsLoading: true,
      perPage: 9,
      currentPage: 1,
    };
  },
  computed: {
    foods() {
      return this.$store.getters.getFoods.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
    },
    totalCountFoods() {
      return this.$store.getters.getFoods.length;
    },
  },
  mounted() {
    this.$store.dispatch('setFoods');
    this.isFoodsLoading = false;
  },
  methods: {
    setCurrentPage(pageItem) {
      this.currentPage = pageItem;
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
  background-color: #f9f2e9;
  padding: 20px 40px;
  margin-top: 20px;
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

.food .image {
  width: 100%;
}

.food .name {
  line-break: anywhere;
}

.food .price {
  color: #9f3448;
}

.food .store-name {
  margin: 0;
}

.food .created-at {
  margin: 8px 0;
  color: #b1908b;
}

.food .description {
  margin: 0;
  line-break: anywhere;
}

.paginate {
  text-align: center;
  padding: 15px 25px 25px 25px;
  background-color: #f9f2e9;
}

.paginate a {
  display: inline-block;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  color: #9f3448;
}

.paginate-active {
  background-color: #e7ccba;
}

.el-skeleton.is-animated .el-skeleton__item {
  background: linear-gradient(90deg, #ddc3b5 25%, #e7d0c2 37%, #ddc3b5 63%);
  /*background: linear-gradient(90deg,#cdbeb7 25%,#dbcdc4 37%,#cdbeb7 63%);*/
  background-size: 400% 100%;
  -webkit-animation: el-skeleton-loading 1.4s ease infinite;
  animation: el-skeleton-loading 1.4s ease infinite;
}

.star-block {
  position: absolute;
  top: 2px;
  right: 10px;
}

.star-rate {
  display: inline-block;
  vertical-align: top;
}

.star-number {
  color: #ff8100;
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
}

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .main-block {
    width: 100%;
  }

  .food {
    flex-basis: 40%;
  }
}
</style>
