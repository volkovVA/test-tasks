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

/***/ "./src/blocks/components/certificate/certificate.js":
/*!**********************************************************!*\
  !*** ./src/blocks/components/certificate/certificate.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  setWrapperSize: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

/***/ }),

/***/ "./src/blocks/components/map/map.js":
/*!******************************************!*\
  !*** ./src/blocks/components/map/map.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
var activateMap = function activateMap() {
  var map = document.querySelector('.map');
  var mapActive = document.querySelector('.map__active');
  var closeBtn = document.querySelector('.map__close');
  map.addEventListener('click', function () {
    mapActive.classList.add('is-active');
  });
  closeMap(mapActive, closeBtn);
  fullScreenMode();
};

var closeMap = function closeMap(el, close) {
  el.addEventListener('click', function (event) {
    event.stopPropagation();
    target = event.target;

    if (target == el || target == close) {
      el.classList.remove('is-active');
    }
  });
};

var fullScreenMode = function fullScreenMode() {
  var fullScreenBtn = document.querySelector('.map__fullscreen');
  fullScreenBtn.addEventListener('click', function () {
    toggleFullScreen();
  }, false);

  var toggleFullScreen = function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
};

window.addEventListener('load', activateMap());

/***/ }),

/***/ "./src/blocks/components/menu/menu.js":
/*!********************************************!*\
  !*** ./src/blocks/components/menu/menu.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var activateBurgerMenu = function activateBurgerMenu() {
  var iconBtn = document.querySelector(".header__icon"),
      menu = document.querySelector(".menu"),
      menuItem = document.querySelectorAll(".menu__item");

  var noScroll = function noScroll() {
    window.scrollTo(0, 0);
  };

  var removeIsActive = function removeIsActive() {
    iconBtn.classList.remove("is-active");
    menu.classList.remove("is-active");
    window.removeEventListener("scroll", noScroll);
  };

  var addIsActive = function addIsActive() {
    iconBtn.classList.add("is-active");
    menu.classList.add("is-active");
    window.addEventListener("scroll", noScroll);
  };

  iconBtn.addEventListener("click", function () {
    if (iconBtn.classList.contains("is-active")) {
      removeIsActive();
    } else {
      addIsActive();
    }
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      removeIsActive();
    });
  });
};

window.addEventListener("load", activateBurgerMenu());

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_map_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/map/map */ "./src/blocks/components/map/map.js");
/* harmony import */ var _components_map_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_map_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/menu/menu */ "./src/blocks/components/menu/menu.js");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_menu_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_certificate_certificate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/certificate/certificate */ "./src/blocks/components/certificate/certificate.js");
/* harmony import */ var _components_certificate_certificate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_certificate_certificate__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map