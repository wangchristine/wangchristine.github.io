<script setup>
const articlesByLatestFive = await queryContent().sort({ updatedAt: -1 }).limit(5).find();

</script>

<template>
  <div class="side-block">
    <MyProfile />
    <div class="latest-block shadow-block">
      <div class="title">
        近期文章
      </div>
      <div class="list">
        <NuxtLink
          v-for="article in articlesByLatestFive"
          :key="article.title"
          class="article"
          :to="article._path"
        >
          <span>[{{ new Date(article.updatedAt).toLocaleDateString() }}]</span>
          {{ article.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="aquarium">
      <img
        class="fish1"
        src="~/assets/fish.gif"
        alt="fish"
      >
      <img
        class="fish2"
        src="~/assets/fish.gif"
        alt="fish"
      >
    </div>
  </div>
</template>

<style scoped>
.side-block {
  width: 400px;
  text-align: center;
  margin: 0 0 40px 40px;
}

.latest-block {
  margin-top: 20px;
}
.latest-block .title {
  font-size: 18px;
  padding: 10px;
  background-color: #983a2a;
  color: #fff;
}

.latest-block .list {
  padding: 12px 20px 20px 20px;
}

.latest-block .article {
  display: block;
  text-decoration: none;
  padding: 8px;
  color: #333;
  border-bottom: solid 1px #943d24;
  text-align: left;
}

.latest-block .article span {
  color: #a57269;
}

.aquarium {
  position: relative;
  background-color: #a0bed5;
  margin-top: 20px;
  height: 200px;
  background-image: url('~/assets/aquarium.jpg');
  background-size: cover;
  overflow: hidden;
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
