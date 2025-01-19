<script setup>
defineProps({
  links: {
    type: Array,
    default: () => [],
  },
});

const activeSection = ref(null);
let observer = null;

const observeSections = () => {
  const sections = document.querySelectorAll("h2");
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    },
  );
  sections.forEach((section) => observer.observe(section));
};

onMounted(() => {
  observeSections();
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div :class="['anchor-block', 'shadow-block', { 'anchor-block-hidden': links.length === 0 }]">
    <div class="title">目錄</div>
    <ul>
      <li v-for="toc in links" :key="toc.id" :class="'depth-' + toc.depth">
        <a :href="'#' + toc.id" :class="{ active: toc.id == activeSection }">{{ toc.text }}</a>
        <ul>
          <li v-for="childToc in toc.children" :key="childToc.id" :class="'depth-' + childToc.depth">
            <a :href="'#' + childToc.id">{{ childToc.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.anchor-block {
  width: 220px;
  text-align: center;
  position: sticky;
  top: 20px;
  height: 100%;
  padding: 10px;
  max-height: 100vh;
}

.anchor-block .title {
  color: var(--block-title);
  font-weight: bold;
}

.anchor-block ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.anchor-block ul li.depth-2 {
  padding: 5px 10px;
}

.anchor-block ul li.depth-3 {
  padding-left: 20px;
}

.anchor-block ul li .active {
  border-bottom: 1px solid var(--main-theme);
}

.anchor-block ul li a {
  text-decoration: none;
  color: var(--block-font-color);
  cursor: pointer;
  word-break: break-word;
}

.anchor-block-hidden {
  visibility: hidden;
}

@media all and (max-width: 1024px) {
  .anchor-block {
    display: none;
  }
}
</style>
