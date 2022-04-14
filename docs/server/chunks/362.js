"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 1362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "te": () => (/* reexport */ EntriesContext/* EntriesContext */.t),
  "qj": () => (/* reexport */ EntriesProvider),
  "De": () => (/* reexport */ entriesReducer)
});

// EXTERNAL MODULE: ./context/entries/EntriesContext.tsx
var EntriesContext = __webpack_require__(6351);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./apis/entriesApi.ts

const entriesApi = external_axios_default().create({
    baseURL: "/api"
});
/* harmony default export */ const apis_entriesApi = (entriesApi);

// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__(3142);
;// CONCATENATED MODULE: ./context/entries/EntriesProvider.tsx





const Entries_INITIAL_STATE = {
    entries: [],
    isAddingEntry: false,
    isDragging: false
};
const EntriesProvider = ({ children  })=>{
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(entriesReducer, Entries_INITIAL_STATE);
    const { enqueueSnackbar  } = (0,external_notistack_.useSnackbar)();
    const addNewEntry = async (description)=>{
        const { data  } = await apis_entriesApi.post("/entries", {
            description
        });
        dispatch({
            type: "[Entry] Add-Entry",
            payload: data
        });
    };
    const updatedEntry = async ({ _id , description , status  }, showSnackbar = false)=>{
        try {
            const { data  } = await apis_entriesApi.put(`/entries/${_id}`, {
                description,
                status
            });
            dispatch({
                type: "[Entry] Updated-Entry",
                payload: data
            });
            if (showSnackbar) {
                enqueueSnackbar("Entry updated", {
                    variant: "success",
                    autoHideDuration: 2000,
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    }
                });
            }
        } catch (error) {
            console.log({
                error
            });
        }
    };
    const setIsAddingEntry = (adding)=>{
        dispatch({
            type: "[Entry] isAddingEntry",
            payload: adding
        });
    };
    const startDragging = ()=>{
        dispatch({
            type: "[Entry] startDragging"
        });
    };
    const endDragging = ()=>{
        dispatch({
            type: "[Entry] endDragging"
        });
    };
    const getEntries = async ()=>{
        const { data  } = await apis_entriesApi.get("/entries");
        dispatch({
            type: "[Entry] Get-Entries",
            payload: data
        });
    };
    const delEntry = async ({ _id  }, showSnackbar = false)=>{
        try {
            const { data  } = await apis_entriesApi["delete"](`/entries/${_id}`);
            dispatch({
                type: "[Entry] Del-Entry",
                payload: data
            });
            if (showSnackbar) {
                enqueueSnackbar("Entry deleted", {
                    variant: "error",
                    autoHideDuration: 2000,
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    }
                });
            }
        } catch (error) {
            console.log({
                error
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        getEntries();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(EntriesContext/* EntriesContext.Provider */.t.Provider, {
        value: {
            ...state,
            addNewEntry,
            setIsAddingEntry,
            startDragging,
            endDragging,
            updatedEntry,
            delEntry
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./context/entries/entriesReducer.ts
const entriesReducer = (state, action)=>{
    switch(action.type){
        case "[Entry] Add-Entry":
            return {
                ...state,
                entries: [
                    ...state.entries,
                    action.payload
                ]
            };
        case "[Entry] isAddingEntry":
            return {
                ...state,
                isAddingEntry: action.payload
            };
        case "[Entry] startDragging":
            return {
                ...state,
                isDragging: true
            };
        case "[Entry] endDragging":
            return {
                ...state,
                isDragging: false
            };
        case "[Entry] Updated-Entry":
            return {
                ...state,
                entries: state.entries.map((entry)=>{
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status;
                        entry.description = action.payload.description;
                    }
                    return entry;
                })
            };
        case "[Entry] Get-Entries":
            return {
                ...state,
                entries: [
                    ...action.payload
                ]
            };
        case "[Entry] Del-Entry":
            return {
                ...state,
                entries: state.entries.filter((entry)=>entry._id !== action.payload._id
                )
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./context/entries/index.ts





/***/ })

};
;