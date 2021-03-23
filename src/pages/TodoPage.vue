<template>
  <div class="todo-page">
    <content-section v-on:start-loading="setLoading(true)" v-on:end-loading="setLoading(false)"/>
    <loading-overlay v-bind:isLoading="isLoading" />
  </div>
</template>

<script>
import ContentSection from '../components/ContentSection.vue'
import LoadingOverlay from '../components/LoadingOverlay.vue'
import aTypes from '../library/store/action-types'

export default {
  name: 'TodoPage',
  components: {
    ContentSection,
    LoadingOverlay,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  created() {
    // Load all todos and handle error
    this.setLoading(true)
    this.$store.dispatch(aTypes.LOAD_TODOS)
      .then(() => {
        this.setLoading(false)
      })
      .catch(error => {
        this.setLoading(false)
        alert(error)
      });
  },
  methods: {
    setLoading(flag) {
      this.isLoading = flag
    },
  }
}
</script>

<style scoped lang="scss">
@import "~/src/library/colors/colors.scss";

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
}

.todo-page {
  display: flex;
  flex-direction: column;
  background-color: $lighter-blue;
  border: none;
}
</style>
