// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, '..', dir)
// }

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
  },
  chainWebpack: config => {
    // config.resolve.alias
    //     .set('public', resolve('public'))
    // 别人那里复制的，可以，我这里不行，不知是什么原因
    // config.module.rule('svg').exclude.add(resolve('src/icons'))
    // config.module
    //   .rule('svg-icon')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
