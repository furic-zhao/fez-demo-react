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

var _index3 = require('./module/fezdesc/index');

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

},{"./module/fezdesc/index":2,"./module/jumbotron/index":4,"public/module/common/footer":8,"public/module/common/header":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: "fezdesc",
    getInitialState: function getInitialState() {
        return {
            fezdesc: ""
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        _service2.default.renderData().then(function (data) {
            _this.setState({
                fezdesc: data
            });
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "container fezdesc" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "h3",
                        null,
                        this.state.fezdesc
                    ),
                    React.createElement("div", { className: "fez-big-logo" })
                )
            ),
            React.createElement("hr", null)
        );
    }
});

},{"./service":3}],3:[function(require,module,exports){
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
            resolve(_demoData2.default.index.fezdesc);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":6}],4:[function(require,module,exports){
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

},{"./service":5,"babel-runtime/helpers/extends":12}],5:[function(require,module,exports){
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
            resolve(_demoData2.default.index.jumbotron);
        });
    }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"public/demo-data":6}],6:[function(require,module,exports){
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdmlld3MvaW5kZXgvaW5kZXguanMiLCJzcmMvdmlld3MvaW5kZXgvbW9kdWxlL2ZlemRlc2MvaW5kZXguanMiLCJzcmMvdmlld3MvaW5kZXgvbW9kdWxlL2ZlemRlc2Mvc2VydmljZS5qcyIsInNyYy92aWV3cy9pbmRleC9tb2R1bGUvanVtYm90cm9uL2luZGV4LmpzIiwic3JjL3ZpZXdzL2luZGV4L21vZHVsZS9qdW1ib3Ryb24vc2VydmljZS5qcyIsInNyYy92aWV3cy9wdWJsaWMvZGVtby1kYXRhLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL2NvbW1vbi5qcyIsInNyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9mb290ZXIuanMiLCJzcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vaGVhZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBSSxPQUFPLGdCQUFNLFdBQU4sQ0FBa0I7QUFBQTtBQUM1QixPQUQ0QixvQkFDbkI7QUFDUixTQUNDO0FBQUE7QUFBQTtBQUNLLHdEQURMO0FBRUssdURBRkw7QUFHSyx1REFITDtBQUlLO0FBSkwsR0FERDtBQVFBO0FBVjJCLENBQWxCLENBQVg7O0FBYUEsbUJBQVMsTUFBVCxDQUNDLDhCQUFDLElBQUQsT0FERCxFQUVDLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUZEOzs7Ozs7Ozs7OztBQ3RCQTs7Ozs7O2tCQUVlLE1BQU0sV0FBTixDQUFrQjtBQUFBO0FBQzdCLG1CQUQ2Qiw2QkFDWDtBQUNkLGVBQU87QUFDSCxxQkFBUztBQUROLFNBQVA7QUFHSCxLQUw0QjtBQU03QixxQkFONkIsK0JBTVQ7QUFBQTs7QUFFaEIsMEJBQVEsVUFBUixHQUFxQixJQUFyQixDQUEwQixVQUFDLElBQUQsRUFBVTtBQUNoQyxrQkFBSyxRQUFMLENBQWM7QUFDVix5QkFBUztBQURDLGFBQWQ7QUFHSCxTQUpEO0FBS0gsS0FiNEI7QUFjN0IsVUFkNkIsb0JBY3BCO0FBQ0wsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQ0o7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFdBQWY7QUFDSTtBQUFBO0FBQUE7QUFBSyw2QkFBSyxLQUFMLENBQVc7QUFBaEIscUJBREo7QUFFSSxpREFBSyxXQUFVLGNBQWY7QUFGSjtBQURKLGFBREk7QUFPSjtBQVBJLFNBREo7QUFZSDtBQTNCNEIsQ0FBbEIsQzs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGNBRFcsd0JBQ0U7QUFDVCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsS0FBUixDQUFjLE9BQXRCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFMVSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKZjs7Ozs7O2tCQUVlLE1BQU0sV0FBTixDQUFrQjtBQUFBO0FBQzdCLG1CQUQ2Qiw2QkFDWDtBQUNkLGVBQU87QUFDSCwyQkFBZTtBQUNYLHVCQUFPLEVBREk7QUFFWCx5QkFBUyxFQUZFO0FBR1gsd0JBQVE7QUFDSiw0QkFESTtBQUVKLDBCQUFNO0FBRkY7QUFIRztBQURaLFNBQVA7QUFVSCxLQVo0QjtBQWE3QixxQkFiNkIsK0JBYVQ7QUFBQTs7QUFFaEIsMEJBQVEsVUFBUixHQUFxQixJQUFyQixDQUEwQixVQUFDLElBQUQsRUFBVTtBQUNoQyxrQkFBSyxRQUFMLENBQWM7QUFDViwrQkFBZSx1QkFBYyxFQUFkLEVBQWtCLElBQWxCO0FBREwsYUFBZDtBQUdILFNBSkQ7QUFLSCxLQXBCNEI7QUFxQjdCLFVBckI2QixvQkFxQnBCO0FBQ0wsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSjtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUsseUJBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUI7QUFBOUIsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSSx5QkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QjtBQUE3QixpQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUNJLCtDQUFHLFdBQVUsd0JBQWIsRUFBc0MsTUFBTSxLQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLE1BQXpCLENBQWdDLElBQTVFLEVBQWtGLE1BQUssUUFBdkYsRUFBZ0cseUJBQXlCO0FBQ3pILG9DQUFRLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsTUFBekIsQ0FBZ0M7QUFEaUYseUJBQXpIO0FBREo7QUFISjtBQURJLFNBREo7QUFjSDtBQXBDNEIsQ0FBbEIsQzs7Ozs7Ozs7OztBQ0ZmOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGNBRFcsd0JBQ0U7QUFDVCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsS0FBUixDQUFjLFNBQXRCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFMVSxDOzs7Ozs7Ozs7O0FDSmYsSUFBSSxTQUFTLENBQUM7QUFDVixXQUFPLFFBREc7QUFFVixVQUFNLDJFQUZJO0FBR1Ysa3dFQUhVO0FBMkRWLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUEzREEsQ0FBRCxFQStEVjtBQUNDLFdBQU8sS0FEUjtBQUVDLFVBQU0sK0RBRlA7QUFHQyxxaEJBSEQ7QUFZQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBWlgsQ0EvRFUsRUErRVY7QUFDQyxXQUFPLE1BRFI7QUFFQyxVQUFNLGdFQUZQO0FBR0MsaWNBSEQ7QUFRQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBUlgsQ0EvRVUsRUEyRlY7QUFDQyxXQUFPLFlBRFI7QUFFQyxVQUFNLG1FQUZQO0FBR0MseWZBSEQ7QUFhQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBYlgsQ0EzRlUsRUE0R1Y7QUFDQyxXQUFPLE9BRFI7QUFFQyxVQUFNLDJFQUZQO0FBR0MsaXZLQUhEO0FBMkNDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUEzQ1gsQ0E1R1UsRUEySlY7QUFDQyxXQUFPLGFBRFI7QUFFQyxVQUFNLHdFQUZQO0FBR0MsOGJBSEQ7QUFJQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBSlgsQ0EzSlUsQ0FBYjs7QUFxS0EsSUFBSSxRQUFRO0FBQ1IsYUFBUyxpQkFERDtBQUVSLGVBQVc7QUFDUCxlQUFPLHVCQURBO0FBRVAsaUJBQVMsK0NBRkY7QUFHUCxnQkFBUTtBQUNKLDZEQURJO0FBRUosa0JBQU07QUFGRjtBQUhEO0FBRkgsQ0FBWjs7QUFZQSxJQUFJLE9BQU87QUFDUCxlQUFXO0FBQ1AsZUFBTyxzQkFEQTtBQUVQLGlCQUFTLGdEQUZGO0FBR1AsZ0JBQVE7QUFDSixrQkFBTSxRQURGO0FBRUosa0JBQU07QUFGRjtBQUhEO0FBREosQ0FBWDs7QUFXQSxJQUFJLFNBQVM7QUFDVCxjQUFVLGdCQUREOztBQUdULGFBQVMsQ0FBQztBQUNOLGNBQU0sSUFEQTtBQUVOLGNBQU07QUFGQSxLQUFELEVBR047QUFDQyxjQUFNLFNBRFA7QUFFQyxjQUFNO0FBRlAsS0FITSxDQUhBOztBQVdULGdCQUFZO0FBWEgsQ0FBYjs7a0JBY2U7QUFDWCxhQUFTLEtBREU7QUFFWCxZQUFRLElBRkc7QUFHWCxjQUFVLE1BSEM7QUFJWCxjQUFVO0FBSkMsQzs7Ozs7Ozs7OztBQzFNZjs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDWCxXQURXLHFCQUNEO0FBQ0YsZUFBTyxZQUFFLE9BQUYsQ0FBVSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ2xDLG9CQUFRLG1CQUFRLE1BQVIsQ0FBZSxPQUF2QjtBQUNILFNBRk0sQ0FBUDtBQUdILEtBTE07QUFNUCxZQU5PLHNCQU1JO0FBQ1AsZUFBTyxZQUFFLE9BQUYsQ0FBVSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ2xDLG9CQUFRLG1CQUFRLE1BQVIsQ0FBZSxRQUF2QjtBQUNILFNBRk0sQ0FBUDtBQUdILEtBVk07QUFXUCxjQVhPLHdCQVdNO0FBQ1QsZUFBTyxZQUFFLE9BQUYsQ0FBVSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ2xDLG9CQUFRLG1CQUFRLE1BQVIsQ0FBZSxVQUF2QjtBQUNILFNBRk0sQ0FBUDtBQUdIO0FBZk0sQzs7Ozs7Ozs7Ozs7QUNKZjs7Ozs7O2tCQUVlLE1BQU0sV0FBTixDQUFrQjtBQUFBO0FBQzdCLG1CQUQ2Qiw2QkFDWDtBQUNkLGVBQU87QUFDSCx3QkFBWTtBQURULFNBQVA7QUFHSCxLQUw0QjtBQU03QixxQkFONkIsK0JBTVQ7QUFBQTs7QUFDaEIseUJBQVEsVUFBUixHQUFxQixJQUFyQixDQUEwQixVQUFDLElBQUQsRUFBVTtBQUNoQyxrQkFBSyxRQUFMLENBQWM7QUFDViw0QkFBWTtBQURGLGFBQWQ7QUFHSCxTQUpEO0FBS0gsS0FaNEI7QUFhN0IsVUFiNkIsb0JBYXBCOztBQUVMLGVBQVE7QUFBQTtBQUFBLGNBQVEsV0FBVSxXQUFsQjtBQUNSO0FBQUE7QUFBQSxrQkFBTSxXQUFVLFdBQWhCO0FBQTZCLHFCQUFLLEtBQUwsQ0FBVztBQUF4QyxhQURRO0FBRVI7QUFBQTtBQUFBLGtCQUFNLFdBQVUsWUFBaEI7QUFDQSwyQ0FBRyxXQUFVLGtCQUFiLEdBREE7QUFFQSwyQ0FBRyxXQUFVLGlCQUFiO0FBRkE7QUFGUSxTQUFSO0FBUUg7QUF2QjRCLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFDQTs7Ozs7O2tCQUVlLE1BQU0sV0FBTixDQUFrQjtBQUFBO0FBQzdCLG1CQUQ2Qiw2QkFDWDtBQUNkLGVBQU87QUFDSCxxQkFBUztBQUNMLDBCQUFVLEVBREw7QUFFTCx5QkFBUztBQUZKO0FBRE4sU0FBUDtBQU1ILEtBUjRCO0FBUzdCLHFCQVQ2QiwrQkFTVDtBQUFBOztBQUNoQixvQkFBRSxHQUFGLENBQU0sQ0FDRixpQkFBUSxRQUFSLEVBREUsRUFFRixpQkFBUSxPQUFSLEVBRkUsQ0FBTixFQUdHLElBSEgsQ0FHUSxVQUFDLElBQUQsRUFBVTtBQUNkLGdCQUFJLFVBQVU7QUFDViwwQkFBVSxLQUFLLENBQUwsQ0FEQTtBQUVWLHlCQUFTLEtBQUssQ0FBTDtBQUZDLGFBQWQ7QUFJQSxrQkFBSyxRQUFMLENBQWM7QUFDVix5QkFBUztBQURDLGFBQWQ7QUFHSCxTQVhEO0FBWUgsS0F0QjRCO0FBdUI3QixVQXZCNkIsb0JBdUJwQjtBQUNMLFlBQUksVUFBVSxFQUFkOztBQURLO0FBQUE7QUFBQTs7QUFBQTtBQUdMLDREQUFpQixLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLE9BQXBDLDRHQUE2QztBQUFBLG9CQUFwQyxJQUFvQzs7QUFDekMsd0JBQVEsSUFBUixDQUFhO0FBQUE7QUFBQSxzQkFBSSxLQUFLLEtBQUssSUFBZDtBQUFvQjtBQUFBO0FBQUEsMEJBQUcsTUFBTSxLQUFLLElBQWQ7QUFBcUIsNkJBQUs7QUFBMUI7QUFBcEIsaUJBQWI7QUFDSDtBQUxJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT0wsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLHdDQUFmO0FBQ0o7QUFBQTtBQUFBLGtCQUFLLFdBQVUsV0FBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUseUJBQWhDLEVBQTBELGVBQVksVUFBdEUsRUFBaUYsZUFBWSxTQUE3RixFQUF1RyxpQkFBYyxPQUFySCxFQUE2SCxpQkFBYyxRQUEzSTtBQUNJO0FBQUE7QUFBQSw4QkFBTSxXQUFVLFNBQWhCO0FBQUE7QUFBQSx5QkFESjtBQUVJLHNEQUFNLFdBQVUsVUFBaEIsR0FGSjtBQUdJLHNEQUFNLFdBQVUsVUFBaEIsR0FISjtBQUlJLHNEQUFNLFdBQVUsVUFBaEI7QUFKSixxQkFESjtBQU9JO0FBQUE7QUFBQSwwQkFBRyxXQUFVLGNBQWIsRUFBNEIsTUFBSyxHQUFqQztBQUFzQyw2QkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQjtBQUF6RDtBQVBKLGlCQURKO0FBVUk7QUFBQTtBQUFBLHNCQUFLLElBQUcsUUFBUixFQUFpQixXQUFVLDBCQUEzQjtBQUNJO0FBQUE7QUFBQSwwQkFBSSxXQUFVLGdCQUFkO0FBQ0M7QUFERDtBQURKO0FBVko7QUFESSxTQURKO0FBcUJIO0FBbkQ0QixDQUFsQixDOzs7OztBQ0hmOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICdwdWJsaWMvbW9kdWxlL2NvbW1vbi9oZWFkZXInO1xyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gJy4vbW9kdWxlL2p1bWJvdHJvbi9pbmRleCc7XHJcbmltcG9ydCBGZXpkZXNjIGZyb20gJy4vbW9kdWxlL2ZlemRlc2MvaW5kZXgnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ3B1YmxpYy9tb2R1bGUvY29tbW9uL2Zvb3Rlcic7XHJcblxyXG5cclxubGV0IFBhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEp1bWJvdHJvbiAvPlxyXG4gICAgICAgIDxGZXpkZXNjIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cdDxQYWdlIC8+LFxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4pOyIsImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmZXpkZXNjOiBcIlwiXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICBTZXJ2aWNlLnJlbmRlckRhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmZXpkZXNjOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmZXpkZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5mZXpkZXNjfTwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZXotYmlnLWxvZ29cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIC8+XG4gICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG59KTsiLCJpbXBvcnQgUSBmcm9tICdxJztcblxuaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlckRhdGEoKSB7XG4gICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmluZGV4LmZlemRlc2MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAganVtYm90cm9uRGF0YToge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGBgLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAganVtYm90cm9uRGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuanVtYm90cm9uRGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuanVtYm90cm9uRGF0YS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBocmVmPXt0aGlzLnN0YXRlLmp1bWJvdHJvbkRhdGEuYnV0dG9uLmhyZWZ9IHJvbGU9XCJidXR0b25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogdGhpcy5zdGF0ZS5qdW1ib3Ryb25EYXRhLmJ1dHRvbi5uYW1lXG4gICAgICAgICAgICB9fT48L2E+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxufSk7IiwiaW1wb3J0IFEgZnJvbSAncSc7XG5cbmltcG9ydCBBcGlEYXRhIGZyb20gJ3B1YmxpYy9kZW1vLWRhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJEYXRhKCkge1xuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoQXBpRGF0YS5pbmRleC5qdW1ib3Ryb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJsZXQgZnJhbWVzID0gW3tcbiAgICB0aXRsZTogXCJOb2RlanNcIixcbiAgICBkZXNjOiBcIkZFWiDmnoTlu7rlnKggTm9kZUpTIOWfuuS6jiBDaHJvbWUgVjgg5byV5pOO55qEIEphdmFTY3JpcHQg6L+Q6KGM546v5aKD77yM5YW25LqL5Lu26amx5Yqo6Z2e6Zi75aGe55qE54m55oCn77yM5p6B5YW25b+r6YCf55qE57yW6K+R5YmN56uv5ZCE56eN6LWE5rqQXCIsXG4gICAgY29udGVudDogYDxkaXYgaWQ9XCJob21lLWludHJvXCI+XG5cbiAgICAgICAgPHA+Tm9kZS5qc8KuIGlzIGEgSmF2YVNjcmlwdCBydW50aW1lIGJ1aWx0IG9uIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS92OC9cIj5DaHJvbWUncyBWOCBKYXZhU2NyaXB0IGVuZ2luZTwvYT4uXG5Ob2RlLmpzIHVzZXMgYW4gZXZlbnQtZHJpdmVuLCBub24tYmxvY2tpbmcgSS9PIG1vZGVsIHRoYXQgbWFrZXMgaXRcbmxpZ2h0d2VpZ2h0IGFuZCBlZmZpY2llbnQuIE5vZGUuanMnIHBhY2thZ2UgZWNvc3lzdGVtLCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL1wiPm5wbTwvYT4sIGlzIHRoZSBsYXJnZXN0IGVjb3N5c3RlbSBvZiBvcGVuXG5zb3VyY2UgbGlicmFyaWVzIGluIHRoZSB3b3JsZC48L3A+XG5cblxuXG4gICAgICAgIDxoMiBpZD1cImhvbWUtZG93bmxvYWRoZWFkXCIgZGF0YS1kbC1sb2NhbD1cIkRvd25sb2FkIGZvclwiPkRvd25sb2FkIGZvciBtYWNPUyAoeDY0KTwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtZG93bmxvYWRibG9ja1wiPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L3Y2LjEwLjAvbm9kZS12Ni4xMC4wLnBrZ1wiIGNsYXNzPVwiaG9tZS1kb3dubG9hZGJ1dHRvblwiIHRpdGxlPVwiRG93bmxvYWQgdjYuMTAuMCBMVFNcIiBkYXRhLXZlcnNpb249XCJ2Ni4xMC4wXCI+XG4gICAgICAgICAgICB2Ni4xMC4wIExUU1xuICAgICAgICAgICAgPHNtYWxsPlJlY29tbWVuZGVkIEZvciBNb3N0IFVzZXJzPC9zbWFsbD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWRpdmlkZXItcGlwZSBob21lLXNlY29uZGFyeS1saW5rc1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2VuL2Rvd25sb2FkL1wiPk90aGVyIERvd25sb2FkczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvZG9jL2NoYW5nZWxvZ3MvQ0hBTkdFTE9HX1Y2Lm1kIzYuMTAuMFwiPkNoYW5nZWxvZzwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QtdjYueC9kb2NzL2FwaS9cIj5BUEkgRG9jczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWRvd25sb2FkYmxvY2tcIj5cblxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L3Y3LjcuMS9ub2RlLXY3LjcuMS5wa2dcIiBjbGFzcz1cImhvbWUtZG93bmxvYWRidXR0b25cIiB0aXRsZT1cIkRvd25sb2FkIHY3LjcuMSBDdXJyZW50XCIgZGF0YS12ZXJzaW9uPVwidjcuNy4xXCI+XG4gICAgICAgICAgICAgIHY3LjcuMSBDdXJyZW50XG4gICAgICAgICAgICAgIDxzbWFsbD5MYXRlc3QgRmVhdHVyZXM8L3NtYWxsPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWRpdmlkZXItcGlwZSBob21lLXNlY29uZGFyeS1saW5rc1wiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9jdXJyZW50L1wiPk90aGVyIERvd25sb2FkczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvZG9jL2NoYW5nZWxvZ3MvQ0hBTkdFTE9HX1Y3Lm1kIzcuNy4xXCI+Q2hhbmdlbG9nPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC12Ny54L2RvY3MvYXBpL1wiPkFQSSBEb2NzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBPciBoYXZlIGEgbG9vayBhdCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvTFRTI2x0cy1zY2hlZHVsZVwiPkxUUyBzY2hlZHVsZS48L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL25vZGVqcy5vcmcvXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiTlBNXCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIE5QTSDmjqXlhaXlhajnkIPmnIDlpKfnmoTlvIDmupDnlJ/mgIHns7vnu5/vvIzlhbflpIfml6DpmZDnmoTlip/og73mianlsZXog73lipvvvIzlj6/mlbTlkIjlm73pmYXliY3msr/nmoTlvIDmupDmoYbmnrbvvIzpgILlupTnnqzmga/kuIflj5jnmoTmioDmnK/mm7Tmm79cIixcbiAgICBjb250ZW50OiBgPGgxIGNsYXNzPVwidGl0bGUgZW0tZGVmYXVsdCB0eXBlLW5ldXRyYWwtMTFcIj5cbiAgICAgICAgICBCdWlsZCBhbWF6aW5nIHRoaW5nc1xuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzcz1cImg1IGVtLWRlZmF1bHQgdHlwZS1uZXV0cmFsLTExIHBieGxcIj5cbiAgICAgICAgICBucG0gaXMgdGhlIHBhY2thZ2UgbWFuYWdlciBmb3IgSmF2YVNjcmlwdC4gRmluZCwgc2hhcmUsIGFuZCByZXVzZVxuICAgICAgICAgIHBhY2thZ2VzIG9mIGNvZGUgZnJvbSBodW5kcmVkcyBvZiB0aG91c2FuZHMgb2YgZGV2ZWxvcGVycyDigJQgYW5kXG4gICAgICAgICAgYXNzZW1ibGUgdGhlbSBpbiBwb3dlcmZ1bCBuZXcgd2F5cy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YSBpZD1cIm1haW4tY3RhXCIgaHJlZj1cIiNwYW5lLWhvbWVwYWdlLXByaWNpbmdcIiBjbGFzcz1cImJ0biBidG4taGlnaGxpZ2h0LTMgbXJsXCIgZGF0YS1ldmVudC1uYW1lPVwiaG9tZXBhZ2UtaGVyby1jdGFcIj5HZXQgc3RhcnRlZDwvYT5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubnBtanMuY29tL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkd1bHBcIixcbiAgICBkZXNjOiBcIkZFWiDmlbTlkIhHdWxw55qE5LyX5aSa5o+S5Lu277yM57yW6K+R44CB5LyY5YyW5ZKM57uE57uH5YmN56uv5aSN5p2C55qE5qih5Z2X5Y+K6Z2Z5oCB6LWE5rqQ77yM5Zad552A5Y+v5LmQ5YS/44CB5ZO8552A5bCP5puy5YS/77yM6Ieq5Yqo5YyW5a6M5oiQ5YmN56uv5aSn6YeP6YeN5aSN5bel5L2cXCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cImhlYWRpbmcgdGV4dC1jZW50ZXJcIj5BdXRvbWF0ZSBhbmQgZW5oYW5jZSB5b3VyIHdvcmtmbG93PC9oMT48aDIgY2xhc3M9XCJwYXJhZ3JhcGhcIj5cbiAgICAgICAgICBndWxwIGlzIGEgdG9vbGtpdCBmb3IgYXV0b21hdGluZyBwYWluZnVsIG9yIHRpbWUtY29uc3VtaW5nIHRhc2tzIGluIHlvdXIgZGV2ZWxvcG1lbnQgd29ya2Zsb3csIHNvIHlvdSBjYW4gc3RvcCBtZXNzaW5nIGFyb3VuZCBhbmQgYnVpbGQgc29tZXRoaW5nLlxuICAgICAgICA8L2gyPjxkaXYgY2xhc3M9XCJjdGFzXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjdGFzLWJ1dHRvblwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3VscGpzL2d1bHAvYmxvYi9tYXN0ZXIvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQubWRcIj5HZXQgU3RhcnRlZDwvYT5cbiAgICAgICAgPC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHA6Ly9ndWxwanMuY29tL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJyb3dzZXJpZnlcIixcbiAgICBkZXNjOiBcIkZFWiDkvb/nlKggQnJvd3NlcmlmeSDmqKHlnZfljJbnu4Tnu4flkoznrqHnkIbpobnnm67nmoTlkITkuKrlip/og73mqKHlnZfvvIzmnoHlpKfmj5DljYfpobnnm67nmoTlj6/nu7TmiqTmgKfjgIHlip/og73lpI3nlKjmgKfvvIzlubblrp7njrDnp6/mnKjlvI/nmoTmkK3lu7rnvZHpobVcIixcbiAgICBjb250ZW50OiBgPHNlY3Rpb24gaWQ9XCJ0b3AtaG9tZS1zZWN0aW9uXCIgY2xhc3M9XCJ0b3Atc2VjdGlvbiBjb2xvci1hXCI+XG4gICAgICA8ZGl2IGlkPVwidG9wLWhvbWUtaW1hZ2VcIj48L2Rpdj5cblxuICAgICAgIDxoMyBpZD1cInRvcC1zdWJ0aXRsZVwiIGNsYXNzPVwibGFyZ2UtZm9udFwiPkJyb3dzZXJpZnkgbGV0cyB5b3UgcmVxdWlyZSg8c3BhbiBjbGFzcz1cImNvbG9yLWRcIj4nbW9kdWxlcyc8L3NwYW4+KSBpbiB0aGUgYnJvd3NlciBieSBidW5kbGluZyB1cCBhbGwgb2YgeW91ciBkZXBlbmRlbmNpZXMuPC9oMz5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svbm9kZS1icm93c2VyaWZ5I3VzYWdlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b3AtYnV0dG9uXCIgaWQ9XCJ0b3AtYnV0dG9uMlwiPlxuICAgICAgICAgIERvY3VtZW50YXRpb25cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2E+XG4gICAgPC9zZWN0aW9uPmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwOi8vYnJvd3NlcmlmeS5vcmcvXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiQm93ZXJcIixcbiAgICBkZXNjOiBcIkZFWiDlj6/phY3nva7kvb/nlKggQm93ZXIg5pCc57Si44CB5a6J6KOF44CB5pu05paw5ZKM5Y246L295aaCSmF2YVNjcmlwdOOAgUNTU+S5i+exu+eahOe9kee7nOi1hOa6kO+8jOmAmui/h+iHquWKqOWMluazqOWFpeaKgOacr+WujOe+juino+WGs+WkjeadgueahOahhuaetuWMheeuoeeQhumXrumimFwiLFxuICAgIGNvbnRlbnQ6IGA8ZGl2IGNsYXNzPVwibWFpblwiPlxuPHAgY2xhc3M9XCJsZWFkXCI+V2ViIHNpdGVzIGFyZSBtYWRlIG9mIGxvdHMgb2YgdGhpbmdzIOKAlCBmcmFtZXdvcmtzLCBsaWJyYXJpZXMsIGFzc2V0cywgYW5kIHV0aWxpdGllcy4gQm93ZXIgbWFuYWdlcyBhbGwgdGhlc2UgdGhpbmdzIGZvciB5b3UuPC9wPlxuPHA+S2VlcGluZyB0cmFjayBvZiBhbGwgdGhlc2UgcGFja2FnZXMgYW5kIG1ha2luZyBzdXJlIHRoZXkgYXJlIHVwIHRvIGRhdGUgKG9yIHNldCB0byB0aGUgc3BlY2lmaWMgdmVyc2lvbnMgeW91IG5lZWQpIGlzIHRyaWNreS4gQm93ZXIgdG8gdGhlIHJlc2N1ZSE8L3A+XG48cD5Cb3dlciBjYW4gbWFuYWdlIGNvbXBvbmVudHMgdGhhdCBjb250YWluIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgZm9udHMgb3IgZXZlbiBpbWFnZSBmaWxlcy4gQm93ZXIgZG9lc27igJl0IGNvbmNhdGVuYXRlIG9yIG1pbmlmeSBjb2RlIG9yIGRvIGFueXRoaW5nIGVsc2UgLSBpdCBqdXN0IGluc3RhbGxzIHRoZSByaWdodCB2ZXJzaW9ucyBvZiB0aGUgcGFja2FnZXMgeW91IG5lZWQgYW5kIHRoZWlyIGRlcGVuZGVuY2llcy48L3A+XG48cD5UbyA8YSBocmVmPVwiI2dldHRpbmctc3RhcnRlZFwiPmdldCBzdGFydGVkPC9hPiwgQm93ZXIgd29ya3MgYnkgZmV0Y2hpbmcgYW5kIGluc3RhbGxpbmcgPGEgaHJlZj1cIi9zZWFyY2hcIj5wYWNrYWdlczwvYT4gZnJvbSBhbGwgb3ZlciwgdGFraW5nIGNhcmUgb2YgaHVudGluZywgZmluZGluZywgZG93bmxvYWRpbmcsIGFuZCBzYXZpbmcgdGhlIHN0dWZmIHlvdeKAmXJlIGxvb2tpbmcgZm9yLiBCb3dlciBrZWVwcyB0cmFjayBvZiB0aGVzZSBwYWNrYWdlcyBpbiBhIG1hbmlmZXN0IGZpbGUsIDxhIGhyZWY9XCIvZG9jcy9jcmVhdGluZy1wYWNrYWdlcy8jYm93ZXJqc29uXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+PC9hPi4gSG93IHlvdSB1c2UgPGEgaHJlZj1cIi9zZWFyY2hcIj5wYWNrYWdlczwvYT4gaXMgdXAgdG8geW91LiBCb3dlciBwcm92aWRlcyBob29rcyB0byBmYWNpbGl0YXRlIHVzaW5nIHBhY2thZ2VzIGluIHlvdXIgPGEgaHJlZj1cIi9kb2NzL3Rvb2xzXCI+dG9vbHMgYW5kIHdvcmtmbG93czwvYT4uPC9wPlxuPHA+Qm93ZXIgaXMgb3B0aW1pemVkIGZvciB0aGUgZnJvbnQtZW5kLiBJZiBtdWx0aXBsZSBwYWNrYWdlcyBkZXBlbmQgb24gYSBwYWNrYWdlIC0galF1ZXJ5IGZvciBleGFtcGxlIC0gQm93ZXIgd2lsbCBkb3dubG9hZCBqUXVlcnkganVzdCBvbmNlLiBUaGlzIGlzIGtub3duIGFzIGEgZmxhdCBkZXBlbmRlbmN5IGdyYXBoIGFuZCBpdCBoZWxwcyByZWR1Y2UgcGFnZSBsb2FkLjwvcD5cbjxoMiBpZD1cImluc3RhbGwtYm93ZXJcIj48YSBocmVmPVwiI2luc3RhbGwtYm93ZXJcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5JbnN0YWxsIEJvd2VyPC9oMj5cbjxwPkJvd2VyIGlzIGEgY29tbWFuZCBsaW5lIHV0aWxpdHkuIEluc3RhbGwgaXQgd2l0aCBucG0uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ucG0gaW5zdGFsbCAtZyBib3dlcjwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxwPkJvd2VyIHJlcXVpcmVzIDxhIGhyZWY9XCJodHRwOi8vbm9kZWpzLm9yZy9cIj5ub2RlLCBucG08L2E+IGFuZCA8YSBocmVmPVwiaHR0cDovL2dpdC1zY20ub3JnXCI+Z2l0PC9hPi48L3A+XG48cD5MYXRlc3QgcmVsZWFzZTogPGEgaHJlZj1cIlwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9ib3dlci5zdmc/bWF4QWdlPTI1OTIwMDBcIiBhbHQ9XCJib3dlciB2ZXJzaW9uXCI+PC9hPjwvcD5cbjxwPkZvciB0cm91Ymxlc2hvb3RpbmcgaW5zdGFsbGF0aW9uIG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMsIHJlYWQgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYm93ZXIvYm93ZXIvd2lraS9Ucm91Ymxlc2hvb3RpbmdcIj50cm91Ymxlc2hvb3Rpbmc8L2E+IHdpa2kgcGFnZS48L3A+XG48aDIgaWQ9XCJnZXR0aW5nLXN0YXJ0ZWRcIj48YSBocmVmPVwiI2dldHRpbmctc3RhcnRlZFwiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPkdldHRpbmcgc3RhcnRlZDwvaDI+XG48aDMgaWQ9XCJpbnN0YWxsLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNpbnN0YWxsLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+SW5zdGFsbCBwYWNrYWdlczwvaDM+XG48cD5JbnN0YWxsIHBhY2thZ2VzIHdpdGggPGEgaHJlZj1cIi9kb2NzL2FwaSNpbnN0YWxsXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGw8L2NvZGU+PC9hPi4gQm93ZXIgaW5zdGFsbHMgcGFja2FnZXMgdG8gPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyX2NvbXBvbmVudHMvPC9jb2RlPi48L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWJhc2hcIiBkYXRhLWxhbmc9XCJiYXNoXCI+PHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgJmx0O3BhY2thZ2UmZ3Q7PC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPHA+QSBwYWNrYWdlIGNhbiBiZSBhIEdpdEh1YiBzaG9ydGhhbmQsIGEgR2l0IGVuZHBvaW50LCBhIFVSTCwgYW5kIG1vcmUuIFJlYWQgbW9yZSBhYm91dCA8YSBocmVmPVwiL2RvY3MvYXBpLyNpbnN0YWxsXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGw8L2NvZGU+PC9hPi48L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWJhc2hcIiBkYXRhLWxhbmc9XCJiYXNoXCI+PHNwYW4gY2xhc3M9XCJjXCI+IyBpbnN0YWxscyB0aGUgcHJvamVjdCBkZXBlbmRlbmNpZXMgbGlzdGVkIGluIGJvd2VyLmpzb248L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbFxuPHNwYW4gY2xhc3M9XCJjXCI+IyByZWdpc3RlcmVkIHBhY2thZ2U8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBqcXVlcnlcbjxzcGFuIGNsYXNzPVwiY1wiPiMgR2l0SHViIHNob3J0aGFuZDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGRlc2FuZHJvL21hc29ucnlcbjxzcGFuIGNsYXNzPVwiY1wiPiMgR2l0IGVuZHBvaW50PC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgZ2l0Oi8vZ2l0aHViLmNvbS91c2VyL3BhY2thZ2UuZ2l0XG48c3BhbiBjbGFzcz1cImNcIj4jIFVSTDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGh0dHA6Ly9leGFtcGxlLmNvbS9zY3JpcHQuanM8L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48aDMgaWQ9XCJzZWFyY2gtcGFja2FnZXNcIj48YSBocmVmPVwiI3NlYXJjaC1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlNlYXJjaCBwYWNrYWdlczwvaDM+XG48cD48YSBocmVmPVwiL3NlYXJjaFwiPlNlYXJjaCBCb3dlciBwYWNrYWdlczwvYT4gYW5kIGZpbmQgdGhlIHJlZ2lzdGVyZWQgcGFja2FnZSBuYW1lcyBmb3IgeW91ciBmYXZvcml0ZSBwcm9qZWN0cy48L3A+XG48aDMgaWQ9XCJzYXZlLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNzYXZlLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+U2F2ZSBwYWNrYWdlczwvaDM+XG48cD5DcmVhdGUgYSA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIuanNvbjwvY29kZT4gZmlsZSBmb3IgeW91ciBwYWNrYWdlIHdpdGggPGEgaHJlZj1cIi9kb2NzL2NyZWF0aW5nLXBhY2thZ2VzLyNib3dlcmpzb25cIj48Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIgaW5pdDwvY29kZT48L2E+LjwvcD5cbjxwPlRoZW4gc2F2ZSBuZXcgZGVwZW5kZW5jaWVzIHRvIHlvdXIgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+IHdpdGggPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGwgUEFDS0FHRSAtLXNhdmU8L2NvZGU+PC9wPlxuPGgzIGlkPVwidXNlLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiN1c2UtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5Vc2UgcGFja2FnZXM8L2gzPlxuPHA+SG93IHlvdSB1c2UgcGFja2FnZXMgaXMgdXAgdG8geW91LiBXZSByZWNvbW1lbmQgeW91IHVzZSBCb3dlciB0b2dldGhlciB3aXRoIDxhIGhyZWY9XCIvZG9jcy90b29scy9cIj5HcnVudCwgUmVxdWlyZUpTLCBZZW9tYW4sIGFuZCBsb3RzIG9mIG90aGVyIHRvb2xzPC9hPiBvciBidWlsZCB5b3VyIG93biB3b3JrZmxvdyB3aXRoIDxhIGhyZWY9XCIvZG9jcy9hcGkvXCI+dGhlIEFQSTwvYT4uIFlvdSBjYW4gYWxzbyB1c2UgdGhlIGluc3RhbGxlZCBwYWNrYWdlcyBkaXJlY3RseSwgbGlrZSB0aGlzLCBpbiB0aGUgY2FzZSBvZiA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+anF1ZXJ5PC9jb2RlPjo8L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWh0bWxcIiBkYXRhLWxhbmc9XCJodG1sXCI+PHNwYW4gY2xhc3M9XCJudFwiPiZsdDtzY3JpcHQgPC9zcGFuPjxzcGFuIGNsYXNzPVwibmFcIj5zcmM9PC9zcGFuPjxzcGFuIGNsYXNzPVwic1wiPlwiYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzXCI8L3NwYW4+PHNwYW4gY2xhc3M9XCJudFwiPiZndDsmbHQ7L3NjcmlwdCZndDs8L3NwYW4+PC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPGgyIGlkPVwidHdpdHRlci11cGRhdGVzLWZyb20tYm93ZXJodHRwc3R3aXR0ZXJjb21ib3dlclwiPjxhIGhyZWY9XCIjdHdpdHRlci11cGRhdGVzLWZyb20tYm93ZXJodHRwc3R3aXR0ZXJjb21ib3dlclwiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlR3aXR0ZXIgdXBkYXRlcyBmcm9tIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Jvd2VyXCI+QGJvd2VyPC9hPjwvaDI+XG48cD48YSBjbGFzcz1cInR3aXR0ZXItdGltZWxpbmVcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ib3dlclwiIGRhdGEtd2lkZ2V0LWlkPVwiNDgwMzc3MjkxMzY5NzU0NjI1XCI+VHdlZXRzIGJ5IEBib3dlcjwvYT5cbjwvcD5cblxuPC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vYm93ZXIuaW8vXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiQm9yd3NlclN5bmNcIixcbiAgICBkZXNjOiBcIkZFWiDkvb/nlKggQnJvd3NlcnN5bmMg6K6p5rWP6KeI5Zmo5a6e5pe25b+r6YCf55qE5ZON5bqU5YmN56uv5ZCE56eN5paH5Lu255qE5pu05pS55bm26Ieq5Yqo5Yi35paw6aG16Z2i77yM5Lqm5Y+v5a6e5pe25ZCM5q2l5ZCE5Liq57uI56uv77yM5o+Q6auY6Iez5bCRMzAl55qE5byA5Y+R5pWI546HXCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cImhvb2tcIj5UaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLjwvaDE+PHAgY2xhc3M9XCJyb25zZWFsXCI+SXTigJlzIHdpY2tlZC1mYXN0IGFuZCB0b3RhbGx5IGZyZWUuPC9wPjxwIGNsYXNzPVwidmlkZW9cIj48YSBjbGFzcz1cInZpZGVvX19saW5rXCIgaHJlZj1cIiNcIj48L2E+PC9wPjxwIGNsYXNzPVwiaG93LXRvXCI+PC9wPjxwIGNsYXNzPVwiaG93LXRvX19jb21tYW5kXCI+bnBtIGluc3RhbGwgLWcgYnJvd3Nlci1zeW5jPC9wPjxwIGNsYXNzPVwiY3RhXCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgaHJlZj1cIiNpbnN0YWxsXCIgdGl0bGU9XCJHZXQgU3RhcnRlZFwiPkdldCBTdGFydGVkPC9hPjwvcD48ZGl2IGNsYXNzPVwicGxheWVyXCI+PHA+J2JvbmpvdXI8L3A+PC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vYnJvd3NlcnN5bmMuaW8vXCJcbiAgICB9XG59XVxuXG5sZXQgaW5kZXggPSB7XG4gICAgZmV6ZGVzYzogXCJGRVog5YmN56uv5qih5Z2X5YyW5bel56iL5byA5Y+R5qGG5p62XCIsXG4gICAganVtYm90cm9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkhlbGxvLCBGRVogQW5kIFJlYWN0IVwiLFxuICAgICAgICBjb250ZW50OiBcIui/meaYr+S4gOS4quS9v+eUqCBGRVog5p6E5bu655qE5YmN56uv5qih5Z2X5YyW5byA5Y+R56S65L6L77yM5ryU56S65LqG5Z+65LqOUmVhY3TljZXmlofku7bnu4Tku7bnmoTlvIDlj5Hnu5PmnoTjgIJcIixcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBuYW1lOiBgPGkgY2xhc3M9XCJmYSBmYS1naXRodWItYWx0XCI+PC9pPiBHaXRIdWJgLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vZnVyaWMtemhhby9mZXpcIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgbGlzdCA9IHtcbiAgICBqdW1ib3Ryb246IHtcbiAgICAgICAgdGl0bGU6IFwiRkVaIEFuZCBSZWFjdCBGcmFtZSFcIixcbiAgICAgICAgY29udGVudDogXCLov5nmmK/kuIDkuKpGRVrmlbTlkIhSZWFjdOeahOWIl+ihqOWxleekuumhte+8jOivt+eCueWHu+S4i+mdouWIl+ihqOeahCBEZXRhaWwg5oyJ6ZKu6L+b5YWl6K+m5oOF6aG15rWP6KeIXCIsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgbmFtZTogXCLmn6XnnIvmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cDovL2Zlei5oZXN0dWR5LmNvbVwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBjb21tb24gPSB7XG4gICAgc2l0ZU5hbWU6IFwiRkVaIFJlYWN0IERFTU9cIixcblxuICAgIG5hdkRhdGE6IFt7XG4gICAgICAgIG5hbWU6IFwi6aaW6aG1XCIsXG4gICAgICAgIGhyZWY6IFwiaW5kZXguaHRtbFwiXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkZFWuWfuuacrOaetuaehFwiLFxuICAgICAgICBocmVmOiBcImxpc3QuaHRtbFwiXG4gICAgfV0sXG5cbiAgICBmb290ZXJUZXh0OiBcIsKpIDIwMTcgRkVaIOWJjeerr+aooeWdl+WMluW3peeoi+W8gOWPkeahhuaetiBDcmVhdGVkIGJ5IEZ1cmljLnpoYW9cIlxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgXCJpbmRleFwiOiBpbmRleCxcbiAgICBcImxpc3RcIjogbGlzdCxcbiAgICBcImZyYW1lc1wiOiBmcmFtZXMsXG4gICAgXCJjb21tb25cIjogY29tbW9uXG59XG4iLCJpbXBvcnQgUSBmcm9tICdxJ1xuXG5pbXBvcnQgQXBpRGF0YSBmcm9tICdwdWJsaWMvZGVtby1kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmF2TGlzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoQXBpRGF0YS5jb21tb24ubmF2RGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNpdGVOYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmNvbW1vbi5zaXRlTmFtZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3RlclRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKEFwaURhdGEuY29tbW9uLmZvb3RlclRleHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG59XG4iLCJpbXBvcnQgU2VydmljZSBmcm9tICcuL2NvbW1vbidcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvb3RlclRleHQ6IFwiXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFNlcnZpY2UuZm9vdGVyVGV4dCgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZvb3RlclRleHQ6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuICg8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj57dGhpcy5zdGF0ZS5mb290ZXJUZXh0fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24td2VpeGluXCI+PC9pPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24td2VpYm9cIj48L2k+XG4gICAgPC9zcGFuPlxuICAgIDwvZm9vdGVyPilcblxuICAgIH1cbn0pIiwiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgUSBmcm9tICdxJ1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcnRuRGF0YToge1xuICAgICAgICAgICAgICAgIHNpdGVOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIG5hdkxpc3Q6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBRLmFsbChbXG4gICAgICAgICAgICBTZXJ2aWNlLnNpdGVOYW1lKCksXG4gICAgICAgICAgICBTZXJ2aWNlLm5hdkxpc3QoKVxuICAgICAgICBdKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgcnRuRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzaXRlTmFtZTogZGF0YVswXSxcbiAgICAgICAgICAgICAgICBuYXZMaXN0OiBkYXRhWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBydG5EYXRhOiBydG5EYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbmF2TGlzdCA9IFtdXG5cbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnN0YXRlLnJ0bkRhdGEubmF2TGlzdCkge1xuICAgICAgICAgICAgbmF2TGlzdC5wdXNoKDxsaSBrZXk9e2l0ZW0ubmFtZX0+PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS5uYW1lfTwvYT48L2xpPilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPnt0aGlzLnN0YXRlLnJ0bkRhdGEuc2l0ZU5hbWV9PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAge25hdkxpc3R9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICAgICAgKVxuXG4gICAgfVxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZhVzVrWlhndWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZiVzlrZFd4bEwyWmxlbVJsYzJNdmFXNWtaWGd1YW5NaUxDSnpjbU12ZG1sbGQzTXZhVzVrWlhndmJXOWtkV3hsTDJabGVtUmxjMk12YzJWeWRtbGpaUzVxY3lJc0luTnlZeTkyYVdWM2N5OXBibVJsZUM5dGIyUjFiR1V2YW5WdFltOTBjbTl1TDJsdVpHVjRMbXB6SWl3aWMzSmpMM1pwWlhkekwybHVaR1Y0TDIxdlpIVnNaUzlxZFcxaWIzUnliMjR2YzJWeWRtbGpaUzVxY3lJc0luTnlZeTkyYVdWM2N5OXdkV0pzYVdNdlpHVnRieTFrWVhSaExtcHpJaXdpYzNKakwzWnBaWGR6TDNCMVlteHBZeTl0YjJSMWJHVXZZMjl0Ylc5dUwyTnZiVzF2Ymk1cWN5SXNJbk55WXk5MmFXVjNjeTl3ZFdKc2FXTXZiVzlrZFd4bEwyTnZiVzF2Ymk5bWIyOTBaWEl1YW5NaUxDSnpjbU12ZG1sbGQzTXZjSFZpYkdsakwyMXZaSFZzWlM5amIyMXRiMjR2YUdWaFpHVnlMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJKaFltVnNMWEoxYm5ScGJXVXZZMjl5WlMxcWN5OW5aWFF0YVhSbGNtRjBiM0l1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlltRmlaV3d0Y25WdWRHbHRaUzlqYjNKbExXcHpMMjlpYW1WamRDOWhjM05wWjI0dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZbUZpWld3dGNuVnVkR2x0WlM5b1pXeHdaWEp6TDJWNGRHVnVaSE11YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDJadUwyZGxkQzFwZEdWeVlYUnZjaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Wm00dmIySnFaV04wTDJGemMybG5iaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWVMxbWRXNWpkR2x2Ymk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZllXUmtMWFJ2TFhWdWMyTnZjR0ZpYkdWekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWhiaTF2WW1wbFkzUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMkZ5Y21GNUxXbHVZMngxWkdWekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWpiR0Z6YzI5bUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWpiMll1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJOdmNtVXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMk4wZUM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlpHVm1hVzVsWkM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlpHVnpZM0pwY0hSdmNuTXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMlJ2YlMxamNtVmhkR1V1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJWdWRXMHRZblZuTFd0bGVYTXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMlY0Y0c5eWRDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZabUZwYkhNdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyZHNiMkpoYkM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmFHRnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlvYVdSbExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOW9kRzFzTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5cFpUZ3RaRzl0TFdSbFptbHVaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYVc5aWFtVmpkQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYVhNdGIySnFaV04wTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5cGRHVnlMV055WldGMFpTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhWFJsY2kxa1pXWnBibVV1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJsMFpYSXRjM1JsY0M1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmFYUmxjbUYwYjNKekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXNhV0p5WVhKNUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXZZbXBsWTNRdFlYTnphV2R1TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5dlltcGxZM1F0WTNKbFlYUmxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRaSEF1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDI5aWFtVmpkQzFrY0hNdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyOWlhbVZqZEMxbmIzQnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRaM0J2TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5dlltcGxZM1F0YTJWNWN5MXBiblJsY201aGJDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXdGxlWE11YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDI5aWFtVmpkQzF3YVdVdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgzQnliM0JsY25SNUxXUmxjMk11YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNKbFpHVm1hVzVsTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5elpYUXRkRzh0YzNSeWFXNW5MWFJoWnk1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmMyaGhjbVZrTFd0bGVTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZjMmhoY21Wa0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXpkSEpwYm1jdFlYUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM1J2TFdsdVpHVjRMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTkwYnkxcGJuUmxaMlZ5TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5MGJ5MXBiMkpxWldOMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTBieTFzWlc1bmRHZ3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM1J2TFc5aWFtVmpkQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmZEc4dGNISnBiV2wwYVhabExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTFhV1F1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNkcmN5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWpiM0psTG1kbGRDMXBkR1Z5WVhSdmNpMXRaWFJvYjJRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlkyOXlaUzVuWlhRdGFYUmxjbUYwYjNJdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlpYTTJMbUZ5Y21GNUxtbDBaWEpoZEc5eUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwyVnpOaTV2WW1wbFkzUXVZWE56YVdkdUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwyVnpOaTV6ZEhKcGJtY3VhWFJsY21GMGIzSXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZkMlZpTG1SdmJTNXBkR1Z5WVdKc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096dEJRMEZCT3pzN08wRkJRMEU3T3pzN1FVRkZRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3TzBGQlIwRXNTVUZCU1N4UFFVRlBMR2RDUVVGTkxGZEJRVTRzUTBGQmEwSTdRVUZCUVR0QlFVTTFRaXhQUVVRMFFpeHZRa0ZEYmtJN1FVRkRVaXhUUVVORE8wRkJRVUU3UVVGQlFUdEJRVU5MTEhkRVFVUk1PMEZCUlVzc2RVUkJSa3c3UVVGSFN5eDFSRUZJVER0QlFVbExPMEZCU2t3c1IwRkVSRHRCUVZGQk8wRkJWakpDTEVOQlFXeENMRU5CUVZnN08wRkJZVUVzYlVKQlFWTXNUVUZCVkN4RFFVTkRMRGhDUVVGRExFbEJRVVFzVDBGRVJDeEZRVVZETEZOQlFWTXNZMEZCVkN4RFFVRjNRaXhMUVVGNFFpeERRVVpFT3pzN096czdPenM3T3p0QlEzUkNRVHM3T3pzN08ydENRVVZsTEUxQlFVMHNWMEZCVGl4RFFVRnJRanRCUVVGQk8wRkJRemRDTEcxQ1FVUTJRaXcyUWtGRFdEdEJRVU5rTEdWQlFVODdRVUZEU0N4eFFrRkJVenRCUVVST0xGTkJRVkE3UVVGSFNDeExRVXcwUWp0QlFVMDNRaXh4UWtGT05rSXNLMEpCVFZRN1FVRkJRVHM3UVVGRmFFSXNNRUpCUVZFc1ZVRkJVaXhIUVVGeFFpeEpRVUZ5UWl4RFFVRXdRaXhWUVVGRExFbEJRVVFzUlVGQlZUdEJRVU5vUXl4clFrRkJTeXhSUVVGTUxFTkJRV003UVVGRFZpeDVRa0ZCVXp0QlFVUkRMR0ZCUVdRN1FVRkhTQ3hUUVVwRU8wRkJTMGdzUzBGaU5FSTdRVUZqTjBJc1ZVRmtOa0lzYjBKQlkzQkNPMEZCUTB3c1pVRkRTVHRCUVVGQk8wRkJRVUVzWTBGQlN5eFhRVUZWTEcxQ1FVRm1PMEZCUTBvN1FVRkJRVHRCUVVGQkxHdENRVUZMTEZkQlFWVXNTMEZCWmp0QlFVTkpPMEZCUVVFN1FVRkJRU3h6UWtGQlN5eFhRVUZWTEZkQlFXWTdRVUZEU1R0QlFVRkJPMEZCUVVFN1FVRkJTeXcyUWtGQlN5eExRVUZNTEVOQlFWYzdRVUZCYUVJc2NVSkJSRW83UVVGRlNTeHBSRUZCU3l4WFFVRlZMR05CUVdZN1FVRkdTanRCUVVSS0xHRkJSRWs3UVVGUFNqdEJRVkJKTEZOQlJFbzdRVUZaU0R0QlFUTkNORUlzUTBGQmJFSXNRenM3T3pzN096czdPenRCUTBabU96czdPMEZCUlVFN096czdPenRyUWtGRlpUdEJRVU5ZTEdOQlJGY3NkMEpCUTBVN1FVRkRWQ3hsUVVGUExGbEJRVVVzVDBGQlJpeERRVUZWTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTFCUVZZc1JVRkJjVUk3UVVGRGJFTXNiMEpCUVZFc2JVSkJRVkVzUzBGQlVpeERRVUZqTEU5QlFYUkNPMEZCUTBnc1UwRkdUU3hEUVVGUU8wRkJSMGc3UVVGTVZTeERPenM3T3pzN096czdPenM3T3pzN1FVTktaanM3T3pzN08ydENRVVZsTEUxQlFVMHNWMEZCVGl4RFFVRnJRanRCUVVGQk8wRkJRemRDTEcxQ1FVUTJRaXcyUWtGRFdEdEJRVU5rTEdWQlFVODdRVUZEU0N3eVFrRkJaVHRCUVVOWUxIVkNRVUZQTEVWQlJFazdRVUZGV0N4NVFrRkJVeXhGUVVaRk8wRkJSMWdzZDBKQlFWRTdRVUZEU2l3MFFrRkVTVHRCUVVWS0xEQkNRVUZOTzBGQlJrWTdRVUZJUnp0QlFVUmFMRk5CUVZBN1FVRlZTQ3hMUVZvMFFqdEJRV0UzUWl4eFFrRmlOa0lzSzBKQllWUTdRVUZCUVRzN1FVRkZhRUlzTUVKQlFWRXNWVUZCVWl4SFFVRnhRaXhKUVVGeVFpeERRVUV3UWl4VlFVRkRMRWxCUVVRc1JVRkJWVHRCUVVOb1F5eHJRa0ZCU3l4UlFVRk1MRU5CUVdNN1FVRkRWaXdyUWtGQlpTeDFRa0ZCWXl4RlFVRmtMRVZCUVd0Q0xFbEJRV3hDTzBGQlJFd3NZVUZCWkR0QlFVZElMRk5CU2tRN1FVRkxTQ3hMUVhCQ05FSTdRVUZ4UWpkQ0xGVkJja0kyUWl4dlFrRnhRbkJDTzBGQlEwd3NaVUZEU1R0QlFVRkJPMEZCUVVFc1kwRkJTeXhYUVVGVkxGZEJRV1k3UVVGRFNqdEJRVUZCTzBGQlFVRXNhMEpCUVVzc1YwRkJWU3hYUVVGbU8wRkJRMGs3UVVGQlFUdEJRVUZCTzBGQlFVc3NlVUpCUVVzc1MwRkJUQ3hEUVVGWExHRkJRVmdzUTBGQmVVSTdRVUZCT1VJc2FVSkJSRW83UVVGRlNUdEJRVUZCTzBGQlFVRTdRVUZCU1N4NVFrRkJTeXhMUVVGTUxFTkJRVmNzWVVGQldDeERRVUY1UWp0QlFVRTNRaXhwUWtGR1NqdEJRVWRKTzBGQlFVRTdRVUZCUVR0QlFVTkpMQ3REUVVGSExGZEJRVlVzZDBKQlFXSXNSVUZCYzBNc1RVRkJUU3hMUVVGTExFdEJRVXdzUTBGQlZ5eGhRVUZZTEVOQlFYbENMRTFCUVhwQ0xFTkJRV2RETEVsQlFUVkZMRVZCUVd0R0xFMUJRVXNzVVVGQmRrWXNSVUZCWjBjc2VVSkJRWGxDTzBGQlEzcElMRzlEUVVGUkxFdEJRVXNzUzBGQlRDeERRVUZYTEdGQlFWZ3NRMEZCZVVJc1RVRkJla0lzUTBGQlowTTdRVUZFYVVZc2VVSkJRWHBJTzBGQlJFbzdRVUZJU2p0QlFVUkpMRk5CUkVvN1FVRmpTRHRCUVhCRE5FSXNRMEZCYkVJc1F6czdPenM3T3pzN096dEJRMFptT3pzN08wRkJSVUU3T3pzN096dHJRa0ZGWlR0QlFVTllMR05CUkZjc2QwSkJRMFU3UVVGRFZDeGxRVUZQTEZsQlFVVXNUMEZCUml4RFFVRlZMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFMUJRVllzUlVGQmNVSTdRVUZEYkVNc2IwSkJRVkVzYlVKQlFWRXNTMEZCVWl4RFFVRmpMRk5CUVhSQ08wRkJRMGdzVTBGR1RTeERRVUZRTzBGQlIwZzdRVUZNVlN4RE96czdPenM3T3pzN08wRkRTbVlzU1VGQlNTeFRRVUZUTEVOQlFVTTdRVUZEVml4WFFVRlBMRkZCUkVjN1FVRkZWaXhWUVVGTkxESkZRVVpKTzBGQlIxWXNhM2RGUVVoVk8wRkJNa1JXTEdOQlFWVTdRVUZEVGl4alFVRk5MRTFCUkVFN1FVRkZUaXhqUVVGTk8wRkJSa0U3UVVFelJFRXNRMEZCUkN4RlFTdEVWanRCUVVORExGZEJRVThzUzBGRVVqdEJRVVZETEZWQlFVMHNLMFJCUmxBN1FVRkhReXh4YUVKQlNFUTdRVUZaUXl4alFVRlZPMEZCUTA0c1kwRkJUU3hOUVVSQk8wRkJSVTRzWTBGQlRUdEJRVVpCTzBGQldsZ3NRMEV2UkZVc1JVRXJSVlk3UVVGRFF5eFhRVUZQTEUxQlJGSTdRVUZGUXl4VlFVRk5MR2RGUVVaUU8wRkJSME1zYVdOQlNFUTdRVUZSUXl4alFVRlZPMEZCUTA0c1kwRkJUU3hOUVVSQk8wRkJSVTRzWTBGQlRUdEJRVVpCTzBGQlVsZ3NRMEV2UlZVc1JVRXlSbFk3UVVGRFF5eFhRVUZQTEZsQlJGSTdRVUZGUXl4VlFVRk5MRzFGUVVaUU8wRkJSME1zZVdaQlNFUTdRVUZoUXl4alFVRlZPMEZCUTA0c1kwRkJUU3hOUVVSQk8wRkJSVTRzWTBGQlRUdEJRVVpCTzBGQllsZ3NRMEV6UmxVc1JVRTBSMVk3UVVGRFF5eFhRVUZQTEU5QlJGSTdRVUZGUXl4VlFVRk5MREpGUVVaUU8wRkJSME1zYVhaTFFVaEVPMEZCTWtORExHTkJRVlU3UVVGRFRpeGpRVUZOTEUxQlJFRTdRVUZGVGl4alFVRk5PMEZCUmtFN1FVRXpRMWdzUTBFMVIxVXNSVUV5U2xZN1FVRkRReXhYUVVGUExHRkJSRkk3UVVGRlF5eFZRVUZOTEhkRlFVWlFPMEZCUjBNc09HSkJTRVE3UVVGSlF5eGpRVUZWTzBGQlEwNHNZMEZCVFN4TlFVUkJPMEZCUlU0c1kwRkJUVHRCUVVaQk8wRkJTbGdzUTBFelNsVXNRMEZCWWpzN1FVRnhTMEVzU1VGQlNTeFJRVUZSTzBGQlExSXNZVUZCVXl4cFFrRkVSRHRCUVVWU0xHVkJRVmM3UVVGRFVDeGxRVUZQTEhWQ1FVUkJPMEZCUlZBc2FVSkJRVk1zSzBOQlJrWTdRVUZIVUN4blFrRkJVVHRCUVVOS0xEWkVRVVJKTzBGQlJVb3NhMEpCUVUwN1FVRkdSanRCUVVoRU8wRkJSa2dzUTBGQldqczdRVUZaUVN4SlFVRkpMRTlCUVU4N1FVRkRVQ3hsUVVGWE8wRkJRMUFzWlVGQlR5eHpRa0ZFUVR0QlFVVlFMR2xDUVVGVExHZEVRVVpHTzBGQlIxQXNaMEpCUVZFN1FVRkRTaXhyUWtGQlRTeFJRVVJHTzBGQlJVb3NhMEpCUVUwN1FVRkdSanRCUVVoRU8wRkJSRW9zUTBGQldEczdRVUZYUVN4SlFVRkpMRk5CUVZNN1FVRkRWQ3hqUVVGVkxHZENRVVJFT3p0QlFVZFVMR0ZCUVZNc1EwRkJRenRCUVVOT0xHTkJRVTBzU1VGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVN4TFFVRkVMRVZCUjA0N1FVRkRReXhqUVVGTkxGTkJSRkE3UVVGRlF5eGpRVUZOTzBGQlJsQXNTMEZJVFN4RFFVaEJPenRCUVZkVUxHZENRVUZaTzBGQldFZ3NRMEZCWWpzN2EwSkJZMlU3UVVGRFdDeGhRVUZUTEV0QlJFVTdRVUZGV0N4WlFVRlJMRWxCUmtjN1FVRkhXQ3hqUVVGVkxFMUJTRU03UVVGSldDeGpRVUZWTzBGQlNrTXNRenM3T3pzN096czdPenRCUXpGTlpqczdPenRCUVVWQk96czdPenM3YTBKQlJXVTdRVUZEV0N4WFFVUlhMSEZDUVVORU8wRkJRMFlzWlVGQlR5eFpRVUZGTEU5QlFVWXNRMEZCVlN4VlFVRkRMRTlCUVVRc1JVRkJWU3hOUVVGV0xFVkJRWEZDTzBGQlEyeERMRzlDUVVGUkxHMUNRVUZSTEUxQlFWSXNRMEZCWlN4UFFVRjJRanRCUVVOSUxGTkJSazBzUTBGQlVEdEJRVWRJTEV0QlRFMDdRVUZOVUN4WlFVNVBMSE5DUVUxSk8wRkJRMUFzWlVGQlR5eFpRVUZGTEU5QlFVWXNRMEZCVlN4VlFVRkRMRTlCUVVRc1JVRkJWU3hOUVVGV0xFVkJRWEZDTzBGQlEyeERMRzlDUVVGUkxHMUNRVUZSTEUxQlFWSXNRMEZCWlN4UlFVRjJRanRCUVVOSUxGTkJSazBzUTBGQlVEdEJRVWRJTEV0QlZrMDdRVUZYVUN4alFWaFBMSGRDUVZkTk8wRkJRMVFzWlVGQlR5eFpRVUZGTEU5QlFVWXNRMEZCVlN4VlFVRkRMRTlCUVVRc1JVRkJWU3hOUVVGV0xFVkJRWEZDTzBGQlEyeERMRzlDUVVGUkxHMUNRVUZSTEUxQlFWSXNRMEZCWlN4VlFVRjJRanRCUVVOSUxGTkJSazBzUTBGQlVEdEJRVWRJTzBGQlprMHNRenM3T3pzN096czdPenM3UVVOS1pqczdPenM3TzJ0Q1FVVmxMRTFCUVUwc1YwRkJUaXhEUVVGclFqdEJRVUZCTzBGQlF6ZENMRzFDUVVRMlFpdzJRa0ZEV0R0QlFVTmtMR1ZCUVU4N1FVRkRTQ3gzUWtGQldUdEJRVVJVTEZOQlFWQTdRVUZIU0N4TFFVdzBRanRCUVUwM1FpeHhRa0ZPTmtJc0swSkJUVlE3UVVGQlFUczdRVUZEYUVJc2VVSkJRVkVzVlVGQlVpeEhRVUZ4UWl4SlFVRnlRaXhEUVVFd1FpeFZRVUZETEVsQlFVUXNSVUZCVlR0QlFVTm9ReXhyUWtGQlN5eFJRVUZNTEVOQlFXTTdRVUZEVml3MFFrRkJXVHRCUVVSR0xHRkJRV1E3UVVGSFNDeFRRVXBFTzBGQlMwZ3NTMEZhTkVJN1FVRmhOMElzVlVGaU5rSXNiMEpCWVhCQ096dEJRVVZNTEdWQlFWRTdRVUZCUVR0QlFVRkJMR05CUVZFc1YwRkJWU3hYUVVGc1FqdEJRVU5TTzBGQlFVRTdRVUZCUVN4clFrRkJUU3hYUVVGVkxGZEJRV2hDTzBGQlFUWkNMSEZDUVVGTExFdEJRVXdzUTBGQlZ6dEJRVUY0UXl4aFFVUlJPMEZCUlZJN1FVRkJRVHRCUVVGQkxHdENRVUZOTEZkQlFWVXNXVUZCYUVJN1FVRkRRU3d5UTBGQlJ5eFhRVUZWTEd0Q1FVRmlMRWRCUkVFN1FVRkZRU3d5UTBGQlJ5eFhRVUZWTEdsQ1FVRmlPMEZCUmtFN1FVRkdVU3hUUVVGU08wRkJVVWc3UVVGMlFqUkNMRU5CUVd4Q0xFTTdPenM3T3pzN096czdPenM3TzBGRFJtWTdPenM3UVVGRFFUczdPenM3TzJ0Q1FVVmxMRTFCUVUwc1YwRkJUaXhEUVVGclFqdEJRVUZCTzBGQlF6ZENMRzFDUVVRMlFpdzJRa0ZEV0R0QlFVTmtMR1ZCUVU4N1FVRkRTQ3h4UWtGQlV6dEJRVU5NTERCQ1FVRlZMRVZCUkV3N1FVRkZUQ3g1UWtGQlV6dEJRVVpLTzBGQlJFNHNVMEZCVUR0QlFVMUlMRXRCVWpSQ08wRkJVemRDTEhGQ1FWUTJRaXdyUWtGVFZEdEJRVUZCT3p0QlFVTm9RaXh2UWtGQlJTeEhRVUZHTEVOQlFVMHNRMEZEUml4cFFrRkJVU3hSUVVGU0xFVkJSRVVzUlVGRlJpeHBRa0ZCVVN4UFFVRlNMRVZCUmtVc1EwRkJUaXhGUVVkSExFbEJTRWdzUTBGSFVTeFZRVUZETEVsQlFVUXNSVUZCVlR0QlFVTmtMR2RDUVVGSkxGVkJRVlU3UVVGRFZpd3dRa0ZCVlN4TFFVRkxMRU5CUVV3c1EwRkVRVHRCUVVWV0xIbENRVUZUTEV0QlFVc3NRMEZCVER0QlFVWkRMR0ZCUVdRN1FVRkpRU3hyUWtGQlN5eFJRVUZNTEVOQlFXTTdRVUZEVml4NVFrRkJVenRCUVVSRExHRkJRV1E3UVVGSFNDeFRRVmhFTzBGQldVZ3NTMEYwUWpSQ08wRkJkVUkzUWl4VlFYWkNOa0lzYjBKQmRVSndRanRCUVVOTUxGbEJRVWtzVlVGQlZTeEZRVUZrT3p0QlFVUkxPMEZCUVVFN1FVRkJRVHM3UVVGQlFUdEJRVWRNTERSRVFVRnBRaXhMUVVGTExFdEJRVXdzUTBGQlZ5eFBRVUZZTEVOQlFXMUNMRTlCUVhCRExEUkhRVUUyUXp0QlFVRkJMRzlDUVVGd1F5eEpRVUZ2UXpzN1FVRkRla01zZDBKQlFWRXNTVUZCVWl4RFFVRmhPMEZCUVVFN1FVRkJRU3h6UWtGQlNTeExRVUZMTEV0QlFVc3NTVUZCWkR0QlFVRnZRanRCUVVGQk8wRkJRVUVzTUVKQlFVY3NUVUZCVFN4TFFVRkxMRWxCUVdRN1FVRkJjVUlzTmtKQlFVczdRVUZCTVVJN1FVRkJjRUlzYVVKQlFXSTdRVUZEU0R0QlFVeEpPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlQwd3NaVUZEU1R0QlFVRkJPMEZCUVVFc1kwRkJTeXhYUVVGVkxIZERRVUZtTzBGQlEwbzdRVUZCUVR0QlFVRkJMR3RDUVVGTExGZEJRVlVzVjBGQlpqdEJRVU5KTzBGQlFVRTdRVUZCUVN4elFrRkJTeXhYUVVGVkxHVkJRV1k3UVVGRFNUdEJRVUZCTzBGQlFVRXNNRUpCUVZFc1RVRkJTeXhSUVVGaUxFVkJRWE5DTEZkQlFWVXNlVUpCUVdoRExFVkJRVEJFTEdWQlFWa3NWVUZCZEVVc1JVRkJhVVlzWlVGQldTeFRRVUUzUml4RlFVRjFSeXhwUWtGQll5eFBRVUZ5U0N4RlFVRTJTQ3hwUWtGQll5eFJRVUV6U1R0QlFVTkpPMEZCUVVFN1FVRkJRU3c0UWtGQlRTeFhRVUZWTEZOQlFXaENPMEZCUVVFN1FVRkJRU3g1UWtGRVNqdEJRVVZKTEhORVFVRk5MRmRCUVZVc1ZVRkJhRUlzUjBGR1NqdEJRVWRKTEhORVFVRk5MRmRCUVZVc1ZVRkJhRUlzUjBGSVNqdEJRVWxKTEhORVFVRk5MRmRCUVZVc1ZVRkJhRUk3UVVGS1NpeHhRa0ZFU2p0QlFVOUpPMEZCUVVFN1FVRkJRU3d3UWtGQlJ5eFhRVUZWTEdOQlFXSXNSVUZCTkVJc1RVRkJTeXhIUVVGcVF6dEJRVUZ6UXl3MlFrRkJTeXhMUVVGTUxFTkJRVmNzVDBGQldDeERRVUZ0UWp0QlFVRjZSRHRCUVZCS0xHbENRVVJLTzBGQlZVazdRVUZCUVR0QlFVRkJMSE5DUVVGTExFbEJRVWNzVVVGQlVpeEZRVUZwUWl4WFFVRlZMREJDUVVFelFqdEJRVU5KTzBGQlFVRTdRVUZCUVN3d1FrRkJTU3hYUVVGVkxHZENRVUZrTzBGQlEwTTdRVUZFUkR0QlFVUktPMEZCVmtvN1FVRkVTU3hUUVVSS08wRkJjVUpJTzBGQmJrUTBRaXhEUVVGc1FpeERPenM3T3p0QlEwaG1PenRCUTBGQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRkRUpCTzBGQlEwRTdRVUZEUVRzN1FVTkdRVHRCUVVOQk96dEJRMFJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBoQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzQkNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzUkNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN08wRkRSRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU51UWtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5LUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOSVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOT1FUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTTFSRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRUa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU0VFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5RUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3TzBGRFJrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CTzBGQlEwRTdPMEZEUmtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFdrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRGNrVkJPMEZCUTBFN1FVRkRRVHM3UVVOR1FUczdRVU5CUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEYUVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTjZRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRaa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEV2tFN08wRkRRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEV2tFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTm9Ra0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRUa0U3TzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5RUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTk9RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5NUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEyaENRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTk9RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVEVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEweEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5NUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMHBCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTllRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRWa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOUVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOT1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOcVEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOb1FrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUJsS0hRc2JpeHlLWHRtZFc1amRHbHZiaUJ6S0c4c2RTbDdhV1lvSVc1YmIxMHBlMmxtS0NGMFcyOWRLWHQyWVhJZ1lUMTBlWEJsYjJZZ2NtVnhkV2x5WlQwOVhDSm1kVzVqZEdsdmJsd2lKaVp5WlhGMWFYSmxPMmxtS0NGMUppWmhLWEpsZEhWeWJpQmhLRzhzSVRBcE8ybG1LR2twY21WMGRYSnVJR2tvYnl3aE1DazdkbUZ5SUdZOWJtVjNJRVZ5Y205eUtGd2lRMkZ1Ym05MElHWnBibVFnYlc5a2RXeGxJQ2RjSWl0dksxd2lKMXdpS1R0MGFISnZkeUJtTG1OdlpHVTlYQ0pOVDBSVlRFVmZUazlVWDBaUFZVNUVYQ0lzWm4xMllYSWdiRDF1VzI5ZFBYdGxlSEJ2Y25Sek9udDlmVHQwVzI5ZFd6QmRMbU5oYkd3b2JDNWxlSEJ2Y25SekxHWjFibU4wYVc5dUtHVXBlM1poY2lCdVBYUmJiMTFiTVYxYlpWMDdjbVYwZFhKdUlITW9iajl1T21VcGZTeHNMR3d1Wlhod2IzSjBjeXhsTEhRc2JpeHlLWDF5WlhSMWNtNGdibHR2WFM1bGVIQnZjblJ6ZlhaaGNpQnBQWFI1Y0dWdlppQnlaWEYxYVhKbFBUMWNJbVoxYm1OMGFXOXVYQ0ltSm5KbGNYVnBjbVU3Wm05eUtIWmhjaUJ2UFRBN2J6eHlMbXhsYm1kMGFEdHZLeXNwY3loeVcyOWRLVHR5WlhSMWNtNGdjMzBwSWl3aWFXMXdiM0owSUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSnp0Y2NseHVhVzF3YjNKMElGSmxZV04wUkU5TklHWnliMjBnSjNKbFlXTjBMV1J2YlNjN1hISmNibHh5WEc1cGJYQnZjblFnU0dWaFpHVnlJR1p5YjIwZ0ozQjFZbXhwWXk5dGIyUjFiR1V2WTI5dGJXOXVMMmhsWVdSbGNpYzdYSEpjYm1sdGNHOXlkQ0JLZFcxaWIzUnliMjRnWm5KdmJTQW5MaTl0YjJSMWJHVXZhblZ0WW05MGNtOXVMMmx1WkdWNEp6dGNjbHh1YVcxd2IzSjBJRVpsZW1SbGMyTWdabkp2YlNBbkxpOXRiMlIxYkdVdlptVjZaR1Z6WXk5cGJtUmxlQ2M3WEhKY2JtbHRjRzl5ZENCR2IyOTBaWElnWm5KdmJTQW5jSFZpYkdsakwyMXZaSFZzWlM5amIyMXRiMjR2Wm05dmRHVnlKenRjY2x4dVhISmNibHh5WEc1c1pYUWdVR0ZuWlNBOUlGSmxZV04wTG1OeVpXRjBaVU5zWVhOektIdGNjbHh1WEhSeVpXNWtaWElvS1NCN1hISmNibHgwWEhSeVpYUjFjbTRnS0Z4eVhHNWNkRngwWEhROFpHbDJQbHh5WEc0Z0lDQWdJQ0FnSUR4SVpXRmtaWElnTHo1Y2NseHVJQ0FnSUNBZ0lDQThTblZ0WW05MGNtOXVJQzgrWEhKY2JpQWdJQ0FnSUNBZ1BFWmxlbVJsYzJNZ0x6NWNjbHh1SUNBZ0lDQWdJQ0E4Um05dmRHVnlJQzgrWEhKY2JpQWdJQ0FnSUNBZ1BDOWthWFkrWEhKY2JseDBYSFFwTzF4eVhHNWNkSDFjY2x4dWZTazdYSEpjYmx4eVhHNVNaV0ZqZEVSUFRTNXlaVzVrWlhJb1hISmNibHgwUEZCaFoyVWdMejRzWEhKY2JseDBaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0oyRndjQ2NwWEhKY2JpazdJaXdpYVcxd2IzSjBJRk5sY25acFkyVWdabkp2YlNBbkxpOXpaWEoyYVdObEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZoWTNRdVkzSmxZWFJsUTJ4aGMzTW9lMXh1SUNBZ0lHZGxkRWx1YVhScFlXeFRkR0YwWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdabGVtUmxjMk02SUZ3aVhDSmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlMRnh1SUNBZ0lHTnZiWEJ2Ym1WdWRFUnBaRTF2ZFc1MEtDa2dlMXh1WEc0Z0lDQWdJQ0FnSUZObGNuWnBZMlV1Y21WdVpHVnlSR0YwWVNncExuUm9aVzRvS0dSaGRHRXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWmxlbVJsYzJNNklHUmhkR0ZjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5TEZ4dUlDQWdJSEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXVkR0ZwYm1WeUlHWmxlbVJsYzJOY0lqNWNiaUFnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnliM2RjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2lZMjlzTFcxa0xURXlYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdnelBudDBhR2x6TG5OMFlYUmxMbVpsZW1SbGMyTjlQQzlvTXo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelRtRnRaVDFjSW1abGVpMWlhV2N0Ykc5bmIxd2lQand2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQThhSElnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdLVHRjYmx4dUlDQWdJSDFjYm4wcE95SXNJbWx0Y0c5eWRDQlJJR1p5YjIwZ0ozRW5PMXh1WEc1cGJYQnZjblFnUVhCcFJHRjBZU0JtY205dElDZHdkV0pzYVdNdlpHVnRieTFrWVhSaEoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2NtVnVaR1Z5UkdGMFlTZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRkV1VUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOdmJIWmxLRUZ3YVVSaGRHRXVhVzVrWlhndVptVjZaR1Z6WXlrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCVFpYSjJhV05sSUdaeWIyMGdKeTR2YzJWeWRtbGpaU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZKbFlXTjBMbU55WldGMFpVTnNZWE56S0h0Y2JpQWdJQ0JuWlhSSmJtbDBhV0ZzVTNSaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFkVzFpYjNSeWIyNUVZWFJoT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHbDBiR1U2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWREb2dYQ0pjSWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWRYUjBiMjQ2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlRvZ1lHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoeVpXWTZJRndpWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlN4Y2JpQWdJQ0JqYjIxd2IyNWxiblJFYVdSTmIzVnVkQ2dwSUh0Y2JseHVJQ0FnSUNBZ0lDQlRaWEoyYVdObExuSmxibVJsY2tSaGRHRW9LUzUwYUdWdUtDaGtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZEZOMFlYUmxLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JxZFcxaWIzUnliMjVFWVhSaE9pQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQmtZWFJoS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwc1hHNGdJQ0FnY21WdVpHVnlLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnFkVzFpYjNSeWIyNWNJajVjYmlBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6YzA1aGJXVTlYQ0pqYjI1MFlXbHVaWEpjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhvTVQ1N2RHaHBjeTV6ZEdGMFpTNXFkVzFpYjNSeWIyNUVZWFJoTG5ScGRHeGxmVHd2YURFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4Y0Q1N2RHaHBjeTV6ZEdGMFpTNXFkVzFpYjNSeWIyNUVZWFJoTG1OdmJuUmxiblI5UEM5d1BseHVJQ0FnSUNBZ0lDQWdJQ0FnUEhBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHRWdZMnhoYzNOT1lXMWxQVndpWW5SdUlHSjBiaTF3Y21sdFlYSjVJR0owYmkxc1oxd2lJR2h5WldZOWUzUm9hWE11YzNSaGRHVXVhblZ0WW05MGNtOXVSR0YwWVM1aWRYUjBiMjR1YUhKbFpuMGdjbTlzWlQxY0ltSjFkSFJ2Ymx3aUlHUmhibWRsY205MWMyeDVVMlYwU1c1dVpYSklWRTFNUFh0N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gxOW9kRzFzT2lCMGFHbHpMbk4wWVhSbExtcDFiV0p2ZEhKdmJrUmhkR0V1WW5WMGRHOXVMbTVoYldWY2JpQWdJQ0FnSUNBZ0lDQWdJSDE5UGp3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dmNENWNiaUFnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ2s3WEc1Y2JpQWdJQ0I5WEc1OUtUc2lMQ0pwYlhCdmNuUWdVU0JtY205dElDZHhKenRjYmx4dWFXMXdiM0owSUVGd2FVUmhkR0VnWm5KdmJTQW5jSFZpYkdsakwyUmxiVzh0WkdGMFlTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lISmxibVJsY2tSaGRHRW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2hCY0dsRVlYUmhMbWx1WkdWNExtcDFiV0p2ZEhKdmJpazdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYm4xY2JpSXNJbXhsZENCbWNtRnRaWE1nUFNCYmUxeHVJQ0FnSUhScGRHeGxPaUJjSWs1dlpHVnFjMXdpTEZ4dUlDQWdJR1JsYzJNNklGd2lSa1ZhSU9hZWhPVzd1dVdjcUNCT2IyUmxTbE1nNVorNjVMcU9JRU5vY205dFpTQldPQ0RsdkpYbWs0N25tb1FnU21GMllWTmpjbWx3ZENEb3Y1RG9vWXpuanEvbG9vUHZ2SXpsaGJia3Vvdmt1N2JwcWJIbGlxanBuWjdwbUx2bG9aN25tb1RuaWJubWdLZnZ2SXptbm9IbGhiYmx2NnZwZ0ovbm1vVG52SmJvcjVIbGlZM25xNi9sa0lUbnA0M290WVRtdXBCY0lpeGNiaUFnSUNCamIyNTBaVzUwT2lCZ1BHUnBkaUJwWkQxY0ltaHZiV1V0YVc1MGNtOWNJajVjYmx4dUlDQWdJQ0FnSUNBOGNENU9iMlJsTG1wendxNGdhWE1nWVNCS1lYWmhVMk55YVhCMElISjFiblJwYldVZ1luVnBiSFFnYjI0Z1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dlpHVjJaV3h2Y0dWeWN5NW5iMjluYkdVdVkyOXRMM1k0TDF3aVBrTm9jbTl0WlNkeklGWTRJRXBoZG1GVFkzSnBjSFFnWlc1bmFXNWxQQzloUGk1Y2JrNXZaR1V1YW5NZ2RYTmxjeUJoYmlCbGRtVnVkQzFrY21sMlpXNHNJRzV2YmkxaWJHOWphMmx1WnlCSkwwOGdiVzlrWld3Z2RHaGhkQ0J0WVd0bGN5QnBkRnh1YkdsbmFIUjNaV2xuYUhRZ1lXNWtJR1ZtWm1samFXVnVkQzRnVG05a1pTNXFjeWNnY0dGamEyRm5aU0JsWTI5emVYTjBaVzBzSUR4aElHaHlaV1k5WENKb2RIUndjem92TDNkM2R5NXVjRzFxY3k1amIyMHZYQ0krYm5CdFBDOWhQaXdnYVhNZ2RHaGxJR3hoY21kbGMzUWdaV052YzNsemRHVnRJRzltSUc5d1pXNWNibk52ZFhKalpTQnNhV0p5WVhKcFpYTWdhVzRnZEdobElIZHZjbXhrTGp3dmNENWNibHh1WEc1Y2JpQWdJQ0FnSUNBZ1BHZ3lJR2xrUFZ3aWFHOXRaUzFrYjNkdWJHOWhaR2hsWVdSY0lpQmtZWFJoTFdSc0xXeHZZMkZzUFZ3aVJHOTNibXh2WVdRZ1ptOXlYQ0krUkc5M2JteHZZV1FnWm05eUlHMWhZMDlUSUNoNE5qUXBQQzlvTWo1Y2JseHVJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpYUc5dFpTMWtiM2R1Ykc5aFpHSnNiMk5yWENJK1hHNWNiaUFnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTl1YjJSbGFuTXViM0puTDJScGMzUXZkall1TVRBdU1DOXViMlJsTFhZMkxqRXdMakF1Y0d0blhDSWdZMnhoYzNNOVhDSm9iMjFsTFdSdmQyNXNiMkZrWW5WMGRHOXVYQ0lnZEdsMGJHVTlYQ0pFYjNkdWJHOWhaQ0IyTmk0eE1DNHdJRXhVVTF3aUlHUmhkR0V0ZG1WeWMybHZiajFjSW5ZMkxqRXdMakJjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFkyTGpFd0xqQWdURlJUWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjMjFoYkd3K1VtVmpiMjF0Wlc1a1pXUWdSbTl5SUUxdmMzUWdWWE5sY25NOEwzTnRZV3hzUGx4dUlDQWdJQ0FnSUNBZ0lEd3ZZVDVjYmx4dUlDQWdJQ0FnSUNBZ0lEeDFiQ0JqYkdGemN6MWNJbXhwYzNRdFpHbDJhV1JsY2kxd2FYQmxJR2h2YldVdGMyVmpiMjVrWVhKNUxXeHBibXR6WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpXNHZaRzkzYm14dllXUXZYQ0krVDNSb1pYSWdSRzkzYm14dllXUnpQQzloUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5dWIyUmxhbk12Ym05a1pTOWliRzlpTDIxaGMzUmxjaTlrYjJNdlkyaGhibWRsYkc5bmN5OURTRUZPUjBWTVQwZGZWall1YldRak5pNHhNQzR3WENJK1EyaGhibWRsYkc5blBDOWhQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZibTlrWldwekxtOXlaeTlrYVhOMEwyeGhkR1Z6ZEMxMk5pNTRMMlJ2WTNNdllYQnBMMXdpUGtGUVNTQkViMk56UEM5aFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0E4TDNWc1BseHVYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVYRzRnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltaHZiV1V0Wkc5M2JteHZZV1JpYkc5amExd2lQbHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OXViMlJsYW5NdWIzSm5MMlJwYzNRdmRqY3VOeTR4TDI1dlpHVXRkamN1Tnk0eExuQnJaMXdpSUdOc1lYTnpQVndpYUc5dFpTMWtiM2R1Ykc5aFpHSjFkSFJ2Ymx3aUlIUnBkR3hsUFZ3aVJHOTNibXh2WVdRZ2RqY3VOeTR4SUVOMWNuSmxiblJjSWlCa1lYUmhMWFpsY25OcGIyNDlYQ0oyTnk0M0xqRmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkamN1Tnk0eElFTjFjbkpsYm5SY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOdFlXeHNQa3hoZEdWemRDQkdaV0YwZFhKbGN6d3ZjMjFoYkd3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJFK1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6Y3oxY0lteHBjM1F0WkdsMmFXUmxjaTF3YVhCbElHaHZiV1V0YzJWamIyNWtZWEo1TFd4cGJtdHpYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5dWIyUmxhbk11YjNKbkwyVnVMMlJ2ZDI1c2IyRmtMMk4xY25KbGJuUXZYQ0krVDNSb1pYSWdSRzkzYm14dllXUnpQQzloUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzl1YjJSbGFuTXZibTlrWlM5aWJHOWlMMjFoYzNSbGNpOWtiMk12WTJoaGJtZGxiRzluY3k5RFNFRk9SMFZNVDBkZlZqY3ViV1FqTnk0M0xqRmNJajVEYUdGdVoyVnNiMmM4TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTl1YjJSbGFuTXViM0puTDJScGMzUXZiR0YwWlhOMExYWTNMbmd2Wkc5amN5OWhjR2t2WENJK1FWQkpJRVJ2WTNNOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMM1ZzUGx4dVhHNGdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lEeHdQbHh1SUNBZ0lDQWdJQ0FnSUU5eUlHaGhkbVVnWVNCc2IyOXJJR0YwSUhSb1pTQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMjV2WkdWcWN5OU1WRk1qYkhSekxYTmphR1ZrZFd4bFhDSStURlJUSUhOamFHVmtkV3hsTGp3dllUNWNiaUFnSUNBZ0lDQWdQQzl3UGx4dUlDQWdJQ0FnUEM5a2FYWStZQ3hjYmlBZ0lDQjJhV1YzVFc5eVpUb2dlMXh1SUNBZ0lDQWdJQ0IwWlhoME9pQmNJdWFidE9Xa211Uy9vZWFCcjF3aUxGeHVJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltaDBkSEJ6T2k4dmJtOWtaV3B6TG05eVp5OWNJbHh1SUNBZ0lIMWNibjBzSUh0Y2JpQWdJQ0IwYVhSc1pUb2dYQ0pPVUUxY0lpeGNiaUFnSUNCa1pYTmpPaUJjSWtaRldpRGt2Yi9ubEtnZ1RsQk5JT2FPcGVXRnBlV0ZxT2VRZythY2dPV2twK2VhaE9XOGdPYTZrT2VVbithQWdlZXp1K2U3bisrOGpPV0Z0K1draCthWG9PbVprT2VhaE9XS24raUR2ZWFKcWVXeGxlaUR2ZVdLbSsrOGpPV1ByK2FWdE9XUWlPV2J2ZW1aaGVXSmplYXl2K2VhaE9XOGdPYTZrT2FoaHVhZXR1KzhqT21BZ3VXNmxPZWVyT2FCcitTNGgrV1BtT2VhaE9hS2dPYWNyK2FidE9hYnYxd2lMRnh1SUNBZ0lHTnZiblJsYm5RNklHQThhREVnWTJ4aGMzTTlYQ0owYVhSc1pTQmxiUzFrWldaaGRXeDBJSFI1Y0dVdGJtVjFkSEpoYkMweE1Wd2lQbHh1SUNBZ0lDQWdJQ0FnSUVKMWFXeGtJR0Z0WVhwcGJtY2dkR2hwYm1kelhHNGdJQ0FnSUNBZ0lEd3ZhREUrWEc0Z0lDQWdJQ0FnSUR4d0lHTnNZWE56UFZ3aWFEVWdaVzB0WkdWbVlYVnNkQ0IwZVhCbExXNWxkWFJ5WVd3dE1URWdjR0o0YkZ3aVBseHVJQ0FnSUNBZ0lDQWdJRzV3YlNCcGN5QjBhR1VnY0dGamEyRm5aU0J0WVc1aFoyVnlJR1p2Y2lCS1lYWmhVMk55YVhCMExpQkdhVzVrTENCemFHRnlaU3dnWVc1a0lISmxkWE5sWEc0Z0lDQWdJQ0FnSUNBZ2NHRmphMkZuWlhNZ2IyWWdZMjlrWlNCbWNtOXRJR2gxYm1SeVpXUnpJRzltSUhSb2IzVnpZVzVrY3lCdlppQmtaWFpsYkc5d1pYSnpJT0tBbENCaGJtUmNiaUFnSUNBZ0lDQWdJQ0JoYzNObGJXSnNaU0IwYUdWdElHbHVJSEJ2ZDJWeVpuVnNJRzVsZHlCM1lYbHpMbHh1SUNBZ0lDQWdJQ0E4TDNBK1hHNGdJQ0FnSUNBZ0lEeGhJR2xrUFZ3aWJXRnBiaTFqZEdGY0lpQm9jbVZtUFZ3aUkzQmhibVV0YUc5dFpYQmhaMlV0Y0hKcFkybHVaMXdpSUdOc1lYTnpQVndpWW5SdUlHSjBiaTFvYVdkb2JHbG5hSFF0TXlCdGNteGNJaUJrWVhSaExXVjJaVzUwTFc1aGJXVTlYQ0pvYjIxbGNHRm5aUzFvWlhKdkxXTjBZVndpUGtkbGRDQnpkR0Z5ZEdWa1BDOWhQbUFzWEc0Z0lDQWdkbWxsZDAxdmNtVTZJSHRjYmlBZ0lDQWdJQ0FnZEdWNGREb2dYQ0xtbTdUbHBKcmt2NkhtZ2E5Y0lpeGNiaUFnSUNBZ0lDQWdhSEpsWmpvZ1hDSm9kSFJ3Y3pvdkwzZDNkeTV1Y0cxcWN5NWpiMjB2WENKY2JpQWdJQ0I5WEc1OUxDQjdYRzRnSUNBZ2RHbDBiR1U2SUZ3aVIzVnNjRndpTEZ4dUlDQWdJR1JsYzJNNklGd2lSa1ZhSU9hVnRPV1FpRWQxYkhEbm1vVGt2SmZscEpybWo1TGt1N2J2dkl6bnZKYm9yNUhqZ0lIa3ZKamxqSmJsa296bnU0VG51NGZsaVkzbnE2L2xwSTNtbllMbm1vVG1xS0hsblpmbGo0cnBuWm5tZ0lIb3RZVG11cER2dkl6bGxwM25uWURsajYva3VaRGxoTC9qZ0lIbGs3em5uWURsc0kvbW03TGxoTC92dkl6b2g2cmxpcWpsakpibHJvem1pSkRsaVkzbnE2L2xwS2ZwaDQvcGg0M2xwSTNsdDZYa3ZaeGNJaXhjYmlBZ0lDQmpiMjUwWlc1ME9pQmdQR2d4SUdOc1lYTnpQVndpYUdWaFpHbHVaeUIwWlhoMExXTmxiblJsY2x3aVBrRjFkRzl0WVhSbElHRnVaQ0JsYm1oaGJtTmxJSGx2ZFhJZ2QyOXlhMlpzYjNjOEwyZ3hQanhvTWlCamJHRnpjejFjSW5CaGNtRm5jbUZ3YUZ3aVBseHVJQ0FnSUNBZ0lDQWdJR2QxYkhBZ2FYTWdZU0IwYjI5c2EybDBJR1p2Y2lCaGRYUnZiV0YwYVc1bklIQmhhVzVtZFd3Z2IzSWdkR2x0WlMxamIyNXpkVzFwYm1jZ2RHRnphM01nYVc0Z2VXOTFjaUJrWlhabGJHOXdiV1Z1ZENCM2IzSnJabXh2ZHl3Z2MyOGdlVzkxSUdOaGJpQnpkRzl3SUcxbGMzTnBibWNnWVhKdmRXNWtJR0Z1WkNCaWRXbHNaQ0J6YjIxbGRHaHBibWN1WEc0Z0lDQWdJQ0FnSUR3dmFESStQR1JwZGlCamJHRnpjejFjSW1OMFlYTmNJajVjYmlBZ0lDQWdJQ0FnSUNBOFlTQmpiR0Z6Y3oxY0ltTjBZWE10WW5WMGRHOXVYQ0lnYUhKbFpqMWNJbWgwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluZFd4d2FuTXZaM1ZzY0M5aWJHOWlMMjFoYzNSbGNpOWtiMk56TDJkbGRIUnBibWN0YzNSaGNuUmxaQzV0WkZ3aVBrZGxkQ0JUZEdGeWRHVmtQQzloUGx4dUlDQWdJQ0FnSUNBOEwyUnBkajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0RvdkwyZDFiSEJxY3k1amIyMHZYQ0pjYmlBZ0lDQjlYRzU5TENCN1hHNGdJQ0FnZEdsMGJHVTZJRndpUW5KdmQzTmxjbWxtZVZ3aUxGeHVJQ0FnSUdSbGMyTTZJRndpUmtWYUlPUzl2K2VVcUNCQ2NtOTNjMlZ5YVdaNUlPYW9vZVdkbCtXTWx1ZTdoT2U3aCtXU2pPZXVvZWVRaHVtaHVlZWJydWVhaE9XUWhPUzRxdVdLbitpRHZlYW9vZVdkbCsrOGpPYWVnZVdrcCthUGtPV05oK21odWVlYnJ1ZWFoT1dQcitlN3RPYUtwT2FBcCtPQWdlV0tuK2lEdmVXa2plZVVxT2FBcCsrOGpPVzV0dVd1bnVlT3NPZW5yK2FjcU9XOGorZWFoT2FRcmVXN3V1ZTlrZW1odFZ3aUxGeHVJQ0FnSUdOdmJuUmxiblE2SUdBOGMyVmpkR2x2YmlCcFpEMWNJblJ2Y0Mxb2IyMWxMWE5sWTNScGIyNWNJaUJqYkdGemN6MWNJblJ2Y0MxelpXTjBhVzl1SUdOdmJHOXlMV0ZjSWo1Y2JpQWdJQ0FnSUR4a2FYWWdhV1E5WENKMGIzQXRhRzl0WlMxcGJXRm5aVndpUGp3dlpHbDJQbHh1WEc0Z0lDQWdJQ0FnUEdneklHbGtQVndpZEc5d0xYTjFZblJwZEd4bFhDSWdZMnhoYzNNOVhDSnNZWEpuWlMxbWIyNTBYQ0krUW5KdmQzTmxjbWxtZVNCc1pYUnpJSGx2ZFNCeVpYRjFhWEpsS0R4emNHRnVJR05zWVhOelBWd2lZMjlzYjNJdFpGd2lQaWR0YjJSMWJHVnpKend2YzNCaGJqNHBJR2x1SUhSb1pTQmljbTkzYzJWeUlHSjVJR0oxYm1Sc2FXNW5JSFZ3SUdGc2JDQnZaaUI1YjNWeUlHUmxjR1Z1WkdWdVkybGxjeTQ4TDJnelBseHVJQ0FnSUNBZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXpkV0p6ZEdGamF5OXViMlJsTFdKeWIzZHpaWEpwWm5ramRYTmhaMlZjSWo1Y2JpQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCamJHRnpjejFjSW5SdmNDMWlkWFIwYjI1Y0lpQnBaRDFjSW5SdmNDMWlkWFIwYjI0eVhDSStYRzRnSUNBZ0lDQWdJQ0FnUkc5amRXMWxiblJoZEdsdmJseHVJQ0FnSUNBZ0lDQThMMkoxZEhSdmJqNWNiaUFnSUNBZ0lEd3ZZVDVjYmlBZ0lDQThMM05sWTNScGIyNCtZQ3hjYmlBZ0lDQjJhV1YzVFc5eVpUb2dlMXh1SUNBZ0lDQWdJQ0IwWlhoME9pQmNJdWFidE9Xa211Uy9vZWFCcjF3aUxGeHVJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltaDBkSEE2THk5aWNtOTNjMlZ5YVdaNUxtOXlaeTljSWx4dUlDQWdJSDFjYm4wc0lIdGNiaUFnSUNCMGFYUnNaVG9nWENKQ2IzZGxjbHdpTEZ4dUlDQWdJR1JsYzJNNklGd2lSa1ZhSU9XUHIrbUZqZWU5cnVTOXYrZVVxQ0JDYjNkbGNpRG1rSnpudEtMamdJSGxyb25vbzRYamdJSG1tN1RtbHJEbGtvemxqYmpvdmIzbHBvSktZWFpoVTJOeWFYQjA0NENCUTFOVDVMbUw1N0c3NTVxRTU3MlI1N3VjNkxXRTVycVE3N3lNNllDYTZMK0g2SWVxNVlxbzVZeVc1ck9vNVlXbDVvcUE1cHl2NWE2TTU3Nk82S2VqNVlhejVhU041cDJDNTVxRTVxR0c1cDYyNVl5RjU2Nmg1NUNHNlpldTZhS1lYQ0lzWEc0Z0lDQWdZMjl1ZEdWdWREb2dZRHhrYVhZZ1kyeGhjM005WENKdFlXbHVYQ0krWEc0OGNDQmpiR0Z6Y3oxY0lteGxZV1JjSWo1WFpXSWdjMmwwWlhNZ1lYSmxJRzFoWkdVZ2IyWWdiRzkwY3lCdlppQjBhR2x1WjNNZzRvQ1VJR1p5WVcxbGQyOXlhM01zSUd4cFluSmhjbWxsY3l3Z1lYTnpaWFJ6TENCaGJtUWdkWFJwYkdsMGFXVnpMaUJDYjNkbGNpQnRZVzVoWjJWeklHRnNiQ0IwYUdWelpTQjBhR2x1WjNNZ1ptOXlJSGx2ZFM0OEwzQStYRzQ4Y0Q1TFpXVndhVzVuSUhSeVlXTnJJRzltSUdGc2JDQjBhR1Z6WlNCd1lXTnJZV2RsY3lCaGJtUWdiV0ZyYVc1bklITjFjbVVnZEdobGVTQmhjbVVnZFhBZ2RHOGdaR0YwWlNBb2IzSWdjMlYwSUhSdklIUm9aU0J6Y0dWamFXWnBZeUIyWlhKemFXOXVjeUI1YjNVZ2JtVmxaQ2tnYVhNZ2RISnBZMnQ1TGlCQ2IzZGxjaUIwYnlCMGFHVWdjbVZ6WTNWbElUd3ZjRDVjYmp4d1BrSnZkMlZ5SUdOaGJpQnRZVzVoWjJVZ1kyOXRjRzl1Wlc1MGN5QjBhR0YwSUdOdmJuUmhhVzRnU0ZSTlRDd2dRMU5UTENCS1lYWmhVMk55YVhCMExDQm1iMjUwY3lCdmNpQmxkbVZ1SUdsdFlXZGxJR1pwYkdWekxpQkNiM2RsY2lCa2IyVnpidUtBbVhRZ1kyOXVZMkYwWlc1aGRHVWdiM0lnYldsdWFXWjVJR052WkdVZ2IzSWdaRzhnWVc1NWRHaHBibWNnWld4elpTQXRJR2wwSUdwMWMzUWdhVzV6ZEdGc2JITWdkR2hsSUhKcFoyaDBJSFpsY25OcGIyNXpJRzltSUhSb1pTQndZV05yWVdkbGN5QjViM1VnYm1WbFpDQmhibVFnZEdobGFYSWdaR1Z3Wlc1a1pXNWphV1Z6TGp3dmNENWNianh3UGxSdklEeGhJR2h5WldZOVhDSWpaMlYwZEdsdVp5MXpkR0Z5ZEdWa1hDSStaMlYwSUhOMFlYSjBaV1E4TDJFK0xDQkNiM2RsY2lCM2IzSnJjeUJpZVNCbVpYUmphR2x1WnlCaGJtUWdhVzV6ZEdGc2JHbHVaeUE4WVNCb2NtVm1QVndpTDNObFlYSmphRndpUG5CaFkydGhaMlZ6UEM5aFBpQm1jbTl0SUdGc2JDQnZkbVZ5TENCMFlXdHBibWNnWTJGeVpTQnZaaUJvZFc1MGFXNW5MQ0JtYVc1a2FXNW5MQ0JrYjNkdWJHOWhaR2x1Wnl3Z1lXNWtJSE5oZG1sdVp5QjBhR1VnYzNSMVptWWdlVzkxNG9DWmNtVWdiRzl2YTJsdVp5Qm1iM0l1SUVKdmQyVnlJR3RsWlhCeklIUnlZV05ySUc5bUlIUm9aWE5sSUhCaFkydGhaMlZ6SUdsdUlHRWdiV0Z1YVdabGMzUWdabWxzWlN3Z1BHRWdhSEpsWmoxY0lpOWtiMk56TDJOeVpXRjBhVzVuTFhCaFkydGhaMlZ6THlOaWIzZGxjbXB6YjI1Y0lqNDhZMjlrWlNCamJHRnpjejFjSW1ocFoyaHNhV2RvZEdWeUxYSnZkV2RsWENJK1ltOTNaWEl1YW5OdmJqd3ZZMjlrWlQ0OEwyRStMaUJJYjNjZ2VXOTFJSFZ6WlNBOFlTQm9jbVZtUFZ3aUwzTmxZWEpqYUZ3aVBuQmhZMnRoWjJWelBDOWhQaUJwY3lCMWNDQjBieUI1YjNVdUlFSnZkMlZ5SUhCeWIzWnBaR1Z6SUdodmIydHpJSFJ2SUdaaFkybHNhWFJoZEdVZ2RYTnBibWNnY0dGamEyRm5aWE1nYVc0Z2VXOTFjaUE4WVNCb2NtVm1QVndpTDJSdlkzTXZkRzl2YkhOY0lqNTBiMjlzY3lCaGJtUWdkMjl5YTJac2IzZHpQQzloUGk0OEwzQStYRzQ4Y0Q1Q2IzZGxjaUJwY3lCdmNIUnBiV2w2WldRZ1ptOXlJSFJvWlNCbWNtOXVkQzFsYm1RdUlFbG1JRzExYkhScGNHeGxJSEJoWTJ0aFoyVnpJR1JsY0dWdVpDQnZiaUJoSUhCaFkydGhaMlVnTFNCcVVYVmxjbmtnWm05eUlHVjRZVzF3YkdVZ0xTQkNiM2RsY2lCM2FXeHNJR1J2ZDI1c2IyRmtJR3BSZFdWeWVTQnFkWE4wSUc5dVkyVXVJRlJvYVhNZ2FYTWdhMjV2ZDI0Z1lYTWdZU0JtYkdGMElHUmxjR1Z1WkdWdVkza2daM0poY0dnZ1lXNWtJR2wwSUdobGJIQnpJSEpsWkhWalpTQndZV2RsSUd4dllXUXVQQzl3UGx4dVBHZ3lJR2xrUFZ3aWFXNXpkR0ZzYkMxaWIzZGxjbHdpUGp4aElHaHlaV1k5WENJamFXNXpkR0ZzYkMxaWIzZGxjbHdpSUdOc1lYTnpQVndpYUdWaFpHVnlMV0Z1WTJodmNsd2lQc0tuUEM5aFBrbHVjM1JoYkd3Z1FtOTNaWEk4TDJneVBseHVQSEErUW05M1pYSWdhWE1nWVNCamIyMXRZVzVrSUd4cGJtVWdkWFJwYkdsMGVTNGdTVzV6ZEdGc2JDQnBkQ0IzYVhSb0lHNXdiUzQ4TDNBK1hHNDhabWxuZFhKbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFhDSStQSEJ5WlQ0OFkyOWtaU0JqYkdGemN6MWNJbXhoYm1kMVlXZGxMV0poYzJoY0lpQmtZWFJoTFd4aGJtYzlYQ0ppWVhOb1hDSStQSE53WVc0Z1kyeGhjM005WENKbmNGd2lQaVFnUEM5emNHRnVQbTV3YlNCcGJuTjBZV3hzSUMxbklHSnZkMlZ5UEM5amIyUmxQand2Y0hKbFBqd3ZabWxuZFhKbFBseHVQSEErUW05M1pYSWdjbVZ4ZFdseVpYTWdQR0VnYUhKbFpqMWNJbWgwZEhBNkx5OXViMlJsYW5NdWIzSm5MMXdpUG01dlpHVXNJRzV3YlR3dllUNGdZVzVrSUR4aElHaHlaV1k5WENKb2RIUndPaTh2WjJsMExYTmpiUzV2Y21kY0lqNW5hWFE4TDJFK0xqd3ZjRDVjYmp4d1BreGhkR1Z6ZENCeVpXeGxZWE5sT2lBOFlTQm9jbVZtUFZ3aVhDSStQR2x0WnlCemNtTTlYQ0pvZEhSd2N6b3ZMMmx0Wnk1emFHbGxiR1J6TG1sdkwyNXdiUzkyTDJKdmQyVnlMbk4yWno5dFlYaEJaMlU5TWpVNU1qQXdNRndpSUdGc2REMWNJbUp2ZDJWeUlIWmxjbk5wYjI1Y0lqNDhMMkUrUEM5d1BseHVQSEErUm05eUlIUnliM1ZpYkdWemFHOXZkR2x1WnlCcGJuTjBZV3hzWVhScGIyNGdiMjRnWkdsbVptVnlaVzUwSUhCc1lYUm1iM0p0Y3l3Z2NtVmhaQ0IwYUdVZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOWliM2RsY2k5aWIzZGxjaTkzYVd0cEwxUnliM1ZpYkdWemFHOXZkR2x1WjF3aVBuUnliM1ZpYkdWemFHOXZkR2x1Wnp3dllUNGdkMmxyYVNCd1lXZGxMand2Y0Q1Y2JqeG9NaUJwWkQxY0ltZGxkSFJwYm1jdGMzUmhjblJsWkZ3aVBqeGhJR2h5WldZOVhDSWpaMlYwZEdsdVp5MXpkR0Z5ZEdWa1hDSWdZMnhoYzNNOVhDSm9aV0ZrWlhJdFlXNWphRzl5WENJK3dxYzhMMkUrUjJWMGRHbHVaeUJ6ZEdGeWRHVmtQQzlvTWo1Y2JqeG9NeUJwWkQxY0ltbHVjM1JoYkd3dGNHRmphMkZuWlhOY0lqNDhZU0JvY21WbVBWd2lJMmx1YzNSaGJHd3RjR0ZqYTJGblpYTmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1SmJuTjBZV3hzSUhCaFkydGhaMlZ6UEM5b016NWNianh3UGtsdWMzUmhiR3dnY0dGamEyRm5aWE1nZDJsMGFDQThZU0JvY21WbVBWd2lMMlJ2WTNNdllYQnBJMmx1YzNSaGJHeGNJajQ4WTI5a1pTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RHVnlMWEp2ZFdkbFhDSStZbTkzWlhJZ2FXNXpkR0ZzYkR3dlkyOWtaVDQ4TDJFK0xpQkNiM2RsY2lCcGJuTjBZV3hzY3lCd1lXTnJZV2RsY3lCMGJ5QThZMjlrWlNCamJHRnpjejFjSW1ocFoyaHNhV2RvZEdWeUxYSnZkV2RsWENJK1ltOTNaWEpmWTI5dGNHOXVaVzUwY3k4OEwyTnZaR1UrTGp3dmNENWNianhtYVdkMWNtVWdZMnhoYzNNOVhDSm9hV2RvYkdsbmFIUmNJajQ4Y0hKbFBqeGpiMlJsSUdOc1lYTnpQVndpYkdGdVozVmhaMlV0WW1GemFGd2lJR1JoZEdFdGJHRnVaejFjSW1KaGMyaGNJajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrWW05M1pYSWdhVzV6ZEdGc2JDQW1iSFE3Y0dGamEyRm5aU1puZERzOEwyTnZaR1UrUEM5d2NtVStQQzltYVdkMWNtVStYRzQ4Y0Q1QklIQmhZMnRoWjJVZ1kyRnVJR0psSUdFZ1IybDBTSFZpSUhOb2IzSjBhR0Z1WkN3Z1lTQkhhWFFnWlc1a2NHOXBiblFzSUdFZ1ZWSk1MQ0JoYm1RZ2JXOXlaUzRnVW1WaFpDQnRiM0psSUdGaWIzVjBJRHhoSUdoeVpXWTlYQ0l2Wkc5amN5OWhjR2t2STJsdWMzUmhiR3hjSWo0OFkyOWtaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kR1Z5TFhKdmRXZGxYQ0krWW05M1pYSWdhVzV6ZEdGc2JEd3ZZMjlrWlQ0OEwyRStMand2Y0Q1Y2JqeG1hV2QxY21VZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSY0lqNDhjSEpsUGp4amIyUmxJR05zWVhOelBWd2liR0Z1WjNWaFoyVXRZbUZ6YUZ3aUlHUmhkR0V0YkdGdVp6MWNJbUpoYzJoY0lqNDhjM0JoYmlCamJHRnpjejFjSW1OY0lqNGpJR2x1YzNSaGJHeHpJSFJvWlNCd2NtOXFaV04wSUdSbGNHVnVaR1Z1WTJsbGN5QnNhWE4wWldRZ2FXNGdZbTkzWlhJdWFuTnZiand2YzNCaGJqNWNianh6Y0dGdUlHTnNZWE56UFZ3aVozQmNJajRrSUR3dmMzQmhiajVpYjNkbGNpQnBibk4wWVd4c1hHNDhjM0JoYmlCamJHRnpjejFjSW1OY0lqNGpJSEpsWjJsemRHVnlaV1FnY0dGamEyRm5aVHd2YzNCaGJqNWNianh6Y0dGdUlHTnNZWE56UFZ3aVozQmNJajRrSUR3dmMzQmhiajVpYjNkbGNpQnBibk4wWVd4c0lHcHhkV1Z5ZVZ4dVBITndZVzRnWTJ4aGMzTTlYQ0pqWENJK0l5QkhhWFJJZFdJZ2MyaHZjblJvWVc1a1BDOXpjR0Z1UGx4dVBITndZVzRnWTJ4aGMzTTlYQ0puY0Z3aVBpUWdQQzl6Y0dGdVBtSnZkMlZ5SUdsdWMzUmhiR3dnWkdWellXNWtjbTh2YldGemIyNXllVnh1UEhOd1lXNGdZMnhoYzNNOVhDSmpYQ0krSXlCSGFYUWdaVzVrY0c5cGJuUThMM053WVc0K1hHNDhjM0JoYmlCamJHRnpjejFjSW1kd1hDSStKQ0E4TDNOd1lXNCtZbTkzWlhJZ2FXNXpkR0ZzYkNCbmFYUTZMeTluYVhSb2RXSXVZMjl0TDNWelpYSXZjR0ZqYTJGblpTNW5hWFJjYmp4emNHRnVJR05zWVhOelBWd2lZMXdpUGlNZ1ZWSk1QQzl6Y0dGdVBseHVQSE53WVc0Z1kyeGhjM005WENKbmNGd2lQaVFnUEM5emNHRnVQbUp2ZDJWeUlHbHVjM1JoYkd3Z2FIUjBjRG92TDJWNFlXMXdiR1V1WTI5dEwzTmpjbWx3ZEM1cWN6d3ZZMjlrWlQ0OEwzQnlaVDQ4TDJacFozVnlaVDVjYmp4b015QnBaRDFjSW5ObFlYSmphQzF3WVdOcllXZGxjMXdpUGp4aElHaHlaV1k5WENJamMyVmhjbU5vTFhCaFkydGhaMlZ6WENJZ1kyeGhjM005WENKb1pXRmtaWEl0WVc1amFHOXlYQ0krd3FjOEwyRStVMlZoY21Ob0lIQmhZMnRoWjJWelBDOW9NejVjYmp4d1BqeGhJR2h5WldZOVhDSXZjMlZoY21Ob1hDSStVMlZoY21Ob0lFSnZkMlZ5SUhCaFkydGhaMlZ6UEM5aFBpQmhibVFnWm1sdVpDQjBhR1VnY21WbmFYTjBaWEpsWkNCd1lXTnJZV2RsSUc1aGJXVnpJR1p2Y2lCNWIzVnlJR1poZG05eWFYUmxJSEJ5YjJwbFkzUnpMand2Y0Q1Y2JqeG9NeUJwWkQxY0luTmhkbVV0Y0dGamEyRm5aWE5jSWo0OFlTQm9jbVZtUFZ3aUkzTmhkbVV0Y0dGamEyRm5aWE5jSWlCamJHRnpjejFjSW1obFlXUmxjaTFoYm1Ob2IzSmNJajdDcHp3dllUNVRZWFpsSUhCaFkydGhaMlZ6UEM5b016NWNianh3UGtOeVpXRjBaU0JoSUR4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNpNXFjMjl1UEM5amIyUmxQaUJtYVd4bElHWnZjaUI1YjNWeUlIQmhZMnRoWjJVZ2QybDBhQ0E4WVNCb2NtVm1QVndpTDJSdlkzTXZZM0psWVhScGJtY3RjR0ZqYTJGblpYTXZJMkp2ZDJWeWFuTnZibHdpUGp4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNpQnBibWwwUEM5amIyUmxQand2WVQ0dVBDOXdQbHh1UEhBK1ZHaGxiaUJ6WVhabElHNWxkeUJrWlhCbGJtUmxibU5wWlhNZ2RHOGdlVzkxY2lBOFkyOWtaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kR1Z5TFhKdmRXZGxYQ0krWW05M1pYSXVhbk52Ymp3dlkyOWtaVDRnZDJsMGFDQThZMjlrWlNCamJHRnpjejFjSW1ocFoyaHNhV2RvZEdWeUxYSnZkV2RsWENJK1ltOTNaWElnYVc1emRHRnNiQ0JRUVVOTFFVZEZJQzB0YzJGMlpUd3ZZMjlrWlQ0OEwzQStYRzQ4YURNZ2FXUTlYQ0oxYzJVdGNHRmphMkZuWlhOY0lqNDhZU0JvY21WbVBWd2lJM1Z6WlMxd1lXTnJZV2RsYzF3aUlHTnNZWE56UFZ3aWFHVmhaR1Z5TFdGdVkyaHZjbHdpUHNLblBDOWhQbFZ6WlNCd1lXTnJZV2RsY3p3dmFETStYRzQ4Y0Q1SWIzY2dlVzkxSUhWelpTQndZV05yWVdkbGN5QnBjeUIxY0NCMGJ5QjViM1V1SUZkbElISmxZMjl0YldWdVpDQjViM1VnZFhObElFSnZkMlZ5SUhSdloyVjBhR1Z5SUhkcGRHZ2dQR0VnYUhKbFpqMWNJaTlrYjJOekwzUnZiMnh6TDF3aVBrZHlkVzUwTENCU1pYRjFhWEpsU2xNc0lGbGxiMjFoYml3Z1lXNWtJR3h2ZEhNZ2IyWWdiM1JvWlhJZ2RHOXZiSE04TDJFK0lHOXlJR0oxYVd4a0lIbHZkWElnYjNkdUlIZHZjbXRtYkc5M0lIZHBkR2dnUEdFZ2FISmxaajFjSWk5a2IyTnpMMkZ3YVM5Y0lqNTBhR1VnUVZCSlBDOWhQaTRnV1c5MUlHTmhiaUJoYkhOdklIVnpaU0IwYUdVZ2FXNXpkR0ZzYkdWa0lIQmhZMnRoWjJWeklHUnBjbVZqZEd4NUxDQnNhV3RsSUhSb2FYTXNJR2x1SUhSb1pTQmpZWE5sSUc5bUlEeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1cWNYVmxjbms4TDJOdlpHVStPand2Y0Q1Y2JqeG1hV2QxY21VZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSY0lqNDhjSEpsUGp4amIyUmxJR05zWVhOelBWd2liR0Z1WjNWaFoyVXRhSFJ0YkZ3aUlHUmhkR0V0YkdGdVp6MWNJbWgwYld4Y0lqNDhjM0JoYmlCamJHRnpjejFjSW01MFhDSStKbXgwTzNOamNtbHdkQ0E4TDNOd1lXNCtQSE53WVc0Z1kyeGhjM005WENKdVlWd2lQbk55WXowOEwzTndZVzQrUEhOd1lXNGdZMnhoYzNNOVhDSnpYQ0krWENKaWIzZGxjbDlqYjIxd2IyNWxiblJ6TDJweGRXVnllUzlrYVhOMEwycHhkV1Z5ZVM1dGFXNHVhbk5jSWp3dmMzQmhiajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltNTBYQ0krSm1kME95WnNkRHN2YzJOeWFYQjBKbWQwT3p3dmMzQmhiajQ4TDJOdlpHVStQQzl3Y21VK1BDOW1hV2QxY21VK1hHNDhhRElnYVdROVhDSjBkMmwwZEdWeUxYVndaR0YwWlhNdFpuSnZiUzFpYjNkbGNtaDBkSEJ6ZEhkcGRIUmxjbU52YldKdmQyVnlYQ0krUEdFZ2FISmxaajFjSWlOMGQybDBkR1Z5TFhWd1pHRjBaWE10Wm5KdmJTMWliM2RsY21oMGRIQnpkSGRwZEhSbGNtTnZiV0p2ZDJWeVhDSWdZMnhoYzNNOVhDSm9aV0ZrWlhJdFlXNWphRzl5WENJK3dxYzhMMkUrVkhkcGRIUmxjaUIxY0dSaGRHVnpJR1p5YjIwZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmRIZHBkSFJsY2k1amIyMHZZbTkzWlhKY0lqNUFZbTkzWlhJOEwyRStQQzlvTWo1Y2JqeHdQanhoSUdOc1lYTnpQVndpZEhkcGRIUmxjaTEwYVcxbGJHbHVaVndpSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMM1IzYVhSMFpYSXVZMjl0TDJKdmQyVnlYQ0lnWkdGMFlTMTNhV1JuWlhRdGFXUTlYQ0kwT0RBek56Y3lPVEV6TmprM05UUTJNalZjSWo1VWQyVmxkSE1nWW5rZ1FHSnZkMlZ5UEM5aFBseHVQQzl3UGx4dVhHNDhMMlJwZGo1Z0xGeHVJQ0FnSUhacFpYZE5iM0psT2lCN1hHNGdJQ0FnSUNBZ0lIUmxlSFE2SUZ3aTVwdTA1YVNhNUwraDVvR3ZYQ0lzWEc0Z0lDQWdJQ0FnSUdoeVpXWTZJRndpYUhSMGNITTZMeTlpYjNkbGNpNXBieTljSWx4dUlDQWdJSDFjYm4wc0lIdGNiaUFnSUNCMGFYUnNaVG9nWENKQ2IzSjNjMlZ5VTNsdVkxd2lMRnh1SUNBZ0lHUmxjMk02SUZ3aVJrVmFJT1M5ditlVXFDQkNjbTkzYzJWeWMzbHVZeURvcnFubXRZL29wNGpsbWFqbHJwN21sN2JsdjZ2cGdKL25tb1RsazQzbHVwVGxpWTNucTYvbGtJVG5wNDNtbG9ma3U3Ym5tb1RtbTdUbWxMbmx1YmJvaDZybGlxamxpTGZtbHJEcG9iWHBuYUx2dkl6a3VxYmxqNi9scnA3bWw3YmxrSXptcmFYbGtJVGt1S3JudTRqbnE2L3Z2SXptajVEcHE1am9oN1Bsc0pFek1DWG5tb1RsdklEbGo1SG1sWWpuam9kY0lpeGNiaUFnSUNCamIyNTBaVzUwT2lCZ1BHZ3hJR05zWVhOelBWd2lhRzl2YTF3aVBsUnBiV1V0YzJGMmFXNW5JSE41Ym1Ob2NtOXVhWE5sWkNCaWNtOTNjMlZ5SUhSbGMzUnBibWN1UEM5b01UNDhjQ0JqYkdGemN6MWNJbkp2Ym5ObFlXeGNJajVKZE9LQW1YTWdkMmxqYTJWa0xXWmhjM1FnWVc1a0lIUnZkR0ZzYkhrZ1puSmxaUzQ4TDNBK1BIQWdZMnhoYzNNOVhDSjJhV1JsYjF3aVBqeGhJR05zWVhOelBWd2lkbWxrWlc5ZlgyeHBibXRjSWlCb2NtVm1QVndpSTF3aVBqd3ZZVDQ4TDNBK1BIQWdZMnhoYzNNOVhDSm9iM2N0ZEc5Y0lqNDhMM0ErUEhBZ1kyeGhjM005WENKb2IzY3RkRzlmWDJOdmJXMWhibVJjSWo1dWNHMGdhVzV6ZEdGc2JDQXRaeUJpY205M2MyVnlMWE41Ym1NOEwzQStQSEFnWTJ4aGMzTTlYQ0pqZEdGY0lqNDhZU0JqYkdGemN6MWNJbUoxZEhSdmJpQmlkWFIwYjI0dExYQnlhVzFoY25sY0lpQm9jbVZtUFZ3aUkybHVjM1JoYkd4Y0lpQjBhWFJzWlQxY0lrZGxkQ0JUZEdGeWRHVmtYQ0krUjJWMElGTjBZWEowWldROEwyRStQQzl3UGp4a2FYWWdZMnhoYzNNOVhDSndiR0Y1WlhKY0lqNDhjRDRuWW05dWFtOTFjand2Y0Q0OEwyUnBkajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0hNNkx5OWljbTkzYzJWeWMzbHVZeTVwYnk5Y0lseHVJQ0FnSUgxY2JuMWRYRzVjYm14bGRDQnBibVJsZUNBOUlIdGNiaUFnSUNCbVpYcGtaWE5qT2lCY0lrWkZXaURsaVkzbnE2L21xS0hsblpmbGpKYmx0NlhucUl2bHZJRGxqNUhtb1libW5yWmNJaXhjYmlBZ0lDQnFkVzFpYjNSeWIyNDZJSHRjYmlBZ0lDQWdJQ0FnZEdsMGJHVTZJRndpU0dWc2JHOHNJRVpGV2lCQmJtUWdVbVZoWTNRaFhDSXNYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUTZJRndpNkwrWjVwaXY1TGlBNUxpcTVMMi81NVNvSUVaRldpRG1ub1RsdTdybm1vVGxpWTNucTYvbXFLSGxuWmZsakpibHZJRGxqNUhucExya3ZvdnZ2SXptdkpUbnBMcmt1b2Jsbjdya3VvNVNaV0ZqZE9XTmxlYVdoK1M3dHVlN2hPUzd0dWVhaE9XOGdPV1BrZWU3aythZWhPT0FnbHdpTEZ4dUlDQWdJQ0FnSUNCaWRYUjBiMjQ2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklHQThhU0JqYkdGemN6MWNJbVpoSUdaaExXZHBkR2gxWWkxaGJIUmNJajQ4TDJrK0lFZHBkRWgxWW1Bc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvY21WbU9pQmNJbWgwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltZFhKcFl5MTZhR0Z2TDJabGVsd2lYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzU5WEc1Y2JteGxkQ0JzYVhOMElEMGdlMXh1SUNBZ0lHcDFiV0p2ZEhKdmJqb2dlMXh1SUNBZ0lDQWdJQ0IwYVhSc1pUb2dYQ0pHUlZvZ1FXNWtJRkpsWVdOMElFWnlZVzFsSVZ3aUxGeHVJQ0FnSUNBZ0lDQmpiMjUwWlc1ME9pQmNJdWkvbWVhWXIrUzRnT1M0cWtaRld1YVZ0T1dRaUZKbFlXTjA1NXFFNVlpWDZLR281YkdWNTZTNjZhRzE3N3lNNksrMzU0SzU1WWU3NUxpTDZaMmk1WWlYNktHbzU1cUVJRVJsZEdGcGJDRG1qSW5wa3E3b3Y1dmxoYVhvcjZibWc0WHBvYlhtdFkvb3A0aGNJaXhjYmlBZ0lDQWdJQ0FnWW5WMGRHOXVPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVZVzFsT2lCY0l1YWZwZWVjaSthYnRPV2ttdVMvb2VhQnIxd2lMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FISmxaam9nWENKb2RIUndPaTh2Wm1WNkxtaGxjM1IxWkhrdVkyOXRYQ0pjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JseHViR1YwSUdOdmJXMXZiaUE5SUh0Y2JpQWdJQ0J6YVhSbFRtRnRaVG9nWENKR1JWb2dVbVZoWTNRZ1JFVk5UMXdpTEZ4dVhHNGdJQ0FnYm1GMlJHRjBZVG9nVzN0Y2JpQWdJQ0FnSUNBZ2JtRnRaVG9nWENMcHBwYnBvYlZjSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKcGJtUmxlQzVvZEcxc1hDSmNiaUFnSUNCOUxDQjdYRzRnSUNBZ0lDQWdJRzVoYldVNklGd2lSa1ZhNVorNjVweXM1cDYyNXA2RVhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2liR2x6ZEM1b2RHMXNYQ0pjYmlBZ0lDQjlYU3hjYmx4dUlDQWdJR1p2YjNSbGNsUmxlSFE2SUZ3aXdxa2dNakF4TnlCR1JWb2c1WW1ONTZ1djVxaWg1WjJYNVl5VzViZWw1NmlMNWJ5QTVZK1I1cUdHNXA2MklFTnlaV0YwWldRZ1lua2dSblZ5YVdNdWVtaGhiMXdpWEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCY0ltbHVaR1Y0WENJNklHbHVaR1Y0TEZ4dUlDQWdJRndpYkdsemRGd2lPaUJzYVhOMExGeHVJQ0FnSUZ3aVpuSmhiV1Z6WENJNklHWnlZVzFsY3l4Y2JpQWdJQ0JjSW1OdmJXMXZibHdpT2lCamIyMXRiMjVjYm4xY2JpSXNJbWx0Y0c5eWRDQlJJR1p5YjIwZ0ozRW5YRzVjYm1sdGNHOXlkQ0JCY0dsRVlYUmhJR1p5YjIwZ0ozQjFZbXhwWXk5a1pXMXZMV1JoZEdFblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCdVlYWk1hWE4wS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRkV1VUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpiMngyWlNoQmNHbEVZWFJoTG1OdmJXMXZiaTV1WVhaRVlYUmhLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnYzJsMFpVNWhiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdVUzVRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0VGd2FVUmhkR0V1WTI5dGJXOXVMbk5wZEdWT1lXMWxLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWm05dmRHVnlWR1Y0ZENncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb1FYQnBSR0YwWVM1amIyMXRiMjR1Wm05dmRHVnlWR1Y0ZENsY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0JUWlhKMmFXTmxJR1p5YjIwZ0p5NHZZMjl0Ylc5dUoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlNaV0ZqZEM1amNtVmhkR1ZEYkdGemN5aDdYRzRnSUNBZ1oyVjBTVzVwZEdsaGJGTjBZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dmRHVnlWR1Y0ZERvZ1hDSmNJbHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmlBZ0lDQmpiMjF3YjI1bGJuUkVhV1JOYjNWdWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnVTJWeWRtbGpaUzVtYjI5MFpYSlVaWGgwS0NrdWRHaGxiaWdvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUlRkR0YwWlNoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXZkR1Z5VkdWNGREb2daR0YwWVZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0I5TEZ4dUlDQWdJSEpsYm1SbGNpZ3BJSHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0R4bWIyOTBaWElnWTJ4aGMzTk9ZVzFsUFZ3aVkyOXVkR0ZwYm1WeVhDSStYRzRnSUNBZ0lDQWdJRHh6Y0dGdUlHTnNZWE56VG1GdFpUMWNJbkIxYkd3dGJHVm1kRndpUG50MGFHbHpMbk4wWVhSbExtWnZiM1JsY2xSbGVIUjlQQzl6Y0dGdVBseHVJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjMDVoYldVOVhDSndkV3hzTFhKcFoyaDBYQ0krWEc0Z0lDQWdJQ0FnSUR4cElHTnNZWE56VG1GdFpUMWNJbWxqYjI0Z2FXTnZiaTEzWldsNGFXNWNJajQ4TDJrK1hHNGdJQ0FnSUNBZ0lEeHBJR05zWVhOelRtRnRaVDFjSW1samIyNGdhV052YmkxM1pXbGliMXdpUGp3dmFUNWNiaUFnSUNBOEwzTndZVzQrWEc0Z0lDQWdQQzltYjI5MFpYSStLVnh1WEc0Z0lDQWdmVnh1ZlNraUxDSnBiWEJ2Y25RZ1UyVnlkbWxqWlNCbWNtOXRJQ2N1TDJOdmJXMXZiaWRjYm1sdGNHOXlkQ0JSSUdaeWIyMGdKM0VuWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZKbFlXTjBMbU55WldGMFpVTnNZWE56S0h0Y2JpQWdJQ0JuWlhSSmJtbDBhV0ZzVTNSaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlkRzVFWVhSaE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMmwwWlU1aGJXVTZJRndpWENJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRjJUR2x6ZERvZ1cxMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNGdJQ0FnWTI5dGNHOXVaVzUwUkdsa1RXOTFiblFvS1NCN1hHNGdJQ0FnSUNBZ0lGRXVZV3hzS0Z0Y2JpQWdJQ0FnSUNBZ0lDQWdJRk5sY25acFkyVXVjMmwwWlU1aGJXVW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lGTmxjblpwWTJVdWJtRjJUR2x6ZENncFhHNGdJQ0FnSUNBZ0lGMHBMblJvWlc0b0tHUmhkR0VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnlkRzVFWVhSaElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5wZEdWT1lXMWxPaUJrWVhSaFd6QmRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoZGt4cGMzUTZJR1JoZEdGYk1WMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjBia1JoZEdFNklISjBia1JoZEdGY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlN4Y2JpQWdJQ0J5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnVZWFpNYVhOMElEMGdXMTFjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcGRHVnRJRzltSUhSb2FYTXVjM1JoZEdVdWNuUnVSR0YwWVM1dVlYWk1hWE4wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1WVhaTWFYTjBMbkIxYzJnb1BHeHBJR3RsZVQxN2FYUmxiUzV1WVcxbGZUNDhZU0JvY21WbVBYdHBkR1Z0TG1oeVpXWjlQbnRwZEdWdExtNWhiV1Y5UEM5aFBqd3ZiR2srS1Z4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lDQWdJQ0FnSUR4dVlYWWdZMnhoYzNOT1lXMWxQVndpYm1GMlltRnlJRzVoZG1KaGNpMXBiblpsY25ObElHNWhkbUpoY2kxbWFYaGxaQzEwYjNCY0lqNWNiaUFnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSmpiMjUwWVdsdVpYSmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWJtRjJZbUZ5TFdobFlXUmxjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aWRYUjBiMjRnZEhsd1pUMWNJbUoxZEhSdmJsd2lJR05zWVhOelRtRnRaVDFjSW01aGRtSmhjaTEwYjJkbmJHVWdZMjlzYkdGd2MyVmtYQ0lnWkdGMFlTMTBiMmRuYkdVOVhDSmpiMnhzWVhCelpWd2lJR1JoZEdFdGRHRnlaMlYwUFZ3aUkyNWhkbUpoY2x3aUlHRnlhV0V0Wlhod1lXNWtaV1E5WENKbVlXeHpaVndpSUdGeWFXRXRZMjl1ZEhKdmJITTlYQ0p1WVhaaVlYSmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITndZVzRnWTJ4aGMzTk9ZVzFsUFZ3aWMzSXRiMjVzZVZ3aVBsUnZaMmRzWlNCdVlYWnBaMkYwYVc5dVBDOXpjR0Z1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjMDVoYldVOVhDSnBZMjl1TFdKaGNsd2lQand2YzNCaGJqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQVndpYVdOdmJpMWlZWEpjSWo0OEwzTndZVzQrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpjR0Z1SUdOc1lYTnpUbUZ0WlQxY0ltbGpiMjR0WW1GeVhDSStQQzl6Y0dGdVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZZblYwZEc5dVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGhJR05zWVhOelRtRnRaVDFjSW01aGRtSmhjaTFpY21GdVpGd2lJR2h5WldZOVhDSXZYQ0krZTNSb2FYTXVjM1JoZEdVdWNuUnVSR0YwWVM1emFYUmxUbUZ0WlgwOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnYVdROVhDSnVZWFppWVhKY0lpQmpiR0Z6YzA1aGJXVTlYQ0pqYjJ4c1lYQnpaU0J1WVhaaVlYSXRZMjlzYkdGd2MyVmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZFd3Z1kyeGhjM05PWVcxbFBWd2libUYySUc1aGRtSmhjaTF1WVhaY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdibUYyVEdsemRIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM1ZzUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJRHd2Ym1GMlBseHVJQ0FnSUNBZ0lDQXBYRzVjYmlBZ0lDQjlYRzU5S1NJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2V5QmNJbVJsWm1GMWJIUmNJam9nY21WeGRXbHlaU2hjSW1OdmNtVXRhbk12YkdsaWNtRnllUzltYmk5blpYUXRhWFJsY21GMGIzSmNJaWtzSUY5ZlpYTk5iMlIxYkdVNklIUnlkV1VnZlRzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIc2dYQ0prWldaaGRXeDBYQ0k2SUhKbGNYVnBjbVVvWENKamIzSmxMV3B6TDJ4cFluSmhjbmt2Wm00dmIySnFaV04wTDJGemMybG5ibHdpS1N3Z1gxOWxjMDF2WkhWc1pUb2dkSEoxWlNCOU95SXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVYRzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPMXh1WEc1MllYSWdYMkZ6YzJsbmJpQTlJSEpsY1hWcGNtVW9YQ0l1TGk5amIzSmxMV3B6TDI5aWFtVmpkQzloYzNOcFoyNWNJaWs3WEc1Y2JuWmhjaUJmWVhOemFXZHVNaUE5SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9YMkZ6YzJsbmJpazdYRzVjYm1aMWJtTjBhVzl1SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9iMkpxS1NCN0lISmxkSFZ5YmlCdlltb2dKaVlnYjJKcUxsOWZaWE5OYjJSMWJHVWdQeUJ2WW1vZ09pQjdJR1JsWm1GMWJIUTZJRzlpYWlCOU95QjlYRzVjYm1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUY5aGMzTnBaMjR5TG1SbFptRjFiSFFnZkh3Z1puVnVZM1JwYjI0Z0tIUmhjbWRsZENrZ2UxeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Uc2dhU0E4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lIWmhjaUJ6YjNWeVkyVWdQU0JoY21kMWJXVnVkSE5iYVYwN1hHNWNiaUFnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYzI5MWNtTmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tITnZkWEpqWlN3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCMFlYSm5aWFJiYTJWNVhTQTlJSE52ZFhKalpWdHJaWGxkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIwWVhKblpYUTdYRzU5T3lJc0luSmxjWFZwY21Vb0p5NHVMMjF2WkhWc1pYTXZkMlZpTG1SdmJTNXBkR1Z5WVdKc1pTY3BPMXh1Y21WeGRXbHlaU2duTGk0dmJXOWtkV3hsY3k5bGN6WXVjM1J5YVc1bkxtbDBaWEpoZEc5eUp5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR1TDIxdlpIVnNaWE12WTI5eVpTNW5aWFF0YVhSbGNtRjBiM0luS1RzaUxDSnlaWEYxYVhKbEtDY3VMaTh1TGk5dGIyUjFiR1Z6TDJWek5pNXZZbXBsWTNRdVlYTnphV2R1SnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHVMeTR1TDIxdlpIVnNaWE12WDJOdmNtVW5LUzVQWW1wbFkzUXVZWE56YVdkdU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQnBaaWgwZVhCbGIyWWdhWFFnSVQwZ0oyWjFibU4wYVc5dUp5bDBhSEp2ZHlCVWVYQmxSWEp5YjNJb2FYUWdLeUFuSUdseklHNXZkQ0JoSUdaMWJtTjBhVzl1SVNjcE8xeHVJQ0J5WlhSMWNtNGdhWFE3WEc1OU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9LWHNnTHlvZ1pXMXdkSGtnS2k4Z2ZUc2lMQ0oyWVhJZ2FYTlBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTlwY3kxdlltcGxZM1FuS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCcFppZ2hhWE5QWW1wbFkzUW9hWFFwS1hSb2NtOTNJRlI1Y0dWRmNuSnZjaWhwZENBcklDY2dhWE1nYm05MElHRnVJRzlpYW1WamRDRW5LVHRjYmlBZ2NtVjBkWEp1SUdsME8xeHVmVHNpTENJdkx5Qm1ZV3h6WlNBdFBpQkJjbkpoZVNOcGJtUmxlRTltWEc0dkx5QjBjblZsSUNBdFBpQkJjbkpoZVNOcGJtTnNkV1JsYzF4dWRtRnlJSFJ2U1U5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x2WW1wbFkzUW5LVnh1SUNBc0lIUnZUR1Z1WjNSb0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXeGxibWQwYUNjcFhHNGdJQ3dnZEc5SmJtUmxlQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0YVc1a1pYZ25LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvU1ZOZlNVNURURlZFUlZNcGUxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9KSFJvYVhNc0lHVnNMQ0JtY205dFNXNWtaWGdwZTF4dUlDQWdJSFpoY2lCUElDQWdJQ0FnUFNCMGIwbFBZbXBsWTNRb0pIUm9hWE1wWEc0Z0lDQWdJQ0FzSUd4bGJtZDBhQ0E5SUhSdlRHVnVaM1JvS0U4dWJHVnVaM1JvS1Z4dUlDQWdJQ0FnTENCcGJtUmxlQ0FnUFNCMGIwbHVaR1Y0S0daeWIyMUpibVJsZUN3Z2JHVnVaM1JvS1Z4dUlDQWdJQ0FnTENCMllXeDFaVHRjYmlBZ0lDQXZMeUJCY25KaGVTTnBibU5zZFdSbGN5QjFjMlZ6SUZOaGJXVldZV3gxWlZwbGNtOGdaWEYxWVd4cGRIa2dZV3huYjNKcGRHaHRYRzRnSUNBZ2FXWW9TVk5mU1U1RFRGVkVSVk1nSmlZZ1pXd2dJVDBnWld3cGQyaHBiR1VvYkdWdVozUm9JRDRnYVc1a1pYZ3BlMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQlBXMmx1WkdWNEt5dGRPMXh1SUNBZ0lDQWdhV1lvZG1Gc2RXVWdJVDBnZG1Gc2RXVXBjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdMeThnUVhKeVlYa2pkRzlKYm1SbGVDQnBaMjV2Y21WeklHaHZiR1Z6TENCQmNuSmhlU05wYm1Oc2RXUmxjeUF0SUc1dmRGeHVJQ0FnSUgwZ1pXeHpaU0JtYjNJb08yeGxibWQwYUNBK0lHbHVaR1Y0T3lCcGJtUmxlQ3NyS1dsbUtFbFRYMGxPUTB4VlJFVlRJSHg4SUdsdVpHVjRJR2x1SUU4cGUxeHVJQ0FnSUNBZ2FXWW9UMXRwYm1SbGVGMGdQVDA5SUdWc0tYSmxkSFZ5YmlCSlUxOUpUa05NVlVSRlV5QjhmQ0JwYm1SbGVDQjhmQ0F3TzF4dUlDQWdJSDBnY21WMGRYSnVJQ0ZKVTE5SlRrTk1WVVJGVXlBbUppQXRNVHRjYmlBZ2ZUdGNibjA3SWl3aUx5OGdaMlYwZEdsdVp5QjBZV2NnWm5KdmJTQXhPUzR4TGpNdU5pQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bktDbGNiblpoY2lCamIyWWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIyWW5LVnh1SUNBc0lGUkJSeUE5SUhKbGNYVnBjbVVvSnk0dlgzZHJjeWNwS0NkMGIxTjBjbWx1WjFSaFp5Y3BYRzRnSUM4dklFVlRNeUIzY205dVp5Qm9aWEpsWEc0Z0lDd2dRVkpISUQwZ1kyOW1LR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUJoY21kMWJXVnVkSE03SUgwb0tTa2dQVDBnSjBGeVozVnRaVzUwY3ljN1hHNWNiaTh2SUdaaGJHeGlZV05ySUdadmNpQkpSVEV4SUZOamNtbHdkQ0JCWTJObGMzTWdSR1Z1YVdWa0lHVnljbTl5WEc1MllYSWdkSEo1UjJWMElEMGdablZ1WTNScGIyNG9hWFFzSUd0bGVTbDdYRzRnSUhSeWVTQjdYRzRnSUNBZ2NtVjBkWEp1SUdsMFcydGxlVjA3WEc0Z0lIMGdZMkYwWTJnb1pTbDdJQzhxSUdWdGNIUjVJQ292SUgxY2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0IyWVhJZ1R5d2dWQ3dnUWp0Y2JpQWdjbVYwZFhKdUlHbDBJRDA5UFNCMWJtUmxabWx1WldRZ1B5QW5WVzVrWldacGJtVmtKeUE2SUdsMElEMDlQU0J1ZFd4c0lEOGdKMDUxYkd3blhHNGdJQ0FnTHk4Z1FFQjBiMU4wY21sdVoxUmhaeUJqWVhObFhHNGdJQ0FnT2lCMGVYQmxiMllnS0ZRZ1BTQjBjbmxIWlhRb1R5QTlJRTlpYW1WamRDaHBkQ2tzSUZSQlJ5a3BJRDA5SUNkemRISnBibWNuSUQ4Z1ZGeHVJQ0FnSUM4dklHSjFhV3gwYVc1VVlXY2dZMkZ6WlZ4dUlDQWdJRG9nUVZKSElEOGdZMjltS0U4cFhHNGdJQ0FnTHk4Z1JWTXpJR0Z5WjNWdFpXNTBjeUJtWVd4c1ltRmphMXh1SUNBZ0lEb2dLRUlnUFNCamIyWW9UeWtwSUQwOUlDZFBZbXBsWTNRbklDWW1JSFI1Y0dWdlppQlBMbU5oYkd4bFpTQTlQU0FuWm5WdVkzUnBiMjRuSUQ4Z0owRnlaM1Z0Wlc1MGN5Y2dPaUJDTzF4dWZUc2lMQ0oyWVhJZ2RHOVRkSEpwYm1jZ1BTQjdmUzUwYjFOMGNtbHVaenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tHbDBLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNTlPeUlzSW5aaGNpQmpiM0psSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN2RtVnljMmx2YmpvZ0p6SXVOQzR3SjMwN1hHNXBaaWgwZVhCbGIyWWdYMTlsSUQwOUlDZHVkVzFpWlhJbktWOWZaU0E5SUdOdmNtVTdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRkVzVrWldZaUxDSXZMeUJ2Y0hScGIyNWhiQ0F2SUhOcGJYQnNaU0JqYjI1MFpYaDBJR0pwYm1ScGJtZGNiblpoY2lCaFJuVnVZM1JwYjI0Z1BTQnlaWEYxYVhKbEtDY3VMMTloTFdaMWJtTjBhVzl1SnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHWnVMQ0IwYUdGMExDQnNaVzVuZEdncGUxeHVJQ0JoUm5WdVkzUnBiMjRvWm00cE8xeHVJQ0JwWmloMGFHRjBJRDA5UFNCMWJtUmxabWx1WldRcGNtVjBkWEp1SUdadU8xeHVJQ0J6ZDJsMFkyZ29iR1Z1WjNSb0tYdGNiaUFnSUNCallYTmxJREU2SUhKbGRIVnliaUJtZFc1amRHbHZiaWhoS1h0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtYmk1allXeHNLSFJvWVhRc0lHRXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1kyRnpaU0F5T2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWVN3Z1lpbDdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNHVZMkZzYkNoMGFHRjBMQ0JoTENCaUtUdGNiaUFnSUNCOU8xeHVJQ0FnSUdOaGMyVWdNem9nY21WMGRYSnVJR1oxYm1OMGFXOXVLR0VzSUdJc0lHTXBlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWnVMbU5oYkd3b2RHaGhkQ3dnWVN3Z1lpd2dZeWs3WEc0Z0lDQWdmVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9MeW9nTGk0dVlYSm5jeUFxTHlsN1hHNGdJQ0FnY21WMGRYSnVJR1p1TG1Gd2NHeDVLSFJvWVhRc0lHRnlaM1Z0Wlc1MGN5azdYRzRnSUgwN1hHNTlPeUlzSWk4dklEY3VNaTR4SUZKbGNYVnBjbVZQWW1wbFkzUkRiMlZ5WTJsaWJHVW9ZWEpuZFcxbGJuUXBYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdhV1lvYVhRZ1BUMGdkVzVrWldacGJtVmtLWFJvY205M0lGUjVjR1ZGY25KdmNpaGNJa05oYmlkMElHTmhiR3dnYldWMGFHOWtJRzl1SUNCY0lpQXJJR2wwS1R0Y2JpQWdjbVYwZFhKdUlHbDBPMXh1ZlRzaUxDSXZMeUJVYUdGdWF5ZHpJRWxGT0NCbWIzSWdhR2x6SUdaMWJtNTVJR1JsWm1sdVpWQnliM0JsY25SNVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDRnlaWEYxYVhKbEtDY3VMMTltWVdsc2N5Y3BLR1oxYm1OMGFXOXVLQ2w3WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29lMzBzSUNkaEp5d2dlMmRsZERvZ1puVnVZM1JwYjI0b0tYc2djbVYwZFhKdUlEYzdJSDE5S1M1aElDRTlJRGM3WEc1OUtUc2lMQ0oyWVhJZ2FYTlBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTlwY3kxdlltcGxZM1FuS1Z4dUlDQXNJR1J2WTNWdFpXNTBJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlrdVpHOWpkVzFsYm5SY2JpQWdMeThnYVc0Z2IyeGtJRWxGSUhSNWNHVnZaaUJrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MElHbHpJQ2R2WW1wbFkzUW5YRzRnSUN3Z2FYTWdQU0JwYzA5aWFtVmpkQ2hrYjJOMWJXVnVkQ2tnSmlZZ2FYTlBZbXBsWTNRb1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2s3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR2x6SUQ4Z1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2hwZENrZ09pQjdmVHRjYm4wN0lpd2lMeThnU1VVZ09DMGdaRzl1SjNRZ1pXNTFiU0JpZFdjZ2EyVjVjMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FvWEc0Z0lDZGpiMjV6ZEhKMVkzUnZjaXhvWVhOUGQyNVFjbTl3WlhKMGVTeHBjMUJ5YjNSdmRIbHdaVTltTEhCeWIzQmxjblI1U1hORmJuVnRaWEpoWW14bExIUnZURzlqWVd4bFUzUnlhVzVuTEhSdlUzUnlhVzVuTEhaaGJIVmxUMlluWEc0cExuTndiR2wwS0Njc0p5azdJaXdpZG1GeUlHZHNiMkpoYkNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJkc2IySmhiQ2NwWEc0Z0lDd2dZMjl5WlNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZlkyOXlaU2NwWEc0Z0lDd2dZM1I0SUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZlkzUjRKeWxjYmlBZ0xDQm9hV1JsSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5b2FXUmxKeWxjYmlBZ0xDQlFVazlVVDFSWlVFVWdQU0FuY0hKdmRHOTBlWEJsSnp0Y2JseHVkbUZ5SUNSbGVIQnZjblFnUFNCbWRXNWpkR2x2YmloMGVYQmxMQ0J1WVcxbExDQnpiM1Z5WTJVcGUxeHVJQ0IyWVhJZ1NWTmZSazlTUTBWRUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVJseHVJQ0FnSUN3Z1NWTmZSMHhQUWtGTUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVIxeHVJQ0FnSUN3Z1NWTmZVMVJCVkVsRElEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVUxeHVJQ0FnSUN3Z1NWTmZVRkpQVkU4Z0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVVGeHVJQ0FnSUN3Z1NWTmZRa2xPUkNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVFseHVJQ0FnSUN3Z1NWTmZWMUpCVUNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVYxeHVJQ0FnSUN3Z1pYaHdiM0owY3lBZ0lEMGdTVk5mUjB4UFFrRk1JRDhnWTI5eVpTQTZJR052Y21WYmJtRnRaVjBnZkh3Z0tHTnZjbVZiYm1GdFpWMGdQU0I3ZlNsY2JpQWdJQ0FzSUdWNGNGQnliM1J2SUNBOUlHVjRjRzl5ZEhOYlVGSlBWRTlVV1ZCRlhWeHVJQ0FnSUN3Z2RHRnlaMlYwSUNBZ0lEMGdTVk5mUjB4UFFrRk1JRDhnWjJ4dlltRnNJRG9nU1ZOZlUxUkJWRWxESUQ4Z1oyeHZZbUZzVzI1aGJXVmRJRG9nS0dkc2IySmhiRnR1WVcxbFhTQjhmQ0I3ZlNsYlVGSlBWRTlVV1ZCRlhWeHVJQ0FnSUN3Z2EyVjVMQ0J2ZDI0c0lHOTFkRHRjYmlBZ2FXWW9TVk5mUjB4UFFrRk1LWE52ZFhKalpTQTlJRzVoYldVN1hHNGdJR1p2Y2loclpYa2dhVzRnYzI5MWNtTmxLWHRjYmlBZ0lDQXZMeUJqYjI1MFlXbHVjeUJwYmlCdVlYUnBkbVZjYmlBZ0lDQnZkMjRnUFNBaFNWTmZSazlTUTBWRUlDWW1JSFJoY21kbGRDQW1KaUIwWVhKblpYUmJhMlY1WFNBaFBUMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lHbG1LRzkzYmlBbUppQnJaWGtnYVc0Z1pYaHdiM0owY3lsamIyNTBhVzUxWlR0Y2JpQWdJQ0F2THlCbGVIQnZjblFnYm1GMGFYWmxJRzl5SUhCaGMzTmxaRnh1SUNBZ0lHOTFkQ0E5SUc5M2JpQS9JSFJoY21kbGRGdHJaWGxkSURvZ2MyOTFjbU5sVzJ0bGVWMDdYRzRnSUNBZ0x5OGdjSEpsZG1WdWRDQm5iRzlpWVd3Z2NHOXNiSFYwYVc5dUlHWnZjaUJ1WVcxbGMzQmhZMlZ6WEc0Z0lDQWdaWGh3YjNKMGMxdHJaWGxkSUQwZ1NWTmZSMHhQUWtGTUlDWW1JSFI1Y0dWdlppQjBZWEpuWlhSYmEyVjVYU0FoUFNBblpuVnVZM1JwYjI0bklEOGdjMjkxY21ObFcydGxlVjFjYmlBZ0lDQXZMeUJpYVc1a0lIUnBiV1Z5Y3lCMGJ5Qm5iRzlpWVd3Z1ptOXlJR05oYkd3Z1puSnZiU0JsZUhCdmNuUWdZMjl1ZEdWNGRGeHVJQ0FnSURvZ1NWTmZRa2xPUkNBbUppQnZkMjRnUHlCamRIZ29iM1YwTENCbmJHOWlZV3dwWEc0Z0lDQWdMeThnZDNKaGNDQm5iRzlpWVd3Z1kyOXVjM1J5ZFdOMGIzSnpJR1p2Y2lCd2NtVjJaVzUwSUdOb1lXNW5aU0IwYUdWdElHbHVJR3hwWW5KaGNubGNiaUFnSUNBNklFbFRYMWRTUVZBZ0ppWWdkR0Z5WjJWMFcydGxlVjBnUFQwZ2IzVjBJRDhnS0daMWJtTjBhVzl1S0VNcGUxeHVJQ0FnSUNBZ2RtRnlJRVlnUFNCbWRXNWpkR2x2YmloaExDQmlMQ0JqS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3lCcGJuTjBZVzVqWlc5bUlFTXBlMXh1SUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ2hoY21kMWJXVnVkSE11YkdWdVozUm9LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnTURvZ2NtVjBkWEp1SUc1bGR5QkRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0F4T2lCeVpYUjFjbTRnYm1WM0lFTW9ZU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURJNklISmxkSFZ5YmlCdVpYY2dReWhoTENCaUtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUhKbGRIVnliaUJ1WlhjZ1F5aGhMQ0JpTENCaktUdGNiaUFnSUNBZ0lDQWdmU0J5WlhSMWNtNGdReTVoY0hCc2VTaDBhR2x6TENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lFWmJVRkpQVkU5VVdWQkZYU0E5SUVOYlVGSlBWRTlVV1ZCRlhUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCR08xeHVJQ0FnSUM4dklHMWhhMlVnYzNSaGRHbGpJSFpsY25OcGIyNXpJR1p2Y2lCd2NtOTBiM1I1Y0dVZ2JXVjBhRzlrYzF4dUlDQWdJSDBwS0c5MWRDa2dPaUJKVTE5UVVrOVVUeUFtSmlCMGVYQmxiMllnYjNWMElEMDlJQ2RtZFc1amRHbHZiaWNnUHlCamRIZ29SblZ1WTNScGIyNHVZMkZzYkN3Z2IzVjBLU0E2SUc5MWREdGNiaUFnSUNBdkx5QmxlSEJ2Y25RZ2NISnZkRzhnYldWMGFHOWtjeUIwYnlCamIzSmxMaVZEVDA1VFZGSlZRMVJQVWlVdWJXVjBhRzlrY3k0bFRrRk5SU1ZjYmlBZ0lDQnBaaWhKVTE5UVVrOVVUeWw3WEc0Z0lDQWdJQ0FvWlhod2IzSjBjeTUyYVhKMGRXRnNJSHg4SUNobGVIQnZjblJ6TG5acGNuUjFZV3dnUFNCN2ZTa3BXMnRsZVYwZ1BTQnZkWFE3WEc0Z0lDQWdJQ0F2THlCbGVIQnZjblFnY0hKdmRHOGdiV1YwYUc5a2N5QjBieUJqYjNKbExpVkRUMDVUVkZKVlExUlBVaVV1Y0hKdmRHOTBlWEJsTGlWT1FVMUZKVnh1SUNBZ0lDQWdhV1lvZEhsd1pTQW1JQ1JsZUhCdmNuUXVVaUFtSmlCbGVIQlFjbTkwYnlBbUppQWhaWGh3VUhKdmRHOWJhMlY1WFNsb2FXUmxLR1Y0Y0ZCeWIzUnZMQ0JyWlhrc0lHOTFkQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1THk4Z2RIbHdaU0JpYVhSdFlYQmNiaVJsZUhCdmNuUXVSaUE5SURFN0lDQWdMeThnWm05eVkyVmtYRzRrWlhod2IzSjBMa2NnUFNBeU95QWdJQzh2SUdkc2IySmhiRnh1SkdWNGNHOXlkQzVUSUQwZ05Ec2dJQ0F2THlCemRHRjBhV05jYmlSbGVIQnZjblF1VUNBOUlEZzdJQ0FnTHk4Z2NISnZkRzljYmlSbGVIQnZjblF1UWlBOUlERTJPeUFnTHk4Z1ltbHVaRnh1SkdWNGNHOXlkQzVYSUQwZ016STdJQ0F2THlCM2NtRndYRzRrWlhod2IzSjBMbFVnUFNBMk5Ec2dJQzh2SUhOaFptVmNiaVJsZUhCdmNuUXVVaUE5SURFeU9Ec2dMeThnY21WaGJDQndjbTkwYnlCdFpYUm9iMlFnWm05eUlHQnNhV0p5WVhKNVlDQmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdKR1Y0Y0c5eWREc2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR1Y0WldNcGUxeHVJQ0IwY25rZ2UxeHVJQ0FnSUhKbGRIVnliaUFoSVdWNFpXTW9LVHRjYmlBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlZ4dWZUc2lMQ0l2THlCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmVteHZhWEp2WTJzdlkyOXlaUzFxY3k5cGMzTjFaWE12T0RZamFYTnpkV1ZqYjIxdFpXNTBMVEV4TlRjMU9UQXlPRnh1ZG1GeUlHZHNiMkpoYkNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2RIbHdaVzltSUhkcGJtUnZkeUFoUFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VUV0YwYUNBOVBTQk5ZWFJvWEc0Z0lEOGdkMmx1Wkc5M0lEb2dkSGx3Wlc5bUlITmxiR1lnSVQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnYzJWc1ppNU5ZWFJvSUQwOUlFMWhkR2dnUHlCelpXeG1JRG9nUm5WdVkzUnBiMjRvSjNKbGRIVnliaUIwYUdsekp5a29LVHRjYm1sbUtIUjVjR1Z2WmlCZlgyY2dQVDBnSjI1MWJXSmxjaWNwWDE5bklEMGdaMnh2WW1Gc095QXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUc1dkxYVnVaR1ZtSWl3aWRtRnlJR2hoYzA5M2JsQnliM0JsY25SNUlEMGdlMzB1YUdGelQzZHVVSEp2Y0dWeWRIazdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwTENCclpYa3BlMXh1SUNCeVpYUjFjbTRnYUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNocGRDd2dhMlY1S1R0Y2JuMDdJaXdpZG1GeUlHUlFJQ0FnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktWeHVJQ0FzSUdOeVpXRjBaVVJsYzJNZ1BTQnlaWEYxYVhKbEtDY3VMMTl3Y205d1pYSjBlUzFrWlhOakp5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dQeUJtZFc1amRHbHZiaWh2WW1wbFkzUXNJR3RsZVN3Z2RtRnNkV1VwZTF4dUlDQnlaWFIxY200Z1pGQXVaaWh2WW1wbFkzUXNJR3RsZVN3Z1kzSmxZWFJsUkdWell5Z3hMQ0IyWVd4MVpTa3BPMXh1ZlNBNklHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2EyVjVMQ0IyWVd4MVpTbDdYRzRnSUc5aWFtVmpkRnRyWlhsZElEMGdkbUZzZFdVN1hHNGdJSEpsZEhWeWJpQnZZbXBsWTNRN1hHNTlPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlrdVpHOWpkVzFsYm5RZ0ppWWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1ME95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdJWEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dKaVlnSVhKbGNYVnBjbVVvSnk0dlgyWmhhV3h6Snlrb1puVnVZM1JwYjI0b0tYdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoeVpYRjFhWEpsS0NjdUwxOWtiMjB0WTNKbFlYUmxKeWtvSjJScGRpY3BMQ0FuWVNjc0lIdG5aWFE2SUdaMWJtTjBhVzl1S0NsN0lISmxkSFZ5YmlBM095QjlmU2t1WVNBaFBTQTNPMXh1ZlNrN0lpd2lMeThnWm1Gc2JHSmhZMnNnWm05eUlHNXZiaTFoY25KaGVTMXNhV3RsSUVWVE15QmhibVFnYm05dUxXVnVkVzFsY21GaWJHVWdiMnhrSUZZNElITjBjbWx1WjNOY2JuWmhjaUJqYjJZZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYjJZbktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdUMkpxWldOMEtDZDZKeWt1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVb01Da2dQeUJQWW1wbFkzUWdPaUJtZFc1amRHbHZiaWhwZENsN1hHNGdJSEpsZEhWeWJpQmpiMllvYVhRcElEMDlJQ2RUZEhKcGJtY25JRDhnYVhRdWMzQnNhWFFvSnljcElEb2dUMkpxWldOMEtHbDBLVHRjYm4wN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnYVhRZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnYVhRZ0lUMDlJRzUxYkd3Z09pQjBlWEJsYjJZZ2FYUWdQVDA5SUNkbWRXNWpkR2x2YmljN1hHNTlPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiblpoY2lCamNtVmhkR1VnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxamNtVmhkR1VuS1Z4dUlDQXNJR1JsYzJOeWFYQjBiM0lnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmY0hKdmNHVnlkSGt0WkdWell5Y3BYRzRnSUN3Z2MyVjBWRzlUZEhKcGJtZFVZV2NnUFNCeVpYRjFhWEpsS0NjdUwxOXpaWFF0ZEc4dGMzUnlhVzVuTFhSaFp5Y3BYRzRnSUN3Z1NYUmxjbUYwYjNKUWNtOTBiM1I1Y0dVZ1BTQjdmVHRjYmx4dUx5OGdNalV1TVM0eUxqRXVNU0FsU1hSbGNtRjBiM0pRY205MGIzUjVjR1VsVzBCQWFYUmxjbUYwYjNKZEtDbGNibkpsY1hWcGNtVW9KeTR2WDJocFpHVW5LU2hKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU3dnY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjJsMFpYSmhkRzl5Snlrc0lHWjFibU4wYVc5dUtDbDdJSEpsZEhWeWJpQjBhR2x6T3lCOUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhEYjI1emRISjFZM1J2Y2l3Z1RrRk5SU3dnYm1WNGRDbDdYRzRnSUVOdmJuTjBjblZqZEc5eUxuQnliM1J2ZEhsd1pTQTlJR055WldGMFpTaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTd2dlMjVsZUhRNklHUmxjMk55YVhCMGIzSW9NU3dnYm1WNGRDbDlLVHRjYmlBZ2MyVjBWRzlUZEhKcGJtZFVZV2NvUTI5dWMzUnlkV04wYjNJc0lFNUJUVVVnS3lBbklFbDBaWEpoZEc5eUp5azdYRzU5T3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQk1TVUpTUVZKWklDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMnhwWW5KaGNua25LVnh1SUNBc0lDUmxlSEJ2Y25RZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZaWGh3YjNKMEp5bGNiaUFnTENCeVpXUmxabWx1WlNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzSmxaR1ZtYVc1bEp5bGNiaUFnTENCb2FXUmxJQ0FnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyaHBaR1VuS1Z4dUlDQXNJR2hoY3lBZ0lDQWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYUdGekp5bGNiaUFnTENCSmRHVnlZWFJ2Y25NZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BYRzRnSUN3Z0pHbDBaWEpEY21WaGRHVWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXBkR1Z5TFdOeVpXRjBaU2NwWEc0Z0lDd2djMlYwVkc5VGRISnBibWRVWVdjZ1BTQnlaWEYxYVhKbEtDY3VMMTl6WlhRdGRHOHRjM1J5YVc1bkxYUmhaeWNwWEc0Z0lDd2daMlYwVUhKdmRHOTBlWEJsVDJZZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRaM0J2SnlsY2JpQWdMQ0JKVkVWU1FWUlBVaUFnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2RwZEdWeVlYUnZjaWNwWEc0Z0lDd2dRbFZIUjFrZ0lDQWdJQ0FnSUNBZ1BTQWhLRnRkTG10bGVYTWdKaVlnSjI1bGVIUW5JR2x1SUZ0ZExtdGxlWE1vS1NrZ0x5OGdVMkZtWVhKcElHaGhjeUJpZFdkbmVTQnBkR1Z5WVhSdmNuTWdkeTl2SUdCdVpYaDBZRnh1SUNBc0lFWkdYMGxVUlZKQlZFOVNJQ0FnSUQwZ0owQkFhWFJsY21GMGIzSW5YRzRnSUN3Z1MwVlpVeUFnSUNBZ0lDQWdJQ0FnUFNBbmEyVjVjeWRjYmlBZ0xDQldRVXhWUlZNZ0lDQWdJQ0FnSUNBOUlDZDJZV3gxWlhNbk8xeHVYRzUyWVhJZ2NtVjBkWEp1VkdocGN5QTlJR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUIwYUdsek95QjlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0VKaGMyVXNJRTVCVFVVc0lFTnZibk4wY25WamRHOXlMQ0J1WlhoMExDQkVSVVpCVlV4VUxDQkpVMTlUUlZRc0lFWlBVa05GUkNsN1hHNGdJQ1JwZEdWeVEzSmxZWFJsS0VOdmJuTjBjblZqZEc5eUxDQk9RVTFGTENCdVpYaDBLVHRjYmlBZ2RtRnlJR2RsZEUxbGRHaHZaQ0E5SUdaMWJtTjBhVzl1S0d0cGJtUXBlMXh1SUNBZ0lHbG1LQ0ZDVlVkSFdTQW1KaUJyYVc1a0lHbHVJSEJ5YjNSdktYSmxkSFZ5YmlCd2NtOTBiMXRyYVc1a1hUdGNiaUFnSUNCemQybDBZMmdvYTJsdVpDbDdYRzRnSUNBZ0lDQmpZWE5sSUV0RldWTTZJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQnJaWGx6S0NsN0lISmxkSFZ5YmlCdVpYY2dRMjl1YzNSeWRXTjBiM0lvZEdocGN5d2dhMmx1WkNrN0lIMDdYRzRnSUNBZ0lDQmpZWE5sSUZaQlRGVkZVem9nY21WMGRYSnVJR1oxYm1OMGFXOXVJSFpoYkhWbGN5Z3BleUJ5WlhSMWNtNGdibVYzSUVOdmJuTjBjblZqZEc5eUtIUm9hWE1zSUd0cGJtUXBPeUI5TzF4dUlDQWdJSDBnY21WMGRYSnVJR1oxYm1OMGFXOXVJR1Z1ZEhKcFpYTW9LWHNnY21WMGRYSnVJRzVsZHlCRGIyNXpkSEoxWTNSdmNpaDBhR2x6TENCcmFXNWtLVHNnZlR0Y2JpQWdmVHRjYmlBZ2RtRnlJRlJCUnlBZ0lDQWdJQ0FnUFNCT1FVMUZJQ3NnSnlCSmRHVnlZWFJ2Y2lkY2JpQWdJQ0FzSUVSRlJsOVdRVXhWUlZNZ1BTQkVSVVpCVlV4VUlEMDlJRlpCVEZWRlUxeHVJQ0FnSUN3Z1ZrRk1WVVZUWDBKVlJ5QTlJR1poYkhObFhHNGdJQ0FnTENCd2NtOTBieUFnSUNBZ0lEMGdRbUZ6WlM1d2NtOTBiM1I1Y0dWY2JpQWdJQ0FzSUNSdVlYUnBkbVVnSUNBZ1BTQndjbTkwYjF0SlZFVlNRVlJQVWwwZ2ZId2djSEp2ZEc5YlJrWmZTVlJGVWtGVVQxSmRJSHg4SUVSRlJrRlZURlFnSmlZZ2NISnZkRzliUkVWR1FWVk1WRjFjYmlBZ0lDQXNJQ1JrWldaaGRXeDBJQ0FnUFNBa2JtRjBhWFpsSUh4OElHZGxkRTFsZEdodlpDaEVSVVpCVlV4VUtWeHVJQ0FnSUN3Z0pHVnVkSEpwWlhNZ0lDQTlJRVJGUmtGVlRGUWdQeUFoUkVWR1gxWkJURlZGVXlBL0lDUmtaV1poZFd4MElEb2daMlYwVFdWMGFHOWtLQ2RsYm5SeWFXVnpKeWtnT2lCMWJtUmxabWx1WldSY2JpQWdJQ0FzSUNSaGJubE9ZWFJwZG1VZ1BTQk9RVTFGSUQwOUlDZEJjbkpoZVNjZ1B5QndjbTkwYnk1bGJuUnlhV1Z6SUh4OElDUnVZWFJwZG1VZ09pQWtibUYwYVhabFhHNGdJQ0FnTENCdFpYUm9iMlJ6TENCclpYa3NJRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxPMXh1SUNBdkx5QkdhWGdnYm1GMGFYWmxYRzRnSUdsbUtDUmhibmxPWVhScGRtVXBlMXh1SUNBZ0lFbDBaWEpoZEc5eVVISnZkRzkwZVhCbElEMGdaMlYwVUhKdmRHOTBlWEJsVDJZb0pHRnVlVTVoZEdsMlpTNWpZV3hzS0c1bGR5QkNZWE5sS1NrN1hHNGdJQ0FnYVdZb1NYUmxjbUYwYjNKUWNtOTBiM1I1Y0dVZ0lUMDlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXBlMXh1SUNBZ0lDQWdMeThnVTJWMElFQkFkRzlUZEhKcGJtZFVZV2NnZEc4Z2JtRjBhWFpsSUdsMFpYSmhkRzl5YzF4dUlDQWdJQ0FnYzJWMFZHOVRkSEpwYm1kVVlXY29TWFJsY21GMGIzSlFjbTkwYjNSNWNHVXNJRlJCUnl3Z2RISjFaU2s3WEc0Z0lDQWdJQ0F2THlCbWFYZ2dabTl5SUhOdmJXVWdiMnhrSUdWdVoybHVaWE5jYmlBZ0lDQWdJR2xtS0NGTVNVSlNRVkpaSUNZbUlDRm9ZWE1vU1hSbGNtRjBiM0pRY205MGIzUjVjR1VzSUVsVVJWSkJWRTlTS1Nsb2FXUmxLRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxMQ0JKVkVWU1FWUlBVaXdnY21WMGRYSnVWR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUM4dklHWnBlQ0JCY25KaGVTTjdkbUZzZFdWekxDQkFRR2wwWlhKaGRHOXlmUzV1WVcxbElHbHVJRlk0SUM4Z1JrWmNiaUFnYVdZb1JFVkdYMVpCVEZWRlV5QW1KaUFrYm1GMGFYWmxJQ1ltSUNSdVlYUnBkbVV1Ym1GdFpTQWhQVDBnVmtGTVZVVlRLWHRjYmlBZ0lDQldRVXhWUlZOZlFsVkhJRDBnZEhKMVpUdGNiaUFnSUNBa1pHVm1ZWFZzZENBOUlHWjFibU4wYVc5dUlIWmhiSFZsY3lncGV5QnlaWFIxY200Z0pHNWhkR2wyWlM1allXeHNLSFJvYVhNcE95QjlPMXh1SUNCOVhHNGdJQzh2SUVSbFptbHVaU0JwZEdWeVlYUnZjbHh1SUNCcFppZ29JVXhKUWxKQlVsa2dmSHdnUms5U1EwVkVLU0FtSmlBb1FsVkhSMWtnZkh3Z1ZrRk1WVVZUWDBKVlJ5QjhmQ0FoY0hKdmRHOWJTVlJGVWtGVVQxSmRLU2w3WEc0Z0lDQWdhR2xrWlNod2NtOTBieXdnU1ZSRlVrRlVUMUlzSUNSa1pXWmhkV3gwS1R0Y2JpQWdmVnh1SUNBdkx5QlFiSFZuSUdadmNpQnNhV0p5WVhKNVhHNGdJRWwwWlhKaGRHOXljMXRPUVUxRlhTQTlJQ1JrWldaaGRXeDBPMXh1SUNCSmRHVnlZWFJ2Y25OYlZFRkhYU0FnUFNCeVpYUjFjbTVVYUdsek8xeHVJQ0JwWmloRVJVWkJWVXhVS1h0Y2JpQWdJQ0J0WlhSb2IyUnpJRDBnZTF4dUlDQWdJQ0FnZG1Gc2RXVnpPaUFnUkVWR1gxWkJURlZGVXlBL0lDUmtaV1poZFd4MElEb2daMlYwVFdWMGFHOWtLRlpCVEZWRlV5a3NYRzRnSUNBZ0lDQnJaWGx6T2lBZ0lDQkpVMTlUUlZRZ0lDQWdJRDhnSkdSbFptRjFiSFFnT2lCblpYUk5aWFJvYjJRb1MwVlpVeWtzWEc0Z0lDQWdJQ0JsYm5SeWFXVnpPaUFrWlc1MGNtbGxjMXh1SUNBZ0lIMDdYRzRnSUNBZ2FXWW9SazlTUTBWRUtXWnZjaWhyWlhrZ2FXNGdiV1YwYUc5a2N5bDdYRzRnSUNBZ0lDQnBaaWdoS0d0bGVTQnBiaUJ3Y205MGJ5a3BjbVZrWldacGJtVW9jSEp2ZEc4c0lHdGxlU3dnYldWMGFHOWtjMXRyWlhsZEtUdGNiaUFnSUNCOUlHVnNjMlVnSkdWNGNHOXlkQ2drWlhod2IzSjBMbEFnS3lBa1pYaHdiM0owTGtZZ0tpQW9RbFZIUjFrZ2ZId2dWa0ZNVlVWVFgwSlZSeWtzSUU1QlRVVXNJRzFsZEdodlpITXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnRaWFJvYjJSek8xeHVmVHNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dSdmJtVXNJSFpoYkhWbEtYdGNiaUFnY21WMGRYSnVJSHQyWVd4MVpUb2dkbUZzZFdVc0lHUnZibVU2SUNFaFpHOXVaWDA3WEc1OU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMzA3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCMGNuVmxPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiaTh2SURFNUxqRXVNaTR4SUU5aWFtVmpkQzVoYzNOcFoyNG9kR0Z5WjJWMExDQnpiM1Z5WTJVc0lDNHVMaWxjYm5aaGNpQm5aWFJMWlhseklDQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFyWlhsekp5bGNiaUFnTENCblQxQlRJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMW5iM0J6SnlsY2JpQWdMQ0J3U1VVZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxd2FXVW5LVnh1SUNBc0lIUnZUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGIySnFaV04wSnlsY2JpQWdMQ0JKVDJKcVpXTjBJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybHZZbXBsWTNRbktWeHVJQ0FzSUNSaGMzTnBaMjRnSUQwZ1QySnFaV04wTG1GemMybG5ianRjYmx4dUx5OGdjMmh2ZFd4a0lIZHZjbXNnZDJsMGFDQnplVzFpYjJ4eklHRnVaQ0J6YUc5MWJHUWdhR0YyWlNCa1pYUmxjbTFwYm1semRHbGpJSEJ5YjNCbGNuUjVJRzl5WkdWeUlDaFdPQ0JpZFdjcFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDRWtZWE56YVdkdUlIeDhJSEpsY1hWcGNtVW9KeTR2WDJaaGFXeHpKeWtvWm5WdVkzUnBiMjRvS1h0Y2JpQWdkbUZ5SUVFZ1BTQjdmVnh1SUNBZ0lDd2dRaUE5SUh0OVhHNGdJQ0FnTENCVElEMGdVM2x0WW05c0tDbGNiaUFnSUNBc0lFc2dQU0FuWVdKalpHVm1aMmhwYW10c2JXNXZjSEZ5YzNRbk8xeHVJQ0JCVzFOZElEMGdOenRjYmlBZ1N5NXpjR3hwZENnbkp5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpaHJLWHNnUWx0clhTQTlJR3M3SUgwcE8xeHVJQ0J5WlhSMWNtNGdKR0Z6YzJsbmJpaDdmU3dnUVNsYlUxMGdJVDBnTnlCOGZDQlBZbXBsWTNRdWEyVjVjeWdrWVhOemFXZHVLSHQ5TENCQ0tTa3VhbTlwYmlnbkp5a2dJVDBnU3p0Y2JuMHBJRDhnWm5WdVkzUnBiMjRnWVhOemFXZHVLSFJoY21kbGRDd2djMjkxY21ObEtYc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFiblZ6WldRdGRtRnljMXh1SUNCMllYSWdWQ0FnSUNBZ1BTQjBiMDlpYW1WamRDaDBZWEpuWlhRcFhHNGdJQ0FnTENCaFRHVnVJQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2hjYmlBZ0lDQXNJR2x1WkdWNElEMGdNVnh1SUNBZ0lDd2daMlYwVTNsdFltOXNjeUE5SUdkUFVGTXVabHh1SUNBZ0lDd2dhWE5GYm5WdElDQWdJQ0E5SUhCSlJTNW1PMXh1SUNCM2FHbHNaU2hoVEdWdUlENGdhVzVrWlhncGUxeHVJQ0FnSUhaaGNpQlRJQ0FnSUNBZ1BTQkpUMkpxWldOMEtHRnlaM1Z0Wlc1MGMxdHBibVJsZUNzclhTbGNiaUFnSUNBZ0lDd2dhMlY1Y3lBZ0lEMGdaMlYwVTNsdFltOXNjeUEvSUdkbGRFdGxlWE1vVXlrdVkyOXVZMkYwS0dkbGRGTjViV0p2YkhNb1V5a3BJRG9nWjJWMFMyVjVjeWhUS1Z4dUlDQWdJQ0FnTENCc1pXNW5kR2dnUFNCclpYbHpMbXhsYm1kMGFGeHVJQ0FnSUNBZ0xDQnFJQ0FnSUNBZ1BTQXdYRzRnSUNBZ0lDQXNJR3RsZVR0Y2JpQWdJQ0IzYUdsc1pTaHNaVzVuZEdnZ1BpQnFLV2xtS0dselJXNTFiUzVqWVd4c0tGTXNJR3RsZVNBOUlHdGxlWE5iYWlzclhTa3BWRnRyWlhsZElEMGdVMXRyWlhsZE8xeHVJQ0I5SUhKbGRIVnliaUJVTzF4dWZTQTZJQ1JoYzNOcFoyNDdJaXdpTHk4Z01Ua3VNUzR5TGpJZ0x5QXhOUzR5TGpNdU5TQlBZbXBsWTNRdVkzSmxZWFJsS0U4Z1d5d2dVSEp2Y0dWeWRHbGxjMTBwWEc1MllYSWdZVzVQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWhiaTF2WW1wbFkzUW5LVnh1SUNBc0lHUlFjeUFnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFdSd2N5Y3BYRzRnSUN3Z1pXNTFiVUoxWjB0bGVYTWdQU0J5WlhGMWFYSmxLQ2N1TDE5bGJuVnRMV0oxWnkxclpYbHpKeWxjYmlBZ0xDQkpSVjlRVWs5VVR5QWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzTm9ZWEpsWkMxclpYa25LU2duU1VWZlVGSlBWRThuS1Z4dUlDQXNJRVZ0Y0hSNUlDQWdJQ0FnSUQwZ1puVnVZM1JwYjI0b0tYc2dMeW9nWlcxd2RIa2dLaThnZlZ4dUlDQXNJRkJTVDFSUFZGbFFSU0FnSUQwZ0ozQnliM1J2ZEhsd1pTYzdYRzVjYmk4dklFTnlaV0YwWlNCdlltcGxZM1FnZDJsMGFDQm1ZV3RsSUdCdWRXeHNZQ0J3Y205MGIzUjVjR1U2SUhWelpTQnBabkpoYldVZ1QySnFaV04wSUhkcGRHZ2dZMnhsWVhKbFpDQndjbTkwYjNSNWNHVmNiblpoY2lCamNtVmhkR1ZFYVdOMElEMGdablZ1WTNScGIyNG9LWHRjYmlBZ0x5OGdWR2h5WVhOb0xDQjNZWE4wWlNCaGJtUWdjMjlrYjIxNU9pQkpSU0JIUXlCaWRXZGNiaUFnZG1GeUlHbG1jbUZ0WlNBOUlISmxjWFZwY21Vb0p5NHZYMlJ2YlMxamNtVmhkR1VuS1NnbmFXWnlZVzFsSnlsY2JpQWdJQ0FzSUdrZ0lDQWdJQ0E5SUdWdWRXMUNkV2RMWlhsekxteGxibWQwYUZ4dUlDQWdJQ3dnYkhRZ0lDQWdJRDBnSnp3blhHNGdJQ0FnTENCbmRDQWdJQ0FnUFNBblBpZGNiaUFnSUNBc0lHbG1jbUZ0WlVSdlkzVnRaVzUwTzF4dUlDQnBabkpoYldVdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenRjYmlBZ2NtVnhkV2x5WlNnbkxpOWZhSFJ0YkNjcExtRndjR1Z1WkVOb2FXeGtLR2xtY21GdFpTazdYRzRnSUdsbWNtRnRaUzV6Y21NZ1BTQW5hbUYyWVhOamNtbHdkRG9uT3lBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFhOamNtbHdkQzExY214Y2JpQWdMeThnWTNKbFlYUmxSR2xqZENBOUlHbG1jbUZ0WlM1amIyNTBaVzUwVjJsdVpHOTNMazlpYW1WamREdGNiaUFnTHk4Z2FIUnRiQzV5WlcxdmRtVkRhR2xzWkNocFpuSmhiV1VwTzF4dUlDQnBabkpoYldWRWIyTjFiV1Z1ZENBOUlHbG1jbUZ0WlM1amIyNTBaVzUwVjJsdVpHOTNMbVJ2WTNWdFpXNTBPMXh1SUNCcFpuSmhiV1ZFYjJOMWJXVnVkQzV2Y0dWdUtDazdYRzRnSUdsbWNtRnRaVVJ2WTNWdFpXNTBMbmR5YVhSbEtHeDBJQ3NnSjNOamNtbHdkQ2NnS3lCbmRDQXJJQ2RrYjJOMWJXVnVkQzVHUFU5aWFtVmpkQ2NnS3lCc2RDQXJJQ2N2YzJOeWFYQjBKeUFySUdkMEtUdGNiaUFnYVdaeVlXMWxSRzlqZFcxbGJuUXVZMnh2YzJVb0tUdGNiaUFnWTNKbFlYUmxSR2xqZENBOUlHbG1jbUZ0WlVSdlkzVnRaVzUwTGtZN1hHNGdJSGRvYVd4bEtHa3RMU2xrWld4bGRHVWdZM0psWVhSbFJHbGpkRnRRVWs5VVQxUlpVRVZkVzJWdWRXMUNkV2RMWlhselcybGRYVHRjYmlBZ2NtVjBkWEp1SUdOeVpXRjBaVVJwWTNRb0tUdGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1QySnFaV04wTG1OeVpXRjBaU0I4ZkNCbWRXNWpkR2x2YmlCamNtVmhkR1VvVHl3Z1VISnZjR1Z5ZEdsbGN5bDdYRzRnSUhaaGNpQnlaWE4xYkhRN1hHNGdJR2xtS0U4Z0lUMDlJRzUxYkd3cGUxeHVJQ0FnSUVWdGNIUjVXMUJTVDFSUFZGbFFSVjBnUFNCaGJrOWlhbVZqZENoUEtUdGNiaUFnSUNCeVpYTjFiSFFnUFNCdVpYY2dSVzF3ZEhrN1hHNGdJQ0FnUlcxd2RIbGJVRkpQVkU5VVdWQkZYU0E5SUc1MWJHdzdYRzRnSUNBZ0x5OGdZV1JrSUZ3aVgxOXdjbTkwYjE5ZlhDSWdabTl5SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppQndiMng1Wm1sc2JGeHVJQ0FnSUhKbGMzVnNkRnRKUlY5UVVrOVVUMTBnUFNCUE8xeHVJQ0I5SUdWc2MyVWdjbVZ6ZFd4MElEMGdZM0psWVhSbFJHbGpkQ2dwTzF4dUlDQnlaWFIxY200Z1VISnZjR1Z5ZEdsbGN5QTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2NtVnpkV3gwSURvZ1pGQnpLSEpsYzNWc2RDd2dVSEp2Y0dWeWRHbGxjeWs3WEc1OU8xeHVJaXdpZG1GeUlHRnVUMkpxWldOMElDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZZVzR0YjJKcVpXTjBKeWxjYmlBZ0xDQkpSVGhmUkU5TlgwUkZSa2xPUlNBOUlISmxjWFZwY21Vb0p5NHZYMmxsT0Mxa2IyMHRaR1ZtYVc1bEp5bGNiaUFnTENCMGIxQnlhVzFwZEdsMlpTQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMWEJ5YVcxcGRHbDJaU2NwWEc0Z0lDd2daRkFnSUNBZ0lDQWdJQ0FnSUNBZ1BTQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGs3WEc1Y2JtVjRjRzl5ZEhNdVppQTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dQeUJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrZ09pQm1kVzVqZEdsdmJpQmtaV1pwYm1WUWNtOXdaWEowZVNoUExDQlFMQ0JCZEhSeWFXSjFkR1Z6S1h0Y2JpQWdZVzVQWW1wbFkzUW9UeWs3WEc0Z0lGQWdQU0IwYjFCeWFXMXBkR2wyWlNoUUxDQjBjblZsS1R0Y2JpQWdZVzVQWW1wbFkzUW9RWFIwY21saWRYUmxjeWs3WEc0Z0lHbG1LRWxGT0Y5RVQwMWZSRVZHU1U1RktYUnllU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUlFLRThzSUZBc0lFRjBkSEpwWW5WMFpYTXBPMXh1SUNCOUlHTmhkR05vS0dVcGV5QXZLaUJsYlhCMGVTQXFMeUI5WEc0Z0lHbG1LQ2RuWlhRbklHbHVJRUYwZEhKcFluVjBaWE1nZkh3Z0ozTmxkQ2NnYVc0Z1FYUjBjbWxpZFhSbGN5bDBhSEp2ZHlCVWVYQmxSWEp5YjNJb0owRmpZMlZ6YzI5eWN5QnViM1FnYzNWd2NHOXlkR1ZrSVNjcE8xeHVJQ0JwWmlnbmRtRnNkV1VuSUdsdUlFRjBkSEpwWW5WMFpYTXBUMXRRWFNBOUlFRjBkSEpwWW5WMFpYTXVkbUZzZFdVN1hHNGdJSEpsZEhWeWJpQlBPMXh1ZlRzaUxDSjJZWElnWkZBZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdFpIQW5LVnh1SUNBc0lHRnVUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmWVc0dGIySnFaV04wSnlsY2JpQWdMQ0JuWlhSTFpYbHpJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxclpYbHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWZaR1Z6WTNKcGNIUnZjbk1uS1NBL0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBhV1Z6SURvZ1puVnVZM1JwYjI0Z1pHVm1hVzVsVUhKdmNHVnlkR2xsY3loUExDQlFjbTl3WlhKMGFXVnpLWHRjYmlBZ1lXNVBZbXBsWTNRb1R5azdYRzRnSUhaaGNpQnJaWGx6SUNBZ1BTQm5aWFJMWlhsektGQnliM0JsY25ScFpYTXBYRzRnSUNBZ0xDQnNaVzVuZEdnZ1BTQnJaWGx6TG14bGJtZDBhRnh1SUNBZ0lDd2dhU0E5SURCY2JpQWdJQ0FzSUZBN1hHNGdJSGRvYVd4bEtHeGxibWQwYUNBK0lHa3BaRkF1WmloUExDQlFJRDBnYTJWNWMxdHBLeXRkTENCUWNtOXdaWEowYVdWelcxQmRLVHRjYmlBZ2NtVjBkWEp1SUU4N1hHNTlPeUlzSW1WNGNHOXlkSE11WmlBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITTdJaXdpTHk4Z01Ua3VNUzR5TGprZ0x5QXhOUzR5TGpNdU1pQlBZbXBsWTNRdVoyVjBVSEp2ZEc5MGVYQmxUMllvVHlsY2JuWmhjaUJvWVhNZ0lDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmhoY3ljcFhHNGdJQ3dnZEc5UFltcGxZM1FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxdlltcGxZM1FuS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0xXdGxlU2NwS0NkSlJWOVFVazlVVHljcFhHNGdJQ3dnVDJKcVpXTjBVSEp2ZEc4Z1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmlCOGZDQm1kVzVqZEdsdmJpaFBLWHRjYmlBZ1R5QTlJSFJ2VDJKcVpXTjBLRThwTzF4dUlDQnBaaWhvWVhNb1R5d2dTVVZmVUZKUFZFOHBLWEpsZEhWeWJpQlBXMGxGWDFCU1QxUlBYVHRjYmlBZ2FXWW9kSGx3Wlc5bUlFOHVZMjl1YzNSeWRXTjBiM0lnUFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJQSUdsdWMzUmhibU5sYjJZZ1R5NWpiMjV6ZEhKMVkzUnZjaWw3WEc0Z0lDQWdjbVYwZFhKdUlFOHVZMjl1YzNSeWRXTjBiM0l1Y0hKdmRHOTBlWEJsTzF4dUlDQjlJSEpsZEhWeWJpQlBJR2x1YzNSaGJtTmxiMllnVDJKcVpXTjBJRDhnVDJKcVpXTjBVSEp2ZEc4Z09pQnVkV3hzTzF4dWZUc2lMQ0oyWVhJZ2FHRnpJQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWxjYmlBZ0xDQjBiMGxQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTFwYjJKcVpXTjBKeWxjYmlBZ0xDQmhjbkpoZVVsdVpHVjRUMllnUFNCeVpYRjFhWEpsS0NjdUwxOWhjbkpoZVMxcGJtTnNkV1JsY3ljcEtHWmhiSE5sS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM05vWVhKbFpDMXJaWGtuS1NnblNVVmZVRkpQVkU4bktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJRzVoYldWektYdGNiaUFnZG1GeUlFOGdJQ0FnSUNBOUlIUnZTVTlpYW1WamRDaHZZbXBsWTNRcFhHNGdJQ0FnTENCcElDQWdJQ0FnUFNBd1hHNGdJQ0FnTENCeVpYTjFiSFFnUFNCYlhWeHVJQ0FnSUN3Z2EyVjVPMXh1SUNCbWIzSW9hMlY1SUdsdUlFOHBhV1lvYTJWNUlDRTlJRWxGWDFCU1QxUlBLV2hoY3loUExDQnJaWGtwSUNZbUlISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJQzh2SUVSdmJpZDBJR1Z1ZFcwZ1luVm5JQ1lnYUdsa1pHVnVJR3RsZVhOY2JpQWdkMmhwYkdVb2JtRnRaWE11YkdWdVozUm9JRDRnYVNscFppaG9ZWE1vVHl3Z2EyVjVJRDBnYm1GdFpYTmJhU3NyWFNrcGUxeHVJQ0FnSUg1aGNuSmhlVWx1WkdWNFQyWW9jbVZ6ZFd4MExDQnJaWGtwSUh4OElISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4wN0lpd2lMeThnTVRrdU1TNHlMakUwSUM4Z01UVXVNaTR6TGpFMElFOWlhbVZqZEM1clpYbHpLRThwWEc1MllYSWdKR3RsZVhNZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdGEyVjVjeTFwYm5SbGNtNWhiQ2NwWEc0Z0lDd2daVzUxYlVKMVowdGxlWE1nUFNCeVpYRjFhWEpsS0NjdUwxOWxiblZ0TFdKMVp5MXJaWGx6SnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdUMkpxWldOMExtdGxlWE1nZkh3Z1puVnVZM1JwYjI0Z2EyVjVjeWhQS1h0Y2JpQWdjbVYwZFhKdUlDUnJaWGx6S0U4c0lHVnVkVzFDZFdkTFpYbHpLVHRjYm4wN0lpd2laWGh3YjNKMGN5NW1JRDBnZTMwdWNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVTdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhpYVhSdFlYQXNJSFpoYkhWbEtYdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQmxiblZ0WlhKaFlteGxJQ0E2SUNFb1ltbDBiV0Z3SUNZZ01Ta3NYRzRnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUFoS0dKcGRHMWhjQ0FtSURJcExGeHVJQ0FnSUhkeWFYUmhZbXhsSUNBZ0lEb2dJU2hpYVhSdFlYQWdKaUEwS1N4Y2JpQWdJQ0IyWVd4MVpTQWdJQ0FnSUNBNklIWmhiSFZsWEc0Z0lIMDdYRzU5T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcE95SXNJblpoY2lCa1pXWWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktTNW1YRzRnSUN3Z2FHRnpJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWxjYmlBZ0xDQlVRVWNnUFNCeVpYRjFhWEpsS0NjdUwxOTNhM01uS1NnbmRHOVRkSEpwYm1kVVlXY25LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDd2dkR0ZuTENCemRHRjBLWHRjYmlBZ2FXWW9hWFFnSmlZZ0lXaGhjeWhwZENBOUlITjBZWFFnUHlCcGRDQTZJR2wwTG5CeWIzUnZkSGx3WlN3Z1ZFRkhLU2xrWldZb2FYUXNJRlJCUnl3Z2UyTnZibVpwWjNWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIUmhaMzBwTzF4dWZUc2lMQ0oyWVhJZ2MyaGhjbVZrSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0p5a29KMnRsZVhNbktWeHVJQ0FzSUhWcFpDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzVnBaQ2NwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloclpYa3BlMXh1SUNCeVpYUjFjbTRnYzJoaGNtVmtXMnRsZVYwZ2ZId2dLSE5vWVhKbFpGdHJaWGxkSUQwZ2RXbGtLR3RsZVNrcE8xeHVmVHNpTENKMllYSWdaMnh2WW1Gc0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWxjYmlBZ0xDQlRTRUZTUlVRZ1BTQW5YMTlqYjNKbExXcHpYM05vWVhKbFpGOWZKMXh1SUNBc0lITjBiM0psSUNBOUlHZHNiMkpoYkZ0VFNFRlNSVVJkSUh4OElDaG5iRzlpWVd4YlUwaEJVa1ZFWFNBOUlIdDlLVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYTJWNUtYdGNiaUFnY21WMGRYSnVJSE4wYjNKbFcydGxlVjBnZkh3Z0tITjBiM0psVzJ0bGVWMGdQU0I3ZlNrN1hHNTlPeUlzSW5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCa1pXWnBibVZrSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc0dkx5QjBjblZsSUNBdFBpQlRkSEpwYm1jallYUmNiaTh2SUdaaGJITmxJQzArSUZOMGNtbHVaeU5qYjJSbFVHOXBiblJCZEZ4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloVVQxOVRWRkpKVGtjcGUxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9kR2hoZEN3Z2NHOXpLWHRjYmlBZ0lDQjJZWElnY3lBOUlGTjBjbWx1Wnloa1pXWnBibVZrS0hSb1lYUXBLVnh1SUNBZ0lDQWdMQ0JwSUQwZ2RHOUpiblJsWjJWeUtIQnZjeWxjYmlBZ0lDQWdJQ3dnYkNBOUlITXViR1Z1WjNSb1hHNGdJQ0FnSUNBc0lHRXNJR0k3WEc0Z0lDQWdhV1lvYVNBOElEQWdmSHdnYVNBK1BTQnNLWEpsZEhWeWJpQlVUMTlUVkZKSlRrY2dQeUFuSnlBNklIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCaElEMGdjeTVqYUdGeVEyOWtaVUYwS0drcE8xeHVJQ0FnSUhKbGRIVnliaUJoSUR3Z01IaGtPREF3SUh4OElHRWdQaUF3ZUdSaVptWWdmSHdnYVNBcklERWdQVDA5SUd3Z2ZId2dLR0lnUFNCekxtTm9ZWEpEYjJSbFFYUW9hU0FySURFcEtTQThJREI0WkdNd01DQjhmQ0JpSUQ0Z01IaGtabVptWEc0Z0lDQWdJQ0EvSUZSUFgxTlVVa2xPUnlBL0lITXVZMmhoY2tGMEtHa3BJRG9nWVZ4dUlDQWdJQ0FnT2lCVVQxOVRWRkpKVGtjZ1B5QnpMbk5zYVdObEtHa3NJR2tnS3lBeUtTQTZJQ2hoSUMwZ01IaGtPREF3SUR3OElERXdLU0FySUNoaUlDMGdNSGhrWXpBd0tTQXJJREI0TVRBd01EQTdYRzRnSUgwN1hHNTlPeUlzSW5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCdFlYZ2dJQ0FnSUNBZ1BTQk5ZWFJvTG0xaGVGeHVJQ0FzSUcxcGJpQWdJQ0FnSUNBOUlFMWhkR2d1YldsdU8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBibVJsZUN3Z2JHVnVaM1JvS1h0Y2JpQWdhVzVrWlhnZ1BTQjBiMGx1ZEdWblpYSW9hVzVrWlhncE8xeHVJQ0J5WlhSMWNtNGdhVzVrWlhnZ1BDQXdJRDhnYldGNEtHbHVaR1Y0SUNzZ2JHVnVaM1JvTENBd0tTQTZJRzFwYmlocGJtUmxlQ3dnYkdWdVozUm9LVHRjYm4wN0lpd2lMeThnTnk0eExqUWdWRzlKYm5SbFoyVnlYRzUyWVhJZ1kyVnBiQ0FnUFNCTllYUm9MbU5sYVd4Y2JpQWdMQ0JtYkc5dmNpQTlJRTFoZEdndVpteHZiM0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR2x6VG1GT0tHbDBJRDBnSzJsMEtTQS9JREFnT2lBb2FYUWdQaUF3SUQ4Z1pteHZiM0lnT2lCalpXbHNLU2hwZENrN1hHNTlPeUlzSWk4dklIUnZJR2x1WkdWNFpXUWdiMkpxWldOMExDQjBiMDlpYW1WamRDQjNhWFJvSUdaaGJHeGlZV05ySUdadmNpQnViMjR0WVhKeVlYa3RiR2xyWlNCRlV6TWdjM1J5YVc1bmMxeHVkbUZ5SUVsUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOXBiMkpxWldOMEp5bGNiaUFnTENCa1pXWnBibVZrSUQwZ2NtVnhkV2x5WlNnbkxpOWZaR1ZtYVc1bFpDY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJSEpsZEhWeWJpQkpUMkpxWldOMEtHUmxabWx1WldRb2FYUXBLVHRjYm4wN0lpd2lMeThnTnk0eExqRTFJRlJ2VEdWdVozUm9YRzUyWVhJZ2RHOUpiblJsWjJWeUlEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGFXNTBaV2RsY2ljcFhHNGdJQ3dnYldsdUlDQWdJQ0FnSUQwZ1RXRjBhQzV0YVc0N1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2NtVjBkWEp1SUdsMElENGdNQ0EvSUcxcGJpaDBiMGx1ZEdWblpYSW9hWFFwTENBd2VERm1abVptWm1abVptWm1abVptS1NBNklEQTdJQzh2SUhCdmR5Z3lMQ0ExTXlrZ0xTQXhJRDA5SURrd01EY3hPVGt5TlRRM05EQTVPVEZjYm4wN0lpd2lMeThnTnk0eExqRXpJRlJ2VDJKcVpXTjBLR0Z5WjNWdFpXNTBLVnh1ZG1GeUlHUmxabWx1WldRZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDaGtaV1pwYm1Wa0tHbDBLU2s3WEc1OU95SXNJaTh2SURjdU1TNHhJRlJ2VUhKcGJXbDBhWFpsS0dsdWNIVjBJRnNzSUZCeVpXWmxjbkpsWkZSNWNHVmRLVnh1ZG1GeUlHbHpUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmYVhNdGIySnFaV04wSnlrN1hHNHZMeUJwYm5OMFpXRmtJRzltSUhSb1pTQkZVellnYzNCbFl5QjJaWEp6YVc5dUxDQjNaU0JrYVdSdUozUWdhVzF3YkdWdFpXNTBJRUJBZEc5UWNtbHRhWFJwZG1VZ1kyRnpaVnh1THk4Z1lXNWtJSFJvWlNCelpXTnZibVFnWVhKbmRXMWxiblFnTFNCbWJHRm5JQzBnY0hKbFptVnljbVZrSUhSNWNHVWdhWE1nWVNCemRISnBibWRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRc0lGTXBlMXh1SUNCcFppZ2hhWE5QWW1wbFkzUW9hWFFwS1hKbGRIVnliaUJwZER0Y2JpQWdkbUZ5SUdadUxDQjJZV3c3WEc0Z0lHbG1LRk1nSmlZZ2RIbHdaVzltSUNobWJpQTlJR2wwTG5SdlUzUnlhVzVuS1NBOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUNGcGMwOWlhbVZqZENoMllXd2dQU0JtYmk1allXeHNLR2wwS1NrcGNtVjBkWEp1SUhaaGJEdGNiaUFnYVdZb2RIbHdaVzltSUNobWJpQTlJR2wwTG5aaGJIVmxUMllwSUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnSVdselQySnFaV04wS0haaGJDQTlJR1p1TG1OaGJHd29hWFFwS1NseVpYUjFjbTRnZG1Gc08xeHVJQ0JwWmlnaFV5QW1KaUIwZVhCbGIyWWdLR1p1SUQwZ2FYUXVkRzlUZEhKcGJtY3BJRDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdJV2x6VDJKcVpXTjBLSFpoYkNBOUlHWnVMbU5oYkd3b2FYUXBLU2x5WlhSMWNtNGdkbUZzTzF4dUlDQjBhSEp2ZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzRuZENCamIyNTJaWEowSUc5aWFtVmpkQ0IwYnlCd2NtbHRhWFJwZG1VZ2RtRnNkV1ZjSWlrN1hHNTlPeUlzSW5aaGNpQnBaQ0E5SURCY2JpQWdMQ0J3ZUNBOUlFMWhkR2d1Y21GdVpHOXRLQ2s3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0d0bGVTbDdYRzRnSUhKbGRIVnliaUFuVTNsdFltOXNLQ2N1WTI5dVkyRjBLR3RsZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnSnljZ09pQnJaWGtzSUNjcFh5Y3NJQ2dySzJsa0lDc2djSGdwTG5SdlUzUnlhVzVuS0RNMktTazdYRzU5T3lJc0luWmhjaUJ6ZEc5eVpTQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0p5a29KM2RyY3ljcFhHNGdJQ3dnZFdsa0lDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1ZwWkNjcFhHNGdJQ3dnVTNsdFltOXNJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmRzYjJKaGJDY3BMbE41YldKdmJGeHVJQ0FzSUZWVFJWOVRXVTFDVDB3Z1BTQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOUlDZG1kVzVqZEdsdmJpYzdYRzVjYm5aaGNpQWtaWGh3YjNKMGN5QTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9ibUZ0WlNsN1hHNGdJSEpsZEhWeWJpQnpkRzl5WlZ0dVlXMWxYU0I4ZkNBb2MzUnZjbVZiYm1GdFpWMGdQVnh1SUNBZ0lGVlRSVjlUV1UxQ1Qwd2dKaVlnVTNsdFltOXNXMjVoYldWZElIeDhJQ2hWVTBWZlUxbE5RazlNSUQ4Z1UzbHRZbTlzSURvZ2RXbGtLU2duVTNsdFltOXNMaWNnS3lCdVlXMWxLU2s3WEc1OU8xeHVYRzRrWlhod2IzSjBjeTV6ZEc5eVpTQTlJSE4wYjNKbE95SXNJblpoY2lCamJHRnpjMjltSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYkdGemMyOW1KeWxjYmlBZ0xDQkpWRVZTUVZSUFVpQWdQU0J5WlhGMWFYSmxLQ2N1TDE5M2EzTW5LU2duYVhSbGNtRjBiM0luS1Z4dUlDQXNJRWwwWlhKaGRHOXljeUE5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIzSmxKeWt1WjJWMFNYUmxjbUYwYjNKTlpYUm9iMlFnUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUdsbUtHbDBJQ0U5SUhWdVpHVm1hVzVsWkNseVpYUjFjbTRnYVhSYlNWUkZVa0ZVVDFKZFhHNGdJQ0FnZkh3Z2FYUmJKMEJBYVhSbGNtRjBiM0luWFZ4dUlDQWdJSHg4SUVsMFpYSmhkRzl5YzF0amJHRnpjMjltS0dsMEtWMDdYRzU5T3lJc0luWmhjaUJoYms5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgyRnVMVzlpYW1WamRDY3BYRzRnSUN3Z1oyVjBJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMk52Y21VdVoyVjBMV2wwWlhKaGRHOXlMVzFsZEdodlpDY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIzSmxKeWt1WjJWMFNYUmxjbUYwYjNJZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lIWmhjaUJwZEdWeVJtNGdQU0JuWlhRb2FYUXBPMXh1SUNCcFppaDBlWEJsYjJZZ2FYUmxja1p1SUNFOUlDZG1kVzVqZEdsdmJpY3BkR2h5YjNjZ1ZIbHdaVVZ5Y205eUtHbDBJQ3NnSnlCcGN5QnViM1FnYVhSbGNtRmliR1VoSnlrN1hHNGdJSEpsZEhWeWJpQmhiazlpYW1WamRDaHBkR1Z5Um00dVkyRnNiQ2hwZENrcE8xeHVmVHNpTENJbmRYTmxJSE4wY21samRDYzdYRzUyWVhJZ1lXUmtWRzlWYm5OamIzQmhZbXhsY3lBOUlISmxjWFZwY21Vb0p5NHZYMkZrWkMxMGJ5MTFibk5qYjNCaFlteGxjeWNwWEc0Z0lDd2djM1JsY0NBZ0lDQWdJQ0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSXRjM1JsY0NjcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BYRzRnSUN3Z2RHOUpUMkpxWldOMElDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFdsdlltcGxZM1FuS1R0Y2JseHVMeThnTWpJdU1TNHpMalFnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbVZ1ZEhKcFpYTW9LVnh1THk4Z01qSXVNUzR6TGpFeklFRnljbUY1TG5CeWIzUnZkSGx3WlM1clpYbHpLQ2xjYmk4dklESXlMakV1TXk0eU9TQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWRtRnNkV1Z6S0NsY2JpOHZJREl5TGpFdU15NHpNQ0JCY25KaGVTNXdjbTkwYjNSNWNHVmJRRUJwZEdWeVlYUnZjbDBvS1Z4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUwxOXBkR1Z5TFdSbFptbHVaU2NwS0VGeWNtRjVMQ0FuUVhKeVlYa25MQ0JtZFc1amRHbHZiaWhwZEdWeVlYUmxaQ3dnYTJsdVpDbDdYRzRnSUhSb2FYTXVYM1FnUFNCMGIwbFBZbXBsWTNRb2FYUmxjbUYwWldRcE95QXZMeUIwWVhKblpYUmNiaUFnZEdocGN5NWZhU0E5SURBN0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRzVsZUhRZ2FXNWtaWGhjYmlBZ2RHaHBjeTVmYXlBOUlHdHBibVE3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUd0cGJtUmNiaTh2SURJeUxqRXVOUzR5TGpFZ0pVRnljbUY1U1hSbGNtRjBiM0pRY205MGIzUjVjR1VsTG01bGVIUW9LVnh1ZlN3Z1puVnVZM1JwYjI0b0tYdGNiaUFnZG1GeUlFOGdJQ0FnSUQwZ2RHaHBjeTVmZEZ4dUlDQWdJQ3dnYTJsdVpDQWdQU0IwYUdsekxsOXJYRzRnSUNBZ0xDQnBibVJsZUNBOUlIUm9hWE11WDJrckt6dGNiaUFnYVdZb0lVOGdmSHdnYVc1a1pYZ2dQajBnVHk1c1pXNW5kR2dwZTF4dUlDQWdJSFJvYVhNdVgzUWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdjbVYwZFhKdUlITjBaWEFvTVNrN1hHNGdJSDFjYmlBZ2FXWW9hMmx1WkNBOVBTQW5hMlY1Y3ljZ0lDbHlaWFIxY200Z2MzUmxjQ2d3TENCcGJtUmxlQ2s3WEc0Z0lHbG1LR3RwYm1RZ1BUMGdKM1poYkhWbGN5Y3BjbVYwZFhKdUlITjBaWEFvTUN3Z1QxdHBibVJsZUYwcE8xeHVJQ0J5WlhSMWNtNGdjM1JsY0Nnd0xDQmJhVzVrWlhnc0lFOWJhVzVrWlhoZFhTazdYRzU5TENBbmRtRnNkV1Z6SnlrN1hHNWNiaTh2SUdGeVozVnRaVzUwYzB4cGMzUmJRRUJwZEdWeVlYUnZjbDBnYVhNZ0pVRnljbUY1VUhKdmRHOWZkbUZzZFdWekpTQW9PUzQwTGpRdU5pd2dPUzQwTGpRdU55bGNia2wwWlhKaGRHOXljeTVCY21kMWJXVnVkSE1nUFNCSmRHVnlZWFJ2Y25NdVFYSnlZWGs3WEc1Y2JtRmtaRlJ2Vlc1elkyOXdZV0pzWlhNb0oydGxlWE1uS1R0Y2JtRmtaRlJ2Vlc1elkyOXdZV0pzWlhNb0ozWmhiSFZsY3ljcE8xeHVZV1JrVkc5VmJuTmpiM0JoWW14bGN5Z25aVzUwY21sbGN5Y3BPeUlzSWk4dklERTVMakV1TXk0eElFOWlhbVZqZEM1aGMzTnBaMjRvZEdGeVoyVjBMQ0J6YjNWeVkyVXBYRzUyWVhJZ0pHVjRjRzl5ZENBOUlISmxjWFZwY21Vb0p5NHZYMlY0Y0c5eWRDY3BPMXh1WEc0a1pYaHdiM0owS0NSbGVIQnZjblF1VXlBcklDUmxlSEJ2Y25RdVJpd2dKMDlpYW1WamRDY3NJSHRoYzNOcFoyNDZJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFoYzNOcFoyNG5LWDBwT3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQWtZWFFnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjM1J5YVc1bkxXRjBKeWtvZEhKMVpTazdYRzVjYmk4dklESXhMakV1TXk0eU55QlRkSEpwYm1jdWNISnZkRzkwZVhCbFcwQkFhWFJsY21GMGIzSmRLQ2xjYm5KbGNYVnBjbVVvSnk0dlgybDBaWEl0WkdWbWFXNWxKeWtvVTNSeWFXNW5MQ0FuVTNSeWFXNW5KeXdnWm5WdVkzUnBiMjRvYVhSbGNtRjBaV1FwZTF4dUlDQjBhR2x6TGw5MElEMGdVM1J5YVc1bktHbDBaWEpoZEdWa0tUc2dMeThnZEdGeVoyVjBYRzRnSUhSb2FYTXVYMmtnUFNBd095QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QnVaWGgwSUdsdVpHVjRYRzR2THlBeU1TNHhMalV1TWk0eElDVlRkSEpwYm1kSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNVdWJtVjRkQ2dwWEc1OUxDQm1kVzVqZEdsdmJpZ3BlMXh1SUNCMllYSWdUeUFnSUNBZ1BTQjBhR2x6TGw5MFhHNGdJQ0FnTENCcGJtUmxlQ0E5SUhSb2FYTXVYMmxjYmlBZ0lDQXNJSEJ2YVc1ME8xeHVJQ0JwWmlocGJtUmxlQ0ErUFNCUExteGxibWQwYUNseVpYUjFjbTRnZTNaaGJIVmxPaUIxYm1SbFptbHVaV1FzSUdSdmJtVTZJSFJ5ZFdWOU8xeHVJQ0J3YjJsdWRDQTlJQ1JoZENoUExDQnBibVJsZUNrN1hHNGdJSFJvYVhNdVgya2dLejBnY0c5cGJuUXViR1Z1WjNSb08xeHVJQ0J5WlhSMWNtNGdlM1poYkhWbE9pQndiMmx1ZEN3Z1pHOXVaVG9nWm1Gc2MyVjlPMXh1ZlNrN0lpd2ljbVZ4ZFdseVpTZ25MaTlsY3pZdVlYSnlZWGt1YVhSbGNtRjBiM0luS1R0Y2JuWmhjaUJuYkc5aVlXd2dJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWxjYmlBZ0xDQm9hV1JsSUNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSmhkRzl5Y3ljcFhHNGdJQ3dnVkU5ZlUxUlNTVTVIWDFSQlJ5QTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2QwYjFOMGNtbHVaMVJoWnljcE8xeHVYRzVtYjNJb2RtRnlJR052Ykd4bFkzUnBiMjV6SUQwZ1d5ZE9iMlJsVEdsemRDY3NJQ2RFVDAxVWIydGxia3hwYzNRbkxDQW5UV1ZrYVdGTWFYTjBKeXdnSjFOMGVXeGxVMmhsWlhSTWFYTjBKeXdnSjBOVFUxSjFiR1ZNYVhOMEoxMHNJR2tnUFNBd095QnBJRHdnTlRzZ2FTc3JLWHRjYmlBZ2RtRnlJRTVCVFVVZ0lDQWdJQ0FnUFNCamIyeHNaV04wYVc5dWMxdHBYVnh1SUNBZ0lDd2dRMjlzYkdWamRHbHZiaUE5SUdkc2IySmhiRnRPUVUxRlhWeHVJQ0FnSUN3Z2NISnZkRzhnSUNBZ0lDQTlJRU52Ykd4bFkzUnBiMjRnSmlZZ1EyOXNiR1ZqZEdsdmJpNXdjbTkwYjNSNWNHVTdYRzRnSUdsbUtIQnliM1J2SUNZbUlDRndjbTkwYjF0VVQxOVRWRkpKVGtkZlZFRkhYU2xvYVdSbEtIQnliM1J2TENCVVQxOVRWRkpKVGtkZlZFRkhMQ0JPUVUxRktUdGNiaUFnU1hSbGNtRjBiM0p6VzA1QlRVVmRJRDBnU1hSbGNtRjBiM0p6TGtGeWNtRjVPMXh1ZlNKZGZRPT0ifQ==
