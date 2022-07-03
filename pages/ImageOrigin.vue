<template>
  <div class="content-block">
    <div class="main-block">
      <div class="title">圖片來源</div>
      <div class="detail">
        有經過工具原圖壓縮圖片檔案大小再放置網頁上。
        <ol>
          <li>
            <p>Website: https://www.pngwing.com/en/free-png-zbstt</p>
            <p>
              Image:
              https://w7.pngwing.com/pngs/736/608/png-transparent-minion-playing-ukulele-illustration-stuart-the-minion-bob-the-minion-scarlett-overkill-wikia-despicable-me-minion-with-guitar-heroes-film-stuart-the-minion.png
            </p>
          </li>
          <li>
            <p>
              Website:
              https://fr.crazypng.com/minions-png-images-a-telecharger-gratuitement.html
            </p>
            <p>Image: https://pngimg.com/uploads/minions/minions_PNG51.png</p>
          </li>
          <li>
            <p>Website: https://www.youtube.com/watch?v=XWkI1OhCdVs</p>
            <p>Image: https://i.ytimg.com/vi/XWkI1OhCdVs/maxresdefault.jpg</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageOrigin',
};
</script>

<style scoped>
.content-block {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

.main-block {
  position: relative;
  width: 100%;
  background-color: #f9f2e9;
  padding: 20px 30px;
}

.main-block .title {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 8px;
  margin: 10px 0;
}

.main-block .detail {
  line-height: 2.5rem;
}

.main-block .detail a {
  text-decoration: none;
  font-weight: bold;
  color: #5289b5;
}

.main-block .detail p {
  margin: 0;
}
</style>
