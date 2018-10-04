<!-- todolist -->
<template>
  <div class="todo-list">
    <ul>
      <li v-for="(item, index) in list"
          :key="index"
          class="list-item">
        <input type="checkbox"
               class="toggle"
               @click="toggleTodo">
        <input type="text"
               class="edit"
               :value="item">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    toggleTodo () {
      console.log('toogle')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.todo-list {
  @include wh(100%, 100%);
  .list-item {
    display: flex;
    align-items: center;
    height: 45px;
    box-sizing: border-box;
    padding: 0 10px;
    border: 1px solid #b2b2b2;
    .toggle {
      @include wh(20px, 20px);
      border-radius: 50%;
      border: 1px solid #b2b2b2;
      overflow: hidden;
    }
    .edit {
      margin-left: 10px;
    }
  }
}
</style>
