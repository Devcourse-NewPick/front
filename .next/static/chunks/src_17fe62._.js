(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_17fe62._.js", {

"[project]/src/components/common/svg/ToggleSVG.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ToggleIcon": (()=>ToggleIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
const ToggleIcon = ({ $toggle, className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnIconStyled, {
        className: className,
        $toggle: $toggle,
        viewBox: "0 0 40 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0.5",
                y: "1",
                width: "39",
                height: "19",
                rx: "9.5",
                fill: "currentColor",
                stroke: "currentColor",
                className: "back"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/ToggleSVG.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: $toggle ? '20.5' : '1',
                y: "1",
                width: "19",
                height: "19",
                rx: "9.5",
                fill: "currentColor",
                stroke: "currentColor",
                className: "front"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/ToggleSVG.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/svg/ToggleSVG.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, this);
};
_c = ToggleIcon;
const OnIconStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg`
    .back {
        fill: ${({ theme, $toggle })=>$toggle ? theme.color.primary : theme.color.border};
        stroke: ${({ theme, $toggle })=>$toggle ? theme.color.primary : theme.color.border};
        transition: fill 0.8s, stroke 0.5s;
    }
    
    .front {
        fill: #ffffff;
        stroke: ${({ theme, $toggle })=>$toggle ? theme.color.primary : theme.color.border};
        transition: x 0.5s, fill 0.5s, stroke 0.5s;
    }
`;
_c1 = OnIconStyled;
var _c, _c1;
__turbopack_refresh__.register(_c, "ToggleIcon");
__turbopack_refresh__.register(_c1, "OnIconStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/mypageData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BOOKMARK": (()=>BOOKMARK),
    "CATEGORY": (()=>CATEGORY),
    "MYSUMMARYNEWS": (()=>MYSUMMARYNEWS),
    "SUBSCRIBECATEGORY": (()=>SUBSCRIBECATEGORY),
    "USER1": (()=>USER1),
    "USER2": (()=>USER2),
    "USER3": (()=>USER3)
});
const USER1 = {
    "id": 1,
    "name": "gmail0",
    "email": "gmail0@gmail.com",
    "subscribe": 1,
    "keyword": [
        {
            "id": 1,
            "keyword": "키워드 1"
        },
        {
            "id": 2,
            "keyword": "키워드 2"
        },
        {
            "id": 3,
            "keyword": "키워드 3"
        },
        {
            "id": 4,
            "keyword": "키워드 4"
        },
        {
            "id": 5,
            "keyword": "키워드 5"
        }
    ]
};
const USER2 = {
    "id": 2,
    "name": "gmail1",
    "email": "gmail1@gmail.com",
    "subscribe": 2,
    "keyword": [
        {
            "id": 1,
            "keyword": "키워드 1"
        },
        {
            "id": 2,
            "keyword": "키워드 2"
        },
        {
            "id": 3,
            "keyword": "키워드 3"
        },
        {
            "id": 4,
            "keyword": "키워드 4"
        },
        {
            "id": 5,
            "keyword": "키워드 5"
        },
        {
            "id": 6,
            "keyword": "키워드 6"
        },
        {
            "id": 7,
            "keyword": "키워드 7"
        },
        {
            "id": 8,
            "keyword": "키워드 8"
        },
        {
            "id": 9,
            "keyword": "키워드 9"
        },
        {
            "id": 10,
            "keyword": "키워드 10"
        }
    ]
};
const USER3 = {
    "id": 2,
    "name": "gmail2",
    "email": "gmail3@gmail.com",
    "subscribe": 3,
    "keyword": [
        {
            "id": 1,
            "keyword": "키워드 1"
        },
        {
            "id": 2,
            "keyword": "키워드 2"
        },
        {
            "id": 3,
            "keyword": "키워드 3"
        }
    ]
};
const BOOKMARK = [
    {
        "id": 1,
        "bookMark": "북마크한 뉴스레터 1"
    },
    {
        "id": 2,
        "bookMark": "북마크한 뉴스레터 2"
    },
    {
        "id": 3,
        "bookMark": "북마크한 뉴스레터 3"
    },
    {
        "id": 4,
        "bookMark": "북마크한 뉴스레터 4"
    },
    {
        "id": 5,
        "bookMark": "북마크한 뉴스레터 5"
    },
    {
        "id": 6,
        "bookMark": "북마크한 뉴스레터 6"
    },
    {
        "id": 7,
        "bookMark": "북마크한 뉴스레터 7"
    }
];
const CATEGORY = [
    {
        "id": 1,
        "category": "정치"
    },
    {
        "id": 2,
        "category": "경제"
    },
    {
        "id": 3,
        "category": "IT"
    },
    {
        "id": 4,
        "category": "생활"
    },
    {
        "id": 5,
        "category": "세계"
    },
    {
        "id": 6,
        "category": "미국"
    },
    {
        "id": 7,
        "category": "여행"
    },
    {
        "id": 8,
        "category": "엔터"
    },
    {
        "id": 9,
        "category": "스포츠"
    }
];
const SUBSCRIBECATEGORY = [
    {
        "id": 1,
        "category": "정치"
    },
    {
        "id": 2,
        "category": "경제"
    },
    {
        "id": 3,
        "category": "IT"
    },
    {
        "id": 4,
        "category": "여행"
    },
    {
        "id": 5,
        "category": "엔터"
    },
    {
        "id": 6,
        "category": "스포츠"
    }
];
const MYSUMMARYNEWS = [
    {
        "id": 1,
        "categoryName": "정치",
        "userId": 1,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/id/1",
        "likes": 1,
        "title": "How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts"
    },
    {
        "id": 2,
        "categoryName": "경제",
        "userId": 1,
        "createdAt": "2025-01-01",
        "likes": 1,
        "img": "https://picsum.photos/id/3",
        "title": "How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage?"
    },
    {
        "id": 3,
        "categoryName": "IT",
        "likes": 0,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/id/5",
        "title": "How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts"
    },
    {
        "id": 4,
        "categoryName": "생활",
        "likes": 1,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/id/7",
        "title": "How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts"
    },
    {
        "id": 5,
        "categoryName": "세계",
        "likes": 0,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/id/2341",
        "title": "How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts"
    },
    {
        "id": 6,
        "categoryName": "미국",
        "likes": 1,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/id/254",
        "title": "How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/ModalContents.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
function ModalContents({ icon, title, content, outlineButton, filledButton, onCancelClick, onConfirmClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContentsStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contents",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ModalContents.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: content
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ModalContents.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ModalContents.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "btn-section",
                children: [
                    outlineButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        scheme: "secondary",
                        size: "medium",
                        onClick: onCancelClick,
                        children: outlineButton
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ModalContents.tsx",
                        lineNumber: 23,
                        columnNumber: 28
                    }, this),
                    filledButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        scheme: "primary",
                        size: "medium",
                        onClick: onConfirmClick,
                        children: filledButton
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/ModalContents.tsx",
                        lineNumber: 24,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/ModalContents.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/ModalContents.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ModalContents;
const ModalContentsStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.875rem;

    .contents {
        text-align: center;
        
        svg {
            width: 2rem;
            height: 2rem;
            margin-bottom: 1rem;
            color: ${({ theme })=>theme.color.primary};
        }

        h3 {
            margin-bottom: 0.25rem;
            font-size: ${({ theme })=>theme.fontSize.large};
        }

        p {
            max-width: 22rem;
            font-size: ${({ theme })=>theme.fontSize.extraSmall};
            word-break: keep-all;
            color: ${({ theme })=>theme.color.subtext};
        }
    }

    .btn-section {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        gap: 1.25rem;
        
        button {
            flex: 1;
            width: 10rem;
            height: 2.875rem;
        }
    }
`;
_c1 = ModalContentsStyled;
const __TURBOPACK__default__export__ = ModalContents;
var _c, _c1;
__turbopack_refresh__.register(_c, "ModalContents");
__turbopack_refresh__.register(_c1, "ModalContentsStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/profile/SubscribeToggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$svg$2f$ToggleSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/svg/ToggleSVG.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ModalContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/ModalContents.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
function SubscribeToggle() {
    _s();
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])();
    const [subsToggle, setSubsToggle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notSubsToggle, setNotSubsToggle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const toggleSubscribe = ()=>{
        setSubsToggle(!subsToggle);
    };
    const handleConfirm = ()=>{
        closeModal();
        router.push("/mypage");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubscribeToggle.useEffect": ()=>{
            const subscribeState = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER2"].subscribe;
            if (subscribeState === 1) {
                setSubsToggle(false);
            }
            if (subscribeState === 2) {
                setSubsToggle(true);
            }
            if (subscribeState === 3) {
                setSubsToggle(false);
                setNotSubsToggle(false);
            }
        }
    }["SubscribeToggle.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubscribeToggleStyled, {
        children: [
            notSubsToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: subsToggle ? "subscribe-on" : "subscribe-off",
                onClick: toggleSubscribe,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$svg$2f$ToggleSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleIcon"], {
                        className: "svg",
                        $toggle: subsToggle
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: subsToggle ? "구독 진행중" : "구독 일시정지 중"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            !notSubsToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "not-subscribe",
                        onClick: ()=>openModal("not-subscribe"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuBellOff"], {}, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "구독 상태가 아닙니다."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    isOpen && modalType === "not-subscribe" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isOpen,
                        onClose: closeModal,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ModalContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuBell"], {}, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                                lineNumber: 60,
                                columnNumber: 23
                            }, void 0),
                            title: "구독 상태가 아닙니다.",
                            content: `새롭게 뉴스레터를 구독해보시겠습니까? 확인을 누르시면 구독페이지로 넘어갑니다.`,
                            outlineButton: "취소",
                            filledButton: "확인",
                            onCancelClick: closeModal,
                            onConfirmClick: handleConfirm
                        }, void 0, false, {
                            fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(SubscribeToggle, "tQKUqOt4p2j03hWkUl2gcMf2fOU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SubscribeToggle;
const SubscribeToggleStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    .subscribe-on, .subscribe-off, .not-subscribe {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.725rem;
        padding: 1.25rem;
        border-radius: ${({ theme })=>theme.borderRadius.medium};
        height: 3.875rem;
        width: 14rem;
        font-weight: ${({ theme })=>theme.fontWeight.medium};
        cursor: pointer;

        &:hover {
            color: ${({ theme })=>theme.color.primary};
            border: 1px solid ${({ theme })=>theme.color.primary};
            transition: background-color 0.5s, border-color 0.5s, color 0.5s;
        }

        .svg {
            height: 2rem;
            width: 3.25rem;
        }
    }

    .subscribe-on {
        border: 1px solid ${({ theme })=>theme.color.primary};
        color: ${({ theme })=>theme.color.primary};
        background-color: ${({ theme })=>theme.color.colorBackground};
    }

    .subscribe-off {
        border: 1px solid ${({ theme })=>theme.color.line};
        color: ${({ theme })=>theme.color.text};
        background-color: ${({ theme })=>theme.color.surface};
    }

    .not-subscribe {
        border: 1px solid ${({ theme })=>theme.color.line};
        color: ${({ theme })=>theme.color.text};
        background-color: ${({ theme })=>theme.color.surface};

        svg {
            width: 1.25rem;
            height: 1.25rem;
            color: ${({ theme })=>theme.color.primary};
        }

        &:hover {
            border-color: ${({ theme })=>theme.color.primary};
            color: ${({ theme })=>theme.color.primary};
            background-color: ${({ theme })=>theme.color.colorBackground};
        }
    }
`;
_c1 = SubscribeToggleStyled;
const __TURBOPACK__default__export__ = SubscribeToggle;
var _c, _c1;
__turbopack_refresh__.register(_c, "SubscribeToggle");
__turbopack_refresh__.register(_c1, "SubscribeToggleStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/profile/MyProfile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$SubscribeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/profile/SubscribeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
;
function MyProfile() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/icons/profile_dummy.jpg",
                        alt: "prifile-img"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "profile-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER1"].name
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER1"].email
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER1"].keyword.map((keyword, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: keyword.keyword
                                    }, i, false, {
                                        fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subscribe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$SubscribeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/profile/MyProfile.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = MyProfile;
const ProfileStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 2rem;

    .profile {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;

        img {
            height: 100px;
            width: 100px;
            border: 1px solid ${({ theme })=>theme.color.line};
            border-radius: ${({ theme })=>theme.borderRadius.circle};
        }

        .profile-text {
            h4 {
                font-size: ${({ theme })=>theme.fontSize.medium};
            }

            p {
                color: ${({ theme })=>theme.color.lightGrey};
                padding: 0.25rem 0;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                gap: 0.125rem 0.875rem;
                color: ${({ theme })=>theme.color.subtext};
                font-size: ${({ theme })=>theme.fontSize.extraSmall};
            }
        }

        @media screen and ${({ theme })=>theme.mediaQuery.mobile} {
            flex-direction: column;
        };
    }

    @media screen and ${({ theme })=>theme.mediaQuery.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
    }
`;
_c1 = ProfileStyled;
const __TURBOPACK__default__export__ = MyProfile;
var _c, _c1;
__turbopack_refresh__.register(_c, "MyProfile");
__turbopack_refresh__.register(_c1, "ProfileStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/TabBtn.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
function TabBtn({ activeTab, setActiveTab }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtnStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab("subscribe"),
                className: activeTab === "subscribe" ? "active" : "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "구독한 뉴스레터 (",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MYSUMMARYNEWS"].length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mypage/TabBtn.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/TabBtn.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab("bookmark"),
                className: activeTab === "bookmark" ? "active" : "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "북마크한 뉴스레터 (",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOKMARK"].length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mypage/TabBtn.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/TabBtn.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab("newsletterSetting"),
                className: activeTab === "newsletterSetting" ? "active" : "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "뉴스레터 설정"
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/TabBtn.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/TabBtn.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/TabBtn.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = TabBtn;
const TabBtnStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    height: 100%;
    margin: 60px 0 40px 0;
    border-bottom: 1px solid ${({ theme })=>theme.color.line};

    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    button {
        cursor: pointer;
        padding: 0.5rem 0;
        width: 12rem;
        background-color: transparent;
        color: ${({ theme })=>theme.color.lightGrey};
        font-size: ${({ theme })=>theme.fontSize.small};
        margin-bottom: -1px;
        border-bottom: 1px solid transparent;
        transition: border-bottom 0.2s ease, color 0.2s ease;

        p {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }

        &.active {
            color: ${({ theme })=>theme.color.text};
            border-bottom: 1px solid ${({ theme })=>theme.color.text};
        }

        &:hover {
            color: ${({ theme })=>theme.color.text};
            border-bottom: 1px solid ${({ theme })=>theme.color.text};
        }
    }

`;
_c1 = TabBtnStyled;
const __TURBOPACK__default__export__ = TabBtn;
var _c, _c1;
__turbopack_refresh__.register(_c, "TabBtn");
__turbopack_refresh__.register(_c1, "TabBtnStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useMypage.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useMypage = ()=>{
    _s();
    const [selectCate, setSelectCate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allSelectCate, setAllSelectCate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 구독한 뉴스레터 네비게이션 스크롤 앵커 설정
    const handleAnchorNavigation = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    // 뉴스레터 설정 카테고리 선택
    const handleSelectCate = (cate)=>{
        setSelectCate((prev)=>{
            const isSelected = selectCate.includes(cate.category);
            let newSelectCate = [
                ...prev
            ];
            if (!isSelected) {
                newSelectCate = [
                    ...newSelectCate,
                    cate.category
                ];
            } else {
                newSelectCate = prev.filter((el)=>el !== cate.category);
            }
            // 전체 카테고리와 길이가 같으면 전체 true, 아니면 false
            if (newSelectCate.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].length) {
                setAllSelectCate(true);
            } else {
                setAllSelectCate(false);
            }
            console.log('지금꺼', newSelectCate);
            return newSelectCate;
        });
    };
    // 뉴스레터 설정 카테고리 전체 선택
    const handleSelectAll = ()=>{
        if (selectCate.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].length) {
            setSelectCate([]);
            setAllSelectCate(false);
        } else {
            setSelectCate(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY"].map((cate)=>cate.category));
            setAllSelectCate(true);
        }
    };
    return {
        handleAnchorNavigation,
        handleSelectCate,
        handleSelectAll,
        allSelectCate,
        selectCate,
        setSelectCate
    };
};
_s(useMypage, "BqdWMaCuMkwvxezMhwtkMY/I9bQ=");
const __TURBOPACK__default__export__ = useMypage;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/tabpage/MySubscribeNav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useMypage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function MySubscribeNav({ activeCategory }) {
    _s();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSticky, setIsSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { handleAnchorNavigation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [categoryInfo, setCategoryInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MySubscribeNav.useEffect": ()=>{
            async function fetchCategory() {
                try {
                    const res = await fetch(`http://localhost:3001/mysummary`);
                    if (!res.ok) {
                        throw new Error("No such news found");
                    }
                    const data = await res.json();
                    setCategoryInfo(data);
                } catch (err) {
                    console.error(err);
                }
            }
            fetchCategory();
        }
    }["MySubscribeNav.useEffect"], []);
    // 스크롤 좌우 넓어지는 효과
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MySubscribeNav.useEffect": ()=>{
            const handleScroll = {
                "MySubscribeNav.useEffect.handleScroll": ()=>{
                    if (!navRef.current) return;
                    console.log(window.scrollY);
                    if (window.scrollY > 364) {
                        setIsSticky(true);
                    } else {
                        setIsSticky(false);
                    }
                }
            }["MySubscribeNav.useEffect.handleScroll"];
            // 초기 스크롤 상태 확인
            handleScroll();
            window.addEventListener("scroll", handleScroll);
            return ({
                "MySubscribeNav.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["MySubscribeNav.useEffect"];
        }
    }["MySubscribeNav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubscribeInfoStyled, {
        ref: navRef,
        className: isSticky ? "full-width" : "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentsStyled, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "date",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {}, void 0, false, {
                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "2025.01.01"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowForward"], {}, void 0, false, {
                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "categories",
                    children: categoryInfo && categoryInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `category ${activeCategory === info.categoryName ? "active" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>handleAnchorNavigation(e, info.categoryName),
                                children: info.categoryName
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mypage/tabpage/MySubscribeNav.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(MySubscribeNav, "djQpOkUZfsYBO+A3yV049BFMKME=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = MySubscribeNav;
const SubscribeInfoStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    position: sticky;
    width: 100%;
    margin-top: -40px;
    top: 0;
    z-index: 999;
    background-color: transparent;
    border-bottom: none;
    transition: all 0.3s ease;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme })=>theme.color.surface};
        border-bottom: 1px solid ${({ theme })=>theme.color.border};
        transform: translateX(-50%);
        left: 50%;
        transition: all 0.3s ease;
        z-index: -1;
    }
    
    &.full-width::before {
        width: 100vw;
    }
`;
_c1 = SubscribeInfoStyled;
const ContentsStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    padding: 1rem;
    max-width: 1024px;
    margin: 0 auto;

    .date {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-weight: ${({ theme })=>theme.fontWeight.bold};
        font-size: ${({ theme })=>theme.fontSize.large};
        padding-bottom: 1rem;
    }

    .categories {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.2rem 1.25rem;
        color: ${({ theme })=>theme.color.subtext};
        
        .category {
            &.active button{
                color: ${({ theme })=>theme.color.primary};
                font-weight: ${({ theme })=>theme.fontWeight.medium};
            }
            
            button {
                color: ${({ theme })=>theme.color.subtext};
                cursor: pointer;
                font-size: ${({ theme })=>theme.fontSize.small};
                transition: all 0.3s ease;

                &:hover {
                    color: ${({ theme })=>theme.color.primary};
                    font-weight: ${({ theme })=>theme.fontWeight.medium};
                }
            }
        }
    }


`;
_c2 = ContentsStyled;
const __TURBOPACK__default__export__ = MySubscribeNav;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "MySubscribeNav");
__turbopack_refresh__.register(_c1, "SubscribeInfoStyled");
__turbopack_refresh__.register(_c2, "ContentsStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/Icons.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IconStyled": (()=>IconStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const IconStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
    background-color: transparent;
    border-radius: ${({ theme })=>theme.borderRadius.circle};
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${({ theme })=>theme.color.primary};
    }
    
    &:hover {
        background-color: ${({ theme })=>theme.color.colorBackground};
        transition: all .3s ease;
    }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/common(temporary)/LikeIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/Icons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
function LikeIcon() {
    _s();
    const [like, setLike] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLike = ()=>{
        setLike(!like);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: like ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
            onClick: handleLike,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeart"], {}, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/LikeIcon.tsx",
                lineNumber: 15,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/common(temporary)/LikeIcon.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
            onClick: handleLike,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeartEmpty"], {}, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/LikeIcon.tsx",
                lineNumber: 17,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/common(temporary)/LikeIcon.tsx",
            lineNumber: 17,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(LikeIcon, "VkN6Zs6j+ym57yOWhL0knaWHQuY=");
_c = LikeIcon;
const __TURBOPACK__default__export__ = LikeIcon;
var _c;
__turbopack_refresh__.register(_c, "LikeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/common(temporary)/LinkCopyIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/Icons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
;
;
function LinkCopyIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{},
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuLink2"], {}, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/LinkCopyIcon.tsx",
                lineNumber: 13,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/common(temporary)/LinkCopyIcon.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mypage/common(temporary)/LinkCopyIcon.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = LinkCopyIcon;
const __TURBOPACK__default__export__ = LinkCopyIcon;
var _c;
__turbopack_refresh__.register(_c, "LinkCopyIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/common(temporary)/OrigLinkIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/Icons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
;
;
function LikeIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{},
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuExternalLink"], {}, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/OrigLinkIcon.tsx",
                lineNumber: 13,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/common(temporary)/OrigLinkIcon.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mypage/common(temporary)/OrigLinkIcon.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = LikeIcon;
const __TURBOPACK__default__export__ = LikeIcon;
var _c;
__turbopack_refresh__.register(_c, "LikeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/common(temporary)/ThumbImg.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
function ThumbImg({ src, height, aspectratio = "auto" }) {
    const imageOnErrorHandler = (e)=>{
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/img/newpick_default_img.jpg";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContainerStyled, {
        height: height,
        aspectratio: aspectratio,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceStyled, {}, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/ThumbImg.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThumbImgStyled, {
                src: src,
                alt: "news-img",
                loading: "lazy",
                quality: 75,
                sizes: "100vw",
                fill: true,
                onError: imageOnErrorHandler
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/ThumbImg.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/common(temporary)/ThumbImg.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ThumbImg;
const ThumbImgStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
    position: relative !important;
    display: block;
    height: unset !important;
    width: 100%;

    max-height: 24rem;
    min-height: 2rem;

    object-fit: cover;
    content-visibility: auto;
    object-position: center;
`;
_c1 = ThumbImgStyled;
const SourceStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].source`
`;
_c2 = SourceStyled;
const ContainerStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    position: relative;
    display: block;

    overflow: hidden;
    border-radius: ${({ theme })=>theme.borderRadius.medium};
    margin-bottom: 1.25rem;

    height: ${({ height })=>height};

    ${ThumbImgStyled} {
        aspect-ratio: ${({ aspectratio })=>aspectratio};
    }
`;
_c3 = ContainerStyled;
const __TURBOPACK__default__export__ = ThumbImg;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "ThumbImg");
__turbopack_refresh__.register(_c1, "ThumbImgStyled");
__turbopack_refresh__.register(_c2, "SourceStyled");
__turbopack_refresh__.register(_c3, "ContainerStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/tabpage/MySubscribeContents.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/LikeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$LinkCopyIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/LinkCopyIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$OrigLinkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/OrigLinkIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/ThumbImg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function MySubscribeContents({ summaryInfo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MySummaryCategoryStyled, {
            children: summaryInfo && summaryInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-subs-content",
                    id: info.categoryName,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/mypage",
                                    className: "category-name",
                                    children: [
                                        info.categoryName,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowForward"], {}, void 0, false, {
                                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "title-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "title-text",
                                        children: info.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bottom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "img-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: info.img || null,
                                            height: 'auto'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "etc",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$LinkCopyIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$OrigLinkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text",
                                    children: info.summary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MySubscribeContents.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = MySubscribeContents;
const MySummaryCategoryStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    @keyframes moveForward {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(0.375rem);
        }
    }

    .my-subs-content {
        height: 100%;
        max-width: 100%;
        margin-top: 3.75rem;
        scroll-margin-top: 7.4rem;

        .top {
            margin-top: 3.75rem;
            margin-bottom: 1.875rem;

            .category-name {
                font-size: ${({ theme })=>theme.fontSize.medium};
                font-weight: ${({ theme })=>theme.fontWeight.medium};
                margin-bottom: 1.25rem;
                color: ${({ theme })=>theme.color.primary};

                &:hover {
                    svg {
                        animation: moveForward .7s linear infinite;
                    }
                }
            }

            .title-section {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;

                .title-text {
                    font-size: ${({ theme })=>theme.fontSize.large};
                    flex: 1;
                }
            }
        }

        .bottom {
            height: 100%;
            display: flex;
            flex-direction: row;
            gap: 1.25rem;

            .text {
                flex: 2;
                height: 100%;
                background-color: ${({ theme })=>theme.color.surface};
                border: 1px solid ${({ theme })=>theme.color.border};
                border-radius: ${({ theme })=>theme.borderRadius.medium};
                padding: 1.25rem;
                color: ${({ theme })=>theme.color.subtext};
            }

            .img-section {
                flex: 1;

                .etc {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: 1rem;
                }
            }

            @media (max-width: 768px) {
                flex-direction: column;

                .text, .img-section {
                    flex: none; /* flex 비율 대신 각자 100% 너비 (혹은 auto) */
                    width: 100%;
                }
            }
        }
    }
`;
_c1 = MySummaryCategoryStyled;
const __TURBOPACK__default__export__ = MySubscribeContents;
var _c, _c1;
__turbopack_refresh__.register(_c, "MySubscribeContents");
__turbopack_refresh__.register(_c1, "MySummaryCategoryStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Title.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
const Title = ({ children, size, weight, color })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledTitle, {
        size: size,
        weight: weight,
        color: color,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/Title.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
};
_c = Title;
const StyledTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
	font-size: ${({ theme, size })=>theme.heading[size].fontSize};
	font-weight: ${({ theme, weight })=>theme.fontWeight[weight || 'regular']};
	color: ${({ theme, color })=>theme.color[color || 'text']};
	transition: color 0.3s ease;
	margin: 0;
`;
_c1 = StyledTitle;
const __TURBOPACK__default__export__ = Title;
var _c, _c1;
__turbopack_refresh__.register(_c, "Title");
__turbopack_refresh__.register(_c1, "StyledTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
;
;
function NoContentsPage({ text, btnText, onClick, moveTo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NoContentsPageStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "medium",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            moveTo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: moveTo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    scheme: "primary",
                    size: "medium",
                    onClick: onClick,
                    children: btnText
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                scheme: "primary",
                size: "medium",
                onClick: onClick,
                children: btnText
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = NoContentsPage;
const NoContentsPageStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    text-align: center;
    margin: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    align-items: center;

    p {
        white-space: pre-line;
    }

    button {
        width: 12rem;
        font-weight: ${({ theme })=>theme.fontWeight.medium};
    }

`;
_c1 = NoContentsPageStyled;
const __TURBOPACK__default__export__ = NoContentsPage;
var _c, _c1;
__turbopack_refresh__.register(_c, "NoContentsPage");
__turbopack_refresh__.register(_c1, "NoContentsPageStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/tabpage/MySubscribe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribeNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MySubscribeNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribeContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MySubscribeContents.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function MySubscribe() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [summaryInfo, setSummaryInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MySubscribe.useEffect": ()=>{
            async function fetchSummary() {
                console.log("Params:", summaryInfo); // 값 확인
                try {
                    const res = await fetch(`http://localhost:3001/mysummary`);
                    if (!res.ok) {
                        throw new Error("No such news found");
                    }
                    const data = await res.json();
                    setSummaryInfo(data);
                } catch (err) {
                    console.error(err);
                }
            }
            fetchSummary();
        }
    }["MySubscribe.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MySubscribe.useEffect": ()=>{
            if (!summaryInfo) return;
            const categories = document.querySelectorAll(".my-subs-content");
            let sectionPositions = [];
            const calcPositions = {
                "MySubscribe.useEffect.calcPositions": ()=>{
                    sectionPositions = Array.from(categories).map({
                        "MySubscribe.useEffect.calcPositions": (cat)=>cat.offsetTop
                    }["MySubscribe.useEffect.calcPositions"]);
                }
            }["MySubscribe.useEffect.calcPositions"];
            const handleScroll = {
                "MySubscribe.useEffect.handleScroll": ()=>{
                    const currentScroll = window.scrollY - 110; // 높이 더하기 빼기 조절 (nav 높이값)
                    let activeIndex = 0;
                    for(let i = 0; i < sectionPositions.length; i++){
                        if (sectionPositions[i] <= currentScroll) {
                            activeIndex = i;
                        }
                    }
                    setActiveCategory(categories[activeIndex]?.id || "");
                }
            }["MySubscribe.useEffect.handleScroll"];
            const handleResize = {
                "MySubscribe.useEffect.handleResize": ()=>{
                    calcPositions();
                    handleScroll();
                }
            }["MySubscribe.useEffect.handleResize"];
            // 처음 셋팅
            calcPositions();
            handleScroll();
            // 스크롤, 리사이즈 이벤트 등록
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleResize);
            return ({
                "MySubscribe.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleResize);
                }
            })["MySubscribe.useEffect"];
        }
    }["MySubscribe.useEffect"], [
        summaryInfo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER1"].subscribe === 1 || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER1"].subscribe === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribeNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeCategory: activeCategory
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/tabpage/MySubscribe.tsx",
                    lineNumber: 80,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MySubscribeStyled, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribeContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        summaryInfo: summaryInfo
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/tabpage/MySubscribe.tsx",
                        lineNumber: 82,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/tabpage/MySubscribe.tsx",
                    lineNumber: 81,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: `뉴스레터를 구독 중이 아닙니다. \n 새로운 뉴스레터 구독을 시작해보시겠습니까?`,
            btnText: "구독 바로가기",
            moveTo: "/"
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MySubscribe.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this)
    }, void 0, false);
}
_s(MySubscribe, "iwGNssxy2aO/6OYWYJCG4SQZoyg=");
_c = MySubscribe;
const MySubscribeStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    position: relative;
    max-width: 1024px;
    margin: 0 auto;

`;
_c1 = MySubscribeStyled;
const __TURBOPACK__default__export__ = MySubscribe;
var _c, _c1;
__turbopack_refresh__.register(_c, "MySubscribe");
__turbopack_refresh__.register(_c1, "MySubscribeStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/tabpage/MyBookmark.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/ThumbImg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/LikeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
function MyBookmark() {
    _s();
    const [bookmarkInfo, setBookmarkInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyBookmark.useEffect": ()=>{
            async function fetchImgThumb() {
                console.log("Params:", bookmarkInfo); // 값 확인
                try {
                    const res = await fetch(`http://localhost:3001/mysummary`);
                    if (!res.ok) {
                        throw new Error("No such news found");
                    }
                    const data = await res.json();
                    setBookmarkInfo(data);
                } catch (err) {
                    console.error(err);
                }
            }
            fetchImgThumb();
        }
    }["MyBookmark.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOKMARK"].length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyBookmarkStyled, {
                children: bookmarkInfo && bookmarkInfo.map((info, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `#`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: info.img,
                                    aspectratio: 4 / 3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                    lineNumber: 41,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                lineNumber: 40,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `#`,
                                        className: "category",
                                        children: info.categoryName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 44,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `#`,
                                        className: "title",
                                        children: info.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "subtext",
                                        children: info.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 46,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "etc",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "date",
                                                children: info.createdAt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                                lineNumber: 48,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                                lineNumber: 50,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 47,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                lineNumber: 43,
                                columnNumber: 19
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: `북마크한 뉴스레터가 없습니다. \n 다른 뉴스레터를 찾아보세요.`,
            btnText: "오늘의 뉴스레터",
            moveTo: "/"
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
            lineNumber: 60,
            columnNumber: 11
        }, this)
    }, void 0, false);
}
_s(MyBookmark, "LLOxAl6t8W0Wt7VOUkn6FaIgZE8=");
_c = MyBookmark;
const MyBookmarkStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    display: grid;
    justify-items: start;
    justify-content: start;
    gap: 3rem 2rem;
    grid-template-columns: repeat(3, 1fr);

    .card {
        width: auto;
        height: 100%;

        .content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 1rem;

            .category {
                color: ${({ theme })=>theme.color.primary};
                font-size: ${({ theme })=>theme.fontSize.extraSmall};
                font-weight: ${({ theme })=>theme.fontWeight.medium};
                width: max-content;
            }

            .title, .subtext {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                word-break: keep-all;
            }

            .title {
                font-size: ${({ theme })=>theme.fontSize.large};
                line-height: 1.2;
                margin: 0;
            }

            .subtext {
                font-size: ${({ theme })=>theme.fontSize.extraSmall};
                color: ${({ theme })=>theme.color.subtext}
            }


            .etc {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .bar {
                    border-left: 1px solid ${({ theme })=>theme.color.border};
                    margin: 0 1.25rem;
                    height: 1.5rem;
                }

                .date {
                    font-size: ${({ theme })=>theme.fontSize.extraSmall};
                    color: ${({ theme })=>theme.color.lightGrey};
                }
            }
        }
    }

    @media (${({ theme })=>theme.mediaQuery.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (${({ theme })=>theme.mediaQuery.mobile}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
_c1 = MyBookmarkStyled;
const __TURBOPACK__default__export__ = MyBookmark;
var _c, _c1;
__turbopack_refresh__.register(_c, "MyBookmark");
__turbopack_refresh__.register(_c1, "MyBookmarkStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/tabpage/MyNewsSetting.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/mypage/common(temporary)/NewsletterSubscribe'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function MyNewsSetting() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyNewsletterSettingStyled, {
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER1"].subscribe === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsletterSubscribe, {}, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MyNewsSetting.tsx",
            lineNumber: 14,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: `뉴스레터 구독이 일시정지 중 입니다. \n 구독을 다시 시작하시겠습니까?`,
            btnText: "일시정지 해제하기",
            onClick: ()=>{}
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MyNewsSetting.tsx",
            lineNumber: 16,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mypage/tabpage/MyNewsSetting.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = MyNewsSetting;
const MyNewsletterSettingStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`

`;
_c1 = MyNewsletterSettingStyled;
const __TURBOPACK__default__export__ = MyNewsSetting;
var _c, _c1;
__turbopack_refresh__.register(_c, "MyNewsSetting");
__turbopack_refresh__.register(_c1, "MyNewsletterSettingStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/mypage/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$MyProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/profile/MyProfile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$TabBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/TabBtn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MySubscribe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyBookmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MyBookmark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyNewsSetting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MyNewsSetting.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function Page() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("subscribe");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "title",
                children: "마이페이지"
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$MyProfile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$TabBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeTab: activeTab,
                setActiveTab: setActiveTab
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tab-contents",
                children: [
                    activeTab === "subscribe" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/mypage/page.tsx",
                        lineNumber: 20,
                        columnNumber: 40
                    }, this),
                    activeTab === "bookmark" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyBookmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/mypage/page.tsx",
                        lineNumber: 21,
                        columnNumber: 39
                    }, this),
                    activeTab === "newsletterSetting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyNewsSetting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/mypage/page.tsx",
                        lineNumber: 22,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/mypage/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Page, "vt69Xf9rzJj4jP4t7bZMwY1MIms=");
_c = Page;
const PageStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    margin: 40px 0;

    .title {
        font-size: ${({ theme })=>theme.fontSize.large};
        margin-bottom: 1.25rem;
        font-weight: ${({ theme })=>theme.fontWeight.medium};
    }
`;
_c1 = PageStyled;
const __TURBOPACK__default__export__ = Page;
var _c, _c1;
__turbopack_refresh__.register(_c, "Page");
__turbopack_refresh__.register(_c1, "PageStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/mypage/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_17fe62._.js.map