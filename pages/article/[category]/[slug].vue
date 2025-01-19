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
        <TableOfContent :links="doc.body.toc.links" />
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

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .article-block {
    padding: 10px;
    margin: 0;
    width: auto;
  }

  .side-block {
    width: 100%;
    margin: 40px 0 0 0;
  }
}
</style>
