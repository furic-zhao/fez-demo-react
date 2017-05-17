export default {
    /* ==================================
     * @ 2017 FEZ 前端模块工程自动化构建工具
     * https://github.com/furic-zhao/fez
     * ================================== */

    browserify: {
        shim: [{
            import: "React",
            from: "react"
        }, {
            import: "Q",
            from: "q"
        }, {
            import: "ReactDOM",
            from: "react-dom"
        }]
    },

    useInject: {
        bower: {
            available: true,
            js: [{
                target: "a-vendor-react.js",
                contain: ["**/react.js"]
            }, {
                target: "b-vendor-react-dom.js",
                contain: ["**/react-dom.js"]
            }],
            css: [{
                target: "vendor-bootstrap.css",
                contain: ["**/bootstrap.css"]
            }, {
                target: "vendor-font-awesome.css",
                contain: ["**/font-awesome.css"]
            }]
        },

        lib: {
            available: true,
        },

        views: true
    }
}
