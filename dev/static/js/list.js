(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = require('public/module/common/header');

var _header2 = _interopRequireDefault(_header);

var _index = require('./module/jumbotron/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./module/listing/index');

var _index4 = _interopRequireDefault(_index3);

var _footer = require('public/module/common/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = _react2.default.createClass({
	displayName: 'Page',
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_header2.default, null),
			_react2.default.createElement(_index2.default, null),
			_react2.default.createElement(_index4.default, null),
			_react2.default.createElement(_footer2.default, null)
		);
	}
});

_reactDom2.default.render(_react2.default.createElement(Page, null), document.getElementById('app'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./module/jumbotron/index":2,"./module/listing/index":4,"public/module/common/footer":8,"public/module/common/header":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: "jumbotron",
    getInitialState: function getInitialState() {
        return {
            jumbotronData: {
                title: "",
                content: "",
                button: {
                    name: "",
                    href: ""
                }
            }
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        _service2.default.renderData().then(function (data) {
            _this.setState({
                jumbotronData: (0, _extends3.default)({}, data)
            });
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "jumbotron" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "h1",
                    null,
                    this.state.jumbotronData.title
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.jumbotronData.content
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement("a", { className: "btn btn-primary btn-lg", href: this.state.jumbotronData.button.href, role: "button", dangerouslySetInnerHTML: {
                            __html: this.state.jumbotronData.button.name
                        } })
                )
            )
        );
    }
});

},{"./service":3,"babel-runtime/helpers/extends":12}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.list.jumbotron);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: "listing",
    getInitialState: function getInitialState() {
        return {
            listing: []
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        _service2.default.renderData().then(function (data) {
            _this.setState({
                listing: data
            });
        });
    },
    render: function render() {
        var listing = [];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(this.state.listing), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                listing.push(React.createElement(
                    "div",
                    { key: item.title, className: "col-md-4" },
                    React.createElement(
                        "h2",
                        null,
                        item.title
                    ),
                    React.createElement(
                        "p",
                        null,
                        item.desc
                    ),
                    React.createElement(
                        "p",
                        null,
                        React.createElement(
                            "a",
                            { className: "btn btn-default", href: 'article.html?id=' + item.id, role: "button" },
                            "Detail"
                        )
                    )
                ));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                listing
            ),
            React.createElement("hr", null)
        );
    }
});

},{"./service":5,"babel-runtime/core-js/get-iterator":10}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        var rtnData = [];
        return _q2.default.Promise(function (resolve, reject) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {

                for (var _iterator = (0, _getIterator3.default)(_demoData2.default.frames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var v = _step.value;

                    var dataItem = {};

                    dataItem.title = v.title;
                    dataItem.desc = v.desc;
                    dataItem.id = v.title;

                    rtnData.push(dataItem);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            resolve(rtnData);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"babel-runtime/core-js/get-iterator":10,"public/demo-data":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var frames = [{
    title: "Nodejs",
    desc: "FEZ 构建在 NodeJS 基于 Chrome V8 引擎的 JavaScript 运行环境，其事件驱动非阻塞的特性，极其快速的编译前端各种资源",
    content: "<div id=\"home-intro\">\n\n        <p>Node.js\xAE is a JavaScript runtime built on <a href=\"https://developers.google.com/v8/\">Chrome's V8 JavaScript engine</a>.\nNode.js uses an event-driven, non-blocking I/O model that makes it\nlightweight and efficient. Node.js' package ecosystem, <a href=\"https://www.npmjs.com/\">npm</a>, is the largest ecosystem of open\nsource libraries in the world.</p>\n\n\n\n        <h2 id=\"home-downloadhead\" data-dl-local=\"Download for\">Download for macOS (x64)</h2>\n\n        <div class=\"home-downloadblock\">\n\n          <a href=\"https://nodejs.org/dist/v6.10.0/node-v6.10.0.pkg\" class=\"home-downloadbutton\" title=\"Download v6.10.0 LTS\" data-version=\"v6.10.0\">\n            v6.10.0 LTS\n            <small>Recommended For Most Users</small>\n          </a>\n\n          <ul class=\"list-divider-pipe home-secondary-links\">\n            <li>\n              <a href=\"https://nodejs.org/en/download/\">Other Downloads</a>\n            </li>\n            <li>\n              <a href=\"https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.10.0\">Changelog</a>\n            </li>\n            <li>\n              <a href=\"https://nodejs.org/dist/latest-v6.x/docs/api/\">API Docs</a>\n            </li>\n          </ul>\n\n        </div>\n\n          <div class=\"home-downloadblock\">\n\n            <a href=\"https://nodejs.org/dist/v7.7.1/node-v7.7.1.pkg\" class=\"home-downloadbutton\" title=\"Download v7.7.1 Current\" data-version=\"v7.7.1\">\n              v7.7.1 Current\n              <small>Latest Features</small>\n            </a>\n\n            <ul class=\"list-divider-pipe home-secondary-links\">\n              <li>\n                <a href=\"https://nodejs.org/en/download/current/\">Other Downloads</a>\n              </li>\n              <li>\n                <a href=\"https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V7.md#7.7.1\">Changelog</a>\n              </li>\n              <li>\n                <a href=\"https://nodejs.org/dist/latest-v7.x/docs/api/\">API Docs</a>\n              </li>\n            </ul>\n\n          </div>\n        <p>\n          Or have a look at the <a href=\"https://github.com/nodejs/LTS#lts-schedule\">LTS schedule.</a>\n        </p>\n      </div>",
    viewMore: {
        text: "更多信息",
        href: "https://nodejs.org/"
    }
}, {
    title: "NPM",
    desc: "FEZ 使用 NPM 接入全球最大的开源生态系统，具备无限的功能扩展能力，可整合国际前沿的开源框架，适应瞬息万变的技术更替",
    content: "<h1 class=\"title em-default type-neutral-11\">\n          Build amazing things\n        </h1>\n        <p class=\"h5 em-default type-neutral-11 pbxl\">\n          npm is the package manager for JavaScript. Find, share, and reuse\n          packages of code from hundreds of thousands of developers \u2014 and\n          assemble them in powerful new ways.\n        </p>\n        <a id=\"main-cta\" href=\"#pane-homepage-pricing\" class=\"btn btn-highlight-3 mrl\" data-event-name=\"homepage-hero-cta\">Get started</a>",
    viewMore: {
        text: "更多信息",
        href: "https://www.npmjs.com/"
    }
}, {
    title: "Gulp",
    desc: "FEZ 整合Gulp的众多插件，编译、优化和组织前端复杂的模块及静态资源，喝着可乐儿、哼着小曲儿，自动化完成前端大量重复工作",
    content: "<h1 class=\"heading text-center\">Automate and enhance your workflow</h1><h2 class=\"paragraph\">\n          gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.\n        </h2><div class=\"ctas\">\n          <a class=\"ctas-button\" href=\"https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md\">Get Started</a>\n        </div>",
    viewMore: {
        text: "更多信息",
        href: "http://gulpjs.com/"
    }
}, {
    title: "Browserify",
    desc: "FEZ 使用 Browserify 模块化组织和管理项目的各个功能模块，极大提升项目的可维护性、功能复用性，并实现积木式的搭建网页",
    content: "<section id=\"top-home-section\" class=\"top-section color-a\">\n      <div id=\"top-home-image\"></div>\n\n       <h3 id=\"top-subtitle\" class=\"large-font\">Browserify lets you require(<span class=\"color-d\">'modules'</span>) in the browser by bundling up all of your dependencies.</h3>\n      <a href=\"https://github.com/substack/node-browserify#usage\">\n        <button class=\"top-button\" id=\"top-button2\">\n          Documentation\n        </button>\n      </a>\n    </section>",
    viewMore: {
        text: "更多信息",
        href: "http://browserify.org/"
    }
}, {
    title: "Bower",
    desc: "FEZ 可配置使用 Bower 搜索、安装、更新和卸载如JavaScript、CSS之类的网络资源，通过自动化注入技术完美解决复杂的框架包管理问题",
    content: "<div class=\"main\">\n<p class=\"lead\">Web sites are made of lots of things \u2014 frameworks, libraries, assets, and utilities. Bower manages all these things for you.</p>\n<p>Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is tricky. Bower to the rescue!</p>\n<p>Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files. Bower doesn\u2019t concatenate or minify code or do anything else - it just installs the right versions of the packages you need and their dependencies.</p>\n<p>To <a href=\"#getting-started\">get started</a>, Bower works by fetching and installing <a href=\"/search\">packages</a> from all over, taking care of hunting, finding, downloading, and saving the stuff you\u2019re looking for. Bower keeps track of these packages in a manifest file, <a href=\"/docs/creating-packages/#bowerjson\"><code class=\"highlighter-rouge\">bower.json</code></a>. How you use <a href=\"/search\">packages</a> is up to you. Bower provides hooks to facilitate using packages in your <a href=\"/docs/tools\">tools and workflows</a>.</p>\n<p>Bower is optimized for the front-end. If multiple packages depend on a package - jQuery for example - Bower will download jQuery just once. This is known as a flat dependency graph and it helps reduce page load.</p>\n<h2 id=\"install-bower\"><a href=\"#install-bower\" class=\"header-anchor\">\xA7</a>Install Bower</h2>\n<p>Bower is a command line utility. Install it with npm.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"gp\">$ </span>npm install -g bower</code></pre></figure>\n<p>Bower requires <a href=\"http://nodejs.org/\">node, npm</a> and <a href=\"http://git-scm.org\">git</a>.</p>\n<p>Latest release: <a href=\"\"><img src=\"https://img.shields.io/npm/v/bower.svg?maxAge=2592000\" alt=\"bower version\"></a></p>\n<p>For troubleshooting installation on different platforms, read the <a href=\"https://github.com/bower/bower/wiki/Troubleshooting\">troubleshooting</a> wiki page.</p>\n<h2 id=\"getting-started\"><a href=\"#getting-started\" class=\"header-anchor\">\xA7</a>Getting started</h2>\n<h3 id=\"install-packages\"><a href=\"#install-packages\" class=\"header-anchor\">\xA7</a>Install packages</h3>\n<p>Install packages with <a href=\"/docs/api#install\"><code class=\"highlighter-rouge\">bower install</code></a>. Bower installs packages to <code class=\"highlighter-rouge\">bower_components/</code>.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"gp\">$ </span>bower install &lt;package&gt;</code></pre></figure>\n<p>A package can be a GitHub shorthand, a Git endpoint, a URL, and more. Read more about <a href=\"/docs/api/#install\"><code class=\"highlighter-rouge\">bower install</code></a>.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"c\"># installs the project dependencies listed in bower.json</span>\n<span class=\"gp\">$ </span>bower install\n<span class=\"c\"># registered package</span>\n<span class=\"gp\">$ </span>bower install jquery\n<span class=\"c\"># GitHub shorthand</span>\n<span class=\"gp\">$ </span>bower install desandro/masonry\n<span class=\"c\"># Git endpoint</span>\n<span class=\"gp\">$ </span>bower install git://github.com/user/package.git\n<span class=\"c\"># URL</span>\n<span class=\"gp\">$ </span>bower install http://example.com/script.js</code></pre></figure>\n<h3 id=\"search-packages\"><a href=\"#search-packages\" class=\"header-anchor\">\xA7</a>Search packages</h3>\n<p><a href=\"/search\">Search Bower packages</a> and find the registered package names for your favorite projects.</p>\n<h3 id=\"save-packages\"><a href=\"#save-packages\" class=\"header-anchor\">\xA7</a>Save packages</h3>\n<p>Create a <code class=\"highlighter-rouge\">bower.json</code> file for your package with <a href=\"/docs/creating-packages/#bowerjson\"><code class=\"highlighter-rouge\">bower init</code></a>.</p>\n<p>Then save new dependencies to your <code class=\"highlighter-rouge\">bower.json</code> with <code class=\"highlighter-rouge\">bower install PACKAGE --save</code></p>\n<h3 id=\"use-packages\"><a href=\"#use-packages\" class=\"header-anchor\">\xA7</a>Use packages</h3>\n<p>How you use packages is up to you. We recommend you use Bower together with <a href=\"/docs/tools/\">Grunt, RequireJS, Yeoman, and lots of other tools</a> or build your own workflow with <a href=\"/docs/api/\">the API</a>. You can also use the installed packages directly, like this, in the case of <code class=\"highlighter-rouge\">jquery</code>:</p>\n<figure class=\"highlight\"><pre><code class=\"language-html\" data-lang=\"html\"><span class=\"nt\">&lt;script </span><span class=\"na\">src=</span><span class=\"s\">\"bower_components/jquery/dist/jquery.min.js\"</span><span class=\"nt\">&gt;&lt;/script&gt;</span></code></pre></figure>\n<h2 id=\"twitter-updates-from-bowerhttpstwittercombower\"><a href=\"#twitter-updates-from-bowerhttpstwittercombower\" class=\"header-anchor\">\xA7</a>Twitter updates from <a href=\"https://twitter.com/bower\">@bower</a></h2>\n<p><a class=\"twitter-timeline\" href=\"https://twitter.com/bower\" data-widget-id=\"480377291369754625\">Tweets by @bower</a>\n</p>\n\n</div>",
    viewMore: {
        text: "更多信息",
        href: "https://bower.io/"
    }
}, {
    title: "BorwserSync",
    desc: "FEZ 使用 Browsersync 让浏览器实时快速的响应前端各种文件的更改并自动刷新页面，亦可实时同步各个终端，提高至少30%的开发效率",
    content: "<h1 class=\"hook\">Time-saving synchronised browser testing.</h1><p class=\"ronseal\">It\u2019s wicked-fast and totally free.</p><p class=\"video\"><a class=\"video__link\" href=\"#\"></a></p><p class=\"how-to\"></p><p class=\"how-to__command\">npm install -g browser-sync</p><p class=\"cta\"><a class=\"button button--primary\" href=\"#install\" title=\"Get Started\">Get Started</a></p><div class=\"player\"><p>'bonjour</p></div>",
    viewMore: {
        text: "更多信息",
        href: "https://browsersync.io/"
    }
}];

var index = {
    fezdesc: "FEZ 前端模块化工程开发框架",
    jumbotron: {
        title: "Hello, FEZ And React!",
        content: "这是一个使用 FEZ 构建的前端模块化开发示例，演示了基于React单文件组件的开发结构。",
        button: {
            name: "<i class=\"fa fa-github-alt\"></i> GitHub",
            href: "https://github.com/furic-zhao/fez"
        }
    }
};

var list = {
    jumbotron: {
        title: "FEZ And React Frame!",
        content: "这是一个FEZ整合React的列表展示页，请点击下面列表的 Detail 按钮进入详情页浏览",
        button: {
            name: "查看更多信息",
            href: "http://fez.hestudy.com"
        }
    }
};

var common = {
    siteName: "FEZ React DEMO",

    navData: [{
        name: "首页",
        href: "index.html"
    }, {
        name: "FEZ基本架构",
        href: "list.html"
    }],

    footerText: "© 2017 FEZ 前端模块化工程开发框架 Created by Furic.zhao"
};

exports.default = {
    "index": index,
    "list": list,
    "frames": frames,
    "common": common
};

},{}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    navList: function navList() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.common.navData);
        });
    },
    siteName: function siteName() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.common.siteName);
        });
    },
    footerText: function footerText() {
        return _q2.default.Promise(function (resolve, reject) {
            resolve(_demoData2.default.common.footerText);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = require("./common");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: "footer",
    getInitialState: function getInitialState() {
        return {
            footerText: ""
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        _common2.default.footerText().then(function (data) {
            _this.setState({
                footerText: data
            });
        });
    },
    render: function render() {

        return React.createElement(
            "footer",
            { className: "container" },
            React.createElement(
                "span",
                { className: "pull-left" },
                this.state.footerText
            ),
            React.createElement(
                "span",
                { className: "pull-right" },
                React.createElement("i", { className: "icon icon-weixin" }),
                React.createElement("i", { className: "icon icon-weibo" })
            )
        );
    }
});

},{"./common":7}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: 'header',
    getInitialState: function getInitialState() {
        return {
            rtnData: {
                siteName: "",
                navList: []
            }
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        _q2.default.all([_common2.default.siteName(), _common2.default.navList()]).then(function (data) {
            var rtnData = {
                siteName: data[0],
                navList: data[1]
            };
            _this.setState({
                rtnData: rtnData
            });
        });
    },
    render: function render() {
        var navList = [];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(this.state.rtnData.navList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var item = _step.value;

                navList.push(React.createElement(
                    'li',
                    { key: item.name },
                    React.createElement(
                        'a',
                        { href: item.href },
                        item.name
                    )
                ));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return React.createElement(
            'nav',
            { className: 'navbar navbar-inverse navbar-fixed-top' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'navbar-header' },
                    React.createElement(
                        'button',
                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },
                        React.createElement(
                            'span',
                            { className: 'sr-only' },
                            'Toggle navigation'
                        ),
                        React.createElement('span', { className: 'icon-bar' }),
                        React.createElement('span', { className: 'icon-bar' }),
                        React.createElement('span', { className: 'icon-bar' })
                    ),
                    React.createElement(
                        'a',
                        { className: 'navbar-brand', href: '/' },
                        this.state.rtnData.siteName
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'navbar', className: 'collapse navbar-collapse' },
                    React.createElement(
                        'ul',
                        { className: 'nav navbar-nav' },
                        navList
                    )
                )
            )
        );
    }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./common":7,"babel-runtime/core-js/get-iterator":10}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":13}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":14}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":11}],13:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":65,"../modules/es6.string.iterator":68,"../modules/web.dom.iterable":69}],14:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":21,"../../modules/es6.object.assign":67}],15:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],16:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],17:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":35}],18:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":56,"./_to-iobject":58,"./_to-length":59}],19:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":20,"./_wks":63}],20:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],21:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],22:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":15}],23:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],24:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":28}],25:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":29,"./_is-object":35}],26:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],27:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":21,"./_ctx":22,"./_global":29,"./_hide":31}],28:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],29:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],30:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],31:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":24,"./_object-dp":43,"./_property-desc":50}],32:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":29}],33:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":24,"./_dom-create":25,"./_fails":28}],34:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":20}],35:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],36:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":31,"./_object-create":42,"./_property-desc":50,"./_set-to-string-tag":52,"./_wks":63}],37:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":27,"./_has":30,"./_hide":31,"./_iter-create":36,"./_iterators":39,"./_library":40,"./_object-gpo":46,"./_redefine":51,"./_set-to-string-tag":52,"./_wks":63}],38:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],39:[function(require,module,exports){
module.exports = {};
},{}],40:[function(require,module,exports){
module.exports = true;
},{}],41:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":28,"./_iobject":34,"./_object-gops":45,"./_object-keys":48,"./_object-pie":49,"./_to-object":60}],42:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":17,"./_dom-create":25,"./_enum-bug-keys":26,"./_html":32,"./_object-dps":44,"./_shared-key":53}],43:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":17,"./_descriptors":24,"./_ie8-dom-define":33,"./_to-primitive":61}],44:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":17,"./_descriptors":24,"./_object-dp":43,"./_object-keys":48}],45:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],46:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":30,"./_shared-key":53,"./_to-object":60}],47:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":18,"./_has":30,"./_shared-key":53,"./_to-iobject":58}],48:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":26,"./_object-keys-internal":47}],49:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],50:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],51:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":31}],52:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":30,"./_object-dp":43,"./_wks":63}],53:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":54,"./_uid":62}],54:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":29}],55:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":23,"./_to-integer":57}],56:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":57}],57:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],58:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":23,"./_iobject":34}],59:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":57}],60:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":23}],61:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":35}],62:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],63:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":29,"./_shared":54,"./_uid":62}],64:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":19,"./_core":21,"./_iterators":39,"./_wks":63}],65:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":17,"./_core":21,"./core.get-iterator-method":64}],66:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":16,"./_iter-define":37,"./_iter-step":38,"./_iterators":39,"./_to-iobject":58}],67:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":27,"./_object-assign":41}],68:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":37,"./_string-at":55}],69:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":29,"./_hide":31,"./_iterators":39,"./_wks":63,"./es6.array.iterator":66}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdmlld3MvbGlzdC9pbmRleC5qcyIsInNyYy92aWV3cy9saXN0L21vZHVsZS9qdW1ib3Ryb24vaW5kZXguanMiLCJzcmMvdmlld3MvbGlzdC9tb2R1bGUvanVtYm90cm9uL3NlcnZpY2UuanMiLCJzcmMvdmlld3MvbGlzdC9tb2R1bGUvbGlzdGluZy9pbmRleC5qcyIsInNyYy92aWV3cy9saXN0L21vZHVsZS9saXN0aW5nL3NlcnZpY2UuanMiLCJzcmMvdmlld3MvcHVibGljL2RlbW8tZGF0YS5qcyIsInNyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9jb21tb24uanMiLCJzcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vZm9vdGVyLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL2hlYWRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQUksT0FBTyxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDNUIsT0FENEIsb0JBQ25CO0FBQ1IsU0FDQztBQUFBO0FBQUE7QUFDSyx3REFETDtBQUVLLHVEQUZMO0FBR0ssdURBSEw7QUFJSztBQUpMLEdBREQ7QUFRQTtBQVYyQixDQUFsQixDQUFYOztBQWFBLG1CQUFTLE1BQVQsQ0FDQyw4QkFBQyxJQUFELE9BREQsRUFFQyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7a0JBRWUsTUFBTSxXQUFOLENBQWtCO0FBQUE7QUFDN0IsbUJBRDZCLDZCQUNYO0FBQ2QsZUFBTztBQUNILDJCQUFlO0FBQ1gsdUJBQU8sRUFESTtBQUVYLHlCQUFTLEVBRkU7QUFHWCx3QkFBUTtBQUNKLDRCQURJO0FBRUosMEJBQU07QUFGRjtBQUhHO0FBRFosU0FBUDtBQVVILEtBWjRCO0FBYTdCLHFCQWI2QiwrQkFhVDtBQUFBOztBQUVoQiwwQkFBUSxVQUFSLEdBQXFCLElBQXJCLENBQTBCLFVBQUMsSUFBRCxFQUFVO0FBQ2hDLGtCQUFLLFFBQUwsQ0FBYztBQUNWLCtCQUFlLHVCQUFjLEVBQWQsRUFBa0IsSUFBbEI7QUFETCxhQUFkO0FBR0gsU0FKRDtBQUtILEtBcEI0QjtBQXFCN0IsVUFyQjZCLG9CQXFCcEI7QUFDTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNKO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSyx5QkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QjtBQUE5QixpQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFJLHlCQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCO0FBQTdCLGlCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQ0ksK0NBQUcsV0FBVSx3QkFBYixFQUFzQyxNQUFNLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsTUFBekIsQ0FBZ0MsSUFBNUUsRUFBa0YsTUFBSyxRQUF2RixFQUFnRyx5QkFBeUI7QUFDekgsb0NBQVEsS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixNQUF6QixDQUFnQztBQURpRix5QkFBekg7QUFESjtBQUhKO0FBREksU0FESjtBQWNIO0FBcEM0QixDQUFsQixDOzs7Ozs7Ozs7O0FDRmY7Ozs7QUFFQTs7Ozs7O2tCQUVlO0FBQ1gsY0FEVyx3QkFDRTtBQUNULGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxJQUFSLENBQWEsU0FBckI7QUFDSCxTQUZNLENBQVA7QUFHSDtBQUxVLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pmOzs7Ozs7a0JBRWUsTUFBTSxXQUFOLENBQWtCO0FBQUE7QUFDN0IsbUJBRDZCLDZCQUNYO0FBQ2QsZUFBTztBQUNILHFCQUFTO0FBRE4sU0FBUDtBQUdILEtBTDRCO0FBTTdCLHFCQU42QiwrQkFNVDtBQUFBOztBQUVoQiwwQkFBUSxVQUFSLEdBQXFCLElBQXJCLENBQTBCLFVBQUMsSUFBRCxFQUFVO0FBQ2hDLGtCQUFLLFFBQUwsQ0FBYztBQUNWLHlCQUFTO0FBREMsYUFBZDtBQUdILFNBSkQ7QUFLSCxLQWI0QjtBQWM3QixVQWQ2QixvQkFjcEI7QUFDTCxZQUFJLFVBQVUsRUFBZDs7QUFESztBQUFBO0FBQUE7O0FBQUE7QUFHTCw0REFBaUIsS0FBSyxLQUFMLENBQVcsT0FBNUIsNEdBQXFDO0FBQUEsb0JBQTVCLElBQTRCOztBQUNqQyx3QkFBUSxJQUFSLENBQWE7QUFBQTtBQUFBLHNCQUFLLEtBQUssS0FBSyxLQUFmLEVBQXNCLFdBQVUsVUFBaEM7QUFDVDtBQUFBO0FBQUE7QUFBSyw2QkFBSztBQUFWLHFCQURTO0FBRVQ7QUFBQTtBQUFBO0FBQUksNkJBQUs7QUFBVCxxQkFGUztBQUdUO0FBQUE7QUFBQTtBQUFHO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGlCQUFiLEVBQStCLE1BQU0scUJBQXFCLEtBQUssRUFBL0QsRUFBbUUsTUFBSyxRQUF4RTtBQUFBO0FBQUE7QUFBSDtBQUhTLGlCQUFiO0FBS0g7QUFUSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0o7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNLO0FBREwsYUFESTtBQUlKO0FBSkksU0FESjtBQVNIO0FBbEM0QixDQUFsQixDOzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGNBRFcsd0JBQ0U7QUFDVCxZQUFJLFVBQVUsRUFBZDtBQUNBLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFbEMsZ0VBQWMsbUJBQVEsTUFBdEIsNEdBQThCO0FBQUEsd0JBQXJCLENBQXFCOztBQUMxQix3QkFBSSxXQUFXLEVBQWY7O0FBRUEsNkJBQVMsS0FBVCxHQUFpQixFQUFFLEtBQW5CO0FBQ0EsNkJBQVMsSUFBVCxHQUFnQixFQUFFLElBQWxCO0FBQ0EsNkJBQVMsRUFBVCxHQUFjLEVBQUUsS0FBaEI7O0FBRUEsNEJBQVEsSUFBUixDQUFhLFFBQWI7QUFDSDtBQVZpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVlsQyxvQkFBUSxPQUFSO0FBQ0gsU0FiTSxDQUFQO0FBY0g7QUFqQlUsQzs7Ozs7Ozs7OztBQ0pmLElBQUksU0FBUyxDQUFDO0FBQ1YsV0FBTyxRQURHO0FBRVYsVUFBTSwyRUFGSTtBQUdWLGt3RUFIVTtBQTJEVixjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBM0RBLENBQUQsRUErRFY7QUFDQyxXQUFPLEtBRFI7QUFFQyxVQUFNLCtEQUZQO0FBR0MscWhCQUhEO0FBWUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQVpYLENBL0RVLEVBK0VWO0FBQ0MsV0FBTyxNQURSO0FBRUMsVUFBTSxnRUFGUDtBQUdDLGljQUhEO0FBUUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQVJYLENBL0VVLEVBMkZWO0FBQ0MsV0FBTyxZQURSO0FBRUMsVUFBTSxtRUFGUDtBQUdDLHlmQUhEO0FBYUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQWJYLENBM0ZVLEVBNEdWO0FBQ0MsV0FBTyxPQURSO0FBRUMsVUFBTSwyRUFGUDtBQUdDLGl2S0FIRDtBQTJDQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBM0NYLENBNUdVLEVBMkpWO0FBQ0MsV0FBTyxhQURSO0FBRUMsVUFBTSx3RUFGUDtBQUdDLDhiQUhEO0FBSUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQUpYLENBM0pVLENBQWI7O0FBcUtBLElBQUksUUFBUTtBQUNSLGFBQVMsaUJBREQ7QUFFUixlQUFXO0FBQ1AsZUFBTyx1QkFEQTtBQUVQLGlCQUFTLCtDQUZGO0FBR1AsZ0JBQVE7QUFDSiw2REFESTtBQUVKLGtCQUFNO0FBRkY7QUFIRDtBQUZILENBQVo7O0FBWUEsSUFBSSxPQUFPO0FBQ1AsZUFBVztBQUNQLGVBQU8sc0JBREE7QUFFUCxpQkFBUyxnREFGRjtBQUdQLGdCQUFRO0FBQ0osa0JBQU0sUUFERjtBQUVKLGtCQUFNO0FBRkY7QUFIRDtBQURKLENBQVg7O0FBV0EsSUFBSSxTQUFTO0FBQ1QsY0FBVSxnQkFERDs7QUFHVCxhQUFTLENBQUM7QUFDTixjQUFNLElBREE7QUFFTixjQUFNO0FBRkEsS0FBRCxFQUdOO0FBQ0MsY0FBTSxTQURQO0FBRUMsY0FBTTtBQUZQLEtBSE0sQ0FIQTs7QUFXVCxnQkFBWTtBQVhILENBQWI7O2tCQWNlO0FBQ1gsYUFBUyxLQURFO0FBRVgsWUFBUSxJQUZHO0FBR1gsY0FBVSxNQUhDO0FBSVgsY0FBVTtBQUpDLEM7Ozs7Ozs7Ozs7QUMxTWY7Ozs7QUFFQTs7Ozs7O2tCQUVlO0FBQ1gsV0FEVyxxQkFDRDtBQUNGLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxNQUFSLENBQWUsT0FBdkI7QUFDSCxTQUZNLENBQVA7QUFHSCxLQUxNO0FBTVAsWUFOTyxzQkFNSTtBQUNQLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxNQUFSLENBQWUsUUFBdkI7QUFDSCxTQUZNLENBQVA7QUFHSCxLQVZNO0FBV1AsY0FYTyx3QkFXTTtBQUNULGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxvQkFBUSxtQkFBUSxNQUFSLENBQWUsVUFBdkI7QUFDSCxTQUZNLENBQVA7QUFHSDtBQWZNLEM7Ozs7Ozs7Ozs7O0FDSmY7Ozs7OztrQkFFZSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUM3QixtQkFENkIsNkJBQ1g7QUFDZCxlQUFPO0FBQ0gsd0JBQVk7QUFEVCxTQUFQO0FBR0gsS0FMNEI7QUFNN0IscUJBTjZCLCtCQU1UO0FBQUE7O0FBQ2hCLHlCQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FBMEIsVUFBQyxJQUFELEVBQVU7QUFDaEMsa0JBQUssUUFBTCxDQUFjO0FBQ1YsNEJBQVk7QUFERixhQUFkO0FBR0gsU0FKRDtBQUtILEtBWjRCO0FBYTdCLFVBYjZCLG9CQWFwQjs7QUFFTCxlQUFRO0FBQUE7QUFBQSxjQUFRLFdBQVUsV0FBbEI7QUFDUjtBQUFBO0FBQUEsa0JBQU0sV0FBVSxXQUFoQjtBQUE2QixxQkFBSyxLQUFMLENBQVc7QUFBeEMsYUFEUTtBQUVSO0FBQUE7QUFBQSxrQkFBTSxXQUFVLFlBQWhCO0FBQ0EsMkNBQUcsV0FBVSxrQkFBYixHQURBO0FBRUEsMkNBQUcsV0FBVSxpQkFBYjtBQUZBO0FBRlEsU0FBUjtBQVFIO0FBdkI0QixDQUFsQixDOzs7Ozs7Ozs7Ozs7OztBQ0ZmOzs7O0FBQ0E7Ozs7OztrQkFFZSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUM3QixtQkFENkIsNkJBQ1g7QUFDZCxlQUFPO0FBQ0gscUJBQVM7QUFDTCwwQkFBVSxFQURMO0FBRUwseUJBQVM7QUFGSjtBQUROLFNBQVA7QUFNSCxLQVI0QjtBQVM3QixxQkFUNkIsK0JBU1Q7QUFBQTs7QUFDaEIsb0JBQUUsR0FBRixDQUFNLENBQ0YsaUJBQVEsUUFBUixFQURFLEVBRUYsaUJBQVEsT0FBUixFQUZFLENBQU4sRUFHRyxJQUhILENBR1EsVUFBQyxJQUFELEVBQVU7QUFDZCxnQkFBSSxVQUFVO0FBQ1YsMEJBQVUsS0FBSyxDQUFMLENBREE7QUFFVix5QkFBUyxLQUFLLENBQUw7QUFGQyxhQUFkO0FBSUEsa0JBQUssUUFBTCxDQUFjO0FBQ1YseUJBQVM7QUFEQyxhQUFkO0FBR0gsU0FYRDtBQVlILEtBdEI0QjtBQXVCN0IsVUF2QjZCLG9CQXVCcEI7QUFDTCxZQUFJLFVBQVUsRUFBZDs7QUFESztBQUFBO0FBQUE7O0FBQUE7QUFHTCw0REFBaUIsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixPQUFwQyw0R0FBNkM7QUFBQSxvQkFBcEMsSUFBb0M7O0FBQ3pDLHdCQUFRLElBQVIsQ0FBYTtBQUFBO0FBQUEsc0JBQUksS0FBSyxLQUFLLElBQWQ7QUFBb0I7QUFBQTtBQUFBLDBCQUFHLE1BQU0sS0FBSyxJQUFkO0FBQXFCLDZCQUFLO0FBQTFCO0FBQXBCLGlCQUFiO0FBQ0g7QUFMSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9MLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSx3Q0FBZjtBQUNKO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxlQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLHlCQUFoQyxFQUEwRCxlQUFZLFVBQXRFLEVBQWlGLGVBQVksU0FBN0YsRUFBdUcsaUJBQWMsT0FBckgsRUFBNkgsaUJBQWMsUUFBM0k7QUFDSTtBQUFBO0FBQUEsOEJBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUEseUJBREo7QUFFSSxzREFBTSxXQUFVLFVBQWhCLEdBRko7QUFHSSxzREFBTSxXQUFVLFVBQWhCLEdBSEo7QUFJSSxzREFBTSxXQUFVLFVBQWhCO0FBSkoscUJBREo7QUFPSTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxjQUFiLEVBQTRCLE1BQUssR0FBakM7QUFBc0MsNkJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUI7QUFBekQ7QUFQSixpQkFESjtBQVVJO0FBQUE7QUFBQSxzQkFBSyxJQUFHLFFBQVIsRUFBaUIsV0FBVSwwQkFBM0I7QUFDSTtBQUFBO0FBQUEsMEJBQUksV0FBVSxnQkFBZDtBQUNDO0FBREQ7QUFESjtBQVZKO0FBREksU0FESjtBQXFCSDtBQW5ENEIsQ0FBbEIsQzs7Ozs7QUNIZjs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAncHVibGljL21vZHVsZS9jb21tb24vaGVhZGVyJ1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gJy4vbW9kdWxlL2p1bWJvdHJvbi9pbmRleCdcclxuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9tb2R1bGUvbGlzdGluZy9pbmRleCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICdwdWJsaWMvbW9kdWxlL2NvbW1vbi9mb290ZXInXHJcblxyXG5cclxubGV0IFBhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEp1bWJvdHJvbiAvPlxyXG4gICAgICAgIDxMaXN0aW5nIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufSlcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8UGFnZSAvPixcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKSIsImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGp1bWJvdHJvbkRhdGE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgYCxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAganVtYm90cm9uRGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLmp1bWJvdHJvbkRhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmp1bWJvdHJvbkRhdGEuY29udGVudH08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgaHJlZj17dGhpcy5zdGF0ZS5qdW1ib3Ryb25EYXRhLmJ1dHRvbi5ocmVmfSByb2xlPVwiYnV0dG9uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IHRoaXMuc3RhdGUuanVtYm90cm9uRGF0YS5idXR0b24ubmFtZVxuICAgICAgICAgICAgfX0+PC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG4gICAgfVxufSkiLCJpbXBvcnQgUSBmcm9tICdxJ1xuXG5pbXBvcnQgQXBpRGF0YSBmcm9tICdwdWJsaWMvZGVtby1kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKEFwaURhdGEubGlzdC5qdW1ib3Ryb24pXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGlzdGluZzogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbGlzdGluZzogZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxpc3RpbmcgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5zdGF0ZS5saXN0aW5nKSB7XG4gICAgICAgICAgICBsaXN0aW5nLnB1c2goPGRpdiBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPGgyPntpdGVtLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY308L3A+XG4gICAgICAgICAgICAgICAgPHA+PGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaHJlZj17J2FydGljbGUuaHRtbD9pZD0nICsgaXRlbS5pZH0gcm9sZT1cImJ1dHRvblwiPkRldGFpbDwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHtsaXN0aW5nfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIC8+XG4gICAgPC9kaXY+XG4gICAgICAgIClcblxuICAgIH1cbn0pIiwiaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlckRhdGEoKSB7XG4gICAgICAgIGxldCBydG5EYXRhID0gW11cbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHYgb2YgQXBpRGF0YS5mcmFtZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUl0ZW0gPSB7fVxuXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW0udGl0bGUgPSB2LnRpdGxlXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW0uZGVzYyA9IHYuZGVzY1xuICAgICAgICAgICAgICAgIGRhdGFJdGVtLmlkID0gdi50aXRsZVxuXG4gICAgICAgICAgICAgICAgcnRuRGF0YS5wdXNoKGRhdGFJdGVtKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHJ0bkRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwibGV0IGZyYW1lcyA9IFt7XG4gICAgdGl0bGU6IFwiTm9kZWpzXCIsXG4gICAgZGVzYzogXCJGRVog5p6E5bu65ZyoIE5vZGVKUyDln7rkuo4gQ2hyb21lIFY4IOW8leaTjueahCBKYXZhU2NyaXB0IOi/kOihjOeOr+Wig++8jOWFtuS6i+S7tumpseWKqOmdnumYu+WhnueahOeJueaAp++8jOaegeWFtuW/q+mAn+eahOe8luivkeWJjeerr+WQhOenjei1hOa6kFwiLFxuICAgIGNvbnRlbnQ6IGA8ZGl2IGlkPVwiaG9tZS1pbnRyb1wiPlxuXG4gICAgICAgIDxwPk5vZGUuanPCriBpcyBhIEphdmFTY3JpcHQgcnVudGltZSBidWlsdCBvbiA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vdjgvXCI+Q2hyb21lJ3MgVjggSmF2YVNjcmlwdCBlbmdpbmU8L2E+LlxuTm9kZS5qcyB1c2VzIGFuIGV2ZW50LWRyaXZlbiwgbm9uLWJsb2NraW5nIEkvTyBtb2RlbCB0aGF0IG1ha2VzIGl0XG5saWdodHdlaWdodCBhbmQgZWZmaWNpZW50LiBOb2RlLmpzJyBwYWNrYWdlIGVjb3N5c3RlbSwgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9cIj5ucG08L2E+LCBpcyB0aGUgbGFyZ2VzdCBlY29zeXN0ZW0gb2Ygb3Blblxuc291cmNlIGxpYnJhcmllcyBpbiB0aGUgd29ybGQuPC9wPlxuXG5cblxuICAgICAgICA8aDIgaWQ9XCJob21lLWRvd25sb2FkaGVhZFwiIGRhdGEtZGwtbG9jYWw9XCJEb3dubG9hZCBmb3JcIj5Eb3dubG9hZCBmb3IgbWFjT1MgKHg2NCk8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWRvd25sb2FkYmxvY2tcIj5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC92Ni4xMC4wL25vZGUtdjYuMTAuMC5wa2dcIiBjbGFzcz1cImhvbWUtZG93bmxvYWRidXR0b25cIiB0aXRsZT1cIkRvd25sb2FkIHY2LjEwLjAgTFRTXCIgZGF0YS12ZXJzaW9uPVwidjYuMTAuMFwiPlxuICAgICAgICAgICAgdjYuMTAuMCBMVFNcbiAgICAgICAgICAgIDxzbWFsbD5SZWNvbW1lbmRlZCBGb3IgTW9zdCBVc2Vyczwvc21hbGw+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1kaXZpZGVyLXBpcGUgaG9tZS1zZWNvbmRhcnktbGlua3NcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9cIj5PdGhlciBEb3dubG9hZHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvbWFzdGVyL2RvYy9jaGFuZ2Vsb2dzL0NIQU5HRUxPR19WNi5tZCM2LjEwLjBcIj5DaGFuZ2Vsb2c8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0LXY2LngvZG9jcy9hcGkvXCI+QVBJIERvY3M8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1kb3dubG9hZGJsb2NrXCI+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC92Ny43LjEvbm9kZS12Ny43LjEucGtnXCIgY2xhc3M9XCJob21lLWRvd25sb2FkYnV0dG9uXCIgdGl0bGU9XCJEb3dubG9hZCB2Ny43LjEgQ3VycmVudFwiIGRhdGEtdmVyc2lvbj1cInY3LjcuMVwiPlxuICAgICAgICAgICAgICB2Ny43LjEgQ3VycmVudFxuICAgICAgICAgICAgICA8c21hbGw+TGF0ZXN0IEZlYXR1cmVzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1kaXZpZGVyLXBpcGUgaG9tZS1zZWNvbmRhcnktbGlua3NcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZW4vZG93bmxvYWQvY3VycmVudC9cIj5PdGhlciBEb3dubG9hZHM8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvbWFzdGVyL2RvYy9jaGFuZ2Vsb2dzL0NIQU5HRUxPR19WNy5tZCM3LjcuMVwiPkNoYW5nZWxvZzwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QtdjcueC9kb2NzL2FwaS9cIj5BUEkgRG9jczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT3IgaGF2ZSBhIGxvb2sgYXQgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL0xUUyNsdHMtc2NoZWR1bGVcIj5MVFMgc2NoZWR1bGUuPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9ub2RlanMub3JnL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIk5QTVwiLFxuICAgIGRlc2M6IFwiRkVaIOS9v+eUqCBOUE0g5o6l5YWl5YWo55CD5pyA5aSn55qE5byA5rqQ55Sf5oCB57O757uf77yM5YW35aSH5peg6ZmQ55qE5Yqf6IO95omp5bGV6IO95Yqb77yM5Y+v5pW05ZCI5Zu96ZmF5YmN5rK/55qE5byA5rqQ5qGG5p6277yM6YCC5bqU556s5oGv5LiH5Y+Y55qE5oqA5pyv5pu05pu/XCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cInRpdGxlIGVtLWRlZmF1bHQgdHlwZS1uZXV0cmFsLTExXCI+XG4gICAgICAgICAgQnVpbGQgYW1hemluZyB0aGluZ3NcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJoNSBlbS1kZWZhdWx0IHR5cGUtbmV1dHJhbC0xMSBwYnhsXCI+XG4gICAgICAgICAgbnBtIGlzIHRoZSBwYWNrYWdlIG1hbmFnZXIgZm9yIEphdmFTY3JpcHQuIEZpbmQsIHNoYXJlLCBhbmQgcmV1c2VcbiAgICAgICAgICBwYWNrYWdlcyBvZiBjb2RlIGZyb20gaHVuZHJlZHMgb2YgdGhvdXNhbmRzIG9mIGRldmVsb3BlcnMg4oCUIGFuZFxuICAgICAgICAgIGFzc2VtYmxlIHRoZW0gaW4gcG93ZXJmdWwgbmV3IHdheXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaWQ9XCJtYWluLWN0YVwiIGhyZWY9XCIjcGFuZS1ob21lcGFnZS1wcmljaW5nXCIgY2xhc3M9XCJidG4gYnRuLWhpZ2hsaWdodC0zIG1ybFwiIGRhdGEtZXZlbnQtbmFtZT1cImhvbWVwYWdlLWhlcm8tY3RhXCI+R2V0IHN0YXJ0ZWQ8L2E+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJHdWxwXCIsXG4gICAgZGVzYzogXCJGRVog5pW05ZCIR3VscOeahOS8l+WkmuaPkuS7tu+8jOe8luivkeOAgeS8mOWMluWSjOe7hOe7h+WJjeerr+WkjeadgueahOaooeWdl+WPiumdmeaAgei1hOa6kO+8jOWWneedgOWPr+S5kOWEv+OAgeWTvOedgOWwj+absuWEv++8jOiHquWKqOWMluWujOaIkOWJjeerr+Wkp+mHj+mHjeWkjeW3peS9nFwiLFxuICAgIGNvbnRlbnQ6IGA8aDEgY2xhc3M9XCJoZWFkaW5nIHRleHQtY2VudGVyXCI+QXV0b21hdGUgYW5kIGVuaGFuY2UgeW91ciB3b3JrZmxvdzwvaDE+PGgyIGNsYXNzPVwicGFyYWdyYXBoXCI+XG4gICAgICAgICAgZ3VscCBpcyBhIHRvb2xraXQgZm9yIGF1dG9tYXRpbmcgcGFpbmZ1bCBvciB0aW1lLWNvbnN1bWluZyB0YXNrcyBpbiB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LCBzbyB5b3UgY2FuIHN0b3AgbWVzc2luZyBhcm91bmQgYW5kIGJ1aWxkIHNvbWV0aGluZy5cbiAgICAgICAgPC9oMj48ZGl2IGNsYXNzPVwiY3Rhc1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiY3Rhcy1idXR0b25cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1bHBqcy9ndWxwL2Jsb2IvbWFzdGVyL2RvY3MvZ2V0dGluZy1zdGFydGVkLm1kXCI+R2V0IFN0YXJ0ZWQ8L2E+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwOi8vZ3VscGpzLmNvbS9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJCcm93c2VyaWZ5XCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIEJyb3dzZXJpZnkg5qih5Z2X5YyW57uE57uH5ZKM566h55CG6aG555uu55qE5ZCE5Liq5Yqf6IO95qih5Z2X77yM5p6B5aSn5o+Q5Y2H6aG555uu55qE5Y+v57u05oqk5oCn44CB5Yqf6IO95aSN55So5oCn77yM5bm25a6e546w56ev5pyo5byP55qE5pCt5bu6572R6aG1XCIsXG4gICAgY29udGVudDogYDxzZWN0aW9uIGlkPVwidG9wLWhvbWUtc2VjdGlvblwiIGNsYXNzPVwidG9wLXNlY3Rpb24gY29sb3ItYVwiPlxuICAgICAgPGRpdiBpZD1cInRvcC1ob21lLWltYWdlXCI+PC9kaXY+XG5cbiAgICAgICA8aDMgaWQ9XCJ0b3Atc3VidGl0bGVcIiBjbGFzcz1cImxhcmdlLWZvbnRcIj5Ccm93c2VyaWZ5IGxldHMgeW91IHJlcXVpcmUoPHNwYW4gY2xhc3M9XCJjb2xvci1kXCI+J21vZHVsZXMnPC9zcGFuPikgaW4gdGhlIGJyb3dzZXIgYnkgYnVuZGxpbmcgdXAgYWxsIG9mIHlvdXIgZGVwZW5kZW5jaWVzLjwvaDM+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL25vZGUtYnJvd3NlcmlmeSN1c2FnZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9wLWJ1dHRvblwiIGlkPVwidG9wLWJ1dHRvbjJcIj5cbiAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9hPlxuICAgIDwvc2VjdGlvbj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cDovL2Jyb3dzZXJpZnkub3JnL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJvd2VyXCIsXG4gICAgZGVzYzogXCJGRVog5Y+v6YWN572u5L2/55SoIEJvd2VyIOaQnOe0ouOAgeWuieijheOAgeabtOaWsOWSjOWNuOi9veWmgkphdmFTY3JpcHTjgIFDU1PkuYvnsbvnmoTnvZHnu5zotYTmupDvvIzpgJrov4foh6rliqjljJbms6jlhaXmioDmnK/lroznvo7op6PlhrPlpI3mnYLnmoTmoYbmnrbljIXnrqHnkIbpl67pophcIixcbiAgICBjb250ZW50OiBgPGRpdiBjbGFzcz1cIm1haW5cIj5cbjxwIGNsYXNzPVwibGVhZFwiPldlYiBzaXRlcyBhcmUgbWFkZSBvZiBsb3RzIG9mIHRoaW5ncyDigJQgZnJhbWV3b3JrcywgbGlicmFyaWVzLCBhc3NldHMsIGFuZCB1dGlsaXRpZXMuIEJvd2VyIG1hbmFnZXMgYWxsIHRoZXNlIHRoaW5ncyBmb3IgeW91LjwvcD5cbjxwPktlZXBpbmcgdHJhY2sgb2YgYWxsIHRoZXNlIHBhY2thZ2VzIGFuZCBtYWtpbmcgc3VyZSB0aGV5IGFyZSB1cCB0byBkYXRlIChvciBzZXQgdG8gdGhlIHNwZWNpZmljIHZlcnNpb25zIHlvdSBuZWVkKSBpcyB0cmlja3kuIEJvd2VyIHRvIHRoZSByZXNjdWUhPC9wPlxuPHA+Qm93ZXIgY2FuIG1hbmFnZSBjb21wb25lbnRzIHRoYXQgY29udGFpbiBIVE1MLCBDU1MsIEphdmFTY3JpcHQsIGZvbnRzIG9yIGV2ZW4gaW1hZ2UgZmlsZXMuIEJvd2VyIGRvZXNu4oCZdCBjb25jYXRlbmF0ZSBvciBtaW5pZnkgY29kZSBvciBkbyBhbnl0aGluZyBlbHNlIC0gaXQganVzdCBpbnN0YWxscyB0aGUgcmlnaHQgdmVyc2lvbnMgb2YgdGhlIHBhY2thZ2VzIHlvdSBuZWVkIGFuZCB0aGVpciBkZXBlbmRlbmNpZXMuPC9wPlxuPHA+VG8gPGEgaHJlZj1cIiNnZXR0aW5nLXN0YXJ0ZWRcIj5nZXQgc3RhcnRlZDwvYT4sIEJvd2VyIHdvcmtzIGJ5IGZldGNoaW5nIGFuZCBpbnN0YWxsaW5nIDxhIGhyZWY9XCIvc2VhcmNoXCI+cGFja2FnZXM8L2E+IGZyb20gYWxsIG92ZXIsIHRha2luZyBjYXJlIG9mIGh1bnRpbmcsIGZpbmRpbmcsIGRvd25sb2FkaW5nLCBhbmQgc2F2aW5nIHRoZSBzdHVmZiB5b3XigJlyZSBsb29raW5nIGZvci4gQm93ZXIga2VlcHMgdHJhY2sgb2YgdGhlc2UgcGFja2FnZXMgaW4gYSBtYW5pZmVzdCBmaWxlLCA8YSBocmVmPVwiL2RvY3MvY3JlYXRpbmctcGFja2FnZXMvI2Jvd2VyanNvblwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlci5qc29uPC9jb2RlPjwvYT4uIEhvdyB5b3UgdXNlIDxhIGhyZWY9XCIvc2VhcmNoXCI+cGFja2FnZXM8L2E+IGlzIHVwIHRvIHlvdS4gQm93ZXIgcHJvdmlkZXMgaG9va3MgdG8gZmFjaWxpdGF0ZSB1c2luZyBwYWNrYWdlcyBpbiB5b3VyIDxhIGhyZWY9XCIvZG9jcy90b29sc1wiPnRvb2xzIGFuZCB3b3JrZmxvd3M8L2E+LjwvcD5cbjxwPkJvd2VyIGlzIG9wdGltaXplZCBmb3IgdGhlIGZyb250LWVuZC4gSWYgbXVsdGlwbGUgcGFja2FnZXMgZGVwZW5kIG9uIGEgcGFja2FnZSAtIGpRdWVyeSBmb3IgZXhhbXBsZSAtIEJvd2VyIHdpbGwgZG93bmxvYWQgalF1ZXJ5IGp1c3Qgb25jZS4gVGhpcyBpcyBrbm93biBhcyBhIGZsYXQgZGVwZW5kZW5jeSBncmFwaCBhbmQgaXQgaGVscHMgcmVkdWNlIHBhZ2UgbG9hZC48L3A+XG48aDIgaWQ9XCJpbnN0YWxsLWJvd2VyXCI+PGEgaHJlZj1cIiNpbnN0YWxsLWJvd2VyXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+SW5zdGFsbCBCb3dlcjwvaDI+XG48cD5Cb3dlciBpcyBhIGNvbW1hbmQgbGluZSB1dGlsaXR5LiBJbnN0YWxsIGl0IHdpdGggbnBtLjwvcD5cbjxmaWd1cmUgY2xhc3M9XCJoaWdobGlnaHRcIj48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtYmFzaFwiIGRhdGEtbGFuZz1cImJhc2hcIj48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+bnBtIGluc3RhbGwgLWcgYm93ZXI8L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48cD5Cb3dlciByZXF1aXJlcyA8YSBocmVmPVwiaHR0cDovL25vZGVqcy5vcmcvXCI+bm9kZSwgbnBtPC9hPiBhbmQgPGEgaHJlZj1cImh0dHA6Ly9naXQtc2NtLm9yZ1wiPmdpdDwvYT4uPC9wPlxuPHA+TGF0ZXN0IHJlbGVhc2U6IDxhIGhyZWY9XCJcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vbnBtL3YvYm93ZXIuc3ZnP21heEFnZT0yNTkyMDAwXCIgYWx0PVwiYm93ZXIgdmVyc2lvblwiPjwvYT48L3A+XG48cD5Gb3IgdHJvdWJsZXNob290aW5nIGluc3RhbGxhdGlvbiBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zLCByZWFkIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Jvd2VyL2Jvd2VyL3dpa2kvVHJvdWJsZXNob290aW5nXCI+dHJvdWJsZXNob290aW5nPC9hPiB3aWtpIHBhZ2UuPC9wPlxuPGgyIGlkPVwiZ2V0dGluZy1zdGFydGVkXCI+PGEgaHJlZj1cIiNnZXR0aW5nLXN0YXJ0ZWRcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5HZXR0aW5nIHN0YXJ0ZWQ8L2gyPlxuPGgzIGlkPVwiaW5zdGFsbC1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjaW5zdGFsbC1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPkluc3RhbGwgcGFja2FnZXM8L2gzPlxuPHA+SW5zdGFsbCBwYWNrYWdlcyB3aXRoIDxhIGhyZWY9XCIvZG9jcy9hcGkjaW5zdGFsbFwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsPC9jb2RlPjwvYT4uIEJvd2VyIGluc3RhbGxzIHBhY2thZ2VzIHRvIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlcl9jb21wb25lbnRzLzwvY29kZT4uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsICZsdDtwYWNrYWdlJmd0OzwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxwPkEgcGFja2FnZSBjYW4gYmUgYSBHaXRIdWIgc2hvcnRoYW5kLCBhIEdpdCBlbmRwb2ludCwgYSBVUkwsIGFuZCBtb3JlLiBSZWFkIG1vcmUgYWJvdXQgPGEgaHJlZj1cIi9kb2NzL2FwaS8jaW5zdGFsbFwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsPC9jb2RlPjwvYT4uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiY1wiPiMgaW5zdGFsbHMgdGhlIHByb2plY3QgZGVwZW5kZW5jaWVzIGxpc3RlZCBpbiBib3dlci5qc29uPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGxcbjxzcGFuIGNsYXNzPVwiY1wiPiMgcmVnaXN0ZXJlZCBwYWNrYWdlPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwganF1ZXJ5XG48c3BhbiBjbGFzcz1cImNcIj4jIEdpdEh1YiBzaG9ydGhhbmQ8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBkZXNhbmRyby9tYXNvbnJ5XG48c3BhbiBjbGFzcz1cImNcIj4jIEdpdCBlbmRwb2ludDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGdpdDovL2dpdGh1Yi5jb20vdXNlci9wYWNrYWdlLmdpdFxuPHNwYW4gY2xhc3M9XCJjXCI+IyBVUkw8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBodHRwOi8vZXhhbXBsZS5jb20vc2NyaXB0LmpzPC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPGgzIGlkPVwic2VhcmNoLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNzZWFyY2gtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5TZWFyY2ggcGFja2FnZXM8L2gzPlxuPHA+PGEgaHJlZj1cIi9zZWFyY2hcIj5TZWFyY2ggQm93ZXIgcGFja2FnZXM8L2E+IGFuZCBmaW5kIHRoZSByZWdpc3RlcmVkIHBhY2thZ2UgbmFtZXMgZm9yIHlvdXIgZmF2b3JpdGUgcHJvamVjdHMuPC9wPlxuPGgzIGlkPVwic2F2ZS1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjc2F2ZS1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlNhdmUgcGFja2FnZXM8L2gzPlxuPHA+Q3JlYXRlIGEgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+IGZpbGUgZm9yIHlvdXIgcGFja2FnZSB3aXRoIDxhIGhyZWY9XCIvZG9jcy9jcmVhdGluZy1wYWNrYWdlcy8jYm93ZXJqc29uXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluaXQ8L2NvZGU+PC9hPi48L3A+XG48cD5UaGVuIHNhdmUgbmV3IGRlcGVuZGVuY2llcyB0byB5b3VyIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlci5qc29uPC9jb2RlPiB3aXRoIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsIFBBQ0tBR0UgLS1zYXZlPC9jb2RlPjwvcD5cbjxoMyBpZD1cInVzZS1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjdXNlLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+VXNlIHBhY2thZ2VzPC9oMz5cbjxwPkhvdyB5b3UgdXNlIHBhY2thZ2VzIGlzIHVwIHRvIHlvdS4gV2UgcmVjb21tZW5kIHlvdSB1c2UgQm93ZXIgdG9nZXRoZXIgd2l0aCA8YSBocmVmPVwiL2RvY3MvdG9vbHMvXCI+R3J1bnQsIFJlcXVpcmVKUywgWWVvbWFuLCBhbmQgbG90cyBvZiBvdGhlciB0b29sczwvYT4gb3IgYnVpbGQgeW91ciBvd24gd29ya2Zsb3cgd2l0aCA8YSBocmVmPVwiL2RvY3MvYXBpL1wiPnRoZSBBUEk8L2E+LiBZb3UgY2FuIGFsc28gdXNlIHRoZSBpbnN0YWxsZWQgcGFja2FnZXMgZGlyZWN0bHksIGxpa2UgdGhpcywgaW4gdGhlIGNhc2Ugb2YgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmpxdWVyeTwvY29kZT46PC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCIgZGF0YS1sYW5nPVwiaHRtbFwiPjxzcGFuIGNsYXNzPVwibnRcIj4mbHQ7c2NyaXB0IDwvc3Bhbj48c3BhbiBjbGFzcz1cIm5hXCI+c3JjPTwvc3Bhbj48c3BhbiBjbGFzcz1cInNcIj5cImJvd2VyX2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1wiPC9zcGFuPjxzcGFuIGNsYXNzPVwibnRcIj4mZ3Q7Jmx0Oy9zY3JpcHQmZ3Q7PC9zcGFuPjwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxoMiBpZD1cInR3aXR0ZXItdXBkYXRlcy1mcm9tLWJvd2VyaHR0cHN0d2l0dGVyY29tYm93ZXJcIj48YSBocmVmPVwiI3R3aXR0ZXItdXBkYXRlcy1mcm9tLWJvd2VyaHR0cHN0d2l0dGVyY29tYm93ZXJcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5Ud2l0dGVyIHVwZGF0ZXMgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ib3dlclwiPkBib3dlcjwvYT48L2gyPlxuPHA+PGEgY2xhc3M9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYm93ZXJcIiBkYXRhLXdpZGdldC1pZD1cIjQ4MDM3NzI5MTM2OTc1NDYyNVwiPlR3ZWV0cyBieSBAYm93ZXI8L2E+XG48L3A+XG5cbjwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2Jvd2VyLmlvL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJvcndzZXJTeW5jXCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIEJyb3dzZXJzeW5jIOiuqea1j+iniOWZqOWunuaXtuW/q+mAn+eahOWTjeW6lOWJjeerr+WQhOenjeaWh+S7tueahOabtOaUueW5tuiHquWKqOWIt+aWsOmhtemdou+8jOS6puWPr+WunuaXtuWQjOatpeWQhOS4que7iOerr++8jOaPkOmrmOiHs+WwkTMwJeeahOW8gOWPkeaViOeOh1wiLFxuICAgIGNvbnRlbnQ6IGA8aDEgY2xhc3M9XCJob29rXCI+VGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy48L2gxPjxwIGNsYXNzPVwicm9uc2VhbFwiPkl04oCZcyB3aWNrZWQtZmFzdCBhbmQgdG90YWxseSBmcmVlLjwvcD48cCBjbGFzcz1cInZpZGVvXCI+PGEgY2xhc3M9XCJ2aWRlb19fbGlua1wiIGhyZWY9XCIjXCI+PC9hPjwvcD48cCBjbGFzcz1cImhvdy10b1wiPjwvcD48cCBjbGFzcz1cImhvdy10b19fY29tbWFuZFwiPm5wbSBpbnN0YWxsIC1nIGJyb3dzZXItc3luYzwvcD48cCBjbGFzcz1cImN0YVwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIGhyZWY9XCIjaW5zdGFsbFwiIHRpdGxlPVwiR2V0IFN0YXJ0ZWRcIj5HZXQgU3RhcnRlZDwvYT48L3A+PGRpdiBjbGFzcz1cInBsYXllclwiPjxwPidib25qb3VyPC9wPjwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2Jyb3dzZXJzeW5jLmlvL1wiXG4gICAgfVxufV1cblxubGV0IGluZGV4ID0ge1xuICAgIGZlemRlc2M6IFwiRkVaIOWJjeerr+aooeWdl+WMluW3peeoi+W8gOWPkeahhuaetlwiLFxuICAgIGp1bWJvdHJvbjoge1xuICAgICAgICB0aXRsZTogXCJIZWxsbywgRkVaIEFuZCBSZWFjdCFcIixcbiAgICAgICAgY29udGVudDogXCLov5nmmK/kuIDkuKrkvb/nlKggRkVaIOaehOW7uueahOWJjeerr+aooeWdl+WMluW8gOWPkeekuuS+i++8jOa8lOekuuS6huWfuuS6jlJlYWN05Y2V5paH5Lu257uE5Lu255qE5byA5Y+R57uT5p6E44CCXCIsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViLWFsdFwiPjwvaT4gR2l0SHViYCxcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1cmljLXpoYW8vZmV6XCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGxpc3QgPSB7XG4gICAganVtYm90cm9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkZFWiBBbmQgUmVhY3QgRnJhbWUhXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwi6L+Z5piv5LiA5LiqRkVa5pW05ZCIUmVhY3TnmoTliJfooajlsZXnpLrpobXvvIzor7fngrnlh7vkuIvpnaLliJfooajnmoQgRGV0YWlsIOaMiemSrui/m+WFpeivpuaDhemhtea1j+iniFwiLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIG5hbWU6IFwi5p+l55yL5pu05aSa5L+h5oGvXCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHA6Ly9mZXouaGVzdHVkeS5jb21cIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgY29tbW9uID0ge1xuICAgIHNpdGVOYW1lOiBcIkZFWiBSZWFjdCBERU1PXCIsXG5cbiAgICBuYXZEYXRhOiBbe1xuICAgICAgICBuYW1lOiBcIummlumhtVwiLFxuICAgICAgICBocmVmOiBcImluZGV4Lmh0bWxcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJGRVrln7rmnKzmnrbmnoRcIixcbiAgICAgICAgaHJlZjogXCJsaXN0Lmh0bWxcIlxuICAgIH1dLFxuXG4gICAgZm9vdGVyVGV4dDogXCLCqSAyMDE3IEZFWiDliY3nq6/mqKHlnZfljJblt6XnqIvlvIDlj5HmoYbmnrYgQ3JlYXRlZCBieSBGdXJpYy56aGFvXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiaW5kZXhcIjogaW5kZXgsXG4gICAgXCJsaXN0XCI6IGxpc3QsXG4gICAgXCJmcmFtZXNcIjogZnJhbWVzLFxuICAgIFwiY29tbW9uXCI6IGNvbW1vblxufVxuIiwiaW1wb3J0IFEgZnJvbSAncSdcblxuaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hdkxpc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKEFwaURhdGEuY29tbW9uLm5hdkRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzaXRlTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoQXBpRGF0YS5jb21tb24uc2l0ZU5hbWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJUZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmNvbW1vbi5mb290ZXJUZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxufVxuIiwiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9jb21tb24nXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb290ZXJUZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBTZXJ2aWNlLmZvb3RlclRleHQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmb290ZXJUZXh0OiBkYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoPGZvb3RlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+e3RoaXMuc3RhdGUuZm9vdGVyVGV4dH08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdlaXhpblwiPjwvaT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdlaWJvXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgICA8L2Zvb3Rlcj4pXG5cbiAgICB9XG59KSIsImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJ0bkRhdGE6IHtcbiAgICAgICAgICAgICAgICBzaXRlTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBuYXZMaXN0OiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgUS5hbGwoW1xuICAgICAgICAgICAgU2VydmljZS5zaXRlTmFtZSgpLFxuICAgICAgICAgICAgU2VydmljZS5uYXZMaXN0KClcbiAgICAgICAgXSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJ0bkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2l0ZU5hbWU6IGRhdGFbMF0sXG4gICAgICAgICAgICAgICAgbmF2TGlzdDogZGF0YVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcnRuRGF0YTogcnRuRGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hdkxpc3QgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5zdGF0ZS5ydG5EYXRhLm5hdkxpc3QpIHtcbiAgICAgICAgICAgIG5hdkxpc3QucHVzaCg8bGkga2V5PXtpdGVtLm5hbWV9PjxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0ubmFtZX08L2E+PC9saT4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj57dGhpcy5zdGF0ZS5ydG5EYXRhLnNpdGVOYW1lfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIHtuYXZMaXN0fVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgICAgIClcblxuICAgIH1cbn0pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMMjV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKemNtTXZkbWxsZDNNdmJHbHpkQzlwYm1SbGVDNXFjeUlzSW5OeVl5OTJhV1YzY3k5c2FYTjBMMjF2WkhWc1pTOXFkVzFpYjNSeWIyNHZhVzVrWlhndWFuTWlMQ0p6Y21NdmRtbGxkM012YkdsemRDOXRiMlIxYkdVdmFuVnRZbTkwY205dUwzTmxjblpwWTJVdWFuTWlMQ0p6Y21NdmRtbGxkM012YkdsemRDOXRiMlIxYkdVdmJHbHpkR2x1Wnk5cGJtUmxlQzVxY3lJc0luTnlZeTkyYVdWM2N5OXNhWE4wTDIxdlpIVnNaUzlzYVhOMGFXNW5MM05sY25acFkyVXVhbk1pTENKemNtTXZkbWxsZDNNdmNIVmliR2xqTDJSbGJXOHRaR0YwWVM1cWN5SXNJbk55WXk5MmFXVjNjeTl3ZFdKc2FXTXZiVzlrZFd4bEwyTnZiVzF2Ymk5amIyMXRiMjR1YW5NaUxDSnpjbU12ZG1sbGQzTXZjSFZpYkdsakwyMXZaSFZzWlM5amIyMXRiMjR2Wm05dmRHVnlMbXB6SWl3aWMzSmpMM1pwWlhkekwzQjFZbXhwWXk5dGIyUjFiR1V2WTI5dGJXOXVMMmhsWVdSbGNpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpWVdKbGJDMXlkVzUwYVcxbEwyTnZjbVV0YW5NdloyVjBMV2wwWlhKaGRHOXlMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJKaFltVnNMWEoxYm5ScGJXVXZZMjl5WlMxcWN5OXZZbXBsWTNRdllYTnphV2R1TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwySmhZbVZzTFhKMWJuUnBiV1V2YUdWc2NHVnljeTlsZUhSbGJtUnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzltYmk5blpYUXRhWFJsY21GMGIzSXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMlp1TDI5aWFtVmpkQzloYzNOcFoyNHVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMkV0Wm5WdVkzUnBiMjR1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJGa1pDMTBieTExYm5OamIzQmhZbXhsY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZllXNHRiMkpxWldOMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWhjbkpoZVMxcGJtTnNkV1JsY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlkyeGhjM052Wmk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlkyOW1MbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlqYjNKbExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWpkSGd1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJSbFptbHVaV1F1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJSbGMyTnlhWEIwYjNKekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWtiMjB0WTNKbFlYUmxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlsYm5WdExXSjFaeTFyWlhsekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWxlSEJ2Y25RdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyWmhhV3h6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5bmJHOWlZV3d1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJoaGN5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhR2xrWlM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmFIUnRiQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYVdVNExXUnZiUzFrWldacGJtVXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmx2WW1wbFkzUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmx6TFc5aWFtVmpkQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYVhSbGNpMWpjbVZoZEdVdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybDBaWEl0WkdWbWFXNWxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlwZEdWeUxYTjBaWEF1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJsMFpYSmhkRzl5Y3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmJHbGljbUZ5ZVM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdGemMybG5iaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV055WldGMFpTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXUndMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRaSEJ6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5dlltcGxZM1F0WjI5d2N5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXZHdieTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV3RsZVhNdGFXNTBaWEp1WVd3dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyOWlhbVZqZEMxclpYbHpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRjR2xsTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5d2NtOXdaWEowZVMxa1pYTmpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl5WldSbFptbHVaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYzJWMExYUnZMWE4wY21sdVp5MTBZV2N1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNOb1lYSmxaQzFyWlhrdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgzTm9ZWEpsWkM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmMzUnlhVzVuTFdGMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTBieTFwYm1SbGVDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZkRzh0YVc1MFpXZGxjaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmZEc4dGFXOWlhbVZqZEM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRHOHRiR1Z1WjNSb0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTBieTF2WW1wbFkzUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM1J2TFhCeWFXMXBkR2wyWlM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRXbGtMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTkzYTNNdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlkyOXlaUzVuWlhRdGFYUmxjbUYwYjNJdGJXVjBhRzlrTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDJOdmNtVXVaMlYwTFdsMFpYSmhkRzl5TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDJWek5pNWhjbkpoZVM1cGRHVnlZWFJ2Y2k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5bGN6WXViMkpxWldOMExtRnpjMmxuYmk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5bGN6WXVjM1J5YVc1bkxtbDBaWEpoZEc5eUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwzZGxZaTVrYjIwdWFYUmxjbUZpYkdVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN1FVTkJRVHM3T3p0QlFVTkJPenM3TzBGQlJVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVkQkxFbEJRVWtzVDBGQlR5eG5Ra0ZCVFN4WFFVRk9MRU5CUVd0Q08wRkJRVUU3UVVGRE5VSXNUMEZFTkVJc2IwSkJRMjVDTzBGQlExSXNVMEZEUXp0QlFVRkJPMEZCUVVFN1FVRkRTeXgzUkVGRVREdEJRVVZMTEhWRVFVWk1PMEZCUjBzc2RVUkJTRXc3UVVGSlN6dEJRVXBNTEVkQlJFUTdRVUZSUVR0QlFWWXlRaXhEUVVGc1FpeERRVUZZT3p0QlFXRkJMRzFDUVVGVExFMUJRVlFzUTBGRFF5dzRRa0ZCUXl4SlFVRkVMRTlCUkVRc1JVRkZReXhUUVVGVExHTkJRVlFzUTBGQmQwSXNTMEZCZUVJc1EwRkdSRHM3T3pzN096czdPenM3T3pzN08wRkRkRUpCT3pzN096czdhMEpCUldVc1RVRkJUU3hYUVVGT0xFTkJRV3RDTzBGQlFVRTdRVUZETjBJc2JVSkJSRFpDTERaQ1FVTllPMEZCUTJRc1pVRkJUenRCUVVOSUxESkNRVUZsTzBGQlExZ3NkVUpCUVU4c1JVRkVTVHRCUVVWWUxIbENRVUZUTEVWQlJrVTdRVUZIV0N4M1FrRkJVVHRCUVVOS0xEUkNRVVJKTzBGQlJVb3NNRUpCUVUwN1FVRkdSanRCUVVoSE8wRkJSRm9zVTBGQlVEdEJRVlZJTEV0QldqUkNPMEZCWVRkQ0xIRkNRV0kyUWl3clFrRmhWRHRCUVVGQk96dEJRVVZvUWl3d1FrRkJVU3hWUVVGU0xFZEJRWEZDTEVsQlFYSkNMRU5CUVRCQ0xGVkJRVU1zU1VGQlJDeEZRVUZWTzBGQlEyaERMR3RDUVVGTExGRkJRVXdzUTBGQll6dEJRVU5XTEN0Q1FVRmxMSFZDUVVGakxFVkJRV1FzUlVGQmEwSXNTVUZCYkVJN1FVRkVUQ3hoUVVGa08wRkJSMGdzVTBGS1JEdEJRVXRJTEV0QmNFSTBRanRCUVhGQ04wSXNWVUZ5UWpaQ0xHOUNRWEZDY0VJN1FVRkRUQ3hsUVVOSk8wRkJRVUU3UVVGQlFTeGpRVUZMTEZkQlFWVXNWMEZCWmp0QlFVTktPMEZCUVVFN1FVRkJRU3hyUWtGQlN5eFhRVUZWTEZkQlFXWTdRVUZEU1R0QlFVRkJPMEZCUVVFN1FVRkJTeXg1UWtGQlN5eExRVUZNTEVOQlFWY3NZVUZCV0N4RFFVRjVRanRCUVVFNVFpeHBRa0ZFU2p0QlFVVkpPMEZCUVVFN1FVRkJRVHRCUVVGSkxIbENRVUZMTEV0QlFVd3NRMEZCVnl4aFFVRllMRU5CUVhsQ08wRkJRVGRDTEdsQ1FVWktPMEZCUjBrN1FVRkJRVHRCUVVGQk8wRkJRMGtzSzBOQlFVY3NWMEZCVlN4M1FrRkJZaXhGUVVGelF5eE5RVUZOTEV0QlFVc3NTMEZCVEN4RFFVRlhMR0ZCUVZnc1EwRkJlVUlzVFVGQmVrSXNRMEZCWjBNc1NVRkJOVVVzUlVGQmEwWXNUVUZCU3l4UlFVRjJSaXhGUVVGblJ5eDVRa0ZCZVVJN1FVRkRla2dzYjBOQlFWRXNTMEZCU3l4TFFVRk1MRU5CUVZjc1lVRkJXQ3hEUVVGNVFpeE5RVUY2UWl4RFFVRm5RenRCUVVScFJpeDVRa0ZCZWtnN1FVRkVTanRCUVVoS08wRkJSRWtzVTBGRVNqdEJRV05JTzBGQmNFTTBRaXhEUVVGc1FpeERPenM3T3pzN096czdPMEZEUm1ZN096czdRVUZGUVRzN096czdPMnRDUVVWbE8wRkJRMWdzWTBGRVZ5eDNRa0ZEUlR0QlFVTlVMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hKUVVGU0xFTkJRV0VzVTBGQmNrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTRHRCUVV4VkxFTTdPenM3T3pzN096czdPenM3T3p0QlEwcG1PenM3T3pzN2EwSkJSV1VzVFVGQlRTeFhRVUZPTEVOQlFXdENPMEZCUVVFN1FVRkROMElzYlVKQlJEWkNMRFpDUVVOWU8wRkJRMlFzWlVGQlR6dEJRVU5JTEhGQ1FVRlRPMEZCUkU0c1UwRkJVRHRCUVVkSUxFdEJURFJDTzBGQlRUZENMSEZDUVU0MlFpd3JRa0ZOVkR0QlFVRkJPenRCUVVWb1Fpd3dRa0ZCVVN4VlFVRlNMRWRCUVhGQ0xFbEJRWEpDTEVOQlFUQkNMRlZCUVVNc1NVRkJSQ3hGUVVGVk8wRkJRMmhETEd0Q1FVRkxMRkZCUVV3c1EwRkJZenRCUVVOV0xIbENRVUZUTzBGQlJFTXNZVUZCWkR0QlFVZElMRk5CU2tRN1FVRkxTQ3hMUVdJMFFqdEJRV00zUWl4VlFXUTJRaXh2UWtGamNFSTdRVUZEVEN4WlFVRkpMRlZCUVZVc1JVRkJaRHM3UVVGRVN6dEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRkhUQ3cwUkVGQmFVSXNTMEZCU3l4TFFVRk1MRU5CUVZjc1QwRkJOVUlzTkVkQlFYRkRPMEZCUVVFc2IwSkJRVFZDTEVsQlFUUkNPenRCUVVOcVF5eDNRa0ZCVVN4SlFVRlNMRU5CUVdFN1FVRkJRVHRCUVVGQkxITkNRVUZMTEV0QlFVc3NTMEZCU3l4TFFVRm1MRVZCUVhOQ0xGZEJRVlVzVlVGQmFFTTdRVUZEVkR0QlFVRkJPMEZCUVVFN1FVRkJTeXcyUWtGQlN6dEJRVUZXTEhGQ1FVUlRPMEZCUlZRN1FVRkJRVHRCUVVGQk8wRkJRVWtzTmtKQlFVczdRVUZCVkN4eFFrRkdVenRCUVVkVU8wRkJRVUU3UVVGQlFUdEJRVUZITzBGQlFVRTdRVUZCUVN3NFFrRkJSeXhYUVVGVkxHbENRVUZpTEVWQlFTdENMRTFCUVUwc2NVSkJRWEZDTEV0QlFVc3NSVUZCTDBRc1JVRkJiVVVzVFVGQlN5eFJRVUY0UlR0QlFVRkJPMEZCUVVFN1FVRkJTRHRCUVVoVExHbENRVUZpTzBGQlMwZzdRVUZVU1R0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVmRNTEdWQlEwazdRVUZCUVR0QlFVRkJMR05CUVVzc1YwRkJWU3hYUVVGbU8wRkJRMG83UVVGQlFUdEJRVUZCTEd0Q1FVRkxMRmRCUVZVc1MwRkJaanRCUVVOTE8wRkJSRXdzWVVGRVNUdEJRVWxLTzBGQlNra3NVMEZFU2p0QlFWTklPMEZCYkVNMFFpeERRVUZzUWl4RE96czdPenM3T3pzN096czdPenRCUTBabU96czdPMEZCUlVFN096czdPenRyUWtGRlpUdEJRVU5ZTEdOQlJGY3NkMEpCUTBVN1FVRkRWQ3haUVVGSkxGVkJRVlVzUlVGQlpEdEJRVU5CTEdWQlFVOHNXVUZCUlN4UFFVRkdMRU5CUVZVc1ZVRkJReXhQUVVGRUxFVkJRVlVzVFVGQlZpeEZRVUZ4UWp0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGQlFUczdRVUZGYkVNc1owVkJRV01zYlVKQlFWRXNUVUZCZEVJc05FZEJRVGhDTzBGQlFVRXNkMEpCUVhKQ0xFTkJRWEZDT3p0QlFVTXhRaXgzUWtGQlNTeFhRVUZYTEVWQlFXWTdPMEZCUlVFc05rSkJRVk1zUzBGQlZDeEhRVUZwUWl4RlFVRkZMRXRCUVc1Q08wRkJRMEVzTmtKQlFWTXNTVUZCVkN4SFFVRm5RaXhGUVVGRkxFbEJRV3hDTzBGQlEwRXNOa0pCUVZNc1JVRkJWQ3hIUVVGakxFVkJRVVVzUzBGQmFFSTdPMEZCUlVFc05FSkJRVkVzU1VGQlVpeERRVUZoTEZGQlFXSTdRVUZEU0R0QlFWWnBRenRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFWbHNReXh2UWtGQlVTeFBRVUZTTzBGQlEwZ3NVMEZpVFN4RFFVRlFPMEZCWTBnN1FVRnFRbFVzUXpzN096czdPenM3T3p0QlEwcG1MRWxCUVVrc1UwRkJVeXhEUVVGRE8wRkJRMVlzVjBGQlR5eFJRVVJITzBGQlJWWXNWVUZCVFN3eVJVRkdTVHRCUVVkV0xHdDNSVUZJVlR0QlFUSkVWaXhqUVVGVk8wRkJRMDRzWTBGQlRTeE5RVVJCTzBGQlJVNHNZMEZCVFR0QlFVWkJPMEZCTTBSQkxFTkJRVVFzUlVFclJGWTdRVUZEUXl4WFFVRlBMRXRCUkZJN1FVRkZReXhWUVVGTkxDdEVRVVpRTzBGQlIwTXNjV2hDUVVoRU8wRkJXVU1zWTBGQlZUdEJRVU5PTEdOQlFVMHNUVUZFUVR0QlFVVk9MR05CUVUwN1FVRkdRVHRCUVZwWUxFTkJMMFJWTEVWQkswVldPMEZCUTBNc1YwRkJUeXhOUVVSU08wRkJSVU1zVlVGQlRTeG5SVUZHVUR0QlFVZERMR2xqUVVoRU8wRkJVVU1zWTBGQlZUdEJRVU5PTEdOQlFVMHNUVUZFUVR0QlFVVk9MR05CUVUwN1FVRkdRVHRCUVZKWUxFTkJMMFZWTEVWQk1rWldPMEZCUTBNc1YwRkJUeXhaUVVSU08wRkJSVU1zVlVGQlRTeHRSVUZHVUR0QlFVZERMSGxtUVVoRU8wRkJZVU1zWTBGQlZUdEJRVU5PTEdOQlFVMHNUVUZFUVR0QlFVVk9MR05CUVUwN1FVRkdRVHRCUVdKWUxFTkJNMFpWTEVWQk5FZFdPMEZCUTBNc1YwRkJUeXhQUVVSU08wRkJSVU1zVlVGQlRTd3lSVUZHVUR0QlFVZERMR2wyUzBGSVJEdEJRVEpEUXl4alFVRlZPMEZCUTA0c1kwRkJUU3hOUVVSQk8wRkJSVTRzWTBGQlRUdEJRVVpCTzBGQk0wTllMRU5CTlVkVkxFVkJNa3BXTzBGQlEwTXNWMEZCVHl4aFFVUlNPMEZCUlVNc1ZVRkJUU3gzUlVGR1VEdEJRVWRETERoaVFVaEVPMEZCU1VNc1kwRkJWVHRCUVVOT0xHTkJRVTBzVFVGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVR0QlFVcFlMRU5CTTBwVkxFTkJRV0k3TzBGQmNVdEJMRWxCUVVrc1VVRkJVVHRCUVVOU0xHRkJRVk1zYVVKQlJFUTdRVUZGVWl4bFFVRlhPMEZCUTFBc1pVRkJUeXgxUWtGRVFUdEJRVVZRTEdsQ1FVRlRMQ3REUVVaR08wRkJSMUFzWjBKQlFWRTdRVUZEU2l3MlJFRkVTVHRCUVVWS0xHdENRVUZOTzBGQlJrWTdRVUZJUkR0QlFVWklMRU5CUVZvN08wRkJXVUVzU1VGQlNTeFBRVUZQTzBGQlExQXNaVUZCVnp0QlFVTlFMR1ZCUVU4c2MwSkJSRUU3UVVGRlVDeHBRa0ZCVXl4blJFRkdSanRCUVVkUUxHZENRVUZSTzBGQlEwb3NhMEpCUVUwc1VVRkVSanRCUVVWS0xHdENRVUZOTzBGQlJrWTdRVUZJUkR0QlFVUktMRU5CUVZnN08wRkJWMEVzU1VGQlNTeFRRVUZUTzBGQlExUXNZMEZCVlN4blFrRkVSRHM3UVVGSFZDeGhRVUZUTEVOQlFVTTdRVUZEVGl4alFVRk5MRWxCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0VzUzBGQlJDeEZRVWRPTzBGQlEwTXNZMEZCVFN4VFFVUlFPMEZCUlVNc1kwRkJUVHRCUVVaUUxFdEJTRTBzUTBGSVFUczdRVUZYVkN4blFrRkJXVHRCUVZoSUxFTkJRV0k3TzJ0Q1FXTmxPMEZCUTFnc1lVRkJVeXhMUVVSRk8wRkJSVmdzV1VGQlVTeEpRVVpITzBGQlIxZ3NZMEZCVlN4TlFVaERPMEZCU1Znc1kwRkJWVHRCUVVwRExFTTdPenM3T3pzN096czdRVU14VFdZN096czdRVUZGUVRzN096czdPMnRDUVVWbE8wRkJRMWdzVjBGRVZ5eHhRa0ZEUkR0QlFVTkdMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hOUVVGU0xFTkJRV1VzVDBGQmRrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTQ3hMUVV4Tk8wRkJUVkFzV1VGT1R5eHpRa0ZOU1R0QlFVTlFMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hOUVVGU0xFTkJRV1VzVVVGQmRrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTQ3hMUVZaTk8wRkJWMUFzWTBGWVR5eDNRa0ZYVFR0QlFVTlVMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eHZRa0ZCVVN4dFFrRkJVU3hOUVVGU0xFTkJRV1VzVlVGQmRrSTdRVUZEU0N4VFFVWk5MRU5CUVZBN1FVRkhTRHRCUVdaTkxFTTdPenM3T3pzN096czdPMEZEU21ZN096czdPenRyUWtGRlpTeE5RVUZOTEZkQlFVNHNRMEZCYTBJN1FVRkJRVHRCUVVNM1FpeHRRa0ZFTmtJc05rSkJRMWc3UVVGRFpDeGxRVUZQTzBGQlEwZ3NkMEpCUVZrN1FVRkVWQ3hUUVVGUU8wRkJSMGdzUzBGTU5FSTdRVUZOTjBJc2NVSkJUalpDTEN0Q1FVMVVPMEZCUVVFN08wRkJRMmhDTEhsQ1FVRlJMRlZCUVZJc1IwRkJjVUlzU1VGQmNrSXNRMEZCTUVJc1ZVRkJReXhKUVVGRUxFVkJRVlU3UVVGRGFFTXNhMEpCUVVzc1VVRkJUQ3hEUVVGak8wRkJRMVlzTkVKQlFWazdRVUZFUml4aFFVRmtPMEZCUjBnc1UwRktSRHRCUVV0SUxFdEJXalJDTzBGQllUZENMRlZCWWpaQ0xHOUNRV0Z3UWpzN1FVRkZUQ3hsUVVGUk8wRkJRVUU3UVVGQlFTeGpRVUZSTEZkQlFWVXNWMEZCYkVJN1FVRkRVanRCUVVGQk8wRkJRVUVzYTBKQlFVMHNWMEZCVlN4WFFVRm9RanRCUVVFMlFpeHhRa0ZCU3l4TFFVRk1MRU5CUVZjN1FVRkJlRU1zWVVGRVVUdEJRVVZTTzBGQlFVRTdRVUZCUVN4clFrRkJUU3hYUVVGVkxGbEJRV2hDTzBGQlEwRXNNa05CUVVjc1YwRkJWU3hyUWtGQllpeEhRVVJCTzBGQlJVRXNNa05CUVVjc1YwRkJWU3hwUWtGQllqdEJRVVpCTzBGQlJsRXNVMEZCVWp0QlFWRklPMEZCZGtJMFFpeERRVUZzUWl4RE96czdPenM3T3pzN096czdPenRCUTBabU96czdPMEZCUTBFN096czdPenRyUWtGRlpTeE5RVUZOTEZkQlFVNHNRMEZCYTBJN1FVRkJRVHRCUVVNM1FpeHRRa0ZFTmtJc05rSkJRMWc3UVVGRFpDeGxRVUZQTzBGQlEwZ3NjVUpCUVZNN1FVRkRUQ3d3UWtGQlZTeEZRVVJNTzBGQlJVd3NlVUpCUVZNN1FVRkdTanRCUVVST0xGTkJRVkE3UVVGTlNDeExRVkkwUWp0QlFWTTNRaXh4UWtGVU5rSXNLMEpCVTFRN1FVRkJRVHM3UVVGRGFFSXNiMEpCUVVVc1IwRkJSaXhEUVVGTkxFTkJRMFlzYVVKQlFWRXNVVUZCVWl4RlFVUkZMRVZCUlVZc2FVSkJRVkVzVDBGQlVpeEZRVVpGTEVOQlFVNHNSVUZIUnl4SlFVaElMRU5CUjFFc1ZVRkJReXhKUVVGRUxFVkJRVlU3UVVGRFpDeG5Ra0ZCU1N4VlFVRlZPMEZCUTFZc01FSkJRVlVzUzBGQlN5eERRVUZNTEVOQlJFRTdRVUZGVml4NVFrRkJVeXhMUVVGTExFTkJRVXc3UVVGR1F5eGhRVUZrTzBGQlNVRXNhMEpCUVVzc1VVRkJUQ3hEUVVGak8wRkJRMVlzZVVKQlFWTTdRVUZFUXl4aFFVRmtPMEZCUjBnc1UwRllSRHRCUVZsSUxFdEJkRUkwUWp0QlFYVkNOMElzVlVGMlFqWkNMRzlDUVhWQ2NFSTdRVUZEVEN4WlFVRkpMRlZCUVZVc1JVRkJaRHM3UVVGRVN6dEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRkhUQ3cwUkVGQmFVSXNTMEZCU3l4TFFVRk1MRU5CUVZjc1QwRkJXQ3hEUVVGdFFpeFBRVUZ3UXl3MFIwRkJOa003UVVGQlFTeHZRa0ZCY0VNc1NVRkJiME03TzBGQlEzcERMSGRDUVVGUkxFbEJRVklzUTBGQllUdEJRVUZCTzBGQlFVRXNjMEpCUVVrc1MwRkJTeXhMUVVGTExFbEJRV1E3UVVGQmIwSTdRVUZCUVR0QlFVRkJMREJDUVVGSExFMUJRVTBzUzBGQlN5eEpRVUZrTzBGQlFYRkNMRFpDUVVGTE8wRkJRVEZDTzBGQlFYQkNMR2xDUVVGaU8wRkJRMGc3UVVGTVNUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVU5TUxHVkJRMGs3UVVGQlFUdEJRVUZCTEdOQlFVc3NWMEZCVlN4M1EwRkJaanRCUVVOS08wRkJRVUU3UVVGQlFTeHJRa0ZCU3l4WFFVRlZMRmRCUVdZN1FVRkRTVHRCUVVGQk8wRkJRVUVzYzBKQlFVc3NWMEZCVlN4bFFVRm1PMEZCUTBrN1FVRkJRVHRCUVVGQkxEQkNRVUZSTEUxQlFVc3NVVUZCWWl4RlFVRnpRaXhYUVVGVkxIbENRVUZvUXl4RlFVRXdSQ3hsUVVGWkxGVkJRWFJGTEVWQlFXbEdMR1ZCUVZrc1UwRkJOMFlzUlVGQmRVY3NhVUpCUVdNc1QwRkJja2dzUlVGQk5rZ3NhVUpCUVdNc1VVRkJNMGs3UVVGRFNUdEJRVUZCTzBGQlFVRXNPRUpCUVUwc1YwRkJWU3hUUVVGb1FqdEJRVUZCTzBGQlFVRXNlVUpCUkVvN1FVRkZTU3h6UkVGQlRTeFhRVUZWTEZWQlFXaENMRWRCUmtvN1FVRkhTU3h6UkVGQlRTeFhRVUZWTEZWQlFXaENMRWRCU0VvN1FVRkpTU3h6UkVGQlRTeFhRVUZWTEZWQlFXaENPMEZCU2tvc2NVSkJSRW83UVVGUFNUdEJRVUZCTzBGQlFVRXNNRUpCUVVjc1YwRkJWU3hqUVVGaUxFVkJRVFJDTEUxQlFVc3NSMEZCYWtNN1FVRkJjME1zTmtKQlFVc3NTMEZCVEN4RFFVRlhMRTlCUVZnc1EwRkJiVUk3UVVGQmVrUTdRVUZRU2l4cFFrRkVTanRCUVZWSk8wRkJRVUU3UVVGQlFTeHpRa0ZCU3l4SlFVRkhMRkZCUVZJc1JVRkJhVUlzVjBGQlZTd3dRa0ZCTTBJN1FVRkRTVHRCUVVGQk8wRkJRVUVzTUVKQlFVa3NWMEZCVlN4blFrRkJaRHRCUVVORE8wRkJSRVE3UVVGRVNqdEJRVlpLTzBGQlJFa3NVMEZFU2p0QlFYRkNTRHRCUVc1RU5FSXNRMEZCYkVJc1F6czdPenM3UVVOSVpqczdRVU5CUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzUkNRVHRCUVVOQk8wRkJRMEU3TzBGRFJrRTdRVUZEUVRzN1FVTkVRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5JUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOd1FrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOMFFrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CT3p0QlEwUkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRia0pCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU0VFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVGtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRE5VUkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwNUJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMGhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBoQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRVRUU3TzBGRFFVRTdRVUZEUVR0QlFVTkJPenRCUTBaQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU2tFN1FVRkRRVHRCUVVOQk96dEJRMFpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTFwQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTNKRlFUdEJRVU5CTzBGQlEwRTdPMEZEUmtFN08wRkRRVUU3TzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMmhEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRGVrTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEyWkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMXBCT3p0QlEwRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMXBCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRGFFSkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwNUJPenRCUTBGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRVRUU3TzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFRrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRURUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOb1FrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFRrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMHhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOTVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRURUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTktRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFdFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlExWkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVUVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVGtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEYWtOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwaEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEYUVKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdaU2gwTEc0c2NpbDdablZ1WTNScGIyNGdjeWh2TEhVcGUybG1LQ0Z1VzI5ZEtYdHBaaWdoZEZ0dlhTbDdkbUZ5SUdFOWRIbHdaVzltSUhKbGNYVnBjbVU5UFZ3aVpuVnVZM1JwYjI1Y0lpWW1jbVZ4ZFdseVpUdHBaaWdoZFNZbVlTbHlaWFIxY200Z1lTaHZMQ0V3S1R0cFppaHBLWEpsZEhWeWJpQnBLRzhzSVRBcE8zWmhjaUJtUFc1bGR5QkZjbkp2Y2loY0lrTmhibTV2ZENCbWFXNWtJRzF2WkhWc1pTQW5YQ0lyYnl0Y0lpZGNJaWs3ZEdoeWIzY2daaTVqYjJSbFBWd2lUVTlFVlV4RlgwNVBWRjlHVDFWT1JGd2lMR1o5ZG1GeUlHdzlibHR2WFQxN1pYaHdiM0owY3pwN2ZYMDdkRnR2WFZzd1hTNWpZV3hzS0d3dVpYaHdiM0owY3l4bWRXNWpkR2x2YmlobEtYdDJZWElnYmoxMFcyOWRXekZkVzJWZE8zSmxkSFZ5YmlCektHNC9ianBsS1gwc2JDeHNMbVY0Y0c5eWRITXNaU3gwTEc0c2NpbDljbVYwZFhKdUlHNWJiMTB1Wlhod2IzSjBjMzEyWVhJZ2FUMTBlWEJsYjJZZ2NtVnhkV2x5WlQwOVhDSm1kVzVqZEdsdmJsd2lKaVp5WlhGMWFYSmxPMlp2Y2loMllYSWdiejB3TzI4OGNpNXNaVzVuZEdnN2J5c3JLWE1vY2x0dlhTazdjbVYwZFhKdUlITjlLU0lzSW1sdGNHOXlkQ0JTWldGamRDQm1jbTl0SUNkeVpXRmpkQ2RjY2x4dWFXMXdiM0owSUZKbFlXTjBSRTlOSUdaeWIyMGdKM0psWVdOMExXUnZiU2RjY2x4dVhISmNibWx0Y0c5eWRDQklaV0ZrWlhJZ1puSnZiU0FuY0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dmFHVmhaR1Z5SjF4eVhHNXBiWEJ2Y25RZ1NuVnRZbTkwY205dUlHWnliMjBnSnk0dmJXOWtkV3hsTDJwMWJXSnZkSEp2Ymk5cGJtUmxlQ2RjY2x4dWFXMXdiM0owSUV4cGMzUnBibWNnWm5KdmJTQW5MaTl0YjJSMWJHVXZiR2x6ZEdsdVp5OXBibVJsZUNkY2NseHVhVzF3YjNKMElFWnZiM1JsY2lCbWNtOXRJQ2R3ZFdKc2FXTXZiVzlrZFd4bEwyTnZiVzF2Ymk5bWIyOTBaWEluWEhKY2JseHlYRzVjY2x4dWJHVjBJRkJoWjJVZ1BTQlNaV0ZqZEM1amNtVmhkR1ZEYkdGemN5aDdYSEpjYmx4MGNtVnVaR1Z5S0NrZ2UxeHlYRzVjZEZ4MGNtVjBkWEp1SUNoY2NseHVYSFJjZEZ4MFBHUnBkajVjY2x4dUlDQWdJQ0FnSUNBOFNHVmhaR1Z5SUM4K1hISmNiaUFnSUNBZ0lDQWdQRXAxYldKdmRISnZiaUF2UGx4eVhHNGdJQ0FnSUNBZ0lEeE1hWE4wYVc1bklDOCtYSEpjYmlBZ0lDQWdJQ0FnUEVadmIzUmxjaUF2UGx4eVhHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4eVhHNWNkRngwS1Z4eVhHNWNkSDFjY2x4dWZTbGNjbHh1WEhKY2JsSmxZV04wUkU5TkxuSmxibVJsY2loY2NseHVYSFE4VUdGblpTQXZQaXhjY2x4dVhIUmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbllYQndKeWxjY2x4dUtTSXNJbWx0Y0c5eWRDQlRaWEoyYVdObElHWnliMjBnSnk0dmMyVnlkbWxqWlNkY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVmhZM1F1WTNKbFlYUmxRMnhoYzNNb2UxeHVJQ0FnSUdkbGRFbHVhWFJwWVd4VGRHRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3AxYldKdmRISnZia1JoZEdFNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhWFJzWlRvZ1hDSmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpXNTBPaUJjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmpvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbE9pQmdZQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FISmxaam9nWENKY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNGdJQ0FnWTI5dGNHOXVaVzUwUkdsa1RXOTFiblFvS1NCN1hHNWNiaUFnSUNBZ0lDQWdVMlZ5ZG1salpTNXlaVzVrWlhKRVlYUmhLQ2t1ZEdobGJpZ29aR0YwWVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYW5WdFltOTBjbTl1UkdGMFlUb2dUMkpxWldOMExtRnpjMmxuYmloN2ZTd2daR0YwWVNsY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlN4Y2JpQWdJQ0J5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpUbUZ0WlQxY0ltcDFiV0p2ZEhKdmJsd2lQbHh1SUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52Ym5SaGFXNWxjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR2d4UG50MGFHbHpMbk4wWVhSbExtcDFiV0p2ZEhKdmJrUmhkR0V1ZEdsMGJHVjlQQzlvTVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHh3UG50MGFHbHpMbk4wWVhSbExtcDFiV0p2ZEhKdmJrUmhkR0V1WTI5dWRHVnVkSDA4TDNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4Y0Q1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQmpiR0Z6YzA1aGJXVTlYQ0ppZEc0Z1luUnVMWEJ5YVcxaGNua2dZblJ1TFd4blhDSWdhSEpsWmoxN2RHaHBjeTV6ZEdGMFpTNXFkVzFpYjNSeWIyNUVZWFJoTG1KMWRIUnZiaTVvY21WbWZTQnliMnhsUFZ3aVluVjBkRzl1WENJZ1pHRnVaMlZ5YjNWemJIbFRaWFJKYm01bGNraFVUVXc5ZTN0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZlgyaDBiV3c2SUhSb2FYTXVjM1JoZEdVdWFuVnRZbTkwY205dVJHRjBZUzVpZFhSMGIyNHVibUZ0WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmWDArUEM5aFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5d1BseHVJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdLVnh1WEc0Z0lDQWdmVnh1ZlNraUxDSnBiWEJ2Y25RZ1VTQm1jbTl0SUNkeEoxeHVYRzVwYlhCdmNuUWdRWEJwUkdGMFlTQm1jbTl0SUNkd2RXSnNhV012WkdWdGJ5MWtZWFJoSjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnY21WdVpHVnlSR0YwWVNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGRXVVSEp2YldselpTZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtFRndhVVJoZEdFdWJHbHpkQzVxZFcxaWIzUnliMjRwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRk5sY25acFkyVWdabkp2YlNBbkxpOXpaWEoyYVdObEoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlNaV0ZqZEM1amNtVmhkR1ZEYkdGemN5aDdYRzRnSUNBZ1oyVjBTVzVwZEdsaGJGTjBZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdsemRHbHVaem9nVzExY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNGdJQ0FnWTI5dGNHOXVaVzUwUkdsa1RXOTFiblFvS1NCN1hHNWNiaUFnSUNBZ0lDQWdVMlZ5ZG1salpTNXlaVzVrWlhKRVlYUmhLQ2t1ZEdobGJpZ29aR0YwWVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdsemRHbHVaem9nWkdGMFlWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNCOUxGeHVJQ0FnSUhKbGJtUmxjaWdwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR3hwYzNScGJtY2dQU0JiWFZ4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHbDBaVzBnYjJZZ2RHaHBjeTV6ZEdGMFpTNXNhWE4wYVc1bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc2FYTjBhVzVuTG5CMWMyZ29QR1JwZGlCclpYazllMmwwWlcwdWRHbDBiR1Y5SUdOc1lYTnpUbUZ0WlQxY0ltTnZiQzF0WkMwMFhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2d5UG50cGRHVnRMblJwZEd4bGZUd3ZhREkrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhBK2UybDBaVzB1WkdWelkzMDhMM0ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhBK1BHRWdZMnhoYzNOT1lXMWxQVndpWW5SdUlHSjBiaTFrWldaaGRXeDBYQ0lnYUhKbFpqMTdKMkZ5ZEdsamJHVXVhSFJ0YkQ5cFpEMG5JQ3NnYVhSbGJTNXBaSDBnY205c1pUMWNJbUoxZEhSdmJsd2lQa1JsZEdGcGJEd3ZZVDQ4TDNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNHBYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSmpiMjUwWVdsdVpYSmNJajVjYmlBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0p5YjNkY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUh0c2FYTjBhVzVuZlZ4dUlDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnUEdoeUlDOCtYRzRnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUNsY2JseHVJQ0FnSUgxY2JuMHBJaXdpYVcxd2IzSjBJRUZ3YVVSaGRHRWdabkp2YlNBbmNIVmliR2xqTDJSbGJXOHRaR0YwWVNkY2JseHVhVzF3YjNKMElGRWdabkp2YlNBbmNTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lISmxibVJsY2tSaGRHRW9LU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlkRzVFWVhSaElEMGdXMTFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRkV1VUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUhZZ2IyWWdRWEJwUkdGMFlTNW1jbUZ0WlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWkdGMFlVbDBaVzBnUFNCN2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0YwWVVsMFpXMHVkR2wwYkdVZ1BTQjJMblJwZEd4bFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZVWwwWlcwdVpHVnpZeUE5SUhZdVpHVnpZMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JoZEdGSmRHVnRMbWxrSUQwZ2RpNTBhWFJzWlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NuUnVSR0YwWVM1d2RYTm9LR1JoZEdGSmRHVnRLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0hKMGJrUmhkR0VwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dWZWeHVJaXdpYkdWMElHWnlZVzFsY3lBOUlGdDdYRzRnSUNBZ2RHbDBiR1U2SUZ3aVRtOWtaV3B6WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVwNkU1YnU2NVp5b0lFNXZaR1ZLVXlEbG43cmt1bzRnUTJoeWIyMWxJRlk0SU9XOGxlYVRqdWVhaENCS1lYWmhVMk55YVhCMElPaS9rT2loak9lT3IrV2lnKys4ak9XRnR1UzZpK1M3dHVtcHNlV0txT21kbnVtWXUrV2hudWVhaE9lSnVlYUFwKys4ak9hZWdlV0Z0dVcvcSttQW4rZWFoT2U4bHVpdmtlV0pqZWVycitXUWhPZW5qZWkxaE9hNmtGd2lMRnh1SUNBZ0lHTnZiblJsYm5RNklHQThaR2wySUdsa1BWd2lhRzl0WlMxcGJuUnliMXdpUGx4dVhHNGdJQ0FnSUNBZ0lEeHdQazV2WkdVdWFuUENyaUJwY3lCaElFcGhkbUZUWTNKcGNIUWdjblZ1ZEdsdFpTQmlkV2xzZENCdmJpQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OWtaWFpsYkc5d1pYSnpMbWR2YjJkc1pTNWpiMjB2ZGpndlhDSStRMmh5YjIxbEozTWdWamdnU21GMllWTmpjbWx3ZENCbGJtZHBibVU4TDJFK0xseHVUbTlrWlM1cWN5QjFjMlZ6SUdGdUlHVjJaVzUwTFdSeWFYWmxiaXdnYm05dUxXSnNiMk5yYVc1bklFa3ZUeUJ0YjJSbGJDQjBhR0YwSUcxaGEyVnpJR2wwWEc1c2FXZG9kSGRsYVdkb2RDQmhibVFnWldabWFXTnBaVzUwTGlCT2IyUmxMbXB6SnlCd1lXTnJZV2RsSUdWamIzTjVjM1JsYlN3Z1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmQzZDNMbTV3YldwekxtTnZiUzljSWo1dWNHMDhMMkUrTENCcGN5QjBhR1VnYkdGeVoyVnpkQ0JsWTI5emVYTjBaVzBnYjJZZ2IzQmxibHh1YzI5MWNtTmxJR3hwWW5KaGNtbGxjeUJwYmlCMGFHVWdkMjl5YkdRdVBDOXdQbHh1WEc1Y2JseHVJQ0FnSUNBZ0lDQThhRElnYVdROVhDSm9iMjFsTFdSdmQyNXNiMkZrYUdWaFpGd2lJR1JoZEdFdFpHd3RiRzlqWVd3OVhDSkViM2R1Ykc5aFpDQm1iM0pjSWo1RWIzZHViRzloWkNCbWIzSWdiV0ZqVDFNZ0tIZzJOQ2s4TDJneVBseHVYRzRnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKb2IyMWxMV1J2ZDI1c2IyRmtZbXh2WTJ0Y0lqNWNibHh1SUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpHbHpkQzkyTmk0eE1DNHdMMjV2WkdVdGRqWXVNVEF1TUM1d2EyZGNJaUJqYkdGemN6MWNJbWh2YldVdFpHOTNibXh2WVdSaWRYUjBiMjVjSWlCMGFYUnNaVDFjSWtSdmQyNXNiMkZrSUhZMkxqRXdMakFnVEZSVFhDSWdaR0YwWVMxMlpYSnphVzl1UFZ3aWRqWXVNVEF1TUZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZGpZdU1UQXVNQ0JNVkZOY2JpQWdJQ0FnSUNBZ0lDQWdJRHh6YldGc2JENVNaV052YlcxbGJtUmxaQ0JHYjNJZ1RXOXpkQ0JWYzJWeWN6d3ZjMjFoYkd3K1hHNGdJQ0FnSUNBZ0lDQWdQQzloUGx4dVhHNGdJQ0FnSUNBZ0lDQWdQSFZzSUdOc1lYTnpQVndpYkdsemRDMWthWFpwWkdWeUxYQnBjR1VnYUc5dFpTMXpaV052Ym1SaGNua3RiR2x1YTNOY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmJtOWtaV3B6TG05eVp5OWxiaTlrYjNkdWJHOWhaQzljSWo1UGRHaGxjaUJFYjNkdWJHOWhaSE04TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyNXZaR1ZxY3k5dWIyUmxMMkpzYjJJdmJXRnpkR1Z5TDJSdll5OWphR0Z1WjJWc2IyZHpMME5JUVU1SFJVeFBSMTlXTmk1dFpDTTJMakV3TGpCY0lqNURhR0Z1WjJWc2IyYzhMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTl1YjJSbGFuTXViM0puTDJScGMzUXZiR0YwWlhOMExYWTJMbmd2Wkc5amN5OWhjR2t2WENJK1FWQkpJRVJ2WTNNOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUR3dmRXdytYRzVjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzVjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2lhRzl0WlMxa2IzZHViRzloWkdKc2IyTnJYQ0krWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMjV2WkdWcWN5NXZjbWN2WkdsemRDOTJOeTQzTGpFdmJtOWtaUzEyTnk0M0xqRXVjR3RuWENJZ1kyeGhjM005WENKb2IyMWxMV1J2ZDI1c2IyRmtZblYwZEc5dVhDSWdkR2wwYkdVOVhDSkViM2R1Ykc5aFpDQjJOeTQzTGpFZ1EzVnljbVZ1ZEZ3aUlHUmhkR0V0ZG1WeWMybHZiajFjSW5ZM0xqY3VNVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyTnk0M0xqRWdRM1Z5Y21WdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMyMWhiR3crVEdGMFpYTjBJRVpsWVhSMWNtVnpQQzl6YldGc2JENWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dllUNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelBWd2liR2x6ZEMxa2FYWnBaR1Z5TFhCcGNHVWdhRzl0WlMxelpXTnZibVJoY25rdGJHbHVhM05jSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyNXZaR1ZxY3k1dmNtY3ZaVzR2Wkc5M2JteHZZV1F2WTNWeWNtVnVkQzljSWo1UGRHaGxjaUJFYjNkdWJHOWhaSE04TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDI1dlpHVnFjeTl1YjJSbEwySnNiMkl2YldGemRHVnlMMlJ2WXk5amFHRnVaMlZzYjJkekwwTklRVTVIUlV4UFIxOVdOeTV0WkNNM0xqY3VNVndpUGtOb1lXNW5aV3h2Wnp3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpHbHpkQzlzWVhSbGMzUXRkamN1ZUM5a2IyTnpMMkZ3YVM5Y0lqNUJVRWtnUkc5amN6d3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNWNiaUFnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQSEErWEc0Z0lDQWdJQ0FnSUNBZ1QzSWdhR0YyWlNCaElHeHZiMnNnWVhRZ2RHaGxJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Ym05a1pXcHpMMHhVVXlOc2RITXRjMk5vWldSMWJHVmNJajVNVkZNZ2MyTm9aV1IxYkdVdVBDOWhQbHh1SUNBZ0lDQWdJQ0E4TDNBK1hHNGdJQ0FnSUNBOEwyUnBkajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0hNNkx5OXViMlJsYW5NdWIzSm5MMXdpWEc0Z0lDQWdmVnh1ZlN3Z2UxeHVJQ0FnSUhScGRHeGxPaUJjSWs1UVRWd2lMRnh1SUNBZ0lHUmxjMk02SUZ3aVJrVmFJT1M5ditlVXFDQk9VRTBnNW82bDVZV2w1WVdvNTVDRDVweUE1YVNuNTVxRTVieUE1cnFRNTVTZjVvQ0I1N083NTd1Zjc3eU01WVczNWFTSDVwZWc2Wm1RNTVxRTVZcWY2SU85NW9tcDViR1Y2SU85NVlxYjc3eU01WSt2NXBXMDVaQ0k1WnU5NlptRjVZbU41cksvNTVxRTVieUE1cnFRNXFHRzVwNjI3N3lNNllDQzVicVU1NTZzNW9HdjVMaUg1WStZNTVxRTVvcUE1cHl2NXB1MDVwdS9YQ0lzWEc0Z0lDQWdZMjl1ZEdWdWREb2dZRHhvTVNCamJHRnpjejFjSW5ScGRHeGxJR1Z0TFdSbFptRjFiSFFnZEhsd1pTMXVaWFYwY21Gc0xURXhYQ0krWEc0Z0lDQWdJQ0FnSUNBZ1FuVnBiR1FnWVcxaGVtbHVaeUIwYUdsdVozTmNiaUFnSUNBZ0lDQWdQQzlvTVQ1Y2JpQWdJQ0FnSUNBZ1BIQWdZMnhoYzNNOVhDSm9OU0JsYlMxa1pXWmhkV3gwSUhSNWNHVXRibVYxZEhKaGJDMHhNU0J3WW5oc1hDSStYRzRnSUNBZ0lDQWdJQ0FnYm5CdElHbHpJSFJvWlNCd1lXTnJZV2RsSUcxaGJtRm5aWElnWm05eUlFcGhkbUZUWTNKcGNIUXVJRVpwYm1Rc0lITm9ZWEpsTENCaGJtUWdjbVYxYzJWY2JpQWdJQ0FnSUNBZ0lDQndZV05yWVdkbGN5QnZaaUJqYjJSbElHWnliMjBnYUhWdVpISmxaSE1nYjJZZ2RHaHZkWE5oYm1SeklHOW1JR1JsZG1Wc2IzQmxjbk1nNG9DVUlHRnVaRnh1SUNBZ0lDQWdJQ0FnSUdGemMyVnRZbXhsSUhSb1pXMGdhVzRnY0c5M1pYSm1kV3dnYm1WM0lIZGhlWE11WEc0Z0lDQWdJQ0FnSUR3dmNENWNiaUFnSUNBZ0lDQWdQR0VnYVdROVhDSnRZV2x1TFdOMFlWd2lJR2h5WldZOVhDSWpjR0Z1WlMxb2IyMWxjR0ZuWlMxd2NtbGphVzVuWENJZ1kyeGhjM005WENKaWRHNGdZblJ1TFdocFoyaHNhV2RvZEMweklHMXliRndpSUdSaGRHRXRaWFpsYm5RdGJtRnRaVDFjSW1odmJXVndZV2RsTFdobGNtOHRZM1JoWENJK1IyVjBJSE4wWVhKMFpXUThMMkUrWUN4Y2JpQWdJQ0IyYVdWM1RXOXlaVG9nZTF4dUlDQWdJQ0FnSUNCMFpYaDBPaUJjSXVhYnRPV2ttdVMvb2VhQnIxd2lMRnh1SUNBZ0lDQWdJQ0JvY21WbU9pQmNJbWgwZEhCek9pOHZkM2QzTG01d2JXcHpMbU52YlM5Y0lseHVJQ0FnSUgxY2JuMHNJSHRjYmlBZ0lDQjBhWFJzWlRvZ1hDSkhkV3h3WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVwVzA1WkNJUjNWc2NPZWFoT1M4bCtXa211YVBrdVM3dHUrOGpPZThsdWl2a2VPQWdlUzhtT1dNbHVXU2pPZTdoT2U3aCtXSmplZXJyK1dramVhZGd1ZWFoT2Fvb2VXZGwrV1BpdW1kbWVhQWdlaTFoT2E2a08rOGpPV1duZWVkZ09XUHIrUzVrT1dFditPQWdlV1R2T2VkZ09Xd2orYWJzdVdFdisrOGpPaUhxdVdLcU9XTWx1V3VqT2FJa09XSmplZXJyK1drcCttSGorbUhqZVdramVXM3BlUzluRndpTEZ4dUlDQWdJR052Ym5SbGJuUTZJR0E4YURFZ1kyeGhjM005WENKb1pXRmthVzVuSUhSbGVIUXRZMlZ1ZEdWeVhDSStRWFYwYjIxaGRHVWdZVzVrSUdWdWFHRnVZMlVnZVc5MWNpQjNiM0pyWm14dmR6d3ZhREUrUEdneUlHTnNZWE56UFZ3aWNHRnlZV2R5WVhCb1hDSStYRzRnSUNBZ0lDQWdJQ0FnWjNWc2NDQnBjeUJoSUhSdmIyeHJhWFFnWm05eUlHRjFkRzl0WVhScGJtY2djR0ZwYm1aMWJDQnZjaUIwYVcxbExXTnZibk4xYldsdVp5QjBZWE5yY3lCcGJpQjViM1Z5SUdSbGRtVnNiM0J0Wlc1MElIZHZjbXRtYkc5M0xDQnpieUI1YjNVZ1kyRnVJSE4wYjNBZ2JXVnpjMmx1WnlCaGNtOTFibVFnWVc1a0lHSjFhV3hrSUhOdmJXVjBhR2x1Wnk1Y2JpQWdJQ0FnSUNBZ1BDOW9NajQ4WkdsMklHTnNZWE56UFZ3aVkzUmhjMXdpUGx4dUlDQWdJQ0FnSUNBZ0lEeGhJR05zWVhOelBWd2lZM1JoY3kxaWRYUjBiMjVjSWlCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkMWJIQnFjeTluZFd4d0wySnNiMkl2YldGemRHVnlMMlJ2WTNNdloyVjBkR2x1WnkxemRHRnlkR1ZrTG0xa1hDSStSMlYwSUZOMFlYSjBaV1E4TDJFK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUG1Bc1hHNGdJQ0FnZG1sbGQwMXZjbVU2SUh0Y2JpQWdJQ0FnSUNBZ2RHVjRkRG9nWENMbW03VGxwSnJrdjZIbWdhOWNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd09pOHZaM1ZzY0dwekxtTnZiUzljSWx4dUlDQWdJSDFjYm4wc0lIdGNiaUFnSUNCMGFYUnNaVG9nWENKQ2NtOTNjMlZ5YVdaNVhDSXNYRzRnSUNBZ1pHVnpZem9nWENKR1JWb2c1TDIvNTVTb0lFSnliM2R6WlhKcFpua2c1cWloNVoyWDVZeVc1N3VFNTd1SDVaS001NjZoNTVDRzZhRzU1NXV1NTVxRTVaQ0U1TGlxNVlxZjZJTzk1cWloNVoyWDc3eU01cDZCNWFTbjVvK1E1WTJINmFHNTU1dXU1NXFFNVkrdjU3dTA1b3FrNW9DbjQ0Q0I1WXFmNklPOTVhU041NVNvNW9Dbjc3eU01Ym0yNWE2ZTU0Nnc1NmV2NXB5bzVieVA1NXFFNXBDdDVidTY1NzJSNmFHMVhDSXNYRzRnSUNBZ1kyOXVkR1Z1ZERvZ1lEeHpaV04wYVc5dUlHbGtQVndpZEc5d0xXaHZiV1V0YzJWamRHbHZibHdpSUdOc1lYTnpQVndpZEc5d0xYTmxZM1JwYjI0Z1kyOXNiM0l0WVZ3aVBseHVJQ0FnSUNBZ1BHUnBkaUJwWkQxY0luUnZjQzFvYjIxbExXbHRZV2RsWENJK1BDOWthWFkrWEc1Y2JpQWdJQ0FnSUNBOGFETWdhV1E5WENKMGIzQXRjM1ZpZEdsMGJHVmNJaUJqYkdGemN6MWNJbXhoY21kbExXWnZiblJjSWo1Q2NtOTNjMlZ5YVdaNUlHeGxkSE1nZVc5MUlISmxjWFZwY21Vb1BITndZVzRnWTJ4aGMzTTlYQ0pqYjJ4dmNpMWtYQ0krSjIxdlpIVnNaWE1uUEM5emNHRnVQaWtnYVc0Z2RHaGxJR0p5YjNkelpYSWdZbmtnWW5WdVpHeHBibWNnZFhBZ1lXeHNJRzltSUhsdmRYSWdaR1Z3Wlc1a1pXNWphV1Z6TGp3dmFETStYRzRnSUNBZ0lDQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMM04xWW5OMFlXTnJMMjV2WkdVdFluSnZkM05sY21sbWVTTjFjMkZuWlZ3aVBseHVJQ0FnSUNBZ0lDQThZblYwZEc5dUlHTnNZWE56UFZ3aWRHOXdMV0oxZEhSdmJsd2lJR2xrUFZ3aWRHOXdMV0oxZEhSdmJqSmNJajVjYmlBZ0lDQWdJQ0FnSUNCRWIyTjFiV1Z1ZEdGMGFXOXVYRzRnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lDQWdQQzloUGx4dUlDQWdJRHd2YzJWamRHbHZiajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0RvdkwySnliM2R6WlhKcFpua3ViM0puTDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrSnZkMlZ5WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVZK3Y2WVdONTcydTVMMi81NVNvSUVKdmQyVnlJT2FRbk9lMG91T0FnZVd1aWVpamhlT0FnZWFidE9hV3NPV1NqT1dOdU9pOXZlV21na3BoZG1GVFkzSnBjSFRqZ0lGRFUxUGt1WXZuc2J2bm1vVG52WkhudTV6b3RZVG11cER2dkl6cGdKcm92NGZvaDZybGlxamxqSmJtczZqbGhhWG1pb0RtbksvbHJvem52bzdvcDZQbGhyUGxwSTNtbllMbm1vVG1vWWJtbnJibGpJWG5ycUhua0licGw2N3BvcGhjSWl4Y2JpQWdJQ0JqYjI1MFpXNTBPaUJnUEdScGRpQmpiR0Z6Y3oxY0ltMWhhVzVjSWo1Y2JqeHdJR05zWVhOelBWd2liR1ZoWkZ3aVBsZGxZaUJ6YVhSbGN5QmhjbVVnYldGa1pTQnZaaUJzYjNSeklHOW1JSFJvYVc1bmN5RGlnSlFnWm5KaGJXVjNiM0pyY3l3Z2JHbGljbUZ5YVdWekxDQmhjM05sZEhNc0lHRnVaQ0IxZEdsc2FYUnBaWE11SUVKdmQyVnlJRzFoYm1GblpYTWdZV3hzSUhSb1pYTmxJSFJvYVc1bmN5Qm1iM0lnZVc5MUxqd3ZjRDVjYmp4d1BrdGxaWEJwYm1jZ2RISmhZMnNnYjJZZ1lXeHNJSFJvWlhObElIQmhZMnRoWjJWeklHRnVaQ0J0WVd0cGJtY2djM1Z5WlNCMGFHVjVJR0Z5WlNCMWNDQjBieUJrWVhSbElDaHZjaUJ6WlhRZ2RHOGdkR2hsSUhOd1pXTnBabWxqSUhabGNuTnBiMjV6SUhsdmRTQnVaV1ZrS1NCcGN5QjBjbWxqYTNrdUlFSnZkMlZ5SUhSdklIUm9aU0J5WlhOamRXVWhQQzl3UGx4dVBIQStRbTkzWlhJZ1kyRnVJRzFoYm1GblpTQmpiMjF3YjI1bGJuUnpJSFJvWVhRZ1kyOXVkR0ZwYmlCSVZFMU1MQ0JEVTFNc0lFcGhkbUZUWTNKcGNIUXNJR1p2Ym5SeklHOXlJR1YyWlc0Z2FXMWhaMlVnWm1sc1pYTXVJRUp2ZDJWeUlHUnZaWE51NG9DWmRDQmpiMjVqWVhSbGJtRjBaU0J2Y2lCdGFXNXBabmtnWTI5a1pTQnZjaUJrYnlCaGJubDBhR2x1WnlCbGJITmxJQzBnYVhRZ2FuVnpkQ0JwYm5OMFlXeHNjeUIwYUdVZ2NtbG5hSFFnZG1WeWMybHZibk1nYjJZZ2RHaGxJSEJoWTJ0aFoyVnpJSGx2ZFNCdVpXVmtJR0Z1WkNCMGFHVnBjaUJrWlhCbGJtUmxibU5wWlhNdVBDOXdQbHh1UEhBK1ZHOGdQR0VnYUhKbFpqMWNJaU5uWlhSMGFXNW5MWE4wWVhKMFpXUmNJajVuWlhRZ2MzUmhjblJsWkR3dllUNHNJRUp2ZDJWeUlIZHZjbXR6SUdKNUlHWmxkR05vYVc1bklHRnVaQ0JwYm5OMFlXeHNhVzVuSUR4aElHaHlaV1k5WENJdmMyVmhjbU5vWENJK2NHRmphMkZuWlhNOEwyRStJR1p5YjIwZ1lXeHNJRzkyWlhJc0lIUmhhMmx1WnlCallYSmxJRzltSUdoMWJuUnBibWNzSUdacGJtUnBibWNzSUdSdmQyNXNiMkZrYVc1bkxDQmhibVFnYzJGMmFXNW5JSFJvWlNCemRIVm1aaUI1YjNYaWdKbHlaU0JzYjI5cmFXNW5JR1p2Y2k0Z1FtOTNaWElnYTJWbGNITWdkSEpoWTJzZ2IyWWdkR2hsYzJVZ2NHRmphMkZuWlhNZ2FXNGdZU0J0WVc1cFptVnpkQ0JtYVd4bExDQThZU0JvY21WbVBWd2lMMlJ2WTNNdlkzSmxZWFJwYm1jdGNHRmphMkZuWlhNdkkySnZkMlZ5YW5OdmJsd2lQanhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2k1cWMyOXVQQzlqYjJSbFBqd3ZZVDR1SUVodmR5QjViM1VnZFhObElEeGhJR2h5WldZOVhDSXZjMlZoY21Ob1hDSStjR0ZqYTJGblpYTThMMkUrSUdseklIVndJSFJ2SUhsdmRTNGdRbTkzWlhJZ2NISnZkbWxrWlhNZ2FHOXZhM01nZEc4Z1ptRmphV3hwZEdGMFpTQjFjMmx1WnlCd1lXTnJZV2RsY3lCcGJpQjViM1Z5SUR4aElHaHlaV1k5WENJdlpHOWpjeTkwYjI5c2Mxd2lQblJ2YjJ4eklHRnVaQ0IzYjNKclpteHZkM004TDJFK0xqd3ZjRDVjYmp4d1BrSnZkMlZ5SUdseklHOXdkR2x0YVhwbFpDQm1iM0lnZEdobElHWnliMjUwTFdWdVpDNGdTV1lnYlhWc2RHbHdiR1VnY0dGamEyRm5aWE1nWkdWd1pXNWtJRzl1SUdFZ2NHRmphMkZuWlNBdElHcFJkV1Z5ZVNCbWIzSWdaWGhoYlhCc1pTQXRJRUp2ZDJWeUlIZHBiR3dnWkc5M2JteHZZV1FnYWxGMVpYSjVJR3AxYzNRZ2IyNWpaUzRnVkdocGN5QnBjeUJyYm05M2JpQmhjeUJoSUdac1lYUWdaR1Z3Wlc1a1pXNWplU0JuY21Gd2FDQmhibVFnYVhRZ2FHVnNjSE1nY21Wa2RXTmxJSEJoWjJVZ2JHOWhaQzQ4TDNBK1hHNDhhRElnYVdROVhDSnBibk4wWVd4c0xXSnZkMlZ5WENJK1BHRWdhSEpsWmoxY0lpTnBibk4wWVd4c0xXSnZkMlZ5WENJZ1kyeGhjM005WENKb1pXRmtaWEl0WVc1amFHOXlYQ0krd3FjOEwyRStTVzV6ZEdGc2JDQkNiM2RsY2p3dmFESStYRzQ4Y0Q1Q2IzZGxjaUJwY3lCaElHTnZiVzFoYm1RZ2JHbHVaU0IxZEdsc2FYUjVMaUJKYm5OMFlXeHNJR2wwSUhkcGRHZ2dibkJ0TGp3dmNENWNianhtYVdkMWNtVWdZMnhoYzNNOVhDSm9hV2RvYkdsbmFIUmNJajQ4Y0hKbFBqeGpiMlJsSUdOc1lYTnpQVndpYkdGdVozVmhaMlV0WW1GemFGd2lJR1JoZEdFdGJHRnVaejFjSW1KaGMyaGNJajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrYm5CdElHbHVjM1JoYkd3Z0xXY2dZbTkzWlhJOEwyTnZaR1UrUEM5d2NtVStQQzltYVdkMWNtVStYRzQ4Y0Q1Q2IzZGxjaUJ5WlhGMWFYSmxjeUE4WVNCb2NtVm1QVndpYUhSMGNEb3ZMMjV2WkdWcWN5NXZjbWN2WENJK2JtOWtaU3dnYm5CdFBDOWhQaUJoYm1RZ1BHRWdhSEpsWmoxY0ltaDBkSEE2THk5bmFYUXRjMk50TG05eVoxd2lQbWRwZER3dllUNHVQQzl3UGx4dVBIQStUR0YwWlhOMElISmxiR1ZoYzJVNklEeGhJR2h5WldZOVhDSmNJajQ4YVcxbklITnlZejFjSW1oMGRIQnpPaTh2YVcxbkxuTm9hV1ZzWkhNdWFXOHZibkJ0TDNZdlltOTNaWEl1YzNablAyMWhlRUZuWlQweU5Ua3lNREF3WENJZ1lXeDBQVndpWW05M1pYSWdkbVZ5YzJsdmJsd2lQand2WVQ0OEwzQStYRzQ4Y0Q1R2IzSWdkSEp2ZFdKc1pYTm9iMjkwYVc1bklHbHVjM1JoYkd4aGRHbHZiaUJ2YmlCa2FXWm1aWEpsYm5RZ2NHeGhkR1p2Y20xekxDQnlaV0ZrSUhSb1pTQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkp2ZDJWeUwySnZkMlZ5TDNkcGEya3ZWSEp2ZFdKc1pYTm9iMjkwYVc1blhDSStkSEp2ZFdKc1pYTm9iMjkwYVc1blBDOWhQaUIzYVd0cElIQmhaMlV1UEM5d1BseHVQR2d5SUdsa1BWd2laMlYwZEdsdVp5MXpkR0Z5ZEdWa1hDSStQR0VnYUhKbFpqMWNJaU5uWlhSMGFXNW5MWE4wWVhKMFpXUmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1SFpYUjBhVzVuSUhOMFlYSjBaV1E4TDJneVBseHVQR2d6SUdsa1BWd2lhVzV6ZEdGc2JDMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqYVc1emRHRnNiQzF3WVdOcllXZGxjMXdpSUdOc1lYTnpQVndpYUdWaFpHVnlMV0Z1WTJodmNsd2lQc0tuUEM5aFBrbHVjM1JoYkd3Z2NHRmphMkZuWlhNOEwyZ3pQbHh1UEhBK1NXNXpkR0ZzYkNCd1lXTnJZV2RsY3lCM2FYUm9JRHhoSUdoeVpXWTlYQ0l2Wkc5amN5OWhjR2tqYVc1emRHRnNiRndpUGp4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNpQnBibk4wWVd4c1BDOWpiMlJsUGp3dllUNHVJRUp2ZDJWeUlHbHVjM1JoYkd4eklIQmhZMnRoWjJWeklIUnZJRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2w5amIyMXdiMjVsYm5Sekx6d3ZZMjlrWlQ0dVBDOXdQbHh1UEdacFozVnlaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kRndpUGp4d2NtVStQR052WkdVZ1kyeGhjM005WENKc1lXNW5kV0ZuWlMxaVlYTm9YQ0lnWkdGMFlTMXNZVzVuUFZ3aVltRnphRndpUGp4emNHRnVJR05zWVhOelBWd2laM0JjSWo0a0lEd3ZjM0JoYmo1aWIzZGxjaUJwYm5OMFlXeHNJQ1pzZER0d1lXTnJZV2RsSm1kME96d3ZZMjlrWlQ0OEwzQnlaVDQ4TDJacFozVnlaVDVjYmp4d1BrRWdjR0ZqYTJGblpTQmpZVzRnWW1VZ1lTQkhhWFJJZFdJZ2MyaHZjblJvWVc1a0xDQmhJRWRwZENCbGJtUndiMmx1ZEN3Z1lTQlZVa3dzSUdGdVpDQnRiM0psTGlCU1pXRmtJRzF2Y21VZ1lXSnZkWFFnUEdFZ2FISmxaajFjSWk5a2IyTnpMMkZ3YVM4amFXNXpkR0ZzYkZ3aVBqeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1aWIzZGxjaUJwYm5OMFlXeHNQQzlqYjJSbFBqd3ZZVDR1UEM5d1BseHVQR1pwWjNWeVpTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RGd2lQanh3Y21VK1BHTnZaR1VnWTJ4aGMzTTlYQ0pzWVc1bmRXRm5aUzFpWVhOb1hDSWdaR0YwWVMxc1lXNW5QVndpWW1GemFGd2lQanh6Y0dGdUlHTnNZWE56UFZ3aVkxd2lQaU1nYVc1emRHRnNiSE1nZEdobElIQnliMnBsWTNRZ1pHVndaVzVrWlc1amFXVnpJR3hwYzNSbFpDQnBiaUJpYjNkbGNpNXFjMjl1UEM5emNHRnVQbHh1UEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHeGNianh6Y0dGdUlHTnNZWE56UFZ3aVkxd2lQaU1nY21WbmFYTjBaWEpsWkNCd1lXTnJZV2RsUEM5emNHRnVQbHh1UEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHd2dhbkYxWlhKNVhHNDhjM0JoYmlCamJHRnpjejFjSW1OY0lqNGpJRWRwZEVoMVlpQnphRzl5ZEdoaGJtUThMM053WVc0K1hHNDhjM0JoYmlCamJHRnpjejFjSW1kd1hDSStKQ0E4TDNOd1lXNCtZbTkzWlhJZ2FXNXpkR0ZzYkNCa1pYTmhibVJ5Ynk5dFlYTnZibko1WEc0OGMzQmhiaUJqYkdGemN6MWNJbU5jSWo0aklFZHBkQ0JsYm1Sd2IybHVkRHd2YzNCaGJqNWNianh6Y0dGdUlHTnNZWE56UFZ3aVozQmNJajRrSUR3dmMzQmhiajVpYjNkbGNpQnBibk4wWVd4c0lHZHBkRG92TDJkcGRHaDFZaTVqYjIwdmRYTmxjaTl3WVdOcllXZGxMbWRwZEZ4dVBITndZVzRnWTJ4aGMzTTlYQ0pqWENJK0l5QlZVa3c4TDNOd1lXNCtYRzQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrWW05M1pYSWdhVzV6ZEdGc2JDQm9kSFJ3T2k4dlpYaGhiWEJzWlM1amIyMHZjMk55YVhCMExtcHpQQzlqYjJSbFBqd3ZjSEpsUGp3dlptbG5kWEpsUGx4dVBHZ3pJR2xrUFZ3aWMyVmhjbU5vTFhCaFkydGhaMlZ6WENJK1BHRWdhSEpsWmoxY0lpTnpaV0Z5WTJndGNHRmphMkZuWlhOY0lpQmpiR0Z6Y3oxY0ltaGxZV1JsY2kxaGJtTm9iM0pjSWo3Q3B6d3ZZVDVUWldGeVkyZ2djR0ZqYTJGblpYTThMMmd6UGx4dVBIQStQR0VnYUhKbFpqMWNJaTl6WldGeVkyaGNJajVUWldGeVkyZ2dRbTkzWlhJZ2NHRmphMkZuWlhNOEwyRStJR0Z1WkNCbWFXNWtJSFJvWlNCeVpXZHBjM1JsY21Wa0lIQmhZMnRoWjJVZ2JtRnRaWE1nWm05eUlIbHZkWElnWm1GMmIzSnBkR1VnY0hKdmFtVmpkSE11UEM5d1BseHVQR2d6SUdsa1BWd2ljMkYyWlMxd1lXTnJZV2RsYzF3aVBqeGhJR2h5WldZOVhDSWpjMkYyWlMxd1lXTnJZV2RsYzF3aUlHTnNZWE56UFZ3aWFHVmhaR1Z5TFdGdVkyaHZjbHdpUHNLblBDOWhQbE5oZG1VZ2NHRmphMkZuWlhNOEwyZ3pQbHh1UEhBK1EzSmxZWFJsSUdFZ1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlMbXB6YjI0OEwyTnZaR1UrSUdacGJHVWdabTl5SUhsdmRYSWdjR0ZqYTJGblpTQjNhWFJvSUR4aElHaHlaV1k5WENJdlpHOWpjeTlqY21WaGRHbHVaeTF3WVdOcllXZGxjeThqWW05M1pYSnFjMjl1WENJK1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlJR2x1YVhROEwyTnZaR1UrUEM5aFBpNDhMM0ErWEc0OGNENVVhR1Z1SUhOaGRtVWdibVYzSUdSbGNHVnVaR1Z1WTJsbGN5QjBieUI1YjNWeUlEeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1aWIzZGxjaTVxYzI5dVBDOWpiMlJsUGlCM2FYUm9JRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2lCcGJuTjBZV3hzSUZCQlEwdEJSMFVnTFMxellYWmxQQzlqYjJSbFBqd3ZjRDVjYmp4b015QnBaRDFjSW5WelpTMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqZFhObExYQmhZMnRoWjJWelhDSWdZMnhoYzNNOVhDSm9aV0ZrWlhJdFlXNWphRzl5WENJK3dxYzhMMkUrVlhObElIQmhZMnRoWjJWelBDOW9NejVjYmp4d1BraHZkeUI1YjNVZ2RYTmxJSEJoWTJ0aFoyVnpJR2x6SUhWd0lIUnZJSGx2ZFM0Z1YyVWdjbVZqYjIxdFpXNWtJSGx2ZFNCMWMyVWdRbTkzWlhJZ2RHOW5aWFJvWlhJZ2QybDBhQ0E4WVNCb2NtVm1QVndpTDJSdlkzTXZkRzl2YkhNdlhDSStSM0oxYm5Rc0lGSmxjWFZwY21WS1V5d2dXV1Z2YldGdUxDQmhibVFnYkc5MGN5QnZaaUJ2ZEdobGNpQjBiMjlzY3p3dllUNGdiM0lnWW5WcGJHUWdlVzkxY2lCdmQyNGdkMjl5YTJac2IzY2dkMmwwYUNBOFlTQm9jbVZtUFZ3aUwyUnZZM012WVhCcEwxd2lQblJvWlNCQlVFazhMMkUrTGlCWmIzVWdZMkZ1SUdGc2MyOGdkWE5sSUhSb1pTQnBibk4wWVd4c1pXUWdjR0ZqYTJGblpYTWdaR2x5WldOMGJIa3NJR3hwYTJVZ2RHaHBjeXdnYVc0Z2RHaGxJR05oYzJVZ2IyWWdQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtcHhkV1Z5ZVR3dlkyOWtaVDQ2UEM5d1BseHVQR1pwWjNWeVpTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RGd2lQanh3Y21VK1BHTnZaR1VnWTJ4aGMzTTlYQ0pzWVc1bmRXRm5aUzFvZEcxc1hDSWdaR0YwWVMxc1lXNW5QVndpYUhSdGJGd2lQanh6Y0dGdUlHTnNZWE56UFZ3aWJuUmNJajRtYkhRN2MyTnlhWEIwSUR3dmMzQmhiajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltNWhYQ0krYzNKalBUd3ZjM0JoYmo0OGMzQmhiaUJqYkdGemN6MWNJbk5jSWo1Y0ltSnZkMlZ5WDJOdmJYQnZibVZ1ZEhNdmFuRjFaWEo1TDJScGMzUXZhbkYxWlhKNUxtMXBiaTVxYzF3aVBDOXpjR0Z1UGp4emNHRnVJR05zWVhOelBWd2liblJjSWo0bVozUTdKbXgwT3k5elkzSnBjSFFtWjNRN1BDOXpjR0Z1UGp3dlkyOWtaVDQ4TDNCeVpUNDhMMlpwWjNWeVpUNWNianhvTWlCcFpEMWNJblIzYVhSMFpYSXRkWEJrWVhSbGN5MW1jbTl0TFdKdmQyVnlhSFIwY0hOMGQybDBkR1Z5WTI5dFltOTNaWEpjSWo0OFlTQm9jbVZtUFZ3aUkzUjNhWFIwWlhJdGRYQmtZWFJsY3kxbWNtOXRMV0p2ZDJWeWFIUjBjSE4wZDJsMGRHVnlZMjl0WW05M1pYSmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1VWQybDBkR1Z5SUhWd1pHRjBaWE1nWm5KdmJTQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OTBkMmwwZEdWeUxtTnZiUzlpYjNkbGNsd2lQa0JpYjNkbGNqd3ZZVDQ4TDJneVBseHVQSEErUEdFZ1kyeGhjM005WENKMGQybDBkR1Z5TFhScGJXVnNhVzVsWENJZ2FISmxaajFjSW1oMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlltOTNaWEpjSWlCa1lYUmhMWGRwWkdkbGRDMXBaRDFjSWpRNE1ETTNOekk1TVRNMk9UYzFORFl5TlZ3aVBsUjNaV1YwY3lCaWVTQkFZbTkzWlhJOEwyRStYRzQ4TDNBK1hHNWNiand2WkdsMlBtQXNYRzRnSUNBZ2RtbGxkMDF2Y21VNklIdGNiaUFnSUNBZ0lDQWdkR1Y0ZERvZ1hDTG1tN1RscEpya3Y2SG1nYTljSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKb2RIUndjem92TDJKdmQyVnlMbWx2TDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrSnZjbmR6WlhKVGVXNWpYQ0lzWEc0Z0lDQWdaR1Z6WXpvZ1hDSkdSVm9nNUwyLzU1U29JRUp5YjNkelpYSnplVzVqSU9pdXFlYTFqK2luaU9XWnFPV3VudWFYdHVXL3ErbUFuK2VhaE9XVGplVzZsT1dKamVlcnIrV1FoT2VuamVhV2grUzd0dWVhaE9hYnRPYVV1ZVc1dHVpSHF1V0txT1dJdCthV3NPbWh0ZW1kb3UrOGpPUzZwdVdQcitXdW51YVh0dVdRak9hdHBlV1FoT1M0cXVlN2lPZXJyKys4ak9hUGtPbXJtT2lIcytXd2tUTXdKZWVhaE9XOGdPV1BrZWFWaU9lT2gxd2lMRnh1SUNBZ0lHTnZiblJsYm5RNklHQThhREVnWTJ4aGMzTTlYQ0pvYjI5clhDSStWR2x0WlMxellYWnBibWNnYzNsdVkyaHliMjVwYzJWa0lHSnliM2R6WlhJZ2RHVnpkR2x1Wnk0OEwyZ3hQanh3SUdOc1lYTnpQVndpY205dWMyVmhiRndpUGtsMDRvQ1pjeUIzYVdOclpXUXRabUZ6ZENCaGJtUWdkRzkwWVd4c2VTQm1jbVZsTGp3dmNENDhjQ0JqYkdGemN6MWNJblpwWkdWdlhDSStQR0VnWTJ4aGMzTTlYQ0oyYVdSbGIxOWZiR2x1YTF3aUlHaHlaV1k5WENJalhDSStQQzloUGp3dmNENDhjQ0JqYkdGemN6MWNJbWh2ZHkxMGIxd2lQand2Y0Q0OGNDQmpiR0Z6Y3oxY0ltaHZkeTEwYjE5ZlkyOXRiV0Z1WkZ3aVBtNXdiU0JwYm5OMFlXeHNJQzFuSUdKeWIzZHpaWEl0YzNsdVl6d3ZjRDQ4Y0NCamJHRnpjejFjSW1OMFlWd2lQanhoSUdOc1lYTnpQVndpWW5WMGRHOXVJR0oxZEhSdmJpMHRjSEpwYldGeWVWd2lJR2h5WldZOVhDSWphVzV6ZEdGc2JGd2lJSFJwZEd4bFBWd2lSMlYwSUZOMFlYSjBaV1JjSWo1SFpYUWdVM1JoY25SbFpEd3ZZVDQ4TDNBK1BHUnBkaUJqYkdGemN6MWNJbkJzWVhsbGNsd2lQanh3UGlkaWIyNXFiM1Z5UEM5d1Bqd3ZaR2wyUG1Bc1hHNGdJQ0FnZG1sbGQwMXZjbVU2SUh0Y2JpQWdJQ0FnSUNBZ2RHVjRkRG9nWENMbW03VGxwSnJrdjZIbWdhOWNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd2N6b3ZMMkp5YjNkelpYSnplVzVqTG1sdkwxd2lYRzRnSUNBZ2ZWeHVmVjFjYmx4dWJHVjBJR2x1WkdWNElEMGdlMXh1SUNBZ0lHWmxlbVJsYzJNNklGd2lSa1ZhSU9XSmplZXJyK2Fvb2VXZGwrV01sdVczcGVlb2krVzhnT1dQa2VhaGh1YWV0bHdpTEZ4dUlDQWdJR3AxYldKdmRISnZiam9nZTF4dUlDQWdJQ0FnSUNCMGFYUnNaVG9nWENKSVpXeHNieXdnUmtWYUlFRnVaQ0JTWldGamRDRmNJaXhjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkRG9nWENMb3Y1bm1tSy9rdUlEa3VLcmt2Yi9ubEtnZ1JrVmFJT2FlaE9XN3V1ZWFoT1dKamVlcnIrYW9vZVdkbCtXTWx1VzhnT1dQa2Vla3V1UytpKys4ak9hOGxPZWt1dVM2aHVXZnV1UzZqbEpsWVdOMDVZMlY1cGFINUx1MjU3dUU1THUyNTVxRTVieUE1WStSNTd1VDVwNkU0NENDWENJc1hHNGdJQ0FnSUNBZ0lHSjFkSFJ2YmpvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUb2dZRHhwSUdOc1lYTnpQVndpWm1FZ1ptRXRaMmwwYUhWaUxXRnNkRndpUGp3dmFUNGdSMmwwU0hWaVlDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdoeVpXWTZJRndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJaMWNtbGpMWHBvWVc4dlptVjZYQ0pjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JseHViR1YwSUd4cGMzUWdQU0I3WEc0Z0lDQWdhblZ0WW05MGNtOXVPaUI3WEc0Z0lDQWdJQ0FnSUhScGRHeGxPaUJjSWtaRldpQkJibVFnVW1WaFkzUWdSbkpoYldVaFhDSXNYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUTZJRndpNkwrWjVwaXY1TGlBNUxpcVJrVmE1cFcwNVpDSVVtVmhZM1RubW9UbGlKZm9vYWpsc1pYbnBMcnBvYlh2dkl6b3I3Zm5ncm5saDd2a3VJdnBuYUxsaUpmb29ham5tb1FnUkdWMFlXbHNJT2FNaWVtU3J1aS9tK1dGcGVpdnB1YURoZW1odGVhMWoraW5pRndpTEZ4dUlDQWdJQ0FnSUNCaWRYUjBiMjQ2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklGd2k1cCtsNTV5TDVwdTA1YVNhNUwraDVvR3ZYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltaDBkSEE2THk5bVpYb3VhR1Z6ZEhWa2VTNWpiMjFjSWx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZWeHVYRzVzWlhRZ1kyOXRiVzl1SUQwZ2UxeHVJQ0FnSUhOcGRHVk9ZVzFsT2lCY0lrWkZXaUJTWldGamRDQkVSVTFQWENJc1hHNWNiaUFnSUNCdVlYWkVZWFJoT2lCYmUxeHVJQ0FnSUNBZ0lDQnVZVzFsT2lCY0l1bW1sdW1odFZ3aUxGeHVJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltbHVaR1Y0TG1oMGJXeGNJbHh1SUNBZ0lIMHNJSHRjYmlBZ0lDQWdJQ0FnYm1GdFpUb2dYQ0pHUlZybG43cm1uS3ptbnJibW5vUmNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pzYVhOMExtaDBiV3hjSWx4dUlDQWdJSDFkTEZ4dVhHNGdJQ0FnWm05dmRHVnlWR1Y0ZERvZ1hDTENxU0F5TURFM0lFWkZXaURsaVkzbnE2L21xS0hsblpmbGpKYmx0NlhucUl2bHZJRGxqNUhtb1libW5yWWdRM0psWVhSbFpDQmllU0JHZFhKcFl5NTZhR0Z2WENKY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lGd2lhVzVrWlhoY0lqb2dhVzVrWlhnc1hHNGdJQ0FnWENKc2FYTjBYQ0k2SUd4cGMzUXNYRzRnSUNBZ1hDSm1jbUZ0WlhOY0lqb2dabkpoYldWekxGeHVJQ0FnSUZ3aVkyOXRiVzl1WENJNklHTnZiVzF2Ymx4dWZWeHVJaXdpYVcxd2IzSjBJRkVnWm5KdmJTQW5jU2RjYmx4dWFXMXdiM0owSUVGd2FVUmhkR0VnWm5KdmJTQW5jSFZpYkdsakwyUmxiVzh0WkdGMFlTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHNWhka3hwYzNRb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVVM1UWNtOXRhWE5sS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtFRndhVVJoZEdFdVkyOXRiVzl1TG01aGRrUmhkR0VwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCemFYUmxUbUZ0WlNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb1FYQnBSR0YwWVM1amIyMXRiMjR1YzJsMFpVNWhiV1VwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCbWIyOTBaWEpVWlhoMEtDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZFdVVISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaEJjR2xFWVhSaExtTnZiVzF2Ymk1bWIyOTBaWEpVWlhoMEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZObGNuWnBZMlVnWm5KdmJTQW5MaTlqYjIxdGIyNG5YRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkpsWVdOMExtTnlaV0YwWlVOc1lYTnpLSHRjYmlBZ0lDQm5aWFJKYm1sMGFXRnNVM1JoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyOTBaWEpVWlhoME9pQmNJbHdpWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dUlDQWdJR052YlhCdmJtVnVkRVJwWkUxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnSUNCVFpYSjJhV05sTG1admIzUmxjbFJsZUhRb0tTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRk4wWVhSbEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjkwWlhKVVpYaDBPaUJrWVhSaFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNCOUtWeHVJQ0FnSUgwc1hHNGdJQ0FnY21WdVpHVnlLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb1BHWnZiM1JsY2lCamJHRnpjMDVoYldVOVhDSmpiMjUwWVdsdVpYSmNJajVjYmlBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQVndpY0hWc2JDMXNaV1owWENJK2UzUm9hWE11YzNSaGRHVXVabTl2ZEdWeVZHVjRkSDA4TDNOd1lXNCtYRzRnSUNBZ0lDQWdJRHh6Y0dGdUlHTnNZWE56VG1GdFpUMWNJbkIxYkd3dGNtbG5hSFJjSWo1Y2JpQWdJQ0FnSUNBZ1BHa2dZMnhoYzNOT1lXMWxQVndpYVdOdmJpQnBZMjl1TFhkbGFYaHBibHdpUGp3dmFUNWNiaUFnSUNBZ0lDQWdQR2tnWTJ4aGMzTk9ZVzFsUFZ3aWFXTnZiaUJwWTI5dUxYZGxhV0p2WENJK1BDOXBQbHh1SUNBZ0lEd3ZjM0JoYmo1Y2JpQWdJQ0E4TDJadmIzUmxjajRwWEc1Y2JpQWdJQ0I5WEc1OUtTSXNJbWx0Y0c5eWRDQlRaWEoyYVdObElHWnliMjBnSnk0dlkyOXRiVzl1SjF4dWFXMXdiM0owSUZFZ1puSnZiU0FuY1NkY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVmhZM1F1WTNKbFlYUmxRMnhoYzNNb2UxeHVJQ0FnSUdkbGRFbHVhWFJwWVd4VGRHRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEowYmtSaGRHRTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6YVhSbFRtRnRaVG9nWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZWFpNYVhOME9pQmJYVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNiaUFnSUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZENncElIdGNiaUFnSUNBZ0lDQWdVUzVoYkd3b1cxeHVJQ0FnSUNBZ0lDQWdJQ0FnVTJWeWRtbGpaUzV6YVhSbFRtRnRaU2dwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdVMlZ5ZG1salpTNXVZWFpNYVhOMEtDbGNiaUFnSUNBZ0lDQWdYU2t1ZEdobGJpZ29aR0YwWVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEowYmtSaGRHRWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJsMFpVNWhiV1U2SUdSaGRHRmJNRjBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GMlRHbHpkRG9nWkdGMFlWc3hYVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblJ1UkdGMFlUb2djblJ1UkdGMFlWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNCOUxGeHVJQ0FnSUhKbGJtUmxjaWdwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzVoZGt4cGMzUWdQU0JiWFZ4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHbDBaVzBnYjJZZ2RHaHBjeTV6ZEdGMFpTNXlkRzVFWVhSaExtNWhka3hwYzNRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc1aGRreHBjM1F1Y0hWemFDZzhiR2tnYTJWNVBYdHBkR1Z0TG01aGJXVjlQanhoSUdoeVpXWTllMmwwWlcwdWFISmxabjArZTJsMFpXMHVibUZ0WlgwOEwyRStQQzlzYVQ0cFhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BHNWhkaUJqYkdGemMwNWhiV1U5WENKdVlYWmlZWElnYm1GMlltRnlMV2x1ZG1WeWMyVWdibUYyWW1GeUxXWnBlR1ZrTFhSdmNGd2lQbHh1SUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52Ym5SaGFXNWxjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnVZWFppWVhJdGFHVmhaR1Z5WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCMGVYQmxQVndpWW5WMGRHOXVYQ0lnWTJ4aGMzTk9ZVzFsUFZ3aWJtRjJZbUZ5TFhSdloyZHNaU0JqYjJ4c1lYQnpaV1JjSWlCa1lYUmhMWFJ2WjJkc1pUMWNJbU52Ykd4aGNITmxYQ0lnWkdGMFlTMTBZWEpuWlhROVhDSWpibUYyWW1GeVhDSWdZWEpwWVMxbGVIQmhibVJsWkQxY0ltWmhiSE5sWENJZ1lYSnBZUzFqYjI1MGNtOXNjejFjSW01aGRtSmhjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjMDVoYldVOVhDSnpjaTF2Ym14NVhDSStWRzluWjJ4bElHNWhkbWxuWVhScGIyNDhMM053WVc0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6Y0dGdUlHTnNZWE56VG1GdFpUMWNJbWxqYjI0dFltRnlYQ0krUEM5emNHRnVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiaUJqYkdGemMwNWhiV1U5WENKcFkyOXVMV0poY2x3aVBqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE53WVc0Z1kyeGhjM05PWVcxbFBWd2lhV052YmkxaVlYSmNJajQ4TDNOd1lXNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlpZFhSMGIyNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnWTJ4aGMzTk9ZVzFsUFZ3aWJtRjJZbUZ5TFdKeVlXNWtYQ0lnYUhKbFpqMWNJaTljSWo1N2RHaHBjeTV6ZEdGMFpTNXlkRzVFWVhSaExuTnBkR1ZPWVcxbGZUd3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCcFpEMWNJbTVoZG1KaGNsd2lJR05zWVhOelRtRnRaVDFjSW1OdmJHeGhjSE5sSUc1aGRtSmhjaTFqYjJ4c1lYQnpaVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6YzA1aGJXVTlYQ0p1WVhZZ2JtRjJZbUZ5TFc1aGRsd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHR1WVhaTWFYTjBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnUEM5dVlYWStYRzRnSUNBZ0lDQWdJQ2xjYmx4dUlDQWdJSDFjYm4wcElpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdJRndpWkdWbVlYVnNkRndpT2lCeVpYRjFhWEpsS0Z3aVkyOXlaUzFxY3k5c2FXSnlZWEo1TDJadUwyZGxkQzFwZEdWeVlYUnZjbHdpS1N3Z1gxOWxjMDF2WkhWc1pUb2dkSEoxWlNCOU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdleUJjSW1SbFptRjFiSFJjSWpvZ2NtVnhkV2x5WlNoY0ltTnZjbVV0YW5NdmJHbGljbUZ5ZVM5bWJpOXZZbXBsWTNRdllYTnphV2R1WENJcExDQmZYMlZ6VFc5a2RXeGxPaUIwY25WbElIMDdJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVjYm1WNGNHOXlkSE11WDE5bGMwMXZaSFZzWlNBOUlIUnlkV1U3WEc1Y2JuWmhjaUJmWVhOemFXZHVJRDBnY21WeGRXbHlaU2hjSWk0dUwyTnZjbVV0YW5NdmIySnFaV04wTDJGemMybG5ibHdpS1R0Y2JseHVkbUZ5SUY5aGMzTnBaMjR5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmWVhOemFXZHVLVHRjYmx4dVpuVnVZM1JwYjI0Z1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2h2WW1vcElIc2djbVYwZFhKdUlHOWlhaUFtSmlCdlltb3VYMTlsYzAxdlpIVnNaU0EvSUc5aWFpQTZJSHNnWkdWbVlYVnNkRG9nYjJKcUlIMDdJSDFjYmx4dVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1gyRnpjMmxuYmpJdVpHVm1ZWFZzZENCOGZDQm1kVzVqZEdsdmJpQW9kR0Z5WjJWMEtTQjdYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdkbUZ5SUhOdmRYSmpaU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNibHh1SUNBZ0lHWnZjaUFvZG1GeUlHdGxlU0JwYmlCemIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUdsbUlDaFBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29jMjkxY21ObExDQnJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lIUmhjbWRsZEZ0clpYbGRJRDBnYzI5MWNtTmxXMnRsZVYwN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhSaGNtZGxkRHRjYm4wN0lpd2ljbVZ4ZFdseVpTZ25MaTR2Ylc5a2RXeGxjeTkzWldJdVpHOXRMbWwwWlhKaFlteGxKeWs3WEc1eVpYRjFhWEpsS0NjdUxpOXRiMlIxYkdWekwyVnpOaTV6ZEhKcGJtY3VhWFJsY21GMGIzSW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk0dmJXOWtkV3hsY3k5amIzSmxMbWRsZEMxcGRHVnlZWFJ2Y2ljcE95SXNJbkpsY1hWcGNtVW9KeTR1THk0dUwyMXZaSFZzWlhNdlpYTTJMbTlpYW1WamRDNWhjM05wWjI0bktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjbVZ4ZFdseVpTZ25MaTR2TGk0dmJXOWtkV3hsY3k5ZlkyOXlaU2NwTGs5aWFtVmpkQzVoYzNOcFoyNDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJR2xtS0hSNWNHVnZaaUJwZENBaFBTQW5ablZ1WTNScGIyNG5LWFJvY205M0lGUjVjR1ZGY25KdmNpaHBkQ0FySUNjZ2FYTWdibTkwSUdFZ1puVnVZM1JwYjI0aEp5azdYRzRnSUhKbGRIVnliaUJwZER0Y2JuMDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdwZXlBdktpQmxiWEIwZVNBcUx5QjlPeUlzSW5aaGNpQnBjMDlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDJsekxXOWlhbVZqZENjcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lHbG1LQ0ZwYzA5aWFtVmpkQ2hwZENrcGRHaHliM2NnVkhsd1pVVnljbTl5S0dsMElDc2dKeUJwY3lCdWIzUWdZVzRnYjJKcVpXTjBJU2NwTzF4dUlDQnlaWFIxY200Z2FYUTdYRzU5T3lJc0lpOHZJR1poYkhObElDMCtJRUZ5Y21GNUkybHVaR1Y0VDJaY2JpOHZJSFJ5ZFdVZ0lDMCtJRUZ5Y21GNUkybHVZMngxWkdWelhHNTJZWElnZEc5SlQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0YVc5aWFtVmpkQ2NwWEc0Z0lDd2dkRzlNWlc1bmRHZ2dJRDBnY21WeGRXbHlaU2duTGk5ZmRHOHRiR1Z1WjNSb0p5bGNiaUFnTENCMGIwbHVaR1Y0SUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxcGJtUmxlQ2NwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloSlUxOUpUa05NVlVSRlV5bDdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWdrZEdocGN5d2daV3dzSUdaeWIyMUpibVJsZUNsN1hHNGdJQ0FnZG1GeUlFOGdJQ0FnSUNBOUlIUnZTVTlpYW1WamRDZ2tkR2hwY3lsY2JpQWdJQ0FnSUN3Z2JHVnVaM1JvSUQwZ2RHOU1aVzVuZEdnb1R5NXNaVzVuZEdncFhHNGdJQ0FnSUNBc0lHbHVaR1Y0SUNBOUlIUnZTVzVrWlhnb1puSnZiVWx1WkdWNExDQnNaVzVuZEdncFhHNGdJQ0FnSUNBc0lIWmhiSFZsTzF4dUlDQWdJQzh2SUVGeWNtRjVJMmx1WTJ4MVpHVnpJSFZ6WlhNZ1UyRnRaVlpoYkhWbFdtVnlieUJsY1hWaGJHbDBlU0JoYkdkdmNtbDBhRzFjYmlBZ0lDQnBaaWhKVTE5SlRrTk1WVVJGVXlBbUppQmxiQ0FoUFNCbGJDbDNhR2xzWlNoc1pXNW5kR2dnUGlCcGJtUmxlQ2w3WEc0Z0lDQWdJQ0IyWVd4MVpTQTlJRTliYVc1a1pYZ3JLMTA3WEc0Z0lDQWdJQ0JwWmloMllXeDFaU0FoUFNCMllXeDFaU2x5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0F2THlCQmNuSmhlU04wYjBsdVpHVjRJR2xuYm05eVpYTWdhRzlzWlhNc0lFRnljbUY1STJsdVkyeDFaR1Z6SUMwZ2JtOTBYRzRnSUNBZ2ZTQmxiSE5sSUdadmNpZzdiR1Z1WjNSb0lENGdhVzVrWlhnN0lHbHVaR1Y0S3lzcGFXWW9TVk5mU1U1RFRGVkVSVk1nZkh3Z2FXNWtaWGdnYVc0Z1R5bDdYRzRnSUNBZ0lDQnBaaWhQVzJsdVpHVjRYU0E5UFQwZ1pXd3BjbVYwZFhKdUlFbFRYMGxPUTB4VlJFVlRJSHg4SUdsdVpHVjRJSHg4SURBN1hHNGdJQ0FnZlNCeVpYUjFjbTRnSVVsVFgwbE9RMHhWUkVWVElDWW1JQzB4TzF4dUlDQjlPMXh1ZlRzaUxDSXZMeUJuWlhSMGFXNW5JSFJoWnlCbWNtOXRJREU1TGpFdU15NDJJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY29LVnh1ZG1GeUlHTnZaaUE5SUhKbGNYVnBjbVVvSnk0dlgyTnZaaWNwWEc0Z0lDd2dWRUZISUQwZ2NtVnhkV2x5WlNnbkxpOWZkMnR6Snlrb0ozUnZVM1J5YVc1blZHRm5KeWxjYmlBZ0x5OGdSVk16SUhkeWIyNW5JR2hsY21WY2JpQWdMQ0JCVWtjZ1BTQmpiMllvWm5WdVkzUnBiMjRvS1hzZ2NtVjBkWEp1SUdGeVozVnRaVzUwY3pzZ2ZTZ3BLU0E5UFNBblFYSm5kVzFsYm5Sekp6dGNibHh1THk4Z1ptRnNiR0poWTJzZ1ptOXlJRWxGTVRFZ1UyTnlhWEIwSUVGalkyVnpjeUJFWlc1cFpXUWdaWEp5YjNKY2JuWmhjaUIwY25sSFpYUWdQU0JtZFc1amRHbHZiaWhwZEN3Z2EyVjVLWHRjYmlBZ2RISjVJSHRjYmlBZ0lDQnlaWFIxY200Z2FYUmJhMlY1WFR0Y2JpQWdmU0JqWVhSamFDaGxLWHNnTHlvZ1pXMXdkSGtnS2k4Z2ZWeHVmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhaaGNpQlBMQ0JVTENCQ08xeHVJQ0J5WlhSMWNtNGdhWFFnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JQ2RWYm1SbFptbHVaV1FuSURvZ2FYUWdQVDA5SUc1MWJHd2dQeUFuVG5Wc2JDZGNiaUFnSUNBdkx5QkFRSFJ2VTNSeWFXNW5WR0ZuSUdOaGMyVmNiaUFnSUNBNklIUjVjR1Z2WmlBb1ZDQTlJSFJ5ZVVkbGRDaFBJRDBnVDJKcVpXTjBLR2wwS1N3Z1ZFRkhLU2tnUFQwZ0ozTjBjbWx1WnljZ1B5QlVYRzRnSUNBZ0x5OGdZblZwYkhScGJsUmhaeUJqWVhObFhHNGdJQ0FnT2lCQlVrY2dQeUJqYjJZb1R5bGNiaUFnSUNBdkx5QkZVek1nWVhKbmRXMWxiblJ6SUdaaGJHeGlZV05yWEc0Z0lDQWdPaUFvUWlBOUlHTnZaaWhQS1NrZ1BUMGdKMDlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRTh1WTJGc2JHVmxJRDA5SUNkbWRXNWpkR2x2YmljZ1B5QW5RWEpuZFcxbGJuUnpKeUE2SUVJN1hHNTlPeUlzSW5aaGNpQjBiMU4wY21sdVp5QTlJSHQ5TG5SdlUzUnlhVzVuTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29hWFFwTG5Oc2FXTmxLRGdzSUMweEtUdGNibjA3SWl3aWRtRnlJR052Y21VZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdDJaWEp6YVc5dU9pQW5NaTQwTGpBbmZUdGNibWxtS0hSNWNHVnZaaUJmWDJVZ1BUMGdKMjUxYldKbGNpY3BYMTlsSUQwZ1kyOXlaVHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTExYm1SbFppSXNJaTh2SUc5d2RHbHZibUZzSUM4Z2MybHRjR3hsSUdOdmJuUmxlSFFnWW1sdVpHbHVaMXh1ZG1GeUlHRkdkVzVqZEdsdmJpQTlJSEpsY1hWcGNtVW9KeTR2WDJFdFpuVnVZM1JwYjI0bktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9abTRzSUhSb1lYUXNJR3hsYm1kMGFDbDdYRzRnSUdGR2RXNWpkR2x2YmlobWJpazdYRzRnSUdsbUtIUm9ZWFFnUFQwOUlIVnVaR1ZtYVc1bFpDbHlaWFIxY200Z1ptNDdYRzRnSUhOM2FYUmphQ2hzWlc1bmRHZ3BlMXh1SUNBZ0lHTmhjMlVnTVRvZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0dFcGUxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdadUxtTmhiR3dvZEdoaGRDd2dZU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQmpZWE5sSURJNklISmxkSFZ5YmlCbWRXNWpkR2x2YmloaExDQmlLWHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1iaTVqWVd4c0tIUm9ZWFFzSUdFc0lHSXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1kyRnpaU0F6T2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWVN3Z1lpd2dZeWw3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTR1WTJGc2JDaDBhR0YwTENCaExDQmlMQ0JqS1R0Y2JpQWdJQ0I5TzF4dUlDQjlYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWd2S2lBdUxpNWhjbWR6SUNvdktYdGNiaUFnSUNCeVpYUjFjbTRnWm00dVlYQndiSGtvZEdoaGRDd2dZWEpuZFcxbGJuUnpLVHRjYmlBZ2ZUdGNibjA3SWl3aUx5OGdOeTR5TGpFZ1VtVnhkV2x5WlU5aWFtVmpkRU52WlhKamFXSnNaU2hoY21kMWJXVnVkQ2xjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0JwWmlocGRDQTlQU0IxYm1SbFptbHVaV1FwZEdoeWIzY2dWSGx3WlVWeWNtOXlLRndpUTJGdUozUWdZMkZzYkNCdFpYUm9iMlFnYjI0Z0lGd2lJQ3NnYVhRcE8xeHVJQ0J5WlhSMWNtNGdhWFE3WEc1OU95SXNJaTh2SUZSb1lXNXJKM01nU1VVNElHWnZjaUJvYVhNZ1puVnVibmtnWkdWbWFXNWxVSEp2Y0dWeWRIbGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdJWEpsY1hWcGNtVW9KeTR2WDJaaGFXeHpKeWtvWm5WdVkzUnBiMjRvS1h0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2g3ZlN3Z0oyRW5MQ0I3WjJWME9pQm1kVzVqZEdsdmJpZ3BleUJ5WlhSMWNtNGdOenNnZlgwcExtRWdJVDBnTnp0Y2JuMHBPeUlzSW5aaGNpQnBjMDlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDJsekxXOWlhbVZqZENjcFhHNGdJQ3dnWkc5amRXMWxiblFnUFNCeVpYRjFhWEpsS0NjdUwxOW5iRzlpWVd3bktTNWtiMk4xYldWdWRGeHVJQ0F2THlCcGJpQnZiR1FnU1VVZ2RIbHdaVzltSUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUWdhWE1nSjI5aWFtVmpkQ2RjYmlBZ0xDQnBjeUE5SUdselQySnFaV04wS0dSdlkzVnRaVzUwS1NBbUppQnBjMDlpYW1WamRDaGtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnYVhNZ1B5QmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0dsMEtTQTZJSHQ5TzF4dWZUc2lMQ0l2THlCSlJTQTRMU0JrYjI0bmRDQmxiblZ0SUdKMVp5QnJaWGx6WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUNoY2JpQWdKMk52Ym5OMGNuVmpkRzl5TEdoaGMwOTNibEJ5YjNCbGNuUjVMR2x6VUhKdmRHOTBlWEJsVDJZc2NISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVXNkRzlNYjJOaGJHVlRkSEpwYm1jc2RHOVRkSEpwYm1jc2RtRnNkV1ZQWmlkY2Jpa3VjM0JzYVhRb0p5d25LVHNpTENKMllYSWdaMnh2WW1Gc0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlsY2JpQWdMQ0JqYjNKbElDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWpiM0psSnlsY2JpQWdMQ0JqZEhnZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWpkSGduS1Z4dUlDQXNJR2hwWkdVZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyaHBaR1VuS1Z4dUlDQXNJRkJTVDFSUFZGbFFSU0E5SUNkd2NtOTBiM1I1Y0dVbk8xeHVYRzUyWVhJZ0pHVjRjRzl5ZENBOUlHWjFibU4wYVc5dUtIUjVjR1VzSUc1aGJXVXNJSE52ZFhKalpTbDdYRzRnSUhaaGNpQkpVMTlHVDFKRFJVUWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNUdYRzRnSUNBZ0xDQkpVMTlIVEU5Q1FVd2dQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNUhYRzRnSUNBZ0xDQkpVMTlUVkVGVVNVTWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNVRYRzRnSUNBZ0xDQkpVMTlRVWs5VVR5QWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNVFYRzRnSUNBZ0xDQkpVMTlDU1U1RUlDQWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNUNYRzRnSUNBZ0xDQkpVMTlYVWtGUUlDQWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNVhYRzRnSUNBZ0xDQmxlSEJ2Y25SeklDQWdQU0JKVTE5SFRFOUNRVXdnUHlCamIzSmxJRG9nWTI5eVpWdHVZVzFsWFNCOGZDQW9ZMjl5WlZ0dVlXMWxYU0E5SUh0OUtWeHVJQ0FnSUN3Z1pYaHdVSEp2ZEc4Z0lEMGdaWGh3YjNKMGMxdFFVazlVVDFSWlVFVmRYRzRnSUNBZ0xDQjBZWEpuWlhRZ0lDQWdQU0JKVTE5SFRFOUNRVXdnUHlCbmJHOWlZV3dnT2lCSlUxOVRWRUZVU1VNZ1B5Qm5iRzlpWVd4YmJtRnRaVjBnT2lBb1oyeHZZbUZzVzI1aGJXVmRJSHg4SUh0OUtWdFFVazlVVDFSWlVFVmRYRzRnSUNBZ0xDQnJaWGtzSUc5M2Jpd2diM1YwTzF4dUlDQnBaaWhKVTE5SFRFOUNRVXdwYzI5MWNtTmxJRDBnYm1GdFpUdGNiaUFnWm05eUtHdGxlU0JwYmlCemIzVnlZMlVwZTF4dUlDQWdJQzh2SUdOdmJuUmhhVzV6SUdsdUlHNWhkR2wyWlZ4dUlDQWdJRzkzYmlBOUlDRkpVMTlHVDFKRFJVUWdKaVlnZEdGeVoyVjBJQ1ltSUhSaGNtZGxkRnRyWlhsZElDRTlQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdhV1lvYjNkdUlDWW1JR3RsZVNCcGJpQmxlSEJ2Y25SektXTnZiblJwYm5WbE8xeHVJQ0FnSUM4dklHVjRjRzl5ZENCdVlYUnBkbVVnYjNJZ2NHRnpjMlZrWEc0Z0lDQWdiM1YwSUQwZ2IzZHVJRDhnZEdGeVoyVjBXMnRsZVYwZ09pQnpiM1Z5WTJWYmEyVjVYVHRjYmlBZ0lDQXZMeUJ3Y21WMlpXNTBJR2RzYjJKaGJDQndiMnhzZFhScGIyNGdabTl5SUc1aGJXVnpjR0ZqWlhOY2JpQWdJQ0JsZUhCdmNuUnpXMnRsZVYwZ1BTQkpVMTlIVEU5Q1FVd2dKaVlnZEhsd1pXOW1JSFJoY21kbGRGdHJaWGxkSUNFOUlDZG1kVzVqZEdsdmJpY2dQeUJ6YjNWeVkyVmJhMlY1WFZ4dUlDQWdJQzh2SUdKcGJtUWdkR2x0WlhKeklIUnZJR2RzYjJKaGJDQm1iM0lnWTJGc2JDQm1jbTl0SUdWNGNHOXlkQ0JqYjI1MFpYaDBYRzRnSUNBZ09pQkpVMTlDU1U1RUlDWW1JRzkzYmlBL0lHTjBlQ2h2ZFhRc0lHZHNiMkpoYkNsY2JpQWdJQ0F2THlCM2NtRndJR2RzYjJKaGJDQmpiMjV6ZEhKMVkzUnZjbk1nWm05eUlIQnlaWFpsYm5RZ1kyaGhibWRsSUhSb1pXMGdhVzRnYkdsaWNtRnllVnh1SUNBZ0lEb2dTVk5mVjFKQlVDQW1KaUIwWVhKblpYUmJhMlY1WFNBOVBTQnZkWFFnUHlBb1puVnVZM1JwYjI0b1F5bDdYRzRnSUNBZ0lDQjJZWElnUmlBOUlHWjFibU4wYVc5dUtHRXNJR0lzSUdNcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdseklHbHVjM1JoYm1ObGIyWWdReWw3WEc0Z0lDQWdJQ0FnSUNBZ2MzZHBkR05vS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBd09pQnlaWFIxY200Z2JtVjNJRU03WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURFNklISmxkSFZ5YmlCdVpYY2dReWhoS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ01qb2djbVYwZFhKdUlHNWxkeUJES0dFc0lHSXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ2NtVjBkWEp1SUc1bGR5QkRLR0VzSUdJc0lHTXBPMXh1SUNBZ0lDQWdJQ0I5SUhKbGRIVnliaUJETG1Gd2NHeDVLSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5azdYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdSbHRRVWs5VVQxUlpVRVZkSUQwZ1ExdFFVazlVVDFSWlVFVmRPMXh1SUNBZ0lDQWdjbVYwZFhKdUlFWTdYRzRnSUNBZ0x5OGdiV0ZyWlNCemRHRjBhV01nZG1WeWMybHZibk1nWm05eUlIQnliM1J2ZEhsd1pTQnRaWFJvYjJSelhHNGdJQ0FnZlNrb2IzVjBLU0E2SUVsVFgxQlNUMVJQSUNZbUlIUjVjR1Z2WmlCdmRYUWdQVDBnSjJaMWJtTjBhVzl1SnlBL0lHTjBlQ2hHZFc1amRHbHZiaTVqWVd4c0xDQnZkWFFwSURvZ2IzVjBPMXh1SUNBZ0lDOHZJR1Y0Y0c5eWRDQndjbTkwYnlCdFpYUm9iMlJ6SUhSdklHTnZjbVV1SlVOUFRsTlVVbFZEVkU5U0pTNXRaWFJvYjJSekxpVk9RVTFGSlZ4dUlDQWdJR2xtS0VsVFgxQlNUMVJQS1h0Y2JpQWdJQ0FnSUNobGVIQnZjblJ6TG5acGNuUjFZV3dnZkh3Z0tHVjRjRzl5ZEhNdWRtbHlkSFZoYkNBOUlIdDlLU2xiYTJWNVhTQTlJRzkxZER0Y2JpQWdJQ0FnSUM4dklHVjRjRzl5ZENCd2NtOTBieUJ0WlhSb2IyUnpJSFJ2SUdOdmNtVXVKVU5QVGxOVVVsVkRWRTlTSlM1d2NtOTBiM1I1Y0dVdUpVNUJUVVVsWEc0Z0lDQWdJQ0JwWmloMGVYQmxJQ1lnSkdWNGNHOXlkQzVTSUNZbUlHVjRjRkJ5YjNSdklDWW1JQ0ZsZUhCUWNtOTBiMXRyWlhsZEtXaHBaR1VvWlhod1VISnZkRzhzSUd0bGVTd2diM1YwS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc0dkx5QjBlWEJsSUdKcGRHMWhjRnh1SkdWNGNHOXlkQzVHSUQwZ01Uc2dJQ0F2THlCbWIzSmpaV1JjYmlSbGVIQnZjblF1UnlBOUlESTdJQ0FnTHk4Z1oyeHZZbUZzWEc0a1pYaHdiM0owTGxNZ1BTQTBPeUFnSUM4dklITjBZWFJwWTF4dUpHVjRjRzl5ZEM1UUlEMGdPRHNnSUNBdkx5QndjbTkwYjF4dUpHVjRjRzl5ZEM1Q0lEMGdNVFk3SUNBdkx5QmlhVzVrWEc0a1pYaHdiM0owTGxjZ1BTQXpNanNnSUM4dklIZHlZWEJjYmlSbGVIQnZjblF1VlNBOUlEWTBPeUFnTHk4Z2MyRm1aVnh1SkdWNGNHOXlkQzVTSUQwZ01USTRPeUF2THlCeVpXRnNJSEJ5YjNSdklHMWxkR2h2WkNCbWIzSWdZR3hwWW5KaGNubGdJRnh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FrWlhod2IzSjBPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvWlhobFl5bDdYRzRnSUhSeWVTQjdYRzRnSUNBZ2NtVjBkWEp1SUNFaFpYaGxZeWdwTzF4dUlDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOVhHNTlPeUlzSWk4dklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOTZiRzlwY205amF5OWpiM0psTFdwekwybHpjM1ZsY3k4NE5pTnBjM04xWldOdmJXMWxiblF0TVRFMU56VTVNREk0WEc1MllYSWdaMnh2WW1Gc0lEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjBlWEJsYjJZZ2QybHVaRzkzSUNFOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTVOWVhSb0lEMDlJRTFoZEdoY2JpQWdQeUIzYVc1a2IzY2dPaUIwZVhCbGIyWWdjMlZzWmlBaFBTQW5kVzVrWldacGJtVmtKeUFtSmlCelpXeG1MazFoZEdnZ1BUMGdUV0YwYUNBL0lITmxiR1lnT2lCR2RXNWpkR2x2YmlnbmNtVjBkWEp1SUhSb2FYTW5LU2dwTzF4dWFXWW9kSGx3Wlc5bUlGOWZaeUE5UFNBbmJuVnRZbVZ5SnlsZlgyY2dQU0JuYkc5aVlXdzdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRkVzVrWldZaUxDSjJZWElnYUdGelQzZHVVSEp2Y0dWeWRIa2dQU0I3ZlM1b1lYTlBkMjVRY205d1pYSjBlVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRc0lHdGxlU2w3WEc0Z0lISmxkSFZ5YmlCb1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHbDBMQ0JyWlhrcE8xeHVmVHNpTENKMllYSWdaRkFnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxa2NDY3BYRzRnSUN3Z1kzSmxZWFJsUkdWell5QTlJSEpsY1hWcGNtVW9KeTR2WDNCeWIzQmxjblI1TFdSbGMyTW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0EvSUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnYTJWNUxDQjJZV3gxWlNsN1hHNGdJSEpsZEhWeWJpQmtVQzVtS0c5aWFtVmpkQ3dnYTJWNUxDQmpjbVZoZEdWRVpYTmpLREVzSUhaaGJIVmxLU2s3WEc1OUlEb2dablZ1WTNScGIyNG9iMkpxWldOMExDQnJaWGtzSUhaaGJIVmxLWHRjYmlBZ2IySnFaV04wVzJ0bGVWMGdQU0IyWVd4MVpUdGNiaUFnY21WMGRYSnVJRzlpYW1WamREdGNibjA3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUwxOW5iRzlpWVd3bktTNWtiMk4xYldWdWRDQW1KaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUTdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0FoY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0FtSmlBaGNtVnhkV2x5WlNnbkxpOWZabUZwYkhNbktTaG1kVzVqZEdsdmJpZ3BlMXh1SUNCeVpYUjFjbTRnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtISmxjWFZwY21Vb0p5NHZYMlJ2YlMxamNtVmhkR1VuS1NnblpHbDJKeWtzSUNkaEp5d2dlMmRsZERvZ1puVnVZM1JwYjI0b0tYc2djbVYwZFhKdUlEYzdJSDE5S1M1aElDRTlJRGM3WEc1OUtUc2lMQ0l2THlCbVlXeHNZbUZqYXlCbWIzSWdibTl1TFdGeWNtRjVMV3hwYTJVZ1JWTXpJR0Z1WkNCdWIyNHRaVzUxYldWeVlXSnNaU0J2YkdRZ1ZqZ2djM1J5YVc1bmMxeHVkbUZ5SUdOdlppQTlJSEpsY1hWcGNtVW9KeTR2WDJOdlppY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JQWW1wbFkzUW9KM29uS1M1d2NtOXdaWEowZVVselJXNTFiV1Z5WVdKc1pTZ3dLU0EvSUU5aWFtVmpkQ0E2SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR052WmlocGRDa2dQVDBnSjFOMGNtbHVaeWNnUHlCcGRDNXpjR3hwZENnbkp5a2dPaUJQWW1wbFkzUW9hWFFwTzF4dWZUc2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCcGRDQTlQVDBnSjI5aWFtVmpkQ2NnUHlCcGRDQWhQVDBnYm5Wc2JDQTZJSFI1Y0dWdlppQnBkQ0E5UFQwZ0oyWjFibU4wYVc5dUp6dGNibjA3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1ZG1GeUlHTnlaV0YwWlNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZiMkpxWldOMExXTnlaV0YwWlNjcFhHNGdJQ3dnWkdWelkzSnBjSFJ2Y2lBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5d2NtOXdaWEowZVMxa1pYTmpKeWxjYmlBZ0xDQnpaWFJVYjFOMGNtbHVaMVJoWnlBOUlISmxjWFZwY21Vb0p5NHZYM05sZEMxMGJ5MXpkSEpwYm1jdGRHRm5KeWxjYmlBZ0xDQkpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTQTlJSHQ5TzF4dVhHNHZMeUF5TlM0eExqSXVNUzR4SUNWSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNWYlFFQnBkR1Z5WVhSdmNsMG9LVnh1Y21WeGRXbHlaU2duTGk5ZmFHbGtaU2NwS0VsMFpYSmhkRzl5VUhKdmRHOTBlWEJsTENCeVpYRjFhWEpsS0NjdUwxOTNhM01uS1NnbmFYUmxjbUYwYjNJbktTd2dablZ1WTNScGIyNG9LWHNnY21WMGRYSnVJSFJvYVhNN0lIMHBPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0VOdmJuTjBjblZqZEc5eUxDQk9RVTFGTENCdVpYaDBLWHRjYmlBZ1EyOXVjM1J5ZFdOMGIzSXVjSEp2ZEc5MGVYQmxJRDBnWTNKbFlYUmxLRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxMQ0I3Ym1WNGREb2daR1Z6WTNKcGNIUnZjaWd4TENCdVpYaDBLWDBwTzF4dUlDQnpaWFJVYjFOMGNtbHVaMVJoWnloRGIyNXpkSEoxWTNSdmNpd2dUa0ZOUlNBcklDY2dTWFJsY21GMGIzSW5LVHRjYm4wN0lpd2lKM1Z6WlNCemRISnBZM1FuTzF4dWRtRnlJRXhKUWxKQlVsa2dJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYkdsaWNtRnllU2NwWEc0Z0lDd2dKR1Y0Y0c5eWRDQWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlsZUhCdmNuUW5LVnh1SUNBc0lISmxaR1ZtYVc1bElDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjbVZrWldacGJtVW5LVnh1SUNBc0lHaHBaR1VnSUNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcFhHNGdJQ3dnYUdGeklDQWdJQ0FnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5b1lYTW5LVnh1SUNBc0lFbDBaWEpoZEc5eWN5QWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhWFJsY21GMGIzSnpKeWxjYmlBZ0xDQWthWFJsY2tOeVpXRjBaU0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhJdFkzSmxZWFJsSnlsY2JpQWdMQ0J6WlhSVWIxTjBjbWx1WjFSaFp5QTlJSEpsY1hWcGNtVW9KeTR2WDNObGRDMTBieTF6ZEhKcGJtY3RkR0ZuSnlsY2JpQWdMQ0JuWlhSUWNtOTBiM1I1Y0dWUFppQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFuY0c4bktWeHVJQ0FzSUVsVVJWSkJWRTlTSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjJsMFpYSmhkRzl5SnlsY2JpQWdMQ0JDVlVkSFdTQWdJQ0FnSUNBZ0lDQTlJQ0VvVzEwdWEyVjVjeUFtSmlBbmJtVjRkQ2NnYVc0Z1cxMHVhMlY1Y3lncEtTQXZMeUJUWVdaaGNta2dhR0Z6SUdKMVoyZDVJR2wwWlhKaGRHOXljeUIzTDI4Z1lHNWxlSFJnWEc0Z0lDd2dSa1pmU1ZSRlVrRlVUMUlnSUNBZ1BTQW5RRUJwZEdWeVlYUnZjaWRjYmlBZ0xDQkxSVmxUSUNBZ0lDQWdJQ0FnSUNBOUlDZHJaWGx6SjF4dUlDQXNJRlpCVEZWRlV5QWdJQ0FnSUNBZ0lEMGdKM1poYkhWbGN5YzdYRzVjYm5aaGNpQnlaWFIxY201VWFHbHpJRDBnWm5WdVkzUnBiMjRvS1hzZ2NtVjBkWEp1SUhSb2FYTTdJSDA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b1FtRnpaU3dnVGtGTlJTd2dRMjl1YzNSeWRXTjBiM0lzSUc1bGVIUXNJRVJGUmtGVlRGUXNJRWxUWDFORlZDd2dSazlTUTBWRUtYdGNiaUFnSkdsMFpYSkRjbVZoZEdVb1EyOXVjM1J5ZFdOMGIzSXNJRTVCVFVVc0lHNWxlSFFwTzF4dUlDQjJZWElnWjJWMFRXVjBhRzlrSUQwZ1puVnVZM1JwYjI0b2EybHVaQ2w3WEc0Z0lDQWdhV1lvSVVKVlIwZFpJQ1ltSUd0cGJtUWdhVzRnY0hKdmRHOHBjbVYwZFhKdUlIQnliM1J2VzJ0cGJtUmRPMXh1SUNBZ0lITjNhWFJqYUNocmFXNWtLWHRjYmlBZ0lDQWdJR05oYzJVZ1MwVlpVem9nY21WMGRYSnVJR1oxYm1OMGFXOXVJR3RsZVhNb0tYc2djbVYwZFhKdUlHNWxkeUJEYjI1emRISjFZM1J2Y2loMGFHbHpMQ0JyYVc1a0tUc2dmVHRjYmlBZ0lDQWdJR05oYzJVZ1ZrRk1WVVZUT2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRnZG1Gc2RXVnpLQ2w3SUhKbGRIVnliaUJ1WlhjZ1EyOXVjM1J5ZFdOMGIzSW9kR2hwY3l3Z2EybHVaQ2s3SUgwN1hHNGdJQ0FnZlNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnWlc1MGNtbGxjeWdwZXlCeVpYUjFjbTRnYm1WM0lFTnZibk4wY25WamRHOXlLSFJvYVhNc0lHdHBibVFwT3lCOU8xeHVJQ0I5TzF4dUlDQjJZWElnVkVGSElDQWdJQ0FnSUNBOUlFNUJUVVVnS3lBbklFbDBaWEpoZEc5eUoxeHVJQ0FnSUN3Z1JFVkdYMVpCVEZWRlV5QTlJRVJGUmtGVlRGUWdQVDBnVmtGTVZVVlRYRzRnSUNBZ0xDQldRVXhWUlZOZlFsVkhJRDBnWm1Gc2MyVmNiaUFnSUNBc0lIQnliM1J2SUNBZ0lDQWdQU0JDWVhObExuQnliM1J2ZEhsd1pWeHVJQ0FnSUN3Z0pHNWhkR2wyWlNBZ0lDQTlJSEJ5YjNSdlcwbFVSVkpCVkU5U1hTQjhmQ0J3Y205MGIxdEdSbDlKVkVWU1FWUlBVbDBnZkh3Z1JFVkdRVlZNVkNBbUppQndjbTkwYjF0RVJVWkJWVXhVWFZ4dUlDQWdJQ3dnSkdSbFptRjFiSFFnSUNBOUlDUnVZWFJwZG1VZ2ZId2daMlYwVFdWMGFHOWtLRVJGUmtGVlRGUXBYRzRnSUNBZ0xDQWtaVzUwY21sbGN5QWdJRDBnUkVWR1FWVk1WQ0EvSUNGRVJVWmZWa0ZNVlVWVElEOGdKR1JsWm1GMWJIUWdPaUJuWlhSTlpYUm9iMlFvSjJWdWRISnBaWE1uS1NBNklIVnVaR1ZtYVc1bFpGeHVJQ0FnSUN3Z0pHRnVlVTVoZEdsMlpTQTlJRTVCVFVVZ1BUMGdKMEZ5Y21GNUp5QS9JSEJ5YjNSdkxtVnVkSEpwWlhNZ2ZId2dKRzVoZEdsMlpTQTZJQ1J1WVhScGRtVmNiaUFnSUNBc0lHMWxkR2h2WkhNc0lHdGxlU3dnU1hSbGNtRjBiM0pRY205MGIzUjVjR1U3WEc0Z0lDOHZJRVpwZUNCdVlYUnBkbVZjYmlBZ2FXWW9KR0Z1ZVU1aGRHbDJaU2w3WEc0Z0lDQWdTWFJsY21GMGIzSlFjbTkwYjNSNWNHVWdQU0JuWlhSUWNtOTBiM1I1Y0dWUFppZ2tZVzU1VG1GMGFYWmxMbU5oYkd3b2JtVjNJRUpoYzJVcEtUdGNiaUFnSUNCcFppaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTQWhQVDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaU2w3WEc0Z0lDQWdJQ0F2THlCVFpYUWdRRUIwYjFOMGNtbHVaMVJoWnlCMGJ5QnVZWFJwZG1VZ2FYUmxjbUYwYjNKelhHNGdJQ0FnSUNCelpYUlViMU4wY21sdVoxUmhaeWhKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU3dnVkVGSExDQjBjblZsS1R0Y2JpQWdJQ0FnSUM4dklHWnBlQ0JtYjNJZ2MyOXRaU0J2YkdRZ1pXNW5hVzVsYzF4dUlDQWdJQ0FnYVdZb0lVeEpRbEpCVWxrZ0ppWWdJV2hoY3loSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlN3Z1NWUkZVa0ZVVDFJcEtXaHBaR1VvU1hSbGNtRjBiM0pRY205MGIzUjVjR1VzSUVsVVJWSkJWRTlTTENCeVpYUjFjbTVVYUdsektUdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ0x5OGdabWw0SUVGeWNtRjVJM3QyWVd4MVpYTXNJRUJBYVhSbGNtRjBiM0o5TG01aGJXVWdhVzRnVmpnZ0x5QkdSbHh1SUNCcFppaEVSVVpmVmtGTVZVVlRJQ1ltSUNSdVlYUnBkbVVnSmlZZ0pHNWhkR2wyWlM1dVlXMWxJQ0U5UFNCV1FVeFZSVk1wZTF4dUlDQWdJRlpCVEZWRlUxOUNWVWNnUFNCMGNuVmxPMXh1SUNBZ0lDUmtaV1poZFd4MElEMGdablZ1WTNScGIyNGdkbUZzZFdWektDbDdJSEpsZEhWeWJpQWtibUYwYVhabExtTmhiR3dvZEdocGN5azdJSDA3WEc0Z0lIMWNiaUFnTHk4Z1JHVm1hVzVsSUdsMFpYSmhkRzl5WEc0Z0lHbG1LQ2doVEVsQ1VrRlNXU0I4ZkNCR1QxSkRSVVFwSUNZbUlDaENWVWRIV1NCOGZDQldRVXhWUlZOZlFsVkhJSHg4SUNGd2NtOTBiMXRKVkVWU1FWUlBVbDBwS1h0Y2JpQWdJQ0JvYVdSbEtIQnliM1J2TENCSlZFVlNRVlJQVWl3Z0pHUmxabUYxYkhRcE8xeHVJQ0I5WEc0Z0lDOHZJRkJzZFdjZ1ptOXlJR3hwWW5KaGNubGNiaUFnU1hSbGNtRjBiM0p6VzA1QlRVVmRJRDBnSkdSbFptRjFiSFE3WEc0Z0lFbDBaWEpoZEc5eWMxdFVRVWRkSUNBOUlISmxkSFZ5YmxSb2FYTTdYRzRnSUdsbUtFUkZSa0ZWVEZRcGUxeHVJQ0FnSUcxbGRHaHZaSE1nUFNCN1hHNGdJQ0FnSUNCMllXeDFaWE02SUNCRVJVWmZWa0ZNVlVWVElEOGdKR1JsWm1GMWJIUWdPaUJuWlhSTlpYUm9iMlFvVmtGTVZVVlRLU3hjYmlBZ0lDQWdJR3RsZVhNNklDQWdJRWxUWDFORlZDQWdJQ0FnUHlBa1pHVm1ZWFZzZENBNklHZGxkRTFsZEdodlpDaExSVmxUS1N4Y2JpQWdJQ0FnSUdWdWRISnBaWE02SUNSbGJuUnlhV1Z6WEc0Z0lDQWdmVHRjYmlBZ0lDQnBaaWhHVDFKRFJVUXBabTl5S0d0bGVTQnBiaUJ0WlhSb2IyUnpLWHRjYmlBZ0lDQWdJR2xtS0NFb2EyVjVJR2x1SUhCeWIzUnZLU2x5WldSbFptbHVaU2h3Y205MGJ5d2dhMlY1TENCdFpYUm9iMlJ6VzJ0bGVWMHBPMXh1SUNBZ0lIMGdaV3h6WlNBa1pYaHdiM0owS0NSbGVIQnZjblF1VUNBcklDUmxlSEJ2Y25RdVJpQXFJQ2hDVlVkSFdTQjhmQ0JXUVV4VlJWTmZRbFZIS1N3Z1RrRk5SU3dnYldWMGFHOWtjeWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzFsZEdodlpITTdYRzU5T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b1pHOXVaU3dnZG1Gc2RXVXBlMXh1SUNCeVpYUjFjbTRnZTNaaGJIVmxPaUIyWVd4MVpTd2daRzl1WlRvZ0lTRmtiMjVsZlR0Y2JuMDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3ZlRzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIUnlkV1U3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1THk4Z01Ua3VNUzR5TGpFZ1QySnFaV04wTG1GemMybG5iaWgwWVhKblpYUXNJSE52ZFhKalpTd2dMaTR1S1Z4dWRtRnlJR2RsZEV0bGVYTWdJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFd0bGVYTW5LVnh1SUNBc0lHZFBVRk1nSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYjJKcVpXTjBMV2R2Y0hNbktWeHVJQ0FzSUhCSlJTQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZiMkpxWldOMExYQnBaU2NwWEc0Z0lDd2dkRzlQWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXZZbXBsWTNRbktWeHVJQ0FzSUVsUFltcGxZM1FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhVzlpYW1WamRDY3BYRzRnSUN3Z0pHRnpjMmxuYmlBZ1BTQlBZbXBsWTNRdVlYTnphV2R1TzF4dVhHNHZMeUJ6YUc5MWJHUWdkMjl5YXlCM2FYUm9JSE41YldKdmJITWdZVzVrSUhOb2IzVnNaQ0JvWVhabElHUmxkR1Z5YldsdWFYTjBhV01nY0hKdmNHVnlkSGtnYjNKa1pYSWdLRlk0SUdKMVp5bGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdJU1JoYzNOcFoyNGdmSHdnY21WeGRXbHlaU2duTGk5ZlptRnBiSE1uS1NobWRXNWpkR2x2YmlncGUxeHVJQ0IyWVhJZ1FTQTlJSHQ5WEc0Z0lDQWdMQ0JDSUQwZ2UzMWNiaUFnSUNBc0lGTWdQU0JUZVcxaWIyd29LVnh1SUNBZ0lDd2dTeUE5SUNkaFltTmtaV1puYUdscWEyeHRibTl3Y1hKemRDYzdYRzRnSUVGYlUxMGdQU0EzTzF4dUlDQkxMbk53YkdsMEtDY25LUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVLR3NwZXlCQ1cydGRJRDBnYXpzZ2ZTazdYRzRnSUhKbGRIVnliaUFrWVhOemFXZHVLSHQ5TENCQktWdFRYU0FoUFNBM0lIeDhJRTlpYW1WamRDNXJaWGx6S0NSaGMzTnBaMjRvZTMwc0lFSXBLUzVxYjJsdUtDY25LU0FoUFNCTE8xeHVmU2tnUHlCbWRXNWpkR2x2YmlCaGMzTnBaMjRvZEdGeVoyVjBMQ0J6YjNWeVkyVXBleUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMWFZ1ZFhObFpDMTJZWEp6WEc0Z0lIWmhjaUJVSUNBZ0lDQTlJSFJ2VDJKcVpXTjBLSFJoY21kbGRDbGNiaUFnSUNBc0lHRk1aVzRnSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUZ4dUlDQWdJQ3dnYVc1a1pYZ2dQU0F4WEc0Z0lDQWdMQ0JuWlhSVGVXMWliMnh6SUQwZ1owOVFVeTVtWEc0Z0lDQWdMQ0JwYzBWdWRXMGdJQ0FnSUQwZ2NFbEZMbVk3WEc0Z0lIZG9hV3hsS0dGTVpXNGdQaUJwYm1SbGVDbDdYRzRnSUNBZ2RtRnlJRk1nSUNBZ0lDQTlJRWxQWW1wbFkzUW9ZWEpuZFcxbGJuUnpXMmx1WkdWNEt5dGRLVnh1SUNBZ0lDQWdMQ0JyWlhseklDQWdQU0JuWlhSVGVXMWliMnh6SUQ4Z1oyVjBTMlY1Y3loVEtTNWpiMjVqWVhRb1oyVjBVM2x0WW05c2N5aFRLU2tnT2lCblpYUkxaWGx6S0ZNcFhHNGdJQ0FnSUNBc0lHeGxibWQwYUNBOUlHdGxlWE11YkdWdVozUm9YRzRnSUNBZ0lDQXNJR29nSUNBZ0lDQTlJREJjYmlBZ0lDQWdJQ3dnYTJWNU8xeHVJQ0FnSUhkb2FXeGxLR3hsYm1kMGFDQStJR29wYVdZb2FYTkZiblZ0TG1OaGJHd29VeXdnYTJWNUlEMGdhMlY1YzF0cUt5dGRLU2xVVzJ0bGVWMGdQU0JUVzJ0bGVWMDdYRzRnSUgwZ2NtVjBkWEp1SUZRN1hHNTlJRG9nSkdGemMybG5ianNpTENJdkx5QXhPUzR4TGpJdU1pQXZJREUxTGpJdU15NDFJRTlpYW1WamRDNWpjbVZoZEdVb1R5QmJMQ0JRY205d1pYSjBhV1Z6WFNsY2JuWmhjaUJoYms5aWFtVmpkQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMkZ1TFc5aWFtVmpkQ2NwWEc0Z0lDd2daRkJ6SUNBZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdFpIQnpKeWxjYmlBZ0xDQmxiblZ0UW5WblMyVjVjeUE5SUhKbGNYVnBjbVVvSnk0dlgyVnVkVzB0WW5WbkxXdGxlWE1uS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0xXdGxlU2NwS0NkSlJWOVFVazlVVHljcFhHNGdJQ3dnUlcxd2RIa2dJQ0FnSUNBZ1BTQm1kVzVqZEdsdmJpZ3BleUF2S2lCbGJYQjBlU0FxTHlCOVhHNGdJQ3dnVUZKUFZFOVVXVkJGSUNBZ1BTQW5jSEp2ZEc5MGVYQmxKenRjYmx4dUx5OGdRM0psWVhSbElHOWlhbVZqZENCM2FYUm9JR1poYTJVZ1lHNTFiR3hnSUhCeWIzUnZkSGx3WlRvZ2RYTmxJR2xtY21GdFpTQlBZbXBsWTNRZ2QybDBhQ0JqYkdWaGNtVmtJSEJ5YjNSdmRIbHdaVnh1ZG1GeUlHTnlaV0YwWlVScFkzUWdQU0JtZFc1amRHbHZiaWdwZTF4dUlDQXZMeUJVYUhKaGMyZ3NJSGRoYzNSbElHRnVaQ0J6YjJSdmJYazZJRWxGSUVkRElHSjFaMXh1SUNCMllYSWdhV1p5WVcxbElEMGdjbVZ4ZFdseVpTZ25MaTlmWkc5dExXTnlaV0YwWlNjcEtDZHBabkpoYldVbktWeHVJQ0FnSUN3Z2FTQWdJQ0FnSUQwZ1pXNTFiVUoxWjB0bGVYTXViR1Z1WjNSb1hHNGdJQ0FnTENCc2RDQWdJQ0FnUFNBblBDZGNiaUFnSUNBc0lHZDBJQ0FnSUNBOUlDYytKMXh1SUNBZ0lDd2dhV1p5WVcxbFJHOWpkVzFsYm5RN1hHNGdJR2xtY21GdFpTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuTzF4dUlDQnlaWEYxYVhKbEtDY3VMMTlvZEcxc0p5a3VZWEJ3Wlc1a1EyaHBiR1FvYVdaeVlXMWxLVHRjYmlBZ2FXWnlZVzFsTG5OeVl5QTlJQ2RxWVhaaGMyTnlhWEIwT2ljN0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnYm04dGMyTnlhWEIwTFhWeWJGeHVJQ0F2THlCamNtVmhkR1ZFYVdOMElEMGdhV1p5WVcxbExtTnZiblJsYm5SWGFXNWtiM2N1VDJKcVpXTjBPMXh1SUNBdkx5Qm9kRzFzTG5KbGJXOTJaVU5vYVd4a0tHbG1jbUZ0WlNrN1hHNGdJR2xtY21GdFpVUnZZM1Z0Wlc1MElEMGdhV1p5WVcxbExtTnZiblJsYm5SWGFXNWtiM2N1Wkc5amRXMWxiblE3WEc0Z0lHbG1jbUZ0WlVSdlkzVnRaVzUwTG05d1pXNG9LVHRjYmlBZ2FXWnlZVzFsUkc5amRXMWxiblF1ZDNKcGRHVW9iSFFnS3lBbmMyTnlhWEIwSnlBcklHZDBJQ3NnSjJSdlkzVnRaVzUwTGtZOVQySnFaV04wSnlBcklHeDBJQ3NnSnk5elkzSnBjSFFuSUNzZ1ozUXBPMXh1SUNCcFpuSmhiV1ZFYjJOMWJXVnVkQzVqYkc5elpTZ3BPMXh1SUNCamNtVmhkR1ZFYVdOMElEMGdhV1p5WVcxbFJHOWpkVzFsYm5RdVJqdGNiaUFnZDJocGJHVW9hUzB0S1dSbGJHVjBaU0JqY21WaGRHVkVhV04wVzFCU1QxUlBWRmxRUlYxYlpXNTFiVUoxWjB0bGVYTmJhVjFkTzF4dUlDQnlaWFIxY200Z1kzSmxZWFJsUkdsamRDZ3BPMXh1ZlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlBZbXBsWTNRdVkzSmxZWFJsSUh4OElHWjFibU4wYVc5dUlHTnlaV0YwWlNoUExDQlFjbTl3WlhKMGFXVnpLWHRjYmlBZ2RtRnlJSEpsYzNWc2REdGNiaUFnYVdZb1R5QWhQVDBnYm5Wc2JDbDdYRzRnSUNBZ1JXMXdkSGxiVUZKUFZFOVVXVkJGWFNBOUlHRnVUMkpxWldOMEtFOHBPMXh1SUNBZ0lISmxjM1ZzZENBOUlHNWxkeUJGYlhCMGVUdGNiaUFnSUNCRmJYQjBlVnRRVWs5VVQxUlpVRVZkSUQwZ2JuVnNiRHRjYmlBZ0lDQXZMeUJoWkdRZ1hDSmZYM0J5YjNSdlgxOWNJaUJtYjNJZ1QySnFaV04wTG1kbGRGQnliM1J2ZEhsd1pVOW1JSEJ2YkhsbWFXeHNYRzRnSUNBZ2NtVnpkV3gwVzBsRlgxQlNUMVJQWFNBOUlFODdYRzRnSUgwZ1pXeHpaU0J5WlhOMWJIUWdQU0JqY21WaGRHVkVhV04wS0NrN1hHNGdJSEpsZEhWeWJpQlFjbTl3WlhKMGFXVnpJRDA5UFNCMWJtUmxabWx1WldRZ1B5QnlaWE4xYkhRZ09pQmtVSE1vY21WemRXeDBMQ0JRY205d1pYSjBhV1Z6S1R0Y2JuMDdYRzRpTENKMllYSWdZVzVQWW1wbFkzUWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTloYmkxdlltcGxZM1FuS1Z4dUlDQXNJRWxGT0Y5RVQwMWZSRVZHU1U1RklEMGdjbVZ4ZFdseVpTZ25MaTlmYVdVNExXUnZiUzFrWldacGJtVW5LVnh1SUNBc0lIUnZVSEpwYldsMGFYWmxJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0Y0hKcGJXbDBhWFpsSnlsY2JpQWdMQ0JrVUNBZ0lDQWdJQ0FnSUNBZ0lDQTlJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVR0Y2JseHVaWGh3YjNKMGN5NW1JRDBnY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0EvSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTQTZJR1oxYm1OMGFXOXVJR1JsWm1sdVpWQnliM0JsY25SNUtFOHNJRkFzSUVGMGRISnBZblYwWlhNcGUxeHVJQ0JoYms5aWFtVmpkQ2hQS1R0Y2JpQWdVQ0E5SUhSdlVISnBiV2wwYVhabEtGQXNJSFJ5ZFdVcE8xeHVJQ0JoYms5aWFtVmpkQ2hCZEhSeWFXSjFkR1Z6S1R0Y2JpQWdhV1lvU1VVNFgwUlBUVjlFUlVaSlRrVXBkSEo1SUh0Y2JpQWdJQ0J5WlhSMWNtNGdaRkFvVHl3Z1VDd2dRWFIwY21saWRYUmxjeWs3WEc0Z0lIMGdZMkYwWTJnb1pTbDdJQzhxSUdWdGNIUjVJQ292SUgxY2JpQWdhV1lvSjJkbGRDY2dhVzRnUVhSMGNtbGlkWFJsY3lCOGZDQW5jMlYwSnlCcGJpQkJkSFJ5YVdKMWRHVnpLWFJvY205M0lGUjVjR1ZGY25KdmNpZ25RV05qWlhOemIzSnpJRzV2ZENCemRYQndiM0owWldRaEp5azdYRzRnSUdsbUtDZDJZV3gxWlNjZ2FXNGdRWFIwY21saWRYUmxjeWxQVzFCZElEMGdRWFIwY21saWRYUmxjeTUyWVd4MVpUdGNiaUFnY21WMGRYSnVJRTg3WEc1OU95SXNJblpoY2lCa1VDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMWtjQ2NwWEc0Z0lDd2dZVzVQWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TDE5aGJpMXZZbXBsWTNRbktWeHVJQ0FzSUdkbGRFdGxlWE1nSUQwZ2NtVnhkV2x5WlNnbkxpOWZiMkpxWldOMExXdGxlWE1uS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWlhOamNtbHdkRzl5Y3ljcElEOGdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblJwWlhNZ09pQm1kVzVqZEdsdmJpQmtaV1pwYm1WUWNtOXdaWEowYVdWektFOHNJRkJ5YjNCbGNuUnBaWE1wZTF4dUlDQmhiazlpYW1WamRDaFBLVHRjYmlBZ2RtRnlJR3RsZVhNZ0lDQTlJR2RsZEV0bGVYTW9VSEp2Y0dWeWRHbGxjeWxjYmlBZ0lDQXNJR3hsYm1kMGFDQTlJR3RsZVhNdWJHVnVaM1JvWEc0Z0lDQWdMQ0JwSUQwZ01GeHVJQ0FnSUN3Z1VEdGNiaUFnZDJocGJHVW9iR1Z1WjNSb0lENGdhU2xrVUM1bUtFOHNJRkFnUFNCclpYbHpXMmtySzEwc0lGQnliM0JsY25ScFpYTmJVRjBwTzF4dUlDQnlaWFIxY200Z1R6dGNibjA3SWl3aVpYaHdiM0owY3k1bUlEMGdUMkpxWldOMExtZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjenNpTENJdkx5QXhPUzR4TGpJdU9TQXZJREUxTGpJdU15NHlJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmloUEtWeHVkbUZ5SUdoaGN5QWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYUdGekp5bGNiaUFnTENCMGIwOWlhbVZqZENBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXOWlhbVZqZENjcFhHNGdJQ3dnU1VWZlVGSlBWRThnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUXRhMlY1Snlrb0owbEZYMUJTVDFSUEp5bGNiaUFnTENCUFltcGxZM1JRY205MGJ5QTlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVTdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnVDJKcVpXTjBMbWRsZEZCeWIzUnZkSGx3WlU5bUlIeDhJR1oxYm1OMGFXOXVLRThwZTF4dUlDQlBJRDBnZEc5UFltcGxZM1FvVHlrN1hHNGdJR2xtS0doaGN5aFBMQ0JKUlY5UVVrOVVUeWtwY21WMGRYSnVJRTliU1VWZlVGSlBWRTlkTzF4dUlDQnBaaWgwZVhCbGIyWWdUeTVqYjI1emRISjFZM1J2Y2lBOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUU4Z2FXNXpkR0Z1WTJWdlppQlBMbU52Ym5OMGNuVmpkRzl5S1h0Y2JpQWdJQ0J5WlhSMWNtNGdUeTVqYjI1emRISjFZM1J2Y2k1d2NtOTBiM1I1Y0dVN1hHNGdJSDBnY21WMGRYSnVJRThnYVc1emRHRnVZMlZ2WmlCUFltcGxZM1FnUHlCUFltcGxZM1JRY205MGJ5QTZJRzUxYkd3N1hHNTlPeUlzSW5aaGNpQm9ZWE1nSUNBZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOW9ZWE1uS1Z4dUlDQXNJSFJ2U1U5aWFtVmpkQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFdsdlltcGxZM1FuS1Z4dUlDQXNJR0Z5Y21GNVNXNWtaWGhQWmlBOUlISmxjWFZwY21Vb0p5NHZYMkZ5Y21GNUxXbHVZMngxWkdWekp5a29abUZzYzJVcFhHNGdJQ3dnU1VWZlVGSlBWRThnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYzJoaGNtVmtMV3RsZVNjcEtDZEpSVjlRVWs5VVR5Y3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnYm1GdFpYTXBlMXh1SUNCMllYSWdUeUFnSUNBZ0lEMGdkRzlKVDJKcVpXTjBLRzlpYW1WamRDbGNiaUFnSUNBc0lHa2dJQ0FnSUNBOUlEQmNiaUFnSUNBc0lISmxjM1ZzZENBOUlGdGRYRzRnSUNBZ0xDQnJaWGs3WEc0Z0lHWnZjaWhyWlhrZ2FXNGdUeWxwWmloclpYa2dJVDBnU1VWZlVGSlBWRThwYUdGektFOHNJR3RsZVNrZ0ppWWdjbVZ6ZFd4MExuQjFjMmdvYTJWNUtUdGNiaUFnTHk4Z1JHOXVKM1FnWlc1MWJTQmlkV2NnSmlCb2FXUmtaVzRnYTJWNWMxeHVJQ0IzYUdsc1pTaHVZVzFsY3k1c1pXNW5kR2dnUGlCcEtXbG1LR2hoY3loUExDQnJaWGtnUFNCdVlXMWxjMXRwS3l0ZEtTbDdYRzRnSUNBZ2ZtRnljbUY1U1c1a1pYaFBaaWh5WlhOMWJIUXNJR3RsZVNrZ2ZId2djbVZ6ZFd4MExuQjFjMmdvYTJWNUtUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVnpkV3gwTzF4dWZUc2lMQ0l2THlBeE9TNHhMakl1TVRRZ0x5QXhOUzR5TGpNdU1UUWdUMkpxWldOMExtdGxlWE1vVHlsY2JuWmhjaUFrYTJWNWN5QWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMXJaWGx6TFdsdWRHVnlibUZzSnlsY2JpQWdMQ0JsYm5WdFFuVm5TMlY1Y3lBOUlISmxjWFZwY21Vb0p5NHZYMlZ1ZFcwdFluVm5MV3RsZVhNbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JQWW1wbFkzUXVhMlY1Y3lCOGZDQm1kVzVqZEdsdmJpQnJaWGx6S0U4cGUxeHVJQ0J5WlhSMWNtNGdKR3RsZVhNb1R5d2daVzUxYlVKMVowdGxlWE1wTzF4dWZUc2lMQ0psZUhCdmNuUnpMbVlnUFNCN2ZTNXdjbTl3WlhKMGVVbHpSVzUxYldWeVlXSnNaVHNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dKcGRHMWhjQ3dnZG1Gc2RXVXBlMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJR1Z1ZFcxbGNtRmliR1VnSURvZ0lTaGlhWFJ0WVhBZ0ppQXhLU3hjYmlBZ0lDQmpiMjVtYVdkMWNtRmliR1U2SUNFb1ltbDBiV0Z3SUNZZ01pa3NYRzRnSUNBZ2QzSnBkR0ZpYkdVZ0lDQWdPaUFoS0dKcGRHMWhjQ0FtSURRcExGeHVJQ0FnSUhaaGJIVmxJQ0FnSUNBZ0lEb2dkbUZzZFdWY2JpQWdmVHRjYm4wN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlvYVdSbEp5azdJaXdpZG1GeUlHUmxaaUE5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxa2NDY3BMbVpjYmlBZ0xDQm9ZWE1nUFNCeVpYRjFhWEpsS0NjdUwxOW9ZWE1uS1Z4dUlDQXNJRlJCUnlBOUlISmxjWFZwY21Vb0p5NHZYM2RyY3ljcEtDZDBiMU4wY21sdVoxUmhaeWNwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBMQ0IwWVdjc0lITjBZWFFwZTF4dUlDQnBaaWhwZENBbUppQWhhR0Z6S0dsMElEMGdjM1JoZENBL0lHbDBJRG9nYVhRdWNISnZkRzkwZVhCbExDQlVRVWNwS1dSbFppaHBkQ3dnVkVGSExDQjdZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkR0ZuZlNrN1hHNTlPeUlzSW5aaGNpQnphR0Z5WldRZ1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUW5LU2duYTJWNWN5Y3BYRzRnSUN3Z2RXbGtJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZkV2xrSnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHdGxlU2w3WEc0Z0lISmxkSFZ5YmlCemFHRnlaV1JiYTJWNVhTQjhmQ0FvYzJoaGNtVmtXMnRsZVYwZ1BTQjFhV1FvYTJWNUtTazdYRzU5T3lJc0luWmhjaUJuYkc5aVlXd2dQU0J5WlhGMWFYSmxLQ2N1TDE5bmJHOWlZV3duS1Z4dUlDQXNJRk5JUVZKRlJDQTlJQ2RmWDJOdmNtVXRhbk5mYzJoaGNtVmtYMThuWEc0Z0lDd2djM1J2Y21VZ0lEMGdaMnh2WW1Gc1cxTklRVkpGUkYwZ2ZId2dLR2RzYjJKaGJGdFRTRUZTUlVSZElEMGdlMzBwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloclpYa3BlMXh1SUNCeVpYUjFjbTRnYzNSdmNtVmJhMlY1WFNCOGZDQW9jM1J2Y21WYmEyVjVYU0E5SUh0OUtUdGNibjA3SWl3aWRtRnlJSFJ2U1c1MFpXZGxjaUE5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x1ZEdWblpYSW5LVnh1SUNBc0lHUmxabWx1WldRZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJSbFptbHVaV1FuS1R0Y2JpOHZJSFJ5ZFdVZ0lDMCtJRk4wY21sdVp5TmhkRnh1THk4Z1ptRnNjMlVnTFQ0Z1UzUnlhVzVuSTJOdlpHVlFiMmx1ZEVGMFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtGUlBYMU5VVWtsT1J5bDdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWgwYUdGMExDQndiM01wZTF4dUlDQWdJSFpoY2lCeklEMGdVM1J5YVc1bktHUmxabWx1WldRb2RHaGhkQ2twWEc0Z0lDQWdJQ0FzSUdrZ1BTQjBiMGx1ZEdWblpYSW9jRzl6S1Z4dUlDQWdJQ0FnTENCc0lEMGdjeTVzWlc1bmRHaGNiaUFnSUNBZ0lDd2dZU3dnWWp0Y2JpQWdJQ0JwWmlocElEd2dNQ0I4ZkNCcElENDlJR3dwY21WMGRYSnVJRlJQWDFOVVVrbE9SeUEvSUNjbklEb2dkVzVrWldacGJtVmtPMXh1SUNBZ0lHRWdQU0J6TG1Ob1lYSkRiMlJsUVhRb2FTazdYRzRnSUNBZ2NtVjBkWEp1SUdFZ1BDQXdlR1E0TURBZ2ZId2dZU0ErSURCNFpHSm1aaUI4ZkNCcElDc2dNU0E5UFQwZ2JDQjhmQ0FvWWlBOUlITXVZMmhoY2tOdlpHVkJkQ2hwSUNzZ01Ta3BJRHdnTUhoa1l6QXdJSHg4SUdJZ1BpQXdlR1JtWm1aY2JpQWdJQ0FnSUQ4Z1ZFOWZVMVJTU1U1SElEOGdjeTVqYUdGeVFYUW9hU2tnT2lCaFhHNGdJQ0FnSUNBNklGUlBYMU5VVWtsT1J5QS9JSE11YzJ4cFkyVW9hU3dnYVNBcklESXBJRG9nS0dFZ0xTQXdlR1E0TURBZ1BEd2dNVEFwSUNzZ0tHSWdMU0F3ZUdSak1EQXBJQ3NnTUhneE1EQXdNRHRjYmlBZ2ZUdGNibjA3SWl3aWRtRnlJSFJ2U1c1MFpXZGxjaUE5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x1ZEdWblpYSW5LVnh1SUNBc0lHMWhlQ0FnSUNBZ0lDQTlJRTFoZEdndWJXRjRYRzRnSUN3Z2JXbHVJQ0FnSUNBZ0lEMGdUV0YwYUM1dGFXNDdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2x1WkdWNExDQnNaVzVuZEdncGUxeHVJQ0JwYm1SbGVDQTlJSFJ2U1c1MFpXZGxjaWhwYm1SbGVDazdYRzRnSUhKbGRIVnliaUJwYm1SbGVDQThJREFnUHlCdFlYZ29hVzVrWlhnZ0t5QnNaVzVuZEdnc0lEQXBJRG9nYldsdUtHbHVaR1Y0TENCc1pXNW5kR2dwTzF4dWZUc2lMQ0l2THlBM0xqRXVOQ0JVYjBsdWRHVm5aWEpjYm5aaGNpQmpaV2xzSUNBOUlFMWhkR2d1WTJWcGJGeHVJQ0FzSUdac2IyOXlJRDBnVFdGMGFDNW1iRzl2Y2p0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnYVhOT1lVNG9hWFFnUFNBcmFYUXBJRDhnTUNBNklDaHBkQ0ErSURBZ1B5Qm1iRzl2Y2lBNklHTmxhV3dwS0dsMEtUdGNibjA3SWl3aUx5OGdkRzhnYVc1a1pYaGxaQ0J2WW1wbFkzUXNJSFJ2VDJKcVpXTjBJSGRwZEdnZ1ptRnNiR0poWTJzZ1ptOXlJRzV2YmkxaGNuSmhlUzFzYVd0bElFVlRNeUJ6ZEhKcGJtZHpYRzUyWVhJZ1NVOWlhbVZqZENBOUlISmxjWFZwY21Vb0p5NHZYMmx2WW1wbFkzUW5LVnh1SUNBc0lHUmxabWx1WldRZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJRWxQWW1wbFkzUW9aR1ZtYVc1bFpDaHBkQ2twTzF4dWZUc2lMQ0l2THlBM0xqRXVNVFVnVkc5TVpXNW5kR2hjYm5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCdGFXNGdJQ0FnSUNBZ1BTQk5ZWFJvTG0xcGJqdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQnlaWFIxY200Z2FYUWdQaUF3SUQ4Z2JXbHVLSFJ2U1c1MFpXZGxjaWhwZENrc0lEQjRNV1ptWm1abVptWm1abVptWm1ZcElEb2dNRHNnTHk4Z2NHOTNLRElzSURVektTQXRJREVnUFQwZ09UQXdOekU1T1RJMU5EYzBNRGs1TVZ4dWZUc2lMQ0l2THlBM0xqRXVNVE1nVkc5UFltcGxZM1FvWVhKbmRXMWxiblFwWEc1MllYSWdaR1ZtYVc1bFpDQTlJSEpsY1hWcGNtVW9KeTR2WDJSbFptbHVaV1FuS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnVDJKcVpXTjBLR1JsWm1sdVpXUW9hWFFwS1R0Y2JuMDdJaXdpTHk4Z055NHhMakVnVkc5UWNtbHRhWFJwZG1Vb2FXNXdkWFFnV3l3Z1VISmxabVZ5Y21Wa1ZIbHdaVjBwWEc1MllYSWdhWE5QWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TDE5cGN5MXZZbXBsWTNRbktUdGNiaTh2SUdsdWMzUmxZV1FnYjJZZ2RHaGxJRVZUTmlCemNHVmpJSFpsY25OcGIyNHNJSGRsSUdScFpHNG5kQ0JwYlhCc1pXMWxiblFnUUVCMGIxQnlhVzFwZEdsMlpTQmpZWE5sWEc0dkx5QmhibVFnZEdobElITmxZMjl1WkNCaGNtZDFiV1Z1ZENBdElHWnNZV2NnTFNCd2NtVm1aWEp5WldRZ2RIbHdaU0JwY3lCaElITjBjbWx1WjF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDd2dVeWw3WEc0Z0lHbG1LQ0ZwYzA5aWFtVmpkQ2hwZENrcGNtVjBkWEp1SUdsME8xeHVJQ0IyWVhJZ1ptNHNJSFpoYkR0Y2JpQWdhV1lvVXlBbUppQjBlWEJsYjJZZ0tHWnVJRDBnYVhRdWRHOVRkSEpwYm1jcElEMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ0lXbHpUMkpxWldOMEtIWmhiQ0E5SUdadUxtTmhiR3dvYVhRcEtTbHlaWFIxY200Z2RtRnNPMXh1SUNCcFppaDBlWEJsYjJZZ0tHWnVJRDBnYVhRdWRtRnNkV1ZQWmlrZ1BUMGdKMloxYm1OMGFXOXVKeUFtSmlBaGFYTlBZbXBsWTNRb2RtRnNJRDBnWm00dVkyRnNiQ2hwZENrcEtYSmxkSFZ5YmlCMllXdzdYRzRnSUdsbUtDRlRJQ1ltSUhSNWNHVnZaaUFvWm00Z1BTQnBkQzUwYjFOMGNtbHVaeWtnUFQwZ0oyWjFibU4wYVc5dUp5QW1KaUFoYVhOUFltcGxZM1FvZG1Gc0lEMGdabTR1WTJGc2JDaHBkQ2twS1hKbGRIVnliaUIyWVd3N1hHNGdJSFJvY205M0lGUjVjR1ZGY25KdmNpaGNJa05oYmlkMElHTnZiblpsY25RZ2IySnFaV04wSUhSdklIQnlhVzFwZEdsMlpTQjJZV3gxWlZ3aUtUdGNibjA3SWl3aWRtRnlJR2xrSUQwZ01GeHVJQ0FzSUhCNElEMGdUV0YwYUM1eVlXNWtiMjBvS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2EyVjVLWHRjYmlBZ2NtVjBkWEp1SUNkVGVXMWliMndvSnk1amIyNWpZWFFvYTJWNUlEMDlQU0IxYm1SbFptbHVaV1FnUHlBbkp5QTZJR3RsZVN3Z0p5bGZKeXdnS0NzcmFXUWdLeUJ3ZUNrdWRHOVRkSEpwYm1jb016WXBLVHRjYm4wN0lpd2lkbUZ5SUhOMGIzSmxJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUW5LU2duZDJ0ekp5bGNiaUFnTENCMWFXUWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmZFdsa0p5bGNiaUFnTENCVGVXMWliMndnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWt1VTNsdFltOXNYRzRnSUN3Z1ZWTkZYMU5aVFVKUFRDQTlJSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMGdKMloxYm1OMGFXOXVKenRjYmx4dWRtRnlJQ1JsZUhCdmNuUnpJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWh1WVcxbEtYdGNiaUFnY21WMGRYSnVJSE4wYjNKbFcyNWhiV1ZkSUh4OElDaHpkRzl5WlZ0dVlXMWxYU0E5WEc0Z0lDQWdWVk5GWDFOWlRVSlBUQ0FtSmlCVGVXMWliMnhiYm1GdFpWMGdmSHdnS0ZWVFJWOVRXVTFDVDB3Z1B5QlRlVzFpYjJ3Z09pQjFhV1FwS0NkVGVXMWliMnd1SnlBcklHNWhiV1VwS1R0Y2JuMDdYRzVjYmlSbGVIQnZjblJ6TG5OMGIzSmxJRDBnYzNSdmNtVTdJaXdpZG1GeUlHTnNZWE56YjJZZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJOc1lYTnpiMlluS1Z4dUlDQXNJRWxVUlZKQlZFOVNJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzZHJjeWNwS0NkcGRHVnlZWFJ2Y2ljcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUQwZ2NtVnhkV2x5WlNnbkxpOWZhWFJsY21GMGIzSnpKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dlgyTnZjbVVuS1M1blpYUkpkR1Z5WVhSdmNrMWxkR2h2WkNBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2FXWW9hWFFnSVQwZ2RXNWtaV1pwYm1Wa0tYSmxkSFZ5YmlCcGRGdEpWRVZTUVZSUFVsMWNiaUFnSUNCOGZDQnBkRnNuUUVCcGRHVnlZWFJ2Y2lkZFhHNGdJQ0FnZkh3Z1NYUmxjbUYwYjNKelcyTnNZWE56YjJZb2FYUXBYVHRjYm4wN0lpd2lkbUZ5SUdGdVQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZZVzR0YjJKcVpXTjBKeWxjYmlBZ0xDQm5aWFFnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WTI5eVpTNW5aWFF0YVhSbGNtRjBiM0l0YldWMGFHOWtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dlgyTnZjbVVuS1M1blpYUkpkR1Z5WVhSdmNpQTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdkbUZ5SUdsMFpYSkdiaUE5SUdkbGRDaHBkQ2s3WEc0Z0lHbG1LSFI1Y0dWdlppQnBkR1Z5Um00Z0lUMGdKMloxYm1OMGFXOXVKeWwwYUhKdmR5QlVlWEJsUlhKeWIzSW9hWFFnS3lBbklHbHpJRzV2ZENCcGRHVnlZV0pzWlNFbktUdGNiaUFnY21WMGRYSnVJR0Z1VDJKcVpXTjBLR2wwWlhKR2JpNWpZV3hzS0dsMEtTazdYRzU5T3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQmhaR1JVYjFWdWMyTnZjR0ZpYkdWeklEMGdjbVZ4ZFdseVpTZ25MaTlmWVdSa0xYUnZMWFZ1YzJOdmNHRmliR1Z6SnlsY2JpQWdMQ0J6ZEdWd0lDQWdJQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFYUmxjaTF6ZEdWd0p5bGNiaUFnTENCSmRHVnlZWFJ2Y25NZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhWFJsY21GMGIzSnpKeWxjYmlBZ0xDQjBiMGxQWW1wbFkzUWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGFXOWlhbVZqZENjcE8xeHVYRzR2THlBeU1pNHhMak11TkNCQmNuSmhlUzV3Y205MGIzUjVjR1V1Wlc1MGNtbGxjeWdwWEc0dkx5QXlNaTR4TGpNdU1UTWdRWEp5WVhrdWNISnZkRzkwZVhCbExtdGxlWE1vS1Z4dUx5OGdNakl1TVM0ekxqSTVJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNTJZV3gxWlhNb0tWeHVMeThnTWpJdU1TNHpMak13SUVGeWNtRjVMbkJ5YjNSdmRIbHdaVnRBUUdsMFpYSmhkRzl5WFNncFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhJdFpHVm1hVzVsSnlrb1FYSnlZWGtzSUNkQmNuSmhlU2NzSUdaMWJtTjBhVzl1S0dsMFpYSmhkR1ZrTENCcmFXNWtLWHRjYmlBZ2RHaHBjeTVmZENBOUlIUnZTVTlpYW1WamRDaHBkR1Z5WVhSbFpDazdJQzh2SUhSaGNtZGxkRnh1SUNCMGFHbHpMbDlwSUQwZ01Ec2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnYm1WNGRDQnBibVJsZUZ4dUlDQjBhR2x6TGw5cklEMGdhMmx1WkRzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2EybHVaRnh1THk4Z01qSXVNUzQxTGpJdU1TQWxRWEp5WVhsSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNVdWJtVjRkQ2dwWEc1OUxDQm1kVzVqZEdsdmJpZ3BlMXh1SUNCMllYSWdUeUFnSUNBZ1BTQjBhR2x6TGw5MFhHNGdJQ0FnTENCcmFXNWtJQ0E5SUhSb2FYTXVYMnRjYmlBZ0lDQXNJR2x1WkdWNElEMGdkR2hwY3k1ZmFTc3JPMXh1SUNCcFppZ2hUeUI4ZkNCcGJtUmxlQ0ErUFNCUExteGxibWQwYUNsN1hHNGdJQ0FnZEdocGN5NWZkQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0J5WlhSMWNtNGdjM1JsY0NneEtUdGNiaUFnZlZ4dUlDQnBaaWhyYVc1a0lEMDlJQ2RyWlhsekp5QWdLWEpsZEhWeWJpQnpkR1Z3S0RBc0lHbHVaR1Y0S1R0Y2JpQWdhV1lvYTJsdVpDQTlQU0FuZG1Gc2RXVnpKeWx5WlhSMWNtNGdjM1JsY0Nnd0xDQlBXMmx1WkdWNFhTazdYRzRnSUhKbGRIVnliaUJ6ZEdWd0tEQXNJRnRwYm1SbGVDd2dUMXRwYm1SbGVGMWRLVHRjYm4wc0lDZDJZV3gxWlhNbktUdGNibHh1THk4Z1lYSm5kVzFsYm5SelRHbHpkRnRBUUdsMFpYSmhkRzl5WFNCcGN5QWxRWEp5WVhsUWNtOTBiMTkyWVd4MVpYTWxJQ2c1TGpRdU5DNDJMQ0E1TGpRdU5DNDNLVnh1U1hSbGNtRjBiM0p6TGtGeVozVnRaVzUwY3lBOUlFbDBaWEpoZEc5eWN5NUJjbkpoZVR0Y2JseHVZV1JrVkc5VmJuTmpiM0JoWW14bGN5Z25hMlY1Y3ljcE8xeHVZV1JrVkc5VmJuTmpiM0JoWW14bGN5Z25kbUZzZFdWekp5azdYRzVoWkdSVWIxVnVjMk52Y0dGaWJHVnpLQ2RsYm5SeWFXVnpKeWs3SWl3aUx5OGdNVGt1TVM0ekxqRWdUMkpxWldOMExtRnpjMmxuYmloMFlYSm5aWFFzSUhOdmRYSmpaU2xjYm5aaGNpQWtaWGh3YjNKMElEMGdjbVZ4ZFdseVpTZ25MaTlmWlhod2IzSjBKeWs3WEc1Y2JpUmxlSEJ2Y25Rb0pHVjRjRzl5ZEM1VElDc2dKR1Y0Y0c5eWRDNUdMQ0FuVDJKcVpXTjBKeXdnZTJGemMybG5iam9nY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFdGemMybG5iaWNwZlNrN0lpd2lKM1Z6WlNCemRISnBZM1FuTzF4dWRtRnlJQ1JoZENBZ1BTQnlaWEYxYVhKbEtDY3VMMTl6ZEhKcGJtY3RZWFFuS1NoMGNuVmxLVHRjYmx4dUx5OGdNakV1TVM0ekxqSTNJRk4wY21sdVp5NXdjbTkwYjNSNWNHVmJRRUJwZEdWeVlYUnZjbDBvS1Z4dWNtVnhkV2x5WlNnbkxpOWZhWFJsY2kxa1pXWnBibVVuS1NoVGRISnBibWNzSUNkVGRISnBibWNuTENCbWRXNWpkR2x2YmlocGRHVnlZWFJsWkNsN1hHNGdJSFJvYVhNdVgzUWdQU0JUZEhKcGJtY29hWFJsY21GMFpXUXBPeUF2THlCMFlYSm5aWFJjYmlBZ2RHaHBjeTVmYVNBOUlEQTdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRzVsZUhRZ2FXNWtaWGhjYmk4dklESXhMakV1TlM0eUxqRWdKVk4wY21sdVowbDBaWEpoZEc5eVVISnZkRzkwZVhCbEpTNXVaWGgwS0NsY2JuMHNJR1oxYm1OMGFXOXVLQ2w3WEc0Z0lIWmhjaUJQSUNBZ0lDQTlJSFJvYVhNdVgzUmNiaUFnSUNBc0lHbHVaR1Y0SUQwZ2RHaHBjeTVmYVZ4dUlDQWdJQ3dnY0c5cGJuUTdYRzRnSUdsbUtHbHVaR1Y0SUQ0OUlFOHViR1Z1WjNSb0tYSmxkSFZ5YmlCN2RtRnNkV1U2SUhWdVpHVm1hVzVsWkN3Z1pHOXVaVG9nZEhKMVpYMDdYRzRnSUhCdmFXNTBJRDBnSkdGMEtFOHNJR2x1WkdWNEtUdGNiaUFnZEdocGN5NWZhU0FyUFNCd2IybHVkQzVzWlc1bmRHZzdYRzRnSUhKbGRIVnliaUI3ZG1Gc2RXVTZJSEJ2YVc1MExDQmtiMjVsT2lCbVlXeHpaWDA3WEc1OUtUc2lMQ0p5WlhGMWFYSmxLQ2N1TDJWek5pNWhjbkpoZVM1cGRHVnlZWFJ2Y2ljcE8xeHVkbUZ5SUdkc2IySmhiQ0FnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5bmJHOWlZV3duS1Z4dUlDQXNJR2hwWkdVZ0lDQWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlvYVdSbEp5bGNiaUFnTENCSmRHVnlZWFJ2Y25NZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFYUmxjbUYwYjNKekp5bGNiaUFnTENCVVQxOVRWRkpKVGtkZlZFRkhJRDBnY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjNSdlUzUnlhVzVuVkdGbkp5azdYRzVjYm1admNpaDJZWElnWTI5c2JHVmpkR2x2Ym5NZ1BTQmJKMDV2WkdWTWFYTjBKeXdnSjBSUFRWUnZhMlZ1VEdsemRDY3NJQ2ROWldScFlVeHBjM1FuTENBblUzUjViR1ZUYUdWbGRFeHBjM1FuTENBblExTlRVblZzWlV4cGMzUW5YU3dnYVNBOUlEQTdJR2tnUENBMU95QnBLeXNwZTF4dUlDQjJZWElnVGtGTlJTQWdJQ0FnSUNBOUlHTnZiR3hsWTNScGIyNXpXMmxkWEc0Z0lDQWdMQ0JEYjJ4c1pXTjBhVzl1SUQwZ1oyeHZZbUZzVzA1QlRVVmRYRzRnSUNBZ0xDQndjbTkwYnlBZ0lDQWdJRDBnUTI5c2JHVmpkR2x2YmlBbUppQkRiMnhzWldOMGFXOXVMbkJ5YjNSdmRIbHdaVHRjYmlBZ2FXWW9jSEp2ZEc4Z0ppWWdJWEJ5YjNSdlcxUlBYMU5VVWtsT1IxOVVRVWRkS1docFpHVW9jSEp2ZEc4c0lGUlBYMU5VVWtsT1IxOVVRVWNzSUU1QlRVVXBPMXh1SUNCSmRHVnlZWFJ2Y25OYlRrRk5SVjBnUFNCSmRHVnlZWFJ2Y25NdVFYSnlZWGs3WEc1OUlsMTkifQ==
