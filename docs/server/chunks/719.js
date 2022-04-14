"use strict";
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 5660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "db": () => (/* reexport */ db_namespaceObject),
  "W": () => (/* reexport */ seedData)
});

// UNUSED EXPORTS: dbEntries

// NAMESPACE OBJECT: ./database/db.ts
var db_namespaceObject = {};
__webpack_require__.r(db_namespaceObject);
__webpack_require__.d(db_namespaceObject, {
  "connect": () => (connect),
  "disconnect": () => (disconnect)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./database/db.ts

/**
 * 0 disconnected
 * 1 connected
 * 2 connecting
 * 3 disconnecting
 */ const mongoConnection = {
    isConnected: 0
};
const connect = async ()=>{
    if (mongoConnection.isConnected === 1) {
        return;
    }
    if ((external_mongoose_default()).connections.length > 0) {
        mongoConnection.isConnected = (external_mongoose_default()).connections[0].readyState;
        if (mongoConnection.isConnected === 1) {
            console.log("Using last connection");
            return;
        }
        await external_mongoose_default().disconnect();
    }
    await external_mongoose_default().connect(process.env.MONGO_URL || "");
    mongoConnection.isConnected = 1;
    console.log("Connected to MongoDB: ", process.env.MONGO_URL);
};
const disconnect = async ()=>{
    if (false) {}
    if (mongoConnection.isConnected === 0) return;
    await external_mongoose_default().disconnect();
    mongoConnection.isConnected = 0;
    console.log("Disconnecting from MongoDB");
};

// EXTERNAL MODULE: ./models/index.ts + 1 modules
var models = __webpack_require__(3295);
;// CONCATENATED MODULE: ./database/dbEntries.ts



const getEntryById = async (id)=>{
    if (!isValidObjectId(id)) return null;
    await db.connect();
    const entry = await Entry.findById(id).lean();
    await db.disconnect();
    return JSON.parse(JSON.stringify(entry));
};

;// CONCATENATED MODULE: ./database/seed-data.ts
const seedData = {
    entries: [
        {
            description: "Lorem ipsum dolor sit amet,",
            status: "pending",
            createdAt: Date.now()
        },
        {
            description: "consectetur adipiscing elit,",
            status: "in-progress",
            createdAt: Date.now() - 1000000
        },
        {
            description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: "completed",
            createdAt: Date.now() - 100000
        }
    ]
};

;// CONCATENATED MODULE: ./database/index.ts





/***/ }),

/***/ 3295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* reexport */ Entry)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/Entry.ts


const entrySchema = new external_mongoose_.Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number
    },
    status: {
        type: String,
        enum: {
            values: [
                "pending",
                "in-progress",
                "completed"
            ],
            message: "{VALUE} is not a valid state"
        },
        default: "pending"
    }
});
const EntryModel = (external_mongoose_default()).models.Entry || external_mongoose_default().model("Entry", entrySchema);
/* harmony default export */ const Entry = (EntryModel);

;// CONCATENATED MODULE: ./models/index.ts



/***/ })

};
;