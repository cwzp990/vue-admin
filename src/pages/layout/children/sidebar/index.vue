<!-- 侧边栏 -->
<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <!--
      mode: 横竖模式
      show-timeout: 延时
      default-active: 当前激活菜单的index
      collapse: 是否水平折叠收起菜单
    -->
    <el-menu mode="vertical"
             background-color="#304156"
             text-color="#bfcbd9"
             active-text-color="#409EFF"
             :show-timeout="200"
             :default-active="$route.path"
             :collapse="isCollapse">
      <sidebar-item v-for="route in routers"
                    :key="route.name"
                    :item="route"
                    :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './sidebar-item'
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  /**
   * 在router模块暴露出路由表，并保存在vuex中，
   */
  computed: {
    ...mapGetters([
      'routers',
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  components: {
    SidebarItem
  }
}
</script>
<style lang='scss' scoped>
.el-scrollbar__wrap {
  overflow-y: auto;
}
</style>