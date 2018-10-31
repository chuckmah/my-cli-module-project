module.exports = {
    chainWebpack: config => {

    config.module.rules.delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ["source-map-loader"],
                    enforce: "pre"
                },
                {
                    enforce: 'pre',
                    test: /\.scss$/,
                    loader: "sass-loader",
                    exclude: [/src/],
                    options: {
                        sourceMap: true,
                        includePaths: ["./node_modules/@ulaval/modul-components/dist/styles"]
                    }
                },
                {
                    test: /.html$/,
                    loader: "vue-template-loader",
                    include: [/node_modules/],
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                    options: {
                        removeTags: true,
                        removingTags: ['desc', 'defs', 'style'],
                        removeSVGTagAttrs: true
                    }
                },
            ]
        }

    }
}
