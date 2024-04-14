<script setup></script>

<template>
  <div class="content-block">
    <div class="side-block">
      <MyProfile />
    </div>
    <div class="main-block shadow-block">
      <div class="title">
        作者介紹
      </div>
      <div class="introduction">
        多年後端工程師實務經驗和前端程式開發，熟悉各項前後端周邊生態圈工具，目前也正在廣度的學習各項領域的知識。
        認為「學如逆水行舟，不進則退。」「知道的越多，才知懂得就越少。」
        <br>
        擅長項目為前後端系統開發、分析、與 user 溝通，系統雲/地端架設、DevOps。
        <br>
        喜歡看劇、種植、小九兒。
      </div>

      <div class="title">
        相關連結
      </div>
      <div class="introduction">
        <span>個人 GitHub 🍌</span>
        <br>
        <a href="https://github.com/wangchristine"><img
          src="~/assets/github.png"
          alt="GitHub"
        ></a>
        <br>
        <span>好用工具 🍌</span>
        <br>
        <a href="https://wangchristine.github.io/dev-tools">Dev Tools</a>
      </div>

      <img
        src="~/assets/minion-sketch.png"
        class="sketch"
        alt="Sketch"
      >
    </div>
  </div>
</template>

<style scoped>
.content-block {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

.side-block {
  width: 400px;
  text-align: center;
  margin: 0 40px 40px 0;
}

.main-block {
  position: relative;
  width: 1000px;
  padding: 20px 30px;
}

.main-block .title {
  font-size: 22px;
  font-weight: bold;
  color: #464646;
  letter-spacing: 8px;
  margin: 10px 0;
}

.main-block .title:not(:first-of-type) {
  margin-top: 40px;
}

.main-block .introduction {
  line-height: 2.5rem;
}

.main-block .introduction span {
  font-size: 18px;
  border-bottom: 1px solid #ff7600;
}

.main-block .introduction a {
  text-decoration: none;
  font-weight: bold;
  color: #5289b5;
}

.main-block .sketch {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 480px;
}

@media all and (max-width: 768px) {
  .content-block {
    flex-direction: column;
  }

  .side-block {
    width: 100%;
    margin: 0 0 40px 0;
  }

  .main-block {
    width: auto;
    padding: 20px 20px;
  }

  .main-block .sketch {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    max-width: 480px;
    display: block;
    margin: auto;
  }
}
</style>
