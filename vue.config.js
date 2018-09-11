module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        pages: '@/pages',
        utils: '@/utils',
        styles: '@/styles',
        icons: '@/icons'
      }
    }
  }
}
