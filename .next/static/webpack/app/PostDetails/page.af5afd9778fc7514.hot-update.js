"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/PostDetails/page",{

/***/ "(app-pages-browser)/./app/PostDetails/page.tsx":
/*!**********************************!*\
  !*** ./app/PostDetails/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_apiServices_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/apiServices/product */ \"(app-pages-browser)/./app/redux/apiServices/product.tsx\");\n/* harmony import */ var _Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navbar/Navbar */ \"(app-pages-browser)/./app/Components/Navbar/Navbar.tsx\");\n/* harmony import */ var modularize_import_loader_name_Star_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modularize-import-loader?name=Star&from=default&as=default&join=../esm/icons/star!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/star.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostDetails = ()=>{\n    _s();\n    let router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    var _router_get;\n    const pageNumber = (_router_get = router.get(\"id\")) !== null && _router_get !== void 0 ? _router_get : \"1\";\n    const { data, isLoading, isError, error } = (0,_redux_apiServices_product__WEBPACK_IMPORTED_MODULE_3__.useGetUniqueProductDetailsQuery)(pageNumber);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center flex-row m-[20px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    \"aria-hidden\": \"true\",\n                    role: \"status\",\n                    className: \"inline w-4 h-4 mr-3 text-primary-800 animate-spin\",\n                    viewBox: \"0 0 100 101\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                            fill: \"#E5E7EB\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 12\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold text-base-black\",\n                    children: \"Loading Just Wait...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n            lineNumber: 17,\n            columnNumber: 11\n        }, undefined);\n    }\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-xl font-bold text-error-600 m-[20px]\",\n            children: \"something went wrong\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n            lineNumber: 29,\n            columnNumber: 11\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[30px]\",\n                children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[25px] font-bold text-secondary-900 leading-[40px]\",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 18\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full flex justify-center items-center my-[20px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: data.image,\n                                className: \"w-[500px] h-[500px]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-secondary-600 my-3 text-[16px]\",\n                            children: data.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-secondary-600 my-3 font-bold\",\n                            children: data.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-error-600 font-bold my-3\",\n                                    children: [\n                                        \"RS:- \",\n                                        data.price,\n                                        \" Only\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Star_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Star_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Star_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 22\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Star_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 22\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-secondary-600 my-3 font-bold\",\n                                    children: [\n                                        \"Rate:- \",\n                                        data.rating.rate\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 23\n                }, undefined) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PostDetails, \"u5SGw+qdz4BJrVveUKUFcLWRio0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        _redux_apiServices_product__WEBPACK_IMPORTED_MODULE_3__.useGetUniqueProductDetailsQuery\n    ];\n});\n_c = PostDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetails);\nvar _c;\n$RefreshReg$(_c, \"PostDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb3N0RGV0YWlscy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QjtBQUN3QjtBQUd5RDtBQUN6RDtBQUNiO0FBRXBDLE1BQU1LLGNBQWM7O0lBQ2hCLElBQUlDLFNBQVNMLGdFQUFlQTtRQUNUSztJQUFuQixNQUFNQyxhQUFhRCxDQUFBQSxjQUFBQSxPQUFPRSxHQUFHLENBQUMsbUJBQVhGLHlCQUFBQSxjQUFvQjtJQUN2QyxNQUFNLEVBQUVHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHViwyRkFBK0JBLENBQUNLO0lBRTVFLElBQUlHLFdBQVc7UUFDWCxxQkFDRSw4REFBQ0c7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFJQyxlQUFZO29CQUFPQyxNQUFLO29CQUFTSCxXQUFVO29CQUFvREksU0FBUTtvQkFBY0MsTUFBSztvQkFBT0MsT0FBTTs7c0NBQ2pKLDhEQUFDQzs0QkFBS0MsR0FBRTs0QkFBK1dILE1BQUs7Ozs7OztzQ0FDNVgsOERBQUNFOzRCQUFLQyxHQUFFOzRCQUFnbEJILE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFemxCLDhEQUFDSTtvQkFBR1QsV0FBVTs4QkFBb0M7Ozs7Ozs7Ozs7OztJQUd0RDtJQUVBLElBQUlILFNBQVM7UUFDWCxxQkFDRSw4REFBQ1k7WUFBR1QsV0FBVTtzQkFBNEM7Ozs7OztJQUU5RDtJQUVGLHFCQUNJOzswQkFDSSw4REFBQ1gsaUVBQU1BOzs7OzswQkFDWCw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ1ZMLHFCQUFTLDhEQUFDSTs7c0NBQ04sOERBQUNVOzRCQUFHVCxXQUFVO3NDQUEyREwsS0FBS2UsS0FBSzs7Ozs7O3NDQUNwRiw4REFBQ1g7NEJBQUlDLFdBQVU7c0NBQ2YsNEVBQUNXO2dDQUFJQyxLQUFLakIsS0FBS2tCLEtBQUs7Z0NBQUViLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVoQyw4REFBQ2M7NEJBQUVkLFdBQVU7c0NBQXVDTCxLQUFLb0IsV0FBVzs7Ozs7O3NDQUNwRSw4REFBQ0Q7NEJBQUVkLFdBQVU7c0NBQXFDTCxLQUFLcUIsUUFBUTs7Ozs7O3NDQUUvRCw4REFBQ2pCOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2M7b0NBQUVkLFdBQVU7O3dDQUFnQzt3Q0FBTUwsS0FBS3NCLEtBQUs7d0NBQUM7Ozs7Ozs7OENBRTdELDhEQUFDbEI7O3NEQUNELDhEQUFDVCxtSUFBSUE7Ozs7O3NEQUNMLDhEQUFDQSxtSUFBSUE7Ozs7O3NEQUNMLDhEQUFDQSxtSUFBSUE7Ozs7O3NEQUNMLDhEQUFDQSxtSUFBSUE7Ozs7Ozs7Ozs7OzhDQUVOLDhEQUFDd0I7b0NBQUVkLFdBQVU7O3dDQUFvQzt3Q0FBUUwsS0FBS3VCLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQU8xRTs7Ozs7Ozs7QUFPbkI7R0ExRE01Qjs7UUFDV0osNERBQWVBO1FBRWdCQyx1RkFBK0JBOzs7S0FIekVHO0FBNEROLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Qb3N0RGV0YWlscy9wYWdlLnRzeD9iZTRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgbGFuZGluZ0ltZyBmcm9tICcuLi8uLi9wdWJsaWMvbGFuZGluZ2ltZy5qcGcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUdldFVuaXF1ZVByb2R1Y3REZXRhaWxzUXVlcnksIHVzZUdldFVuaXF1ZVByb2R1Y3RzUXVlcnkgfSBmcm9tICcuLi9yZWR1eC9hcGlTZXJ2aWNlcy9wcm9kdWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9Db21wb25lbnRzL05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgeyBTdGFyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuXHJcbmNvbnN0IFBvc3REZXRhaWxzID0gKCkgPT4ge1xyXG4gICAgbGV0IHJvdXRlciA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgY29uc3QgcGFnZU51bWJlciA9IHJvdXRlci5nZXQoJ2lkJykgPz8gXCIxXCI7XHJcbiAgICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciwgZXJyb3IgfSA9IHVzZUdldFVuaXF1ZVByb2R1Y3REZXRhaWxzUXVlcnkocGFnZU51bWJlcik7XHJcbiBcclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGZsZXgtcm93IG0tWzIwcHhdJz5cclxuICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHJvbGU9XCJzdGF0dXNcIiBjbGFzc05hbWU9XCJpbmxpbmUgdy00IGgtNCBtci0zIHRleHQtcHJpbWFyeS04MDAgYW5pbWF0ZS1zcGluXCIgdmlld0JveD1cIjAgMCAxMDAgMTAxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCIgZmlsbD1cIiNFNUU3RUJcIi8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNOTMuOTY3NiAzOS4wNDA5Qzk2LjM5MyAzOC40MDM4IDk3Ljg2MjQgMzUuOTExNiA5Ny4wMDc5IDMzLjU1MzlDOTUuMjkzMiAyOC44MjI3IDkyLjg3MSAyNC4zNjkyIDg5LjgxNjcgMjAuMzQ4Qzg1Ljg0NTIgMTUuMTE5MiA4MC44ODI2IDEwLjcyMzggNzUuMjEyNCA3LjQxMjg5QzY5LjU0MjIgNC4xMDE5NCA2My4yNzU0IDEuOTQwMjUgNTYuNzY5OCAxLjA1MTI0QzUxLjc2NjYgMC4zNjc1NDEgNDYuNjk3NiAwLjQ0Njg0MyA0MS43MzQ1IDEuMjc4NzNDMzkuMjYxMyAxLjY5MzI4IDM3LjgxMyA0LjE5Nzc4IDM4LjQ1MDEgNi42MjMyNkMzOS4wODczIDkuMDQ4NzQgNDEuNTY5NCAxMC40NzE3IDQ0LjA1MDUgMTAuMTA3MUM0Ny44NTExIDkuNTQ4NTUgNTEuNzE5MSA5LjUyNjg5IDU1LjU0MDIgMTAuMDQ5MUM2MC44NjQyIDEwLjc3NjYgNjUuOTkyOCAxMi41NDU3IDcwLjYzMzEgMTUuMjU1MkM3NS4yNzM1IDE3Ljk2NDggNzkuMzM0NyAyMS41NjE5IDgyLjU4NDkgMjUuODQxQzg0LjkxNzUgMjguOTEyMSA4Ni43OTk3IDMyLjI5MTMgODguMTgxMSAzNS44NzU4Qzg5LjA4MyAzOC4yMTU4IDkxLjU0MjEgMzkuNjc4MSA5My45Njc2IDM5LjA0MDlaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWJhc2UtYmxhY2snPkxvYWRpbmcgSnVzdCBXYWl0Li4uPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlmIChpc0Vycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteGwgZm9udC1ib2xkIHRleHQtZXJyb3ItNjAwIG0tWzIwcHhdJz5zb21ldGhpbmcgd2VudCB3cm9uZzwvaDE+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtWzMwcHhdJz5cclxuICAgICAgICAgICAge2RhdGEgPyAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1bMjVweF0gZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5LTkwMCBsZWFkaW5nLVs0MHB4XSc+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG15LVsyMHB4XSc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gY2xhc3NOYW1lPSd3LVs1MDBweF0gaC1bNTAwcHhdJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnktNjAwIG15LTMgdGV4dC1bMTZweF0nPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnktNjAwIG15LTMgZm9udC1ib2xkJz57ZGF0YS5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWVycm9yLTYwMCBmb250LWJvbGQgbXktMyc+UlM6LSB7ZGF0YS5wcmljZX0gT25seTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnktNjAwIG15LTMgZm9udC1ib2xkJz5SYXRlOi0ge2RhdGEucmF0aW5nLnJhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctWzUwJV0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGEuaW1hZ2V9IGNsYXNzTmFtZT0nb2JqZWN0LWNvdmVyIHctZnVsbCBoLVszMDBweF0gcC1bMjBweF0gbWQ6cC0wJyBhbHQ9J2ltYWdlIGxvYWRpbmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+OlwiXCJ9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0RGV0YWlscyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlYXJjaFBhcmFtcyIsInVzZUdldFVuaXF1ZVByb2R1Y3REZXRhaWxzUXVlcnkiLCJOYXZiYXIiLCJTdGFyIiwiUG9zdERldGFpbHMiLCJyb3V0ZXIiLCJwYWdlTnVtYmVyIiwiZ2V0IiwiZGF0YSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsImFyaWEtaGlkZGVuIiwicm9sZSIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsImgxIiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsInAiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicHJpY2UiLCJyYXRpbmciLCJyYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/PostDetails/page.tsx\n"));

/***/ })

});