"use strict";
(() => {
var exports = {};
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3295);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5660);


function handler(req, res) {
    // const {id} = req.query;
    // if ( !mongoose.isValidObjectId(id) ) {
    //     return res.status(400).json({ message: id + ' is not a valid ID' });
    // };
    switch(req.method){
        case "PUT":
            return updateEntry(req, res);
        case "GET":
            return getEntryByID(req, res);
        case "DELETE":
            return delEntryByID(req, res);
        default:
            return res.status(400).json({
                message: "Method does not exist"
            });
    }
};
const getEntryByID = async (req, res)=>{
    const { id  } = req.query;
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.connect();
    const entryByID = await _models__WEBPACK_IMPORTED_MODULE_0__/* .Entry.findById */ .k.findById(id);
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
    if (!entryByID) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        return res.status(400).json({
            message: "Nothing found with ID: " + id
        });
    }
    res.status(200).json(entryByID);
};
const delEntryByID = async (req, res)=>{
    const { id  } = req.query;
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.connect();
    const entryByID = await _models__WEBPACK_IMPORTED_MODULE_0__/* .Entry.findByIdAndDelete */ .k.findByIdAndDelete(id);
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
    if (!entryByID) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        return res.status(400).json({
            message: "Nothing found with ID: " + id
        });
    }
    res.status(200).json(entryByID);
};
const updateEntry = async (req, res)=>{
    const { id  } = req.query;
    await _database__WEBPACK_IMPORTED_MODULE_1__.db.connect();
    const entryToUpdate = await _models__WEBPACK_IMPORTED_MODULE_0__/* .Entry.findById */ .k.findById(id);
    if (!entryToUpdate) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        return res.status(400).json({
            message: "Nothing found with ID: " + id
        });
    }
    const { description =entryToUpdate.description , status =entryToUpdate.status ,  } = req.body;
    try {
        const updatedEntry = await _models__WEBPACK_IMPORTED_MODULE_0__/* .Entry.findByIdAndUpdate */ .k.findByIdAndUpdate(id, {
            description,
            status
        }, {
            runValidators: true,
            new: true
        });
        // the below is the same as the above 
        // entryToUpdate.description = description;
        // entryToUpdate.status = status;
        // await entryToUpdate.save();
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        res.status(200).json(updatedEntry);
    } catch (error) {
        await _database__WEBPACK_IMPORTED_MODULE_1__.db.disconnect();
        res.status(400).json({
            message: error.errors.status.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [719], () => (__webpack_exec__(130)));
module.exports = __webpack_exports__;

})();