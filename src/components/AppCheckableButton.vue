<template>
  <button class="app-checkable-button app-btn" :class="{checked: isChecked}" @click="btnClicked(value)">{{label}}</button>
</template>
<script>
export default {
  name: 'app-checkable-button',
  props: [
    'label',
    'value',
    'isChecked',
  ],
  methods: {
    btnClicked(value) {
      console.log(value + ' is clicked');
      this.$emit('selectionToggled', value);
    }
  }
}
</script>
<style lang="scss" scoped>
.app-checkable-button {
  transition: border ease .3s;
  background-color: $app-maize;
  color: $app-black;
  &.checked {
    transition: ease .3s;
    padding: 8px 18px;
    background-color: $app-yellow;
    border: 2px solid $app-orange;
  }
}
</style>