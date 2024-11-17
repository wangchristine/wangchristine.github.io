<script setup>
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const categories = computed(() => appStore.categories);
const category = computed(() => {
  return categories.value.find((category) => category.routeName === route.params.category.toLowerCase());
});

router.push({
  name: "article-category-page",
  params: { category: category.routeName, page: 1 },
});
</script>

<template></template>

<style scoped></style>
