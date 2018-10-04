<!-- todolist -->
<template>
  <div class="todo-list">
    <h3 class="header">
      <input type="text"
             v-model="itemValue"
             class="title"
             @keyup.enter="addItem">
    </h3>
    <ul>
      <li v-for="(item, index) in list"
          :key="index"
          class="list-item"
          @mouseover="showDel(index)">
        <input type="checkbox"
               class="toggle"
               @click="toggleTodo(item)">
        <input type="text"
               :class="['edit',{'active':item.show===true}]"
               :value="item.sort">
        <span class="del"
              v-show="delShow===index"
              @click="removeItem(index)">X</span>
      </li>
    </ul>
    <p v-show="!list.length"
       class="tips">
      暂无内容
    </p>
    <!-- <p class="details">
      <span class="active">{{active.length}}items</span>
      <el-button plain>All</el-button>
      <el-button plain>Active</el-button>
      <el-button plain>Computed</el-button>
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      list: [
        { sort: 'vue', show: false },
        { sort: 'react', show: false },
        { sort: 'javascript', show: false },
        { sort: 'typescript', show: false },
        { sort: 'element-ui', show: false },
        { sort: 'webpack', show: false },
        { sort: 'parcel', show: false }
      ],
      itemValue: 'TodoList',
      edit: -1,
      lineShow: false,
      delShow: -1
    }
  },
  methods: {
    toggleTodo (item) {
      item.show = !item.show
    },
    showDel (index) {
      this.delShow = index
    },
    removeItem (index) {
      this.list.splice(index, 1)
    },
    addItem () {
      for (let i = 0; i < this.list.length; i++) {
        if (this.itemValue === this.list[i].sort) {
          this.$message({
            message: '该项已存在！',
            type: 'warning'
          })
          return false;
        }
      }
      this.list.push({
        sort: this.itemValue,
        show: false
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.todo-list {
  @include wh(100%, 100%);
  .header {
    @include sc(12px, #666);
    font-weight: 700;
    line-height: 40px;
    background: #fafafa;
    box-sizing: border-box;
    padding: 0 10px;
    .title {
      outline: none;
      background: #fafafa;
    }
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    box-sizing: border-box;
    padding: 0 10px;
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
    .active {
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
  .tips {
    @include sc(12px, #666);
    margin-top: 10px;
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
