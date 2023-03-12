<template>
  <div class="content-block">
    <div class="main-block">
      <div class="category-block">
        <h2>Category: 花草小徑</h2>
      </div>
      <div class="search-block">
        <div class="description">
          <p>搜尋(包含植物名和其屬性)：</p>
          <input type="text" v-model="searchText" @input="changeSearchText">
        </div>
      </div>
      <el-skeleton :loading="isPlantsLoading" animated>
        <template slot="template">
          <div class="plants-block">
            <div v-for="(item, key) in 6" :key="key" class="plant">
              <el-skeleton-item
                variant="image"
                style="flex-basis: 40%; display: flex; height: 200px"
              />
              <div style="flex-basis: 60%; margin-left: 10px">
                <el-skeleton-item
                  variant="h2"
                  style="width: 40%; height: 24px; margin: 1em 0"
                />
                <el-skeleton-item
                  variant="rect"
                  style="width: 100%; height: 100px"
                />
              </div>
            </div>
          </div>
        </template>
        <template slot="default">
          <!-- 這邊 style 同 <div class="plants-block">，但不確定為何無法直接吃 class -->
          <div
            style="
              display: flex;
              flex-direction: column;
              background-color: #f9f2e9;
              padding: 20px;
              margin-top: 20px;
            "
          >
            <template v-for="(plant, key) in plants">
              <PlantCard :plant="plant" :key="key"></PlantCard>
            </template>
            <h4 v-if="totalCountPlants === 0">查無結果，換個關鍵字吧！</h4>
          </div>

          <ListPagination
            v-if="totalCountPlants !== 0"
            :page-size="perPage"
            :current-page="currentPage"
            :total-count="totalCountPlants"
            @currentChange="setCurrentPage"
          />
        </template>
      </el-skeleton>
    </div>

    <side-bar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import PlantCard from '@/components/PlantCard';
import ListPagination from '@/components/ListPagination';

export default {
  name: 'PlantIndex',
  components: {
    SideBar,
    PlantCard,
    ListPagination,
  },
  data() {
    return {
      isPlantsLoading: true,
      perPage: 6,
      currentPage: 1,
      searchText: "",
    };
  },

  head() {
    return {
      title: '花草小徑 - Chris',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: '花草小徑 - Chris',
        },
      ],
    };
  },
  computed: {
    plants() {
      return this.$store.getters
        .getPlants(this.searchText)
        .slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
        );
    },
    totalCountPlants() {
      return this.$store.getters.getPlants(this.searchText).length;
    },
  },
  mounted() {
    this.$store.dispatch('setPlants');
    this.isPlantsLoading = false;
  },
  methods: {
    setCurrentPage(pageItem) {
      this.currentPage = pageItem;
    },
    changeSearchText() {
      this.currentPage = 1;
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

.plants-block {
  display: flex;
  flex-direction: column;
  background-color: #f9f2e9;
  padding: 20px;
  margin-top: 20px;
}

.plant {
  position: relative;
  display: flex;
  margin: 10px 0;
  padding: 20px;
  box-shadow: 2px 2px 10px -1px rgb(0 0 0 / 30%);
  background-color: #f7eade;
  min-width: 180px;
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
