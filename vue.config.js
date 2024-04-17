const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const path = require('path');
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')

module.exports = defineConfig({
    configureWebpack: {
        resolve: {
            alias: {
                // Указывает '@' для ссылки на директорию 'src'
                '@': path.resolve(__dirname, 'src')
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                // Указание константы для избежания сообщения о несоответствии при гидратации в продакшене
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
            }),

            require('unplugin-vue-components/webpack').default({
                dts: true,
              }),

            new VueAutoRoutingPlugin({
                // Path to the directory that contains your page components.
                pages: 'src/pages',
          
                // A string that will be added to importing component path (default @/pages/).
                importPrefix: '@/pages/'
             })
        ],
    },
});
