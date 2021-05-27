<template>
<div class="library-select-page">
  <h2>选择题库范围</h2>
  <div v-if="libraries" class="checkable-button-group">
    <div v-for="library in libraries" :key="library.value"  class="checkable-button-wrap">
      <app-checkable-button :label="library.label" :value="library.value" :isChecked="library.selected" @selection-toggled="toggleSelection($event)"></app-checkable-button>
    </div>
  </div>
  <div v-else>未找到题库</div>
  <div><app-notification :notifications="notifications"></app-notification></div>
  <div class="action-group">
    <button class="app-btn success" @click="startQuiz">开始答题</button>
  </div>
</div>
</template>
<script>
import AppCheckableButton from '../components/AppCheckableButton';
import AppNotification from '../components/AppNotification';
export default {
  name: 'LibrarySelect',
  components: {
    AppCheckableButton,
    AppNotification,
  },
  data() {
    return {
      libraries: [
        {label: '历史', value: 'history', selected: false},
        {label: '科学', value: 'science', selected: false},
        {label: '文学', value: 'literature', selected: false},
        {label: '时尚', value: 'fashion', selected: false},
        {label: '育儿', value: 'parenting', selected: false},
      ],
      notifications: [],
    }
  },
  computed: {
    selectedLibraries() {
      const selectedLibs = [];
      this.libraries.forEach((library) => {
        if (library.selected) {
          selectedLibs.push(library.value);
        }
      });
      return selectedLibs;
    }
  },
  methods: {
    toggleSelection(value) {
      const index = this.libraries.findIndex((library) => library.value === value);
      this.libraries[index].selected = !this.libraries[index].selected;
      console.log(`${value} (${this.libraries[index].label}) is ${this.libraries[index].selected ? 'selected' : 'unselected'}`);
    },
    clearNotifications() {
      this.notifications = [];
    },
    validateSelection() {
      this.clearNotifications();
      if (this.selectedLibraries.length === 0) {
        this.notifications.push({message: '您还没有选择题库', type: 'error'});
        return false;
      }
      return true;
    },
    startQuiz() {
      if (this.validateSelection()) {
        console.log(`start quiz with following libraries: ${this.selectedLibraries}`);
      }
      else return;
    }
  }
}
</script>
<style lang="scss" scoped>
.library-select-page {
  .checkable-button-group {
    .checkable-button-wrap {
      display: inline-block;
      margin: 10px 15px;
    }
  }
  .action-group {
    position: absolute;
    bottom: 50px;
    width: 100%;
  }
}
</style>