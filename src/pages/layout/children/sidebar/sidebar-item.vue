<!-- 侧边栏item -->
<template>
  <div>
    <!-- 单个 -->
    <template>
      <a href="">
        <el-menu-item>
          <item></item>
        </el-menu-item>
      </a>
    </template>
    <!-- 多个 -->
    <el-submenu>
      <template slot="title">
        <item></item>
      </template>
      <!-- 递归 -->
      <template>
        <sidebar-item>
          <a href="">
            <el-menu-item>
              <item></item>
            </el-menu-item>
          </a>
        </sidebar-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import Item from './item'
export default {
  name: 'SidebarItem',
  components: {
    Item
  }
}

</script>
<style lang='scss' scoped>
</style>