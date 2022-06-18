<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>

<style>
body {
  margin: 0;
}

.el-container {
  min-height: 100vh;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
