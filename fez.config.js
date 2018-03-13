export default {
  /* ==================================
   * @ 2017 FEZ 前端模块工程自动化构建工具
   * https://github.com/furic-zhao/fez
   * ================================== */

  webpack: {
    config: {
      externals: {
        react: 'React',
        q: 'Q',
        'react-dom': 'ReactDOM'
      }
    }
  },

  useInject: {
    vendor: {
      js: [{
        target: "a-vendor-react.js",
        contain: ["**/react.js", "**/react-dom.js"]
      }],
      css: [{
        target: "vendor-bootstrap.css",
        contain: ["**/bootstrap.css"]
      }, {
        target: "vendor-font-awesome.css",
        contain: ["**/font-awesome.css"]
      }]
    }
  },

  svgSymbol: {
    available: true
  }
}
