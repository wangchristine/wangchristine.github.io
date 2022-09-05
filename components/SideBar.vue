<template>
  <div class="side-block">
    <MyProfile />
    <div class="popular">
      <div class="title">熱門文章 📌</div>
      <div class="list">
        <NuxtLink
          v-for="article in articlesByPopular"
          :key="article.title"
          class="article"
          :to="{
            name: 'article-category-slug',
            params: { category: article.category, slug: article.slug },
          }"
        >
          {{ article.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="aquarium">
      <img class="fish1" src="~/assets/fish.gif" alt="fish" />
      <img class="fish2" src="~/assets/fish.gif" alt="fish" />
    </div>
  </div>
</template>

<script>
import MyProfile from '@/components/MyProfile';
export default {
  name: 'SideBar',
  components: {
    MyProfile,
  },
  computed: {
    articlesByPopular() {
      return this.$store.getters.getAllArticles.filter(
        (article) => article.isPopular === true
      );
    },
  },
};
</script>

<style scoped>
.side-block {
  width: 400px;
  text-align: center;
  margin: 0 0 40px 40px;
}

.popular {
  background-color: #f9f2e9;
  padding: 20px;
  margin-top: 20px;
}
.popular .title {
  font-size: 18px;
  border-bottom: 1px solid #9b9b9b;
  padding: 5px;
}

.popular .list {
  margin-top: 10px;
}

.popular .article {
  display: block;
  text-decoration: none;
  padding: 5px;
  color: #9f3448;
  border-bottom: dashed 1px;
  margin-top: 10px;
}

.aquarium {
  position: relative;
  background-color: #a0bed5;
  margin-top: 20px;
  height: 200px;
  background-image: url('~/assets/aquarium.jpg');
  background-size: cover;
}

.fish1 {
  position: absolute;
  top: 10px;
  left: 20px;
  width: 80px;
  height: 80px;
  animation: animationFish1 10s linear infinite;
}

@keyframes animationFish1 {
  0% {
    transform: translate(0, 0) rotateY(180deg);
  }
  20% {
    transform: translate(30px, 100px) rotateY(180deg);
  }
  50% {
    transform: translate(250px, 20px) rotateY(180deg);
  }
  51% {
    transform: translate(250px, 20px) rotateY(0deg);
  }
  75% {
    transform: translate(180px, 50px) rotateY(0deg);
  }
  100% {
    transform: translate(0, 0) rotateY(0deg);
  }
}

.fish2 {
  position: absolute;
  top: 100px;
  left: 320px;
  width: 50px;
  height: 50px;
  animation: animationFish2 8s linear infinite;
}

@keyframes animationFish2 {
  0% {
    transform: translate(0, 0) rotateY(0deg);
  }
  45% {
    transform: translate(-200px, 20px) rotateY(0deg);
  }
  50% {
    transform: translate(-200px, 20px) rotateY(0deg);
  }
  51% {
    transform: translate(-200px, 20px) rotateY(180deg);
  }
  90% {
    transform: translate(0, 0) rotateY(180deg);
  }
  100% {
    transform: translate(0, 0) rotateY(180deg);
  }
}

@media all and (max-width: 768px) {
  .side-block {
    width: 100%;
    margin: 40px 0;
  }
}


</style>
