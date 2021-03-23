<template>
  <div v-if="isLoading" class="overlay">
    <i class="el-icon-loading"></i>
  </div>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  props: {
    isLoading: Boolean
  },
}
</script>

<style scoped lang="scss">
@import "~/src/library/colors/colors.scss";

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: fixed;
  height: 100vh;
  width: 100vw;
}

.overlay > .el-icon-loading {
  color: black;
  font-size: 40px;
}

</style>
