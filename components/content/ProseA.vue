<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<"_blank" | "_parent" | "_self" | "_top" | (string & object) | null | undefined>,
    default: undefined,
    required: false,
  },
});
</script>
<template>
  <NuxtLink :href="props.href" :target="props.target">
    <slot />
    <el-icon v-if="target == '_blank'"><ELink /></el-icon>
  </NuxtLink>
</template>

<style scoped>
/* a {
  text-decoration: none;
  border-bottom: 1px solid var(--main-theme);
} */
</style>
