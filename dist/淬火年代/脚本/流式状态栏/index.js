import * as __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_npm_async_wait_until_esm_ee35c30e__ from "https://testingcf.jsdelivr.net/npm/async-wait-until/+esm";

import * as __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_npm_pinia_esm_b723a504__ from "https://testingcf.jsdelivr.net/npm/pinia/+esm";

var __webpack_modules__ = {
  "./src/淬火年代/脚本/流式状态栏/index.ts"(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ \"pinia\");\n/* harmony import */ var async_wait_until__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! async-wait-until */ \"async-wait-until\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.vue */ \"./src/淬火年代/脚本/流式状态栏/App.vue\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_vue__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n$(async () => {\n    await waitGlobalInitialized('Mvu');\n    await (0,async_wait_until__WEBPACK_IMPORTED_MODULE_2__.waitUntil)(() => _.has(getVariables({ type: 'message' }), 'stat_data'));\n    const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)((_App_vue__WEBPACK_IMPORTED_MODULE_3___default())).use((0,pinia__WEBPACK_IMPORTED_MODULE_1__.createPinia)());\n    const el = document.querySelector('StatusPlaceHolderImpl');\n    if (el) {\n        const wrapper = document.createElement('div');\n        el.replaceWith(wrapper);\n        app.mount(wrapper);\n    }\n    $(window).on('pagehide', () => app.unmount());\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMv5res54Gr5bm05LujL+iEmuacrC/mtYHlvI/nirbmgIHmoI8vaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNJO0FBQ1M7QUFDakI7QUFFNUIsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ1gsTUFBTSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxNQUFNLDJEQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sR0FBRyxHQUFHLDhDQUFTLENBQUMsaURBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrREFBVyxFQUFFLENBQUMsQ0FBQztJQUM5QyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDM0QsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNQLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsic3JjOi8vdGF2ZXJuX2hlbHBlcl90ZW1wbGF0ZS9zcmMv5res54Gr5bm05LujL+iEmuacrC/mtYHlvI/nirbmgIHmoI8vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGNyZWF0ZVBpbmlhIH0gZnJvbSAncGluaWEnO1xuaW1wb3J0IHsgd2FpdFVudGlsIH0gZnJvbSAnYXN5bmMtd2FpdC11bnRpbCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5cbiQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCB3YWl0R2xvYmFsSW5pdGlhbGl6ZWQoJ012dScpO1xuICBhd2FpdCB3YWl0VW50aWwoKCkgPT4gXy5oYXMoZ2V0VmFyaWFibGVzKHsgdHlwZTogJ21lc3NhZ2UnIH0pLCAnc3RhdF9kYXRhJykpO1xuICBjb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKS51c2UoY3JlYXRlUGluaWEoKSk7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignU3RhdHVzUGxhY2VIb2xkZXJJbXBsJyk7XG4gIGlmIChlbCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5yZXBsYWNlV2l0aCh3cmFwcGVyKTtcbiAgICBhcHAubW91bnQod3JhcHBlcik7XG4gIH1cbiAgJCh3aW5kb3cpLm9uKCdwYWdlaGlkZScsICgpID0+IGFwcC51bm1vdW50KCkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/淬火年代/脚本/流式状态栏/index.ts\n\n}");
  },
  "./src/淬火年代/脚本/流式状态栏/App.vue"() {
    eval("{/* unplugin-vue-components disabled *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMv5res54Gr5bm05LujL+iEmuacrC/mtYHlvI/nirbmgIHmoI8vQXBwLnZ1ZSIsIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhdmVybl9oZWxwZXJfdGVtcGxhdGUvc3JjL+a3rOeBq+W5tOS7oy/ohJrmnKwv5rWB5byP54q25oCB5qCPL0FwcC52dWU/MDNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB1bnBsdWdpbi12dWUtY29tcG9uZW50cyBkaXNhYmxlZCAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/淬火年代/脚本/流式状态栏/App.vue\n\n}");
  },
  "async-wait-until"(module) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_npm_async_wait_until_esm_ee35c30e__;
  },
  pinia(module) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_npm_pinia_esm_b723a504__;
  },
  vue(module) {
    module.exports = Vue;
  }
};

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = __webpack_module_cache__[moduleId] = {
    exports: {}
  };
  if (!(moduleId in __webpack_modules__)) {
    delete __webpack_module_cache__[moduleId];
    var e = new Error("Cannot find module '" + moduleId + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

(() => {
  __webpack_require__.n = module => {
    var getter = module && module.__esModule ? () => module["default"] : () => module;
    __webpack_require__.d(getter, {
      a: getter
    });
    return getter;
  };
})();

(() => {
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key]
        });
      }
    }
  };
})();

(() => {
  __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

(() => {
  __webpack_require__.r = exports => {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
})();

var __webpack_exports__ = __webpack_require__("./src/淬火年代/脚本/流式状态栏/index.ts");