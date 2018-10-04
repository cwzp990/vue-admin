<!-- 页面标签 -->
<template>
  <div class="tags-view-container">
    <el-breadcrumb class="app-breadcrumb"
                   separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in list"
                            v-if="item.meta.title"
                            :key="item.path">
          <span v-if="item.redirect==='noredirect'||index==list.length-1"
                class="no-redirect">{{item.meta.title}}</span>
          <router-link v-else
                       :to="item.redirect||item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'TagsView',
  data () {
    return {
      list: null
    }
  },
  created () {
    this.getBreadCrumb()
  },
  methods: {
    getBreadCrumb () {
      const { params } = this.$route
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          var toPath = pathToRegexp.compile(item.path)
          item.path = toPath(params)
          return true
        }
      })
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
        matched = [{ path: '/dashboard', meta: { title: 'dashboard' } }].concat(matched)
      }
      this.list = matched
    }
  },
  watch: {
    $route () {
      this.getBreadCrumb()
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../../styles/mixin.scss';
.tags-view-container {
  @include wh(100%, 34px);
  background: #fff;
  border-bottom: 1px solid $juzi;
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 35px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}
</style>