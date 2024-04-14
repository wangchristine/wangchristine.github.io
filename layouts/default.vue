<script setup>

import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const route = useRoute();

const openDrawer = ref(false);

const categories = computed(() => appStore.categories)

watch(() => route.path, () => {
  openDrawer.value = false;
});

const goUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <el-container>
    <div id="fb-root" />
    <el-header>
      <div class="container">
        <el-button
          class="burger"
          @click="openDrawer = true"
        >
          ☰
        </el-button>
        <client-only>
          <el-drawer
            v-model="openDrawer"
            title="站內導覽"
            direction="ltr"
            size="60%"
          >
            <nav class="drawer-navigation-link">
              <NuxtLink
                v-for="(category, key) in categories"
                :key="key"
                :to="{
                  name: 'article-category',
                  params: { category: category.routeName },
                }"
              >
                {{ category.name }}
              </NuxtLink>
              <NuxtLink :to="{ name: 'plant' }">
                花草小徑
              </NuxtLink>
              <NuxtLink :to="{ name: 'food' }">
                食物
              </NuxtLink>
            </nav>
          </el-drawer>
        </client-only>

        <NuxtLink
          :to="{ name: 'index' }"
          class="brand-title"
        >
          Chris 主頁
        </NuxtLink>
        <nav class="navigation-link">
          <NuxtLink
            v-for="(category, key) in categories"
            :key="key"
            :to="{
              name: 'article-category',
              params: { category: category.routeName },
            }"
          >
            {{ category.name }}
          </NuxtLink>
          <NuxtLink :to="{ name: 'plant' }">
            花草小徑
          </NuxtLink>
          <NuxtLink :to="{ name: 'food' }">
            食物
          </NuxtLink>
        </nav>
      </div>
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <el-footer>
      Copyright © 2022-{{ new Date().getFullYear() }} Chris Wang
      <br>
      本網站為個人使用，參考
      <a href="https://www.facebook.com/TIPO.gov.tw/posts/1804286156280593/">
        經濟部智慧財產局
      </a>
      ，有使用到的網路圖片來源在
      <NuxtLink :to="{ name: 'image-origin' }">
        此連結
      </NuxtLink>
    </el-footer>
    <button class="go-up">
      <img
        src="~/assets/go-up.jpg"
        alt="Go Up"
        @click="goUp()"
      >
    </button>
  </el-container>
</template>

<style>
body {
  margin: 0;
  font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑',
    Arial, ui-sans-serif, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #464646;
  letter-spacing: 1px;
}

h2 {
  font-size: 20px;
}

.el-container {
  min-height: 100vh;
}

.el-header {
  background-color: #943d24;
  line-height: 60px;
}

.el-header .container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.el-header .container .burger {
  display: none;
  position: absolute;
  top: 10px;
  left: 0;
  margin-right: 30px;
  background-color: #f9f2ea;
  color: #884731;
  font-weight: bold;
}

.drawer-navigation-link {
  padding: 0 15px;
}

.drawer-navigation-link a {
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: #943d24;
  border-bottom: 1px #d5a47c solid;
  line-height: 50px;
  margin-bottom: 10px;
}

.brand-title {
  border: 0;
  padding: 8px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fffbf0;
  font-size: 18px;
  text-decoration: none;
}

.navigation-link {
  display: inline-block;
}

.navigation-link a {
  margin-left: 30px;
  text-decoration: none;
  font-weight: bold;
  color: #fffbf0;
  font-size: 18px;
  border-bottom: 2px #d5a47c solid;
}

.el-footer {
  background-color: #943d24;
  color: #fffbf0;
  text-align: center;
  line-height: 20px;
  padding: 10px;
}

.el-footer a {
  text-decoration: none;
  font-weight: bold;
  color: #3e9bed;
}

.el-main {
  background-color: #fffbf0;
  color: #333;
  letter-spacing: 1px;
  overflow: initial;
}

.go-up {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 10px;
  border-radius: 50%;
  border: #c99d54 5px solid;
  padding: 0;
  width: 70px;
  height: 70px;
  z-index: 999;
}

.go-up img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.shadow-block {
  background-color: #f9f2e9;
  overflow-x: hidden;
  box-shadow: 0 0.5rem 1.5rem rgb(83 88 93 / 25%);
}

@media all and (max-width: 768px) {
  .el-header .container .burger {
    display: inline-block;
  }

  .brand-title {
    display: block;
    text-align: center;
    padding: 0;
    margin: 0 60px;
  }

  .navigation-link {
    display: none;
  }

  .el-footer {
    line-height: 16px;
    padding: 8px;
    font-size: 14px;
  }

  .go-up {
    display: block;
  }
}
</style>
