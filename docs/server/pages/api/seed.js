"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5660);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3295);



async function handler(req, res) {
    if (true) {
        return res.status(401).json({
            message: "Access denied"
        });
    }
    await _database__WEBPACK_IMPORTED_MODULE_0__.db.connect();
    await _models__WEBPACK_IMPORTED_MODULE_1__/* .Entry.deleteMany */ .k.deleteMany();
    await _models__WEBPACK_IMPORTED_MODULE_1__/* .Entry.insertMany */ .k.insertMany(_database__WEBPACK_IMPORTED_MODULE_0__/* .seedData.entries */ .W.entries);
    await _database__WEBPACK_IMPORTED_MODULE_0__.db.disconnect();
    res.status(200).json({
        message: "Success"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [719], () => (__webpack_exec__(736)));
module.exports = __webpack_exports__;

})();