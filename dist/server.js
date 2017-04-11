module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _Main = __webpack_require__(4);

	var _Main2 = _interopRequireDefault(_Main);

	var _template = __webpack_require__(9);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();
	var port = 7998;

	server.use('/assets', _express2.default.static('assets'));

	server.get('/', function (req, res) {
	  var isMobile = true;
	  var initialState = { isMobile: isMobile };
	  var appString = (0, _server.renderToString)(_react2.default.createElement(_Main2.default, _extends({}, initialState, { location: req.url })));
	  res.send((0, _template2.default)({
	    body: appString,
	    title: 'Hello World from the server',
	    initialState: JSON.stringify(initialState)
	  }));
	});

	server.get('/about', function (req, res) {
	  var isMobile = true;
	  var initialState = { isMobile: isMobile };
	  var appString = (0, _server.renderToString)(_react2.default.createElement(_Main2.default, _extends({}, initialState, { location: req.url })));
	  res.send((0, _template2.default)({
	    body: appString,
	    title: 'Hello World from the server',
	    initialState: JSON.stringify(initialState)
	  }));
	});

	server.listen(port);
	console.log('listening on port - ' + port);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _HomePage = __webpack_require__(6);

	var _HomePage2 = _interopRequireDefault(_HomePage);

	var _AboutPage = __webpack_require__(7);

	var _AboutPage2 = _interopRequireDefault(_AboutPage);

	var _reactRouterDom = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isMobile = this.props.isMobile;

	      var context = {};

	      return _react2.default.createElement(
	        _reactRouterDom.StaticRouter,
	        { context: context, location: this.props.location },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'ul',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/' },
	                'Home'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/about' },
	                'About'
	              )
	            )
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(_reactRouterDom.Route, {
	            exact: true,
	            path: '/about',
	            render: function render() {
	              return _react2.default.createElement(_AboutPage2.default, _this2.props);
	            }
	          }),
	          _react2.default.createElement(_reactRouterDom.Route, {
	            exact: true,
	            path: '/',
	            render: function render() {
	              return _react2.default.createElement(_HomePage2.default, _this2.props);
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;


	App.propTypes = {
	  isMobile: _propTypes.bool.isRequired,
	  location: _propTypes.string.isRequired
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomePage = function (_Component) {
	  _inherits(HomePage, _Component);

	  function HomePage() {
	    _classCallCheck(this, HomePage);

	    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
	  }

	  _createClass(HomePage, [{
	    key: 'render',
	    value: function render() {
	      var isMobile = this.props.isMobile;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'homepage - ',
	          isMobile ? 'mobile' : 'desktop'
	        )
	      );
	    }
	  }]);

	  return HomePage;
	}(_react.Component);

	exports.default = HomePage;


	HomePage.propTypes = {
	  isMobile: _propTypes.bool
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AboutPage = function (_Component) {
	  _inherits(AboutPage, _Component);

	  function AboutPage() {
	    _classCallCheck(this, AboutPage);

	    return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));
	  }

	  _createClass(AboutPage, [{
	    key: 'render',
	    value: function render() {
	      var isMobile = this.props.isMobile;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'AboutPage - ',
	          isMobile ? 'mobile' : 'desktop'
	        )
	      );
	    }
	  }]);

	  return AboutPage;
	}(_react.Component);

	exports.default = AboutPage;


	AboutPage.propTypes = {
	  isMobile: _propTypes.bool
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-router-dom");

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var body = _ref.body,
	      title = _ref.title,
	      initialState = _ref.initialState;

	  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <script>window.__APP_INITIAL_STATE__ = " + initialState + "</script>\n        <title>" + title + "</title>\n        <link rel=\"stylesheet\" href=\"/assets/index.css\" />\n      </head>\n      \n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n      \n      <script src=\"/assets/bundle.js\"></script>\n    </html>\n  ";
	};

/***/ }
/******/ ]);