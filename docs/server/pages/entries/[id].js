"use strict";
(() => {
var exports = {};
exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 6479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EntryPage": () => (/* binding */ EntryPage),
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/SaveAltOutlined"
var SaveAltOutlined_ = __webpack_require__(4159);
var SaveAltOutlined_default = /*#__PURE__*/__webpack_require__.n(SaveAltOutlined_);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowBackIosNew"
const ArrowBackIosNew_namespaceObject = require("@mui/icons-material/ArrowBackIosNew");
var ArrowBackIosNew_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIosNew_namespaceObject);
// EXTERNAL MODULE: ./context/entries/index.ts + 3 modules
var entries = __webpack_require__(1362);
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
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

;// CONCATENATED MODULE: ./models/Entry.ts


const entrySchema = new external_mongoose_namespaceObject.Schema({
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


;// CONCATENATED MODULE: ./database/dbEntries.ts



const getEntryById = async (id)=>{
    if (!(0,external_mongoose_namespaceObject.isValidObjectId)(id)) return null;
    await connect();
    const entry = await Entry.findById(id).lean();
    await disconnect();
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




// EXTERNAL MODULE: ./components/layouts/index.ts + 4 modules
var layouts = __webpack_require__(5818);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(6234);
;// CONCATENATED MODULE: ./pages/entries/[id].tsx










const validStatus = [
    "pending",
    "in-progress",
    "completed"
];
const EntryPage = ({ entry  })=>{
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)(entry.description);
    const { 0: radioStatus , 1: setRadioStatus  } = (0,external_react_.useState)(entry.status);
    const { 0: radioTouched , 1: setRadioTouched  } = (0,external_react_.useState)(false);
    const isNotValid = (0,external_react_.useMemo)(()=>inputValue.length <= 0 && radioTouched
    , [
        inputValue,
        radioTouched
    ]);
    const { updatedEntry  } = (0,external_react_.useContext)(entries/* EntriesContext */.te);
    const onTextChanges = (event)=>{
        setInputValue(event.target.value);
    };
    const onStatusChanges = (event)=>{
        setRadioStatus(event.target.value);
    };
    const onSave = ()=>{
        if (inputValue.trim().length === 0) return;
        updatedEntry({
            ...entry,
            status: radioStatus,
            description: inputValue
        }, true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts/* Layout */.A, {
        title: "Edit Entry",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                container: true,
                justifyContent: "center",
                sx: {
                    marginTop: 2
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    xs: 12,
                    sm: 8,
                    md: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.CardHeader, {
                                title: `Entry: ${inputValue}`,
                                subheader: `created ${utils/* dateFunctions.getFormatDistanceToNow */.P.getFormatDistanceToNow(entry.createdAt)} ago`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                        sx: {
                                            marginTop: 2,
                                            marginBottom: 1
                                        },
                                        fullWidth: true,
                                        placeholder: "Edit Entry",
                                        autoFocus: true,
                                        multiline: true,
                                        label: "Edit Entry",
                                        value: inputValue,
                                        onBlur: ()=>setRadioTouched(true)
                                        ,
                                        onChange: onTextChanges,
                                        helperText: isNotValid && "Add some text",
                                        error: isNotValid
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.FormControl, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.FormLabel, {
                                                children: " Status "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.RadioGroup, {
                                                row: true,
                                                value: radioStatus,
                                                onChange: onStatusChanges,
                                                children: validStatus.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                                                        value: option,
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx(material_.Radio, {}),
                                                        label: (0,material_.capitalize)(option)
                                                    }, option)
                                                )
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.CardActions, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    startIcon: /*#__PURE__*/ jsx_runtime_.jsx((SaveAltOutlined_default()), {}),
                                    variant: "contained",
                                    fullWidth: true,
                                    onClick: onSave,
                                    disabled: inputValue.length <= 0,
                                    children: "Save"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        sx: {
                            position: "fixed",
                            bottom: 30,
                            right: 30,
                            border: "1px solid black"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowBackIosNew_default()), {
                            color: "primary"
                        })
                    })
                })
            })
        ]
    });
};
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
const getServerSideProps = async ({ params  })=>{
    const { id  } = params;
    const entry = await getEntryById(id);
    if (!entry) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            entry: entry
        }
    };
};
/* harmony default export */ const _id_ = (EntryPage);


/***/ }),

/***/ 541:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCommentOutlined");

/***/ }),

/***/ 2970:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CancelPresentationOutlined");

/***/ }),

/***/ 58:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DeleteForeverOutlined");

/***/ }),

/***/ 8409:
/***/ ((module) => {

module.exports = require("@mui/icons-material/InboxOutlined");

/***/ }),

/***/ 5290:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MailOutlineOutlined");

/***/ }),

/***/ 6248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MenuOutlined");

/***/ }),

/***/ 4159:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SaveAltOutlined");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 5574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3142:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,537,818,362], () => (__webpack_exec__(6479)));
module.exports = __webpack_exports__;

})();