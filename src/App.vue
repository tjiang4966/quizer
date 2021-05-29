<template>
<router-view :key="$route.path">
</router-view>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="scss">
#app {
  background-color: $app-maize;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $app-black;
}
</style>
