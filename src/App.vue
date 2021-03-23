<template>
  <div id="app">
    <action-bar />
    <router-view class="page-wrapper"></router-view>
  </div>
</template>

<script>
import ActionBar from './components/ActionBar.vue'

export default {
  components: { ActionBar },
  name: 'App',
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-wrapper {
  flex-grow: 1;
}

</style>
