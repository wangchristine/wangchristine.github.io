<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const route = useRoute();

const openDrawer = ref(false);

const categories = computed(() => appStore.categories);

watch(
  () => route.path,
  () => {
    openDrawer.value = false;
  },
);

const goUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <el-container>
    <div id="fb-root" />
    <el-header>
      <div class="container">
        <el-button class="burger" @click="openDrawer = true">☰</el-button>
        <client-only>
          <el-drawer
            v-model="openDrawer"
            class="drawer"
            header-class="drawer-header"
            title="站內導覽"
            direction="ltr"
            size="60%"
          >
            <nav class="drawer-navigation-link">
              <NuxtLink
                v-for="(category, key) in categories"
                :key="key"
                :to="{
                  name: 'article-category-page',
                  params: { category: category.routeName, page: 1 },
                }"
              >
                {{ category.name }}
              </NuxtLink>
              <NuxtLink :to="{ name: 'plant' }">花草小徑</NuxtLink>
              <NuxtLink :to="{ name: 'food' }">食物</NuxtLink>
            </nav>
          </el-drawer>
        </client-only>

        <NuxtLink :to="{ name: 'index' }" class="brand-title">Chris 主頁</NuxtLink>
        <nav class="navigation-link">
          <NuxtLink
            v-for="(category, key) in categories"
            :key="key"
            :to="{
              name: 'article-category-page',
              params: { category: category.routeName, page: 1 },
            }"
          >
            {{ category.name }}
          </NuxtLink>
          <NuxtLink :to="{ name: 'plant' }">花草小徑</NuxtLink>
          <NuxtLink :to="{ name: 'food' }">食物</NuxtLink>
        </nav>
      </div>
    </el-header>
    <el-main>
      <slot />
    </el-main>
    <el-footer>
      Copyright © 2022-{{ new Date().getFullYear() }} Chris Wang
      <br />
      本網站為個人使用，參考
      <a href="https://www.facebook.com/TIPO.gov.tw/posts/1804286156280593/" target="_blank">
        <span>經濟部智慧財產局</span>
        <el-icon><ELink /></el-icon>
      </a>
      ，有使用到的網路圖片來源在
      <NuxtLink :to="{ name: 'image-origin' }">此連結</NuxtLink>
    </el-footer>
    <button class="go-up">
      <img src="~/assets/go-up.jpg" alt="Go Up" @click="goUp()" />
    </button>
  </el-container>
</template>

<style>
body {
  margin: 0;
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, ui-sans-serif, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--main-theme);
  letter-spacing: 1px;
}

h2 {
  font-size: 20px;
}

.el-container {
  min-height: 100vh;
}

.el-header {
  background-color: var(--block-background-color);
  line-height: 60px;
  border-bottom: solid 1px var(--block-border-color);
}

.el-header .container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.el-header .container .burger {
  display: none;
  position: absolute;
  top: 14px;
  left: 0;
  margin-right: 30px;
  background-color: var(--block-border-color);
  color: var(--block-font-color);
  font-weight: bold;
  border: solid 1px var(--block-border-color);
  box-shadow:
    rgb(21, 21, 21, 0.72) 0 6px 18px 0,
    rgb(137, 135, 135, 0.24) 0 0 0 1px;
}

.drawer {
  background-color: var(--block-background-color);
  color: var(--block-font-color);
}

.drawer-header {
  color: var(--block-font-color);
}

.drawer-navigation-link {
  padding: 0 15px;
}

.drawer-navigation-link a {
  display: block;
  text-decoration: none;
  font-weight: bold;
  color: var(--block-font-color);
  border-bottom: 1px var(--main-theme) solid;
  line-height: 50px;
  margin-bottom: 10px;
}

.brand-title {
  border: 0;
  padding: 8px;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--main-theme);
  font-size: 20px;
  text-decoration: none;
}

.navigation-link {
  display: inline-block;
}

.navigation-link a {
  margin-left: 30px;
  text-decoration: none;
  font-weight: bold;
  color: var(--block-font-color);
  font-size: 18px;
  border-bottom: 2px var(--main-theme) solid;
}

.el-footer {
  background-color: var(--block-background-color);
  color: var(--block-font-color);
  text-align: center;
  line-height: 20px;
  padding: 10px;
  border-top: solid 1px var(--block-border-color);
}

.el-footer a {
  text-decoration: none;
  font-weight: bold;
  color: var(--block-font-color);
  border-bottom: 1px var(--main-theme) solid;
}

.el-main {
  background-color: var(--main-background-color);
  color: var(--main-font-color);
  letter-spacing: 1px;
  overflow: initial;
}

.go-up {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 10px;
  border-radius: 50%;
  border: var(--main-theme) 5px solid;
  padding: 0;
  width: 60px;
  height: 60px;
  z-index: 999;
}

.go-up img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.shadow-block {
  background-color: var(--block-background-color);
  overflow-x: hidden;
  box-shadow:
    rgb(21, 21, 21, 0.72) 0 6px 18px 0,
    rgb(137, 135, 135, 0.24) 0 0 0 1px;
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
