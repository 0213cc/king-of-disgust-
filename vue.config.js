const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': require('path').resolve(__dirname, 'src')
            }
        }
    },
    // 添加自定义元素配置
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => ({
                ...options,
                compilerOptions: {
                    // 将 DataV 组件标记为自定义元素
                    isCustomElement: tag => tag.startsWith('dv-')
                }
            }))
    }
})