<template>
  <div class='about-page-wrapper'>
    <p>This is an about page</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped lang="scss">
@import "~/src/library/colors/colors.scss";

.about-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(212, 212, 212);
}

.about-page-wrapper p {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 30px;
}

</style>
