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
  data () {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild (children) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    },
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    },
    isExternalLink (routePath) {
      return validateURL(routePath)
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