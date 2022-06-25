<template>
  <el-container>
    <el-header>
      <div class="container">
        <NuxtLink :to="{ name: 'index' }" class="brand-title"
          >Chris 主頁</NuxtLink
        >
        <nav
          v-for="(category, key) in categories"
          :key="key"
          class="navigation-link"
        >
          <NuxtLink
            :to="{
              name: 'article-category',
              params: { category: category.toLowerCase() },
            }"
            >{{ category }}</NuxtLink
          >
        </nav>
      </div>
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer>Copyright © 2022 Chris Wang</el-footer>
  </el-container>
</template>

<script>
import categories from '@/config/category.json';
export default {
  name: 'LayoutDefault',
  data() {
    return {
      categories,
    };
  },
  fetch() {
    this.$store.dispatch('setCategories', categories);
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
  margin-left: 30px;
}

.navigation-link a {
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  color: #fffbf0;
  font-size: 18px;
}

.el-footer {
  background-color: #943d24;
  color: #fffbf0;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #fffbf0;
  color: #333;
}
</style>
