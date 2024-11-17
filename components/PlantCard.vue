<script setup>
const props = defineProps({
  plant: {
    type: Object,
    default: () => {},
  },
});

const getImageUrl = (name) => {
  const assets = import.meta.glob("@/assets/plants/*", { eager: true, import: "default" });
  return assets[`/assets/plants/${name}`];
};
</script>

<template>
  <div v-if="Object.keys(plant).length !== 0" class="plant">
    <div class="carousel-block">
      <el-carousel trigger="click" height="200px" :interval="5000" class="carousel">
        <el-carousel-item v-for="image in plant.images" :key="image.id">
          <el-image
            class="image"
            :src="getImageUrl(image.id + '.' + image.extension)"
            :preview-src-list="[getImageUrl(image.id + '.' + image.extension)]"
            :alt="plant.name"
            :preview-teleported="true"
            :hide-on-click-modal="true"
          />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="content">
      <h2 class="name">
        {{ plant.name }}
      </h2>
      <table class="property">
        <tr
          v-for="(property, key) in plant.properties"
          :key="property.key"
          :class="[{ 'last-odd': plant.properties.length % 2 === 1 && key + 1 === plant.properties.length }]"
        >
          <th>{{ property.key }}</th>
          <td>{{ property.value }}</td>
        </tr>
      </table>
      <div class="origin-block">
        <span v-for="(image, key) in plant.images" :key="image.id" class="origin-link">
          <a :href="image.origin" target="_blank">來源{{ key + 1 }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

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

:deep(.carousel .image img) {
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

.property .last-odd {
  flex-basis: 100%;
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
