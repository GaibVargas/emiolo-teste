<template>
  <div>
    <img :src="user.image_url" :alt="user.name">
    <span>{{ user.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  background: #42484d;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 4px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
</style>