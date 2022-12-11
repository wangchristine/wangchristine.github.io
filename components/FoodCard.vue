<template>
  <div v-if="Object.keys(food).length !== 0" class="food">
    <div class="star-number-bg"></div>
    <div class="star-block">
      <el-rate
        class="star-rate"
        disabled
        :value="food.star"
        :colors="['#ff8100', '#ff8100', '#ff8100']"
        disabled-void-color="#bfb5b3"
        :score-template="food.star.toString()"
      >
      </el-rate>
      <span class="star-number">{{ food.star.toFixed(1) }}</span>
    </div>
    <el-image
      class="image"
      :src="require(`~/assets/foods/${food.id}.${food.extension}`)"
      :preview-src-list="[require(`~/assets/foods/${food.id}.${food.extension}`)]"
      :alt="food.name"
    >
    </el-image>
    <h3 class="name">
      {{ food.name }}
      <span v-if="food.price" class="price">${{ food.price }}</span>
    </h3>
    <h4 class="store-name">{{ food.storeName }}</h4>
    <h4 class="created-at">{{ food.createdAt }}</h4>
    <p class="description">{{ food.description }}</p>
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: 'FoodCard',
  props: {
    food: {
      type: Object,
      default: () => {
      },
    },
  },
}
</script>

<style scoped>
.food {
  position: relative;
  display: inline-block;
  flex-basis: 25%;
  margin: 10px 0;
  padding: 20px;
  box-shadow: 2px 2px 10px -1px rgb(0 0 0 / 30%);
  text-align: center;
  background-color: #f7eade;
  min-width: 180px;
  font-size: 16px;
}

.food .image {
  width: 100%;
}

.image:deep img {
  object-fit: cover;
  max-height: 135px;
}

.food .name {
  line-break: anywhere;
}

.food .price {
  color: #9f3448;
}

.food .store-name {
  margin: 0;
}

.food .created-at {
  margin: 8px 0;
  color: #b1908b;
}

.food .description {
  margin: 0;
  line-break: anywhere;
}

.star-number-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 55px;
  height: 40px;
  background-color: #fffcf5;
  z-index: 1;
  border-radius: 0 0 0 100%;
}

.star-block {
  position: absolute;
  top: 2px;
  right: 10px;
  z-index: 1;
}

.star-rate {
  display: inline-block;
  vertical-align: top;
}

.star-number {
  color: #ff8100;
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
}
</style>
