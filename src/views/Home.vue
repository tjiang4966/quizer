<template>
<div class="homeview">
  <img alt="Vue Logo" src="../assets/logo.png"/>
  <h1>开动脑筋吧</h1>
  <button class="app-btn primary"><router-link to="/quiz">点我开始</router-link></button>
</div>
</template>
<script>
export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
.homeview {
  position: relative;
  top: 100px;
}
</style>