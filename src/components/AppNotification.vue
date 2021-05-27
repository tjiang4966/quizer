<template>
<div class="app-notification" v-if="notifications">
  <ul>
    <li v-for="notification in notifications" :key="notification.message"
      :class="{error: notification.type == 'error', warning: notification.type == 'warning', success: notification.type == 'success'}">
      {{ notification.message }}
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'app-notification',
  props: ['notifications']
}
</script>
<style lang="scss" scoped>
.app-notification {
  ul {
    text-align: left;
    padding-left: 0;
    list-style: none;

    li {
      &.error {
        color: $app-red;
      }
      &.warning {
        color: $app-red;
      }
      &.success {
        color: $app-red;
      }
    }
  }
}
</style>