<template>
  <div class="side-block">
    <MyProfile />
  </div>
</template>

<script>
import MyProfile from '@/components/MyProfile';
export default {
  name: 'SideBar',
  components: {
    MyProfile,
  },
};
</script>

<style scoped>
.side-block {
  width: 400px;
  text-align: center;
  margin: 0 0 40px 40px;
}
</style>
