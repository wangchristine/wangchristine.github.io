<template>
  <div class="paginate">
    <el-pagination
      class="list-pagination"
      background
      :page-size="pageSize"
      layout="prev, pager, next"
      :current-page="currentPage"
      :total="totalCount"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "ListPagination",
  props: {
    pageSize: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    totalCount: {
      type: Number,
      required: true,
    }
  },
  methods: {
    currentChange(pageItem) {
      this.$emit("currentChange", pageItem);
    },
  },
}
</script>

<style scoped>
.paginate {
  text-align: center;
  padding: 15px 25px 25px 25px;
  background-color: #f9f2e9;
}

.list-pagination:deep {
  overflow-x: auto;
}

.list-pagination:deep button {
  padding: 10px;
  margin: 5px;
  color: #9f3448 !important;
  background-color: transparent !important;
  height: 40px;
}

.list-pagination:deep li {
  padding: 10px;
  margin: 5px;
  color: #9f3448 !important;
  font-size: 16px;
  background-color: transparent !important;
  font-weight: initial;
  height: initial;
  line-height: initial;
}

.list-pagination:deep li.active {
  background-color: #e7ccba !important;
}
</style>
