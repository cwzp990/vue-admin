<!-- todolist -->
<template>
  <div class="todo-list">
    <ul>
      <li v-for="(item, index) in list"
          :key="index"
          class="list-item"
          @mouseover="showDel(index)">
        <input type="checkbox"
               class="toggle"
               @click="toggleTodo(index)">
        <input type="text"
               class="edit"
               :value="item">
        <span class="del"
              v-show="delShow===index">X</span>
      </li>
    </ul>
    <p class="details">
      <span class="active">{{active.length}}items</span>
      <el-button plain>All</el-button>
      <el-button plain>Active</el-button>
      <el-button plain>Computed</el-button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6],
      active: [],
      computed: [],
      edit: -1,
      delShow: false
    }
  },
  methods: {
    toggleTodo (index) {
      console.log(index)
    },
    showDel (index) {
      this.delShow = index
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
    justify-content: space-between;
    align-items: center;
    height: 45px;
    border: 1px solid #b2b2b2;
    .toggle {
      @include wh(20px, 20px);
      flex: 0 0 20px;
      border-radius: 50%;
      border: 1px solid #b2b2b2;
      overflow: hidden;
    }
    .edit {
      margin-left: 10px;
      flex: 1;
      outline: none;
    }
    &.del {
      text-decoration: line-through;
      color: #b2b2b2;
    }
    .del {
      margin-left: 10px;
      @include wh(20px, 20px);
      @include sc(12px, #af5b5e);
      flex: 0 0 20px;
      cursor: pointer;
    }
  }
}

.todo-list {
  .details {
    line-height: 30px;
    .active {
      @include sc(12px, #666);
      margin-right: 50px;
    }
    .el-button {
      @include sc(10px, #666);
      padding: 5px;
    }
  }
}
</style>
