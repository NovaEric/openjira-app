"use strict";
exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 6351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EntriesContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EntriesContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});


/***/ }),

/***/ 2268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "QE": () => (/* reexport */ UIContext),
  "JP": () => (/* reexport */ UIProvider),
  "_3": () => (/* reexport */ uiReducer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./context/ui/UIContext.tsx

const UIContext = /*#__PURE__*/ (0,external_react_.createContext)({});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./context/ui/UIProvider.tsx



const UI_INITIAL_STATE = {
    sidemenuOpen: false,
    swTheme: true
};
const UIProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(uiReducer, UI_INITIAL_STATE);
    const openSideMenu = ()=>{
        dispatch({
            type: "UI - Open Sidebar"
        });
    };
    const closeSideMenu = ()=>{
        dispatch({
            type: "UI - Close Sidebar"
        });
    };
    const swThemeChange = ()=>{
        dispatch({
            type: "UI - Theme Change"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(UIContext.Provider, {
        value: {
            ...state,
            openSideMenu,
            closeSideMenu,
            swThemeChange
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./context/ui/uiReducer.ts
const uiReducer = (state, action)=>{
    switch(action.type){
        case "UI - Open Sidebar":
            return {
                ...state,
                sidemenuOpen: true
            };
        case "UI - Close Sidebar":
            return {
                ...state,
                sidemenuOpen: false
            };
        case "UI - Theme Change":
            return {
                ...state,
                swTheme: !state.swTheme
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./context/ui/index.ts





/***/ })

};
;