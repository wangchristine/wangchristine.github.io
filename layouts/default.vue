<template>
  <el-container>
    <el-header>
      <div class="container">
        <NuxtLink :to="{ name: 'index' }" class="brand-title"
          >Chris 主頁</NuxtLink
        >
        <nav class="navigation-link">
          <NuxtLink
            v-for="(category, key) in categories"
            :key="key"
            :to="{
              name: 'article-category',
              params: { category: category.routeName },
            }"
            >{{ category.name }}</NuxtLink
          >
          <NuxtLink :to="{ name: 'food' }">Food</NuxtLink>
        </nav>
      </div>
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer>
      Copyright © 2022 Chris Wang
      <br />
      本網站為個人使用，參考
      <a href="https://www.facebook.com/TIPO.gov.tw/posts/1804286156280593/"
        >經濟部智慧財產局</a
      >，有使用到的網路圖片來源在
      <NuxtLink :to="{ name: 'ImageOrigin' }">此連結</NuxtLink>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutDefault',
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
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
  max-width: 1200px;
  margin: 0 auto;
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
  letter-spacing: 0.5px;
}
</style>
