<script setup>
const notFoundRedirect = () => {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
};
</script>

<template>
  <div class="content-block">
    <ContentDoc :head="false">
      <template #default="{ doc }">
        <Head>
          <Title>{{ doc.title }} - Chris</Title>
          <Meta name="description" :content="doc.body.children[0].children[0].value" />
          <Meta property="og:title" :content="doc.title + ' - Chris'" />
          <Meta property="og:description" :content="doc.body.children[0].children[0].value" />
        </Head>

        <div :class="['anchor-block', 'shadow-block', { 'anchor-block-hidden': doc.body.toc.links.length === 0 }]">
          <div class="title">目錄</div>
          <ul>
            <li v-for="toc in doc.body.toc.links" :key="toc.id" :class="'depth-' + toc.depth">
              <a :href="'#' + toc.id">{{ toc.text }}</a>
              <ul>
                <li v-for="childToc in toc.children" :key="childToc.id" :class="'depth-' + childToc.depth">
                  <a :href="'#' + childToc.id">{{ childToc.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="article-block">
          <div class="article-header">
            <h1>{{ doc.title }}</h1>
            <div class="timeAt">
              建立於 {{ new Date(doc.createdAt).toLocaleDateString() }} • 更新於
              {{ new Date(doc.updatedAt).toLocaleDateString() }}
            </div>
          </div>
          <ContentRenderer :value="doc" class="nuxt-content" />
        </div>
      </template>
      <template #not-found>
        {{ notFoundRedirect() }}
      </template>
    </ContentDoc>

    <div class="side-block">
      <my-profile />
    </div>
  </div>
</template>

<style scoped>
.content-block {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

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

.anchor-block ul li a {
  text-decoration: none;
  color: var(--block-font-color);
  cursor: pointer;
  word-break: break-word;
}

.anchor-block-hidden {
  visibility: hidden;
}

.article-block {
  padding: 20px 40px 40px 40px;
  width: 840px;
}

.article-header {
  border-bottom: 1px solid var(--main-secondary-color);
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.timeAt {
  color: var(--main-secondary-color);
  font-size: 14px;
}

.side-block {
  width: 280px;
  text-align: center;
}

@media all and (max-width: 1024px) {
  .anchor-block {
    display: none;
  }
}

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .article-block {
    padding: 20px;
    margin: 0;
    width: auto;
  }

  .side-block {
    width: 100%;
    margin: 40px 0 0 0;
  }
}
</style>
