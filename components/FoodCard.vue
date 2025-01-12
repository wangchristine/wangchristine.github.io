<script setup>
const props = defineProps({
  food: {
    type: Object,
    default: () => {},
  },
});

const star = computed(() => props.food.star);

const getImageUrl = (name) => {
  const assets = import.meta.glob("@/assets/foods/*", { eager: true, import: "default" });
  return assets[`/assets/foods/${name}`];
};
</script>

<template>
  <div v-if="Object.keys(food).length !== 0" class="food shadow-block">
    <div class="star-number-bg" />
    <div class="star-block">
      <el-rate
        v-model="star"
        class="star-rate"
        disabled
        :colors="['#e98e32', '#e98e32', '#e98e32']"
        disabled-void-color="#bfb5b3"
        :score-template="star.toString()"
      />
      <span class="star-number">{{ star.toFixed(1) }}</span>
    </div>
    <el-image
      class="image"
      :src="getImageUrl(food.id + '.' + food.extension)"
      :preview-src-list="[getImageUrl(food.id + '.' + food.extension)]"
      :alt="food.name"
      :preview-teleported="true"
      :hide-on-click-modal="true"
    />
    <h3 class="name">
      {{ food.name }}
      <span v-if="food.price" class="price">${{ food.price }}</span>
    </h3>
    <h4 class="store-name">
      {{ food.storeName }}
    </h4>
    <h4 class="created-at">
      {{ food.createdAt }}
    </h4>
    <p class="description">
      {{ food.description }}
    </p>
    <slot name="action" />
  </div>
</template>

<style scoped>
.food {
  font-size: 16px;
}

.food .image {
  width: 100%;
  margin-top: 2px;
}

:deep(.image img) {
  object-fit: cover;
  max-height: 135px;
}

.food .name {
  line-break: anywhere;
  color: var(--block-title);
}

.food .price {
  color: #9f3448;
}

.food .store-name {
  margin: 0;
  color: var(--block-title);
}

.food .created-at {
  margin: 8px 0;
  color: var(--block-font-color);
}

.food .description {
  margin: 0;
  line-break: anywhere;
  color: var(--block-font-color);
}

.star-number-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 55px;
  height: 40px;
  background-color: #e7e7e7;
  z-index: 1;
  border-radius: 0 0 0 100%;
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 50%);
}

.star-block {
  position: absolute;
  top: 2px;
  right: 8px;
  z-index: 1;
}

.star-rate {
  display: inline-block;
  vertical-align: top;
}

.star-number {
  color: #e98e32;
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
}
</style>
