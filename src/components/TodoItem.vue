<template>
  <div class="todo-item">
    <div class="check-container">
      <el-checkbox text-color="black" @change="$emit('checkbox-tapped', {id, isCompleted: $event})" v-model="internalIsCompleted" />
      <p>{{text}}</p>
    </div>
    <i @click="$emit('delete-tapped', id)" class="el-icon-close"></i>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    id: String,
    text: String,
    isCompleted: Boolean
  },
  data() {
    return {
      internalIsCompleted: this.isCompleted
    }
  },
}
</script>

<style scoped lang="scss">
@import "~/src/library/colors/colors.scss";

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: $light-blue solid 1px;
  padding: 18px 15px;
}

.todo-item .el-checkbox {
  overflow: hidden;
  color: black;
}


.todo-item > .el-icon-close {
  cursor: pointer;
  display: none;
  font-weight: bolder;
  font-size: 17px;
}

.todo-item:hover {
  background-color: $light-blue;
}

.todo-item:hover > .el-icon-close {
  display: inline-block;
}

.check-container {
  display: flex;
  justify-content: center;
  align-items: center;
}


.check-container > p {
  margin-left: 15px;
  color: $grey;
}

</style>
