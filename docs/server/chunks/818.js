exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 8594:
/***/ ((module) => {

// Exports
module.exports = {
	"dragging": "EntryList_dragging__vKEe7"
};


/***/ }),

/***/ 5818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/ui/index.ts + 3 modules
var ui = __webpack_require__(2268);
// EXTERNAL MODULE: ./components/ui/index.ts + 5 modules
var components_ui = __webpack_require__(948);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(5574);
;// CONCATENATED MODULE: ./themes/dark-theme.ts


const darkTheme = (0,material_.createTheme)({
    palette: {
        mode: "dark",
        secondary: {
            main: "#C0C0C0"
        },
        error: {
            main: colors_.red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor: "#29877e"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./themes/light-theme.ts


const lightTheme = (0,material_.createTheme)({
    palette: {
        mode: "light",
        background: {
            default: colors_.grey[300]
        },
        primary: {
            main: "#A85751"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: colors_.red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            }
        }
    }
});

;// CONCATENATED MODULE: ./themes/index.ts



;// CONCATENATED MODULE: ./components/layouts/Layout.tsx







const Layout = ({ title ="OpenJira" , children  })=>{
    const { swTheme  } = (0,external_react_.useContext)(ui/* UIContext */.QE);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
        theme: !swTheme ? lightTheme : darkTheme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                sx: {
                    flexFlow: 1
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ui/* Navbar */.wp, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ui/* Sidebar */.YE, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            padding: "10px 20px"
                        },
                        children: children
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/layouts/index.ts



/***/ }),

/***/ 948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MH": () => (/* reexport */ EntryCard),
  "fT": () => (/* reexport */ EntryList),
  "wp": () => (/* reexport */ Navbar),
  "Tk": () => (/* reexport */ NewEntry),
  "YE": () => (/* reexport */ Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/icons-material/MenuOutlined"
var MenuOutlined_ = __webpack_require__(6248);
var MenuOutlined_default = /*#__PURE__*/__webpack_require__.n(MenuOutlined_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/ui/index.ts + 3 modules
var ui = __webpack_require__(2268);
;// CONCATENATED MODULE: ./components/ui/Navbar.tsx







const Navbar = ()=>{
    const { openSideMenu , swThemeChange , swTheme  } = (0,external_react_.useContext)(ui/* UIContext */.QE);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
        position: "sticky",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                    size: "large",
                    edge: "start",
                    onClick: openSideMenu,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((MenuOutlined_default()), {
                        color: "action"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        underline: "none",
                        color: "currentcolor",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h6",
                            children: " OpenJira"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                    style: {
                        border: "none",
                        height: 2,
                        margin: 0
                    },
                    component: "div",
                    sx: {
                        flexGrow: 1
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                    checked: swTheme,
                    onChange: swThemeChange,
                    name: "theme",
                    color: "primary"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "@mui/icons-material/MailOutlineOutlined"
var MailOutlineOutlined_ = __webpack_require__(5290);
var MailOutlineOutlined_default = /*#__PURE__*/__webpack_require__.n(MailOutlineOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/InboxOutlined"
var InboxOutlined_ = __webpack_require__(8409);
var InboxOutlined_default = /*#__PURE__*/__webpack_require__.n(InboxOutlined_);
;// CONCATENATED MODULE: ./components/ui/Sidebar.tsx






const menuItems = [
    "Inbox",
    "Starred",
    "Send Email",
    "Drafts"
];
const Sidebar = ()=>{
    const { sidemenuOpen , closeSideMenu  } = (0,external_react_.useContext)(ui/* UIContext */.QE);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
        anchor: "left",
        open: sidemenuOpen,
        onClose: closeSideMenu,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
            sx: {
                width: 250
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        padding: "5px 10px"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "h4",
                        children: " Menu "
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                    children: [
                        menuItems.map((text, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItem, {
                                button: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                        children: i % 2 ? /*#__PURE__*/ jsx_runtime_.jsx((InboxOutlined_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((MailOutlineOutlined_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                        primary: text
                                    })
                                ]
                            }, text)
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {})
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./context/entries/EntriesContext.tsx
var EntriesContext = __webpack_require__(6351);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/icons-material/DeleteForeverOutlined"
var DeleteForeverOutlined_ = __webpack_require__(58);
var DeleteForeverOutlined_default = /*#__PURE__*/__webpack_require__.n(DeleteForeverOutlined_);
// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(6234);
;// CONCATENATED MODULE: ./components/ui/EntryCard.tsx







const EntryCard = ({ entry  })=>{
    const router = (0,router_.useRouter)();
    const { startDragging , endDragging , delEntry  } = (0,external_react_.useContext)(EntriesContext/* EntriesContext */.t);
    const onDragStart = (event)=>{
        event.dataTransfer.setData("text", entry._id);
        startDragging();
    };
    const onDragEnd = ()=>{
        endDragging();
    };
    const onCardClick = ()=>{
        router.push(`/entries/${entry._id}`);
    };
    const test = ()=>{
        delEntry(entry, true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
        onDoubleClick: onCardClick,
        sx: {
            marginBottom: 1
        },
        draggable: true,
        onDragStart: onDragStart,
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardActionArea, {
            sx: {
                border: "1px solid "
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            whiteSpace: "pre-line"
                        },
                        children: entry.description
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardActions, {
                    sx: {
                        display: "flex",
                        justifyContent: "space-between",
                        paddingRight: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((DeleteForeverOutlined_default()), {
                            onClick: test,
                            color: "error",
                            sx: {
                                display: "flex",
                                justifyContent: "right",
                                alignItems: "right"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            variant: "body2",
                            children: [
                                " ",
                                `created ${utils/* dateFunctions.getFormatDistanceToNow */.P.getFormatDistanceToNow(entry.createdAt)} ago`,
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/ui/EntryList.module.css
var EntryList_module = __webpack_require__(8594);
var EntryList_module_default = /*#__PURE__*/__webpack_require__.n(EntryList_module);
;// CONCATENATED MODULE: ./components/ui/EntryList.tsx






const EntryList = ({ status  })=>{
    const { entries , isDragging , updatedEntry , endDragging  } = (0,external_react_.useContext)(EntriesContext/* EntriesContext */.t);
    const entriesByStatus = (0,external_react_.useMemo)(()=>entries.filter((entry)=>entry.status === status
        )
    , [
        entries,
        status
    ]);
    const allowDrop = (event)=>{
        event.preventDefault();
    };
    const onDropEntry = (event)=>{
        const id = event.dataTransfer.getData("text");
        const entry = entries.find((e)=>e._id === id
        );
        entry.status = status;
        updatedEntry(entry);
        endDragging();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onDrop: onDropEntry,
        onDragOver: allowDrop,
        className: isDragging ? (EntryList_module_default()).dragging : "",
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
            sx: {
                height: "calc(100vh - 250px)",
                overflow: "scroll",
                backgroundColor: "#C0C0C0"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                sx: {
                    opacity: isDragging ? 0.2 : 1,
                    transition: "all .3s",
                    padding: "5px"
                },
                children: entriesByStatus.map((_entry)=>/*#__PURE__*/ jsx_runtime_.jsx(EntryCard, {
                        entry: _entry
                    }, _entry._id)
                )
            })
        })
    });
};

// EXTERNAL MODULE: external "@mui/icons-material/AddCommentOutlined"
var AddCommentOutlined_ = __webpack_require__(541);
var AddCommentOutlined_default = /*#__PURE__*/__webpack_require__.n(AddCommentOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/SaveAltOutlined"
var SaveAltOutlined_ = __webpack_require__(4159);
var SaveAltOutlined_default = /*#__PURE__*/__webpack_require__.n(SaveAltOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/CancelPresentationOutlined"
var CancelPresentationOutlined_ = __webpack_require__(2970);
var CancelPresentationOutlined_default = /*#__PURE__*/__webpack_require__.n(CancelPresentationOutlined_);
;// CONCATENATED MODULE: ./components/ui/NewEntry.tsx







const NewEntry = ()=>{
    const { 0: isTouched , 1: setIsTouched  } = (0,external_react_.useState)(false);
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)("");
    const { addNewEntry , isAddingEntry , setIsAddingEntry  } = (0,external_react_.useContext)(EntriesContext/* EntriesContext */.t);
    const reset = ()=>{
        setInputValue("");
        setIsAddingEntry(false);
        setIsTouched(false);
    };
    const onTextFieldChange = (event)=>{
        setInputValue(event.target.value);
    };
    const onSave = ()=>{
        if (inputValue.length === 0) return;
        addNewEntry(inputValue);
        reset();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            marginBottom: 2,
            paddingX: 2
        },
        children: !isAddingEntry ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
            startIcon: /*#__PURE__*/ jsx_runtime_.jsx((AddCommentOutlined_default()), {}),
            fullWidth: true,
            variant: "outlined",
            onClick: ()=>setIsAddingEntry(true)
            ,
            children: " Add"
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                    fullWidth: true,
                    sx: {
                        marginTop: 2,
                        marginBottom: 1
                    },
                    placeholder: "Add new entry",
                    autoFocus: true,
                    multiline: true,
                    label: "New Entry",
                    error: inputValue.length <= 0 && isTouched,
                    value: inputValue,
                    onChange: onTextFieldChange,
                    onBlur: ()=>setIsTouched(true)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    display: "flex",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            variant: "outlined",
                            color: "error",
                            endIcon: /*#__PURE__*/ jsx_runtime_.jsx((CancelPresentationOutlined_default()), {}),
                            onClick: reset,
                            children: " Cancel"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            variant: "outlined",
                            color: "success",
                            endIcon: /*#__PURE__*/ jsx_runtime_.jsx((SaveAltOutlined_default()), {}),
                            onClick: onSave,
                            children: " Save"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/ui/index.ts







/***/ }),

/***/ 6234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ dateFunctions_namespaceObject)
});

// NAMESPACE OBJECT: ./utils/dateFunctions.ts
var dateFunctions_namespaceObject = {};
__webpack_require__.r(dateFunctions_namespaceObject);
__webpack_require__.d(dateFunctions_namespaceObject, {
  "getFormatDistanceToNow": () => (getFormatDistanceToNow)
});

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
;// CONCATENATED MODULE: ./utils/dateFunctions.ts

const getFormatDistanceToNow = (date)=>{
    const fromNow = (0,external_date_fns_.formatDistanceToNow)(date);
    return fromNow;
};

;// CONCATENATED MODULE: ./utils/index.ts



/***/ })

};
;