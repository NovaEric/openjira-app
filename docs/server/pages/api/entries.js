"use strict";
(() => {
var exports = {};
exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3295);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5660);


function handler(req, res) {
    switch(req.method){
        case "GET":
            return getEntries(res);
        case "POST":
            return postEntry(req, res);
        default:
            return res.status(400).json({
                message: "Endpoint does not exist"
            });
    }
};
const getEntries = async (res)=>{
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.connect();
    const entries = await _models__WEBPACK_IMPORTED_MODULE_0__/* .Entry.find */ .k.find().sort({
        createdAt: "ascending"
    });
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
    res.status(200).json(entries);
};
const postEntry = async (req, res)=>{
    const { description =""  } = req.body;
    const newEntry = new _models__WEBPACK_IMPORTED_MODULE_0__/* .Entry */ .k({
        description,
        createdAt: Date.now()
    });
    try {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.connect();
        await newEntry.save();
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        return res.status(201).json(newEntry);
    } catch (error) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong!"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [719], () => (__webpack_exec__(3500)));
module.exports = __webpack_exports__;

})();