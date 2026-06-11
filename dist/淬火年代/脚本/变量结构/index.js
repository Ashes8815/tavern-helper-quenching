import * as __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js_8998c919__ from "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js";

var __webpack_modules__ = {
  "./src/淬火年代/schema.ts"(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Schema: () => (/* binding */ Schema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    世界: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        当前日期: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('当前剧情日期，格式 YYYY-MM-DD'),\n        当前场景: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('当前所在场景'),\n    }),\n    梁思申: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        好感度: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.number().describe('对{{user}}的好感度，0-200。关键事件可跳升20-40点，日常互动+2-5，冷淡-3/天'),\n        关系阶段: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum(['初识', '动摇', '越界', '沦陷']).describe('当前关系阶段。初识: 已婚者边界；动摇: 内心对比但克制；越界: 防线瓦解背德与渴望并存；沦陷: 彻底交付秘密关系'),\n        背德感: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.number().describe('越界后生效的罪恶感，0-100。与丈夫互动/见到女儿时上升，与{{user}}独处时暂时下降'),\n        是否已越界: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.boolean().describe('是否已发生实质性亲密关系'),\n    }),\n    宋运辉: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        察觉度: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.number().describe('对妻子异常的察觉程度，0-100。梁思申异常行为+1-3/次，谎言被揭穿则跳升'),\n    }),\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMv5res54Gr5bm05LujL3NjaGVtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0NBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0NBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0NBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0NBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0NBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJzcmM6Ly90YXZlcm5faGVscGVyX3RlbXBsYXRlL3NyYy/mt6zngavlubTku6Mvc2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTY2hlbWEgPSB6Lm9iamVjdCh7XG4gICAg5LiW55WMOiB6Lm9iamVjdCh7XG4gICAgICAgIOW9k+WJjeaXpeacnzogei5zdHJpbmcoKS5kZXNjcmliZSgn5b2T5YmN5Ymn5oOF5pel5pyf77yM5qC85byPIFlZWVktTU0tREQnKSxcbiAgICAgICAg5b2T5YmN5Zy65pmvOiB6LnN0cmluZygpLmRlc2NyaWJlKCflvZPliY3miYDlnKjlnLrmma8nKSxcbiAgICB9KSxcbiAgICDmooHmgJ3nlLM6IHoub2JqZWN0KHtcbiAgICAgICAg5aW95oSf5bqmOiB6LmNvZXJjZS5udW1iZXIoKS5kZXNjcmliZSgn5a+5e3t1c2VyfX3nmoTlpb3mhJ/luqbvvIwwLTIwMOOAguWFs+mUruS6i+S7tuWPr+i3s+WNhzIwLTQw54K577yM5pel5bi45LqS5YqoKzItNe+8jOWGt+a3oS0zL+WkqScpLFxuICAgICAgICDlhbPns7vpmLbmrrU6IHouZW51bShbJ+WIneivhicsICfliqjmkYcnLCAn6LaK55WMJywgJ+aypumZtyddKS5kZXNjcmliZSgn5b2T5YmN5YWz57O76Zi25q6144CC5Yid6K+GOiDlt7LlqZrogIXovrnnlYzvvJvliqjmkYc6IOWGheW/g+WvueavlOS9huWFi+WItu+8m+i2iueVjDog6Ziy57q/55Om6Kej6IOM5b635LiO5ri05pyb5bm25a2Y77yb5rKm6Zm3OiDlvbvlupXkuqTku5jnp5jlr4blhbPns7snKSxcbiAgICAgICAg6IOM5b635oSfOiB6LmNvZXJjZS5udW1iZXIoKS5kZXNjcmliZSgn6LaK55WM5ZCO55Sf5pWI55qE572q5oG25oSf77yMMC0xMDDjgILkuI7kuIjlpKvkupLliqgv6KeB5Yiw5aWz5YS/5pe25LiK5Y2H77yM5LiOe3t1c2VyfX3ni6zlpITml7bmmoLml7bkuIvpmY0nKSxcbiAgICAgICAg5piv5ZCm5bey6LaK55WMOiB6LmNvZXJjZS5ib29sZWFuKCkuZGVzY3JpYmUoJ+aYr+WQpuW3suWPkeeUn+Wunui0qOaAp+S6suWvhuWFs+ezuycpLFxuICAgIH0pLFxuICAgIOWui+i/kOi+iTogei5vYmplY3Qoe1xuICAgICAgICDlr5/op4nluqY6IHouY29lcmNlLm51bWJlcigpLmRlc2NyaWJlKCflr7nlprvlrZDlvILluLjnmoTlr5/op4nnqIvluqbvvIwwLTEwMOOAguaigeaAneeUs+W8guW4uOihjOS4uisxLTMv5qyh77yM6LCO6KiA6KKr5o+t56m/5YiZ6Lez5Y2HJyksXG4gICAgfSksXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/淬火年代/schema.ts\n\n}");
  },
  "./src/淬火年代/脚本/变量结构/index.ts"(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    eval('{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js */ "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schema */ "./src/淬火年代/schema.ts");\n\n\n$(() => {\n    (0,https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js__WEBPACK_IMPORTED_MODULE_0__.registerMvuSchema)(_schema__WEBPACK_IMPORTED_MODULE_1__.Schema);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMv5res54Gr5bm05LujL+iEmuacrC/lj5jph4/nu5PmnoQvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9IO0FBQzlFO0FBRXRDLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDTCxnSUFBaUIsQ0FBQywyQ0FBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbInNyYzovL3RhdmVybl9oZWxwZXJfdGVtcGxhdGUvc3JjL+a3rOeBq+W5tOS7oy/ohJrmnKwv5Y+Y6YeP57uT5p6EL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyTXZ1U2NoZW1hIH0gZnJvbSAnaHR0cHM6Ly90ZXN0aW5nY2YuanNkZWxpdnIubmV0L2doL1N0YWdlRG9nL3RhdmVybl9yZXNvdXJjZS9kaXN0L3V0aWwvbXZ1X3pvZC5qcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG4kKCgpID0+IHtcbiAgcmVnaXN0ZXJNdnVTY2hlbWEoU2NoZW1hKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/淬火年代/脚本/变量结构/index.ts\n\n}');
  },
  "https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js"(module) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_https_testingcf_jsdelivr_net_gh_StageDog_tavern_resource_dist_util_mvu_zod_js_8998c919__;
  },
  zod(module) {
    module.exports = z;
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

var __webpack_exports__ = __webpack_require__("./src/淬火年代/脚本/变量结构/index.ts");