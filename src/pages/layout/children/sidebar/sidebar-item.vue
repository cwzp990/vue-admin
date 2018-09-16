<!-- 侧边栏item -->
<template>
  <!-- 没有设置hidden属性且拥有子路由 -->
  <div v-if="!item.hidden && item.children"
       class="menu-wrapper">
    <!-- 单个 -->
    <template v-if="hasOneShowingChild(item.children) && !onlyOneChild.children&&!item.alwaysShow">
      <!-- 将url指向该路径，并添加进路由表 -->
      <a href="onlyOneChild.path"
         target="_blank"
         @click="clickLink(onlyOneChild.path,$event)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)"
                      :class="{'submenu-title-noDropdown':!isNest}">
          <item v-if="onlyOneChild.meta"
                :icon="onlyOneChild.meta.icon||item.meta.icon"
                :title="onlyOneChild.meta.title"></item>
        </el-menu-item>
      </a>
    </template>
    <!-- 多个 -->
    <el-submenu v-else
                :index="item.name||item.path">
      <template slot="title">
        <item v-if="item.meta"
              :icon="item.meta.icon"
              :title="item.meta.title"></item>
      </template>
      <!-- 递归 -->
      <template v-for="child in item.children"
                v-if="!child.hidden">
        <sidebar-item v-if="child.children&&child.children.length>0"
                      :is-nest="true"
                      :item="child"
                      :key="child.path"
                      :base-path="resolvePath(child.path)"
                      class="nest-menu">
        </sidebar-item>
        <a v-else
           :href="child.path"
           target="_blank"
           :key="child.name"
           @click="clickLink(child.path,$event)">
          <el-menu-item :index="resolvePath(child.path)">
            <item v-if="child.meta"
                  :icon="child.meta.icon"
                  :title="child.meta.title" />
          </el-menu-item>
        </a>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import Item from './item'
import { validateUrl } from '@/utils/validate'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  created () {
    console.log(!this.item.hidden)
    console.log(this.item.children)
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild (children) {
      // 将需要隐藏的路由过滤
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      // 长度为1，说明不需要递归
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    // 将传来的路径转换成绝对路径
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    },
    isExternalLink (routePath) {
      return validateUrl(routePath)
    },
    clickLink (routePath, e) {
      if (!this.isExternalLink(routePath)) {
        e.preventDefault()
        const path = this.resolvePath(routePath)
        this.$router.push(path)
      }
    }
  },
  components: {
    Item
  }
}

</script>
<style lang='scss' scoped>
</style>