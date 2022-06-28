<template>
  <div class="profile">
    <img src="~/assets/avatar.png" class="avatar" alt="My Avatar" />
    <h1>Chris Wang</h1>
  </div>
</template>

<script>
export default {
  name: 'MyProfile',
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>
