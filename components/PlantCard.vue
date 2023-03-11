<template>
  <div v-if="Object.keys(plant).length !== 0" class="plant">
    <div class="carousel-block">
      <el-carousel trigger="click" height="200px" class="carousel">
        <el-carousel-item v-for="image in plant.images" :key="image.id">
          <el-image
            class="image"
            :src="require(`~/assets/plants/${image.id}.${image.extension}`)"
            :preview-src-list="[
              require(`~/assets/plants/${image.id}.${image.extension}`),
            ]"
            :alt="plant.name"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="content">
      <h2 class="name">
        {{ plant.name }}
      </h2>
      <table class="property">
        <tr v-for="property in plant.properties" :key="property.key">
          <th>{{ property.key }}</th>
          <td>{{ property.value }}</td>
        </tr>
      </table>
      <div class="origin-block">
        <span
          v-for="(image, key) in plant.images"
          :key="image.id"
          class="origin-link"
        >
          <a :href="image.origin" target="_blank">原圖網址{{ key + 1 }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlantCard',
  props: {
    plant: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.plant {
  font-size: 16px;
}

.carousel-block {
  flex-basis: 40%;
  display: flex;
  align-items: center;
}

.carousel {
  width: 100%;
}

.carousel .image {
  width: 100%;
  height: 100%;
}

.carousel .image:deep img {
  object-fit: cover;
  max-height: 200px;
}

.content {
  flex-basis: 60%;
  margin-left: 10px;
  line-break: anywhere;
}

.content .name {
  line-break: anywhere;
}

.content .property {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  text-align: left;
  background-color: #fffbf0;
}

.property tr {
  flex-basis: 50%;
}

.property th {
  font-size: 18px;
  background-color: #f8eadf;
  width: 60px;
  padding: 5px;
}

.property td {
  padding: 5px;
}

.content .origin-block {
  margin-top: 10px;
}

.content .origin-link {
  margin: 5px;
}
.content .origin-link a {
  color: #9f3448;
}

@media all and (max-width: 1024px) {
  .content .property {
    display: table;
  }
}
</style>
