const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

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
    config.module.rule('svg').exclude.add(resolve('src/icons'))
    config.module
      .rule('svg-icon')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
