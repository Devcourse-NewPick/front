(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_9a1d20._.js", {

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
"[project]/src/components/common/icon/LikeIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                fileName: "[project]/src/components/common/icon/LikeIcon.tsx",
                lineNumber: 15,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icon/LikeIcon.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
            onClick: handleLike,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeartEmpty"], {}, void 0, false, {
                fileName: "[project]/src/components/common/icon/LikeIcon.tsx",
                lineNumber: 17,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icon/LikeIcon.tsx",
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
"[project]/src/components/common/icon/LinkCopyIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                fileName: "[project]/src/components/common/icon/LinkCopyIcon.tsx",
                lineNumber: 13,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icon/LinkCopyIcon.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/icon/LinkCopyIcon.tsx",
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
"[project]/src/components/common/MoveButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function MoveButton({ onClick, frontIcon, backIcon, text, className, width }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoveButtonStyled, {
        scheme: "monoOutline",
        onClick: onClick,
        className: className,
        width: width,
        children: [
            frontIcon,
            text,
            backIcon
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/MoveButton.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = MoveButton;
const MoveButtonStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])`
    border-radius: ${({ theme })=>theme.borderRadius.capsule};
    color: ${({ theme })=>theme.color.subtext};
    width: ${({ width })=>width || "fit-content"};
    height: fit-content;

    svg {
        color: ${({ theme })=>theme.color.subtext};
    }
`;
_c1 = MoveButtonStyled;
const __TURBOPACK__default__export__ = MoveButton;
var _c, _c1;
__turbopack_refresh__.register(_c, "MoveButton");
__turbopack_refresh__.register(_c1, "MoveButtonStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/articleDetail/TitleSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icon/LikeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LinkCopyIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icon/LinkCopyIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$MoveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/MoveButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
function TitleSection({ title, date, category }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TitleSectionStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$MoveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClick: ()=>router.back(),
                text: "이전으로",
                frontIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoArrowBack"], {}, void 0, false, {
                    fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                    lineNumber: 23,
                    columnNumber: 72
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: '#',
                        className: "category",
                        children: category
                    }, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "date",
                        children: date
                    }, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "icons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LinkCopyIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/articleDetail/TitleSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(TitleSection, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TitleSection;
const TitleSectionStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme })=>theme.color.border};

    .title-section {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        margin: 1.25rem 0;

        .category {
            color: ${({ theme })=>theme.color.primary};
            font-weight: ${({ theme })=>theme.fontWeight.medium};
        }
        
        .icons {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            margin-top: 0.75rem;
        }

        .date {
            color: ${({ theme })=>theme.color.lightGrey};
            font-size: ${({ theme })=>theme.fontSize.extraSmall};
        }
    }

`;
_c1 = TitleSectionStyled;
const __TURBOPACK__default__export__ = TitleSection;
var _c, _c1;
__turbopack_refresh__.register(_c, "TitleSection");
__turbopack_refresh__.register(_c1, "TitleSectionStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/dateFormat.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "dateFormat": (()=>dateFormat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
'use client';
;
function dateFormat(date) {
    const dateFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format("YYYY-MM-DD");
    return dateFormat;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/common(temporary)/SummaryText.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function SummaryText({ children, className, flex }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryContainerStyled, {
        flex: flex,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryTitleStyled, {
                children: "AI 요약"
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/SummaryText.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryTextStyled, {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/SummaryText.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/common(temporary)/SummaryText.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = SummaryText;
const SummaryContainerStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    flex: ${({ flex })=>flex || "0"};
    background-color: ${({ theme })=>theme.color.surface};
    border: 1px solid ${({ theme })=>theme.color.border};
    border-radius: ${({ theme })=>theme.borderRadius.soft};
    padding: 1.25rem;
`;
_c1 = SummaryContainerStyled;
const SummaryTextStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p`
    color: ${({ theme })=>theme.color.subtext};
`;
_c2 = SummaryTextStyled;
const SummaryTitleStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h5`
    font-size: ${({ theme })=>theme.fontSize.small};
    margin-bottom: 0.5rem;
`;
_c3 = SummaryTitleStyled;
const __TURBOPACK__default__export__ = SummaryText;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "SummaryText");
__turbopack_refresh__.register(_c1, "SummaryContainerStyled");
__turbopack_refresh__.register(_c2, "SummaryTextStyled");
__turbopack_refresh__.register(_c3, "SummaryTitleStyled");
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
'use client';
;
;
;
function ThumbImg({ src, height, className, aspectratio = "auto" }) {
    const imageOnErrorHandler = (e)=>{
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/img/newpick_default_img.jpg";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContainerStyled, {
        height: height,
        className: className,
        aspectratio: aspectratio,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SourceStyled, {}, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/ThumbImg.tsx",
                lineNumber: 26,
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
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/common(temporary)/ThumbImg.tsx",
        lineNumber: 25,
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
    overflow: hidden;
    border-radius: ${({ theme })=>theme.borderRadius.soft};

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
        "categoryName": "1정치",
        "userId": 1,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/300/860",
        "likes": 1,
        "title": "Hello World",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts",
        "viewcount": 1
    },
    {
        "id": 2,
        "categoryName": "2경제",
        "userId": 1,
        "createdAt": "2025-01-01",
        "likes": 1,
        "img": "https://picsum.photos/300/860",
        "title": "2공수처의 수사·체포영장 집행은 불법? 팩트체크 ✅",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage?",
        "viewcount": 2
    },
    {
        "id": 3,
        "categoryName": "3IT",
        "likes": 0,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/300/860",
        "title": "315개월 만에 찾아온 가자지구 전쟁 휴전 🕊️",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts",
        "viewcount": 3
    },
    {
        "id": 4,
        "categoryName": "4생활",
        "likes": 1,
        "createdAt": "2025-01-01",
        "img": "",
        "title": "4도수치료 비용 1만 원 → 9만 원? 실손보험 개혁안 총정리 🔍",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts",
        "viewcount": 4
    },
    {
        "id": 5,
        "categoryName": "5세계",
        "likes": 0,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/300/860",
        "title": "증시 전망 한국은 '바닥'?",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts",
        "viewcount": 5
    },
    {
        "id": 6,
        "categoryName": "6미국",
        "likes": 1,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/300/860",
        "title": "공수처, ‘내란 우두머리’ 혐의 윤석열 대통령 체포",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts",
        "viewcount": 6
    },
    {
        "id": 7,
        "categoryName": "1정치",
        "userId": 1,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/300/860",
        "likes": 1,
        "title": "Hello World",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts",
        "viewcount": 1
    },
    {
        "id": 8,
        "categoryName": "2경제",
        "userId": 1,
        "createdAt": "2025-01-01",
        "likes": 1,
        "img": "https://picsum.photos/300/860",
        "title": "2공수처의 수사·체포영장 집행은 불법? 팩트체크 ✅",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage?",
        "viewcount": 2
    },
    {
        "id": 9,
        "categoryName": "3IT",
        "likes": 0,
        "createdAt": "2025-01-01",
        "img": "https://picsum.photos/300/860",
        "title": "315개월 만에 찾아온 가자지구 전쟁 휴전 🕊️",
        "summary": "We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts",
        "viewcount": 3
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/icon/OrigLinkIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                fileName: "[project]/src/components/common/icon/OrigLinkIcon.tsx",
                lineNumber: 13,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icon/OrigLinkIcon.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/icon/OrigLinkIcon.tsx",
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
"[project]/src/components/articleDetail/PopularNewsletter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/ThumbImg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icon/LikeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$OrigLinkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icon/OrigLinkIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function PopularNewsletter({ flex, className }) {
    const mappedNewsletter = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MYSUMMARYNEWS"].map((news, i)=>({
            index: i,
            value: news
        }));
    const sortNewsletter = mappedNewsletter.sort((a, b)=>b.value.viewcount - a.value.viewcount);
    const sliceNewsletter = sortNewsletter.slice(0, 5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopularNewsletterStyled, {
        flex: flex,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "section-title",
                children: "지금 인기 아티클 TOP 5"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: sliceNewsletter.map((news, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "index",
                                children: index + 1
                            }, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: "text-section",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "title",
                                            children: news.value.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "date",
                                            children: news.value.createdAt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            news.value.img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: "thum-link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: news.value.img,
                                    aspectratio: 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "icon",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$OrigLinkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/articleDetail/PopularNewsletter.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = PopularNewsletter;
const __TURBOPACK__default__export__ = PopularNewsletter;
const PopularNewsletterStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    position: sticky;
    overflow: auto;
    height: 100%;
    top: 1rem;

    .index {
        color: ${({ theme })=>theme.color.subtext};
    }


    .section-title {
        font-size: ${({ theme })=>theme.fontSize.medium};
        font-weight: ${({ theme })=>theme.fontWeight.regular};
        padding: 0 0 1rem 0;
        border-bottom: 1px solid ${({ theme })=>theme.color.border};
        margin-bottom: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 0 1.25rem 0;
        border-bottom: 1px solid ${({ theme })=>theme.color.border};
        margin-bottom: 1rem;

        li {
            overflow: hidden;
            display: flex;
            flex-direction: row;
            gap: 1rem;

            .thum-link {
                flex: 1;
                height: fit-content;
                margin: 0;
            }

            .text-section {
                flex: 3;
                word-break: break-word;
                height: 4.25rem;


                .category {
                    font-size: ${({ theme })=>theme.fontSize.extraSmall};
                    color: ${({ theme })=>theme.color.primary};
                    font-weight: ${({ theme })=>theme.fontWeight.medium};
                }

                .title {
                    font-size: ${({ theme })=>theme.fontSize.small};
                    font-weight: ${({ theme })=>theme.fontWeight.medium};

                    overflow: hidden;
                    text-overflow: ellipsis;

                    display: -webkit-box;
                    -webkit-line-clamp: 2; // 원하는 라인수
                    -webkit-box-orient: vertical;
                }

                .date {
                    font-size: ${({ theme })=>theme.fontSize.extraSmall};
                    color: ${({ theme })=>theme.color.lightGrey};
                }
            }
        }

        li:hover .title {
            color: ${({ theme })=>theme.color.primary};
        }
    }

    .icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`;
_c1 = PopularNewsletterStyled;
var _c, _c1;
__turbopack_refresh__.register(_c, "PopularNewsletter");
__turbopack_refresh__.register(_c1, "PopularNewsletterStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/DefaultImg.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function DefaultImg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultImgStyled, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/img/newpick_default_img.jpg",
            alt: "default-img",
            fill: true,
            className: "img",
            loading: "lazy",
            quality: 75,
            sizes: "100vw"
        }, void 0, false, {
            fileName: "[project]/src/components/common/DefaultImg.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/DefaultImg.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = DefaultImg;
const DefaultImgStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    position: relative;
    width: 100%;
    margin-bottom: 1.25rem;
    
    .img {
        position: relative !important;
        display: block;
        height: auto !important;
        width: 100%;

        object-fit: cover;
        content-visibility: auto;
        object-position: center;
    }
`;
_c1 = DefaultImgStyled;
const __TURBOPACK__default__export__ = DefaultImg;
var _c, _c1;
__turbopack_refresh__.register(_c, "DefaultImg");
__turbopack_refresh__.register(_c1, "DefaultImgStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/articleDetail/NewsletterContent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$DefaultImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/DefaultImg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
function NewsletterContent({ flex, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsletterContentStyled, {
        flex: flex,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$DefaultImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "1 hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "2 hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "3 hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                children: "4 hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                children: "5 hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                children: "6 hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/img/newpick_default_img.jpg",
                        alt: "news-img"
                    }, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                        children: "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello"
                    }, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                children: "https://notefolio.net/service/content/post/86540"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "hellllllllop"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                children: "hello world"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "margin"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/articleDetail/NewsletterContent.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = NewsletterContent;
const NewsletterContentStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].article`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    .margin {
        margin-bottom: 2rem;
    }
    
    * {
        margin-bottom: 0.5rem;
        word-break: break-word;
        line-height: 1.56;
    }
    
    h1, h2, h3, h4, h5, h6 {
        margin-top: 2rem;
    }
    
    p {
        color: ${({ theme })=>theme.color.subtext};
    }
    
    img {
        border-radius: ${({ theme })=>theme.borderRadius.soft};
    }

    figure {
        margin: 0;
        width: 100%;
        img {
            margin-bottom: 0.25rem;
            width: 100%;
        }
        figcaption {
            font-size: ${({ theme })=>theme.fontSize.extraSmall};
            color: ${({ theme })=>theme.color.lightGrey};
        }
    }
    
    a {
        color: ${({ theme })=>theme.color.primary};
        text-decoration: underline ${({ theme })=>theme.color.primary};
        text-decoration-thickness: 2px;
    }
`;
_c1 = NewsletterContentStyled;
const __TURBOPACK__default__export__ = NewsletterContent;
var _c, _c1;
__turbopack_refresh__.register(_c, "NewsletterContent");
__turbopack_refresh__.register(_c1, "NewsletterContentStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/articleDetail/PrevNextArticle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$MoveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/MoveButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/ThumbImg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function PrevNextArticle() {
    _s();
    const [activeArticle, setActiveArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleMouseEnter = (articleType)=>()=>{
            setActiveArticle(articleType);
        };
    const handleMouseLeave = ()=>{
        setActiveArticle(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrevNextArticleStyled, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: `prev-next prev ${activeArticle === "prev" ? "active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$MoveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>{},
                            text: "이전글",
                            frontIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoArrowBack"], {}, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                lineNumber: 23,
                                columnNumber: 64
                            }, void 0),
                            className: "btn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            className: "img",
                            onMouseEnter: handleMouseEnter("prev"),
                            onMouseLeave: handleMouseLeave,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/img/newpick_default_img.jpg",
                                aspectratio: 1
                            }, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            className: "text-section",
                            onMouseEnter: ()=>setActiveArticle("prev"),
                            onMouseLeave: ()=>setActiveArticle(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "title",
                                    children: "틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 임 "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "date",
                                    children: "2025-01-02"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: `prev-next next ${activeArticle === "next" ? "active" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$MoveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>{},
                            text: "다음글",
                            backIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoArrowForward"], {}, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                lineNumber: 46,
                                columnNumber: 63
                            }, void 0),
                            className: "btn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            className: "img",
                            onMouseEnter: ()=>setActiveArticle("next"),
                            onMouseLeave: ()=>setActiveArticle(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$ThumbImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/img/newpick_default_img.jpg",
                                aspectratio: 1
                            }, void 0, false, {
                                fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            className: "text-section",
                            onMouseEnter: ()=>setActiveArticle("next"),
                            onMouseLeave: ()=>setActiveArticle(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "title",
                                    children: "틀 임 리스트 타이틀 임 리스트 타이틀 임리스트 타이틀 "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "date",
                                    children: "2025-01-02"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/articleDetail/PrevNextArticle.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(PrevNextArticle, "3l18nMf2QIlptxFCfmaMGxq8p+Y=");
_c = PrevNextArticle;
const PrevNextArticleStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    border-top: 1px solid ${({ theme })=>theme.color.border};

    .prev-next {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        align-items: center;
        height: fit-content;
        border-bottom: 1px solid ${({ theme })=>theme.color.border};
        padding: 2.5rem 1rem;

        .btn {
            flex: 0.8;
        }

        .img {
            flex: 1.2;
            margin: 0
        }

        .text-section {
            flex: 8;

            .title {
                color: ${({ theme })=>theme.color.subtext};
                font-size: ${({ theme })=>theme.fontSize.medium};
                font-weight: ${({ theme })=>theme.fontWeight.medium};
                margin-bottom: 0.5rem;

                overflow: hidden;
                text-overflow: ellipsis;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .date {
                color: ${({ theme })=>theme.color.lightGrey};
                font-size: ${({ theme })=>theme.fontSize.extraSmall};
            }
        }
    }

    .active {
        background-color: ${({ theme })=>theme.color.surface};
    }

`;
_c1 = PrevNextArticleStyled;
const __TURBOPACK__default__export__ = PrevNextArticle;
var _c, _c1;
__turbopack_refresh__.register(_c, "PrevNextArticle");
__turbopack_refresh__.register(_c1, "PrevNextArticleStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/articleDetail/SubscribeInduce.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function SubscribeInduce() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubscribeInduceStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "뉴픽이 보내드리는 뉴스레터를 받아보세요!"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/SubscribeInduce.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                scheme: "primary",
                size: "medium",
                children: "구독하기"
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/SubscribeInduce.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/articleDetail/SubscribeInduce.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SubscribeInduce;
const SubscribeInduceStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    background-color: ${({ theme })=>theme.color.colorBackground};
    border-radius: ${({ theme })=>theme.borderRadius.soft};
    padding: 2.5rem 5rem;
    margin: 2rem 0;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    p {
        width: 100%;
        font-size: ${({ theme })=>theme.fontSize.extraLarge};
        font-weight: ${({ theme })=>theme.fontWeight.semiBold};
        background: linear-gradient(to right top, #0C0042, #2d11b1, #5537dd, #0E004D);
        color: transparent;
        -webkit-background-clip: text;
    }
    
    button {
        width: 10rem;
        height: 3rem;
        border-radius: ${({ theme })=>theme.borderRadius.soft};
    }
`;
_c1 = SubscribeInduceStyled;
const __TURBOPACK__default__export__ = SubscribeInduce;
var _c, _c1;
__turbopack_refresh__.register(_c, "SubscribeInduce");
__turbopack_refresh__.register(_c1, "SubscribeInduceStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/BarHeight.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
function BarHeight({ height, margin }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BarStyled, {
        height: height,
        margin: margin
    }, void 0, false, {
        fileName: "[project]/src/components/common/BarHeight.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = BarHeight;
const BarStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    border-left: 1px solid ${({ theme })=>theme.color.border};
    height: ${({ height })=>height || '100%'};
    margin-left: ${({ margin })=>margin || '4rem'};
    margin-right: ${({ margin })=>margin || '4rem'};
    
`;
_c1 = BarStyled;
const __TURBOPACK__default__export__ = BarHeight;
var _c, _c1;
__turbopack_refresh__.register(_c, "BarHeight");
__turbopack_refresh__.register(_c1, "BarStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/articleDetail/LatestArticle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/mypageData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icon/LikeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$BarHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/BarHeight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/dateFormat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
;
;
;
;
;
;
;
;
;
;
;
function LatestArticle() {
    const mappedArticle = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$mypageData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MYSUMMARYNEWS"].map((article, index)=>{
        return {
            index: index,
            value: article
        };
    });
    // latest를 위해 조회수 순으로도 정렬 필요 (추후)
    const sliceArticle = mappedArticle.slice(0, 9);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LatestArticleStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "최신 아티클"
                }, void 0, false, {
                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                    ],
                    loop: true,
                    spaceBetween: 20,
                    slidesPerView: 3,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    breakpoints: {
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "arrow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "swiper-button-prev"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "swiper-button-next"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        sliceArticle.map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                className: "swiper-slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "title",
                                            children: article.value.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bottom",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icon$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$BarHeight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    height: "1rem",
                                                    margin: "0.75rem"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "date",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFormat"])(article.value.createdAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/articleDetail/LatestArticle.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = LatestArticle;
const LatestArticleStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    position: relative;
    padding: 3rem 0;
    margin: 4rem 0 -4.5rem 0;

    &::before {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 100vw;
        height: 100%;
        background-color: ${({ theme })=>theme.color.subtext};
        transform: translateX(-50%);
        content: '';
        z-index: -1;
    }

    .section-title {
        margin-bottom: 1rem;

        h3 {
            font-size: ${({ theme })=>theme.fontSize.medium};
            font-weight: ${({ theme })=>theme.fontWeight.medium};
            color: ${({ theme })=>theme.color.background};
        }
    }

    .title {
        font-size: ${({ theme })=>theme.fontSize.medium};
        font-weight: ${({ theme })=>theme.fontWeight.medium};
        word-break: break-word;
        margin-bottom: 0.5rem;
        height: 3.25rem;

        overflow: hidden;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .date {
            font-size: ${({ theme })=>theme.fontSize.extraSmall};
        }
    }

    .swiper-container {
        .arrow {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            margin-top: 1.25rem;

            .swiper-button-prev, .swiper-button-next {
                position: static;
                cursor: pointer;
                color: ${({ theme })=>theme.color.background};
                width: 1rem;
                height: 1rem;
                margin: 0;
                padding: 0;
                --swiper-navigation-size: 1rem;
            }
        }

        .swiper-slide {
            padding: 1rem;

            background-color: ${({ theme })=>theme.color.background};
            border-radius: ${({ theme })=>theme.borderRadius.soft};
            height: auto;

            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
}
`;
_c1 = LatestArticleStyled;
const __TURBOPACK__default__export__ = LatestArticle;
var _c, _c1;
__turbopack_refresh__.register(_c, "LatestArticle");
__turbopack_refresh__.register(_c1, "LatestArticleStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/articleDetail/Content.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$SummaryText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/SummaryText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$PopularNewsletter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/articleDetail/PopularNewsletter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$NewsletterContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/articleDetail/NewsletterContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$PrevNextArticle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/articleDetail/PrevNextArticle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$SubscribeInduce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/articleDetail/SubscribeInduce.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$LatestArticle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/articleDetail/LatestArticle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Content({ content }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$SummaryText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: content
            }, void 0, false, {
                fileName: "[project]/src/components/articleDetail/Content.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$NewsletterContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "left"
                    }, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/Content.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$PopularNewsletter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "right"
                    }, void 0, false, {
                        fileName: "[project]/src/components/articleDetail/Content.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/articleDetail/Content.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$SubscribeInduce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/articleDetail/Content.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$PrevNextArticle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/articleDetail/Content.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$LatestArticle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/articleDetail/Content.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/articleDetail/Content.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Content;
const ContentStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    margin: 4rem 0;
    position: relative;
    width: 100%;
    height: 100%;
    
    .content-section {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 2rem;
        margin: 2rem 0;
        height: 100%;

        .left {
            flex: 3;
        }

        .right {
            flex: 1;
        }
    }
    
    @media (${({ theme })=>theme.mediaQuery.tablet}) {
        .content-section {
            flex-direction: column;
            .left {
                border-bottom: 1px solid ${({ theme })=>theme.color.border};
                margin-bottom: 1rem;
            }
        }
    }

`;
_c1 = ContentStyled;
const __TURBOPACK__default__export__ = Content;
var _c, _c1;
__turbopack_refresh__.register(_c, "Content");
__turbopack_refresh__.register(_c1, "ContentStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/news/[slug]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$TitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/articleDetail/TitleSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/dateFormat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$Content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/articleDetail/Content.tsx [app-client] (ecmascript)");
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
function NewsletterDetailPage() {
    _s();
    const [newsInfo, setNewsInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsletterDetailPage.useEffect": ()=>{
            console.log("Params:", params.slug); // 값 확인
            async function fetchNewsDetail() {
                if (params.slug) {
                    try {
                        const res = await fetch(`/api/news/${params.slug}`);
                        if (!res.ok) {
                            throw new Error("No such news found");
                        }
                        const data = await res.json();
                        setNewsInfo(data);
                    } catch (err) {
                        console.error(err);
                    }
                }
            }
            fetchNewsDetail();
        }
    }["NewsletterDetailPage.useEffect"], [
        params
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsletterDetailPageStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$TitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                category: newsInfo?.categoryId,
                title: newsInfo?.title,
                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFormat"])(newsInfo?.createdAt)
            }, void 0, false, {
                fileName: "[project]/src/app/news/[slug]/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$articleDetail$2f$Content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    content: newsInfo?.summary ? newsInfo.summary : ''
                }, void 0, false, {
                    fileName: "[project]/src/app/news/[slug]/page.tsx",
                    lineNumber: 44,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/[slug]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/[slug]/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(NewsletterDetailPage, "+FfN7sonNuGHoMc4WWU0irasZss=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = NewsletterDetailPage;
const NewsletterDetailPageStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
    margin: 2.5rem 0;
    height: 100%;
    width: 100%;
`;
_c1 = NewsletterDetailPageStyled;
const __TURBOPACK__default__export__ = NewsletterDetailPage;
var _c, _c1;
__turbopack_refresh__.register(_c, "NewsletterDetailPage");
__turbopack_refresh__.register(_c1, "NewsletterDetailPageStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/news/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_9a1d20._.js.map