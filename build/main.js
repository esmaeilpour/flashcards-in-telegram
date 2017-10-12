require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	back: 'Back',
	learn: 'Learn',
	review: 'Review'
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectId; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongodb__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongodb__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["b"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(uri) {
    return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_1_mongodb___default.a.MongoClient.connect(uri);

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

var ObjectId = __WEBPACK_IMPORTED_MODULE_1_mongodb___default.a.ObjectId;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  mongo: {
    uri: process.env.MONGO_URI
  },

  telegram: {
    token: process.env.TELEGRAM_TOKEN
  },

  cardGroups: {
    1: 86400,
    2: 3 * 86400,
    3: 5 * 86400
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tgux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tgux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tgux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mongo__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activities__ = __webpack_require__(10);


var main = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
		var db, bot, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, activity;

		return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return Object(__WEBPACK_IMPORTED_MODULE_3__mongo__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_1__configs__["a" /* default */].mongo.uri);

					case 2:
						db = _context.sent;


						__WEBPACK_IMPORTED_MODULE_4__cache__["a" /* default */].prototype.storage = db;

						bot = new __WEBPACK_IMPORTED_MODULE_2_tgux___default.a(__WEBPACK_IMPORTED_MODULE_1__configs__["a" /* default */].telegram.token, { polling: true });


						bot.setCacheHandler(__WEBPACK_IMPORTED_MODULE_4__cache__["a" /* default */]);

						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						_context.prev = 9;
						for (_iterator = __WEBPACK_IMPORTED_MODULE_5__activities__["a" /* default */][Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							activity = _step.value;

							activity(bot, db);
						}
						_context.next = 17;
						break;

					case 13:
						_context.prev = 13;
						_context.t0 = _context['catch'](9);
						_didIteratorError = true;
						_iteratorError = _context.t0;

					case 17:
						_context.prev = 17;
						_context.prev = 18;

						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}

					case 20:
						_context.prev = 20;

						if (!_didIteratorError) {
							_context.next = 23;
							break;
						}

						throw _iteratorError;

					case 23:
						return _context.finish(20);

					case 24:
						return _context.finish(17);

					case 25:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[9, 13, 17, 25], [18,, 20, 24]]);
	}));

	return function main() {
		return _ref.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







main();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("tgux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class() {
		_classCallCheck(this, _class);

		this.data = {};
	}

	_createClass(_class, [{
		key: 'set',
		value: function set(key, value) {
			var db = this.db;
			return new Promise(function (resolve) {
				db.cache.update({ _id: key }, { $set: { data: JSON.stringify(value) } }, { upsert: true });
				resolve(true);
			});
		}
	}, {
		key: 'get',
		value: function get(key) {
			var db = this.db;
			return new Promise(function (resolve) {
				db.cache.find({ _id: key }).next(function (err, doc) {
					if (doc) {
						resolve(JSON.parse(doc.data));
					} else {
						return resolve(false);
					}
				});
			});
		}
	}, {
		key: 'db',
		get: function get() {
			return {
				cache: this.storage.collection('cache')
			};
		}
	}]);

	return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_start_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_tags_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_learn_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_review_js__ = __webpack_require__(14);





/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__activities_start_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__activities_tags_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__activities_learn_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__activities_review_js__["a" /* default */]]);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_strings__ = __webpack_require__(1);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ __webpack_exports__["a"] = (function (bot, db) {
	var _this = this;

	bot.createActivity('start', function (activity) {

		activity.on('home', function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(msg) {
				var opts;
				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								opts = {
									reply_markup: JSON.stringify({
										keyboard: activity.keyboards,
										resize_keyboard: true
									})
								};


								bot.sendMessage(msg.chat.id, 'start', opts);

							case 2:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x) {
				return _ref.apply(this, arguments);
			};
		}());

		activity.on(__WEBPACK_IMPORTED_MODULE_1__data_strings__["a" /* default */].learn, ['learn', 'home']);
		activity.on(__WEBPACK_IMPORTED_MODULE_1__data_strings__["a" /* default */].review, ['review', 'home']);
	});
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_strings__ = __webpack_require__(1);


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var foldm = function foldm(r, j) {
	return r.reduce(function (a, b, i, g) {
		return !(i % j) ? a.concat([g.slice(i, i + j)]) : a;
	}, []);
};

/* harmony default export */ __webpack_exports__["a"] = (function (bot, db) {
	var _this = this;

	db.tags = db.collection('tags');

	bot.createActivity('tags', function (activity) {

		activity.on('home', function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(msg, history) {
				var tags, tag, opts;
				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return db.tags.find({ chat_id: msg.chat.id }).toArray();

							case 2:
								_context.t0 = function (tag) {
									return tag.title;
								};

								tags = _context.sent.map(_context.t0);


								tags.unshift('word');

								if (!(history.reason == 'normal')) {
									_context.next = 10;
									break;
								}

								tag = msg.text;

								if (!(tags.indexOf(tag) == -1)) {
									_context.next = 9;
									break;
								}

								return _context.abrupt('return', history.forward(['home'], history.params));

							case 9:
								return _context.abrupt('return', history.forward([history.params.back_to, 'home'], { tag: tag }));

							case 10:
								opts = {
									reply_markup: JSON.stringify({
										keyboard: [].concat(_toConsumableArray(foldm(tags, 2)), [activity.keyboards[0]]),
										resize_keyboard: true
									})
								};

								bot.sendMessage(msg.chat.id, 'tag', opts);

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}());

		activity.on('back_here', function (msg, history) {
			return history.forward(['tags', 'home'], { tag: null });
		});

		activity.on('other_tag', function (msg, history) {
			return history.forward([history.params.back_to, 'home'], { tag: 'other' });
		});

		activity.on('other', ['other_tag']);
		activity.on('new', ['tags_new', 'home']);
		activity.on(__WEBPACK_IMPORTED_MODULE_1__data_strings__["a" /* default */].back, ['start', 'home']);
	});

	bot.createActivity('tags_new', function (activity) {

		activity.on('home', function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(msg, history) {
				var opts;
				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!(history.reason == 'normal')) {
									_context2.next = 2;
									break;
								}

								return _context2.abrupt('return', history.forward(['tags_new_more', 'home'], { title: msg.text }));

							case 2:
								opts = {
									reply_markup: JSON.stringify({
										keyboard: activity.keyboards,
										resize_keyboard: true
									})
								};

								bot.sendMessage(msg.chat.id, 'title?', opts);

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this);
			}));

			return function (_x3, _x4) {
				return _ref2.apply(this, arguments);
			};
		}());

		activity.on(__WEBPACK_IMPORTED_MODULE_1__data_strings__["a" /* default */].back, ['tags', 'home']);
	});

	bot.createActivity('tags_new_more', function (activity) {

		activity.on('home', function () {
			var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(msg, history) {
				var opts;
				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (!(history.reason == 'normal')) {
									_context3.next = 4;
									break;
								}

								_context3.next = 3;
								return db.tags.insertOne({
									chat_id: msg.chat.id,
									title: history.params.title,
									more: msg.text == 'yes'
								});

							case 3:
								return _context3.abrupt('return', history.forward(['start', 'home']));

							case 4:
								opts = {
									reply_markup: JSON.stringify({
										keyboard: [['yes', 'no']],
										resize_keyboard: true
									})
								};

								bot.sendMessage(msg.chat.id, 'more?', opts);

							case 6:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this);
			}));

			return function (_x5, _x6) {
				return _ref3.apply(this, arguments);
			};
		}());
	});
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_strings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mongo__ = __webpack_require__(2);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var foldm = function foldm(r, j) {
	return r.reduce(function (a, b, i, g) {
		return !(i % j) ? a.concat([g.slice(i, i + j)]) : a;
	}, []);
};

/* harmony default export */ __webpack_exports__["a"] = (function (bot, db) {
	var _this = this;

	db.cards = db.collection('cards');
	db.tags = db.collection('tags');

	bot.createActivity('learn', function (activity) {

		activity.on('home', function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(msg, history) {
				var card, tags, _opts, opts;

				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (!(history.reason == 'normal')) {
									_context.next = 11;
									break;
								}

								card = {
									chat_id: msg.chat.id,
									tag: 'word',
									content: msg.text,
									message: Object.assign.apply(Object, [{}].concat(_toConsumableArray(['text', 'photo', 'audio', 'voice', 'video', 'document', 'caption'].map(function (p) {
										return msg[p] && _defineProperty({}, p, msg[p]);
									})))),
									group: 1,
									speed: 1,
									easy: 0,
									hard: 0,
									review: 1
								};
								_context.next = 4;
								return db.cards.insertOne(card);

							case 4:
								_context.next = 6;
								return db.tags.find({ chat_id: msg.chat.id }).toArray();

							case 6:
								_context.t0 = function (tag) {
									return tag.title != 'word';
								};

								_context.t1 = function (tag) {
									return { text: tag.title, callback_data: new Buffer('newcard_tag:' + card._id + ':' + tag.title).toString('base64') };
								};

								tags = _context.sent.filter(_context.t0).map(_context.t1);
								_opts = {
									reply_to_message_id: msg.message_id,
									reply_markup: {
										inline_keyboard: foldm(tags, 2)
									}
								};
								return _context.abrupt('return', bot.sendMessage(msg.chat.id, 'saved', _opts));

							case 11:
								opts = {
									reply_markup: {
										keyboard: [['back']],
										resize_keyboard: true
									}
								};


								bot.sendMessage(msg.chat.id, 'learn', opts);

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}());

		activity.on('back', ['start', 'home']);
	});

	bot.on('callback_query', function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(cq) {
			var _Buffer$from$toString, _Buffer$from$toString2, action, card_id, params, card, _params, tag, opts;

			return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_Buffer$from$toString = Buffer.from(cq.data, 'base64').toString().split(':'), _Buffer$from$toString2 = _toArray(_Buffer$from$toString), action = _Buffer$from$toString2[0], card_id = _Buffer$from$toString2[1], params = _Buffer$from$toString2.slice(2);
							_context2.next = 3;
							return db.cards.findOne(Object(__WEBPACK_IMPORTED_MODULE_2__mongo__["a" /* ObjectId */])(card_id));

						case 3:
							card = _context2.sent;
							_context2.t0 = action;
							_context2.next = _context2.t0 === 'newcard_tag' ? 7 : 15;
							break;

						case 7:
							_params = _slicedToArray(params, 1), tag = _params[0];

							if (!(tag != '_cancel_')) {
								_context2.next = 11;
								break;
							}

							_context2.next = 11;
							return db.cards.updateOne({ _id: card._id }, { $set: { tag: tag } });

						case 11:
							opts = {
								chat_id: cq.message.chat.id,
								message_id: cq.message.message_id
							};
							_context2.next = 14;
							return bot.editMessageReplyMarkup(tag != '_cancel_' ? null : { inline_keyboard: cardButtons(card._id) }, opts);

						case 14:
							return _context2.abrupt('break', 15);

						case 15:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this);
		}));

		return function (_x3) {
			return _ref3.apply(this, arguments);
		};
	}());
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_strings__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mongo__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs__ = __webpack_require__(3);


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var foldm = function foldm(r, j) {
	return r.reduce(function (a, b, i, g) {
		return !(i % j) ? a.concat([g.slice(i, i + j)]) : a;
	}, []);
};

/* harmony default export */ __webpack_exports__["a"] = (function (bot, db) {
	var _this = this;

	db.cards = db.collection('cards');
	db.tags = db.collection('tags');

	var nextCard = function nextCard() {
		return db.cards.find().sort({ next_study: 1 }).limit(1).next();
	};

	var cardButtons = function cardButtons(id, hideMore) {
		var mainButtons = [{ text: 'very easy', callback_data: new Buffer('very_easy:' + id).toString('base64') }, { text: 'easy', callback_data: new Buffer('easy:' + id).toString('base64') }, { text: 'hard', callback_data: new Buffer('hard:' + id).toString('base64') }, { text: 'very hard', callback_data: new Buffer('very_hard:' + id).toString('base64') }];
		return hideMore ? [[{ text: 'append', callback_data: new Buffer('append:' + id).toString('base64') }, { text: 'replace', callback_data: new Buffer('replace:' + id).toString('base64') }, { text: 'tag', callback_data: new Buffer('tag:' + id).toString('base64') }, { text: 'delete', callback_data: new Buffer('delete:' + id).toString('base64') }], [{ text: 'back', callback_data: new Buffer('back:' + id).toString('base64') }]] : [mainButtons, [{ text: 'more', callback_data: new Buffer('more:' + id).toString('base64') }]];
	};

	bot.createActivity('review', function (activity) {

		activity.on('home', function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(msg, history) {
				var opts;
				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (history.params.tag) {
									_context.next = 2;
									break;
								}

								return _context.abrupt('return', history.forward(['tags', 'home'], { back_to: 'review' }));

							case 2:
								if (!(history.reason == 'normal')) {
									_context.next = 4;
									break;
								}

								return _context.abrupt('return', bot.sendMessage(msg.chat.id, 'ok'));

							case 4:
								opts = {
									reply_markup: {
										keyboard: [['continue', 'back']],
										resize_keyboard: true
									}
								};
								_context.next = 7;
								return bot.sendMessage(msg.chat.id, 'review', opts);

							case 7:

								history.forward(['continue_review'], history.params);

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this);
			}));

			return function (_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}());

		activity.on('continue_review', function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(msg, history) {
				var PendingUpdate, card, tag_title, query, tags, tag, cursor;
				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!(msg.text == 'back')) {
									_context2.next = 2;
									break;
								}

								return _context2.abrupt('return', history.forward(['tags']));

							case 2:
								if (!(history.reason == 'normal' && msg.text != 'continue')) {
									_context2.next = 15;
									break;
								}

								_context2.next = 5;
								return bot.cache.get('PendingUpdate' + msg.chat.id);

							case 5:
								PendingUpdate = _context2.sent;

								if (!PendingUpdate) {
									_context2.next = 15;
									break;
								}

								_context2.next = 9;
								return db.cards.findOne({ _id: Object(__WEBPACK_IMPORTED_MODULE_2__mongo__["a" /* ObjectId */])(PendingUpdate.id) });

							case 9:
								card = _context2.sent;

								if (PendingUpdate.type == 'append') {
									if (card.message.text) {
										card.message.text = card.message.text + "\n" + msg.text;
									} else {
										card.message.caption = (card.message.caption || '') + "\n" + msg.text;
									}
								} else if (PendingUpdate.type == 'replace') {
									card.message = Object.assign.apply(Object, [{}].concat(_toConsumableArray(['text', 'photo', 'audio', 'voice', 'video', 'document', 'caption'].map(function (p) {
										return msg[p] && _defineProperty({}, p, msg[p]);
									}))));
								}
								db.cards.save(card);

								_context2.next = 14;
								return bot.sendMessage(msg.chat.id, 'ok', { reply_to_message_id: PendingUpdate.message_id });

							case 14:
								return _context2.abrupt('return', _context2.sent);

							case 15:
								_context2.next = 17;
								return bot.cache.set('PendingUpdate' + msg.chat.id, null);

							case 17:
								tag_title = history.params.tag;
								query = { tag: tag_title };

								if (!(tag_title == 'other')) {
									_context2.next = 25;
									break;
								}

								_context2.next = 22;
								return db.tags.find({ chat_id: msg.chat.id }).toArray();

							case 22:
								_context2.t0 = function (tag) {
									return tag.title;
								};

								tags = _context2.sent.map(_context2.t0);

								query = { tag: { $nin: ['word'].concat(_toConsumableArray(tags)) } };

							case 25:
								_context2.next = 27;
								return db.tags.findOne({ chat_id: msg.chat.id, title: tag_title });

							case 27:
								tag = _context2.sent;
								cursor = db.cards.find(query).sort({ next_study: 1 }).limit(10);
								_context2.next = 31;
								return cursor.count();

							case 31:
								if (_context2.sent) {
									_context2.next = 33;
									break;
								}

								return _context2.abrupt('return', bot.sendMessage(msg.chat.id, 'empty'));

							case 33:

								cursor.forEach(function (card) {
									var message = card.message;
									var hideMore = tag_title == 'word' || tag_title != 'other' && tag.more;
									var opts = {
										reply_markup: {
											inline_keyboard: cardButtons(card._id),
											resize_keyboard: false
										},
										caption: hideMore ? '' : message.caption
									};
									if (message.text) {
										return bot.sendMessage(msg.chat.id, hideMore ? message.text.split("\n")[0] : message.text, opts);
									} else if (message.photo) {
										return bot.sendPhoto(msg.chat.id, message.photo[message.photo.length - 1].file_id, opts);
									} else if (message.video) {
										return bot.sendVideo(msg.chat.id, message.video.file_id, opts);
									} else if (message.audio) {
										return bot.sendAudio(msg.chat.id, message.audio.file_id, opts);
									} else if (message.voice) {
										return bot.sendVoice(msg.chat.id, message.voice.file_id, opts);
									} else if (message.document) {
										return bot.sendDocument(msg.chat.id, message.document.file_id, opts);
									}
								});

							case 34:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this);
			}));

			return function (_x3, _x4) {
				return _ref2.apply(this, arguments);
			};
		}());

		activity.on('tags', function () {
			var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(msg, history) {
				return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return bot.cache.set('PendingUpdate' + msg.chat.id, null);

							case 2:
								history.forward(['tags', 'home'], { back_to: 'review', tag: null });

							case 3:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this);
			}));

			return function (_x5, _x6) {
				return _ref4.apply(this, arguments);
			};
		}());

		activity.on('continue', ['review', 'home']);
		activity.on('back', ['tags']);
	});

	bot.on('callback_query', function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(cq) {
			var _Buffer$from$toString, _Buffer$from$toString2, action, card_id, params, card, review, nextGroup, delay, _nextGroup, _delay, _nextGroup2, _delay2, _nextGroup3, _delay3, opts, _opts, tags, _opts2, _params, tag, _opts3, _opts4, _opts5;

			return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_Buffer$from$toString = Buffer.from(cq.data, 'base64').toString().split(':'), _Buffer$from$toString2 = _toArray(_Buffer$from$toString), action = _Buffer$from$toString2[0], card_id = _Buffer$from$toString2[1], params = _Buffer$from$toString2.slice(2);
							_context5.next = 3;
							return db.cards.findOne(Object(__WEBPACK_IMPORTED_MODULE_2__mongo__["a" /* ObjectId */])(card_id));

						case 3:
							card = _context5.sent;

							review = function () {
								var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
									var opts;
									return __WEBPACK_IMPORTED_MODULE_0__usr_src_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
										while (1) {
											switch (_context4.prev = _context4.next) {
												case 0:
													opts = {
														chat_id: cq.message.chat.id,
														message_id: cq.message.message_id
													};
													_context4.next = 3;
													return bot.editMessageReplyMarkup({
														inline_keyboard: [[{ text: 'undo', callback_data: new Buffer('undo:' + card._id).toString('base64') }]]
													}, opts);

												case 3:
												case 'end':
													return _context4.stop();
											}
										}
									}, _callee4, _this);
								}));

								return function review() {
									return _ref6.apply(this, arguments);
								};
							}();

							_context5.t0 = action;
							_context5.next = _context5.t0 === 'very_easy' ? 8 : _context5.t0 === 'easy' ? 15 : _context5.t0 === 'hard' ? 22 : _context5.t0 === 'very_hard' ? 29 : _context5.t0 === 'back' ? 36 : _context5.t0 === 'undo' ? 40 : _context5.t0 === 'tag' ? 44 : _context5.t0 === 'tag_change' ? 53 : _context5.t0 === 'delete' ? 61 : _context5.t0 === 'append' ? 67 : _context5.t0 === 'replace' ? 71 : _context5.t0 === 'more' ? 75 : 84;
							break;

						case 8:
							nextGroup = Math.min(card.group + 1, 3);
							delay = __WEBPACK_IMPORTED_MODULE_3__configs__["a" /* default */].cardGroups[nextGroup] * 2;
							_context5.next = 12;
							return db.cards.updateOne({ _id: card._id }, { $set: { next_study: +new Date() + delay }, $inc: { easy: 1 } });

						case 12:
							_context5.next = 14;
							return review();

						case 14:
							return _context5.abrupt('break', 84);

						case 15:
							_nextGroup = Math.min(card.group + 1, 3);
							_delay = __WEBPACK_IMPORTED_MODULE_3__configs__["a" /* default */].cardGroups[_nextGroup];
							_context5.next = 19;
							return db.cards.updateOne({ _id: card._id }, { $set: { next_study: +new Date() + _delay }, $inc: { easy: 1 } });

						case 19:
							_context5.next = 21;
							return review();

						case 21:
							return _context5.abrupt('break', 84);

						case 22:
							_nextGroup2 = Math.max(card.group - 1, 1);
							_delay2 = __WEBPACK_IMPORTED_MODULE_3__configs__["a" /* default */].cardGroups[_nextGroup2];
							_context5.next = 26;
							return db.cards.updateOne({ _id: card._id }, { $set: { next_study: +new Date() + _delay2 }, $inc: { hard: 1 } });

						case 26:
							_context5.next = 28;
							return review();

						case 28:
							return _context5.abrupt('break', 84);

						case 29:
							_nextGroup3 = Math.max(card.group - 1, 1);
							_delay3 = __WEBPACK_IMPORTED_MODULE_3__configs__["a" /* default */].cardGroups[_nextGroup3] / 2;
							_context5.next = 33;
							return db.cards.updateOne({ _id: card._id }, { $set: { next_study: +new Date() + _delay3 }, $inc: { hard: 1 } });

						case 33:
							_context5.next = 35;
							return review();

						case 35:
							return _context5.abrupt('break', 84);

						case 36:
							opts = {
								chat_id: cq.message.chat.id,
								message_id: cq.message.message_id
							};
							_context5.next = 39;
							return bot.editMessageReplyMarkup({
								inline_keyboard: cardButtons(card._id)
							}, opts);

						case 39:
							return _context5.abrupt('break', 84);

						case 40:
							_opts = {
								chat_id: cq.message.chat.id,
								message_id: cq.message.message_id
							};
							_context5.next = 43;
							return bot.editMessageReplyMarkup({
								inline_keyboard: cardButtons(card._id)
							}, _opts);

						case 43:
							return _context5.abrupt('break', 84);

						case 44:
							_context5.next = 46;
							return db.tags.find({ chat_id: cq.message.chat.id }).toArray();

						case 46:
							_context5.t1 = function (tag) {
								return { text: tag.title, callback_data: new Buffer('tag_change:' + card._id + ':' + tag.title).toString('base64') };
							};

							tags = _context5.sent.map(_context5.t1);


							tags = [{ text: 'word', callback_data: new Buffer('tag_change:' + card._id + ':word').toString('base64') }].concat(_toConsumableArray(tags));

							_opts2 = {
								chat_id: cq.message.chat.id,
								message_id: cq.message.message_id
							};
							_context5.next = 52;
							return bot.editMessageReplyMarkup({
								inline_keyboard: [].concat(_toConsumableArray(foldm(tags, 2)), [[{ text: 'cancel', callback_data: new Buffer('tag_change:' + card._id + ':_cancel_').toString('base64') }]])
							}, _opts2);

						case 52:
							return _context5.abrupt('break', 84);

						case 53:
							_params = _slicedToArray(params, 1), tag = _params[0];

							if (!(tag != '_cancel_')) {
								_context5.next = 57;
								break;
							}

							_context5.next = 57;
							return db.cards.updateOne({ _id: card._id }, { $set: { tag: tag } });

						case 57:
							_opts3 = {
								chat_id: cq.message.chat.id,
								message_id: cq.message.message_id
							};
							_context5.next = 60;
							return bot.editMessageReplyMarkup(tag != '_cancel_' ? null : { inline_keyboard: cardButtons(card._id) }, _opts3);

						case 60:
							return _context5.abrupt('break', 84);

						case 61:
							_context5.next = 63;
							return db.cards.remove({ _id: card._id });

						case 63:
							_opts4 = {
								chat_id: cq.message.chat.id,
								message_id: cq.message.message_id
							};
							_context5.next = 66;
							return bot.editMessageReplyMarkup(null, _opts4);

						case 66:
							return _context5.abrupt('break', 84);

						case 67:
							_context5.next = 69;
							return bot.cache.set('PendingUpdate' + cq.message.chat.id, { type: 'append', id: card._id, message_id: cq.message.message_id });

						case 69:
							bot.answerCallbackQuery(cq.id, 'send more');
							return _context5.abrupt('break', 84);

						case 71:
							_context5.next = 73;
							return bot.cache.set('PendingUpdate' + cq.message.chat.id, { type: 'replace', id: card._id, message_id: cq.message.message_id });

						case 73:
							bot.answerCallbackQuery(cq.id, 'send new');
							return _context5.abrupt('break', 84);

						case 75:
							_opts5 = {
								chat_id: cq.message.chat.id,
								message_id: cq.message.message_id,
								reply_markup: {
									inline_keyboard: cardButtons(card._id, true)
								}
							};

							if (!card.message.text) {
								_context5.next = 81;
								break;
							}

							_context5.next = 79;
							return bot.editMessageText(card.message.text, _opts5);

						case 79:
							_context5.next = 83;
							break;

						case 81:
							_context5.next = 83;
							return bot.editMessageCaption(card.message.caption, _opts5);

						case 83:
							return _context5.abrupt('break', 84);

						case 84:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, _this);
		}));

		return function (_x7) {
			return _ref5.apply(this, arguments);
		};
	}());
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.map