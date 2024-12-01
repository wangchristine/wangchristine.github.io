import allCategories from "@/config/category.json";
import { useAppStore } from "@/store/app";
export default defineNuxtPlugin(() => {
  const appStore = useAppStore();
  appStore.setCategories(allCategories);
});
