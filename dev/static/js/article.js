(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _header = require('public/module/common/header');

var _header2 = _interopRequireDefault(_header);

var _jumbotron = require('./module/detail/jumbotron');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

var _index = require('./module/detail/index');

var _index2 = _interopRequireDefault(_index);

var _footer = require('public/module/common/footer');

var _footer2 = _interopRequireDefault(_footer);

var _urlParam = require('public/utils/url-param');

var _urlParam2 = _interopRequireDefault(_urlParam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _urlParam2.default)('id').then(function (data) {
	var Page = _react2.default.createClass({
		displayName: 'Page',
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_header2.default, null),
				_react2.default.createElement(_jumbotron2.default, { id: data }),
				_react2.default.createElement(_index2.default, { id: data }),
				_react2.default.createElement(_footer2.default, null)
			);
		}
	});

	_reactDom2.default.render(_react2.default.createElement(Page, null), document.getElementById('app'));
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./module/detail/index":2,"./module/detail/jumbotron":3,"public/module/common/footer":7,"public/module/common/header":8,"public/utils/url-param":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = React.createClass({
    displayName: "detail",
    getInitialState: function getInitialState() {
        return {
            content: ""
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        _service2.default.renderData(this.props.id).then(function (data) {
            _this.setState({
                content: data.content
            });
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-12 blog-main" },
                    React.createElement(
                        "div",
                        { className: "blog-post" },
                        React.createElement("hr", null),
                        React.createElement("div", { dangerouslySetInnerHTML: {
                                __html: this.state.content
                            } })
                    )
                )
            ),
            React.createElement("hr", null)
        );
    }
});

},{"./service":4}],3:[function(require,module,exports){
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
                desc: "",
                viewMore: {
                    name: "",
                    href: ""
                }
            }
        };
    },
    componentDidMount: function componentDidMount() {
        var _this = this;

        _service2.default.renderData(this.props.id).then(function (data) {
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
                    "hello,",
                    this.state.jumbotronData.title,
                    "!"
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.jumbotronData.desc
                ),
                React.createElement(
                    "p",
                    null,
                    React.createElement(
                        "a",
                        { className: "btn btn-primary btn-lg", href: this.state.jumbotronData.viewMore.href, role: "button" },
                        this.state.jumbotronData.viewMore.text
                    )
                )
            )
        );
    }
});

},{"./service":4,"babel-runtime/helpers/extends":12}],4:[function(require,module,exports){
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
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        return _q2.default.Promise(function (resolve, reject) {
            var rtnData = {};

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(_demoData2.default.frames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var v = _step.value;

                    if (v.title === id) {
                        rtnData = v;
                    }
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

},{"babel-runtime/core-js/get-iterator":10,"public/demo-data":5}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"public/demo-data":5}],7:[function(require,module,exports){
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

},{"./common":6}],8:[function(require,module,exports){
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

},{"./common":6,"babel-runtime/core-js/get-iterator":10}],9:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _q = (typeof window !== "undefined" ? window['Q'] : typeof global !== "undefined" ? global['Q'] : null);

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, url) {
    return _q2.default.Promise(function (resolve, reject) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            r_txt = url ? url : window.location.search;

        var r = r_txt.substr(1).match(reg);

        resolve(r ? decodeURIComponent(r[2]) : null);
    });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdmlld3MvYXJ0aWNsZS9pbmRleC5qcyIsInNyYy92aWV3cy9hcnRpY2xlL21vZHVsZS9kZXRhaWwvaW5kZXguanMiLCJzcmMvdmlld3MvYXJ0aWNsZS9tb2R1bGUvZGV0YWlsL2p1bWJvdHJvbi5qcyIsInNyYy92aWV3cy9hcnRpY2xlL21vZHVsZS9kZXRhaWwvc2VydmljZS5qcyIsInNyYy92aWV3cy9wdWJsaWMvZGVtby1kYXRhLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy9tb2R1bGUvY29tbW9uL2NvbW1vbi5qcyIsInNyYy92aWV3cy9wdWJsaWMvbW9kdWxlL2NvbW1vbi9mb290ZXIuanMiLCJzcmMvdmlld3MvcHVibGljL21vZHVsZS9jb21tb24vaGVhZGVyLmpzIiwic3JjL3ZpZXdzL3B1YmxpYy91dGlscy91cmwtcGFyYW0uanMiLCIuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLHdCQUFTLElBQVQsRUFBZSxJQUFmLENBQW9CLFVBQUMsSUFBRCxFQUFVO0FBQzdCLEtBQUksT0FBTyxnQkFBTSxXQUFOLENBQWtCO0FBQUE7QUFDNUIsUUFENEIsb0JBQ25CO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDSSx5REFESjtBQUVJLHlEQUFXLElBQUksSUFBZixHQUZKO0FBR0kscURBQVEsSUFBSSxJQUFaLEdBSEo7QUFJSTtBQUpKLElBREQ7QUFRQTtBQVYyQixFQUFsQixDQUFYOztBQWFBLG9CQUFTLE1BQVQsQ0FDQyw4QkFBQyxJQUFELE9BREQsRUFFQyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRDtBQUlBLENBbEJEOzs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7a0JBRWUsTUFBTSxXQUFOLENBQWtCO0FBQUE7QUFDN0IsbUJBRDZCLDZCQUNYO0FBQ2QsZUFBTztBQUNILHFCQUFTO0FBRE4sU0FBUDtBQUdILEtBTDRCO0FBTTdCLHFCQU42QiwrQkFNVDtBQUFBOztBQUNoQiwwQkFBUSxVQUFSLENBQW1CLEtBQUssS0FBTCxDQUFXLEVBQTlCLEVBQWtDLElBQWxDLENBQXVDLFVBQUMsSUFBRCxFQUFVO0FBQzdDLGtCQUFLLFFBQUwsQ0FBYztBQUNWLHlCQUFTLEtBQUs7QUFESixhQUFkO0FBR0gsU0FKRDtBQUtILEtBWjRCO0FBYTdCLFVBYjZCLG9CQWFwQjtBQUNMLGVBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0o7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLHFCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsV0FBZjtBQUNJLHVEQURKO0FBRUkscURBQUsseUJBQXlCO0FBQ2xDLHdDQUFRLEtBQUssS0FBTCxDQUFXO0FBRGUsNkJBQTlCO0FBRko7QUFESjtBQURKLGFBREk7QUFXSjtBQVhJLFNBREo7QUFnQkg7QUE5QjRCLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7O2tCQUVlLE1BQU0sV0FBTixDQUFrQjtBQUFBO0FBQzdCLG1CQUQ2Qiw2QkFDWDtBQUNkLGVBQU87QUFDSCwyQkFBZTtBQUNYLHVCQUFPLEVBREk7QUFFWCxzQkFBTSxFQUZLO0FBR1gsMEJBQVU7QUFDTiw0QkFETTtBQUVOLDBCQUFNO0FBRkE7QUFIQztBQURaLFNBQVA7QUFVSCxLQVo0QjtBQWE3QixxQkFiNkIsK0JBYVQ7QUFBQTs7QUFDaEIsMEJBQVEsVUFBUixDQUFtQixLQUFLLEtBQUwsQ0FBVyxFQUE5QixFQUFrQyxJQUFsQyxDQUF1QyxVQUFDLElBQUQsRUFBVTtBQUM3QyxrQkFBSyxRQUFMLENBQWM7QUFDViwrQkFBZSx1QkFBYyxFQUFkLEVBQWtCLElBQWxCO0FBREwsYUFBZDtBQUdILFNBSkQ7QUFLSCxLQW5CNEI7QUFvQjdCLFVBcEI2QixvQkFvQnBCO0FBQ0wsZUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDSjtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBVyx5QkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUFwQztBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFBSSx5QkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QjtBQUE3QixpQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBRyxXQUFVLHdCQUFiLEVBQXNDLE1BQU0sS0FBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixRQUF6QixDQUFrQyxJQUE5RSxFQUFvRixNQUFLLFFBQXpGO0FBQW1HLDZCQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLFFBQXpCLENBQWtDO0FBQXJJO0FBREo7QUFISjtBQURJLFNBREo7QUFhSDtBQWxDNEIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDWCxjQURXLHdCQUNTO0FBQUEsWUFBVCxFQUFTLHVFQUFKLEVBQUk7O0FBQ2hCLGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxnQkFBSSxVQUFVLEVBQWQ7O0FBRGtDO0FBQUE7QUFBQTs7QUFBQTtBQUdsQyxnRUFBYyxtQkFBUSxNQUF0Qiw0R0FBOEI7QUFBQSx3QkFBckIsQ0FBcUI7O0FBQzFCLHdCQUFJLEVBQUUsS0FBRixLQUFZLEVBQWhCLEVBQW9CO0FBQ2hCLGtDQUFVLENBQVY7QUFDSDtBQUNKO0FBUGlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWxDLG9CQUFRLE9BQVI7QUFDSCxTQVRNLENBQVA7QUFVSDtBQVpVLEM7Ozs7Ozs7Ozs7QUNKZixJQUFJLFNBQVMsQ0FBQztBQUNWLFdBQU8sUUFERztBQUVWLFVBQU0sMkVBRkk7QUFHVixrd0VBSFU7QUEyRFYsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQTNEQSxDQUFELEVBK0RWO0FBQ0MsV0FBTyxLQURSO0FBRUMsVUFBTSwrREFGUDtBQUdDLHFoQkFIRDtBQVlDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFaWCxDQS9EVSxFQStFVjtBQUNDLFdBQU8sTUFEUjtBQUVDLFVBQU0sZ0VBRlA7QUFHQyxpY0FIRDtBQVFDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFSWCxDQS9FVSxFQTJGVjtBQUNDLFdBQU8sWUFEUjtBQUVDLFVBQU0sbUVBRlA7QUFHQyx5ZkFIRDtBQWFDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFiWCxDQTNGVSxFQTRHVjtBQUNDLFdBQU8sT0FEUjtBQUVDLFVBQU0sMkVBRlA7QUFHQyxpdktBSEQ7QUEyQ0MsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQTNDWCxDQTVHVSxFQTJKVjtBQUNDLFdBQU8sYUFEUjtBQUVDLFVBQU0sd0VBRlA7QUFHQyw4YkFIRDtBQUlDLGNBQVU7QUFDTixjQUFNLE1BREE7QUFFTixjQUFNO0FBRkE7QUFKWCxDQTNKVSxDQUFiOztBQXFLQSxJQUFJLFFBQVE7QUFDUixhQUFTLGlCQUREO0FBRVIsZUFBVztBQUNQLGVBQU8sdUJBREE7QUFFUCxpQkFBUywrQ0FGRjtBQUdQLGdCQUFRO0FBQ0osNkRBREk7QUFFSixrQkFBTTtBQUZGO0FBSEQ7QUFGSCxDQUFaOztBQVlBLElBQUksT0FBTztBQUNQLGVBQVc7QUFDUCxlQUFPLHNCQURBO0FBRVAsaUJBQVMsZ0RBRkY7QUFHUCxnQkFBUTtBQUNKLGtCQUFNLFFBREY7QUFFSixrQkFBTTtBQUZGO0FBSEQ7QUFESixDQUFYOztBQVdBLElBQUksU0FBUztBQUNULGNBQVUsZ0JBREQ7O0FBR1QsYUFBUyxDQUFDO0FBQ04sY0FBTSxJQURBO0FBRU4sY0FBTTtBQUZBLEtBQUQsRUFHTjtBQUNDLGNBQU0sU0FEUDtBQUVDLGNBQU07QUFGUCxLQUhNLENBSEE7O0FBV1QsZ0JBQVk7QUFYSCxDQUFiOztrQkFjZTtBQUNYLGFBQVMsS0FERTtBQUVYLFlBQVEsSUFGRztBQUdYLGNBQVUsTUFIQztBQUlYLGNBQVU7QUFKQyxDOzs7Ozs7Ozs7O0FDMU1mOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLFdBRFcscUJBQ0Q7QUFDRixlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsTUFBUixDQUFlLE9BQXZCO0FBQ0gsU0FGTSxDQUFQO0FBR0gsS0FMTTtBQU1QLFlBTk8sc0JBTUk7QUFDUCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsTUFBUixDQUFlLFFBQXZCO0FBQ0gsU0FGTSxDQUFQO0FBR0gsS0FWTTtBQVdQLGNBWE8sd0JBV007QUFDVCxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDbEMsb0JBQVEsbUJBQVEsTUFBUixDQUFlLFVBQXZCO0FBQ0gsU0FGTSxDQUFQO0FBR0g7QUFmTSxDOzs7Ozs7Ozs7OztBQ0pmOzs7Ozs7a0JBRWUsTUFBTSxXQUFOLENBQWtCO0FBQUE7QUFDN0IsbUJBRDZCLDZCQUNYO0FBQ2QsZUFBTztBQUNILHdCQUFZO0FBRFQsU0FBUDtBQUdILEtBTDRCO0FBTTdCLHFCQU42QiwrQkFNVDtBQUFBOztBQUNoQix5QkFBUSxVQUFSLEdBQXFCLElBQXJCLENBQTBCLFVBQUMsSUFBRCxFQUFVO0FBQ2hDLGtCQUFLLFFBQUwsQ0FBYztBQUNWLDRCQUFZO0FBREYsYUFBZDtBQUdILFNBSkQ7QUFLSCxLQVo0QjtBQWE3QixVQWI2QixvQkFhcEI7O0FBRUwsZUFBUTtBQUFBO0FBQUEsY0FBUSxXQUFVLFdBQWxCO0FBQ1I7QUFBQTtBQUFBLGtCQUFNLFdBQVUsV0FBaEI7QUFBNkIscUJBQUssS0FBTCxDQUFXO0FBQXhDLGFBRFE7QUFFUjtBQUFBO0FBQUEsa0JBQU0sV0FBVSxZQUFoQjtBQUNBLDJDQUFHLFdBQVUsa0JBQWIsR0FEQTtBQUVBLDJDQUFHLFdBQVUsaUJBQWI7QUFGQTtBQUZRLFNBQVI7QUFRSDtBQXZCNEIsQ0FBbEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7OztBQUNBOzs7Ozs7a0JBRWUsTUFBTSxXQUFOLENBQWtCO0FBQUE7QUFDN0IsbUJBRDZCLDZCQUNYO0FBQ2QsZUFBTztBQUNILHFCQUFTO0FBQ0wsMEJBQVUsRUFETDtBQUVMLHlCQUFTO0FBRko7QUFETixTQUFQO0FBTUgsS0FSNEI7QUFTN0IscUJBVDZCLCtCQVNUO0FBQUE7O0FBQ2hCLG9CQUFFLEdBQUYsQ0FBTSxDQUNGLGlCQUFRLFFBQVIsRUFERSxFQUVGLGlCQUFRLE9BQVIsRUFGRSxDQUFOLEVBR0csSUFISCxDQUdRLFVBQUMsSUFBRCxFQUFVO0FBQ2QsZ0JBQUksVUFBVTtBQUNWLDBCQUFVLEtBQUssQ0FBTCxDQURBO0FBRVYseUJBQVMsS0FBSyxDQUFMO0FBRkMsYUFBZDtBQUlBLGtCQUFLLFFBQUwsQ0FBYztBQUNWLHlCQUFTO0FBREMsYUFBZDtBQUdILFNBWEQ7QUFZSCxLQXRCNEI7QUF1QjdCLFVBdkI2QixvQkF1QnBCO0FBQ0wsWUFBSSxVQUFVLEVBQWQ7O0FBREs7QUFBQTtBQUFBOztBQUFBO0FBR0wsNERBQWlCLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsT0FBcEMsNEdBQTZDO0FBQUEsb0JBQXBDLElBQW9DOztBQUN6Qyx3QkFBUSxJQUFSLENBQWE7QUFBQTtBQUFBLHNCQUFJLEtBQUssS0FBSyxJQUFkO0FBQW9CO0FBQUE7QUFBQSwwQkFBRyxNQUFNLEtBQUssSUFBZDtBQUFxQiw2QkFBSztBQUExQjtBQUFwQixpQkFBYjtBQUNIO0FBTEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPTCxlQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsd0NBQWY7QUFDSjtBQUFBO0FBQUEsa0JBQUssV0FBVSxXQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSx5QkFBaEMsRUFBMEQsZUFBWSxVQUF0RSxFQUFpRixlQUFZLFNBQTdGLEVBQXVHLGlCQUFjLE9BQXJILEVBQTZILGlCQUFjLFFBQTNJO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsU0FBaEI7QUFBQTtBQUFBLHlCQURKO0FBRUksc0RBQU0sV0FBVSxVQUFoQixHQUZKO0FBR0ksc0RBQU0sV0FBVSxVQUFoQixHQUhKO0FBSUksc0RBQU0sV0FBVSxVQUFoQjtBQUpKLHFCQURKO0FBT0k7QUFBQTtBQUFBLDBCQUFHLFdBQVUsY0FBYixFQUE0QixNQUFLLEdBQWpDO0FBQXNDLDZCQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CO0FBQXpEO0FBUEosaUJBREo7QUFVSTtBQUFBO0FBQUEsc0JBQUssSUFBRyxRQUFSLEVBQWlCLFdBQVUsMEJBQTNCO0FBQ0k7QUFBQTtBQUFBLDBCQUFJLFdBQVUsZ0JBQWQ7QUFDQztBQUREO0FBREo7QUFWSjtBQURJLFNBREo7QUFxQkg7QUFuRDRCLENBQWxCLEM7Ozs7Ozs7Ozs7OztBQ0hmOzs7Ozs7a0JBRWUsVUFBQyxJQUFELEVBQU8sR0FBUCxFQUFlO0FBQzFCLFdBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNsQyxZQUFJLE1BQU0sSUFBSSxNQUFKLENBQVcsVUFBVSxJQUFWLEdBQWlCLGVBQTVCLENBQVY7QUFBQSxZQUNJLFFBQVEsTUFBTSxHQUFOLEdBQVksT0FBTyxRQUFQLENBQWdCLE1BRHhDOztBQUdBLFlBQUksSUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLEtBQWhCLENBQXNCLEdBQXRCLENBQVI7O0FBRUEsZ0JBQVEsSUFBSSxtQkFBbUIsRUFBRSxDQUFGLENBQW5CLENBQUosR0FBK0IsSUFBdkM7QUFDSCxLQVBNLENBQVA7QUFRSCxDOzs7OztBQ1hEOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICdwdWJsaWMvbW9kdWxlL2NvbW1vbi9oZWFkZXInXHJcbmltcG9ydCBKdW1ib3Ryb24gZnJvbSAnLi9tb2R1bGUvZGV0YWlsL2p1bWJvdHJvbidcclxuaW1wb3J0IERldGFpbCBmcm9tICcuL21vZHVsZS9kZXRhaWwvaW5kZXgnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAncHVibGljL21vZHVsZS9jb21tb24vZm9vdGVyJ1xyXG5cclxuaW1wb3J0IHVybFBhcmFtIGZyb20gJ3B1YmxpYy91dGlscy91cmwtcGFyYW0nXHJcblxyXG51cmxQYXJhbSgnaWQnKS50aGVuKChkYXRhKSA9PiB7XHJcblx0bGV0IFBhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0XHRyZW5kZXIoKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdj5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEp1bWJvdHJvbiBpZD17ZGF0YX0vPlxyXG4gICAgICAgIDxEZXRhaWwgaWQ9e2RhdGF9Lz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHRSZWFjdERPTS5yZW5kZXIoXHJcblx0XHQ8UGFnZSAvPixcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG5cdClcclxufSkiLCJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBTZXJ2aWNlLnJlbmRlckRhdGEodGhpcy5wcm9wcy5pZCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGJsb2ctbWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiB0aGlzLnN0YXRlLmNvbnRlbnRcbiAgICAgICAgICAgIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG4gICAgfVxufSkiLCJpbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBqdW1ib3Ryb25EYXRhOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzYzogXCJcIixcbiAgICAgICAgICAgICAgICB2aWV3TW9yZToge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgYCxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIFNlcnZpY2UucmVuZGVyRGF0YSh0aGlzLnByb3BzLmlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBqdW1ib3Ryb25EYXRhOiBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+aGVsbG8se3RoaXMuc3RhdGUuanVtYm90cm9uRGF0YS50aXRsZX0hPC9oMT5cbiAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmp1bWJvdHJvbkRhdGEuZGVzY308L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgaHJlZj17dGhpcy5zdGF0ZS5qdW1ib3Ryb25EYXRhLnZpZXdNb3JlLmhyZWZ9IHJvbGU9XCJidXR0b25cIj57dGhpcy5zdGF0ZS5qdW1ib3Ryb25EYXRhLnZpZXdNb3JlLnRleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG4gICAgfVxufSkiLCJpbXBvcnQgQXBpRGF0YSBmcm9tICdwdWJsaWMvZGVtby1kYXRhJ1xuXG5pbXBvcnQgUSBmcm9tICdxJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyRGF0YShpZCA9IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcnRuRGF0YSA9IHt9XG5cbiAgICAgICAgICAgIGZvciAobGV0IHYgb2YgQXBpRGF0YS5mcmFtZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodi50aXRsZSA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnRuRGF0YSA9IHZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJ0bkRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwibGV0IGZyYW1lcyA9IFt7XG4gICAgdGl0bGU6IFwiTm9kZWpzXCIsXG4gICAgZGVzYzogXCJGRVog5p6E5bu65ZyoIE5vZGVKUyDln7rkuo4gQ2hyb21lIFY4IOW8leaTjueahCBKYXZhU2NyaXB0IOi/kOihjOeOr+Wig++8jOWFtuS6i+S7tumpseWKqOmdnumYu+WhnueahOeJueaAp++8jOaegeWFtuW/q+mAn+eahOe8luivkeWJjeerr+WQhOenjei1hOa6kFwiLFxuICAgIGNvbnRlbnQ6IGA8ZGl2IGlkPVwiaG9tZS1pbnRyb1wiPlxuXG4gICAgICAgIDxwPk5vZGUuanPCriBpcyBhIEphdmFTY3JpcHQgcnVudGltZSBidWlsdCBvbiA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vdjgvXCI+Q2hyb21lJ3MgVjggSmF2YVNjcmlwdCBlbmdpbmU8L2E+LlxuTm9kZS5qcyB1c2VzIGFuIGV2ZW50LWRyaXZlbiwgbm9uLWJsb2NraW5nIEkvTyBtb2RlbCB0aGF0IG1ha2VzIGl0XG5saWdodHdlaWdodCBhbmQgZWZmaWNpZW50LiBOb2RlLmpzJyBwYWNrYWdlIGVjb3N5c3RlbSwgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9cIj5ucG08L2E+LCBpcyB0aGUgbGFyZ2VzdCBlY29zeXN0ZW0gb2Ygb3Blblxuc291cmNlIGxpYnJhcmllcyBpbiB0aGUgd29ybGQuPC9wPlxuXG5cblxuICAgICAgICA8aDIgaWQ9XCJob21lLWRvd25sb2FkaGVhZFwiIGRhdGEtZGwtbG9jYWw9XCJEb3dubG9hZCBmb3JcIj5Eb3dubG9hZCBmb3IgbWFjT1MgKHg2NCk8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWRvd25sb2FkYmxvY2tcIj5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC92Ni4xMC4wL25vZGUtdjYuMTAuMC5wa2dcIiBjbGFzcz1cImhvbWUtZG93bmxvYWRidXR0b25cIiB0aXRsZT1cIkRvd25sb2FkIHY2LjEwLjAgTFRTXCIgZGF0YS12ZXJzaW9uPVwidjYuMTAuMFwiPlxuICAgICAgICAgICAgdjYuMTAuMCBMVFNcbiAgICAgICAgICAgIDxzbWFsbD5SZWNvbW1lbmRlZCBGb3IgTW9zdCBVc2Vyczwvc21hbGw+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1kaXZpZGVyLXBpcGUgaG9tZS1zZWNvbmRhcnktbGlua3NcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9cIj5PdGhlciBEb3dubG9hZHM8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvbWFzdGVyL2RvYy9jaGFuZ2Vsb2dzL0NIQU5HRUxPR19WNi5tZCM2LjEwLjBcIj5DaGFuZ2Vsb2c8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0LXY2LngvZG9jcy9hcGkvXCI+QVBJIERvY3M8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZS1kb3dubG9hZGJsb2NrXCI+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC92Ny43LjEvbm9kZS12Ny43LjEucGtnXCIgY2xhc3M9XCJob21lLWRvd25sb2FkYnV0dG9uXCIgdGl0bGU9XCJEb3dubG9hZCB2Ny43LjEgQ3VycmVudFwiIGRhdGEtdmVyc2lvbj1cInY3LjcuMVwiPlxuICAgICAgICAgICAgICB2Ny43LjEgQ3VycmVudFxuICAgICAgICAgICAgICA8c21hbGw+TGF0ZXN0IEZlYXR1cmVzPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1kaXZpZGVyLXBpcGUgaG9tZS1zZWNvbmRhcnktbGlua3NcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZW4vZG93bmxvYWQvY3VycmVudC9cIj5PdGhlciBEb3dubG9hZHM8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvbWFzdGVyL2RvYy9jaGFuZ2Vsb2dzL0NIQU5HRUxPR19WNy5tZCM3LjcuMVwiPkNoYW5nZWxvZzwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QtdjcueC9kb2NzL2FwaS9cIj5BUEkgRG9jczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgT3IgaGF2ZSBhIGxvb2sgYXQgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL0xUUyNsdHMtc2NoZWR1bGVcIj5MVFMgc2NoZWR1bGUuPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9ub2RlanMub3JnL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIk5QTVwiLFxuICAgIGRlc2M6IFwiRkVaIOS9v+eUqCBOUE0g5o6l5YWl5YWo55CD5pyA5aSn55qE5byA5rqQ55Sf5oCB57O757uf77yM5YW35aSH5peg6ZmQ55qE5Yqf6IO95omp5bGV6IO95Yqb77yM5Y+v5pW05ZCI5Zu96ZmF5YmN5rK/55qE5byA5rqQ5qGG5p6277yM6YCC5bqU556s5oGv5LiH5Y+Y55qE5oqA5pyv5pu05pu/XCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cInRpdGxlIGVtLWRlZmF1bHQgdHlwZS1uZXV0cmFsLTExXCI+XG4gICAgICAgICAgQnVpbGQgYW1hemluZyB0aGluZ3NcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJoNSBlbS1kZWZhdWx0IHR5cGUtbmV1dHJhbC0xMSBwYnhsXCI+XG4gICAgICAgICAgbnBtIGlzIHRoZSBwYWNrYWdlIG1hbmFnZXIgZm9yIEphdmFTY3JpcHQuIEZpbmQsIHNoYXJlLCBhbmQgcmV1c2VcbiAgICAgICAgICBwYWNrYWdlcyBvZiBjb2RlIGZyb20gaHVuZHJlZHMgb2YgdGhvdXNhbmRzIG9mIGRldmVsb3BlcnMg4oCUIGFuZFxuICAgICAgICAgIGFzc2VtYmxlIHRoZW0gaW4gcG93ZXJmdWwgbmV3IHdheXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaWQ9XCJtYWluLWN0YVwiIGhyZWY9XCIjcGFuZS1ob21lcGFnZS1wcmljaW5nXCIgY2xhc3M9XCJidG4gYnRuLWhpZ2hsaWdodC0zIG1ybFwiIGRhdGEtZXZlbnQtbmFtZT1cImhvbWVwYWdlLWhlcm8tY3RhXCI+R2V0IHN0YXJ0ZWQ8L2E+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJHdWxwXCIsXG4gICAgZGVzYzogXCJGRVog5pW05ZCIR3VscOeahOS8l+WkmuaPkuS7tu+8jOe8luivkeOAgeS8mOWMluWSjOe7hOe7h+WJjeerr+WkjeadgueahOaooeWdl+WPiumdmeaAgei1hOa6kO+8jOWWneedgOWPr+S5kOWEv+OAgeWTvOedgOWwj+absuWEv++8jOiHquWKqOWMluWujOaIkOWJjeerr+Wkp+mHj+mHjeWkjeW3peS9nFwiLFxuICAgIGNvbnRlbnQ6IGA8aDEgY2xhc3M9XCJoZWFkaW5nIHRleHQtY2VudGVyXCI+QXV0b21hdGUgYW5kIGVuaGFuY2UgeW91ciB3b3JrZmxvdzwvaDE+PGgyIGNsYXNzPVwicGFyYWdyYXBoXCI+XG4gICAgICAgICAgZ3VscCBpcyBhIHRvb2xraXQgZm9yIGF1dG9tYXRpbmcgcGFpbmZ1bCBvciB0aW1lLWNvbnN1bWluZyB0YXNrcyBpbiB5b3VyIGRldmVsb3BtZW50IHdvcmtmbG93LCBzbyB5b3UgY2FuIHN0b3AgbWVzc2luZyBhcm91bmQgYW5kIGJ1aWxkIHNvbWV0aGluZy5cbiAgICAgICAgPC9oMj48ZGl2IGNsYXNzPVwiY3Rhc1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiY3Rhcy1idXR0b25cIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1bHBqcy9ndWxwL2Jsb2IvbWFzdGVyL2RvY3MvZ2V0dGluZy1zdGFydGVkLm1kXCI+R2V0IFN0YXJ0ZWQ8L2E+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwOi8vZ3VscGpzLmNvbS9cIlxuICAgIH1cbn0sIHtcbiAgICB0aXRsZTogXCJCcm93c2VyaWZ5XCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIEJyb3dzZXJpZnkg5qih5Z2X5YyW57uE57uH5ZKM566h55CG6aG555uu55qE5ZCE5Liq5Yqf6IO95qih5Z2X77yM5p6B5aSn5o+Q5Y2H6aG555uu55qE5Y+v57u05oqk5oCn44CB5Yqf6IO95aSN55So5oCn77yM5bm25a6e546w56ev5pyo5byP55qE5pCt5bu6572R6aG1XCIsXG4gICAgY29udGVudDogYDxzZWN0aW9uIGlkPVwidG9wLWhvbWUtc2VjdGlvblwiIGNsYXNzPVwidG9wLXNlY3Rpb24gY29sb3ItYVwiPlxuICAgICAgPGRpdiBpZD1cInRvcC1ob21lLWltYWdlXCI+PC9kaXY+XG5cbiAgICAgICA8aDMgaWQ9XCJ0b3Atc3VidGl0bGVcIiBjbGFzcz1cImxhcmdlLWZvbnRcIj5Ccm93c2VyaWZ5IGxldHMgeW91IHJlcXVpcmUoPHNwYW4gY2xhc3M9XCJjb2xvci1kXCI+J21vZHVsZXMnPC9zcGFuPikgaW4gdGhlIGJyb3dzZXIgYnkgYnVuZGxpbmcgdXAgYWxsIG9mIHlvdXIgZGVwZW5kZW5jaWVzLjwvaDM+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL25vZGUtYnJvd3NlcmlmeSN1c2FnZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidG9wLWJ1dHRvblwiIGlkPVwidG9wLWJ1dHRvbjJcIj5cbiAgICAgICAgICBEb2N1bWVudGF0aW9uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9hPlxuICAgIDwvc2VjdGlvbj5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cDovL2Jyb3dzZXJpZnkub3JnL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJvd2VyXCIsXG4gICAgZGVzYzogXCJGRVog5Y+v6YWN572u5L2/55SoIEJvd2VyIOaQnOe0ouOAgeWuieijheOAgeabtOaWsOWSjOWNuOi9veWmgkphdmFTY3JpcHTjgIFDU1PkuYvnsbvnmoTnvZHnu5zotYTmupDvvIzpgJrov4foh6rliqjljJbms6jlhaXmioDmnK/lroznvo7op6PlhrPlpI3mnYLnmoTmoYbmnrbljIXnrqHnkIbpl67pophcIixcbiAgICBjb250ZW50OiBgPGRpdiBjbGFzcz1cIm1haW5cIj5cbjxwIGNsYXNzPVwibGVhZFwiPldlYiBzaXRlcyBhcmUgbWFkZSBvZiBsb3RzIG9mIHRoaW5ncyDigJQgZnJhbWV3b3JrcywgbGlicmFyaWVzLCBhc3NldHMsIGFuZCB1dGlsaXRpZXMuIEJvd2VyIG1hbmFnZXMgYWxsIHRoZXNlIHRoaW5ncyBmb3IgeW91LjwvcD5cbjxwPktlZXBpbmcgdHJhY2sgb2YgYWxsIHRoZXNlIHBhY2thZ2VzIGFuZCBtYWtpbmcgc3VyZSB0aGV5IGFyZSB1cCB0byBkYXRlIChvciBzZXQgdG8gdGhlIHNwZWNpZmljIHZlcnNpb25zIHlvdSBuZWVkKSBpcyB0cmlja3kuIEJvd2VyIHRvIHRoZSByZXNjdWUhPC9wPlxuPHA+Qm93ZXIgY2FuIG1hbmFnZSBjb21wb25lbnRzIHRoYXQgY29udGFpbiBIVE1MLCBDU1MsIEphdmFTY3JpcHQsIGZvbnRzIG9yIGV2ZW4gaW1hZ2UgZmlsZXMuIEJvd2VyIGRvZXNu4oCZdCBjb25jYXRlbmF0ZSBvciBtaW5pZnkgY29kZSBvciBkbyBhbnl0aGluZyBlbHNlIC0gaXQganVzdCBpbnN0YWxscyB0aGUgcmlnaHQgdmVyc2lvbnMgb2YgdGhlIHBhY2thZ2VzIHlvdSBuZWVkIGFuZCB0aGVpciBkZXBlbmRlbmNpZXMuPC9wPlxuPHA+VG8gPGEgaHJlZj1cIiNnZXR0aW5nLXN0YXJ0ZWRcIj5nZXQgc3RhcnRlZDwvYT4sIEJvd2VyIHdvcmtzIGJ5IGZldGNoaW5nIGFuZCBpbnN0YWxsaW5nIDxhIGhyZWY9XCIvc2VhcmNoXCI+cGFja2FnZXM8L2E+IGZyb20gYWxsIG92ZXIsIHRha2luZyBjYXJlIG9mIGh1bnRpbmcsIGZpbmRpbmcsIGRvd25sb2FkaW5nLCBhbmQgc2F2aW5nIHRoZSBzdHVmZiB5b3XigJlyZSBsb29raW5nIGZvci4gQm93ZXIga2VlcHMgdHJhY2sgb2YgdGhlc2UgcGFja2FnZXMgaW4gYSBtYW5pZmVzdCBmaWxlLCA8YSBocmVmPVwiL2RvY3MvY3JlYXRpbmctcGFja2FnZXMvI2Jvd2VyanNvblwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlci5qc29uPC9jb2RlPjwvYT4uIEhvdyB5b3UgdXNlIDxhIGhyZWY9XCIvc2VhcmNoXCI+cGFja2FnZXM8L2E+IGlzIHVwIHRvIHlvdS4gQm93ZXIgcHJvdmlkZXMgaG9va3MgdG8gZmFjaWxpdGF0ZSB1c2luZyBwYWNrYWdlcyBpbiB5b3VyIDxhIGhyZWY9XCIvZG9jcy90b29sc1wiPnRvb2xzIGFuZCB3b3JrZmxvd3M8L2E+LjwvcD5cbjxwPkJvd2VyIGlzIG9wdGltaXplZCBmb3IgdGhlIGZyb250LWVuZC4gSWYgbXVsdGlwbGUgcGFja2FnZXMgZGVwZW5kIG9uIGEgcGFja2FnZSAtIGpRdWVyeSBmb3IgZXhhbXBsZSAtIEJvd2VyIHdpbGwgZG93bmxvYWQgalF1ZXJ5IGp1c3Qgb25jZS4gVGhpcyBpcyBrbm93biBhcyBhIGZsYXQgZGVwZW5kZW5jeSBncmFwaCBhbmQgaXQgaGVscHMgcmVkdWNlIHBhZ2UgbG9hZC48L3A+XG48aDIgaWQ9XCJpbnN0YWxsLWJvd2VyXCI+PGEgaHJlZj1cIiNpbnN0YWxsLWJvd2VyXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+SW5zdGFsbCBCb3dlcjwvaDI+XG48cD5Cb3dlciBpcyBhIGNvbW1hbmQgbGluZSB1dGlsaXR5LiBJbnN0YWxsIGl0IHdpdGggbnBtLjwvcD5cbjxmaWd1cmUgY2xhc3M9XCJoaWdobGlnaHRcIj48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtYmFzaFwiIGRhdGEtbGFuZz1cImJhc2hcIj48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+bnBtIGluc3RhbGwgLWcgYm93ZXI8L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48cD5Cb3dlciByZXF1aXJlcyA8YSBocmVmPVwiaHR0cDovL25vZGVqcy5vcmcvXCI+bm9kZSwgbnBtPC9hPiBhbmQgPGEgaHJlZj1cImh0dHA6Ly9naXQtc2NtLm9yZ1wiPmdpdDwvYT4uPC9wPlxuPHA+TGF0ZXN0IHJlbGVhc2U6IDxhIGhyZWY9XCJcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vbnBtL3YvYm93ZXIuc3ZnP21heEFnZT0yNTkyMDAwXCIgYWx0PVwiYm93ZXIgdmVyc2lvblwiPjwvYT48L3A+XG48cD5Gb3IgdHJvdWJsZXNob290aW5nIGluc3RhbGxhdGlvbiBvbiBkaWZmZXJlbnQgcGxhdGZvcm1zLCByZWFkIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Jvd2VyL2Jvd2VyL3dpa2kvVHJvdWJsZXNob290aW5nXCI+dHJvdWJsZXNob290aW5nPC9hPiB3aWtpIHBhZ2UuPC9wPlxuPGgyIGlkPVwiZ2V0dGluZy1zdGFydGVkXCI+PGEgaHJlZj1cIiNnZXR0aW5nLXN0YXJ0ZWRcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5HZXR0aW5nIHN0YXJ0ZWQ8L2gyPlxuPGgzIGlkPVwiaW5zdGFsbC1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjaW5zdGFsbC1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPkluc3RhbGwgcGFja2FnZXM8L2gzPlxuPHA+SW5zdGFsbCBwYWNrYWdlcyB3aXRoIDxhIGhyZWY9XCIvZG9jcy9hcGkjaW5zdGFsbFwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsPC9jb2RlPjwvYT4uIEJvd2VyIGluc3RhbGxzIHBhY2thZ2VzIHRvIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlcl9jb21wb25lbnRzLzwvY29kZT4uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsICZsdDtwYWNrYWdlJmd0OzwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxwPkEgcGFja2FnZSBjYW4gYmUgYSBHaXRIdWIgc2hvcnRoYW5kLCBhIEdpdCBlbmRwb2ludCwgYSBVUkwsIGFuZCBtb3JlLiBSZWFkIG1vcmUgYWJvdXQgPGEgaHJlZj1cIi9kb2NzL2FwaS8jaW5zdGFsbFwiPjxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsPC9jb2RlPjwvYT4uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiY1wiPiMgaW5zdGFsbHMgdGhlIHByb2plY3QgZGVwZW5kZW5jaWVzIGxpc3RlZCBpbiBib3dlci5qc29uPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGxcbjxzcGFuIGNsYXNzPVwiY1wiPiMgcmVnaXN0ZXJlZCBwYWNrYWdlPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwganF1ZXJ5XG48c3BhbiBjbGFzcz1cImNcIj4jIEdpdEh1YiBzaG9ydGhhbmQ8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBkZXNhbmRyby9tYXNvbnJ5XG48c3BhbiBjbGFzcz1cImNcIj4jIEdpdCBlbmRwb2ludDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGdpdDovL2dpdGh1Yi5jb20vdXNlci9wYWNrYWdlLmdpdFxuPHNwYW4gY2xhc3M9XCJjXCI+IyBVUkw8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBodHRwOi8vZXhhbXBsZS5jb20vc2NyaXB0LmpzPC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPGgzIGlkPVwic2VhcmNoLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNzZWFyY2gtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5TZWFyY2ggcGFja2FnZXM8L2gzPlxuPHA+PGEgaHJlZj1cIi9zZWFyY2hcIj5TZWFyY2ggQm93ZXIgcGFja2FnZXM8L2E+IGFuZCBmaW5kIHRoZSByZWdpc3RlcmVkIHBhY2thZ2UgbmFtZXMgZm9yIHlvdXIgZmF2b3JpdGUgcHJvamVjdHMuPC9wPlxuPGgzIGlkPVwic2F2ZS1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjc2F2ZS1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlNhdmUgcGFja2FnZXM8L2gzPlxuPHA+Q3JlYXRlIGEgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+IGZpbGUgZm9yIHlvdXIgcGFja2FnZSB3aXRoIDxhIGhyZWY9XCIvZG9jcy9jcmVhdGluZy1wYWNrYWdlcy8jYm93ZXJqc29uXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluaXQ8L2NvZGU+PC9hPi48L3A+XG48cD5UaGVuIHNhdmUgbmV3IGRlcGVuZGVuY2llcyB0byB5b3VyIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlci5qc29uPC9jb2RlPiB3aXRoIDxjb2RlIGNsYXNzPVwiaGlnaGxpZ2h0ZXItcm91Z2VcIj5ib3dlciBpbnN0YWxsIFBBQ0tBR0UgLS1zYXZlPC9jb2RlPjwvcD5cbjxoMyBpZD1cInVzZS1wYWNrYWdlc1wiPjxhIGhyZWY9XCIjdXNlLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+VXNlIHBhY2thZ2VzPC9oMz5cbjxwPkhvdyB5b3UgdXNlIHBhY2thZ2VzIGlzIHVwIHRvIHlvdS4gV2UgcmVjb21tZW5kIHlvdSB1c2UgQm93ZXIgdG9nZXRoZXIgd2l0aCA8YSBocmVmPVwiL2RvY3MvdG9vbHMvXCI+R3J1bnQsIFJlcXVpcmVKUywgWWVvbWFuLCBhbmQgbG90cyBvZiBvdGhlciB0b29sczwvYT4gb3IgYnVpbGQgeW91ciBvd24gd29ya2Zsb3cgd2l0aCA8YSBocmVmPVwiL2RvY3MvYXBpL1wiPnRoZSBBUEk8L2E+LiBZb3UgY2FuIGFsc28gdXNlIHRoZSBpbnN0YWxsZWQgcGFja2FnZXMgZGlyZWN0bHksIGxpa2UgdGhpcywgaW4gdGhlIGNhc2Ugb2YgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmpxdWVyeTwvY29kZT46PC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1odG1sXCIgZGF0YS1sYW5nPVwiaHRtbFwiPjxzcGFuIGNsYXNzPVwibnRcIj4mbHQ7c2NyaXB0IDwvc3Bhbj48c3BhbiBjbGFzcz1cIm5hXCI+c3JjPTwvc3Bhbj48c3BhbiBjbGFzcz1cInNcIj5cImJvd2VyX2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qc1wiPC9zcGFuPjxzcGFuIGNsYXNzPVwibnRcIj4mZ3Q7Jmx0Oy9zY3JpcHQmZ3Q7PC9zcGFuPjwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxoMiBpZD1cInR3aXR0ZXItdXBkYXRlcy1mcm9tLWJvd2VyaHR0cHN0d2l0dGVyY29tYm93ZXJcIj48YSBocmVmPVwiI3R3aXR0ZXItdXBkYXRlcy1mcm9tLWJvd2VyaHR0cHN0d2l0dGVyY29tYm93ZXJcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5Ud2l0dGVyIHVwZGF0ZXMgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ib3dlclwiPkBib3dlcjwvYT48L2gyPlxuPHA+PGEgY2xhc3M9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vYm93ZXJcIiBkYXRhLXdpZGdldC1pZD1cIjQ4MDM3NzI5MTM2OTc1NDYyNVwiPlR3ZWV0cyBieSBAYm93ZXI8L2E+XG48L3A+XG5cbjwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2Jvd2VyLmlvL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJvcndzZXJTeW5jXCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIEJyb3dzZXJzeW5jIOiuqea1j+iniOWZqOWunuaXtuW/q+mAn+eahOWTjeW6lOWJjeerr+WQhOenjeaWh+S7tueahOabtOaUueW5tuiHquWKqOWIt+aWsOmhtemdou+8jOS6puWPr+WunuaXtuWQjOatpeWQhOS4que7iOerr++8jOaPkOmrmOiHs+WwkTMwJeeahOW8gOWPkeaViOeOh1wiLFxuICAgIGNvbnRlbnQ6IGA8aDEgY2xhc3M9XCJob29rXCI+VGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy48L2gxPjxwIGNsYXNzPVwicm9uc2VhbFwiPkl04oCZcyB3aWNrZWQtZmFzdCBhbmQgdG90YWxseSBmcmVlLjwvcD48cCBjbGFzcz1cInZpZGVvXCI+PGEgY2xhc3M9XCJ2aWRlb19fbGlua1wiIGhyZWY9XCIjXCI+PC9hPjwvcD48cCBjbGFzcz1cImhvdy10b1wiPjwvcD48cCBjbGFzcz1cImhvdy10b19fY29tbWFuZFwiPm5wbSBpbnN0YWxsIC1nIGJyb3dzZXItc3luYzwvcD48cCBjbGFzcz1cImN0YVwiPjxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIGhyZWY9XCIjaW5zdGFsbFwiIHRpdGxlPVwiR2V0IFN0YXJ0ZWRcIj5HZXQgU3RhcnRlZDwvYT48L3A+PGRpdiBjbGFzcz1cInBsYXllclwiPjxwPidib25qb3VyPC9wPjwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2Jyb3dzZXJzeW5jLmlvL1wiXG4gICAgfVxufV1cblxubGV0IGluZGV4ID0ge1xuICAgIGZlemRlc2M6IFwiRkVaIOWJjeerr+aooeWdl+WMluW3peeoi+W8gOWPkeahhuaetlwiLFxuICAgIGp1bWJvdHJvbjoge1xuICAgICAgICB0aXRsZTogXCJIZWxsbywgRkVaIEFuZCBSZWFjdCFcIixcbiAgICAgICAgY29udGVudDogXCLov5nmmK/kuIDkuKrkvb/nlKggRkVaIOaehOW7uueahOWJjeerr+aooeWdl+WMluW8gOWPkeekuuS+i++8jOa8lOekuuS6huWfuuS6jlJlYWN05Y2V5paH5Lu257uE5Lu255qE5byA5Y+R57uT5p6E44CCXCIsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViLWFsdFwiPjwvaT4gR2l0SHViYCxcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1cmljLXpoYW8vZmV6XCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGxpc3QgPSB7XG4gICAganVtYm90cm9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkZFWiBBbmQgUmVhY3QgRnJhbWUhXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwi6L+Z5piv5LiA5LiqRkVa5pW05ZCIUmVhY3TnmoTliJfooajlsZXnpLrpobXvvIzor7fngrnlh7vkuIvpnaLliJfooajnmoQgRGV0YWlsIOaMiemSrui/m+WFpeivpuaDhemhtea1j+iniFwiLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIG5hbWU6IFwi5p+l55yL5pu05aSa5L+h5oGvXCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHA6Ly9mZXouaGVzdHVkeS5jb21cIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgY29tbW9uID0ge1xuICAgIHNpdGVOYW1lOiBcIkZFWiBSZWFjdCBERU1PXCIsXG5cbiAgICBuYXZEYXRhOiBbe1xuICAgICAgICBuYW1lOiBcIummlumhtVwiLFxuICAgICAgICBocmVmOiBcImluZGV4Lmh0bWxcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJGRVrln7rmnKzmnrbmnoRcIixcbiAgICAgICAgaHJlZjogXCJsaXN0Lmh0bWxcIlxuICAgIH1dLFxuXG4gICAgZm9vdGVyVGV4dDogXCLCqSAyMDE3IEZFWiDliY3nq6/mqKHlnZfljJblt6XnqIvlvIDlj5HmoYbmnrYgQ3JlYXRlZCBieSBGdXJpYy56aGFvXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFwiaW5kZXhcIjogaW5kZXgsXG4gICAgXCJsaXN0XCI6IGxpc3QsXG4gICAgXCJmcmFtZXNcIjogZnJhbWVzLFxuICAgIFwiY29tbW9uXCI6IGNvbW1vblxufVxuIiwiaW1wb3J0IFEgZnJvbSAncSdcblxuaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hdkxpc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKEFwaURhdGEuY29tbW9uLm5hdkRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzaXRlTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoQXBpRGF0YS5jb21tb24uc2l0ZU5hbWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJUZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShBcGlEYXRhLmNvbW1vbi5mb290ZXJUZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxufVxuIiwiaW1wb3J0IFNlcnZpY2UgZnJvbSAnLi9jb21tb24nXG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb290ZXJUZXh0OiBcIlwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBTZXJ2aWNlLmZvb3RlclRleHQoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmb290ZXJUZXh0OiBkYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoPGZvb3RlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+e3RoaXMuc3RhdGUuZm9vdGVyVGV4dH08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdlaXhpblwiPjwvaT5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXdlaWJvXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgICA8L2Zvb3Rlcj4pXG5cbiAgICB9XG59KSIsImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJ0bkRhdGE6IHtcbiAgICAgICAgICAgICAgICBzaXRlTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBuYXZMaXN0OiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgUS5hbGwoW1xuICAgICAgICAgICAgU2VydmljZS5zaXRlTmFtZSgpLFxuICAgICAgICAgICAgU2VydmljZS5uYXZMaXN0KClcbiAgICAgICAgXSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJ0bkRhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2l0ZU5hbWU6IGRhdGFbMF0sXG4gICAgICAgICAgICAgICAgbmF2TGlzdDogZGF0YVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcnRuRGF0YTogcnRuRGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hdkxpc3QgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5zdGF0ZS5ydG5EYXRhLm5hdkxpc3QpIHtcbiAgICAgICAgICAgIG5hdkxpc3QucHVzaCg8bGkga2V5PXtpdGVtLm5hbWV9PjxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0ubmFtZX08L2E+PC9saT4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj57dGhpcy5zdGF0ZS5ydG5EYXRhLnNpdGVOYW1lfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgIHtuYXZMaXN0fVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgICAgIClcblxuICAgIH1cbn0pIiwiaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQgKG5hbWUsIHVybCkgPT4ge1xuICAgIHJldHVybiBRLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIpLFxuICAgICAgICAgICAgcl90eHQgPSB1cmwgPyB1cmwgOiB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG5cbiAgICAgICAgbGV0IHIgPSByX3R4dC5zdWJzdHIoMSkubWF0Y2gocmVnKVxuXG4gICAgICAgIHJlc29sdmUociA/IGRlY29kZVVSSUNvbXBvbmVudChyWzJdKSA6IG51bGwpXG4gICAgfSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeUxYQmhZMnN2WDNCeVpXeDFaR1V1YW5NaUxDSnpjbU12ZG1sbGQzTXZZWEowYVdOc1pTOXBibVJsZUM1cWN5SXNJbk55WXk5MmFXVjNjeTloY25ScFkyeGxMMjF2WkhWc1pTOWtaWFJoYVd3dmFXNWtaWGd1YW5NaUxDSnpjbU12ZG1sbGQzTXZZWEowYVdOc1pTOXRiMlIxYkdVdlpHVjBZV2xzTDJwMWJXSnZkSEp2Ymk1cWN5SXNJbk55WXk5MmFXVjNjeTloY25ScFkyeGxMMjF2WkhWc1pTOWtaWFJoYVd3dmMyVnlkbWxqWlM1cWN5SXNJbk55WXk5MmFXVjNjeTl3ZFdKc2FXTXZaR1Z0Ynkxa1lYUmhMbXB6SWl3aWMzSmpMM1pwWlhkekwzQjFZbXhwWXk5dGIyUjFiR1V2WTI5dGJXOXVMMk52YlcxdmJpNXFjeUlzSW5OeVl5OTJhV1YzY3k5d2RXSnNhV012Ylc5a2RXeGxMMk52YlcxdmJpOW1iMjkwWlhJdWFuTWlMQ0p6Y21NdmRtbGxkM012Y0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dmFHVmhaR1Z5TG1weklpd2ljM0pqTDNacFpYZHpMM0IxWW14cFl5OTFkR2xzY3k5MWNtd3RjR0Z5WVcwdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZbUZpWld3dGNuVnVkR2x0WlM5amIzSmxMV3B6TDJkbGRDMXBkR1Z5WVhSdmNpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpWVdKbGJDMXlkVzUwYVcxbEwyTnZjbVV0YW5NdmIySnFaV04wTDJGemMybG5iaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5aVlXSmxiQzF5ZFc1MGFXMWxMMmhsYkhCbGNuTXZaWGgwWlc1a2N5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZabTR2WjJWMExXbDBaWEpoZEc5eUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOW1iaTl2WW1wbFkzUXZZWE56YVdkdUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWhMV1oxYm1OMGFXOXVMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTloWkdRdGRHOHRkVzV6WTI5d1lXSnNaWE11YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJGdUxXOWlhbVZqZEM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZllYSnlZWGt0YVc1amJIVmtaWE11YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJOc1lYTnpiMll1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJOdlppNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZZMjl5WlM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlkzUjRMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlrWldacGJtVmtMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlrWlhOamNtbHdkRzl5Y3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlpHOXRMV055WldGMFpTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZaVzUxYlMxaWRXY3RhMlY1Y3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZlpYaHdiM0owTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5bVlXbHNjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWjJ4dlltRnNMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlvWVhNdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyaHBaR1V1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJoMGJXd3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmxsT0Mxa2IyMHRaR1ZtYVc1bExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXBiMkpxWldOMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXBjeTF2WW1wbFkzUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmwwWlhJdFkzSmxZWFJsTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5cGRHVnlMV1JsWm1sdVpTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhWFJsY2kxemRHVndMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTlwZEdWeVlYUnZjbk11YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJ4cFluSmhjbmt1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDI5aWFtVmpkQzFoYzNOcFoyNHVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMjlpYW1WamRDMWpjbVZoZEdVdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyOWlhbVZqZEMxa2NDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXUndjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV2R2Y0hNdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyOWlhbVZqZEMxbmNHOHVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMjlpYW1WamRDMXJaWGx6TFdsdWRHVnlibUZzTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5dlltcGxZM1F0YTJWNWN5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExYQnBaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmY0hKdmNHVnlkSGt0WkdWell5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZjbVZrWldacGJtVXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM05sZEMxMGJ5MXpkSEpwYm1jdGRHRm5MbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl6YUdGeVpXUXRhMlY1TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5emFHRnlaV1F1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNOMGNtbHVaeTFoZEM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRHOHRhVzVrWlhndWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgzUnZMV2x1ZEdWblpYSXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM1J2TFdsdlltcGxZM1F1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNSdkxXeGxibWQwYUM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRHOHRiMkpxWldOMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTBieTF3Y21sdGFYUnBkbVV1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNWcFpDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZkMnR6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDJOdmNtVXVaMlYwTFdsMFpYSmhkRzl5TFcxbGRHaHZaQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlqYjNKbExtZGxkQzFwZEdWeVlYUnZjaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlsY3pZdVlYSnlZWGt1YVhSbGNtRjBiM0l1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WlhNMkxtOWlhbVZqZEM1aGMzTnBaMjR1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WlhNMkxuTjBjbWx1Wnk1cGRHVnlZWFJ2Y2k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5M1pXSXVaRzl0TG1sMFpYSmhZbXhsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3TzBGRFFVRTdPenM3UVVGRFFUczdPenRCUVVWQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUU3T3pzN096dEJRVVZCTEhkQ1FVRlRMRWxCUVZRc1JVRkJaU3hKUVVGbUxFTkJRVzlDTEZWQlFVTXNTVUZCUkN4RlFVRlZPMEZCUXpkQ0xFdEJRVWtzVDBGQlR5eG5Ra0ZCVFN4WFFVRk9MRU5CUVd0Q08wRkJRVUU3UVVGRE5VSXNVVUZFTkVJc2IwSkJRMjVDTzBGQlExSXNWVUZEUXp0QlFVRkJPMEZCUVVFN1FVRkRTU3g1UkVGRVNqdEJRVVZKTEhsRVFVRlhMRWxCUVVrc1NVRkJaaXhIUVVaS08wRkJSMGtzY1VSQlFWRXNTVUZCU1N4SlFVRmFMRWRCU0VvN1FVRkpTVHRCUVVwS0xFbEJSRVE3UVVGUlFUdEJRVll5UWl4RlFVRnNRaXhEUVVGWU96dEJRV0ZCTEc5Q1FVRlRMRTFCUVZRc1EwRkRReXc0UWtGQlF5eEpRVUZFTEU5QlJFUXNSVUZGUXl4VFFVRlRMR05CUVZRc1EwRkJkMElzUzBGQmVFSXNRMEZHUkR0QlFVbEJMRU5CYkVKRU96czdPenM3T3pzN096dEJRMVpCT3pzN096czdhMEpCUldVc1RVRkJUU3hYUVVGT0xFTkJRV3RDTzBGQlFVRTdRVUZETjBJc2JVSkJSRFpDTERaQ1FVTllPMEZCUTJRc1pVRkJUenRCUVVOSUxIRkNRVUZUTzBGQlJFNHNVMEZCVUR0QlFVZElMRXRCVERSQ08wRkJUVGRDTEhGQ1FVNDJRaXdyUWtGTlZEdEJRVUZCT3p0QlFVTm9RaXd3UWtGQlVTeFZRVUZTTEVOQlFXMUNMRXRCUVVzc1MwRkJUQ3hEUVVGWExFVkJRVGxDTEVWQlFXdERMRWxCUVd4RExFTkJRWFZETEZWQlFVTXNTVUZCUkN4RlFVRlZPMEZCUXpkRExHdENRVUZMTEZGQlFVd3NRMEZCWXp0QlFVTldMSGxDUVVGVExFdEJRVXM3UVVGRVNpeGhRVUZrTzBGQlIwZ3NVMEZLUkR0QlFVdElMRXRCV2pSQ08wRkJZVGRDTEZWQllqWkNMRzlDUVdGd1FqdEJRVU5NTEdWQlEwazdRVUZCUVR0QlFVRkJMR05CUVVzc1YwRkJWU3hYUVVGbU8wRkJRMG83UVVGQlFUdEJRVUZCTEd0Q1FVRkxMRmRCUVZVc1MwRkJaanRCUVVOSk8wRkJRVUU3UVVGQlFTeHpRa0ZCU3l4WFFVRlZMSEZDUVVGbU8wRkJRMGs3UVVGQlFUdEJRVUZCTERCQ1FVRkxMRmRCUVZVc1YwRkJaanRCUVVOSkxIVkVRVVJLTzBGQlJVa3NjVVJCUVVzc2VVSkJRWGxDTzBGQlEyeERMSGREUVVGUkxFdEJRVXNzUzBGQlRDeERRVUZYTzBGQlJHVXNOa0pCUVRsQ08wRkJSa283UVVGRVNqdEJRVVJLTEdGQlJFazdRVUZYU2p0QlFWaEpMRk5CUkVvN1FVRm5Ra2c3UVVFNVFqUkNMRU5CUVd4Q0xFTTdPenM3T3pzN096czdPenM3UVVOR1pqczdPenM3TzJ0Q1FVVmxMRTFCUVUwc1YwRkJUaXhEUVVGclFqdEJRVUZCTzBGQlF6ZENMRzFDUVVRMlFpdzJRa0ZEV0R0QlFVTmtMR1ZCUVU4N1FVRkRTQ3d5UWtGQlpUdEJRVU5ZTEhWQ1FVRlBMRVZCUkVrN1FVRkZXQ3h6UWtGQlRTeEZRVVpMTzBGQlIxZ3NNRUpCUVZVN1FVRkRUaXcwUWtGRVRUdEJRVVZPTERCQ1FVRk5PMEZCUmtFN1FVRklRenRCUVVSYUxGTkJRVkE3UVVGVlNDeExRVm8wUWp0QlFXRTNRaXh4UWtGaU5rSXNLMEpCWVZRN1FVRkJRVHM3UVVGRGFFSXNNRUpCUVZFc1ZVRkJVaXhEUVVGdFFpeExRVUZMTEV0QlFVd3NRMEZCVnl4RlFVRTVRaXhGUVVGclF5eEpRVUZzUXl4RFFVRjFReXhWUVVGRExFbEJRVVFzUlVGQlZUdEJRVU0zUXl4clFrRkJTeXhSUVVGTUxFTkJRV003UVVGRFZpd3JRa0ZCWlN4MVFrRkJZeXhGUVVGa0xFVkJRV3RDTEVsQlFXeENPMEZCUkV3c1lVRkJaRHRCUVVkSUxGTkJTa1E3UVVGTFNDeExRVzVDTkVJN1FVRnZRamRDTEZWQmNFSTJRaXh2UWtGdlFuQkNPMEZCUTB3c1pVRkRTVHRCUVVGQk8wRkJRVUVzWTBGQlN5eFhRVUZWTEZkQlFXWTdRVUZEU2p0QlFVRkJPMEZCUVVFc2EwSkJRVXNzVjBGQlZTeFhRVUZtTzBGQlEwazdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJWeXg1UWtGQlN5eExRVUZNTEVOQlFWY3NZVUZCV0N4RFFVRjVRaXhMUVVGd1F6dEJRVUZCTzBGQlFVRXNhVUpCUkVvN1FVRkZTVHRCUVVGQk8wRkJRVUU3UVVGQlNTeDVRa0ZCU3l4TFFVRk1MRU5CUVZjc1lVRkJXQ3hEUVVGNVFqdEJRVUUzUWl4cFFrRkdTanRCUVVkSk8wRkJRVUU3UVVGQlFUdEJRVU5KTzBGQlFVRTdRVUZCUVN3d1FrRkJSeXhYUVVGVkxIZENRVUZpTEVWQlFYTkRMRTFCUVUwc1MwRkJTeXhMUVVGTUxFTkJRVmNzWVVGQldDeERRVUY1UWl4UlFVRjZRaXhEUVVGclF5eEpRVUU1UlN4RlFVRnZSaXhOUVVGTExGRkJRWHBHTzBGQlFXMUhMRFpDUVVGTExFdEJRVXdzUTBGQlZ5eGhRVUZZTEVOQlFYbENMRkZCUVhwQ0xFTkJRV3RETzBGQlFYSkpPMEZCUkVvN1FVRklTanRCUVVSSkxGTkJSRW83UVVGaFNEdEJRV3hETkVJc1EwRkJiRUlzUXpzN096czdPenM3T3pzN096czdRVU5HWmpzN096dEJRVVZCT3pzN096czdhMEpCUldVN1FVRkRXQ3hqUVVSWExIZENRVU5UTzBGQlFVRXNXVUZCVkN4RlFVRlRMSFZGUVVGS0xFVkJRVWs3TzBGQlEyaENMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanRCUVVOc1F5eG5Ra0ZCU1N4VlFVRlZMRVZCUVdRN08wRkJSR3RETzBGQlFVRTdRVUZCUVRzN1FVRkJRVHRCUVVkc1F5eG5SVUZCWXl4dFFrRkJVU3hOUVVGMFFpdzBSMEZCT0VJN1FVRkJRU3gzUWtGQmNrSXNRMEZCY1VJN08wRkJRekZDTEhkQ1FVRkpMRVZCUVVVc1MwRkJSaXhMUVVGWkxFVkJRV2hDTEVWQlFXOUNPMEZCUTJoQ0xHdERRVUZWTEVOQlFWWTdRVUZEU0R0QlFVTktPMEZCVUdsRE8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCVVd4RExHOUNRVUZSTEU5QlFWSTdRVUZEU0N4VFFWUk5MRU5CUVZBN1FVRlZTRHRCUVZwVkxFTTdPenM3T3pzN096czdRVU5LWml4SlFVRkpMRk5CUVZNc1EwRkJRenRCUVVOV0xGZEJRVThzVVVGRVJ6dEJRVVZXTEZWQlFVMHNNa1ZCUmtrN1FVRkhWaXhyZDBWQlNGVTdRVUV5UkZZc1kwRkJWVHRCUVVOT0xHTkJRVTBzVFVGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVR0QlFUTkVRU3hEUVVGRUxFVkJLMFJXTzBGQlEwTXNWMEZCVHl4TFFVUlNPMEZCUlVNc1ZVRkJUU3dyUkVGR1VEdEJRVWRETEhGb1FrRklSRHRCUVZsRExHTkJRVlU3UVVGRFRpeGpRVUZOTEUxQlJFRTdRVUZGVGl4alFVRk5PMEZCUmtFN1FVRmFXQ3hEUVM5RVZTeEZRU3RGVmp0QlFVTkRMRmRCUVU4c1RVRkVVanRCUVVWRExGVkJRVTBzWjBWQlJsQTdRVUZIUXl4cFkwRklSRHRCUVZGRExHTkJRVlU3UVVGRFRpeGpRVUZOTEUxQlJFRTdRVUZGVGl4alFVRk5PMEZCUmtFN1FVRlNXQ3hEUVM5RlZTeEZRVEpHVmp0QlFVTkRMRmRCUVU4c1dVRkVVanRCUVVWRExGVkJRVTBzYlVWQlJsQTdRVUZIUXl4NVprRklSRHRCUVdGRExHTkJRVlU3UVVGRFRpeGpRVUZOTEUxQlJFRTdRVUZGVGl4alFVRk5PMEZCUmtFN1FVRmlXQ3hEUVROR1ZTeEZRVFJIVmp0QlFVTkRMRmRCUVU4c1QwRkVVanRCUVVWRExGVkJRVTBzTWtWQlJsQTdRVUZIUXl4cGRrdEJTRVE3UVVFeVEwTXNZMEZCVlR0QlFVTk9MR05CUVUwc1RVRkVRVHRCUVVWT0xHTkJRVTA3UVVGR1FUdEJRVE5EV0N4RFFUVkhWU3hGUVRKS1ZqdEJRVU5ETEZkQlFVOHNZVUZFVWp0QlFVVkRMRlZCUVUwc2QwVkJSbEE3UVVGSFF5dzRZa0ZJUkR0QlFVbERMR05CUVZVN1FVRkRUaXhqUVVGTkxFMUJSRUU3UVVGRlRpeGpRVUZOTzBGQlJrRTdRVUZLV0N4RFFUTktWU3hEUVVGaU96dEJRWEZMUVN4SlFVRkpMRkZCUVZFN1FVRkRVaXhoUVVGVExHbENRVVJFTzBGQlJWSXNaVUZCVnp0QlFVTlFMR1ZCUVU4c2RVSkJSRUU3UVVGRlVDeHBRa0ZCVXl3clEwRkdSanRCUVVkUUxHZENRVUZSTzBGQlEwb3NOa1JCUkVrN1FVRkZTaXhyUWtGQlRUdEJRVVpHTzBGQlNFUTdRVUZHU0N4RFFVRmFPenRCUVZsQkxFbEJRVWtzVDBGQlR6dEJRVU5RTEdWQlFWYzdRVUZEVUN4bFFVRlBMSE5DUVVSQk8wRkJSVkFzYVVKQlFWTXNaMFJCUmtZN1FVRkhVQ3huUWtGQlVUdEJRVU5LTEd0Q1FVRk5MRkZCUkVZN1FVRkZTaXhyUWtGQlRUdEJRVVpHTzBGQlNFUTdRVUZFU2l4RFFVRllPenRCUVZkQkxFbEJRVWtzVTBGQlV6dEJRVU5VTEdOQlFWVXNaMEpCUkVRN08wRkJSMVFzWVVGQlV5eERRVUZETzBGQlEwNHNZMEZCVFN4SlFVUkJPMEZCUlU0c1kwRkJUVHRCUVVaQkxFdEJRVVFzUlVGSFRqdEJRVU5ETEdOQlFVMHNVMEZFVUR0QlFVVkRMR05CUVUwN1FVRkdVQ3hMUVVoTkxFTkJTRUU3TzBGQlYxUXNaMEpCUVZrN1FVRllTQ3hEUVVGaU96dHJRa0ZqWlR0QlFVTllMR0ZCUVZNc1MwRkVSVHRCUVVWWUxGbEJRVkVzU1VGR1J6dEJRVWRZTEdOQlFWVXNUVUZJUXp0QlFVbFlMR05CUVZVN1FVRktReXhET3pzN096czdPenM3TzBGRE1VMW1PenM3TzBGQlJVRTdPenM3T3p0clFrRkZaVHRCUVVOWUxGZEJSRmNzY1VKQlEwUTdRVUZEUml4bFFVRlBMRmxCUVVVc1QwRkJSaXhEUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWXNSVUZCY1VJN1FVRkRiRU1zYjBKQlFWRXNiVUpCUVZFc1RVRkJVaXhEUVVGbExFOUJRWFpDTzBGQlEwZ3NVMEZHVFN4RFFVRlFPMEZCUjBnc1MwRk1UVHRCUVUxUUxGbEJUazhzYzBKQlRVazdRVUZEVUN4bFFVRlBMRmxCUVVVc1QwRkJSaXhEUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWXNSVUZCY1VJN1FVRkRiRU1zYjBKQlFWRXNiVUpCUVZFc1RVRkJVaXhEUVVGbExGRkJRWFpDTzBGQlEwZ3NVMEZHVFN4RFFVRlFPMEZCUjBnc1MwRldUVHRCUVZkUUxHTkJXRThzZDBKQlYwMDdRVUZEVkN4bFFVRlBMRmxCUVVVc1QwRkJSaXhEUVVGVkxGVkJRVU1zVDBGQlJDeEZRVUZWTEUxQlFWWXNSVUZCY1VJN1FVRkRiRU1zYjBKQlFWRXNiVUpCUVZFc1RVRkJVaXhEUVVGbExGVkJRWFpDTzBGQlEwZ3NVMEZHVFN4RFFVRlFPMEZCUjBnN1FVRm1UU3hET3pzN096czdPenM3T3p0QlEwcG1PenM3T3pzN2EwSkJSV1VzVFVGQlRTeFhRVUZPTEVOQlFXdENPMEZCUVVFN1FVRkROMElzYlVKQlJEWkNMRFpDUVVOWU8wRkJRMlFzWlVGQlR6dEJRVU5JTEhkQ1FVRlpPMEZCUkZRc1UwRkJVRHRCUVVkSUxFdEJURFJDTzBGQlRUZENMSEZDUVU0MlFpd3JRa0ZOVkR0QlFVRkJPenRCUVVOb1FpeDVRa0ZCVVN4VlFVRlNMRWRCUVhGQ0xFbEJRWEpDTEVOQlFUQkNMRlZCUVVNc1NVRkJSQ3hGUVVGVk8wRkJRMmhETEd0Q1FVRkxMRkZCUVV3c1EwRkJZenRCUVVOV0xEUkNRVUZaTzBGQlJFWXNZVUZCWkR0QlFVZElMRk5CU2tRN1FVRkxTQ3hMUVZvMFFqdEJRV0UzUWl4VlFXSTJRaXh2UWtGaGNFSTdPMEZCUlV3c1pVRkJVVHRCUVVGQk8wRkJRVUVzWTBGQlVTeFhRVUZWTEZkQlFXeENPMEZCUTFJN1FVRkJRVHRCUVVGQkxHdENRVUZOTEZkQlFWVXNWMEZCYUVJN1FVRkJOa0lzY1VKQlFVc3NTMEZCVEN4RFFVRlhPMEZCUVhoRExHRkJSRkU3UVVGRlVqdEJRVUZCTzBGQlFVRXNhMEpCUVUwc1YwRkJWU3haUVVGb1FqdEJRVU5CTERKRFFVRkhMRmRCUVZVc2EwSkJRV0lzUjBGRVFUdEJRVVZCTERKRFFVRkhMRmRCUVZVc2FVSkJRV0k3UVVGR1FUdEJRVVpSTEZOQlFWSTdRVUZSU0R0QlFYWkNORUlzUTBGQmJFSXNRenM3T3pzN096czdPenM3T3pzN1FVTkdaanM3T3p0QlFVTkJPenM3T3pzN2EwSkJSV1VzVFVGQlRTeFhRVUZPTEVOQlFXdENPMEZCUVVFN1FVRkROMElzYlVKQlJEWkNMRFpDUVVOWU8wRkJRMlFzWlVGQlR6dEJRVU5JTEhGQ1FVRlRPMEZCUTB3c01FSkJRVlVzUlVGRVREdEJRVVZNTEhsQ1FVRlRPMEZCUmtvN1FVRkVUaXhUUVVGUU8wRkJUVWdzUzBGU05FSTdRVUZUTjBJc2NVSkJWRFpDTEN0Q1FWTlVPMEZCUVVFN08wRkJRMmhDTEc5Q1FVRkZMRWRCUVVZc1EwRkJUU3hEUVVOR0xHbENRVUZSTEZGQlFWSXNSVUZFUlN4RlFVVkdMR2xDUVVGUkxFOUJRVklzUlVGR1JTeERRVUZPTEVWQlIwY3NTVUZJU0N4RFFVZFJMRlZCUVVNc1NVRkJSQ3hGUVVGVk8wRkJRMlFzWjBKQlFVa3NWVUZCVlR0QlFVTldMREJDUVVGVkxFdEJRVXNzUTBGQlRDeERRVVJCTzBGQlJWWXNlVUpCUVZNc1MwRkJTeXhEUVVGTU8wRkJSa01zWVVGQlpEdEJRVWxCTEd0Q1FVRkxMRkZCUVV3c1EwRkJZenRCUVVOV0xIbENRVUZUTzBGQlJFTXNZVUZCWkR0QlFVZElMRk5CV0VRN1FVRlpTQ3hMUVhSQ05FSTdRVUYxUWpkQ0xGVkJka0kyUWl4dlFrRjFRbkJDTzBGQlEwd3NXVUZCU1N4VlFVRlZMRVZCUVdRN08wRkJSRXM3UVVGQlFUdEJRVUZCT3p0QlFVRkJPMEZCUjB3c05FUkJRV2xDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRTlCUVZnc1EwRkJiVUlzVDBGQmNFTXNORWRCUVRaRE8wRkJRVUVzYjBKQlFYQkRMRWxCUVc5RE96dEJRVU42UXl4M1FrRkJVU3hKUVVGU0xFTkJRV0U3UVVGQlFUdEJRVUZCTEhOQ1FVRkpMRXRCUVVzc1MwRkJTeXhKUVVGa08wRkJRVzlDTzBGQlFVRTdRVUZCUVN3d1FrRkJSeXhOUVVGTkxFdEJRVXNzU1VGQlpEdEJRVUZ4UWl3MlFrRkJTenRCUVVFeFFqdEJRVUZ3UWl4cFFrRkJZanRCUVVOSU8wRkJURWs3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRlBUQ3hsUVVOSk8wRkJRVUU3UVVGQlFTeGpRVUZMTEZkQlFWVXNkME5CUVdZN1FVRkRTanRCUVVGQk8wRkJRVUVzYTBKQlFVc3NWMEZCVlN4WFFVRm1PMEZCUTBrN1FVRkJRVHRCUVVGQkxITkNRVUZMTEZkQlFWVXNaVUZCWmp0QlFVTkpPMEZCUVVFN1FVRkJRU3d3UWtGQlVTeE5RVUZMTEZGQlFXSXNSVUZCYzBJc1YwRkJWU3g1UWtGQmFFTXNSVUZCTUVRc1pVRkJXU3hWUVVGMFJTeEZRVUZwUml4bFFVRlpMRk5CUVRkR0xFVkJRWFZITEdsQ1FVRmpMRTlCUVhKSUxFVkJRVFpJTEdsQ1FVRmpMRkZCUVROSk8wRkJRMGs3UVVGQlFUdEJRVUZCTERoQ1FVRk5MRmRCUVZVc1UwRkJhRUk3UVVGQlFUdEJRVUZCTEhsQ1FVUktPMEZCUlVrc2MwUkJRVTBzVjBGQlZTeFZRVUZvUWl4SFFVWktPMEZCUjBrc2MwUkJRVTBzVjBGQlZTeFZRVUZvUWl4SFFVaEtPMEZCU1Vrc2MwUkJRVTBzVjBGQlZTeFZRVUZvUWp0QlFVcEtMSEZDUVVSS08wRkJUMGs3UVVGQlFUdEJRVUZCTERCQ1FVRkhMRmRCUVZVc1kwRkJZaXhGUVVFMFFpeE5RVUZMTEVkQlFXcERPMEZCUVhORExEWkNRVUZMTEV0QlFVd3NRMEZCVnl4UFFVRllMRU5CUVcxQ08wRkJRWHBFTzBGQlVFb3NhVUpCUkVvN1FVRlZTVHRCUVVGQk8wRkJRVUVzYzBKQlFVc3NTVUZCUnl4UlFVRlNMRVZCUVdsQ0xGZEJRVlVzTUVKQlFUTkNPMEZCUTBrN1FVRkJRVHRCUVVGQkxEQkNRVUZKTEZkQlFWVXNaMEpCUVdRN1FVRkRRenRCUVVSRU8wRkJSRW83UVVGV1NqdEJRVVJKTEZOQlJFbzdRVUZ4UWtnN1FVRnVSRFJDTEVOQlFXeENMRU03T3pzN096czdPenM3T3p0QlEwaG1PenM3T3pzN2EwSkJSV1VzVlVGQlF5eEpRVUZFTEVWQlFVOHNSMEZCVUN4RlFVRmxPMEZCUXpGQ0xGZEJRVThzV1VGQlJTeFBRVUZHTEVOQlFWVXNWVUZCUXl4UFFVRkVMRVZCUVZVc1RVRkJWaXhGUVVGeFFqdEJRVU5zUXl4WlFVRkpMRTFCUVUwc1NVRkJTU3hOUVVGS0xFTkJRVmNzVlVGQlZTeEpRVUZXTEVkQlFXbENMR1ZCUVRWQ0xFTkJRVlk3UVVGQlFTeFpRVU5KTEZGQlFWRXNUVUZCVFN4SFFVRk9MRWRCUVZrc1QwRkJUeXhSUVVGUUxFTkJRV2RDTEUxQlJIaERPenRCUVVkQkxGbEJRVWtzU1VGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFdEJRV2hDTEVOQlFYTkNMRWRCUVhSQ0xFTkJRVkk3TzBGQlJVRXNaMEpCUVZFc1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkdMRU5CUVc1Q0xFTkJRVW9zUjBGQkswSXNTVUZCZGtNN1FVRkRTQ3hMUVZCTkxFTkJRVkE3UVVGUlNDeERPenM3T3p0QlExaEVPenRCUTBGQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRkRUpCTzBGQlEwRTdRVUZEUVRzN1FVTkdRVHRCUVVOQk96dEJRMFJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBoQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzQkNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzUkNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN08wRkRSRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU51UWtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5LUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOSVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOT1FUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTklRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTTFSRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRUa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU0VFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5RUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3TzBGRFJrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOS1FUdEJRVU5CTzBGQlEwRTdPMEZEUmtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFdrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRGNrVkJPMEZCUTBFN1FVRkRRVHM3UVVOR1FUczdRVU5CUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEYUVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTjZRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRaa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEV2tFN08wRkRRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEV2tFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTm9Ra0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRUa0U3TzBGRFFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5RUVRzN1FVTkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTk9RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5NUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEyaENRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTk9RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVEVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEweEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5NUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMHBCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTllRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRWa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOUVFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOT1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOcVEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOb1FrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUJsS0hRc2JpeHlLWHRtZFc1amRHbHZiaUJ6S0c4c2RTbDdhV1lvSVc1YmIxMHBlMmxtS0NGMFcyOWRLWHQyWVhJZ1lUMTBlWEJsYjJZZ2NtVnhkV2x5WlQwOVhDSm1kVzVqZEdsdmJsd2lKaVp5WlhGMWFYSmxPMmxtS0NGMUppWmhLWEpsZEhWeWJpQmhLRzhzSVRBcE8ybG1LR2twY21WMGRYSnVJR2tvYnl3aE1DazdkbUZ5SUdZOWJtVjNJRVZ5Y205eUtGd2lRMkZ1Ym05MElHWnBibVFnYlc5a2RXeGxJQ2RjSWl0dksxd2lKMXdpS1R0MGFISnZkeUJtTG1OdlpHVTlYQ0pOVDBSVlRFVmZUazlVWDBaUFZVNUVYQ0lzWm4xMllYSWdiRDF1VzI5ZFBYdGxlSEJ2Y25Sek9udDlmVHQwVzI5ZFd6QmRMbU5oYkd3b2JDNWxlSEJ2Y25SekxHWjFibU4wYVc5dUtHVXBlM1poY2lCdVBYUmJiMTFiTVYxYlpWMDdjbVYwZFhKdUlITW9iajl1T21VcGZTeHNMR3d1Wlhod2IzSjBjeXhsTEhRc2JpeHlLWDF5WlhSMWNtNGdibHR2WFM1bGVIQnZjblJ6ZlhaaGNpQnBQWFI1Y0dWdlppQnlaWEYxYVhKbFBUMWNJbVoxYm1OMGFXOXVYQ0ltSm5KbGNYVnBjbVU3Wm05eUtIWmhjaUJ2UFRBN2J6eHlMbXhsYm1kMGFEdHZLeXNwY3loeVcyOWRLVHR5WlhSMWNtNGdjMzBwSWl3aWFXMXdiM0owSUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSjF4eVhHNXBiWEJ2Y25RZ1VtVmhZM1JFVDAwZ1puSnZiU0FuY21WaFkzUXRaRzl0SjF4eVhHNWNjbHh1YVcxd2IzSjBJRWhsWVdSbGNpQm1jbTl0SUNkd2RXSnNhV012Ylc5a2RXeGxMMk52YlcxdmJpOW9aV0ZrWlhJblhISmNibWx0Y0c5eWRDQktkVzFpYjNSeWIyNGdabkp2YlNBbkxpOXRiMlIxYkdVdlpHVjBZV2xzTDJwMWJXSnZkSEp2YmlkY2NseHVhVzF3YjNKMElFUmxkR0ZwYkNCbWNtOXRJQ2N1TDIxdlpIVnNaUzlrWlhSaGFXd3ZhVzVrWlhnblhISmNibWx0Y0c5eWRDQkdiMjkwWlhJZ1puSnZiU0FuY0hWaWJHbGpMMjF2WkhWc1pTOWpiMjF0YjI0dlptOXZkR1Z5SjF4eVhHNWNjbHh1YVcxd2IzSjBJSFZ5YkZCaGNtRnRJR1p5YjIwZ0ozQjFZbXhwWXk5MWRHbHNjeTkxY213dGNHRnlZVzBuWEhKY2JseHlYRzUxY214UVlYSmhiU2duYVdRbktTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hISmNibHgwYkdWMElGQmhaMlVnUFNCU1pXRmpkQzVqY21WaGRHVkRiR0Z6Y3loN1hISmNibHgwWEhSeVpXNWtaWElvS1NCN1hISmNibHgwWEhSY2RISmxkSFZ5YmlBb1hISmNibHgwWEhSY2RGeDBQR1JwZGo1Y2NseHVJQ0FnSUNBZ0lDQThTR1ZoWkdWeUlDOCtYSEpjYmlBZ0lDQWdJQ0FnUEVwMWJXSnZkSEp2YmlCcFpEMTdaR0YwWVgwdlBseHlYRzRnSUNBZ0lDQWdJRHhFWlhSaGFXd2dhV1E5ZTJSaGRHRjlMejVjY2x4dUlDQWdJQ0FnSUNBOFJtOXZkR1Z5SUM4K1hISmNiaUFnSUNBZ0lDQWdQQzlrYVhZK1hISmNibHgwWEhSY2RDbGNjbHh1WEhSY2RIMWNjbHh1WEhSOUtWeHlYRzVjY2x4dVhIUlNaV0ZqZEVSUFRTNXlaVzVrWlhJb1hISmNibHgwWEhROFVHRm5aU0F2UGl4Y2NseHVYSFJjZEdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2RoY0hBbktWeHlYRzVjZENsY2NseHVmU2tpTENKcGJYQnZjblFnVTJWeWRtbGpaU0JtY205dElDY3VMM05sY25acFkyVW5YRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkpsWVdOMExtTnlaV0YwWlVOc1lYTnpLSHRjYmlBZ0lDQm5aWFJKYm1sMGFXRnNVM1JoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNTBaVzUwT2lCY0lsd2lYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1SUNBZ0lHTnZiWEJ2Ym1WdWRFUnBaRTF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdJQ0JUWlhKMmFXTmxMbkpsYm1SbGNrUmhkR0VvZEdocGN5NXdjbTl3Y3k1cFpDa3VkR2hsYmlnb1pHRjBZU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWREb2daR0YwWVM1amIyNTBaVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJSDBzWEc0Z0lDQWdjbVZ1WkdWeUtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemMwNWhiV1U5WENKamIyNTBZV2x1WlhKY0lqNWNiaUFnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnliM2RjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2lZMjlzTFhOdExURXlJR0pzYjJjdGJXRnBibHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNOT1lXMWxQVndpWW14dlp5MXdiM04wWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhvY2lBdlBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WkdsMklHUmhibWRsY205MWMyeDVVMlYwU1c1dVpYSklWRTFNUFh0N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gxOW9kRzFzT2lCMGFHbHpMbk4wWVhSbExtTnZiblJsYm5SY2JpQWdJQ0FnSUNBZ0lDQWdJSDE5UGp3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ0lDQThhSElnTHo1Y2JpQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdLVnh1WEc0Z0lDQWdmVnh1ZlNraUxDSnBiWEJ2Y25RZ1UyVnlkbWxqWlNCbWNtOXRJQ2N1TDNObGNuWnBZMlVuWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZKbFlXTjBMbU55WldGMFpVTnNZWE56S0h0Y2JpQWdJQ0JuWlhSSmJtbDBhV0ZzVTNSaGRHVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFkVzFpYjNSeWIyNUVZWFJoT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHbDBiR1U2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1Z6WXpvZ1hDSmNJaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyYVdWM1RXOXlaVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZVzFsT2lCZ1lDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc0Z0lDQWdZMjl0Y0c5dVpXNTBSR2xrVFc5MWJuUW9LU0I3WEc0Z0lDQWdJQ0FnSUZObGNuWnBZMlV1Y21WdVpHVnlSR0YwWVNoMGFHbHpMbkJ5YjNCekxtbGtLUzUwYUdWdUtDaGtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZEZOMFlYUmxLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JxZFcxaWIzUnliMjVFWVhSaE9pQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQmtZWFJoS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0I5TEZ4dUlDQWdJSEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTk9ZVzFsUFZ3aWFuVnRZbTkwY205dVhDSStYRzRnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM05PWVcxbFBWd2lZMjl1ZEdGcGJtVnlYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQThhREUrYUdWc2JHOHNlM1JvYVhNdWMzUmhkR1V1YW5WdFltOTBjbTl1UkdGMFlTNTBhWFJzWlgwaFBDOW9NVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHdQbnQwYUdsekxuTjBZWFJsTG1wMWJXSnZkSEp2YmtSaGRHRXVaR1Z6WTMwOEwzQStYRzRnSUNBZ0lDQWdJQ0FnSUNBOGNENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZU0JqYkdGemMwNWhiV1U5WENKaWRHNGdZblJ1TFhCeWFXMWhjbmtnWW5SdUxXeG5YQ0lnYUhKbFpqMTdkR2hwY3k1emRHRjBaUzVxZFcxaWIzUnliMjVFWVhSaExuWnBaWGROYjNKbExtaHlaV1o5SUhKdmJHVTlYQ0ppZFhSMGIyNWNJajU3ZEdocGN5NXpkR0YwWlM1cWRXMWliM1J5YjI1RVlYUmhMblpwWlhkTmIzSmxMblJsZUhSOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOWhQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOXdQbHh1SUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnS1Z4dVhHNGdJQ0FnZlZ4dWZTa2lMQ0pwYlhCdmNuUWdRWEJwUkdGMFlTQm1jbTl0SUNkd2RXSnNhV012WkdWdGJ5MWtZWFJoSjF4dVhHNXBiWEJ2Y25RZ1VTQm1jbTl0SUNkeEoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2NtVnVaR1Z5UkdGMFlTaHBaQ0E5SUZ3aVhDSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRkV1VUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NuUnVSR0YwWVNBOUlIdDlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElIWWdiMllnUVhCcFJHRjBZUzVtY21GdFpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RpNTBhWFJzWlNBOVBUMGdhV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblJ1UkdGMFlTQTlJSFpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0hKMGJrUmhkR0VwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dWZWeHVJaXdpYkdWMElHWnlZVzFsY3lBOUlGdDdYRzRnSUNBZ2RHbDBiR1U2SUZ3aVRtOWtaV3B6WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVwNkU1YnU2NVp5b0lFNXZaR1ZLVXlEbG43cmt1bzRnUTJoeWIyMWxJRlk0SU9XOGxlYVRqdWVhaENCS1lYWmhVMk55YVhCMElPaS9rT2loak9lT3IrV2lnKys4ak9XRnR1UzZpK1M3dHVtcHNlV0txT21kbnVtWXUrV2hudWVhaE9lSnVlYUFwKys4ak9hZWdlV0Z0dVcvcSttQW4rZWFoT2U4bHVpdmtlV0pqZWVycitXUWhPZW5qZWkxaE9hNmtGd2lMRnh1SUNBZ0lHTnZiblJsYm5RNklHQThaR2wySUdsa1BWd2lhRzl0WlMxcGJuUnliMXdpUGx4dVhHNGdJQ0FnSUNBZ0lEeHdQazV2WkdVdWFuUENyaUJwY3lCaElFcGhkbUZUWTNKcGNIUWdjblZ1ZEdsdFpTQmlkV2xzZENCdmJpQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OWtaWFpsYkc5d1pYSnpMbWR2YjJkc1pTNWpiMjB2ZGpndlhDSStRMmh5YjIxbEozTWdWamdnU21GMllWTmpjbWx3ZENCbGJtZHBibVU4TDJFK0xseHVUbTlrWlM1cWN5QjFjMlZ6SUdGdUlHVjJaVzUwTFdSeWFYWmxiaXdnYm05dUxXSnNiMk5yYVc1bklFa3ZUeUJ0YjJSbGJDQjBhR0YwSUcxaGEyVnpJR2wwWEc1c2FXZG9kSGRsYVdkb2RDQmhibVFnWldabWFXTnBaVzUwTGlCT2IyUmxMbXB6SnlCd1lXTnJZV2RsSUdWamIzTjVjM1JsYlN3Z1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmQzZDNMbTV3YldwekxtTnZiUzljSWo1dWNHMDhMMkUrTENCcGN5QjBhR1VnYkdGeVoyVnpkQ0JsWTI5emVYTjBaVzBnYjJZZ2IzQmxibHh1YzI5MWNtTmxJR3hwWW5KaGNtbGxjeUJwYmlCMGFHVWdkMjl5YkdRdVBDOXdQbHh1WEc1Y2JseHVJQ0FnSUNBZ0lDQThhRElnYVdROVhDSm9iMjFsTFdSdmQyNXNiMkZrYUdWaFpGd2lJR1JoZEdFdFpHd3RiRzlqWVd3OVhDSkViM2R1Ykc5aFpDQm1iM0pjSWo1RWIzZHViRzloWkNCbWIzSWdiV0ZqVDFNZ0tIZzJOQ2s4TDJneVBseHVYRzRnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKb2IyMWxMV1J2ZDI1c2IyRmtZbXh2WTJ0Y0lqNWNibHh1SUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpHbHpkQzkyTmk0eE1DNHdMMjV2WkdVdGRqWXVNVEF1TUM1d2EyZGNJaUJqYkdGemN6MWNJbWh2YldVdFpHOTNibXh2WVdSaWRYUjBiMjVjSWlCMGFYUnNaVDFjSWtSdmQyNXNiMkZrSUhZMkxqRXdMakFnVEZSVFhDSWdaR0YwWVMxMlpYSnphVzl1UFZ3aWRqWXVNVEF1TUZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnZGpZdU1UQXVNQ0JNVkZOY2JpQWdJQ0FnSUNBZ0lDQWdJRHh6YldGc2JENVNaV052YlcxbGJtUmxaQ0JHYjNJZ1RXOXpkQ0JWYzJWeWN6d3ZjMjFoYkd3K1hHNGdJQ0FnSUNBZ0lDQWdQQzloUGx4dVhHNGdJQ0FnSUNBZ0lDQWdQSFZzSUdOc1lYTnpQVndpYkdsemRDMWthWFpwWkdWeUxYQnBjR1VnYUc5dFpTMXpaV052Ym1SaGNua3RiR2x1YTNOY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmJtOWtaV3B6TG05eVp5OWxiaTlrYjNkdWJHOWhaQzljSWo1UGRHaGxjaUJFYjNkdWJHOWhaSE04TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJ4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyNXZaR1ZxY3k5dWIyUmxMMkpzYjJJdmJXRnpkR1Z5TDJSdll5OWphR0Z1WjJWc2IyZHpMME5JUVU1SFJVeFBSMTlXTmk1dFpDTTJMakV3TGpCY0lqNURhR0Z1WjJWc2IyYzhMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTl1YjJSbGFuTXViM0puTDJScGMzUXZiR0YwWlhOMExYWTJMbmd2Wkc5amN5OWhjR2t2WENJK1FWQkpJRVJ2WTNNOEwyRStYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwyeHBQbHh1SUNBZ0lDQWdJQ0FnSUR3dmRXdytYRzVjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzVjYmlBZ0lDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2lhRzl0WlMxa2IzZHViRzloWkdKc2IyTnJYQ0krWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMjV2WkdWcWN5NXZjbWN2WkdsemRDOTJOeTQzTGpFdmJtOWtaUzEyTnk0M0xqRXVjR3RuWENJZ1kyeGhjM005WENKb2IyMWxMV1J2ZDI1c2IyRmtZblYwZEc5dVhDSWdkR2wwYkdVOVhDSkViM2R1Ykc5aFpDQjJOeTQzTGpFZ1EzVnljbVZ1ZEZ3aUlHUmhkR0V0ZG1WeWMybHZiajFjSW5ZM0xqY3VNVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyTnk0M0xqRWdRM1Z5Y21WdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMyMWhiR3crVEdGMFpYTjBJRVpsWVhSMWNtVnpQQzl6YldGc2JENWNiaUFnSUNBZ0lDQWdJQ0FnSUR3dllUNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1BIVnNJR05zWVhOelBWd2liR2x6ZEMxa2FYWnBaR1Z5TFhCcGNHVWdhRzl0WlMxelpXTnZibVJoY25rdGJHbHVhM05jSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGhJR2h5WldZOVhDSm9kSFJ3Y3pvdkwyNXZaR1ZxY3k1dmNtY3ZaVzR2Wkc5M2JteHZZV1F2WTNWeWNtVnVkQzljSWo1UGRHaGxjaUJFYjNkdWJHOWhaSE04TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDI1dlpHVnFjeTl1YjJSbEwySnNiMkl2YldGemRHVnlMMlJ2WXk5amFHRnVaMlZzYjJkekwwTklRVTVIUlV4UFIxOVdOeTV0WkNNM0xqY3VNVndpUGtOb1lXNW5aV3h2Wnp3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4aElHaHlaV1k5WENKb2RIUndjem92TDI1dlpHVnFjeTV2Y21jdlpHbHpkQzlzWVhSbGMzUXRkamN1ZUM5a2IyTnpMMkZ3YVM5Y0lqNUJVRWtnUkc5amN6d3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNWNiaUFnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQSEErWEc0Z0lDQWdJQ0FnSUNBZ1QzSWdhR0YyWlNCaElHeHZiMnNnWVhRZ2RHaGxJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Ym05a1pXcHpMMHhVVXlOc2RITXRjMk5vWldSMWJHVmNJajVNVkZNZ2MyTm9aV1IxYkdVdVBDOWhQbHh1SUNBZ0lDQWdJQ0E4TDNBK1hHNGdJQ0FnSUNBOEwyUnBkajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0hNNkx5OXViMlJsYW5NdWIzSm5MMXdpWEc0Z0lDQWdmVnh1ZlN3Z2UxeHVJQ0FnSUhScGRHeGxPaUJjSWs1UVRWd2lMRnh1SUNBZ0lHUmxjMk02SUZ3aVJrVmFJT1M5ditlVXFDQk9VRTBnNW82bDVZV2w1WVdvNTVDRDVweUE1YVNuNTVxRTVieUE1cnFRNTVTZjVvQ0I1N083NTd1Zjc3eU01WVczNWFTSDVwZWc2Wm1RNTVxRTVZcWY2SU85NW9tcDViR1Y2SU85NVlxYjc3eU01WSt2NXBXMDVaQ0k1WnU5NlptRjVZbU41cksvNTVxRTVieUE1cnFRNXFHRzVwNjI3N3lNNllDQzVicVU1NTZzNW9HdjVMaUg1WStZNTVxRTVvcUE1cHl2NXB1MDVwdS9YQ0lzWEc0Z0lDQWdZMjl1ZEdWdWREb2dZRHhvTVNCamJHRnpjejFjSW5ScGRHeGxJR1Z0TFdSbFptRjFiSFFnZEhsd1pTMXVaWFYwY21Gc0xURXhYQ0krWEc0Z0lDQWdJQ0FnSUNBZ1FuVnBiR1FnWVcxaGVtbHVaeUIwYUdsdVozTmNiaUFnSUNBZ0lDQWdQQzlvTVQ1Y2JpQWdJQ0FnSUNBZ1BIQWdZMnhoYzNNOVhDSm9OU0JsYlMxa1pXWmhkV3gwSUhSNWNHVXRibVYxZEhKaGJDMHhNU0J3WW5oc1hDSStYRzRnSUNBZ0lDQWdJQ0FnYm5CdElHbHpJSFJvWlNCd1lXTnJZV2RsSUcxaGJtRm5aWElnWm05eUlFcGhkbUZUWTNKcGNIUXVJRVpwYm1Rc0lITm9ZWEpsTENCaGJtUWdjbVYxYzJWY2JpQWdJQ0FnSUNBZ0lDQndZV05yWVdkbGN5QnZaaUJqYjJSbElHWnliMjBnYUhWdVpISmxaSE1nYjJZZ2RHaHZkWE5oYm1SeklHOW1JR1JsZG1Wc2IzQmxjbk1nNG9DVUlHRnVaRnh1SUNBZ0lDQWdJQ0FnSUdGemMyVnRZbXhsSUhSb1pXMGdhVzRnY0c5M1pYSm1kV3dnYm1WM0lIZGhlWE11WEc0Z0lDQWdJQ0FnSUR3dmNENWNiaUFnSUNBZ0lDQWdQR0VnYVdROVhDSnRZV2x1TFdOMFlWd2lJR2h5WldZOVhDSWpjR0Z1WlMxb2IyMWxjR0ZuWlMxd2NtbGphVzVuWENJZ1kyeGhjM005WENKaWRHNGdZblJ1TFdocFoyaHNhV2RvZEMweklHMXliRndpSUdSaGRHRXRaWFpsYm5RdGJtRnRaVDFjSW1odmJXVndZV2RsTFdobGNtOHRZM1JoWENJK1IyVjBJSE4wWVhKMFpXUThMMkUrWUN4Y2JpQWdJQ0IyYVdWM1RXOXlaVG9nZTF4dUlDQWdJQ0FnSUNCMFpYaDBPaUJjSXVhYnRPV2ttdVMvb2VhQnIxd2lMRnh1SUNBZ0lDQWdJQ0JvY21WbU9pQmNJbWgwZEhCek9pOHZkM2QzTG01d2JXcHpMbU52YlM5Y0lseHVJQ0FnSUgxY2JuMHNJSHRjYmlBZ0lDQjBhWFJzWlRvZ1hDSkhkV3h3WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVwVzA1WkNJUjNWc2NPZWFoT1M4bCtXa211YVBrdVM3dHUrOGpPZThsdWl2a2VPQWdlUzhtT1dNbHVXU2pPZTdoT2U3aCtXSmplZXJyK1dramVhZGd1ZWFoT2Fvb2VXZGwrV1BpdW1kbWVhQWdlaTFoT2E2a08rOGpPV1duZWVkZ09XUHIrUzVrT1dFditPQWdlV1R2T2VkZ09Xd2orYWJzdVdFdisrOGpPaUhxdVdLcU9XTWx1V3VqT2FJa09XSmplZXJyK1drcCttSGorbUhqZVdramVXM3BlUzluRndpTEZ4dUlDQWdJR052Ym5SbGJuUTZJR0E4YURFZ1kyeGhjM005WENKb1pXRmthVzVuSUhSbGVIUXRZMlZ1ZEdWeVhDSStRWFYwYjIxaGRHVWdZVzVrSUdWdWFHRnVZMlVnZVc5MWNpQjNiM0pyWm14dmR6d3ZhREUrUEdneUlHTnNZWE56UFZ3aWNHRnlZV2R5WVhCb1hDSStYRzRnSUNBZ0lDQWdJQ0FnWjNWc2NDQnBjeUJoSUhSdmIyeHJhWFFnWm05eUlHRjFkRzl0WVhScGJtY2djR0ZwYm1aMWJDQnZjaUIwYVcxbExXTnZibk4xYldsdVp5QjBZWE5yY3lCcGJpQjViM1Z5SUdSbGRtVnNiM0J0Wlc1MElIZHZjbXRtYkc5M0xDQnpieUI1YjNVZ1kyRnVJSE4wYjNBZ2JXVnpjMmx1WnlCaGNtOTFibVFnWVc1a0lHSjFhV3hrSUhOdmJXVjBhR2x1Wnk1Y2JpQWdJQ0FnSUNBZ1BDOW9NajQ4WkdsMklHTnNZWE56UFZ3aVkzUmhjMXdpUGx4dUlDQWdJQ0FnSUNBZ0lEeGhJR05zWVhOelBWd2lZM1JoY3kxaWRYUjBiMjVjSWlCb2NtVm1QVndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkMWJIQnFjeTluZFd4d0wySnNiMkl2YldGemRHVnlMMlJ2WTNNdloyVjBkR2x1WnkxemRHRnlkR1ZrTG0xa1hDSStSMlYwSUZOMFlYSjBaV1E4TDJFK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUG1Bc1hHNGdJQ0FnZG1sbGQwMXZjbVU2SUh0Y2JpQWdJQ0FnSUNBZ2RHVjRkRG9nWENMbW03VGxwSnJrdjZIbWdhOWNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd09pOHZaM1ZzY0dwekxtTnZiUzljSWx4dUlDQWdJSDFjYm4wc0lIdGNiaUFnSUNCMGFYUnNaVG9nWENKQ2NtOTNjMlZ5YVdaNVhDSXNYRzRnSUNBZ1pHVnpZem9nWENKR1JWb2c1TDIvNTVTb0lFSnliM2R6WlhKcFpua2c1cWloNVoyWDVZeVc1N3VFNTd1SDVaS001NjZoNTVDRzZhRzU1NXV1NTVxRTVaQ0U1TGlxNVlxZjZJTzk1cWloNVoyWDc3eU01cDZCNWFTbjVvK1E1WTJINmFHNTU1dXU1NXFFNVkrdjU3dTA1b3FrNW9DbjQ0Q0I1WXFmNklPOTVhU041NVNvNW9Dbjc3eU01Ym0yNWE2ZTU0Nnc1NmV2NXB5bzVieVA1NXFFNXBDdDVidTY1NzJSNmFHMVhDSXNYRzRnSUNBZ1kyOXVkR1Z1ZERvZ1lEeHpaV04wYVc5dUlHbGtQVndpZEc5d0xXaHZiV1V0YzJWamRHbHZibHdpSUdOc1lYTnpQVndpZEc5d0xYTmxZM1JwYjI0Z1kyOXNiM0l0WVZ3aVBseHVJQ0FnSUNBZ1BHUnBkaUJwWkQxY0luUnZjQzFvYjIxbExXbHRZV2RsWENJK1BDOWthWFkrWEc1Y2JpQWdJQ0FnSUNBOGFETWdhV1E5WENKMGIzQXRjM1ZpZEdsMGJHVmNJaUJqYkdGemN6MWNJbXhoY21kbExXWnZiblJjSWo1Q2NtOTNjMlZ5YVdaNUlHeGxkSE1nZVc5MUlISmxjWFZwY21Vb1BITndZVzRnWTJ4aGMzTTlYQ0pqYjJ4dmNpMWtYQ0krSjIxdlpIVnNaWE1uUEM5emNHRnVQaWtnYVc0Z2RHaGxJR0p5YjNkelpYSWdZbmtnWW5WdVpHeHBibWNnZFhBZ1lXeHNJRzltSUhsdmRYSWdaR1Z3Wlc1a1pXNWphV1Z6TGp3dmFETStYRzRnSUNBZ0lDQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMM04xWW5OMFlXTnJMMjV2WkdVdFluSnZkM05sY21sbWVTTjFjMkZuWlZ3aVBseHVJQ0FnSUNBZ0lDQThZblYwZEc5dUlHTnNZWE56UFZ3aWRHOXdMV0oxZEhSdmJsd2lJR2xrUFZ3aWRHOXdMV0oxZEhSdmJqSmNJajVjYmlBZ0lDQWdJQ0FnSUNCRWIyTjFiV1Z1ZEdGMGFXOXVYRzRnSUNBZ0lDQWdJRHd2WW5WMGRHOXVQbHh1SUNBZ0lDQWdQQzloUGx4dUlDQWdJRHd2YzJWamRHbHZiajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0RvdkwySnliM2R6WlhKcFpua3ViM0puTDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrSnZkMlZ5WENJc1hHNGdJQ0FnWkdWell6b2dYQ0pHUlZvZzVZK3Y2WVdONTcydTVMMi81NVNvSUVKdmQyVnlJT2FRbk9lMG91T0FnZVd1aWVpamhlT0FnZWFidE9hV3NPV1NqT1dOdU9pOXZlV21na3BoZG1GVFkzSnBjSFRqZ0lGRFUxUGt1WXZuc2J2bm1vVG52WkhudTV6b3RZVG11cER2dkl6cGdKcm92NGZvaDZybGlxamxqSmJtczZqbGhhWG1pb0RtbksvbHJvem52bzdvcDZQbGhyUGxwSTNtbllMbm1vVG1vWWJtbnJibGpJWG5ycUhua0licGw2N3BvcGhjSWl4Y2JpQWdJQ0JqYjI1MFpXNTBPaUJnUEdScGRpQmpiR0Z6Y3oxY0ltMWhhVzVjSWo1Y2JqeHdJR05zWVhOelBWd2liR1ZoWkZ3aVBsZGxZaUJ6YVhSbGN5QmhjbVVnYldGa1pTQnZaaUJzYjNSeklHOW1JSFJvYVc1bmN5RGlnSlFnWm5KaGJXVjNiM0pyY3l3Z2JHbGljbUZ5YVdWekxDQmhjM05sZEhNc0lHRnVaQ0IxZEdsc2FYUnBaWE11SUVKdmQyVnlJRzFoYm1GblpYTWdZV3hzSUhSb1pYTmxJSFJvYVc1bmN5Qm1iM0lnZVc5MUxqd3ZjRDVjYmp4d1BrdGxaWEJwYm1jZ2RISmhZMnNnYjJZZ1lXeHNJSFJvWlhObElIQmhZMnRoWjJWeklHRnVaQ0J0WVd0cGJtY2djM1Z5WlNCMGFHVjVJR0Z5WlNCMWNDQjBieUJrWVhSbElDaHZjaUJ6WlhRZ2RHOGdkR2hsSUhOd1pXTnBabWxqSUhabGNuTnBiMjV6SUhsdmRTQnVaV1ZrS1NCcGN5QjBjbWxqYTNrdUlFSnZkMlZ5SUhSdklIUm9aU0J5WlhOamRXVWhQQzl3UGx4dVBIQStRbTkzWlhJZ1kyRnVJRzFoYm1GblpTQmpiMjF3YjI1bGJuUnpJSFJvWVhRZ1kyOXVkR0ZwYmlCSVZFMU1MQ0JEVTFNc0lFcGhkbUZUWTNKcGNIUXNJR1p2Ym5SeklHOXlJR1YyWlc0Z2FXMWhaMlVnWm1sc1pYTXVJRUp2ZDJWeUlHUnZaWE51NG9DWmRDQmpiMjVqWVhSbGJtRjBaU0J2Y2lCdGFXNXBabmtnWTI5a1pTQnZjaUJrYnlCaGJubDBhR2x1WnlCbGJITmxJQzBnYVhRZ2FuVnpkQ0JwYm5OMFlXeHNjeUIwYUdVZ2NtbG5hSFFnZG1WeWMybHZibk1nYjJZZ2RHaGxJSEJoWTJ0aFoyVnpJSGx2ZFNCdVpXVmtJR0Z1WkNCMGFHVnBjaUJrWlhCbGJtUmxibU5wWlhNdVBDOXdQbHh1UEhBK1ZHOGdQR0VnYUhKbFpqMWNJaU5uWlhSMGFXNW5MWE4wWVhKMFpXUmNJajVuWlhRZ2MzUmhjblJsWkR3dllUNHNJRUp2ZDJWeUlIZHZjbXR6SUdKNUlHWmxkR05vYVc1bklHRnVaQ0JwYm5OMFlXeHNhVzVuSUR4aElHaHlaV1k5WENJdmMyVmhjbU5vWENJK2NHRmphMkZuWlhNOEwyRStJR1p5YjIwZ1lXeHNJRzkyWlhJc0lIUmhhMmx1WnlCallYSmxJRzltSUdoMWJuUnBibWNzSUdacGJtUnBibWNzSUdSdmQyNXNiMkZrYVc1bkxDQmhibVFnYzJGMmFXNW5JSFJvWlNCemRIVm1aaUI1YjNYaWdKbHlaU0JzYjI5cmFXNW5JR1p2Y2k0Z1FtOTNaWElnYTJWbGNITWdkSEpoWTJzZ2IyWWdkR2hsYzJVZ2NHRmphMkZuWlhNZ2FXNGdZU0J0WVc1cFptVnpkQ0JtYVd4bExDQThZU0JvY21WbVBWd2lMMlJ2WTNNdlkzSmxZWFJwYm1jdGNHRmphMkZuWlhNdkkySnZkMlZ5YW5OdmJsd2lQanhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2k1cWMyOXVQQzlqYjJSbFBqd3ZZVDR1SUVodmR5QjViM1VnZFhObElEeGhJR2h5WldZOVhDSXZjMlZoY21Ob1hDSStjR0ZqYTJGblpYTThMMkUrSUdseklIVndJSFJ2SUhsdmRTNGdRbTkzWlhJZ2NISnZkbWxrWlhNZ2FHOXZhM01nZEc4Z1ptRmphV3hwZEdGMFpTQjFjMmx1WnlCd1lXTnJZV2RsY3lCcGJpQjViM1Z5SUR4aElHaHlaV1k5WENJdlpHOWpjeTkwYjI5c2Mxd2lQblJ2YjJ4eklHRnVaQ0IzYjNKclpteHZkM004TDJFK0xqd3ZjRDVjYmp4d1BrSnZkMlZ5SUdseklHOXdkR2x0YVhwbFpDQm1iM0lnZEdobElHWnliMjUwTFdWdVpDNGdTV1lnYlhWc2RHbHdiR1VnY0dGamEyRm5aWE1nWkdWd1pXNWtJRzl1SUdFZ2NHRmphMkZuWlNBdElHcFJkV1Z5ZVNCbWIzSWdaWGhoYlhCc1pTQXRJRUp2ZDJWeUlIZHBiR3dnWkc5M2JteHZZV1FnYWxGMVpYSjVJR3AxYzNRZ2IyNWpaUzRnVkdocGN5QnBjeUJyYm05M2JpQmhjeUJoSUdac1lYUWdaR1Z3Wlc1a1pXNWplU0JuY21Gd2FDQmhibVFnYVhRZ2FHVnNjSE1nY21Wa2RXTmxJSEJoWjJVZ2JHOWhaQzQ4TDNBK1hHNDhhRElnYVdROVhDSnBibk4wWVd4c0xXSnZkMlZ5WENJK1BHRWdhSEpsWmoxY0lpTnBibk4wWVd4c0xXSnZkMlZ5WENJZ1kyeGhjM005WENKb1pXRmtaWEl0WVc1amFHOXlYQ0krd3FjOEwyRStTVzV6ZEdGc2JDQkNiM2RsY2p3dmFESStYRzQ4Y0Q1Q2IzZGxjaUJwY3lCaElHTnZiVzFoYm1RZ2JHbHVaU0IxZEdsc2FYUjVMaUJKYm5OMFlXeHNJR2wwSUhkcGRHZ2dibkJ0TGp3dmNENWNianhtYVdkMWNtVWdZMnhoYzNNOVhDSm9hV2RvYkdsbmFIUmNJajQ4Y0hKbFBqeGpiMlJsSUdOc1lYTnpQVndpYkdGdVozVmhaMlV0WW1GemFGd2lJR1JoZEdFdGJHRnVaejFjSW1KaGMyaGNJajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrYm5CdElHbHVjM1JoYkd3Z0xXY2dZbTkzWlhJOEwyTnZaR1UrUEM5d2NtVStQQzltYVdkMWNtVStYRzQ4Y0Q1Q2IzZGxjaUJ5WlhGMWFYSmxjeUE4WVNCb2NtVm1QVndpYUhSMGNEb3ZMMjV2WkdWcWN5NXZjbWN2WENJK2JtOWtaU3dnYm5CdFBDOWhQaUJoYm1RZ1BHRWdhSEpsWmoxY0ltaDBkSEE2THk5bmFYUXRjMk50TG05eVoxd2lQbWRwZER3dllUNHVQQzl3UGx4dVBIQStUR0YwWlhOMElISmxiR1ZoYzJVNklEeGhJR2h5WldZOVhDSmNJajQ4YVcxbklITnlZejFjSW1oMGRIQnpPaTh2YVcxbkxuTm9hV1ZzWkhNdWFXOHZibkJ0TDNZdlltOTNaWEl1YzNablAyMWhlRUZuWlQweU5Ua3lNREF3WENJZ1lXeDBQVndpWW05M1pYSWdkbVZ5YzJsdmJsd2lQand2WVQ0OEwzQStYRzQ4Y0Q1R2IzSWdkSEp2ZFdKc1pYTm9iMjkwYVc1bklHbHVjM1JoYkd4aGRHbHZiaUJ2YmlCa2FXWm1aWEpsYm5RZ2NHeGhkR1p2Y20xekxDQnlaV0ZrSUhSb1pTQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkp2ZDJWeUwySnZkMlZ5TDNkcGEya3ZWSEp2ZFdKc1pYTm9iMjkwYVc1blhDSStkSEp2ZFdKc1pYTm9iMjkwYVc1blBDOWhQaUIzYVd0cElIQmhaMlV1UEM5d1BseHVQR2d5SUdsa1BWd2laMlYwZEdsdVp5MXpkR0Z5ZEdWa1hDSStQR0VnYUhKbFpqMWNJaU5uWlhSMGFXNW5MWE4wWVhKMFpXUmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1SFpYUjBhVzVuSUhOMFlYSjBaV1E4TDJneVBseHVQR2d6SUdsa1BWd2lhVzV6ZEdGc2JDMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqYVc1emRHRnNiQzF3WVdOcllXZGxjMXdpSUdOc1lYTnpQVndpYUdWaFpHVnlMV0Z1WTJodmNsd2lQc0tuUEM5aFBrbHVjM1JoYkd3Z2NHRmphMkZuWlhNOEwyZ3pQbHh1UEhBK1NXNXpkR0ZzYkNCd1lXTnJZV2RsY3lCM2FYUm9JRHhoSUdoeVpXWTlYQ0l2Wkc5amN5OWhjR2tqYVc1emRHRnNiRndpUGp4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVpYjNkbGNpQnBibk4wWVd4c1BDOWpiMlJsUGp3dllUNHVJRUp2ZDJWeUlHbHVjM1JoYkd4eklIQmhZMnRoWjJWeklIUnZJRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2w5amIyMXdiMjVsYm5Sekx6d3ZZMjlrWlQ0dVBDOXdQbHh1UEdacFozVnlaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kRndpUGp4d2NtVStQR052WkdVZ1kyeGhjM005WENKc1lXNW5kV0ZuWlMxaVlYTm9YQ0lnWkdGMFlTMXNZVzVuUFZ3aVltRnphRndpUGp4emNHRnVJR05zWVhOelBWd2laM0JjSWo0a0lEd3ZjM0JoYmo1aWIzZGxjaUJwYm5OMFlXeHNJQ1pzZER0d1lXTnJZV2RsSm1kME96d3ZZMjlrWlQ0OEwzQnlaVDQ4TDJacFozVnlaVDVjYmp4d1BrRWdjR0ZqYTJGblpTQmpZVzRnWW1VZ1lTQkhhWFJJZFdJZ2MyaHZjblJvWVc1a0xDQmhJRWRwZENCbGJtUndiMmx1ZEN3Z1lTQlZVa3dzSUdGdVpDQnRiM0psTGlCU1pXRmtJRzF2Y21VZ1lXSnZkWFFnUEdFZ2FISmxaajFjSWk5a2IyTnpMMkZ3YVM4amFXNXpkR0ZzYkZ3aVBqeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1aWIzZGxjaUJwYm5OMFlXeHNQQzlqYjJSbFBqd3ZZVDR1UEM5d1BseHVQR1pwWjNWeVpTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RGd2lQanh3Y21VK1BHTnZaR1VnWTJ4aGMzTTlYQ0pzWVc1bmRXRm5aUzFpWVhOb1hDSWdaR0YwWVMxc1lXNW5QVndpWW1GemFGd2lQanh6Y0dGdUlHTnNZWE56UFZ3aVkxd2lQaU1nYVc1emRHRnNiSE1nZEdobElIQnliMnBsWTNRZ1pHVndaVzVrWlc1amFXVnpJR3hwYzNSbFpDQnBiaUJpYjNkbGNpNXFjMjl1UEM5emNHRnVQbHh1UEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHeGNianh6Y0dGdUlHTnNZWE56UFZ3aVkxd2lQaU1nY21WbmFYTjBaWEpsWkNCd1lXTnJZV2RsUEM5emNHRnVQbHh1UEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHd2dhbkYxWlhKNVhHNDhjM0JoYmlCamJHRnpjejFjSW1OY0lqNGpJRWRwZEVoMVlpQnphRzl5ZEdoaGJtUThMM053WVc0K1hHNDhjM0JoYmlCamJHRnpjejFjSW1kd1hDSStKQ0E4TDNOd1lXNCtZbTkzWlhJZ2FXNXpkR0ZzYkNCa1pYTmhibVJ5Ynk5dFlYTnZibko1WEc0OGMzQmhiaUJqYkdGemN6MWNJbU5jSWo0aklFZHBkQ0JsYm1Sd2IybHVkRHd2YzNCaGJqNWNianh6Y0dGdUlHTnNZWE56UFZ3aVozQmNJajRrSUR3dmMzQmhiajVpYjNkbGNpQnBibk4wWVd4c0lHZHBkRG92TDJkcGRHaDFZaTVqYjIwdmRYTmxjaTl3WVdOcllXZGxMbWRwZEZ4dVBITndZVzRnWTJ4aGMzTTlYQ0pqWENJK0l5QlZVa3c4TDNOd1lXNCtYRzQ4YzNCaGJpQmpiR0Z6Y3oxY0ltZHdYQ0krSkNBOEwzTndZVzQrWW05M1pYSWdhVzV6ZEdGc2JDQm9kSFJ3T2k4dlpYaGhiWEJzWlM1amIyMHZjMk55YVhCMExtcHpQQzlqYjJSbFBqd3ZjSEpsUGp3dlptbG5kWEpsUGx4dVBHZ3pJR2xrUFZ3aWMyVmhjbU5vTFhCaFkydGhaMlZ6WENJK1BHRWdhSEpsWmoxY0lpTnpaV0Z5WTJndGNHRmphMkZuWlhOY0lpQmpiR0Z6Y3oxY0ltaGxZV1JsY2kxaGJtTm9iM0pjSWo3Q3B6d3ZZVDVUWldGeVkyZ2djR0ZqYTJGblpYTThMMmd6UGx4dVBIQStQR0VnYUhKbFpqMWNJaTl6WldGeVkyaGNJajVUWldGeVkyZ2dRbTkzWlhJZ2NHRmphMkZuWlhNOEwyRStJR0Z1WkNCbWFXNWtJSFJvWlNCeVpXZHBjM1JsY21Wa0lIQmhZMnRoWjJVZ2JtRnRaWE1nWm05eUlIbHZkWElnWm1GMmIzSnBkR1VnY0hKdmFtVmpkSE11UEM5d1BseHVQR2d6SUdsa1BWd2ljMkYyWlMxd1lXTnJZV2RsYzF3aVBqeGhJR2h5WldZOVhDSWpjMkYyWlMxd1lXTnJZV2RsYzF3aUlHTnNZWE56UFZ3aWFHVmhaR1Z5TFdGdVkyaHZjbHdpUHNLblBDOWhQbE5oZG1VZ2NHRmphMkZuWlhNOEwyZ3pQbHh1UEhBK1EzSmxZWFJsSUdFZ1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlMbXB6YjI0OEwyTnZaR1UrSUdacGJHVWdabTl5SUhsdmRYSWdjR0ZqYTJGblpTQjNhWFJvSUR4aElHaHlaV1k5WENJdlpHOWpjeTlqY21WaGRHbHVaeTF3WVdOcllXZGxjeThqWW05M1pYSnFjMjl1WENJK1BHTnZaR1VnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJsY2kxeWIzVm5aVndpUG1KdmQyVnlJR2x1YVhROEwyTnZaR1UrUEM5aFBpNDhMM0ErWEc0OGNENVVhR1Z1SUhOaGRtVWdibVYzSUdSbGNHVnVaR1Z1WTJsbGN5QjBieUI1YjNWeUlEeGpiMlJsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWlhJdGNtOTFaMlZjSWo1aWIzZGxjaTVxYzI5dVBDOWpiMlJsUGlCM2FYUm9JRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2lCcGJuTjBZV3hzSUZCQlEwdEJSMFVnTFMxellYWmxQQzlqYjJSbFBqd3ZjRDVjYmp4b015QnBaRDFjSW5WelpTMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqZFhObExYQmhZMnRoWjJWelhDSWdZMnhoYzNNOVhDSm9aV0ZrWlhJdFlXNWphRzl5WENJK3dxYzhMMkUrVlhObElIQmhZMnRoWjJWelBDOW9NejVjYmp4d1BraHZkeUI1YjNVZ2RYTmxJSEJoWTJ0aFoyVnpJR2x6SUhWd0lIUnZJSGx2ZFM0Z1YyVWdjbVZqYjIxdFpXNWtJSGx2ZFNCMWMyVWdRbTkzWlhJZ2RHOW5aWFJvWlhJZ2QybDBhQ0E4WVNCb2NtVm1QVndpTDJSdlkzTXZkRzl2YkhNdlhDSStSM0oxYm5Rc0lGSmxjWFZwY21WS1V5d2dXV1Z2YldGdUxDQmhibVFnYkc5MGN5QnZaaUJ2ZEdobGNpQjBiMjlzY3p3dllUNGdiM0lnWW5WcGJHUWdlVzkxY2lCdmQyNGdkMjl5YTJac2IzY2dkMmwwYUNBOFlTQm9jbVZtUFZ3aUwyUnZZM012WVhCcEwxd2lQblJvWlNCQlVFazhMMkUrTGlCWmIzVWdZMkZ1SUdGc2MyOGdkWE5sSUhSb1pTQnBibk4wWVd4c1pXUWdjR0ZqYTJGblpYTWdaR2x5WldOMGJIa3NJR3hwYTJVZ2RHaHBjeXdnYVc0Z2RHaGxJR05oYzJVZ2IyWWdQR052WkdVZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSbGNpMXliM1ZuWlZ3aVBtcHhkV1Z5ZVR3dlkyOWtaVDQ2UEM5d1BseHVQR1pwWjNWeVpTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RGd2lQanh3Y21VK1BHTnZaR1VnWTJ4aGMzTTlYQ0pzWVc1bmRXRm5aUzFvZEcxc1hDSWdaR0YwWVMxc1lXNW5QVndpYUhSdGJGd2lQanh6Y0dGdUlHTnNZWE56UFZ3aWJuUmNJajRtYkhRN2MyTnlhWEIwSUR3dmMzQmhiajQ4YzNCaGJpQmpiR0Z6Y3oxY0ltNWhYQ0krYzNKalBUd3ZjM0JoYmo0OGMzQmhiaUJqYkdGemN6MWNJbk5jSWo1Y0ltSnZkMlZ5WDJOdmJYQnZibVZ1ZEhNdmFuRjFaWEo1TDJScGMzUXZhbkYxWlhKNUxtMXBiaTVxYzF3aVBDOXpjR0Z1UGp4emNHRnVJR05zWVhOelBWd2liblJjSWo0bVozUTdKbXgwT3k5elkzSnBjSFFtWjNRN1BDOXpjR0Z1UGp3dlkyOWtaVDQ4TDNCeVpUNDhMMlpwWjNWeVpUNWNianhvTWlCcFpEMWNJblIzYVhSMFpYSXRkWEJrWVhSbGN5MW1jbTl0TFdKdmQyVnlhSFIwY0hOMGQybDBkR1Z5WTI5dFltOTNaWEpjSWo0OFlTQm9jbVZtUFZ3aUkzUjNhWFIwWlhJdGRYQmtZWFJsY3kxbWNtOXRMV0p2ZDJWeWFIUjBjSE4wZDJsMGRHVnlZMjl0WW05M1pYSmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1VWQybDBkR1Z5SUhWd1pHRjBaWE1nWm5KdmJTQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OTBkMmwwZEdWeUxtTnZiUzlpYjNkbGNsd2lQa0JpYjNkbGNqd3ZZVDQ4TDJneVBseHVQSEErUEdFZ1kyeGhjM005WENKMGQybDBkR1Z5TFhScGJXVnNhVzVsWENJZ2FISmxaajFjSW1oMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlltOTNaWEpjSWlCa1lYUmhMWGRwWkdkbGRDMXBaRDFjSWpRNE1ETTNOekk1TVRNMk9UYzFORFl5TlZ3aVBsUjNaV1YwY3lCaWVTQkFZbTkzWlhJOEwyRStYRzQ4TDNBK1hHNWNiand2WkdsMlBtQXNYRzRnSUNBZ2RtbGxkMDF2Y21VNklIdGNiaUFnSUNBZ0lDQWdkR1Y0ZERvZ1hDTG1tN1RscEpya3Y2SG1nYTljSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKb2RIUndjem92TDJKdmQyVnlMbWx2TDF3aVhHNGdJQ0FnZlZ4dWZTd2dlMXh1SUNBZ0lIUnBkR3hsT2lCY0lrSnZjbmR6WlhKVGVXNWpYQ0lzWEc0Z0lDQWdaR1Z6WXpvZ1hDSkdSVm9nNUwyLzU1U29JRUp5YjNkelpYSnplVzVqSU9pdXFlYTFqK2luaU9XWnFPV3VudWFYdHVXL3ErbUFuK2VhaE9XVGplVzZsT1dKamVlcnIrV1FoT2VuamVhV2grUzd0dWVhaE9hYnRPYVV1ZVc1dHVpSHF1V0txT1dJdCthV3NPbWh0ZW1kb3UrOGpPUzZwdVdQcitXdW51YVh0dVdRak9hdHBlV1FoT1M0cXVlN2lPZXJyKys4ak9hUGtPbXJtT2lIcytXd2tUTXdKZWVhaE9XOGdPV1BrZWFWaU9lT2gxd2lMRnh1SUNBZ0lHTnZiblJsYm5RNklHQThhREVnWTJ4aGMzTTlYQ0pvYjI5clhDSStWR2x0WlMxellYWnBibWNnYzNsdVkyaHliMjVwYzJWa0lHSnliM2R6WlhJZ2RHVnpkR2x1Wnk0OEwyZ3hQanh3SUdOc1lYTnpQVndpY205dWMyVmhiRndpUGtsMDRvQ1pjeUIzYVdOclpXUXRabUZ6ZENCaGJtUWdkRzkwWVd4c2VTQm1jbVZsTGp3dmNENDhjQ0JqYkdGemN6MWNJblpwWkdWdlhDSStQR0VnWTJ4aGMzTTlYQ0oyYVdSbGIxOWZiR2x1YTF3aUlHaHlaV1k5WENJalhDSStQQzloUGp3dmNENDhjQ0JqYkdGemN6MWNJbWh2ZHkxMGIxd2lQand2Y0Q0OGNDQmpiR0Z6Y3oxY0ltaHZkeTEwYjE5ZlkyOXRiV0Z1WkZ3aVBtNXdiU0JwYm5OMFlXeHNJQzFuSUdKeWIzZHpaWEl0YzNsdVl6d3ZjRDQ4Y0NCamJHRnpjejFjSW1OMFlWd2lQanhoSUdOc1lYTnpQVndpWW5WMGRHOXVJR0oxZEhSdmJpMHRjSEpwYldGeWVWd2lJR2h5WldZOVhDSWphVzV6ZEdGc2JGd2lJSFJwZEd4bFBWd2lSMlYwSUZOMFlYSjBaV1JjSWo1SFpYUWdVM1JoY25SbFpEd3ZZVDQ4TDNBK1BHUnBkaUJqYkdGemN6MWNJbkJzWVhsbGNsd2lQanh3UGlkaWIyNXFiM1Z5UEM5d1Bqd3ZaR2wyUG1Bc1hHNGdJQ0FnZG1sbGQwMXZjbVU2SUh0Y2JpQWdJQ0FnSUNBZ2RHVjRkRG9nWENMbW03VGxwSnJrdjZIbWdhOWNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd2N6b3ZMMkp5YjNkelpYSnplVzVqTG1sdkwxd2lYRzRnSUNBZ2ZWeHVmVjFjYmx4dWJHVjBJR2x1WkdWNElEMGdlMXh1SUNBZ0lHWmxlbVJsYzJNNklGd2lSa1ZhSU9XSmplZXJyK2Fvb2VXZGwrV01sdVczcGVlb2krVzhnT1dQa2VhaGh1YWV0bHdpTEZ4dUlDQWdJR3AxYldKdmRISnZiam9nZTF4dUlDQWdJQ0FnSUNCMGFYUnNaVG9nWENKSVpXeHNieXdnUmtWYUlFRnVaQ0JTWldGamRDRmNJaXhjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkRG9nWENMb3Y1bm1tSy9rdUlEa3VLcmt2Yi9ubEtnZ1JrVmFJT2FlaE9XN3V1ZWFoT1dKamVlcnIrYW9vZVdkbCtXTWx1VzhnT1dQa2Vla3V1UytpKys4ak9hOGxPZWt1dVM2aHVXZnV1UzZqbEpsWVdOMDVZMlY1cGFINUx1MjU3dUU1THUyNTVxRTVieUE1WStSNTd1VDVwNkU0NENDWENJc1hHNGdJQ0FnSUNBZ0lHSjFkSFJ2YmpvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYm1GdFpUb2dZRHhwSUdOc1lYTnpQVndpWm1FZ1ptRXRaMmwwYUhWaUxXRnNkRndpUGp3dmFUNGdSMmwwU0hWaVlDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdoeVpXWTZJRndpYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJaMWNtbGpMWHBvWVc4dlptVjZYQ0pjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JseHViR1YwSUd4cGMzUWdQU0I3WEc0Z0lDQWdhblZ0WW05MGNtOXVPaUI3WEc0Z0lDQWdJQ0FnSUhScGRHeGxPaUJjSWtaRldpQkJibVFnVW1WaFkzUWdSbkpoYldVaFhDSXNYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUTZJRndpNkwrWjVwaXY1TGlBNUxpcVJrVmE1cFcwNVpDSVVtVmhZM1RubW9UbGlKZm9vYWpsc1pYbnBMcnBvYlh2dkl6b3I3Zm5ncm5saDd2a3VJdnBuYUxsaUpmb29ham5tb1FnUkdWMFlXbHNJT2FNaWVtU3J1aS9tK1dGcGVpdnB1YURoZW1odGVhMWoraW5pRndpTEZ4dUlDQWdJQ0FnSUNCaWRYUjBiMjQ2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklGd2k1cCtsNTV5TDVwdTA1YVNhNUwraDVvR3ZYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltaDBkSEE2THk5bVpYb3VhR1Z6ZEhWa2VTNWpiMjFjSWx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dWZWeHVYRzVzWlhRZ1kyOXRiVzl1SUQwZ2UxeHVJQ0FnSUhOcGRHVk9ZVzFsT2lCY0lrWkZXaUJTWldGamRDQkVSVTFQWENJc1hHNWNiaUFnSUNCdVlYWkVZWFJoT2lCYmUxeHVJQ0FnSUNBZ0lDQnVZVzFsT2lCY0l1bW1sdW1odFZ3aUxGeHVJQ0FnSUNBZ0lDQm9jbVZtT2lCY0ltbHVaR1Y0TG1oMGJXeGNJbHh1SUNBZ0lIMHNJSHRjYmlBZ0lDQWdJQ0FnYm1GdFpUb2dYQ0pHUlZybG43cm1uS3ptbnJibW5vUmNJaXhjYmlBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pzYVhOMExtaDBiV3hjSWx4dUlDQWdJSDFkTEZ4dVhHNGdJQ0FnWm05dmRHVnlWR1Y0ZERvZ1hDTENxU0F5TURFM0lFWkZXaURsaVkzbnE2L21xS0hsblpmbGpKYmx0NlhucUl2bHZJRGxqNUhtb1libW5yWWdRM0psWVhSbFpDQmllU0JHZFhKcFl5NTZhR0Z2WENKY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lGd2lhVzVrWlhoY0lqb2dhVzVrWlhnc1hHNGdJQ0FnWENKc2FYTjBYQ0k2SUd4cGMzUXNYRzRnSUNBZ1hDSm1jbUZ0WlhOY0lqb2dabkpoYldWekxGeHVJQ0FnSUZ3aVkyOXRiVzl1WENJNklHTnZiVzF2Ymx4dWZWeHVJaXdpYVcxd2IzSjBJRkVnWm5KdmJTQW5jU2RjYmx4dWFXMXdiM0owSUVGd2FVUmhkR0VnWm5KdmJTQW5jSFZpYkdsakwyUmxiVzh0WkdGMFlTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHNWhka3hwYzNRb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVVM1UWNtOXRhWE5sS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtFRndhVVJoZEdFdVkyOXRiVzl1TG01aGRrUmhkR0VwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCemFYUmxUbUZ0WlNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb1FYQnBSR0YwWVM1amIyMXRiMjR1YzJsMFpVNWhiV1VwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCbWIyOTBaWEpVWlhoMEtDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZFdVVISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaEJjR2xFWVhSaExtTnZiVzF2Ymk1bWIyOTBaWEpVWlhoMEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUZObGNuWnBZMlVnWm5KdmJTQW5MaTlqYjIxdGIyNG5YRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkpsWVdOMExtTnlaV0YwWlVOc1lYTnpLSHRjYmlBZ0lDQm5aWFJKYm1sMGFXRnNVM1JoZEdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIyOTBaWEpVWlhoME9pQmNJbHdpWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dUlDQWdJR052YlhCdmJtVnVkRVJwWkUxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnSUNCVFpYSjJhV05sTG1admIzUmxjbFJsZUhRb0tTNTBhR1Z1S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRk4wWVhSbEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjkwWlhKVVpYaDBPaUJrWVhSaFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNCOUtWeHVJQ0FnSUgwc1hHNGdJQ0FnY21WdVpHVnlLQ2tnZTF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb1BHWnZiM1JsY2lCamJHRnpjMDVoYldVOVhDSmpiMjUwWVdsdVpYSmNJajVjYmlBZ0lDQWdJQ0FnUEhOd1lXNGdZMnhoYzNOT1lXMWxQVndpY0hWc2JDMXNaV1owWENJK2UzUm9hWE11YzNSaGRHVXVabTl2ZEdWeVZHVjRkSDA4TDNOd1lXNCtYRzRnSUNBZ0lDQWdJRHh6Y0dGdUlHTnNZWE56VG1GdFpUMWNJbkIxYkd3dGNtbG5hSFJjSWo1Y2JpQWdJQ0FnSUNBZ1BHa2dZMnhoYzNOT1lXMWxQVndpYVdOdmJpQnBZMjl1TFhkbGFYaHBibHdpUGp3dmFUNWNiaUFnSUNBZ0lDQWdQR2tnWTJ4aGMzTk9ZVzFsUFZ3aWFXTnZiaUJwWTI5dUxYZGxhV0p2WENJK1BDOXBQbHh1SUNBZ0lEd3ZjM0JoYmo1Y2JpQWdJQ0E4TDJadmIzUmxjajRwWEc1Y2JpQWdJQ0I5WEc1OUtTSXNJbWx0Y0c5eWRDQlRaWEoyYVdObElHWnliMjBnSnk0dlkyOXRiVzl1SjF4dWFXMXdiM0owSUZFZ1puSnZiU0FuY1NkY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVmhZM1F1WTNKbFlYUmxRMnhoYzNNb2UxeHVJQ0FnSUdkbGRFbHVhWFJwWVd4VGRHRjBaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEowYmtSaGRHRTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6YVhSbFRtRnRaVG9nWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZWFpNYVhOME9pQmJYVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNiaUFnSUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZENncElIdGNiaUFnSUNBZ0lDQWdVUzVoYkd3b1cxeHVJQ0FnSUNBZ0lDQWdJQ0FnVTJWeWRtbGpaUzV6YVhSbFRtRnRaU2dwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdVMlZ5ZG1salpTNXVZWFpNYVhOMEtDbGNiaUFnSUNBZ0lDQWdYU2t1ZEdobGJpZ29aR0YwWVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEowYmtSaGRHRWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJsMFpVNWhiV1U2SUdSaGRHRmJNRjBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1GMlRHbHpkRG9nWkdGMFlWc3hYVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblJ1UkdGMFlUb2djblJ1UkdGMFlWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNCOUxGeHVJQ0FnSUhKbGJtUmxjaWdwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzVoZGt4cGMzUWdQU0JiWFZ4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHbDBaVzBnYjJZZ2RHaHBjeTV6ZEdGMFpTNXlkRzVFWVhSaExtNWhka3hwYzNRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc1aGRreHBjM1F1Y0hWemFDZzhiR2tnYTJWNVBYdHBkR1Z0TG01aGJXVjlQanhoSUdoeVpXWTllMmwwWlcwdWFISmxabjArZTJsMFpXMHVibUZ0WlgwOEwyRStQQzlzYVQ0cFhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ1BHNWhkaUJqYkdGemMwNWhiV1U5WENKdVlYWmlZWElnYm1GMlltRnlMV2x1ZG1WeWMyVWdibUYyWW1GeUxXWnBlR1ZrTFhSdmNGd2lQbHh1SUNBZ0lDQWdJQ0E4WkdsMklHTnNZWE56VG1GdFpUMWNJbU52Ym5SaGFXNWxjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjMDVoYldVOVhDSnVZWFppWVhJdGFHVmhaR1Z5WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCMGVYQmxQVndpWW5WMGRHOXVYQ0lnWTJ4aGMzTk9ZVzFsUFZ3aWJtRjJZbUZ5TFhSdloyZHNaU0JqYjJ4c1lYQnpaV1JjSWlCa1lYUmhMWFJ2WjJkc1pUMWNJbU52Ykd4aGNITmxYQ0lnWkdGMFlTMTBZWEpuWlhROVhDSWpibUYyWW1GeVhDSWdZWEpwWVMxbGVIQmhibVJsWkQxY0ltWmhiSE5sWENJZ1lYSnBZUzFqYjI1MGNtOXNjejFjSW01aGRtSmhjbHdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjMDVoYldVOVhDSnpjaTF2Ym14NVhDSStWRzluWjJ4bElHNWhkbWxuWVhScGIyNDhMM053WVc0K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6Y0dGdUlHTnNZWE56VG1GdFpUMWNJbWxqYjI0dFltRnlYQ0krUEM5emNHRnVQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzQmhiaUJqYkdGemMwNWhiV1U5WENKcFkyOXVMV0poY2x3aVBqd3ZjM0JoYmo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE53WVc0Z1kyeGhjM05PWVcxbFBWd2lhV052YmkxaVlYSmNJajQ4TDNOd1lXNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlpZFhSMGIyNCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnWTJ4aGMzTk9ZVzFsUFZ3aWJtRjJZbUZ5TFdKeVlXNWtYQ0lnYUhKbFpqMWNJaTljSWo1N2RHaHBjeTV6ZEdGMFpTNXlkRzVFWVhSaExuTnBkR1ZPWVcxbGZUd3ZZVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1JwZGlCcFpEMWNJbTVoZG1KaGNsd2lJR05zWVhOelRtRnRaVDFjSW1OdmJHeGhjSE5sSUc1aGRtSmhjaTFqYjJ4c1lYQnpaVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6YzA1aGJXVTlYQ0p1WVhZZ2JtRjJZbUZ5TFc1aGRsd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHR1WVhaTWFYTjBmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnUEM5dVlYWStYRzRnSUNBZ0lDQWdJQ2xjYmx4dUlDQWdJSDFjYm4wcElpd2lhVzF3YjNKMElGRWdabkp2YlNBbmNTZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLRzVoYldVc0lIVnliQ2tnUFQ0Z2UxeHVJQ0FnSUhKbGRIVnliaUJSTGxCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WbklEMGdibVYzSUZKbFowVjRjQ2hjSWloZWZDWXBYQ0lnS3lCdVlXMWxJQ3NnWENJOUtGdGVKbDBxS1NnbWZDUXBYQ0lwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbDkwZUhRZ1BTQjFjbXdnUHlCMWNtd2dPaUIzYVc1a2IzY3ViRzlqWVhScGIyNHVjMlZoY21Ob1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUhJZ1BTQnlYM1I0ZEM1emRXSnpkSElvTVNrdWJXRjBZMmdvY21WbktWeHVYRzRnSUNBZ0lDQWdJSEpsYzI5c2RtVW9jaUEvSUdSbFkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoeVd6SmRLU0E2SUc1MWJHd3BYRzRnSUNBZ2ZTbGNibjFjYmlJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2V5QmNJbVJsWm1GMWJIUmNJam9nY21WeGRXbHlaU2hjSW1OdmNtVXRhbk12YkdsaWNtRnllUzltYmk5blpYUXRhWFJsY21GMGIzSmNJaWtzSUY5ZlpYTk5iMlIxYkdVNklIUnlkV1VnZlRzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIc2dYQ0prWldaaGRXeDBYQ0k2SUhKbGNYVnBjbVVvWENKamIzSmxMV3B6TDJ4cFluSmhjbmt2Wm00dmIySnFaV04wTDJGemMybG5ibHdpS1N3Z1gxOWxjMDF2WkhWc1pUb2dkSEoxWlNCOU95SXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVYRzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPMXh1WEc1MllYSWdYMkZ6YzJsbmJpQTlJSEpsY1hWcGNtVW9YQ0l1TGk5amIzSmxMV3B6TDI5aWFtVmpkQzloYzNOcFoyNWNJaWs3WEc1Y2JuWmhjaUJmWVhOemFXZHVNaUE5SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9YMkZ6YzJsbmJpazdYRzVjYm1aMWJtTjBhVzl1SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUW9iMkpxS1NCN0lISmxkSFZ5YmlCdlltb2dKaVlnYjJKcUxsOWZaWE5OYjJSMWJHVWdQeUJ2WW1vZ09pQjdJR1JsWm1GMWJIUTZJRzlpYWlCOU95QjlYRzVjYm1WNGNHOXlkSE11WkdWbVlYVnNkQ0E5SUY5aGMzTnBaMjR5TG1SbFptRjFiSFFnZkh3Z1puVnVZM1JwYjI0Z0tIUmhjbWRsZENrZ2UxeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Uc2dhU0E4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lIWmhjaUJ6YjNWeVkyVWdQU0JoY21kMWJXVnVkSE5iYVYwN1hHNWNiaUFnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYzI5MWNtTmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tITnZkWEpqWlN3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCMFlYSm5aWFJiYTJWNVhTQTlJSE52ZFhKalpWdHJaWGxkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIwWVhKblpYUTdYRzU5T3lJc0luSmxjWFZwY21Vb0p5NHVMMjF2WkhWc1pYTXZkMlZpTG1SdmJTNXBkR1Z5WVdKc1pTY3BPMXh1Y21WeGRXbHlaU2duTGk0dmJXOWtkV3hsY3k5bGN6WXVjM1J5YVc1bkxtbDBaWEpoZEc5eUp5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR1TDIxdlpIVnNaWE12WTI5eVpTNW5aWFF0YVhSbGNtRjBiM0luS1RzaUxDSnlaWEYxYVhKbEtDY3VMaTh1TGk5dGIyUjFiR1Z6TDJWek5pNXZZbXBsWTNRdVlYTnphV2R1SnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHVMeTR1TDIxdlpIVnNaWE12WDJOdmNtVW5LUzVQWW1wbFkzUXVZWE56YVdkdU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQnBaaWgwZVhCbGIyWWdhWFFnSVQwZ0oyWjFibU4wYVc5dUp5bDBhSEp2ZHlCVWVYQmxSWEp5YjNJb2FYUWdLeUFuSUdseklHNXZkQ0JoSUdaMWJtTjBhVzl1SVNjcE8xeHVJQ0J5WlhSMWNtNGdhWFE3WEc1OU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9LWHNnTHlvZ1pXMXdkSGtnS2k4Z2ZUc2lMQ0oyWVhJZ2FYTlBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTlwY3kxdlltcGxZM1FuS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCcFppZ2hhWE5QWW1wbFkzUW9hWFFwS1hSb2NtOTNJRlI1Y0dWRmNuSnZjaWhwZENBcklDY2dhWE1nYm05MElHRnVJRzlpYW1WamRDRW5LVHRjYmlBZ2NtVjBkWEp1SUdsME8xeHVmVHNpTENJdkx5Qm1ZV3h6WlNBdFBpQkJjbkpoZVNOcGJtUmxlRTltWEc0dkx5QjBjblZsSUNBdFBpQkJjbkpoZVNOcGJtTnNkV1JsYzF4dWRtRnlJSFJ2U1U5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x2WW1wbFkzUW5LVnh1SUNBc0lIUnZUR1Z1WjNSb0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXeGxibWQwYUNjcFhHNGdJQ3dnZEc5SmJtUmxlQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0YVc1a1pYZ25LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvU1ZOZlNVNURURlZFUlZNcGUxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9KSFJvYVhNc0lHVnNMQ0JtY205dFNXNWtaWGdwZTF4dUlDQWdJSFpoY2lCUElDQWdJQ0FnUFNCMGIwbFBZbXBsWTNRb0pIUm9hWE1wWEc0Z0lDQWdJQ0FzSUd4bGJtZDBhQ0E5SUhSdlRHVnVaM1JvS0U4dWJHVnVaM1JvS1Z4dUlDQWdJQ0FnTENCcGJtUmxlQ0FnUFNCMGIwbHVaR1Y0S0daeWIyMUpibVJsZUN3Z2JHVnVaM1JvS1Z4dUlDQWdJQ0FnTENCMllXeDFaVHRjYmlBZ0lDQXZMeUJCY25KaGVTTnBibU5zZFdSbGN5QjFjMlZ6SUZOaGJXVldZV3gxWlZwbGNtOGdaWEYxWVd4cGRIa2dZV3huYjNKcGRHaHRYRzRnSUNBZ2FXWW9TVk5mU1U1RFRGVkVSVk1nSmlZZ1pXd2dJVDBnWld3cGQyaHBiR1VvYkdWdVozUm9JRDRnYVc1a1pYZ3BlMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQlBXMmx1WkdWNEt5dGRPMXh1SUNBZ0lDQWdhV1lvZG1Gc2RXVWdJVDBnZG1Gc2RXVXBjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdMeThnUVhKeVlYa2pkRzlKYm1SbGVDQnBaMjV2Y21WeklHaHZiR1Z6TENCQmNuSmhlU05wYm1Oc2RXUmxjeUF0SUc1dmRGeHVJQ0FnSUgwZ1pXeHpaU0JtYjNJb08yeGxibWQwYUNBK0lHbHVaR1Y0T3lCcGJtUmxlQ3NyS1dsbUtFbFRYMGxPUTB4VlJFVlRJSHg4SUdsdVpHVjRJR2x1SUU4cGUxeHVJQ0FnSUNBZ2FXWW9UMXRwYm1SbGVGMGdQVDA5SUdWc0tYSmxkSFZ5YmlCSlUxOUpUa05NVlVSRlV5QjhmQ0JwYm1SbGVDQjhmQ0F3TzF4dUlDQWdJSDBnY21WMGRYSnVJQ0ZKVTE5SlRrTk1WVVJGVXlBbUppQXRNVHRjYmlBZ2ZUdGNibjA3SWl3aUx5OGdaMlYwZEdsdVp5QjBZV2NnWm5KdmJTQXhPUzR4TGpNdU5pQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bktDbGNiblpoY2lCamIyWWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIyWW5LVnh1SUNBc0lGUkJSeUE5SUhKbGNYVnBjbVVvSnk0dlgzZHJjeWNwS0NkMGIxTjBjbWx1WjFSaFp5Y3BYRzRnSUM4dklFVlRNeUIzY205dVp5Qm9aWEpsWEc0Z0lDd2dRVkpISUQwZ1kyOW1LR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUJoY21kMWJXVnVkSE03SUgwb0tTa2dQVDBnSjBGeVozVnRaVzUwY3ljN1hHNWNiaTh2SUdaaGJHeGlZV05ySUdadmNpQkpSVEV4SUZOamNtbHdkQ0JCWTJObGMzTWdSR1Z1YVdWa0lHVnljbTl5WEc1MllYSWdkSEo1UjJWMElEMGdablZ1WTNScGIyNG9hWFFzSUd0bGVTbDdYRzRnSUhSeWVTQjdYRzRnSUNBZ2NtVjBkWEp1SUdsMFcydGxlVjA3WEc0Z0lIMGdZMkYwWTJnb1pTbDdJQzhxSUdWdGNIUjVJQ292SUgxY2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0IyWVhJZ1R5d2dWQ3dnUWp0Y2JpQWdjbVYwZFhKdUlHbDBJRDA5UFNCMWJtUmxabWx1WldRZ1B5QW5WVzVrWldacGJtVmtKeUE2SUdsMElEMDlQU0J1ZFd4c0lEOGdKMDUxYkd3blhHNGdJQ0FnTHk4Z1FFQjBiMU4wY21sdVoxUmhaeUJqWVhObFhHNGdJQ0FnT2lCMGVYQmxiMllnS0ZRZ1BTQjBjbmxIWlhRb1R5QTlJRTlpYW1WamRDaHBkQ2tzSUZSQlJ5a3BJRDA5SUNkemRISnBibWNuSUQ4Z1ZGeHVJQ0FnSUM4dklHSjFhV3gwYVc1VVlXY2dZMkZ6WlZ4dUlDQWdJRG9nUVZKSElEOGdZMjltS0U4cFhHNGdJQ0FnTHk4Z1JWTXpJR0Z5WjNWdFpXNTBjeUJtWVd4c1ltRmphMXh1SUNBZ0lEb2dLRUlnUFNCamIyWW9UeWtwSUQwOUlDZFBZbXBsWTNRbklDWW1JSFI1Y0dWdlppQlBMbU5oYkd4bFpTQTlQU0FuWm5WdVkzUnBiMjRuSUQ4Z0owRnlaM1Z0Wlc1MGN5Y2dPaUJDTzF4dWZUc2lMQ0oyWVhJZ2RHOVRkSEpwYm1jZ1BTQjdmUzUwYjFOMGNtbHVaenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhKbGRIVnliaUIwYjFOMGNtbHVaeTVqWVd4c0tHbDBLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNTlPeUlzSW5aaGNpQmpiM0psSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN2RtVnljMmx2YmpvZ0p6SXVOQzR3SjMwN1hHNXBaaWgwZVhCbGIyWWdYMTlsSUQwOUlDZHVkVzFpWlhJbktWOWZaU0E5SUdOdmNtVTdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRkVzVrWldZaUxDSXZMeUJ2Y0hScGIyNWhiQ0F2SUhOcGJYQnNaU0JqYjI1MFpYaDBJR0pwYm1ScGJtZGNiblpoY2lCaFJuVnVZM1JwYjI0Z1BTQnlaWEYxYVhKbEtDY3VMMTloTFdaMWJtTjBhVzl1SnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHWnVMQ0IwYUdGMExDQnNaVzVuZEdncGUxeHVJQ0JoUm5WdVkzUnBiMjRvWm00cE8xeHVJQ0JwWmloMGFHRjBJRDA5UFNCMWJtUmxabWx1WldRcGNtVjBkWEp1SUdadU8xeHVJQ0J6ZDJsMFkyZ29iR1Z1WjNSb0tYdGNiaUFnSUNCallYTmxJREU2SUhKbGRIVnliaUJtZFc1amRHbHZiaWhoS1h0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtYmk1allXeHNLSFJvWVhRc0lHRXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1kyRnpaU0F5T2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWVN3Z1lpbDdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNHVZMkZzYkNoMGFHRjBMQ0JoTENCaUtUdGNiaUFnSUNCOU8xeHVJQ0FnSUdOaGMyVWdNem9nY21WMGRYSnVJR1oxYm1OMGFXOXVLR0VzSUdJc0lHTXBlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWnVMbU5oYkd3b2RHaGhkQ3dnWVN3Z1lpd2dZeWs3WEc0Z0lDQWdmVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9MeW9nTGk0dVlYSm5jeUFxTHlsN1hHNGdJQ0FnY21WMGRYSnVJR1p1TG1Gd2NHeDVLSFJvWVhRc0lHRnlaM1Z0Wlc1MGN5azdYRzRnSUgwN1hHNTlPeUlzSWk4dklEY3VNaTR4SUZKbGNYVnBjbVZQWW1wbFkzUkRiMlZ5WTJsaWJHVW9ZWEpuZFcxbGJuUXBYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdhV1lvYVhRZ1BUMGdkVzVrWldacGJtVmtLWFJvY205M0lGUjVjR1ZGY25KdmNpaGNJa05oYmlkMElHTmhiR3dnYldWMGFHOWtJRzl1SUNCY0lpQXJJR2wwS1R0Y2JpQWdjbVYwZFhKdUlHbDBPMXh1ZlRzaUxDSXZMeUJVYUdGdWF5ZHpJRWxGT0NCbWIzSWdhR2x6SUdaMWJtNTVJR1JsWm1sdVpWQnliM0JsY25SNVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDRnlaWEYxYVhKbEtDY3VMMTltWVdsc2N5Y3BLR1oxYm1OMGFXOXVLQ2w3WEc0Z0lISmxkSFZ5YmlCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29lMzBzSUNkaEp5d2dlMmRsZERvZ1puVnVZM1JwYjI0b0tYc2djbVYwZFhKdUlEYzdJSDE5S1M1aElDRTlJRGM3WEc1OUtUc2lMQ0oyWVhJZ2FYTlBZbXBsWTNRZ1BTQnlaWEYxYVhKbEtDY3VMMTlwY3kxdlltcGxZM1FuS1Z4dUlDQXNJR1J2WTNWdFpXNTBJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlrdVpHOWpkVzFsYm5SY2JpQWdMeThnYVc0Z2IyeGtJRWxGSUhSNWNHVnZaaUJrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MElHbHpJQ2R2WW1wbFkzUW5YRzRnSUN3Z2FYTWdQU0JwYzA5aWFtVmpkQ2hrYjJOMWJXVnVkQ2tnSmlZZ2FYTlBZbXBsWTNRb1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2s3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR2x6SUQ4Z1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2hwZENrZ09pQjdmVHRjYm4wN0lpd2lMeThnU1VVZ09DMGdaRzl1SjNRZ1pXNTFiU0JpZFdjZ2EyVjVjMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FvWEc0Z0lDZGpiMjV6ZEhKMVkzUnZjaXhvWVhOUGQyNVFjbTl3WlhKMGVTeHBjMUJ5YjNSdmRIbHdaVTltTEhCeWIzQmxjblI1U1hORmJuVnRaWEpoWW14bExIUnZURzlqWVd4bFUzUnlhVzVuTEhSdlUzUnlhVzVuTEhaaGJIVmxUMlluWEc0cExuTndiR2wwS0Njc0p5azdJaXdpZG1GeUlHZHNiMkpoYkNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJkc2IySmhiQ2NwWEc0Z0lDd2dZMjl5WlNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZlkyOXlaU2NwWEc0Z0lDd2dZM1I0SUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZlkzUjRKeWxjYmlBZ0xDQm9hV1JsSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5b2FXUmxKeWxjYmlBZ0xDQlFVazlVVDFSWlVFVWdQU0FuY0hKdmRHOTBlWEJsSnp0Y2JseHVkbUZ5SUNSbGVIQnZjblFnUFNCbWRXNWpkR2x2YmloMGVYQmxMQ0J1WVcxbExDQnpiM1Z5WTJVcGUxeHVJQ0IyWVhJZ1NWTmZSazlTUTBWRUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVJseHVJQ0FnSUN3Z1NWTmZSMHhQUWtGTUlEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVIxeHVJQ0FnSUN3Z1NWTmZVMVJCVkVsRElEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVUxeHVJQ0FnSUN3Z1NWTmZVRkpQVkU4Z0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVVGeHVJQ0FnSUN3Z1NWTmZRa2xPUkNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVFseHVJQ0FnSUN3Z1NWTmZWMUpCVUNBZ0lEMGdkSGx3WlNBbUlDUmxlSEJ2Y25RdVYxeHVJQ0FnSUN3Z1pYaHdiM0owY3lBZ0lEMGdTVk5mUjB4UFFrRk1JRDhnWTI5eVpTQTZJR052Y21WYmJtRnRaVjBnZkh3Z0tHTnZjbVZiYm1GdFpWMGdQU0I3ZlNsY2JpQWdJQ0FzSUdWNGNGQnliM1J2SUNBOUlHVjRjRzl5ZEhOYlVGSlBWRTlVV1ZCRlhWeHVJQ0FnSUN3Z2RHRnlaMlYwSUNBZ0lEMGdTVk5mUjB4UFFrRk1JRDhnWjJ4dlltRnNJRG9nU1ZOZlUxUkJWRWxESUQ4Z1oyeHZZbUZzVzI1aGJXVmRJRG9nS0dkc2IySmhiRnR1WVcxbFhTQjhmQ0I3ZlNsYlVGSlBWRTlVV1ZCRlhWeHVJQ0FnSUN3Z2EyVjVMQ0J2ZDI0c0lHOTFkRHRjYmlBZ2FXWW9TVk5mUjB4UFFrRk1LWE52ZFhKalpTQTlJRzVoYldVN1hHNGdJR1p2Y2loclpYa2dhVzRnYzI5MWNtTmxLWHRjYmlBZ0lDQXZMeUJqYjI1MFlXbHVjeUJwYmlCdVlYUnBkbVZjYmlBZ0lDQnZkMjRnUFNBaFNWTmZSazlTUTBWRUlDWW1JSFJoY21kbGRDQW1KaUIwWVhKblpYUmJhMlY1WFNBaFBUMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lHbG1LRzkzYmlBbUppQnJaWGtnYVc0Z1pYaHdiM0owY3lsamIyNTBhVzUxWlR0Y2JpQWdJQ0F2THlCbGVIQnZjblFnYm1GMGFYWmxJRzl5SUhCaGMzTmxaRnh1SUNBZ0lHOTFkQ0E5SUc5M2JpQS9JSFJoY21kbGRGdHJaWGxkSURvZ2MyOTFjbU5sVzJ0bGVWMDdYRzRnSUNBZ0x5OGdjSEpsZG1WdWRDQm5iRzlpWVd3Z2NHOXNiSFYwYVc5dUlHWnZjaUJ1WVcxbGMzQmhZMlZ6WEc0Z0lDQWdaWGh3YjNKMGMxdHJaWGxkSUQwZ1NWTmZSMHhQUWtGTUlDWW1JSFI1Y0dWdlppQjBZWEpuWlhSYmEyVjVYU0FoUFNBblpuVnVZM1JwYjI0bklEOGdjMjkxY21ObFcydGxlVjFjYmlBZ0lDQXZMeUJpYVc1a0lIUnBiV1Z5Y3lCMGJ5Qm5iRzlpWVd3Z1ptOXlJR05oYkd3Z1puSnZiU0JsZUhCdmNuUWdZMjl1ZEdWNGRGeHVJQ0FnSURvZ1NWTmZRa2xPUkNBbUppQnZkMjRnUHlCamRIZ29iM1YwTENCbmJHOWlZV3dwWEc0Z0lDQWdMeThnZDNKaGNDQm5iRzlpWVd3Z1kyOXVjM1J5ZFdOMGIzSnpJR1p2Y2lCd2NtVjJaVzUwSUdOb1lXNW5aU0IwYUdWdElHbHVJR3hwWW5KaGNubGNiaUFnSUNBNklFbFRYMWRTUVZBZ0ppWWdkR0Z5WjJWMFcydGxlVjBnUFQwZ2IzVjBJRDhnS0daMWJtTjBhVzl1S0VNcGUxeHVJQ0FnSUNBZ2RtRnlJRVlnUFNCbWRXNWpkR2x2YmloaExDQmlMQ0JqS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3lCcGJuTjBZVzVqWlc5bUlFTXBlMXh1SUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ2hoY21kMWJXVnVkSE11YkdWdVozUm9LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnTURvZ2NtVjBkWEp1SUc1bGR5QkRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0F4T2lCeVpYUjFjbTRnYm1WM0lFTW9ZU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURJNklISmxkSFZ5YmlCdVpYY2dReWhoTENCaUtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUhKbGRIVnliaUJ1WlhjZ1F5aGhMQ0JpTENCaktUdGNiaUFnSUNBZ0lDQWdmU0J5WlhSMWNtNGdReTVoY0hCc2VTaDBhR2x6TENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lFWmJVRkpQVkU5VVdWQkZYU0E5SUVOYlVGSlBWRTlVV1ZCRlhUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCR08xeHVJQ0FnSUM4dklHMWhhMlVnYzNSaGRHbGpJSFpsY25OcGIyNXpJR1p2Y2lCd2NtOTBiM1I1Y0dVZ2JXVjBhRzlrYzF4dUlDQWdJSDBwS0c5MWRDa2dPaUJKVTE5UVVrOVVUeUFtSmlCMGVYQmxiMllnYjNWMElEMDlJQ2RtZFc1amRHbHZiaWNnUHlCamRIZ29SblZ1WTNScGIyNHVZMkZzYkN3Z2IzVjBLU0E2SUc5MWREdGNiaUFnSUNBdkx5QmxlSEJ2Y25RZ2NISnZkRzhnYldWMGFHOWtjeUIwYnlCamIzSmxMaVZEVDA1VFZGSlZRMVJQVWlVdWJXVjBhRzlrY3k0bFRrRk5SU1ZjYmlBZ0lDQnBaaWhKVTE5UVVrOVVUeWw3WEc0Z0lDQWdJQ0FvWlhod2IzSjBjeTUyYVhKMGRXRnNJSHg4SUNobGVIQnZjblJ6TG5acGNuUjFZV3dnUFNCN2ZTa3BXMnRsZVYwZ1BTQnZkWFE3WEc0Z0lDQWdJQ0F2THlCbGVIQnZjblFnY0hKdmRHOGdiV1YwYUc5a2N5QjBieUJqYjNKbExpVkRUMDVUVkZKVlExUlBVaVV1Y0hKdmRHOTBlWEJsTGlWT1FVMUZKVnh1SUNBZ0lDQWdhV1lvZEhsd1pTQW1JQ1JsZUhCdmNuUXVVaUFtSmlCbGVIQlFjbTkwYnlBbUppQWhaWGh3VUhKdmRHOWJhMlY1WFNsb2FXUmxLR1Y0Y0ZCeWIzUnZMQ0JyWlhrc0lHOTFkQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1THk4Z2RIbHdaU0JpYVhSdFlYQmNiaVJsZUhCdmNuUXVSaUE5SURFN0lDQWdMeThnWm05eVkyVmtYRzRrWlhod2IzSjBMa2NnUFNBeU95QWdJQzh2SUdkc2IySmhiRnh1SkdWNGNHOXlkQzVUSUQwZ05Ec2dJQ0F2THlCemRHRjBhV05jYmlSbGVIQnZjblF1VUNBOUlEZzdJQ0FnTHk4Z2NISnZkRzljYmlSbGVIQnZjblF1UWlBOUlERTJPeUFnTHk4Z1ltbHVaRnh1SkdWNGNHOXlkQzVYSUQwZ016STdJQ0F2THlCM2NtRndYRzRrWlhod2IzSjBMbFVnUFNBMk5Ec2dJQzh2SUhOaFptVmNiaVJsZUhCdmNuUXVVaUE5SURFeU9Ec2dMeThnY21WaGJDQndjbTkwYnlCdFpYUm9iMlFnWm05eUlHQnNhV0p5WVhKNVlDQmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdKR1Y0Y0c5eWREc2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR1Y0WldNcGUxeHVJQ0IwY25rZ2UxeHVJQ0FnSUhKbGRIVnliaUFoSVdWNFpXTW9LVHRjYmlBZ2ZTQmpZWFJqYUNobEtYdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlZ4dWZUc2lMQ0l2THlCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmVteHZhWEp2WTJzdlkyOXlaUzFxY3k5cGMzTjFaWE12T0RZamFYTnpkV1ZqYjIxdFpXNTBMVEV4TlRjMU9UQXlPRnh1ZG1GeUlHZHNiMkpoYkNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2RIbHdaVzltSUhkcGJtUnZkeUFoUFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VUV0YwYUNBOVBTQk5ZWFJvWEc0Z0lEOGdkMmx1Wkc5M0lEb2dkSGx3Wlc5bUlITmxiR1lnSVQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnYzJWc1ppNU5ZWFJvSUQwOUlFMWhkR2dnUHlCelpXeG1JRG9nUm5WdVkzUnBiMjRvSjNKbGRIVnliaUIwYUdsekp5a29LVHRjYm1sbUtIUjVjR1Z2WmlCZlgyY2dQVDBnSjI1MWJXSmxjaWNwWDE5bklEMGdaMnh2WW1Gc095QXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUc1dkxYVnVaR1ZtSWl3aWRtRnlJR2hoYzA5M2JsQnliM0JsY25SNUlEMGdlMzB1YUdGelQzZHVVSEp2Y0dWeWRIazdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwTENCclpYa3BlMXh1SUNCeVpYUjFjbTRnYUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNocGRDd2dhMlY1S1R0Y2JuMDdJaXdpZG1GeUlHUlFJQ0FnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktWeHVJQ0FzSUdOeVpXRjBaVVJsYzJNZ1BTQnlaWEYxYVhKbEtDY3VMMTl3Y205d1pYSjBlUzFrWlhOakp5azdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dQeUJtZFc1amRHbHZiaWh2WW1wbFkzUXNJR3RsZVN3Z2RtRnNkV1VwZTF4dUlDQnlaWFIxY200Z1pGQXVaaWh2WW1wbFkzUXNJR3RsZVN3Z1kzSmxZWFJsUkdWell5Z3hMQ0IyWVd4MVpTa3BPMXh1ZlNBNklHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2EyVjVMQ0IyWVd4MVpTbDdYRzRnSUc5aWFtVmpkRnRyWlhsZElEMGdkbUZzZFdVN1hHNGdJSEpsZEhWeWJpQnZZbXBsWTNRN1hHNTlPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlrdVpHOWpkVzFsYm5RZ0ppWWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1ME95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdJWEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dKaVlnSVhKbGNYVnBjbVVvSnk0dlgyWmhhV3h6Snlrb1puVnVZM1JwYjI0b0tYdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoeVpYRjFhWEpsS0NjdUwxOWtiMjB0WTNKbFlYUmxKeWtvSjJScGRpY3BMQ0FuWVNjc0lIdG5aWFE2SUdaMWJtTjBhVzl1S0NsN0lISmxkSFZ5YmlBM095QjlmU2t1WVNBaFBTQTNPMXh1ZlNrN0lpd2lMeThnWm1Gc2JHSmhZMnNnWm05eUlHNXZiaTFoY25KaGVTMXNhV3RsSUVWVE15QmhibVFnYm05dUxXVnVkVzFsY21GaWJHVWdiMnhrSUZZNElITjBjbWx1WjNOY2JuWmhjaUJqYjJZZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYjJZbktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdUMkpxWldOMEtDZDZKeWt1Y0hKdmNHVnlkSGxKYzBWdWRXMWxjbUZpYkdVb01Da2dQeUJQWW1wbFkzUWdPaUJtZFc1amRHbHZiaWhwZENsN1hHNGdJSEpsZEhWeWJpQmpiMllvYVhRcElEMDlJQ2RUZEhKcGJtY25JRDhnYVhRdWMzQnNhWFFvSnljcElEb2dUMkpxWldOMEtHbDBLVHRjYm4wN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnYVhRZ1BUMDlJQ2R2WW1wbFkzUW5JRDhnYVhRZ0lUMDlJRzUxYkd3Z09pQjBlWEJsYjJZZ2FYUWdQVDA5SUNkbWRXNWpkR2x2YmljN1hHNTlPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiblpoY2lCamNtVmhkR1VnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxamNtVmhkR1VuS1Z4dUlDQXNJR1JsYzJOeWFYQjBiM0lnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmY0hKdmNHVnlkSGt0WkdWell5Y3BYRzRnSUN3Z2MyVjBWRzlUZEhKcGJtZFVZV2NnUFNCeVpYRjFhWEpsS0NjdUwxOXpaWFF0ZEc4dGMzUnlhVzVuTFhSaFp5Y3BYRzRnSUN3Z1NYUmxjbUYwYjNKUWNtOTBiM1I1Y0dVZ1BTQjdmVHRjYmx4dUx5OGdNalV1TVM0eUxqRXVNU0FsU1hSbGNtRjBiM0pRY205MGIzUjVjR1VsVzBCQWFYUmxjbUYwYjNKZEtDbGNibkpsY1hWcGNtVW9KeTR2WDJocFpHVW5LU2hKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU3dnY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjJsMFpYSmhkRzl5Snlrc0lHWjFibU4wYVc5dUtDbDdJSEpsZEhWeWJpQjBhR2x6T3lCOUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhEYjI1emRISjFZM1J2Y2l3Z1RrRk5SU3dnYm1WNGRDbDdYRzRnSUVOdmJuTjBjblZqZEc5eUxuQnliM1J2ZEhsd1pTQTlJR055WldGMFpTaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTd2dlMjVsZUhRNklHUmxjMk55YVhCMGIzSW9NU3dnYm1WNGRDbDlLVHRjYmlBZ2MyVjBWRzlUZEhKcGJtZFVZV2NvUTI5dWMzUnlkV04wYjNJc0lFNUJUVVVnS3lBbklFbDBaWEpoZEc5eUp5azdYRzU5T3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQk1TVUpTUVZKWklDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMnhwWW5KaGNua25LVnh1SUNBc0lDUmxlSEJ2Y25RZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZaWGh3YjNKMEp5bGNiaUFnTENCeVpXUmxabWx1WlNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzSmxaR1ZtYVc1bEp5bGNiaUFnTENCb2FXUmxJQ0FnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyaHBaR1VuS1Z4dUlDQXNJR2hoY3lBZ0lDQWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYUdGekp5bGNiaUFnTENCSmRHVnlZWFJ2Y25NZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BYRzRnSUN3Z0pHbDBaWEpEY21WaGRHVWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXBkR1Z5TFdOeVpXRjBaU2NwWEc0Z0lDd2djMlYwVkc5VGRISnBibWRVWVdjZ1BTQnlaWEYxYVhKbEtDY3VMMTl6WlhRdGRHOHRjM1J5YVc1bkxYUmhaeWNwWEc0Z0lDd2daMlYwVUhKdmRHOTBlWEJsVDJZZ1BTQnlaWEYxYVhKbEtDY3VMMTl2WW1wbFkzUXRaM0J2SnlsY2JpQWdMQ0JKVkVWU1FWUlBVaUFnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2RwZEdWeVlYUnZjaWNwWEc0Z0lDd2dRbFZIUjFrZ0lDQWdJQ0FnSUNBZ1BTQWhLRnRkTG10bGVYTWdKaVlnSjI1bGVIUW5JR2x1SUZ0ZExtdGxlWE1vS1NrZ0x5OGdVMkZtWVhKcElHaGhjeUJpZFdkbmVTQnBkR1Z5WVhSdmNuTWdkeTl2SUdCdVpYaDBZRnh1SUNBc0lFWkdYMGxVUlZKQlZFOVNJQ0FnSUQwZ0owQkFhWFJsY21GMGIzSW5YRzRnSUN3Z1MwVlpVeUFnSUNBZ0lDQWdJQ0FnUFNBbmEyVjVjeWRjYmlBZ0xDQldRVXhWUlZNZ0lDQWdJQ0FnSUNBOUlDZDJZV3gxWlhNbk8xeHVYRzUyWVhJZ2NtVjBkWEp1VkdocGN5QTlJR1oxYm1OMGFXOXVLQ2w3SUhKbGRIVnliaUIwYUdsek95QjlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0VKaGMyVXNJRTVCVFVVc0lFTnZibk4wY25WamRHOXlMQ0J1WlhoMExDQkVSVVpCVlV4VUxDQkpVMTlUUlZRc0lFWlBVa05GUkNsN1hHNGdJQ1JwZEdWeVEzSmxZWFJsS0VOdmJuTjBjblZqZEc5eUxDQk9RVTFGTENCdVpYaDBLVHRjYmlBZ2RtRnlJR2RsZEUxbGRHaHZaQ0E5SUdaMWJtTjBhVzl1S0d0cGJtUXBlMXh1SUNBZ0lHbG1LQ0ZDVlVkSFdTQW1KaUJyYVc1a0lHbHVJSEJ5YjNSdktYSmxkSFZ5YmlCd2NtOTBiMXRyYVc1a1hUdGNiaUFnSUNCemQybDBZMmdvYTJsdVpDbDdYRzRnSUNBZ0lDQmpZWE5sSUV0RldWTTZJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQnJaWGx6S0NsN0lISmxkSFZ5YmlCdVpYY2dRMjl1YzNSeWRXTjBiM0lvZEdocGN5d2dhMmx1WkNrN0lIMDdYRzRnSUNBZ0lDQmpZWE5sSUZaQlRGVkZVem9nY21WMGRYSnVJR1oxYm1OMGFXOXVJSFpoYkhWbGN5Z3BleUJ5WlhSMWNtNGdibVYzSUVOdmJuTjBjblZqZEc5eUtIUm9hWE1zSUd0cGJtUXBPeUI5TzF4dUlDQWdJSDBnY21WMGRYSnVJR1oxYm1OMGFXOXVJR1Z1ZEhKcFpYTW9LWHNnY21WMGRYSnVJRzVsZHlCRGIyNXpkSEoxWTNSdmNpaDBhR2x6TENCcmFXNWtLVHNnZlR0Y2JpQWdmVHRjYmlBZ2RtRnlJRlJCUnlBZ0lDQWdJQ0FnUFNCT1FVMUZJQ3NnSnlCSmRHVnlZWFJ2Y2lkY2JpQWdJQ0FzSUVSRlJsOVdRVXhWUlZNZ1BTQkVSVVpCVlV4VUlEMDlJRlpCVEZWRlUxeHVJQ0FnSUN3Z1ZrRk1WVVZUWDBKVlJ5QTlJR1poYkhObFhHNGdJQ0FnTENCd2NtOTBieUFnSUNBZ0lEMGdRbUZ6WlM1d2NtOTBiM1I1Y0dWY2JpQWdJQ0FzSUNSdVlYUnBkbVVnSUNBZ1BTQndjbTkwYjF0SlZFVlNRVlJQVWwwZ2ZId2djSEp2ZEc5YlJrWmZTVlJGVWtGVVQxSmRJSHg4SUVSRlJrRlZURlFnSmlZZ2NISnZkRzliUkVWR1FWVk1WRjFjYmlBZ0lDQXNJQ1JrWldaaGRXeDBJQ0FnUFNBa2JtRjBhWFpsSUh4OElHZGxkRTFsZEdodlpDaEVSVVpCVlV4VUtWeHVJQ0FnSUN3Z0pHVnVkSEpwWlhNZ0lDQTlJRVJGUmtGVlRGUWdQeUFoUkVWR1gxWkJURlZGVXlBL0lDUmtaV1poZFd4MElEb2daMlYwVFdWMGFHOWtLQ2RsYm5SeWFXVnpKeWtnT2lCMWJtUmxabWx1WldSY2JpQWdJQ0FzSUNSaGJubE9ZWFJwZG1VZ1BTQk9RVTFGSUQwOUlDZEJjbkpoZVNjZ1B5QndjbTkwYnk1bGJuUnlhV1Z6SUh4OElDUnVZWFJwZG1VZ09pQWtibUYwYVhabFhHNGdJQ0FnTENCdFpYUm9iMlJ6TENCclpYa3NJRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxPMXh1SUNBdkx5QkdhWGdnYm1GMGFYWmxYRzRnSUdsbUtDUmhibmxPWVhScGRtVXBlMXh1SUNBZ0lFbDBaWEpoZEc5eVVISnZkRzkwZVhCbElEMGdaMlYwVUhKdmRHOTBlWEJsVDJZb0pHRnVlVTVoZEdsMlpTNWpZV3hzS0c1bGR5QkNZWE5sS1NrN1hHNGdJQ0FnYVdZb1NYUmxjbUYwYjNKUWNtOTBiM1I1Y0dVZ0lUMDlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXBlMXh1SUNBZ0lDQWdMeThnVTJWMElFQkFkRzlUZEhKcGJtZFVZV2NnZEc4Z2JtRjBhWFpsSUdsMFpYSmhkRzl5YzF4dUlDQWdJQ0FnYzJWMFZHOVRkSEpwYm1kVVlXY29TWFJsY21GMGIzSlFjbTkwYjNSNWNHVXNJRlJCUnl3Z2RISjFaU2s3WEc0Z0lDQWdJQ0F2THlCbWFYZ2dabTl5SUhOdmJXVWdiMnhrSUdWdVoybHVaWE5jYmlBZ0lDQWdJR2xtS0NGTVNVSlNRVkpaSUNZbUlDRm9ZWE1vU1hSbGNtRjBiM0pRY205MGIzUjVjR1VzSUVsVVJWSkJWRTlTS1Nsb2FXUmxLRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxMQ0JKVkVWU1FWUlBVaXdnY21WMGRYSnVWR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUM4dklHWnBlQ0JCY25KaGVTTjdkbUZzZFdWekxDQkFRR2wwWlhKaGRHOXlmUzV1WVcxbElHbHVJRlk0SUM4Z1JrWmNiaUFnYVdZb1JFVkdYMVpCVEZWRlV5QW1KaUFrYm1GMGFYWmxJQ1ltSUNSdVlYUnBkbVV1Ym1GdFpTQWhQVDBnVmtGTVZVVlRLWHRjYmlBZ0lDQldRVXhWUlZOZlFsVkhJRDBnZEhKMVpUdGNiaUFnSUNBa1pHVm1ZWFZzZENBOUlHWjFibU4wYVc5dUlIWmhiSFZsY3lncGV5QnlaWFIxY200Z0pHNWhkR2wyWlM1allXeHNLSFJvYVhNcE95QjlPMXh1SUNCOVhHNGdJQzh2SUVSbFptbHVaU0JwZEdWeVlYUnZjbHh1SUNCcFppZ29JVXhKUWxKQlVsa2dmSHdnUms5U1EwVkVLU0FtSmlBb1FsVkhSMWtnZkh3Z1ZrRk1WVVZUWDBKVlJ5QjhmQ0FoY0hKdmRHOWJTVlJGVWtGVVQxSmRLU2w3WEc0Z0lDQWdhR2xrWlNod2NtOTBieXdnU1ZSRlVrRlVUMUlzSUNSa1pXWmhkV3gwS1R0Y2JpQWdmVnh1SUNBdkx5QlFiSFZuSUdadmNpQnNhV0p5WVhKNVhHNGdJRWwwWlhKaGRHOXljMXRPUVUxRlhTQTlJQ1JrWldaaGRXeDBPMXh1SUNCSmRHVnlZWFJ2Y25OYlZFRkhYU0FnUFNCeVpYUjFjbTVVYUdsek8xeHVJQ0JwWmloRVJVWkJWVXhVS1h0Y2JpQWdJQ0J0WlhSb2IyUnpJRDBnZTF4dUlDQWdJQ0FnZG1Gc2RXVnpPaUFnUkVWR1gxWkJURlZGVXlBL0lDUmtaV1poZFd4MElEb2daMlYwVFdWMGFHOWtLRlpCVEZWRlV5a3NYRzRnSUNBZ0lDQnJaWGx6T2lBZ0lDQkpVMTlUUlZRZ0lDQWdJRDhnSkdSbFptRjFiSFFnT2lCblpYUk5aWFJvYjJRb1MwVlpVeWtzWEc0Z0lDQWdJQ0JsYm5SeWFXVnpPaUFrWlc1MGNtbGxjMXh1SUNBZ0lIMDdYRzRnSUNBZ2FXWW9SazlTUTBWRUtXWnZjaWhyWlhrZ2FXNGdiV1YwYUc5a2N5bDdYRzRnSUNBZ0lDQnBaaWdoS0d0bGVTQnBiaUJ3Y205MGJ5a3BjbVZrWldacGJtVW9jSEp2ZEc4c0lHdGxlU3dnYldWMGFHOWtjMXRyWlhsZEtUdGNiaUFnSUNCOUlHVnNjMlVnSkdWNGNHOXlkQ2drWlhod2IzSjBMbEFnS3lBa1pYaHdiM0owTGtZZ0tpQW9RbFZIUjFrZ2ZId2dWa0ZNVlVWVFgwSlZSeWtzSUU1QlRVVXNJRzFsZEdodlpITXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnRaWFJvYjJSek8xeHVmVHNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dSdmJtVXNJSFpoYkhWbEtYdGNiaUFnY21WMGRYSnVJSHQyWVd4MVpUb2dkbUZzZFdVc0lHUnZibVU2SUNFaFpHOXVaWDA3WEc1OU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMzA3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCMGNuVmxPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiaTh2SURFNUxqRXVNaTR4SUU5aWFtVmpkQzVoYzNOcFoyNG9kR0Z5WjJWMExDQnpiM1Z5WTJVc0lDNHVMaWxjYm5aaGNpQm5aWFJMWlhseklDQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFyWlhsekp5bGNiaUFnTENCblQxQlRJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMW5iM0J6SnlsY2JpQWdMQ0J3U1VVZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxd2FXVW5LVnh1SUNBc0lIUnZUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGIySnFaV04wSnlsY2JpQWdMQ0JKVDJKcVpXTjBJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybHZZbXBsWTNRbktWeHVJQ0FzSUNSaGMzTnBaMjRnSUQwZ1QySnFaV04wTG1GemMybG5ianRjYmx4dUx5OGdjMmh2ZFd4a0lIZHZjbXNnZDJsMGFDQnplVzFpYjJ4eklHRnVaQ0J6YUc5MWJHUWdhR0YyWlNCa1pYUmxjbTFwYm1semRHbGpJSEJ5YjNCbGNuUjVJRzl5WkdWeUlDaFdPQ0JpZFdjcFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlDRWtZWE56YVdkdUlIeDhJSEpsY1hWcGNtVW9KeTR2WDJaaGFXeHpKeWtvWm5WdVkzUnBiMjRvS1h0Y2JpQWdkbUZ5SUVFZ1BTQjdmVnh1SUNBZ0lDd2dRaUE5SUh0OVhHNGdJQ0FnTENCVElEMGdVM2x0WW05c0tDbGNiaUFnSUNBc0lFc2dQU0FuWVdKalpHVm1aMmhwYW10c2JXNXZjSEZ5YzNRbk8xeHVJQ0JCVzFOZElEMGdOenRjYmlBZ1N5NXpjR3hwZENnbkp5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpaHJLWHNnUWx0clhTQTlJR3M3SUgwcE8xeHVJQ0J5WlhSMWNtNGdKR0Z6YzJsbmJpaDdmU3dnUVNsYlUxMGdJVDBnTnlCOGZDQlBZbXBsWTNRdWEyVjVjeWdrWVhOemFXZHVLSHQ5TENCQ0tTa3VhbTlwYmlnbkp5a2dJVDBnU3p0Y2JuMHBJRDhnWm5WdVkzUnBiMjRnWVhOemFXZHVLSFJoY21kbGRDd2djMjkxY21ObEtYc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFiblZ6WldRdGRtRnljMXh1SUNCMllYSWdWQ0FnSUNBZ1BTQjBiMDlpYW1WamRDaDBZWEpuWlhRcFhHNGdJQ0FnTENCaFRHVnVJQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2hjYmlBZ0lDQXNJR2x1WkdWNElEMGdNVnh1SUNBZ0lDd2daMlYwVTNsdFltOXNjeUE5SUdkUFVGTXVabHh1SUNBZ0lDd2dhWE5GYm5WdElDQWdJQ0E5SUhCSlJTNW1PMXh1SUNCM2FHbHNaU2hoVEdWdUlENGdhVzVrWlhncGUxeHVJQ0FnSUhaaGNpQlRJQ0FnSUNBZ1BTQkpUMkpxWldOMEtHRnlaM1Z0Wlc1MGMxdHBibVJsZUNzclhTbGNiaUFnSUNBZ0lDd2dhMlY1Y3lBZ0lEMGdaMlYwVTNsdFltOXNjeUEvSUdkbGRFdGxlWE1vVXlrdVkyOXVZMkYwS0dkbGRGTjViV0p2YkhNb1V5a3BJRG9nWjJWMFMyVjVjeWhUS1Z4dUlDQWdJQ0FnTENCc1pXNW5kR2dnUFNCclpYbHpMbXhsYm1kMGFGeHVJQ0FnSUNBZ0xDQnFJQ0FnSUNBZ1BTQXdYRzRnSUNBZ0lDQXNJR3RsZVR0Y2JpQWdJQ0IzYUdsc1pTaHNaVzVuZEdnZ1BpQnFLV2xtS0dselJXNTFiUzVqWVd4c0tGTXNJR3RsZVNBOUlHdGxlWE5iYWlzclhTa3BWRnRyWlhsZElEMGdVMXRyWlhsZE8xeHVJQ0I5SUhKbGRIVnliaUJVTzF4dWZTQTZJQ1JoYzNOcFoyNDdJaXdpTHk4Z01Ua3VNUzR5TGpJZ0x5QXhOUzR5TGpNdU5TQlBZbXBsWTNRdVkzSmxZWFJsS0U4Z1d5d2dVSEp2Y0dWeWRHbGxjMTBwWEc1MllYSWdZVzVQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWhiaTF2WW1wbFkzUW5LVnh1SUNBc0lHUlFjeUFnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFdSd2N5Y3BYRzRnSUN3Z1pXNTFiVUoxWjB0bGVYTWdQU0J5WlhGMWFYSmxLQ2N1TDE5bGJuVnRMV0oxWnkxclpYbHpKeWxjYmlBZ0xDQkpSVjlRVWs5VVR5QWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzTm9ZWEpsWkMxclpYa25LU2duU1VWZlVGSlBWRThuS1Z4dUlDQXNJRVZ0Y0hSNUlDQWdJQ0FnSUQwZ1puVnVZM1JwYjI0b0tYc2dMeW9nWlcxd2RIa2dLaThnZlZ4dUlDQXNJRkJTVDFSUFZGbFFSU0FnSUQwZ0ozQnliM1J2ZEhsd1pTYzdYRzVjYmk4dklFTnlaV0YwWlNCdlltcGxZM1FnZDJsMGFDQm1ZV3RsSUdCdWRXeHNZQ0J3Y205MGIzUjVjR1U2SUhWelpTQnBabkpoYldVZ1QySnFaV04wSUhkcGRHZ2dZMnhsWVhKbFpDQndjbTkwYjNSNWNHVmNiblpoY2lCamNtVmhkR1ZFYVdOMElEMGdablZ1WTNScGIyNG9LWHRjYmlBZ0x5OGdWR2h5WVhOb0xDQjNZWE4wWlNCaGJtUWdjMjlrYjIxNU9pQkpSU0JIUXlCaWRXZGNiaUFnZG1GeUlHbG1jbUZ0WlNBOUlISmxjWFZwY21Vb0p5NHZYMlJ2YlMxamNtVmhkR1VuS1NnbmFXWnlZVzFsSnlsY2JpQWdJQ0FzSUdrZ0lDQWdJQ0E5SUdWdWRXMUNkV2RMWlhsekxteGxibWQwYUZ4dUlDQWdJQ3dnYkhRZ0lDQWdJRDBnSnp3blhHNGdJQ0FnTENCbmRDQWdJQ0FnUFNBblBpZGNiaUFnSUNBc0lHbG1jbUZ0WlVSdlkzVnRaVzUwTzF4dUlDQnBabkpoYldVdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkdWIyNWxKenRjYmlBZ2NtVnhkV2x5WlNnbkxpOWZhSFJ0YkNjcExtRndjR1Z1WkVOb2FXeGtLR2xtY21GdFpTazdYRzRnSUdsbWNtRnRaUzV6Y21NZ1BTQW5hbUYyWVhOamNtbHdkRG9uT3lBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFhOamNtbHdkQzExY214Y2JpQWdMeThnWTNKbFlYUmxSR2xqZENBOUlHbG1jbUZ0WlM1amIyNTBaVzUwVjJsdVpHOTNMazlpYW1WamREdGNiaUFnTHk4Z2FIUnRiQzV5WlcxdmRtVkRhR2xzWkNocFpuSmhiV1VwTzF4dUlDQnBabkpoYldWRWIyTjFiV1Z1ZENBOUlHbG1jbUZ0WlM1amIyNTBaVzUwVjJsdVpHOTNMbVJ2WTNWdFpXNTBPMXh1SUNCcFpuSmhiV1ZFYjJOMWJXVnVkQzV2Y0dWdUtDazdYRzRnSUdsbWNtRnRaVVJ2WTNWdFpXNTBMbmR5YVhSbEtHeDBJQ3NnSjNOamNtbHdkQ2NnS3lCbmRDQXJJQ2RrYjJOMWJXVnVkQzVHUFU5aWFtVmpkQ2NnS3lCc2RDQXJJQ2N2YzJOeWFYQjBKeUFySUdkMEtUdGNiaUFnYVdaeVlXMWxSRzlqZFcxbGJuUXVZMnh2YzJVb0tUdGNiaUFnWTNKbFlYUmxSR2xqZENBOUlHbG1jbUZ0WlVSdlkzVnRaVzUwTGtZN1hHNGdJSGRvYVd4bEtHa3RMU2xrWld4bGRHVWdZM0psWVhSbFJHbGpkRnRRVWs5VVQxUlpVRVZkVzJWdWRXMUNkV2RMWlhselcybGRYVHRjYmlBZ2NtVjBkWEp1SUdOeVpXRjBaVVJwWTNRb0tUdGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1QySnFaV04wTG1OeVpXRjBaU0I4ZkNCbWRXNWpkR2x2YmlCamNtVmhkR1VvVHl3Z1VISnZjR1Z5ZEdsbGN5bDdYRzRnSUhaaGNpQnlaWE4xYkhRN1hHNGdJR2xtS0U4Z0lUMDlJRzUxYkd3cGUxeHVJQ0FnSUVWdGNIUjVXMUJTVDFSUFZGbFFSVjBnUFNCaGJrOWlhbVZqZENoUEtUdGNiaUFnSUNCeVpYTjFiSFFnUFNCdVpYY2dSVzF3ZEhrN1hHNGdJQ0FnUlcxd2RIbGJVRkpQVkU5VVdWQkZYU0E5SUc1MWJHdzdYRzRnSUNBZ0x5OGdZV1JrSUZ3aVgxOXdjbTkwYjE5ZlhDSWdabTl5SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppQndiMng1Wm1sc2JGeHVJQ0FnSUhKbGMzVnNkRnRKUlY5UVVrOVVUMTBnUFNCUE8xeHVJQ0I5SUdWc2MyVWdjbVZ6ZFd4MElEMGdZM0psWVhSbFJHbGpkQ2dwTzF4dUlDQnlaWFIxY200Z1VISnZjR1Z5ZEdsbGN5QTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2NtVnpkV3gwSURvZ1pGQnpLSEpsYzNWc2RDd2dVSEp2Y0dWeWRHbGxjeWs3WEc1OU8xeHVJaXdpZG1GeUlHRnVUMkpxWldOMElDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZZVzR0YjJKcVpXTjBKeWxjYmlBZ0xDQkpSVGhmUkU5TlgwUkZSa2xPUlNBOUlISmxjWFZwY21Vb0p5NHZYMmxsT0Mxa2IyMHRaR1ZtYVc1bEp5bGNiaUFnTENCMGIxQnlhVzFwZEdsMlpTQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzUnZMWEJ5YVcxcGRHbDJaU2NwWEc0Z0lDd2daRkFnSUNBZ0lDQWdJQ0FnSUNBZ1BTQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGs3WEc1Y2JtVjRjRzl5ZEhNdVppQTlJSEpsY1hWcGNtVW9KeTR2WDJSbGMyTnlhWEIwYjNKekp5a2dQeUJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrZ09pQm1kVzVqZEdsdmJpQmtaV1pwYm1WUWNtOXdaWEowZVNoUExDQlFMQ0JCZEhSeWFXSjFkR1Z6S1h0Y2JpQWdZVzVQWW1wbFkzUW9UeWs3WEc0Z0lGQWdQU0IwYjFCeWFXMXBkR2wyWlNoUUxDQjBjblZsS1R0Y2JpQWdZVzVQWW1wbFkzUW9RWFIwY21saWRYUmxjeWs3WEc0Z0lHbG1LRWxGT0Y5RVQwMWZSRVZHU1U1RktYUnllU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUlFLRThzSUZBc0lFRjBkSEpwWW5WMFpYTXBPMXh1SUNCOUlHTmhkR05vS0dVcGV5QXZLaUJsYlhCMGVTQXFMeUI5WEc0Z0lHbG1LQ2RuWlhRbklHbHVJRUYwZEhKcFluVjBaWE1nZkh3Z0ozTmxkQ2NnYVc0Z1FYUjBjbWxpZFhSbGN5bDBhSEp2ZHlCVWVYQmxSWEp5YjNJb0owRmpZMlZ6YzI5eWN5QnViM1FnYzNWd2NHOXlkR1ZrSVNjcE8xeHVJQ0JwWmlnbmRtRnNkV1VuSUdsdUlFRjBkSEpwWW5WMFpYTXBUMXRRWFNBOUlFRjBkSEpwWW5WMFpYTXVkbUZzZFdVN1hHNGdJSEpsZEhWeWJpQlBPMXh1ZlRzaUxDSjJZWElnWkZBZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdFpIQW5LVnh1SUNBc0lHRnVUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmWVc0dGIySnFaV04wSnlsY2JpQWdMQ0JuWlhSTFpYbHpJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxclpYbHpKeWs3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWZaR1Z6WTNKcGNIUnZjbk1uS1NBL0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBhV1Z6SURvZ1puVnVZM1JwYjI0Z1pHVm1hVzVsVUhKdmNHVnlkR2xsY3loUExDQlFjbTl3WlhKMGFXVnpLWHRjYmlBZ1lXNVBZbXBsWTNRb1R5azdYRzRnSUhaaGNpQnJaWGx6SUNBZ1BTQm5aWFJMWlhsektGQnliM0JsY25ScFpYTXBYRzRnSUNBZ0xDQnNaVzVuZEdnZ1BTQnJaWGx6TG14bGJtZDBhRnh1SUNBZ0lDd2dhU0E5SURCY2JpQWdJQ0FzSUZBN1hHNGdJSGRvYVd4bEtHeGxibWQwYUNBK0lHa3BaRkF1WmloUExDQlFJRDBnYTJWNWMxdHBLeXRkTENCUWNtOXdaWEowYVdWelcxQmRLVHRjYmlBZ2NtVjBkWEp1SUU4N1hHNTlPeUlzSW1WNGNHOXlkSE11WmlBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITTdJaXdpTHk4Z01Ua3VNUzR5TGprZ0x5QXhOUzR5TGpNdU1pQlBZbXBsWTNRdVoyVjBVSEp2ZEc5MGVYQmxUMllvVHlsY2JuWmhjaUJvWVhNZ0lDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmhoY3ljcFhHNGdJQ3dnZEc5UFltcGxZM1FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxdlltcGxZM1FuS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0xXdGxlU2NwS0NkSlJWOVFVazlVVHljcFhHNGdJQ3dnVDJKcVpXTjBVSEp2ZEc4Z1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmlCOGZDQm1kVzVqZEdsdmJpaFBLWHRjYmlBZ1R5QTlJSFJ2VDJKcVpXTjBLRThwTzF4dUlDQnBaaWhvWVhNb1R5d2dTVVZmVUZKUFZFOHBLWEpsZEhWeWJpQlBXMGxGWDFCU1QxUlBYVHRjYmlBZ2FXWW9kSGx3Wlc5bUlFOHVZMjl1YzNSeWRXTjBiM0lnUFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJQSUdsdWMzUmhibU5sYjJZZ1R5NWpiMjV6ZEhKMVkzUnZjaWw3WEc0Z0lDQWdjbVYwZFhKdUlFOHVZMjl1YzNSeWRXTjBiM0l1Y0hKdmRHOTBlWEJsTzF4dUlDQjlJSEpsZEhWeWJpQlBJR2x1YzNSaGJtTmxiMllnVDJKcVpXTjBJRDhnVDJKcVpXTjBVSEp2ZEc4Z09pQnVkV3hzTzF4dWZUc2lMQ0oyWVhJZ2FHRnpJQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWxjYmlBZ0xDQjBiMGxQWW1wbFkzUWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOTBieTFwYjJKcVpXTjBKeWxjYmlBZ0xDQmhjbkpoZVVsdVpHVjRUMllnUFNCeVpYRjFhWEpsS0NjdUwxOWhjbkpoZVMxcGJtTnNkV1JsY3ljcEtHWmhiSE5sS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM05vWVhKbFpDMXJaWGtuS1NnblNVVmZVRkpQVkU4bktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJRzVoYldWektYdGNiaUFnZG1GeUlFOGdJQ0FnSUNBOUlIUnZTVTlpYW1WamRDaHZZbXBsWTNRcFhHNGdJQ0FnTENCcElDQWdJQ0FnUFNBd1hHNGdJQ0FnTENCeVpYTjFiSFFnUFNCYlhWeHVJQ0FnSUN3Z2EyVjVPMXh1SUNCbWIzSW9hMlY1SUdsdUlFOHBhV1lvYTJWNUlDRTlJRWxGWDFCU1QxUlBLV2hoY3loUExDQnJaWGtwSUNZbUlISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJQzh2SUVSdmJpZDBJR1Z1ZFcwZ1luVm5JQ1lnYUdsa1pHVnVJR3RsZVhOY2JpQWdkMmhwYkdVb2JtRnRaWE11YkdWdVozUm9JRDRnYVNscFppaG9ZWE1vVHl3Z2EyVjVJRDBnYm1GdFpYTmJhU3NyWFNrcGUxeHVJQ0FnSUg1aGNuSmhlVWx1WkdWNFQyWW9jbVZ6ZFd4MExDQnJaWGtwSUh4OElISmxjM1ZzZEM1d2RYTm9LR3RsZVNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4wN0lpd2lMeThnTVRrdU1TNHlMakUwSUM4Z01UVXVNaTR6TGpFMElFOWlhbVZqZEM1clpYbHpLRThwWEc1MllYSWdKR3RsZVhNZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdGEyVjVjeTFwYm5SbGNtNWhiQ2NwWEc0Z0lDd2daVzUxYlVKMVowdGxlWE1nUFNCeVpYRjFhWEpsS0NjdUwxOWxiblZ0TFdKMVp5MXJaWGx6SnlrN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdUMkpxWldOMExtdGxlWE1nZkh3Z1puVnVZM1JwYjI0Z2EyVjVjeWhQS1h0Y2JpQWdjbVYwZFhKdUlDUnJaWGx6S0U4c0lHVnVkVzFDZFdkTFpYbHpLVHRjYm4wN0lpd2laWGh3YjNKMGN5NW1JRDBnZTMwdWNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVTdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhpYVhSdFlYQXNJSFpoYkhWbEtYdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQmxiblZ0WlhKaFlteGxJQ0E2SUNFb1ltbDBiV0Z3SUNZZ01Ta3NYRzRnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUFoS0dKcGRHMWhjQ0FtSURJcExGeHVJQ0FnSUhkeWFYUmhZbXhsSUNBZ0lEb2dJU2hpYVhSdFlYQWdKaUEwS1N4Y2JpQWdJQ0IyWVd4MVpTQWdJQ0FnSUNBNklIWmhiSFZsWEc0Z0lIMDdYRzU5T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcE95SXNJblpoY2lCa1pXWWdQU0J5WlhGMWFYSmxLQ2N1TDE5dlltcGxZM1F0WkhBbktTNW1YRzRnSUN3Z2FHRnpJRDBnY21WeGRXbHlaU2duTGk5ZmFHRnpKeWxjYmlBZ0xDQlVRVWNnUFNCeVpYRjFhWEpsS0NjdUwxOTNhM01uS1NnbmRHOVRkSEpwYm1kVVlXY25LVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDd2dkR0ZuTENCemRHRjBLWHRjYmlBZ2FXWW9hWFFnSmlZZ0lXaGhjeWhwZENBOUlITjBZWFFnUHlCcGRDQTZJR2wwTG5CeWIzUnZkSGx3WlN3Z1ZFRkhLU2xrWldZb2FYUXNJRlJCUnl3Z2UyTnZibVpwWjNWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIUmhaMzBwTzF4dWZUc2lMQ0oyWVhJZ2MyaGhjbVZrSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0p5a29KMnRsZVhNbktWeHVJQ0FzSUhWcFpDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzVnBaQ2NwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloclpYa3BlMXh1SUNCeVpYUjFjbTRnYzJoaGNtVmtXMnRsZVYwZ2ZId2dLSE5vWVhKbFpGdHJaWGxkSUQwZ2RXbGtLR3RsZVNrcE8xeHVmVHNpTENKMllYSWdaMnh2WW1Gc0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWxjYmlBZ0xDQlRTRUZTUlVRZ1BTQW5YMTlqYjNKbExXcHpYM05vWVhKbFpGOWZKMXh1SUNBc0lITjBiM0psSUNBOUlHZHNiMkpoYkZ0VFNFRlNSVVJkSUh4OElDaG5iRzlpWVd4YlUwaEJVa1ZFWFNBOUlIdDlLVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYTJWNUtYdGNiaUFnY21WMGRYSnVJSE4wYjNKbFcydGxlVjBnZkh3Z0tITjBiM0psVzJ0bGVWMGdQU0I3ZlNrN1hHNTlPeUlzSW5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCa1pXWnBibVZrSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc0dkx5QjBjblZsSUNBdFBpQlRkSEpwYm1jallYUmNiaTh2SUdaaGJITmxJQzArSUZOMGNtbHVaeU5qYjJSbFVHOXBiblJCZEZ4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloVVQxOVRWRkpKVGtjcGUxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9kR2hoZEN3Z2NHOXpLWHRjYmlBZ0lDQjJZWElnY3lBOUlGTjBjbWx1Wnloa1pXWnBibVZrS0hSb1lYUXBLVnh1SUNBZ0lDQWdMQ0JwSUQwZ2RHOUpiblJsWjJWeUtIQnZjeWxjYmlBZ0lDQWdJQ3dnYkNBOUlITXViR1Z1WjNSb1hHNGdJQ0FnSUNBc0lHRXNJR0k3WEc0Z0lDQWdhV1lvYVNBOElEQWdmSHdnYVNBK1BTQnNLWEpsZEhWeWJpQlVUMTlUVkZKSlRrY2dQeUFuSnlBNklIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCaElEMGdjeTVqYUdGeVEyOWtaVUYwS0drcE8xeHVJQ0FnSUhKbGRIVnliaUJoSUR3Z01IaGtPREF3SUh4OElHRWdQaUF3ZUdSaVptWWdmSHdnYVNBcklERWdQVDA5SUd3Z2ZId2dLR0lnUFNCekxtTm9ZWEpEYjJSbFFYUW9hU0FySURFcEtTQThJREI0WkdNd01DQjhmQ0JpSUQ0Z01IaGtabVptWEc0Z0lDQWdJQ0EvSUZSUFgxTlVVa2xPUnlBL0lITXVZMmhoY2tGMEtHa3BJRG9nWVZ4dUlDQWdJQ0FnT2lCVVQxOVRWRkpKVGtjZ1B5QnpMbk5zYVdObEtHa3NJR2tnS3lBeUtTQTZJQ2hoSUMwZ01IaGtPREF3SUR3OElERXdLU0FySUNoaUlDMGdNSGhrWXpBd0tTQXJJREI0TVRBd01EQTdYRzRnSUgwN1hHNTlPeUlzSW5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCdFlYZ2dJQ0FnSUNBZ1BTQk5ZWFJvTG0xaGVGeHVJQ0FzSUcxcGJpQWdJQ0FnSUNBOUlFMWhkR2d1YldsdU8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBibVJsZUN3Z2JHVnVaM1JvS1h0Y2JpQWdhVzVrWlhnZ1BTQjBiMGx1ZEdWblpYSW9hVzVrWlhncE8xeHVJQ0J5WlhSMWNtNGdhVzVrWlhnZ1BDQXdJRDhnYldGNEtHbHVaR1Y0SUNzZ2JHVnVaM1JvTENBd0tTQTZJRzFwYmlocGJtUmxlQ3dnYkdWdVozUm9LVHRjYm4wN0lpd2lMeThnTnk0eExqUWdWRzlKYm5SbFoyVnlYRzUyWVhJZ1kyVnBiQ0FnUFNCTllYUm9MbU5sYVd4Y2JpQWdMQ0JtYkc5dmNpQTlJRTFoZEdndVpteHZiM0k3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR2x6VG1GT0tHbDBJRDBnSzJsMEtTQS9JREFnT2lBb2FYUWdQaUF3SUQ4Z1pteHZiM0lnT2lCalpXbHNLU2hwZENrN1hHNTlPeUlzSWk4dklIUnZJR2x1WkdWNFpXUWdiMkpxWldOMExDQjBiMDlpYW1WamRDQjNhWFJvSUdaaGJHeGlZV05ySUdadmNpQnViMjR0WVhKeVlYa3RiR2xyWlNCRlV6TWdjM1J5YVc1bmMxeHVkbUZ5SUVsUFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwxOXBiMkpxWldOMEp5bGNiaUFnTENCa1pXWnBibVZrSUQwZ2NtVnhkV2x5WlNnbkxpOWZaR1ZtYVc1bFpDY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJSEpsZEhWeWJpQkpUMkpxWldOMEtHUmxabWx1WldRb2FYUXBLVHRjYm4wN0lpd2lMeThnTnk0eExqRTFJRlJ2VEdWdVozUm9YRzUyWVhJZ2RHOUpiblJsWjJWeUlEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGFXNTBaV2RsY2ljcFhHNGdJQ3dnYldsdUlDQWdJQ0FnSUQwZ1RXRjBhQzV0YVc0N1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2NtVjBkWEp1SUdsMElENGdNQ0EvSUcxcGJpaDBiMGx1ZEdWblpYSW9hWFFwTENBd2VERm1abVptWm1abVptWm1abVptS1NBNklEQTdJQzh2SUhCdmR5Z3lMQ0ExTXlrZ0xTQXhJRDA5SURrd01EY3hPVGt5TlRRM05EQTVPVEZjYm4wN0lpd2lMeThnTnk0eExqRXpJRlJ2VDJKcVpXTjBLR0Z5WjNWdFpXNTBLVnh1ZG1GeUlHUmxabWx1WldRZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDaGtaV1pwYm1Wa0tHbDBLU2s3WEc1OU95SXNJaTh2SURjdU1TNHhJRlJ2VUhKcGJXbDBhWFpsS0dsdWNIVjBJRnNzSUZCeVpXWmxjbkpsWkZSNWNHVmRLVnh1ZG1GeUlHbHpUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTlmYVhNdGIySnFaV04wSnlrN1hHNHZMeUJwYm5OMFpXRmtJRzltSUhSb1pTQkZVellnYzNCbFl5QjJaWEp6YVc5dUxDQjNaU0JrYVdSdUozUWdhVzF3YkdWdFpXNTBJRUJBZEc5UWNtbHRhWFJwZG1VZ1kyRnpaVnh1THk4Z1lXNWtJSFJvWlNCelpXTnZibVFnWVhKbmRXMWxiblFnTFNCbWJHRm5JQzBnY0hKbFptVnljbVZrSUhSNWNHVWdhWE1nWVNCemRISnBibWRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRc0lGTXBlMXh1SUNCcFppZ2hhWE5QWW1wbFkzUW9hWFFwS1hKbGRIVnliaUJwZER0Y2JpQWdkbUZ5SUdadUxDQjJZV3c3WEc0Z0lHbG1LRk1nSmlZZ2RIbHdaVzltSUNobWJpQTlJR2wwTG5SdlUzUnlhVzVuS1NBOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUNGcGMwOWlhbVZqZENoMllXd2dQU0JtYmk1allXeHNLR2wwS1NrcGNtVjBkWEp1SUhaaGJEdGNiaUFnYVdZb2RIbHdaVzltSUNobWJpQTlJR2wwTG5aaGJIVmxUMllwSUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnSVdselQySnFaV04wS0haaGJDQTlJR1p1TG1OaGJHd29hWFFwS1NseVpYUjFjbTRnZG1Gc08xeHVJQ0JwWmlnaFV5QW1KaUIwZVhCbGIyWWdLR1p1SUQwZ2FYUXVkRzlUZEhKcGJtY3BJRDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdJV2x6VDJKcVpXTjBLSFpoYkNBOUlHWnVMbU5oYkd3b2FYUXBLU2x5WlhSMWNtNGdkbUZzTzF4dUlDQjBhSEp2ZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzRuZENCamIyNTJaWEowSUc5aWFtVmpkQ0IwYnlCd2NtbHRhWFJwZG1VZ2RtRnNkV1ZjSWlrN1hHNTlPeUlzSW5aaGNpQnBaQ0E5SURCY2JpQWdMQ0J3ZUNBOUlFMWhkR2d1Y21GdVpHOXRLQ2s3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0d0bGVTbDdYRzRnSUhKbGRIVnliaUFuVTNsdFltOXNLQ2N1WTI5dVkyRjBLR3RsZVNBOVBUMGdkVzVrWldacGJtVmtJRDhnSnljZ09pQnJaWGtzSUNjcFh5Y3NJQ2dySzJsa0lDc2djSGdwTG5SdlUzUnlhVzVuS0RNMktTazdYRzU5T3lJc0luWmhjaUJ6ZEc5eVpTQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0p5a29KM2RyY3ljcFhHNGdJQ3dnZFdsa0lDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1ZwWkNjcFhHNGdJQ3dnVTNsdFltOXNJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmRzYjJKaGJDY3BMbE41YldKdmJGeHVJQ0FzSUZWVFJWOVRXVTFDVDB3Z1BTQjBlWEJsYjJZZ1UzbHRZbTlzSUQwOUlDZG1kVzVqZEdsdmJpYzdYRzVjYm5aaGNpQWtaWGh3YjNKMGN5QTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9ibUZ0WlNsN1hHNGdJSEpsZEhWeWJpQnpkRzl5WlZ0dVlXMWxYU0I4ZkNBb2MzUnZjbVZiYm1GdFpWMGdQVnh1SUNBZ0lGVlRSVjlUV1UxQ1Qwd2dKaVlnVTNsdFltOXNXMjVoYldWZElIeDhJQ2hWVTBWZlUxbE5RazlNSUQ4Z1UzbHRZbTlzSURvZ2RXbGtLU2duVTNsdFltOXNMaWNnS3lCdVlXMWxLU2s3WEc1OU8xeHVYRzRrWlhod2IzSjBjeTV6ZEc5eVpTQTlJSE4wYjNKbE95SXNJblpoY2lCamJHRnpjMjltSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlqYkdGemMyOW1KeWxjYmlBZ0xDQkpWRVZTUVZSUFVpQWdQU0J5WlhGMWFYSmxLQ2N1TDE5M2EzTW5LU2duYVhSbGNtRjBiM0luS1Z4dUlDQXNJRWwwWlhKaGRHOXljeUE5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIzSmxKeWt1WjJWMFNYUmxjbUYwYjNKTlpYUm9iMlFnUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUdsbUtHbDBJQ0U5SUhWdVpHVm1hVzVsWkNseVpYUjFjbTRnYVhSYlNWUkZVa0ZVVDFKZFhHNGdJQ0FnZkh3Z2FYUmJKMEJBYVhSbGNtRjBiM0luWFZ4dUlDQWdJSHg4SUVsMFpYSmhkRzl5YzF0amJHRnpjMjltS0dsMEtWMDdYRzU5T3lJc0luWmhjaUJoYms5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dlgyRnVMVzlpYW1WamRDY3BYRzRnSUN3Z1oyVjBJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMk52Y21VdVoyVjBMV2wwWlhKaGRHOXlMVzFsZEdodlpDY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J5WlhGMWFYSmxLQ2N1TDE5amIzSmxKeWt1WjJWMFNYUmxjbUYwYjNJZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lIWmhjaUJwZEdWeVJtNGdQU0JuWlhRb2FYUXBPMXh1SUNCcFppaDBlWEJsYjJZZ2FYUmxja1p1SUNFOUlDZG1kVzVqZEdsdmJpY3BkR2h5YjNjZ1ZIbHdaVVZ5Y205eUtHbDBJQ3NnSnlCcGN5QnViM1FnYVhSbGNtRmliR1VoSnlrN1hHNGdJSEpsZEhWeWJpQmhiazlpYW1WamRDaHBkR1Z5Um00dVkyRnNiQ2hwZENrcE8xeHVmVHNpTENJbmRYTmxJSE4wY21samRDYzdYRzUyWVhJZ1lXUmtWRzlWYm5OamIzQmhZbXhsY3lBOUlISmxjWFZwY21Vb0p5NHZYMkZrWkMxMGJ5MTFibk5qYjNCaFlteGxjeWNwWEc0Z0lDd2djM1JsY0NBZ0lDQWdJQ0FnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSXRjM1JsY0NjcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgybDBaWEpoZEc5eWN5Y3BYRzRnSUN3Z2RHOUpUMkpxWldOMElDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFdsdlltcGxZM1FuS1R0Y2JseHVMeThnTWpJdU1TNHpMalFnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbVZ1ZEhKcFpYTW9LVnh1THk4Z01qSXVNUzR6TGpFeklFRnljbUY1TG5CeWIzUnZkSGx3WlM1clpYbHpLQ2xjYmk4dklESXlMakV1TXk0eU9TQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWRtRnNkV1Z6S0NsY2JpOHZJREl5TGpFdU15NHpNQ0JCY25KaGVTNXdjbTkwYjNSNWNHVmJRRUJwZEdWeVlYUnZjbDBvS1Z4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUwxOXBkR1Z5TFdSbFptbHVaU2NwS0VGeWNtRjVMQ0FuUVhKeVlYa25MQ0JtZFc1amRHbHZiaWhwZEdWeVlYUmxaQ3dnYTJsdVpDbDdYRzRnSUhSb2FYTXVYM1FnUFNCMGIwbFBZbXBsWTNRb2FYUmxjbUYwWldRcE95QXZMeUIwWVhKblpYUmNiaUFnZEdocGN5NWZhU0E5SURBN0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRzVsZUhRZ2FXNWtaWGhjYmlBZ2RHaHBjeTVmYXlBOUlHdHBibVE3SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUd0cGJtUmNiaTh2SURJeUxqRXVOUzR5TGpFZ0pVRnljbUY1U1hSbGNtRjBiM0pRY205MGIzUjVjR1VsTG01bGVIUW9LVnh1ZlN3Z1puVnVZM1JwYjI0b0tYdGNiaUFnZG1GeUlFOGdJQ0FnSUQwZ2RHaHBjeTVmZEZ4dUlDQWdJQ3dnYTJsdVpDQWdQU0IwYUdsekxsOXJYRzRnSUNBZ0xDQnBibVJsZUNBOUlIUm9hWE11WDJrckt6dGNiaUFnYVdZb0lVOGdmSHdnYVc1a1pYZ2dQajBnVHk1c1pXNW5kR2dwZTF4dUlDQWdJSFJvYVhNdVgzUWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdjbVYwZFhKdUlITjBaWEFvTVNrN1hHNGdJSDFjYmlBZ2FXWW9hMmx1WkNBOVBTQW5hMlY1Y3ljZ0lDbHlaWFIxY200Z2MzUmxjQ2d3TENCcGJtUmxlQ2s3WEc0Z0lHbG1LR3RwYm1RZ1BUMGdKM1poYkhWbGN5Y3BjbVYwZFhKdUlITjBaWEFvTUN3Z1QxdHBibVJsZUYwcE8xeHVJQ0J5WlhSMWNtNGdjM1JsY0Nnd0xDQmJhVzVrWlhnc0lFOWJhVzVrWlhoZFhTazdYRzU5TENBbmRtRnNkV1Z6SnlrN1hHNWNiaTh2SUdGeVozVnRaVzUwYzB4cGMzUmJRRUJwZEdWeVlYUnZjbDBnYVhNZ0pVRnljbUY1VUhKdmRHOWZkbUZzZFdWekpTQW9PUzQwTGpRdU5pd2dPUzQwTGpRdU55bGNia2wwWlhKaGRHOXljeTVCY21kMWJXVnVkSE1nUFNCSmRHVnlZWFJ2Y25NdVFYSnlZWGs3WEc1Y2JtRmtaRlJ2Vlc1elkyOXdZV0pzWlhNb0oydGxlWE1uS1R0Y2JtRmtaRlJ2Vlc1elkyOXdZV0pzWlhNb0ozWmhiSFZsY3ljcE8xeHVZV1JrVkc5VmJuTmpiM0JoWW14bGN5Z25aVzUwY21sbGN5Y3BPeUlzSWk4dklERTVMakV1TXk0eElFOWlhbVZqZEM1aGMzTnBaMjRvZEdGeVoyVjBMQ0J6YjNWeVkyVXBYRzUyWVhJZ0pHVjRjRzl5ZENBOUlISmxjWFZwY21Vb0p5NHZYMlY0Y0c5eWRDY3BPMXh1WEc0a1pYaHdiM0owS0NSbGVIQnZjblF1VXlBcklDUmxlSEJ2Y25RdVJpd2dKMDlpYW1WamRDY3NJSHRoYzNOcFoyNDZJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFoYzNOcFoyNG5LWDBwT3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQWtZWFFnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjM1J5YVc1bkxXRjBKeWtvZEhKMVpTazdYRzVjYmk4dklESXhMakV1TXk0eU55QlRkSEpwYm1jdWNISnZkRzkwZVhCbFcwQkFhWFJsY21GMGIzSmRLQ2xjYm5KbGNYVnBjbVVvSnk0dlgybDBaWEl0WkdWbWFXNWxKeWtvVTNSeWFXNW5MQ0FuVTNSeWFXNW5KeXdnWm5WdVkzUnBiMjRvYVhSbGNtRjBaV1FwZTF4dUlDQjBhR2x6TGw5MElEMGdVM1J5YVc1bktHbDBaWEpoZEdWa0tUc2dMeThnZEdGeVoyVjBYRzRnSUhSb2FYTXVYMmtnUFNBd095QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QnVaWGgwSUdsdVpHVjRYRzR2THlBeU1TNHhMalV1TWk0eElDVlRkSEpwYm1kSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNVdWJtVjRkQ2dwWEc1OUxDQm1kVzVqZEdsdmJpZ3BlMXh1SUNCMllYSWdUeUFnSUNBZ1BTQjBhR2x6TGw5MFhHNGdJQ0FnTENCcGJtUmxlQ0E5SUhSb2FYTXVYMmxjYmlBZ0lDQXNJSEJ2YVc1ME8xeHVJQ0JwWmlocGJtUmxlQ0ErUFNCUExteGxibWQwYUNseVpYUjFjbTRnZTNaaGJIVmxPaUIxYm1SbFptbHVaV1FzSUdSdmJtVTZJSFJ5ZFdWOU8xeHVJQ0J3YjJsdWRDQTlJQ1JoZENoUExDQnBibVJsZUNrN1hHNGdJSFJvYVhNdVgya2dLejBnY0c5cGJuUXViR1Z1WjNSb08xeHVJQ0J5WlhSMWNtNGdlM1poYkhWbE9pQndiMmx1ZEN3Z1pHOXVaVG9nWm1Gc2MyVjlPMXh1ZlNrN0lpd2ljbVZ4ZFdseVpTZ25MaTlsY3pZdVlYSnlZWGt1YVhSbGNtRjBiM0luS1R0Y2JuWmhjaUJuYkc5aVlXd2dJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWxjYmlBZ0xDQm9hV1JsSUNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJsMFpYSmhkRzl5Y3ljcFhHNGdJQ3dnVkU5ZlUxUlNTVTVIWDFSQlJ5QTlJSEpsY1hWcGNtVW9KeTR2WDNkcmN5Y3BLQ2QwYjFOMGNtbHVaMVJoWnljcE8xeHVYRzVtYjNJb2RtRnlJR052Ykd4bFkzUnBiMjV6SUQwZ1d5ZE9iMlJsVEdsemRDY3NJQ2RFVDAxVWIydGxia3hwYzNRbkxDQW5UV1ZrYVdGTWFYTjBKeXdnSjFOMGVXeGxVMmhsWlhSTWFYTjBKeXdnSjBOVFUxSjFiR1ZNYVhOMEoxMHNJR2tnUFNBd095QnBJRHdnTlRzZ2FTc3JLWHRjYmlBZ2RtRnlJRTVCVFVVZ0lDQWdJQ0FnUFNCamIyeHNaV04wYVc5dWMxdHBYVnh1SUNBZ0lDd2dRMjlzYkdWamRHbHZiaUE5SUdkc2IySmhiRnRPUVUxRlhWeHVJQ0FnSUN3Z2NISnZkRzhnSUNBZ0lDQTlJRU52Ykd4bFkzUnBiMjRnSmlZZ1EyOXNiR1ZqZEdsdmJpNXdjbTkwYjNSNWNHVTdYRzRnSUdsbUtIQnliM1J2SUNZbUlDRndjbTkwYjF0VVQxOVRWRkpKVGtkZlZFRkhYU2xvYVdSbEtIQnliM1J2TENCVVQxOVRWRkpKVGtkZlZFRkhMQ0JPUVUxRktUdGNiaUFnU1hSbGNtRjBiM0p6VzA1QlRVVmRJRDBnU1hSbGNtRjBiM0p6TGtGeWNtRjVPMXh1ZlNKZGZRPT0ifQ==
