<template>
  <div class="content-block">
    <div class="anchor-block">
      目錄
      <ul>
        <li v-for="(toc, key) in page.toc" :key="key" :class="'depth-' + toc.depth">
          <a @click="anchorByToc(toc.id)">{{ toc.text }}</a>
        </li>
      </ul>
    </div>
    <div class="article-block">
      <div class="article-header">
        <h1>{{ page.title }}</h1>
        <div class="timeAt">
          建立於 {{ new Date(page.createdAt).toLocaleDateString() }} • 更新於
          {{ new Date(page.updatedAt).toLocaleDateString() }}
        </div>
      </div>
      <nuxt-content :document="page" />
    </div>
    <div class="side-block">
      <my-profile />
    </div>
  </div>
</template>

<script>
import MyProfile from '@/components/MyProfile';

export default {
  components: {
    MyProfile,
  },
  async asyncData({ params, $content, error }) {
    // const slug =  || 'index';
    const page = await $content(params.category.toLowerCase(), params.slug)
      .where({ category: params.category })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' });
      });

    return {
      page,
    };
  },
  head() {
    return {
      title: this.page.title + " - Chris",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title + " - Chris",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description
        },
      ]
    }
  },
  methods: {
    anchorByToc (anchorLick) {
      this.$router.push({ hash: '#' + anchorLick });
    },
  },
};
</script>

<style scoped>
.content-block {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

.anchor-block {
  width: 250px;
  text-align: center;
  margin: 0 20px 40px 0;
  position: sticky;
  top: 20px;
  height: 100%;

  background-color: #f9f2e9;
  padding: 20px;
}

.anchor-block ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 10px 0;
  max-height: 50vh;
  overflow-y: scroll;
}

.anchor-block ul li.depth-2 {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}

.anchor-block ul li.depth-3 {
  font-size: 15px;
  padding-left: 20px;
}

.anchor-block ul li a {
  text-decoration: none;
  color: #464646;
  cursor: pointer;
}

.article-block {
  background-color: #f9f2e9;
  padding: 20px 40px 40px 40px;
  width: 1000px;
  overflow-x: hidden;
  box-shadow: 0 1rem 3rem rgb(83 88 93 / 25%);
}

.article-header {
  border-bottom: 1px solid #d7d7d7;
  margin-bottom: 20px;
  padding-bottom: 15px;
}

.timeAt {
  color: #6e7780;
  font-size: 14px;
}

.side-block {
  width: 250px;
  text-align: center;
  margin: 0 0 40px 20px;
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
    width: auto;
  }

  .side-block {
    width: 100%;
    margin: 40px 0 0 0;
  }
}
</style>
