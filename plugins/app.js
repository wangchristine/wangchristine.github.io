import { useAppStore } from '@/store/app';
import allCategories from '@/config/category.json';
export default defineNuxtPlugin((nuxtApp) => {
  const appStore = useAppStore();
  appStore.setCategories(allCategories);
});
