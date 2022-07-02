<template>
  <div>
    <div class="profile">
      <img src="~/assets/avatar.png" class="avatar" alt="My Avatar" />
      <h1>Chris Wang</h1>
      <p>Keep Learning, and Keep Coding.</p>
    </div>
    <div class="introduction">
      <p>
        長期耕耘且涉略前端的後端工程師 • 期許自己每天多懂一點新知識 • 莫欺少年窮
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProfile',
};
</script>

<style scoped>
.profile {
  background-color: #f9f2e9;
  padding: 20px;
}

.introduction {
  background-color: #f9f2e9;
  padding: 20px;
  margin-top: 20px;
}

.avatar {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>
