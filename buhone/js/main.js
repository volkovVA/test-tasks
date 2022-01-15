/* eslint-disable */
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/form/form.js":
/*!********************************************!*\
  !*** ./src/blocks/components/form/form.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable */
document.addEventListener('DOMContentLoaded', function () {
  var ajaxSend = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(formData) {
      var fetchResp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('mail.php', {
                method: 'POST',
                body: formData
              });

            case 2:
              fetchResp = _context.sent;

              if (fetchResp.ok) {
                _context.next = 5;
                break;
              }

              throw new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 ".concat(url, ", \u0441\u0442\u0430\u0442\u0443\u0441 \u043E\u0448\u0438\u0431\u043A\u0438 ").concat(fetchResp.status));

            case 5:
              _context.next = 7;
              return fetchResp.text();

            case 7:
              return _context.abrupt("return", _context.sent);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function ajaxSend(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    var modal = document.querySelector('.modal');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      ajaxSend(formData).then(function (response) {
        console.log(response);
        form.reset();
      }).catch(function (err) {
        return console.error(err);
      });
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var activateAcc = function activateAcc() {
  var acc = document.querySelector(".faq__acc");
  acc.addEventListener("click", function (event) {
    var target = event.target;
    var parent = target.parentElement;
    var accItem = document.querySelectorAll(".faq__acc-item");

    if (target.classList.contains("faq__question")) {
      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
        return;
      }

      accItem.forEach(function (el) {
        el.classList.remove("active");
      });
      parent.classList.add("active");
    }
  });
};

window.addEventListener("load", activateAcc());

/***/ }),

/***/ "./src/blocks/modules/first-screen/first-screen.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/first-screen/first-screen.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-left',
    prevEl: '.slider-button-right'
  }
});

/***/ }),

/***/ "./src/blocks/modules/gallery/gallery.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/gallery/gallery.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
var activateGalleryModal = function activateGalleryModal() {
  var galleryBox = document.querySelector('.gallery__box');
  galleryBox.addEventListener('click', function (event) {
    var target = event.target;

    if (target.parentElement.classList.contains('gallery__item')) {
      var srcAttr = target.getAttribute('src');
      var body = document.querySelector('body');
      var html = createHtml(srcAttr);
      body.insertAdjacentHTML('beforeend', html);
      var modal = document.querySelector('.modal-image');
      var close = document.querySelector('.modal-icon');
      closeGalleryModal(modal, close);
    }
  });
};

var createHtml = function createHtml(src) {
  return "\n      <div class=\"modal-image\">\n        <div class=\"modal-image__box\">\n          <div class=\"modal-icon\"></div>\n          <img src=".concat(src, " alt=\"\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\">\n        </div>\n      </div>\n    ");
};

var closeGalleryModal = function closeGalleryModal(el, x) {
  el.addEventListener('click', function (event) {
    target = event.target;

    if (target == el || target == x) {
      el.remove();
    }
  });
};

window.addEventListener('load', activateGalleryModal());

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
var activateModal = function activateModal() {
  var btnModal = document.querySelectorAll('.first-screen__btn');
  var modal = document.querySelector('.modal');
  var body = document.querySelector('body');
  btnModal.forEach(function (el) {
    el.addEventListener('click', function (e) {
      modal.style.display = 'flex';
      body.style.overflowY = 'hidden';
    });
    closeModal(modal);
  });
};

var closeModal = function closeModal(el) {
  var modalContainer = document.querySelector('.modal__container');
  var body = document.querySelector('body');
  el.addEventListener('click', function (event) {
    target = event.target;

    if (target == el || target == modalContainer) {
      el.style.display = 'none';
      body.style.overflowY = 'visible';
    }
  });
};

window.addEventListener('load', activateModal());

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/form/form */ "./src/blocks/components/form/form.js");
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_form_form__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/gallery/gallery */ "./src/blocks/modules/gallery/gallery.js");
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_first_screen_first_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/first-screen/first-screen */ "./src/blocks/modules/first-screen/first-screen.js");
/* harmony import */ var _modules_first_screen_first_screen__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_first_screen_first_screen__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable */



 // Lazy Load

window.bLazy = new Blazy({
  // container: '.container',
  success: function success(element) {
    console.log("Element loaded: ", element.nodeName);
  }
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map