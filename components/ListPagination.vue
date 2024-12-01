<script setup>
defineProps({
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
  },
});

const emit = defineEmits(["currentChange"]);

const currentChange = (pageItem) => {
  emit("currentChange", pageItem);
};
</script>

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
    />
  </div>
</template>

<style scoped>
.paginate {
  text-align: center;
  padding: 25px;
  background-color: #f9f2e9;
}

.list-pagination {
  justify-content: center;
}

:deep(.list-pagination button) {
  padding: 10px;
  margin: 5px;
  color: #9f3448 !important;
  background-color: transparent !important;
  height: 40px;
}

:deep(.list-pagination li) {
  padding: 10px;
  margin: 5px;
  color: #9f3448 !important;
  font-size: 16px;
  background-color: transparent !important;
  font-weight: initial;
  height: initial;
  line-height: initial;
}

:deep(.list-pagination li.is-active) {
  background-color: #e7ccba !important;
}
</style>
