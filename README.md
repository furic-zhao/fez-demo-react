# fez-demo-react
基于FEZ构建的React单文件组件形式的模块化开发示例

> 本示例演示了基于FEZ构建 React 单文件组件形式的开发结构，借助 FEZ 可以使用es6标准特性开发项目。

## 使用方法

- 本示例依赖 【[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)】请先`git clone https://github.com/furic-zhao/fez.git` 下载 FEZ工程框架 到本地任意目录

- 进入 FEZ 工程目录，执行 `git clone https://github.com/furic-zhao/fez-demo-react.git` 将本示例下载到 FEZ 根目录

- 进入 fez-demo-react 目录 执行 `gulp` 或 `gulp dev`，FEZ 会自动打开系统默认浏览器并进入研发环境。

> 若项目不在 FEZ 工程根目录，请自行修改项目目录中的`gulpfile.babel.js`文件中的路径。


## 目录结构

#### 源码 src 目录

````bash
.
├── lib
│   └── q.js
├── static
│   ├── fonts
│   ├── images
│   │   └── fez-logo.png
│   ├── slice
│   │   ├── weibo.png
│   │   ├── weibo@2x.png
│   │   ├── weibo@3x.png
│   │   ├── weixin.png
│   │   ├── weixin@2x.png
│   │   └── weixin@3x.png
│   └── styles
│       ├── article.less
│       ├── common.less
│       ├── components
│       │   ├── modals.less
│       │   └── tooltip.less
│       ├── index
│       │   └── big-logo.less
│       ├── index.less
│       ├── lib
│       │   ├── mixins.less
│       │   ├── normalize.css
│       │   ├── rem.less
│       │   └── reset.less
│       ├── list.less
│       └── public
│           └── footer.less
└── views
    ├── article
    │   ├── index.html
    │   ├── index.js
    │   └── module
    │       └── detail
    │           ├── index.js
    │           ├── jumbotron.js
    │           └── service.js
    ├── index
    │   ├── index.html
    │   ├── index.js
    │   └── module
    │       ├── fezdesc
    │       │   ├── index.js
    │       │   └── service.js
    │       └── jumbotron
    │           ├── index.js
    │           └── service.js
    ├── list
    │   ├── index.html
    │   ├── index.js
    │   └── module
    │       ├── jumbotron
    │       │   ├── index.js
    │       │   └── service.js
    │       └── listing
    │           ├── index.js
    │           └── service.js
    └── public
        ├── demo-data.js
        ├── module
        │   └── common
        │       ├── common.js
        │       ├── footer.js
        │       └── header.js
        └── utils
            └── url-param.js
````

#### 研发环境目录

````bash
.
├── article.html
├── bower_components
│   ├── bootstrap
│   │   └── dist
│   │       ├── css
│   │       │   └── bootstrap.css
│   │       ├── fonts
│   │       │   ├── glyphicons-halflings-regular.eot
│   │       │   ├── glyphicons-halflings-regular.svg
│   │       │   ├── glyphicons-halflings-regular.ttf
│   │       │   ├── glyphicons-halflings-regular.woff
│   │       │   └── glyphicons-halflings-regular.woff2
│   │       └── js
│   │           └── bootstrap.js
│   ├── font-awesome
│   │   ├── css
│   │   │   └── font-awesome.css
│   │   └── fonts
│   │       ├── FontAwesome.otf
│   │       ├── fontawesome-webfont.eot
│   │       ├── fontawesome-webfont.svg
│   │       ├── fontawesome-webfont.ttf
│   │       ├── fontawesome-webfont.woff
│   │       └── fontawesome-webfont.woff2
│   ├── jquery
│   │   └── dist
│   │       └── jquery.js
│   └── react
│       ├── react-dom.js
│       └── react.js
├── index.html
├── lib
│   └── q.js
├── list.html
├── static
│   ├── css
│   │   ├── article.css
│   │   ├── common.css
│   │   ├── index.css
│   │   └── list.css
│   ├── images
│   │   └── fez-logo.png
│   ├── js
│   │   ├── article.js
│   │   ├── index.js
│   │   └── list.js
│   └── slice
│       ├── weibo.png
│       ├── weibo@2x.png
│       ├── weibo@3x.png
│       ├── weixin.png
│       ├── weixin@2x.png
│       └── weixin@3x.png
├── zindex
│   ├── css
│   │   └── bootstrap.min.css
│   └── js
│       ├── bootstrap.min.js
│       ├── handlebars-v4.0.5.min.js
│       ├── jquery-2.1.3.min.js
│       └── qrcode.min.js
└── zindex.html
````

#### 生产环境目录

````bash
.
├── article.html
├── index.html
├── list.html
├── manifest.json
└── static
    ├── css
    │   ├── article.17575a8d.css
    │   ├── common.1228ff3a.css
    │   ├── index.58f5c69b.css
    │   ├── list.17575a8d.css
    │   ├── vendor-bootstrap.37f7fae7.css
    │   └── vendor-font-awesome.97fc8e7e.css
    ├── fonts
    │   ├── fontawesome-webfont.79de9362.woff2
    │   ├── fontawesome-webfont.912ec66d.svg
    │   ├── fontawesome-webfont.b92842a7.woff
    │   ├── fontawesome-webfont.da5a2cea.eot
    │   ├── fontawesome-webfont.df8826c0.ttf
    │   ├── glyphicons-halflings-regular.5e8b1222.woff2
    │   ├── glyphicons-halflings-regular.85df732e.woff
    │   ├── glyphicons-halflings-regular.89889688.svg
    │   ├── glyphicons-halflings-regular.9f0aa0d8.eot
    │   └── glyphicons-halflings-regular.a31955de.ttf
    ├── images
    │   └── fez-logo.44b46304.png
    ├── js
    │   ├── a-vendor-react.d642fadc.js
    │   ├── article.2a445085.js
    │   ├── b-vendor-react-dom.f5f61d32.js
    │   ├── common.34f596f9.js
    │   ├── index.4c19f1c9.js
    │   └── list.b45e6d30.js
    └── sprite
        ├── common.1614f1d4.png
        ├── common@2x.21ec16bb.png
        └── common@3x.ce5fc377.png
````

