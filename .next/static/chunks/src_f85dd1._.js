(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f85dd1._.js", {

"[project]/src/store/loadingStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useLoadingStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isLoading: false,
        setLoading: (state)=>set({
                isLoading: state
            })
    }));
const __TURBOPACK__default__export__ = useLoadingStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/generateNewsletters.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateNewsletters": (()=>generateNewsletters),
    "generateRandomText": (()=>generateRandomText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$chunk$2d$E5ZRZOGX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__ = __turbopack_import__("[project]/node_modules/@faker-js/faker/dist/chunk-E5ZRZOGX.js [app-client] (ecmascript) <export a as faker>");
;
;
const generateRandomText = (min, max)=>{
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$chunk$2d$E5ZRZOGX$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].lorem.sentence(length);
};
const generateNewsletters = ()=>{
    const categories = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].filter((category)=>category.title !== '전체').map((category)=>category.title);
    return Array.from({
        length: 10
    }, (_, dayIndex)=>{
        const baseDate = new Date(new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Seoul'
        }));
        baseDate.setDate(baseDate.getDate() - dayIndex);
        const dateString = baseDate.toLocaleDateString('en-CA'); // YYYY-MM-DD 형식
        return categories.map((category, categoryIndex)=>({
                id: dayIndex * categories.length + categoryIndex + 1,
                category,
                date: dateString,
                title: generateRandomText(10, 25),
                summary: generateRandomText(20, 80),
                image: `https://picsum.photos/400/300?random=${dayIndex * categories.length + categoryIndex + 1}`,
                link: `/news/${dayIndex * categories.length + categoryIndex + 1}`,
                views: Math.floor(Math.random() * 1000),
                bookmarks: Math.floor(Math.random() * 500),
                comments: Math.floor(Math.random() * 300)
            }));
    }).flat();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/newsletterStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateNewsletters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/generateNewsletters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
const useNewsletterStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        newsletters: [],
        initializeNewsletters: ()=>{
            const currentNewsletters = get().newsletters;
            if (currentNewsletters.length === 0) {
                // 뉴스레터가 없을 경우에만 생성
                set({
                    newsletters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateNewsletters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateNewsletters"])()
                });
            }
        }
    }));
const __TURBOPACK__default__export__ = useNewsletterStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useNewsletter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useNewsletter": (()=>useNewsletter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$loadingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/loadingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$newsletterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/newsletterStore.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
;
const useNewsletter = ()=>{
    _s();
    const { setLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$loadingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const newsletters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$newsletterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useNewsletter.useNewsletterStore[newsletters]": (state)=>state.newsletters
    }["useNewsletter.useNewsletterStore[newsletters]"]);
    const initializeNewsletters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$newsletterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useNewsletter.useNewsletterStore[initializeNewsletters]": (state)=>state.initializeNewsletters
    }["useNewsletter.useNewsletterStore[initializeNewsletters]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNewsletter.useEffect": ()=>{
            const loadData = {
                "useNewsletter.useEffect.loadData": async ()=>{
                    setLoading(true); // 로딩 시작
                    initializeNewsletters(); // 데이터 초기화
                    setLoading(false); // 로딩 종료
                }
            }["useNewsletter.useEffect.loadData"];
            loadData();
        }
    }["useNewsletter.useEffect"], [
        initializeNewsletters,
        setLoading
    ]);
    return {
        newsletters,
        initializeNewsletters
    };
};
_s(useNewsletter, "N0IWyBML+oKHH8ZWV9eXe83t4YQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$loadingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$newsletterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$newsletterStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
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
const Title = ({ children, className, size = 'medium', weight, color, styles })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledTitle, {
        className: `${className}`,
        $size: size,
        $weight: weight,
        $color: color,
        $styles: styles,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/Title.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this);
};
_c = Title;
const StyledTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "Title__StyledTitle",
    componentId: "sc-ac090baf-0"
})`
	font-size: ${({ theme, $size })=>theme.heading[$size].fontSize};
	font-weight: ${({ theme, $weight })=>theme.fontWeight[$weight || 'regular']};
	color: ${({ theme, $color })=>theme.color[$color || 'text']};
	transition: color 0.3s ease;
	margin: 0;

	${({ $styles })=>$styles || ''}
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
"[project]/src/components/common/InputCheck.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const InputCheck = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = ({ size, label, onBlur, onChange, ...props }, ref)=>{
    const handleBlur = (e)=>{
        const { name, checked } = e.target;
        if (onBlur) {
            onBlur(name, checked);
        }
    };
    const handleChange = (e)=>{
        const { name, checked } = e.target;
        if (onChange) {
            onChange(name, checked);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledInputCheck, {
        $size: size,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/common/InputCheck.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "input-check",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        ref: ref,
                        onBlur: handleBlur,
                        onChange: handleChange,
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/InputCheck.tsx",
                        lineNumber: 34,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiCheck"], {}, void 0, false, {
                            fileName: "[project]/src/components/common/InputCheck.tsx",
                            lineNumber: 36,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/InputCheck.tsx",
                        lineNumber: 35,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/InputCheck.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/InputCheck.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this);
});
_c1 = InputCheck;
const StyledInputCheck = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputCheck__StyledInputCheck",
    componentId: "sc-89aa6a05-0"
})`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	user-select: none;

	label {
		will-change: transform, opacity;
		visibility: hidden;
		opacity: 0;
		transform: translateY(0.5rem);
		transition: all 0.3s ease;
		text-align: center;
		font-size: ${({ theme })=>theme.fontSize.extraSmall};
	}

	&:hover label {
		visibility: visible;
		height: auto;
		opacity: 1;
		transform: translateY(0);
		transition: all 0.3s ease;
	}

	.input-check {
		position: relative;
	}

	input {
		display: flex;
		align-items: center;
		justify-content: center;

		height: ${({ $size, theme })=>$size ? theme.fontSize[$size] : theme.fontSize.large};
		width: ${({ $size, theme })=>$size ? theme.fontSize[$size] : theme.fontSize.large};
		aspect-ratio: 1;

		cursor: pointer;
		appearance: none;
		border-radius: ${({ theme })=>theme.borderRadius.flat};
		background: ${({ theme })=>theme.color.background};
		border: 1px solid ${({ theme })=>theme.color.border};

		&:checked {
			background: ${({ theme })=>theme.color.primary};
		}

		&:checked + span svg {
			opacity: 1;
			visibility: visible;
		}
	}

	.icon {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;

		svg {
			opacity: 0;
			visibility: hidden;
			color: white;
			font-size: ${({ theme })=>theme.fontSize.medium};
			transition: opacity 0.2s ease, visibility 0.2s ease;
		}
	}
`;
_c2 = StyledInputCheck;
InputCheck.displayName = 'InputCheck';
const __TURBOPACK__default__export__ = InputCheck;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "InputCheck$React.forwardRef");
__turbopack_refresh__.register(_c1, "InputCheck");
__turbopack_refresh__.register(_c2, "StyledInputCheck");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/FullWidthPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const FullWidthPanel = ({ children, border, background, color })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledPanel, {
        $border: border,
        $background: background,
        $color: color,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/FullWidthPanel.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
};
_c = FullWidthPanel;
const __TURBOPACK__default__export__ = FullWidthPanel;
const StyledPanel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "FullWidthPanel__StyledPanel",
    componentId: "sc-336e3eb4-0"
})`
	position: relative;
	width: 100vw;
	height: fit-content;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 4rem 0;
	padding: 3rem 1rem;
	transform: translateX(-50%);
	left: 50%;

	border: 1px solid ${({ theme, $border, $background })=>theme.color[$border || $background || 'border']};
	color: ${({ theme, $color })=>theme.color[$color || 'textSecondary']};
	background: ${({ theme, $background })=>theme.color[$background || 'primary']};
`;
_c1 = StyledPanel;
var _c, _c1;
__turbopack_refresh__.register(_c, "FullWidthPanel");
__turbopack_refresh__.register(_c1, "StyledPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useMediaQuery.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useMediaQuery": (()=>useMediaQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/theme.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useMediaQuery = ()=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const isMobileQuery = window.matchMedia((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme"])('light').mediaQuery.mobile);
                const handleResize = {
                    "useMediaQuery.useEffect.handleResize": ()=>{
                        setIsMobile(isMobileQuery.matches);
                    }
                }["useMediaQuery.useEffect.handleResize"];
                handleResize(); // 초기값 설정
                isMobileQuery.addEventListener('change', handleResize);
                return ({
                    "useMediaQuery.useEffect": ()=>{
                        isMobileQuery.removeEventListener('change', handleResize);
                    }
                })["useMediaQuery.useEffect"];
            }
        }
    }["useMediaQuery.useEffect"], []);
    return {
        isMobile
    };
};
_s(useMediaQuery, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
;
;
const Card = ({ ref = null, type = 'sub', className, data })=>{
    const { image, header, main, footer } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledCard, {
        ref: ref,
        className: className,
        $type: type,
        children: type === 'main' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-body",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "medium",
                            color: "primary",
                            weight: "semiBold",
                            children: header
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Card.tsx",
                            lineNumber: 22,
                            columnNumber: 7
                        }, this),
                        main.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "title",
                            weight: "semiBold",
                            children: main.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Card.tsx",
                            lineNumber: 26,
                            columnNumber: 8
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Card.tsx",
                    lineNumber: 21,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-main",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "content",
                            children: [
                                main.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "description",
                                    size: "medium",
                                    children: main.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Card.tsx",
                                    lineNumber: 34,
                                    columnNumber: 9
                                }, this),
                                footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-footer",
                                    children: footer
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/Card.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/Card.tsx",
                            lineNumber: 32,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "image-placeholder",
                            children: image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: image,
                                alt: main.title || 'Card Image',
                                width: 300,
                                height: 150,
                                style: {
                                    width: '100%',
                                    height: '100%'
                                },
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/Card.tsx",
                                lineNumber: 42,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Card.tsx",
                            lineNumber: 40,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Card.tsx",
                    lineNumber: 31,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/Card.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "image-placeholder",
                            children: image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: image,
                                alt: main.title || 'Card Image',
                                width: 300,
                                height: 150,
                                style: {
                                    width: '100%',
                                    height: '100%'
                                },
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/Card.tsx",
                                lineNumber: 62,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Card.tsx",
                            lineNumber: 60,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-header",
                            children: header && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "small",
                                color: "primary",
                                weight: "semiBold",
                                children: header
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/Card.tsx",
                                lineNumber: 77,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Card.tsx",
                            lineNumber: 75,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-main",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "content",
                                children: [
                                    main.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "title",
                                        size: "large",
                                        weight: "semiBold",
                                        children: main.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/Card.tsx",
                                        lineNumber: 85,
                                        columnNumber: 10
                                    }, this),
                                    main.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "description",
                                        size: "small",
                                        children: main.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/Card.tsx",
                                        lineNumber: 90,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/Card.tsx",
                                lineNumber: 83,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Card.tsx",
                            lineNumber: 82,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Card.tsx",
                    lineNumber: 59,
                    columnNumber: 6
                }, this),
                footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-footer",
                    children: footer
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Card.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Card.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
};
_c = Card;
const StyledCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Card__StyledCard",
    componentId: "sc-53ce4fb4-0"
})`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	overflow: hidden;
	cursor: pointer;

	.card-body {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: ${({ $type })=>$type === 'main' ? '1rem' : '0.5rem'};

		&:hover {
			img {
				transform: scale(1.08);
				transition: transform 0.3s ease;
			}
		}

		.image-placeholder {
			width: ${({ $type })=>$type === 'main' ? '50%' : '100%'};
			aspect-ratio: 16 / 9;
			overflow: hidden;
			border-radius: ${({ theme })=>theme.borderRadius.medium};
			background: ${({ theme })=>theme.color.surface};
			margin-bottom: ${({ $type })=>$type === 'main' ? '0' : '1rem'};

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.card-header {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: ${({ $type })=>$type === 'main' ? 'center' : 'flex-start'};

			.title {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				white-space: normal;
			}
		}

		.card-main {
			width: 100%;
			display: flex;
			flex-direction: ${({ $type })=>$type === 'main' ? 'row' : 'column'};
			justify-content: center;
			align-items: flex-start;
			margin-bottom: ${({ $type })=>$type === 'main' ? '0' : '0.5rem'};
			gap: ${({ $type })=>$type === 'main' ? '2rem' : '0'};

			.content {
				width: ${({ $type })=>$type === 'main' ? '50%' : '100%'};
				height: 100%;
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				gap: ${({ $type })=>$type === 'main' ? '1rem' : '0'};

				.title {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					white-space: normal;
				}

				.description {
					overflow: hidden;
					text-overflow: ellipsis;

					display: -webkit-box;
					-webkit-line-clamp: ${({ $type })=>$type === 'main' ? '8' : '2'};
					-webkit-box-orient: vertical;
					white-space: normal;
				}
			}
		}
	}

	.card-footer {
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-top: auto;
		gap: 0.5rem;
		color: ${({ theme })=>theme.color.subText};

		span {
			white-space: nowrap;
			color: ${({ theme })=>theme.color.subText};
		}

		button {
			width: 100%;
		}

		.rounded-icon {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			padding: 0;
			padding-right: 0.5rem;
			margin: 0;
			gap: 0.5rem;

			span {
				&:hover {
					color: ${({ theme })=>theme.color.primary};
				}
			}

			button {
				width: ${({ theme })=>theme.fontSize.extraLarge};
				height: ${({ theme })=>theme.fontSize.extraLarge};

				padding: 0;
				margin: 0;
				font-size: ${({ theme })=>theme.fontSize.large};

				color: ${({ theme })=>theme.color.primary};
				border-radius: ${({ theme })=>theme.borderRadius.circle};

				svg {
					font-size: ${({ theme })=>theme.fontSize.medium};
				}

				&:hover {
					background: ${({ theme })=>theme.color.tertiary};
				}
			}
		}

		span {
			font-size: ${({ theme })=>theme.fontSize.small};
			color: ${({ theme })=>theme.color.subText};
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			gap: 1rem;
		}
	}
`;
_c1 = StyledCard;
const __TURBOPACK__default__export__ = Card;
var _c, _c1;
__turbopack_refresh__.register(_c, "Card");
__turbopack_refresh__.register(_c1, "StyledCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/slider/CardSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useTimeout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
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
const CardSlider = ({ className, type = 'sub', data })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 현재 슬라이드 상태
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // 연속 클릭 방지 상태
    const [isScrolling, setIsScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 연속 클릭 방지 해제
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])({
        "CardSlider.useTimeout": ()=>setIsScrolling(false)
    }["CardSlider.useTimeout"], isScrolling ? 500 : null);
    // 스크롤 처리 함수
    const handleScroll = (direction)=>{
        if (isScrolling) return; // 스크롤 중이면 실행하지 않음
        setIsScrolling(true); // 스크롤 상태 활성화
        if (cardContainerRef.current && cardRef.current) {
            // 현재 인덱스 업데이트 및 무한 슬라이드 구현
            if (type === 'main') {
                const cardWidth = type === 'main' ? cardRef.current.offsetWidth : isMobile ? cardRef.current.offsetWidth * 2 : cardRef.current.offsetWidth;
                const gap = type === 'main' ? 16 : isMobile ? 24 * 2 : 24;
                const scrollAmount = cardWidth + gap;
                setCurrentIndex((prev)=>{
                    let newIndex = prev;
                    if (direction === 'left') {
                        newIndex = prev === 0 ? data.length - 1 : prev - 1; // 왼쪽 끝에서 마지막 슬라이드로 이동
                    } else {
                        newIndex = prev === data.length - 1 ? 0 : prev + 1; // 오른쪽 끝에서 첫 번째 슬라이드로 이동
                    }
                    // 스크롤 동작
                    cardContainerRef.current?.scrollTo({
                        left: newIndex * scrollAmount,
                        behavior: 'smooth'
                    });
                    return newIndex;
                });
            } else {
                const cardWidth = isMobile ? cardRef.current.offsetWidth * 2 : cardRef.current.offsetWidth;
                const gap = isMobile ? 24 * 2 : 24;
                const scrollAmount = cardWidth + gap;
                cardContainerRef.current.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };
    // 특정 슬라이드로 이동
    const goToSlide = (index)=>{
        if (cardContainerRef.current && cardRef.current) {
            const cardWidth = cardRef.current.offsetWidth;
            const gap = type === 'main' ? 16 : isMobile ? 24 * 2 : 24;
            const scrollAmount = index * (cardWidth + gap);
            cardContainerRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledCardSlider, {
        className: className,
        $type: type,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cards",
                ref: cardContainerRef,
                children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "card",
                        type: type,
                        ref: index === 0 ? cardRef : null,
                        data: item
                    }, index, false, {
                        fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                        lineNumber: 93,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                lineNumber: 91,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                children: [
                    type === 'main' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: data.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "indicator",
                                onClick: ()=>goToSlide(index),
                                children: index === currentIndex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filled"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                                    lineNumber: 101,
                                    columnNumber: 35
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "empty"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                                    lineNumber: 101,
                                    columnNumber: 64
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                                lineNumber: 100,
                                columnNumber: 8
                            }, this))
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "arrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "left",
                                onClick: ()=>handleScroll('left'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {}, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                                    lineNumber: 109,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                                lineNumber: 108,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "right",
                                onClick: ()=>handleScroll('right'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowForward"], {}, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                                    lineNumber: 112,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                                lineNumber: 111,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                        lineNumber: 107,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/slider/CardSlider.tsx",
                lineNumber: 96,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/slider/CardSlider.tsx",
        lineNumber: 90,
        columnNumber: 3
    }, this);
};
_s(CardSlider, "OtZT4MWzoWCTYZgleZjSErkQUik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"]
    ];
});
_c = CardSlider;
const StyledCardSlider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider__StyledCardSlider",
    componentId: "sc-49b92312-0"
})`
	width: ${({ $type })=>$type === 'main' ? '100%' : 'calc(60% - 0.5rem)'};
	height: fit-content;
	flex: 1;
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 0.5rem;

	.cards {
		width: 100%;
		height: 100%;
		flex: 1;
		display: flex;
		gap: 1rem;
		overflow-x: hidden;
		scroll-behavior: smooth;
		align-items: stretch;

		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none; /* IE 및 Edge */
		scrollbar-width: none; /* Firefox */

		.card {
			min-width: ${({ $type })=>$type === 'main' ? 'calc(100% - 0.75rem)' : 'calc(33.333% - 1.2rem)'};
			height: fit-content;
			display: flex;
			flex: 1;
			flex-shrink: 0;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1rem;

			margin-left: ${({ $type })=>$type === 'main' ? '0' : '0.25rem'};
			margin-right: ${({ $type })=>$type === 'main' ? '0' : '0.25rem'};

			border: ${({ theme, $type })=>$type === 'main' ? 'none' : `1px solid ${theme.color.border}`};
			border-radius: ${({ theme })=>theme.borderRadius.medium};
		}
	}

	.controls {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;

		.arrow {
			color: ${({ theme })=>theme.color.subText};
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			gap: 0.5rem;

			.left,
			.right {
				padding: 0.5rem;
				border-radius: ${({ theme })=>theme.borderRadius.circle};

				&:hover {
					background: ${({ theme })=>theme.color.tertiary};
				}
			}
		}

		.indicator {
			display: flex;
			flex-direction: row;
			gap: 0.5rem;
			padding: 0;
			margin: 0;

			.filled {
				width: 0.8rem;
				height: 0.8rem;
				background: ${({ theme })=>theme.color.primary};
				border-radius: ${({ theme })=>theme.borderRadius.circle};
				box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
			}

			.empty {
				width: 0.8rem;
				height: 0.8rem;
				background: ${({ theme })=>theme.color.lightGrey};
				border: 1px solid ${({ theme })=>theme.color.border};
				border-radius: ${({ theme })=>theme.borderRadius.circle};
			}
		}
	}
`;
_c1 = StyledCardSlider;
const __TURBOPACK__default__export__ = CardSlider;
var _c, _c1;
__turbopack_refresh__.register(_c, "CardSlider");
__turbopack_refresh__.register(_c1, "StyledCardSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/mocks/banners.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "bannerData": (()=>bannerData)
});
const bannerData = [
    {
        id: 1,
        image: 'https://picsum.photos/800/400?random=1',
        title: '전체 인기 뉴스 아니면 그냥 이미지 슬라이드',
        description: '인기 뉴스 슬라이드. 화살표로 이동 및 시간 지나면 자동 롤링.',
        url: 'https://example.com/1',
        target: '_blank'
    },
    {
        id: 2,
        image: 'https://picsum.photos/800/400?random=2',
        title: '최신 IT 소식 업데이트',
        description: '오늘의 IT 관련 주요 뉴스 업데이트.',
        url: 'https://example.com/2',
        target: '_blank'
    },
    {
        id: 3,
        image: 'https://picsum.photos/800/400?random=3',
        title: '오늘의 경제 뉴스',
        description: '경제 주요 지표와 관련 뉴스 분석.',
        url: 'https://example.com/3',
        target: '_blank'
    },
    {
        id: 4,
        image: 'https://picsum.photos/800/400?random=4',
        title: '스포츠 핫이슈',
        description: '국내외 스포츠 주요 경기 및 결과.',
        url: 'https://example.com/4',
        target: '_blank'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/mocks/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/mocks/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$banners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/banners.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/mocks/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/hooks/useInterval.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useInterval": (()=>useInterval)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useInterval = (callback, delay, resetKey)=>{
    _s();
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useInterval.useEffect"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            if (delay === null) return;
            const id = setInterval({
                "useInterval.useEffect.id": ()=>savedCallback.current()
            }["useInterval.useEffect.id"], delay);
            return ({
                "useInterval.useEffect": ()=>clearInterval(id)
            })["useInterval.useEffect"];
        }
    }["useInterval.useEffect"], [
        delay,
        resetKey
    ]); // resetKey 의존성 추가
};
_s(useInterval, "dqNZMqbncP+HtqBlD20aSNv0Ugk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/slider/BannerSlider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInterval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useInterval.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
const IoIosArrowBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.IoIosArrowBack), {
    loadableGenerated: {
        modules: [
            "src/components/common/slider/BannerSlider.tsx -> " + "react-icons/io"
        ]
    },
    ssr: false
});
_c = IoIosArrowBack;
const IoIosArrowForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.IoIosArrowForward), {
    loadableGenerated: {
        modules: [
            "src/components/common/slider/BannerSlider.tsx -> " + "react-icons/io"
        ]
    },
    ssr: false
});
_c1 = IoIosArrowForward;
const BannerSlider = ({ banners })=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // 현재 슬라이드 인덱스 상태
    const [resetInterval, setResetInterval] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // Interval 초기화를 위한 상태
    // 다음 슬라이드로 이동하는 함수
    const goToNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BannerSlider.useCallback[goToNext]": ()=>{
            if (banners.length === 0) return;
            setCurrentIndex({
                "BannerSlider.useCallback[goToNext]": (prevIndex)=>(prevIndex + 1) % banners.length
            }["BannerSlider.useCallback[goToNext]"]);
            resetSliderInterval();
        }
    }["BannerSlider.useCallback[goToNext]"], [
        banners.length
    ]);
    // 이전 슬라이드로 이동하는 함수
    const goToPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BannerSlider.useCallback[goToPrevious]": ()=>{
            if (banners.length === 0) return;
            setCurrentIndex({
                "BannerSlider.useCallback[goToPrevious]": (prevIndex)=>prevIndex === 0 ? banners.length - 1 : prevIndex - 1
            }["BannerSlider.useCallback[goToPrevious]"]);
            resetSliderInterval();
        }
    }["BannerSlider.useCallback[goToPrevious]"], [
        banners.length
    ]);
    // 특정 슬라이드로 이동하는 함수
    const goToSlide = (index)=>{
        setCurrentIndex(index);
        resetSliderInterval(); // interval 초기화
    };
    // Interval 초기화 함수
    const resetSliderInterval = ()=>{
        setResetInterval((prev)=>prev + 1); // 상태를 변경하여 interval 재실행
    };
    // 자동 슬라이드: 일정 시간마다 goToNext 호출
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInterval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterval"])(goToNext, 5000, resetInterval); // resetInterval 상태로 재실행 트리거
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledSlider, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slides",
                children: banners.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `slide ${index === currentIndex ? 'active' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "image-placeholder",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.image,
                                    alt: item.title,
                                    width: 400,
                                    height: 300,
                                    style: {
                                        width: '100%',
                                        height: '100%'
                                    },
                                    priority: index === 0,
                                    loading: index === 0 ? 'eager' : 'lazy'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                    lineNumber: 55,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overlay",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                                lineNumber: 69,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                                lineNumber: 70,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                        lineNumber: 68,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                    lineNumber: 67,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                            lineNumber: 54,
                            columnNumber: 7
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                        lineNumber: 53,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                children: [
                    banners.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "indicator",
                            onClick: ()=>goToSlide(index),
                            children: index === currentIndex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filled"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                lineNumber: 80,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                lineNumber: 80,
                                columnNumber: 62
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                            lineNumber: 79,
                            columnNumber: 6
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "arrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: goToPrevious,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoIosArrowBack, {}, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                    lineNumber: 85,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                lineNumber: 84,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: goToNext,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IoIosArrowForward, {}, void 0, false, {
                                    fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                    lineNumber: 88,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                                lineNumber: 87,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                        lineNumber: 83,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
                lineNumber: 77,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/slider/BannerSlider.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, this);
};
_s(BannerSlider, "MNSdCAjG2Yvmt4f+hzPAWVgyagM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInterval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInterval"]
    ];
});
_c2 = BannerSlider;
const StyledSlider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "BannerSlider__StyledSlider",
    componentId: "sc-4c19eddd-0"
})`
	position: relative;
	width: 100%;
	height: fit-content;
	overflow: hidden;

	.slides {
		width: 100%;
		aspect-ratio: 16 / 9;
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		opacity: 0;
		transition: opacity 1s ease-in-out;

		&.active {
			opacity: 1;
		}

		.image-placeholder {
			position: relative;
			width: 100%;
			aspect-ratio: 16 / 9;
			background: ${({ theme })=>theme.color.surface};
			border-radius: ${({ theme })=>theme.borderRadius.medium};
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.overlay {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100%;

				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-start;
				padding: 2rem;

				background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
				color: white;

				.content {
					width: 100%;
					height: 100%;

					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: flex-start;

					h1 {
						font-size: ${({ theme })=>theme.heading.medium};
						color: white;
						text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					p {
						font-size: ${({ theme })=>theme.fontSize.medium};
						color: white;
						text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}

	.controls {
		width: 100%;
		height: fit-content;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 0.5rem 1rem;
		gap: 0.5rem;

		.indicator {
			display: flex;
			flex-direction: row;
			gap: 0.5rem;
			padding: 0;
			margin: 0;

			.filled {
				width: 0.8rem;
				height: 0.8rem;
				background: ${({ theme })=>theme.color.primary};
				border-radius: ${({ theme })=>theme.borderRadius.circle};
				box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
			}

			.empty {
				width: 0.8rem;
				height: 0.8rem;
				background: ${({ theme })=>theme.color.lightGrey};
				border: 1px solid ${({ theme })=>theme.color.border};
				border-radius: ${({ theme })=>theme.borderRadius.circle};
			}
		}

		.arrow {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			button {
				aspect-ratio: 1;
				padding: 0.5rem;

				display: flex;
				justify-content: center;
				align-items: center;

				color: ${({ theme })=>theme.color.subText};
				background: transparent;
				border-radius: ${({ theme })=>theme.borderRadius.circle};
				border: none;
				cursor: pointer;
				transition: background 0.3s ease;

				&:hover {
					background: ${({ theme })=>theme.color.tertiary};
				}
			}
		}
	}
`;
_c3 = StyledSlider;
const __TURBOPACK__default__export__ = BannerSlider;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "IoIosArrowBack");
__turbopack_refresh__.register(_c1, "IoIosArrowForward");
__turbopack_refresh__.register(_c2, "BannerSlider");
__turbopack_refresh__.register(_c3, "StyledSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/HeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/mocks/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$slider$2f$BannerSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/slider/BannerSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$banners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/banners.ts [app-client] (ecmascript)");
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
const HeroSection = ()=>{
    _s();
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BannerSection, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "left-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "description",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "small",
                                children: "새로운 AI 구독 서비스"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 17,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "large",
                                weight: "semiBold",
                                children: "원하는 분야만 골라보는 나만의 뉴스"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/HeroSection.tsx",
                                lineNumber: 18,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 16,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "large",
                        scheme: "primary",
                        style: {
                            marginTop: '1rem'
                        },
                        onClick: ()=>openModal('explore'),
                        children: "AI 뉴스레터 체험하기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 22,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 15,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$slider$2f$BannerSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                banners: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$banners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bannerData"]
            }, void 0, false, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 31,
                columnNumber: 4
            }, this),
            isOpen && modalType === 'explore' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                onClose: closeModal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "medium",
                        children: "뉴스레터 생성하기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 34,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: "생성하기"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/HeroSection.tsx",
                        lineNumber: 35,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/HeroSection.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HeroSection.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this);
};
_s(HeroSection, "PiEunt0iGHrchejGm6wW7wKZ698=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"]
    ];
});
_c = HeroSection;
const BannerSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].section.withConfig({
    displayName: "HeroSection__BannerSection",
    componentId: "sc-fdac7c83-0"
})`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	padding: 3rem 0 2rem 0;

	.left-section {
		width: 100%;
		height: 100%;

		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 2rem 0;
	}

	img {
		border-radius: ${({ theme })=>theme.borderRadius.soft};
		box-shadow: ${({ theme })=>theme.shadow.medium};
	}

	@media ${({ theme })=>theme.mediaQuery.mobile} {
		flex-wrap: wrap;
	}
`;
_c1 = BannerSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c, _c1;
__turbopack_refresh__.register(_c, "HeroSection");
__turbopack_refresh__.register(_c1, "BannerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/filterNewsletters.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "filterTodayTrends": (()=>filterTodayTrends),
    "filterTopTrends": (()=>filterTopTrends)
});
const filterTopTrends = (trends, maxResults = 4)=>{
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    return trends.filter((trend)=>{
        const trendDate = new Date(trend.date);
        return trendDate >= oneWeekAgo && trendDate <= today;
    }).sort((a, b)=>b.bookmarks - a.bookmarks).slice(0, maxResults);
};
const filterTodayTrends = (trends)=>{
    // 한국 시간 기준 오늘 날짜
    const today = new Date(new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Seoul'
    }));
    today.setHours(0, 0, 0, 0); // 오늘 시작 시간 설정
    return trends.filter((trend)=>{
        const trendDate = new Date(trend.date);
        trendDate.setHours(0, 0, 0, 0); // 트렌드 날짜 시간 제거
        return trendDate.getTime() === today.getTime(); // 날짜가 오늘인지 확인
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/TrendSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$loadingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/loadingStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$filterNewsletters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/filterNewsletters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
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
;
;
;
const Trend = ({ newsletters })=>{
    _s();
    const { isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$loadingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const todayTrends = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Trend.useMemo[todayTrends]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$filterNewsletters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterTodayTrends"])(newsletters)
    }["Trend.useMemo[todayTrends]"], [
        newsletters
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/components/home/TrendSection.tsx",
        lineNumber: 22,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledTrend, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "trend-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "extraSmall",
                        weight: "semiBold",
                        styles: {
                            whiteSpace: 'nowrap'
                        },
                        children: "오늘의 트렌드"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TrendSection.tsx",
                        lineNumber: 27,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "small",
                        scheme: "secondary",
                        children: [
                            "더보기",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowForward"], {}, void 0, false, {
                                fileName: "[project]/src/components/home/TrendSection.tsx",
                                lineNumber: 38,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/TrendSection.tsx",
                        lineNumber: 36,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/TrendSection.tsx",
                lineNumber: 26,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "trend-cards",
                children: todayTrends.map((trend, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: {
                            id: trend.id,
                            image: trend.image,
                            header: trend.category,
                            main: {
                                title: trend.title,
                                description: trend.summary
                            },
                            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "subText",
                                        children: trend.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TrendSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 10
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-icon",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    size: "large",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoBookmarkOutline"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/home/TrendSection.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 13
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/TrendSection.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 12
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    color: "subText",
                                                    children: trend.bookmarks
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/TrendSection.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 12
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/TrendSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 11
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/TrendSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 10
                                    }, void 0)
                                ]
                            }, void 0, true)
                        }
                    }, index, false, {
                        fileName: "[project]/src/components/home/TrendSection.tsx",
                        lineNumber: 43,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/home/TrendSection.tsx",
                lineNumber: 41,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/TrendSection.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this);
};
_s(Trend, "f3LSdUE9Xv1uITBtA20jK3xr8ng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$loadingStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Trend;
const StyledTrend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].section.withConfig({
    displayName: "TrendSection__StyledTrend",
    componentId: "sc-e1c3b061-0"
})`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 2rem 0;
	gap: 2rem;

	.trend-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		button {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}

	.trend-cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		width: 100%;
		height: fit-content;
	}
`;
_c1 = StyledTrend;
const __TURBOPACK__default__export__ = Trend;
var _c, _c1;
__turbopack_refresh__.register(_c, "Trend");
__turbopack_refresh__.register(_c1, "StyledTrend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewsletter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useNewsletter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$InputCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/InputCheck.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$FullWidthPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/FullWidthPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$slider$2f$CardSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/slider/CardSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/home/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$TrendSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/home/TrendSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
const BiCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_require__("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.BiCheck), {
    loadableGenerated: {
        modules: [
            "src/app/page.tsx -> " + "react-icons/bi"
        ]
    },
    ssr: false
});
_c1 = BiCheck;
const BiPlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>__turbopack_require__("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>mod.BiPlus), {
    loadableGenerated: {
        modules: [
            "src/app/page.tsx -> " + "react-icons/bi"
        ]
    },
    ssr: false
});
_c3 = BiPlus;
const HomePage = ()=>{
    _s();
    const { newsletters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewsletter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewsletter"])();
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleCategorySelect = (category)=>{
        if (category === '전체') {
            if (selectedCategories.includes('전체')) {
                setSelectedCategories([]);
            } else {
                setSelectedCategories(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>cat.title));
            }
        } else {
            const updatedCategories = selectedCategories.includes(category) ? selectedCategories.filter((cat)=>cat !== category) : [
                ...selectedCategories,
                category
            ];
            if (updatedCategories.includes('전체') && !updatedCategories.includes(category)) {
                setSelectedCategories(updatedCategories.filter((cat)=>cat !== '전체'));
            } else if (updatedCategories.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].length - 1) {
                setSelectedCategories(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((cat)=>cat.title));
            } else {
                setSelectedCategories(updatedCategories);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledHomePage, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$TrendSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                newsletters: newsletters
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$FullWidthPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "extraLarge",
                    weight: "bold",
                    color: "background",
                    children: "📩 지금 뉴스레터를 시작해보세요"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 56,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubscribeSection, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$slider$2f$CardSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "sub",
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((category)=>({
                                id: category.id ?? 0,
                                image: `https://picsum.photos/400/300?random=${category.id}`,
                                header: category.title,
                                main: {
                                    title: undefined,
                                    description: `${category.title} 분야의 최신 뉴스레터를 구독하세요.`
                                },
                                footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    scheme: selectedCategories.includes(category.title) ? 'primary' : 'outline',
                                    onClick: ()=>handleCategorySelect(category.title),
                                    children: selectedCategories.includes(category.title) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Selected ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BiCheck, {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 79,
                                                columnNumber: 20
                                            }, void 0)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Select ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BiPlus, {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 18
                                            }, void 0)
                                        ]
                                    }, void 0, true)
                                }, category.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 8
                                }, void 0)
                            }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "subscription-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "medium",
                                weight: "bold",
                                children: "주요 분야 빠른 구독하기"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "small",
                                children: "선택한 분야를 이메일로 보내드릴게요."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 95,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "main",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    scheme: "primary",
                                    style: {
                                        width: '100%',
                                        marginTop: '0.5rem'
                                    },
                                    children: "구독 신청"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$InputCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: "extraSmall",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                size: "extraSmall",
                                                weight: "semiBold",
                                                color: "primary",
                                                children: "[필수] "
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 8
                                            }, this),
                                            "NewPick의 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy",
                                                children: "이용약관"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 8
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy",
                                                children: "개인정보처리방침"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 8
                                            }, this),
                                            " 에 동의합니다."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 107,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, this);
};
_s(HomePage, "b5o56AMoatmXV4/g82HWxOCvyGw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewsletter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewsletter"]
    ];
});
_c4 = HomePage;
const StyledHomePage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "page__StyledHomePage",
    componentId: "sc-d2cb3505-0"
})`
	width: 100%;
	gap: 2rem;

	hr {
		width: 100%;
		border: none;
		border-bottom: 1px solid ${({ theme })=>theme.color.border};
		margin: 0;
		padding: 0;
	}

	@media ${({ theme })=>theme.mediaQuery.tablet} {
		padding: 0 1rem;
	}
`;
_c5 = StyledHomePage;
const SubscribeSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].section.withConfig({
    displayName: "page__SubscribeSection",
    componentId: "sc-d2cb3505-1"
})`
	width: 100%;
	display: flex;
	gap: 2rem;
	margin: 4rem auto;

	.subscription-form {
		width: fit-content;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.main {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		.footer {
			display: flex;
			justify-content: flex-start;
			align-items: top;
			gap: 0.5rem;
			margin-top: 0.5rem;
			line-height: 1.5;
			white-space: normal;
			font-size: ${({ theme })=>theme.fontSize.extraSmall};
			color: ${({ theme })=>theme.color.textSecondary};
			text-align: left;
		}

		a {
			color: ${({ theme })=>theme.color.primary};
			font-weight: ${({ theme })=>theme.fontWeight.bold};

			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media ${({ theme })=>theme.mediaQuery.tablet} {
		flex-wrap: wrap;

		.subscription-category {
			width: 100%;

			.subscription-cards .card {
				min-width: calc(50% - 0.9rem);
			}
		}

		.subscription-form {
			width: 100%;
		}
	}

	@media ${({ theme })=>theme.mediaQuery.mobile} {
		flex-wrap: wrap;

		.subscription-category {
			width: 100%;

			.subscription-cards .card {
				min-width: calc(100% - 0.9rem);
			}
		}

		.subscription-form {
			width: 100%;
		}
	}
`;
_c6 = SubscribeSection;
const __TURBOPACK__default__export__ = HomePage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_refresh__.register(_c, "BiCheck$dynamic");
__turbopack_refresh__.register(_c1, "BiCheck");
__turbopack_refresh__.register(_c2, "BiPlus$dynamic");
__turbopack_refresh__.register(_c3, "BiPlus");
__turbopack_refresh__.register(_c4, "HomePage");
__turbopack_refresh__.register(_c5, "StyledHomePage");
__turbopack_refresh__.register(_c6, "SubscribeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_f85dd1._.js.map