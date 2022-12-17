<template>
  <div class="content-block">
    <div class="error-code">
      {{ error.statusCode || 500 }}
    </div>
    <div class="error-message">
      {{ error.statusCode === 404 ? error.message : 'Oh, Something went wrong.' }}
    </div>
    <div class="redirect">
      <NuxtLink :to="{ name: 'index' }"> Go to Home page</NuxtLink>
    </div>
    <div class="image">
      <img src="~/assets/minion-find-the-way.jpg" alt="FindTheWay" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutError',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.content-block {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
}

.error-code {
  flex-basis: 100%;
  margin: auto;
  font-size: 40px;
  letter-spacing: 10px;
  padding: 20px 0;
}

.error-message {
  flex-basis: 100%;
  margin: auto;
  font-size: 20px;
  letter-spacing: 5px;
}

.redirect {
  flex-basis: 100%;
  margin: auto;
  padding: 30px;
}

.redirect a {
  color: #983a2a;
  font-weight: bold;
  text-decoration: underline;
}

.image {
  flex-basis: 100%;
  margin: auto;
}

.image img {
  width: 400px;
}
</style>
