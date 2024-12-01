import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    const keyName = key == "Link" ? "ELink" : key;
    nuxtApp.vueApp.component(keyName, component);
  }
});
