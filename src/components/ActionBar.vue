<template>
  <el-row>
    <el-col :span="24">
      <div class="action-bar grid-content bg-blue">
        <router-link v-if="isHomeLinkVisible" to="/">Home</router-link>
        <router-link v-if="isAboutLinkVisible" to="/about">About</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ActionBar',
  computed: {
    isHomeLinkVisible() {
      return this.$store.state.route.path !== "/"
    },
    isAboutLinkVisible() {
      return this.$store.state.route.path !== "/about"
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/src/library/colors/colors.scss";

.action-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 13px 20px;
  background-color: white;
  border-bottom: 1px solid $light-blue;
}

.action-bar a {
  text-decoration: none;
  color: rgb(3, 3, 3);
}

</style>
