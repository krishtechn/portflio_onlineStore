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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_apiServices_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/apiServices/product */ \"(app-pages-browser)/./app/redux/apiServices/product.tsx\");\n/* harmony import */ var _Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navbar/Navbar */ \"(app-pages-browser)/./app/Components/Navbar/Navbar.tsx\");\n/* harmony import */ var modularize_import_loader_name_StarIcon_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! modularize-import-loader?name=StarIcon&from=default&as=default&join=../esm/icons/star!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/star.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostDetails = ()=>{\n    _s();\n    let router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    var _router_get;\n    const pageNumber = (_router_get = router.get(\"id\")) !== null && _router_get !== void 0 ? _router_get : \"1\";\n    const { data, isLoading, isError, error } = (0,_redux_apiServices_product__WEBPACK_IMPORTED_MODULE_3__.useGetUniqueProductDetailsQuery)(pageNumber);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center flex-row m-[20px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    \"aria-hidden\": \"true\",\n                    role: \"status\",\n                    className: \"inline w-4 h-4 mr-3 text-primary-800 animate-spin\",\n                    viewBox: \"0 0 100 101\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                            fill: \"#E5E7EB\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 12\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold text-base-black\",\n                    children: \"Loading Just Wait...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n            lineNumber: 17,\n            columnNumber: 11\n        }, undefined);\n    }\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-xl font-bold text-error-600 m-[20px]\",\n            children: \"something went wrong\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n            lineNumber: 29,\n            columnNumber: 11\n        }, undefined);\n    }\n    const showstar = ()=>{\n        for(let i = 0; i <= data.rating.rate; i++){\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-secondary-600 my-3 font-bold\",\n                children: [\n                    \"Rate:- \",\n                    data.rating.rate\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, undefined);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-[30px]\",\n                children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[25px] font-bold text-secondary-900 leading-[40px]\",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 18\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full flex justify-center items-center my-[20px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: data.image,\n                                className: \"w-[500px] h-[500px]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-secondary-600 my-3 text-[16px]\",\n                            children: data.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-secondary-600 my-3 font-bold\",\n                            children: data.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_StarIcon_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: \"orange\",\n                                    className: \"mx-1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_StarIcon_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: \"orange\",\n                                    className: \"mx-1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_StarIcon_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: \"orange\",\n                                    className: \"mx-1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 22\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_StarIcon_from_default_as_default_join_esm_icons_star_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    color: \"orange\",\n                                    className: \"mx-1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 22\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-error-600 font-bold my-3\",\n                                    children: [\n                                        \"RS:- \",\n                                        data.price,\n                                        \" Only\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, undefined),\n                                showstar()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 23\n                }, undefined) : \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Technical krish\\\\Documents\\\\assignment\\\\onlinestore\\\\app\\\\PostDetails\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PostDetails, \"u5SGw+qdz4BJrVveUKUFcLWRio0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        _redux_apiServices_product__WEBPACK_IMPORTED_MODULE_3__.useGetUniqueProductDetailsQuery\n    ];\n});\n_c = PostDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetails);\nvar _c;\n$RefreshReg$(_c, \"PostDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Qb3N0RGV0YWlscy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QjtBQUN3QjtBQUd5RDtBQUN6RDtBQUNUO0FBRXhDLE1BQU1LLGNBQWM7O0lBQ2hCLElBQUlDLFNBQVNMLGdFQUFlQTtRQUNUSztJQUFuQixNQUFNQyxhQUFhRCxDQUFBQSxjQUFBQSxPQUFPRSxHQUFHLENBQUMsbUJBQVhGLHlCQUFBQSxjQUFvQjtJQUN2QyxNQUFNLEVBQUVHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHViwyRkFBK0JBLENBQUNLO0lBRTVFLElBQUlHLFdBQVc7UUFDWCxxQkFDRSw4REFBQ0c7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFJQyxlQUFZO29CQUFPQyxNQUFLO29CQUFTSCxXQUFVO29CQUFvREksU0FBUTtvQkFBY0MsTUFBSztvQkFBT0MsT0FBTTs7c0NBQ2pKLDhEQUFDQzs0QkFBS0MsR0FBRTs0QkFBK1dILE1BQUs7Ozs7OztzQ0FDNVgsOERBQUNFOzRCQUFLQyxHQUFFOzRCQUFnbEJILE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFemxCLDhEQUFDSTtvQkFBR1QsV0FBVTs4QkFBb0M7Ozs7Ozs7Ozs7OztJQUd0RDtJQUVBLElBQUlILFNBQVM7UUFDWCxxQkFDRSw4REFBQ1k7WUFBR1QsV0FBVTtzQkFBNEM7Ozs7OztJQUU5RDtJQUVBLE1BQU1VLFdBQVM7UUFDYixJQUFJLElBQUlDLElBQUUsR0FBR0EsS0FBR2hCLEtBQUtpQixNQUFNLENBQUNDLElBQUksRUFBRUYsSUFBSTtZQUNyQyxxQkFBTyw4REFBQ0c7Z0JBQUVkLFdBQVU7O29CQUFvQztvQkFBUUwsS0FBS2lCLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7OztRQUNqRjtJQUNGO0lBRUYscUJBQ0k7OzBCQUNJLDhEQUFDeEIsaUVBQU1BOzs7OzswQkFDWCw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ1ZMLHFCQUFTLDhEQUFDSTs7c0NBQ04sOERBQUNVOzRCQUFHVCxXQUFVO3NDQUEyREwsS0FBS29CLEtBQUs7Ozs7OztzQ0FDcEYsOERBQUNoQjs0QkFBSUMsV0FBVTtzQ0FDZiw0RUFBQ2dCO2dDQUFJQyxLQUFLdEIsS0FBS3VCLEtBQUs7Z0NBQUVsQixXQUFVOzs7Ozs7Ozs7OztzQ0FFaEMsOERBQUNjOzRCQUFFZCxXQUFVO3NDQUF1Q0wsS0FBS3dCLFdBQVc7Ozs7OztzQ0FDcEUsOERBQUNMOzRCQUFFZCxXQUFVO3NDQUFxQ0wsS0FBS3lCLFFBQVE7Ozs7OztzQ0FFL0QsOERBQUNyQjs0QkFBSUMsV0FBVTs7OENBRVYsOERBQUNWLHVJQUFRQTtvQ0FBQytCLE9BQU07b0NBQVNyQixXQUFVOzs7Ozs7OENBQ25DLDhEQUFDVix1SUFBUUE7b0NBQUMrQixPQUFNO29DQUFTckIsV0FBVTs7Ozs7OzhDQUNuQyw4REFBQ1YsdUlBQVFBO29DQUFDK0IsT0FBTTtvQ0FBU3JCLFdBQVU7Ozs7Ozs4Q0FDbkMsOERBQUNWLHVJQUFRQTtvQ0FBQytCLE9BQU07b0NBQVNyQixXQUFVOzs7Ozs7Ozs7Ozs7c0NBRXhDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNjO29DQUFFZCxXQUFVOzt3Q0FBZ0M7d0NBQU1MLEtBQUsyQixLQUFLO3dDQUFDOzs7Ozs7O2dDQUU1RFo7Ozs7Ozs7Ozs7OztnQ0FRSDs7Ozs7Ozs7QUFPbkI7R0FsRU1uQjs7UUFDV0osNERBQWVBO1FBRWdCQyx1RkFBK0JBOzs7S0FIekVHO0FBb0VOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Qb3N0RGV0YWlscy9wYWdlLnRzeD9iZTRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgbGFuZGluZ0ltZyBmcm9tICcuLi8uLi9wdWJsaWMvbGFuZGluZ2ltZy5qcGcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUdldFVuaXF1ZVByb2R1Y3REZXRhaWxzUXVlcnksIHVzZUdldFVuaXF1ZVByb2R1Y3RzUXVlcnkgfSBmcm9tICcuLi9yZWR1eC9hcGlTZXJ2aWNlcy9wcm9kdWN0JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9Db21wb25lbnRzL05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcblxyXG5jb25zdCBQb3N0RGV0YWlscyA9ICgpID0+IHtcclxuICAgIGxldCByb3V0ZXIgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSByb3V0ZXIuZ2V0KCdpZCcpID8/IFwiMVwiO1xyXG4gICAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yIH0gPSB1c2VHZXRVbmlxdWVQcm9kdWN0RGV0YWlsc1F1ZXJ5KHBhZ2VOdW1iZXIpO1xyXG4gXHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXJvdyBtLVsyMHB4XSc+XHJcbiAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiByb2xlPVwic3RhdHVzXCIgY2xhc3NOYW1lPVwiaW5saW5lIHctNCBoLTQgbXItMyB0ZXh0LXByaW1hcnktODAwIGFuaW1hdGUtc3BpblwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICA8cGF0aCBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiIGZpbGw9XCIjRTVFN0VCXCIvPlxyXG4gICAgICA8cGF0aCBkPVwiTTkzLjk2NzYgMzkuMDQwOUM5Ni4zOTMgMzguNDAzOCA5Ny44NjI0IDM1LjkxMTYgOTcuMDA3OSAzMy41NTM5Qzk1LjI5MzIgMjguODIyNyA5Mi44NzEgMjQuMzY5MiA4OS44MTY3IDIwLjM0OEM4NS44NDUyIDE1LjExOTIgODAuODgyNiAxMC43MjM4IDc1LjIxMjQgNy40MTI4OUM2OS41NDIyIDQuMTAxOTQgNjMuMjc1NCAxLjk0MDI1IDU2Ljc2OTggMS4wNTEyNEM1MS43NjY2IDAuMzY3NTQxIDQ2LjY5NzYgMC40NDY4NDMgNDEuNzM0NSAxLjI3ODczQzM5LjI2MTMgMS42OTMyOCAzNy44MTMgNC4xOTc3OCAzOC40NTAxIDYuNjIzMjZDMzkuMDg3MyA5LjA0ODc0IDQxLjU2OTQgMTAuNDcxNyA0NC4wNTA1IDEwLjEwNzFDNDcuODUxMSA5LjU0ODU1IDUxLjcxOTEgOS41MjY4OSA1NS41NDAyIDEwLjA0OTFDNjAuODY0MiAxMC43NzY2IDY1Ljk5MjggMTIuNTQ1NyA3MC42MzMxIDE1LjI1NTJDNzUuMjczNSAxNy45NjQ4IDc5LjMzNDcgMjEuNTYxOSA4Mi41ODQ5IDI1Ljg0MUM4NC45MTc1IDI4LjkxMjEgODYuNzk5NyAzMi4yOTEzIDg4LjE4MTEgMzUuODc1OEM4OS4wODMgMzguMjE1OCA5MS41NDIxIDM5LjY3ODEgOTMuOTY3NiAzOS4wNDA5WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWJvbGQgdGV4dC1iYXNlLWJsYWNrJz5Mb2FkaW5nIEp1c3QgV2FpdC4uLjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpZiAoaXNFcnJvcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWVycm9yLTYwMCBtLVsyMHB4XSc+c29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gxPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2hvd3N0YXI9KCk9PntcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTw9ZGF0YS5yYXRpbmcucmF0ZTsgaSsrKXtcclxuICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT0ndGV4dC1zZWNvbmRhcnktNjAwIG15LTMgZm9udC1ib2xkJz5SYXRlOi0ge2RhdGEucmF0aW5nLnJhdGV9PC9wPlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLVszMHB4XSc+XHJcbiAgICAgICAgICAgIHtkYXRhID8gICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtWzI1cHhdIGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeS05MDAgbGVhZGluZy1bNDBweF0nPntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBteS1bMjBweF0nPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IGNsYXNzTmFtZT0ndy1bNTAwcHhdIGgtWzUwMHB4XScvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc2Vjb25kYXJ5LTYwMCBteS0zIHRleHQtWzE2cHhdJz57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc2Vjb25kYXJ5LTYwMCBteS0zIGZvbnQtYm9sZCc+e2RhdGEuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjb2xvcj0nb3JhbmdlJyBjbGFzc05hbWU9J214LTEnLz5cclxuICAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGNvbG9yPSdvcmFuZ2UnIGNsYXNzTmFtZT0nbXgtMScvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gY29sb3I9J29yYW5nZScgY2xhc3NOYW1lPSdteC0xJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjb2xvcj0nb3JhbmdlJyBjbGFzc05hbWU9J214LTEnLz5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZXJyb3ItNjAwIGZvbnQtYm9sZCBteS0zJz5SUzotIHtkYXRhLnByaWNlfSBPbmx5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAge3Nob3dzdGFyKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG1kOnctWzUwJV0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGEuaW1hZ2V9IGNsYXNzTmFtZT0nb2JqZWN0LWNvdmVyIHctZnVsbCBoLVszMDBweF0gcC1bMjBweF0gbWQ6cC0wJyBhbHQ9J2ltYWdlIGxvYWRpbmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+OlwiXCJ9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0RGV0YWlscyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlYXJjaFBhcmFtcyIsInVzZUdldFVuaXF1ZVByb2R1Y3REZXRhaWxzUXVlcnkiLCJOYXZiYXIiLCJTdGFySWNvbiIsIlBvc3REZXRhaWxzIiwicm91dGVyIiwicGFnZU51bWJlciIsImdldCIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJhcmlhLWhpZGRlbiIsInJvbGUiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiLCJoMSIsInNob3dzdGFyIiwiaSIsInJhdGluZyIsInJhdGUiLCJwIiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJjb2xvciIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/PostDetails/page.tsx\n"));

/***/ })

});