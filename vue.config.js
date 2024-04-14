const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const path = require('path');

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
            })
        ],
    },
});
