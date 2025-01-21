(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_9a2d2b._.js", {

"[project]/src/components/common/Image.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const Image = ({ src, alt, width = 400, height = 300, ratio = 'wide', borderRadius = 'medium', objectFit = 'cover', priority = true, placeholder = 'surface', className })=>{
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledImage, {
        className: `${className}`,
        $ratio: ratio,
        $borderRadius: borderRadius,
        $placeholder: placeholder,
        $isLoaded: isLoaded,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: src,
            alt: alt,
            width: width,
            height: height,
            priority: priority,
            style: {
                objectFit
            },
            onLoad: ()=>setIsLoaded(true)
        }, void 0, false, {
            fileName: "[project]/src/components/common/Image.tsx",
            lineNumber: 41,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Image.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this);
};
_s(Image, "IYJBVyHsXBw9t28YX/YBiMCcttM=");
_c = Image;
const StyledImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Image__StyledImage",
    componentId: "sc-ced08196-0"
})`
	width: fit-content;
	height: fit-content;
	overflow: hidden;
	border-radius: ${({ $borderRadius, theme })=>theme.borderRadius[$borderRadius || 'medium']};
	aspect-ratio: ${({ $ratio })=>{
    switch($ratio){
        case 'square':
            return '1 / 1';
        case 'wide':
            return '16 / 9';
        case 'tall':
            return '9 / 16';
        default:
            return '16 / 9';
    }
}};

	/* 기본적으로 단색 배경을 적용하고, 이미지가 로드되면 숨김 */
	background: ${({ theme, $placeholder, $isLoaded })=>$isLoaded ? 'transparent' : theme.color[$placeholder]};

	img {
		width: 100%;
		height: 100%;
		opacity: ${({ $isLoaded })=>$isLoaded ? 1 : 0}; /* 로드되기 전까지 투명 처리 */
		transition: opacity 0.3s ease-in-out;
	}
`;
_c1 = StyledImage;
const __TURBOPACK__default__export__ = Image;
var _c, _c1;
__turbopack_refresh__.register(_c, "Image");
__turbopack_refresh__.register(_c1, "StyledImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
const OnIconStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "ToggleSVG__OnIconStyled",
    componentId: "sc-9e8ec2e5-0"
})`
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
"[project]/src/components/common/modal/ModalContents.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                        fileName: "[project]/src/components/common/modal/ModalContents.tsx",
                        lineNumber: 27,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: content
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/modal/ModalContents.tsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/modal/ModalContents.tsx",
                lineNumber: 25,
                columnNumber: 4
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
                        fileName: "[project]/src/components/common/modal/ModalContents.tsx",
                        lineNumber: 32,
                        columnNumber: 6
                    }, this),
                    filledButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        scheme: "primary",
                        size: "medium",
                        onClick: onConfirmClick,
                        children: filledButton
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/modal/ModalContents.tsx",
                        lineNumber: 37,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/modal/ModalContents.tsx",
                lineNumber: 30,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/modal/ModalContents.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this);
}
_c = ModalContents;
const ModalContentsStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ModalContents__ModalContentsStyled",
    componentId: "sc-df3a4200-0"
})`
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/users.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$ModalContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/modal/ModalContents.tsx [app-client] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])();
    const [subsToggle, setSubsToggle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notSubsToggle, setNotSubsToggle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { USER2 } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersData"];
    const toggleSubscribe = ()=>{
        setSubsToggle(!subsToggle);
    };
    const handleConfirm = ()=>{
        closeModal();
        router.push('/mypage');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubscribeToggle.useEffect": ()=>{
            const subscribeState = USER2.subscribe;
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
                className: subsToggle ? 'subscribe-on' : 'subscribe-off',
                onClick: toggleSubscribe,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$svg$2f$ToggleSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleIcon"], {
                        className: "svg",
                        $toggle: subsToggle
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 46,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: subsToggle ? '구독 진행중' : '구독 일시정지 중'
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 47,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this),
            !notSubsToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "not-subscribe",
                        onClick: ()=>openModal('not-subscribe'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuBellOff"], {}, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                                lineNumber: 55,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "구독 상태가 아닙니다."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                                lineNumber: 56,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 54,
                        columnNumber: 6
                    }, this),
                    isOpen && modalType === 'not-subscribe' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isOpen,
                        onClose: closeModal,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$ModalContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuBell"], {}, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, void 0),
                            title: "구독 상태가 아닙니다.",
                            content: `새롭게 뉴스레터를 구독해보시겠습니까? 확인을 누르시면 구독페이지로 넘어갑니다.`,
                            outlineButton: "취소",
                            filledButton: "확인",
                            onCancelClick: closeModal,
                            onConfirmClick: handleConfirm
                        }, void 0, false, {
                            fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                            lineNumber: 60,
                            columnNumber: 8
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/profile/SubscribeToggle.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this);
}
_s(SubscribeToggle, "YjSSpz7pRXlaqDZ66qnuWKROcmA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"]
    ];
});
_c = SubscribeToggle;
const SubscribeToggleStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SubscribeToggle__SubscribeToggleStyled",
    componentId: "sc-6c4579dd-0"
})`
	.subscribe-on,
	.subscribe-off,
	.not-subscribe {
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
		background-color: ${({ theme })=>theme.color.tertiary};
	}

	.subscribe-off {
		border: 1px solid ${({ theme })=>theme.color.border};
		color: ${({ theme })=>theme.color.text};
		background-color: ${({ theme })=>theme.color.surface};
	}

	.not-subscribe {
		border: 1px solid ${({ theme })=>theme.color.border};
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
			background-color: ${({ theme })=>theme.color.tertiary};
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
"[project]/src/components/mypage/profile/Profile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/users.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$SubscribeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/profile/SubscribeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
;
;
function Profile() {
    const { USER1 } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/icons/profile_dummy.jpg",
                        alt: "prifile-img",
                        ratio: "square"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/profile/Profile.tsx",
                        lineNumber: 12,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "profile-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: USER1.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/Profile.tsx",
                                lineNumber: 14,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: USER1.email
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/profile/Profile.tsx",
                                lineNumber: 15,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mypage/profile/Profile.tsx",
                        lineNumber: 13,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mypage/profile/Profile.tsx",
                lineNumber: 11,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "subscribe",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$SubscribeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/mypage/profile/Profile.tsx",
                    lineNumber: 24,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/profile/Profile.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/profile/Profile.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
}
_c = Profile;
const ProfileStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Profile__ProfileStyled",
    componentId: "sc-63ffc4d6-0"
})`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;

	.profile {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: space-between;
		align-items: flex-start;

		img {
			height: 100px;
			width: 100px;
			border: 1px solid ${({ theme })=>theme.color.neutral};
			border-radius: ${({ theme })=>theme.borderRadius.circle};
		}

		.profile-text {
			h4 {
				font-size: ${({ theme })=>theme.fontSize.medium};
			}

			p {
				color: ${({ theme })=>theme.color.subText};
				padding: 0.25rem 0;
			}

			ul {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				gap: 0.125rem 0.875rem;
				color: ${({ theme })=>theme.color.subText};
				font-size: ${({ theme })=>theme.fontSize.extraSmall};
			}
		}
	}
`;
_c1 = ProfileStyled;
const __TURBOPACK__default__export__ = Profile;
var _c, _c1;
__turbopack_refresh__.register(_c, "Profile");
__turbopack_refresh__.register(_c1, "ProfileStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/generateRandomData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getNewsletters": (()=>getNewsletters),
    "getRandomImage": (()=>getRandomImage),
    "getRandomImages": (()=>getRandomImages),
    "getRandomText": (()=>getRandomText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$chunk$2d$ZG4NHMPT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__ = __turbopack_import__("[project]/node_modules/@faker-js/faker/dist/chunk-ZG4NHMPT.js [app-client] (ecmascript) <export a as faker>");
;
;
;
const getRandomText = (min, max)=>{
    const length = Math.floor(Math.random() * (max - min + 1)) + min;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$chunk$2d$ZG4NHMPT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].lorem.sentence(length);
};
const getRandomImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cache"])((width = 640, height = 480)=>{
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/${width}/${height}?random=${randomId}`;
});
const getRandomImages = (count, width = 640, height = 480)=>{
    return Array.from({
        length: count
    }, ()=>getRandomImage(width, height));
};
const getNewsletters = ()=>{
    const categories = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].filter((category)=>category.title !== '전체').map((category)=>category.title);
    return Array.from({
        length: 5
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
                title: getRandomText(10, 25),
                summary: getRandomText(20, 80),
                image: getRandomImage(),
                link: `/news/${dayIndex * categories.length + categoryIndex + 1}`,
                views: Math.floor(Math.random() * 1000),
                likes: Math.floor(Math.random() * 500),
                comments: Math.floor(Math.random() * 300)
            }));
    }).flat();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/mocks/mypage/currentUser.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "currentUserData": (()=>currentUserData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateRandomData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/generateRandomData.ts [app-client] (ecmascript)");
;
const bookmarks = [
    {
        id: 1,
        newsletterTitle: '북마크한 뉴스레터 1'
    },
    {
        id: 2,
        newsletterTitle: '북마크한 뉴스레터 2'
    },
    {
        id: 3,
        newsletterTitle: '북마크한 뉴스레터 3'
    },
    {
        id: 4,
        newsletterTitle: '북마크한 뉴스레터 4'
    },
    {
        id: 5,
        newsletterTitle: '북마크한 뉴스레터 5'
    },
    {
        id: 6,
        newsletterTitle: '북마크한 뉴스레터 6'
    },
    {
        id: 7,
        newsletterTitle: '북마크한 뉴스레터 7'
    }
];
const subscribedCategories = [
    {
        id: 1,
        categoryName: '정치'
    },
    {
        id: 2,
        categoryName: '경제'
    },
    {
        id: 3,
        categoryName: '사회'
    },
    {
        id: 4,
        categoryName: '문화'
    },
    {
        id: 5,
        categoryName: 'IT'
    },
    {
        id: 6,
        categoryName: '세계'
    }
];
const summaries = [
    {
        id: 1,
        categoryName: '정치',
        userId: 1,
        createdAt: '2025-01-01',
        img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateRandomData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomImage"])(),
        likes: true,
        title: 'How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)',
        summary: 'We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts'
    },
    {
        id: 2,
        categoryName: '경제',
        userId: 1,
        createdAt: '2025-01-01',
        likes: true,
        img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateRandomData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomImage"])(),
        title: 'How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)',
        summary: 'We all have habits - the good and not-so good kind. But can we use them to our advantage?'
    },
    {
        id: 3,
        categoryName: 'IT',
        likes: false,
        createdAt: '2025-01-01',
        img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateRandomData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomImage"])(),
        title: 'How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)',
        summary: 'We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts'
    },
    {
        id: 4,
        categoryName: '생활',
        likes: true,
        createdAt: '2025-01-01',
        img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateRandomData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomImage"])(),
        title: 'How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)',
        summary: 'We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts'
    },
    {
        id: 5,
        categoryName: '세계',
        likes: false,
        createdAt: '2025-01-01',
        img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateRandomData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomImage"])(),
        title: 'How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)',
        summary: 'We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts'
    },
    {
        id: 6,
        categoryName: '미국',
        likes: true,
        createdAt: '2025-01-01',
        img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateRandomData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomImage"])(),
        title: 'How to develop the habits you want – and get rid of the ones you don’t (w/ James Clear)',
        summary: 'We all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscriptsWe all have habits - the good and not-so good kind. But can we use them to our advantage? In this week’s episode, Chris is joined by James Clear, entrepreneur and author of #1 New York Times bestseller, “Atomic Habits”, for a conversation about the power of habitual behavior. They discuss the science of habit formation, how to understand the forces that motivate you, and why the sum of many little habits can add up to a better life. For the full text transcript, visit go.ted.com/BHTranscripts'
    }
];
const currentUserData = {
    bookmarks,
    subscribedCategories,
    summaries
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/TabButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/currentUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
function TabBtn({ activeTab, setActiveTab }) {
    const { bookmarks, summaries } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUserData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabBtnStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab('subscribe'),
                className: activeTab === 'subscribe' ? 'active' : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "구독한 뉴스레터 (",
                        summaries.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mypage/TabButton.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/TabButton.tsx",
                lineNumber: 14,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab('bookmark'),
                className: activeTab === 'bookmark' ? 'active' : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "북마크한 뉴스레터 (",
                        bookmarks.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mypage/TabButton.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/TabButton.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setActiveTab('newsletterSetting'),
                className: activeTab === 'newsletterSetting' ? 'active' : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "뉴스레터 설정"
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/TabButton.tsx",
                    lineNumber: 24,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/TabButton.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/TabButton.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
}
_c = TabBtn;
const TabBtnStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TabButton__TabBtnStyled",
    componentId: "sc-e663080a-0"
})`
	height: 100%;
	margin: 60px 0 40px 0;
	border-bottom: 1px solid ${({ theme })=>theme.color.neutral};

	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	button {
		cursor: pointer;
		padding: 0.5rem 0;
		width: calc(100% / 3);
		background-color: transparent;
		color: ${({ theme })=>theme.color.neutral};
		font-size: ${({ theme })=>theme.fontSize.small};
		margin-bottom: -1px;
		border-bottom: 2px solid transparent;
		transition: border-bottom 0.2s ease, color 0.2s ease;

		p {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
		}

		&.active {
			color: ${({ theme })=>theme.color.primary};
			border-bottom: 2px solid ${({ theme })=>theme.color.primary};

			&:hover {
				color: ${({ theme })=>theme.color.primary};
				border-bottom: 2px solid ${({ theme })=>theme.color.primary};
			}
		}

		&:hover {
			color: ${({ theme })=>theme.color.border};
			border-bottom: 2px solid ${({ theme })=>theme.color.border};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/categories.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useMypage = ()=>{
    _s();
    const [selectCategory, setSelectCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allSelectCategory, setAllSelectCate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 구독한 뉴스레터 네비게이션 스크롤 앵커 설정
    const handleAnchorNavigation = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    // 뉴스레터 설정 카테고리 선택
    const handleSelectCategory = (category)=>{
        setSelectCategory((prev)=>{
            const isSelected = selectCategory.includes(category.title);
            let newSelectCate = [
                ...prev
            ];
            if (!isSelected) {
                newSelectCate = [
                    ...newSelectCate,
                    category.title
                ];
            } else {
                newSelectCate = prev.filter((el)=>el !== category.title);
            }
            // 전체 카테고리와 길이가 같으면 전체 true, 아니면 false
            if (newSelectCate.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].length) {
                setAllSelectCate(true);
            } else {
                setAllSelectCate(false);
            }
            return newSelectCate;
        });
    };
    // 뉴스레터 설정 카테고리 전체 선택
    const handleSelectAll = ()=>{
        if (selectCategory.length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].length) {
            setSelectCategory([]);
            setAllSelectCate(false);
        } else {
            setSelectCategory(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((category)=>category.title));
            setAllSelectCate(true);
        }
    };
    return {
        handleAnchorNavigation,
        handleSelectCategory,
        handleSelectAll,
        allSelectCategory,
        selectCategory,
        setSelectCategory
    };
};
_s(useMypage, "oGxgBIClwXhXvvRvnuZSpT8Z/OA=");
const __TURBOPACK__default__export__ = useMypage;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/tabpage/SubscribeInfo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useMypage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/currentUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
function SubscribeInfo({ activeCategory }) {
    _s();
    const { headerHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"])();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isSticky, setIsSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { handleAnchorNavigation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const today = new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const { summaries } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUserData"];
    // 스크롤 방향 감지 및 상태 업데이트
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubscribeInfo.useEffect": ()=>{
            const handleScroll = {
                "SubscribeInfo.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    // 특정 위치 이상 스크롤되면 Sticky 활성화
                    setIsSticky(currentScrollY > 365);
                    // 현재 스크롤 위치 저장
                    lastScrollY.current = currentScrollY;
                }
            }["SubscribeInfo.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "SubscribeInfo.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["SubscribeInfo.useEffect"];
        }
    }["SubscribeInfo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledSubscribeInfo, {
        ref: navRef,
        className: `${isSticky ? 'full-width' : ''}`,
        $isSticky: isSticky,
        $paddingTop: headerHeight,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledContents, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "date",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {}, void 0, false, {
                            fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
                            lineNumber: 50,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: today
                        }, void 0, false, {
                            fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
                            lineNumber: 51,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowForward"], {}, void 0, false, {
                            fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
                            lineNumber: 52,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
                    lineNumber: 49,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "categories",
                    children: summaries.map((news, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `category ${activeCategory === news.categoryName ? 'active' : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>handleAnchorNavigation(e, news.categoryName),
                                children: news.categoryName
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
                                lineNumber: 57,
                                columnNumber: 8
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
                            lineNumber: 56,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
                    lineNumber: 54,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
            lineNumber: 48,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mypage/tabpage/SubscribeInfo.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this);
}
_s(SubscribeInfo, "DoxMVjj42pNatLVUKBK22tJb8Gs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SubscribeInfo;
const StyledSubscribeInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SubscribeInfo__StyledSubscribeInfo",
    componentId: "sc-f33acecd-0"
})`
	width: 100%;
	position: sticky;
	top: 0;
	padding-top: ${({ $isSticky, $paddingTop })=>$isSticky ? $paddingTop : '0'};
	margin-top: -40px;
	z-index: 999;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	border-bottom: none;
	transition: all 0.2s ease;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: ${({ theme })=>theme.color.surface};
		border-bottom: 1px solid ${({ theme })=>theme.color.border};
		transform: translateX(-50%);
		left: 50%;
		z-index: -1;
	}

	&.full-width::before {
		width: 100vw;
	}
`;
_c1 = StyledSubscribeInfo;
const StyledContents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SubscribeInfo__StyledContents",
    componentId: "sc-f33acecd-1"
})`
	padding: 1rem;
	max-width: ${({ theme })=>theme.layout.width.large};
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
		color: ${({ theme })=>theme.color.subText};

		.category {
			&.active button {
				color: ${({ theme })=>theme.color.primary};
				font-weight: ${({ theme })=>theme.fontWeight.medium};
			}

			button {
				color: ${({ theme })=>theme.color.subText};
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
_c2 = StyledContents;
const __TURBOPACK__default__export__ = SubscribeInfo;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "SubscribeInfo");
__turbopack_refresh__.register(_c1, "StyledSubscribeInfo");
__turbopack_refresh__.register(_c2, "StyledContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/Icon.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IconStyled": (()=>IconStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const IconStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Icon__IconStyled",
    componentId: "sc-b8414324-0"
})`
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
		background-color: ${({ theme })=>theme.color.tertiary};
		transition: all 0.3s ease;
	}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/icons/LikeIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/Icon.ts [app-client] (ecmascript)");
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
        children: like ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
            onClick: handleLike,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeart"], {}, void 0, false, {
                fileName: "[project]/src/components/common/icons/LikeIcon.tsx",
                lineNumber: 16,
                columnNumber: 6
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icons/LikeIcon.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
            onClick: handleLike,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdHeartEmpty"], {}, void 0, false, {
                fileName: "[project]/src/components/common/icons/LikeIcon.tsx",
                lineNumber: 20,
                columnNumber: 6
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icons/LikeIcon.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_s(LikeIcon, "0aCfLSCOAwpkobM2fY9kmPvfWPU=");
_c = LikeIcon;
const __TURBOPACK__default__export__ = LikeIcon;
var _c;
__turbopack_refresh__.register(_c, "LikeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/icons/LinkCopyIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/Icon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
;
;
// interface LikeIconProps {
// 	width?: string;
// 	height?: string;
// }
function LinkCopyIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{},
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuLink2"], {}, void 0, false, {
                fileName: "[project]/src/components/common/icons/LinkCopyIcon.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icons/LinkCopyIcon.tsx",
            lineNumber: 12,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/icons/LinkCopyIcon.tsx",
        lineNumber: 11,
        columnNumber: 3
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
"[project]/src/components/common/icons/OrigLinkIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/Icon.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
;
;
// interface LikeIconProps {
// 	width?: string;
// 	height?: string;
// }
function LikeIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Icon$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStyled"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{},
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuExternalLink"], {}, void 0, false, {
                fileName: "[project]/src/components/common/icons/OrigLinkIcon.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/common/icons/OrigLinkIcon.tsx",
            lineNumber: 12,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/icons/OrigLinkIcon.tsx",
        lineNumber: 11,
        columnNumber: 3
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
"[project]/src/components/mypage/tabpage/MySummaryCategory.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/currentUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icons/LikeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$LinkCopyIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icons/LinkCopyIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$OrigLinkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icons/OrigLinkIcon.tsx [app-client] (ecmascript)");
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
;
function MySummaryCategory() {
    const { summaries } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUserData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MySummaryCategoryStyled, {
            children: summaries.map((news, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content",
                    id: news.categoryName,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "top",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/mypage",
                                    className: "category-name",
                                    children: [
                                        news.categoryName,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowForward"], {}, void 0, false, {
                                            fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                            lineNumber: 22,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                    lineNumber: 20,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "title-section",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "title-text",
                                        children: news.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                        lineNumber: 25,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                    lineNumber: 24,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                            lineNumber: 19,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bottom",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "image-placeholder",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: news.img,
                                                alt: news.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                                lineNumber: 32,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                            lineNumber: 31,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "etc",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$LinkCopyIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$OrigLinkIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                            lineNumber: 34,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                    lineNumber: 30,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text",
                                    children: news.summary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                                    lineNumber: 40,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                            lineNumber: 29,
                            columnNumber: 7
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
                    lineNumber: 18,
                    columnNumber: 6
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MySummaryCategory.tsx",
            lineNumber: 16,
            columnNumber: 4
        }, this)
    }, void 0, false);
}
_c = MySummaryCategory;
const MySummaryCategoryStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MySummaryCategory__MySummaryCategoryStyled",
    componentId: "sc-8395d5d2-0"
})`
	@keyframes moveForward {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(0.375rem);
		}
	}

	.image-placeholder {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		border-radius: ${({ theme })=>theme.borderRadius.medium};
		background: ${({ theme })=>theme.color.surface};
	}

	.content {
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
						animation: moveForward 0.7s linear infinite;
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
				color: ${({ theme })=>theme.color.subText};
			}

			.image-section {
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

				.text,
				.image-section {
					flex: none; /* flex 비율 대신 각자 100% 너비 (혹은 auto) */
					width: 100%;
				}
			}
		}
	}
`;
_c1 = MySummaryCategoryStyled;
const __TURBOPACK__default__export__ = MySummaryCategory;
var _c, _c1;
__turbopack_refresh__.register(_c, "MySummaryCategory");
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
const Title = ({ children, className, size = 'medium', weight, color })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledTitle, {
        className: `${className}`,
        $size: size,
        $weight: weight,
        $color: color,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/Title.tsx",
        lineNumber: 16,
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
                columnNumber: 4
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
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                scheme: "primary",
                size: "medium",
                onClick: onClick,
                children: btnText
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
_c = NoContentsPage;
const NoContentsPageStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NoContentsPage__NoContentsPageStyled",
    componentId: "sc-37655120-0"
})`
	text-align: center;
	margin: 6rem;
	display: flex;
	flex-direction: column;
	gap: 1.875rem;
	align-items: center;

	p {
		white-space: pre-neutral;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/users.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$SubscribeInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/SubscribeInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySummaryCategory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MySummaryCategory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx [app-client] (ecmascript)");
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
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { USER1 } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersData"];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "MySubscribe.useLayoutEffect": ()=>{
            const categories = document.querySelectorAll('.content');
            let sectionPositions = [];
            const calcPositions = {
                "MySubscribe.useLayoutEffect.calcPositions": ()=>{
                    sectionPositions = Array.from(categories).map({
                        "MySubscribe.useLayoutEffect.calcPositions": (cat)=>cat.offsetTop
                    }["MySubscribe.useLayoutEffect.calcPositions"]);
                }
            }["MySubscribe.useLayoutEffect.calcPositions"];
            const handleScroll = {
                "MySubscribe.useLayoutEffect.handleScroll": ()=>{
                    const currentScroll = window.scrollY - 110; // 높이 더하기 빼기 조절 (nav 높이값)
                    let activeIndex = 0;
                    for(let i = 0; i < sectionPositions.length; i++){
                        if (sectionPositions[i] <= currentScroll) {
                            activeIndex = i;
                        }
                    }
                    setActiveCategory(categories[activeIndex]?.id || '');
                }
            }["MySubscribe.useLayoutEffect.handleScroll"];
            // 처음 셋팅
            calcPositions();
            handleScroll();
            // 스크롤, 리사이즈 이벤트 등록
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', {
                "MySubscribe.useLayoutEffect": ()=>{
                    calcPositions();
                    handleScroll();
                }
            }["MySubscribe.useLayoutEffect"]);
            return ({
                "MySubscribe.useLayoutEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', calcPositions);
                }
            })["MySubscribe.useLayoutEffect"];
        }
    }["MySubscribe.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$SubscribeInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeCategory: activeCategory
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/tabpage/MySubscribe.tsx",
                    lineNumber: 54,
                    columnNumber: 6
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MySubscribeStyled, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySummaryCategory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/mypage/tabpage/MySubscribe.tsx",
                        lineNumber: 56,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/tabpage/MySubscribe.tsx",
                    lineNumber: 55,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true) : ("TURBOPACK unreachable", undefined)
    }, void 0, false);
}
_s(MySubscribe, "iuuzdfHEiXQScJN5Cv6UkX6TlcE=");
_c = MySubscribe;
const MySubscribeStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MySubscribe__MySubscribeStyled",
    componentId: "sc-f0ede3d1-0"
})`
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/currentUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/icons/LikeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function MyBookmark() {
    const { bookmarks, summaries } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUserData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: bookmarks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyBookmarkStyled, {
                children: summaries.map((news, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `#`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: news.img,
                                    alt: news.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                    lineNumber: 20,
                                    columnNumber: 10
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                lineNumber: 19,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `#`,
                                        className: "category",
                                        children: news.categoryName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 23,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `#`,
                                        className: "title",
                                        children: news.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 26,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "subText",
                                        children: news.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 29,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "etc",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "date",
                                                children: news.createdAt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                                lineNumber: 31,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$icons$2f$LikeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                                lineNumber: 33,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                        lineNumber: 30,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                                lineNumber: 22,
                                columnNumber: 9
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                        lineNumber: 18,
                        columnNumber: 8
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
                lineNumber: 16,
                columnNumber: 6
            }, this)
        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: `북마크한 뉴스레터가 없습니다. \n 다른 뉴스레터를 찾아보세요.`,
            btnText: '오늘의 뉴스레터',
            moveTo: '/'
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MyBookmark.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_c = MyBookmark;
const MyBookmarkStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MyBookmark__MyBookmarkStyled",
    componentId: "sc-fa5faad0-0"
})`
	display: grid;
	justify-items: start;
	justify-content: start;
	gap: 2rem;
	grid-template-columns: repeat(3, 1fr);

	.card {
		width: auto;

		.content {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.category {
				color: ${({ theme })=>theme.color.primary};
				font-size: ${({ theme })=>theme.fontSize.extraSmall};
				font-weight: ${({ theme })=>theme.fontWeight.medium};
				width: max-content;
			}

			.title,
			.subText {
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

			.subText {
				font-size: ${({ theme })=>theme.fontSize.extraSmall};
				color: ${({ theme })=>theme.color.subText};
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
					color: ${({ theme })=>theme.color.neutral};
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
"[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/categories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/currentUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$ModalContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/modal/ModalContents.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useMypage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
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
function NewsletterSubscribe() {
    _s();
    const { handleSelectCategory, handleSelectAll, allSelectCategory, selectCategory, setSelectCategory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])();
    const { subscribedCategories } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$currentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentUserData"];
    // 유저가 구독 중인 카테고리 초기화면
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "NewsletterSubscribe.useLayoutEffect": ()=>{
            const subscribedNames = subscribedCategories.map({
                "NewsletterSubscribe.useLayoutEffect.subscribedNames": (item)=>item.categoryName
            }["NewsletterSubscribe.useLayoutEffect.subscribedNames"]);
            const uniqueSubscribed = Array.from(new Set(subscribedNames));
            setSelectCategory(uniqueSubscribed);
        }
    }["NewsletterSubscribe.useLayoutEffect"], [
        subscribedCategories,
        setSelectCategory
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsletterSubscribeStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "뉴스레터 설정"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "선택된 카테고리를 설정 해주신 후 완료 버튼을 눌러주세요.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                                lineNumber: 32,
                                columnNumber: 6
                            }, this),
                            "내일 보내드리는 뉴스레터부터 적용됩니다."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                        lineNumber: 30,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                lineNumber: 28,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "category-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "all-category",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            type: "button",
                            scheme: "default",
                            className: allSelectCategory ? 'active category-btn' : 'category-btn',
                            onClick: ()=>handleSelectAll(),
                            children: "전체"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                            lineNumber: 38,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                        lineNumber: 37,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                        lineNumber: 47,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "categories",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].slice(1).map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    type: "button",
                                    scheme: "default",
                                    onClick: ()=>{
                                        handleSelectCategory(category);
                                    },
                                    className: selectCategory.includes(category.title) ? 'category-btn active' : 'category-btn',
                                    children: category.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                                    lineNumber: 51,
                                    columnNumber: 8
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                                lineNumber: 50,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                        lineNumber: 48,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                lineNumber: 36,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "btn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    type: "submit",
                    scheme: "primary",
                    size: "large",
                    onClick: ()=>openModal('submit'),
                    children: "완료"
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                    lineNumber: 68,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                lineNumber: 67,
                columnNumber: 4
            }, this),
            isOpen && modalType === 'submit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$ModalContents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuMailCheck"], {}, void 0, false, {
                        fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, void 0),
                    title: "구독 설정이 완료되었습니다",
                    content: `내일부터 새로운 뉴스레터를 보내드려요.`,
                    filledButton: "확인",
                    onConfirmClick: closeModal
                }, void 0, false, {
                    fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                    lineNumber: 75,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this);
}
_s(NewsletterSubscribe, "JYE2nNw+bqkRYfAVqsQcOSLWq4g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMypage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"]
    ];
});
_c = NewsletterSubscribe;
const NewsletterSubscribeStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NewsletterSubscribe__NewsletterSubscribeStyled",
    componentId: "sc-1f5a725-0"
})`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	.text {
		h3 {
			font-size: ${({ theme })=>theme.fontSize.large};
			margin-bottom: 0.5rem;
		}

		p {
			color: ${({ theme })=>theme.color.subtext};
		}
	}

	.category-section {
		display: flex;
		flex-direction: row;
		gap: 0.875rem;
		background-color: ${({ theme })=>theme.color.surface};
		padding: 2rem;
		border-top: 1px solid ${({ theme })=>theme.color.text};
		border-bottom: 1px solid ${({ theme })=>theme.color.text};

		.bar {
			border-left: 1px solid ${({ theme })=>theme.color.lightGrey};
			height: auto;
		}

		.categories {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.category-btn {
			width: max-content;
			color: ${({ theme })=>theme.color.primary};
			border-radius: ${({ theme })=>theme.borderRadius.capsule};
			border: 1px solid ${({ theme })=>theme.color.primary};
		}

		.active {
			color: ${({ theme })=>theme.color.background};
			background-color: ${({ theme })=>theme.color.primary};
			border-radius: ${({ theme })=>theme.borderRadius.capsule};
		}
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;

		button {
			width: 14rem;
		}
	}
`;
_c1 = NewsletterSubscribeStyled;
const __TURBOPACK__default__export__ = NewsletterSubscribe;
var _c, _c1;
__turbopack_refresh__.register(_c, "NewsletterSubscribe");
__turbopack_refresh__.register(_c1, "NewsletterSubscribeStyled");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mypage/tabpage/MyNewsletterSetting.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/NoContentsPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NewsletterSubscribe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/common(temporary)/NewsletterSubscribe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/users.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function MyNewsletterSetting() {
    const { USER1 } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MyNewsletterSettingStyled, {
        children: USER1.subscribe === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NewsletterSubscribe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MyNewsletterSetting.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$common$28$temporary$292f$NoContentsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            text: `뉴스레터 구독이 일시정지 중 입니다. \n 구독을 다시 시작하시겠습니까?`,
            btnText: '일시정지 해제하기',
            onClick: ()=>{}
        }, void 0, false, {
            fileName: "[project]/src/components/mypage/tabpage/MyNewsletterSetting.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mypage/tabpage/MyNewsletterSetting.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
_c = MyNewsletterSetting;
const MyNewsletterSettingStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MyNewsletterSetting__MyNewsletterSettingStyled",
    componentId: "sc-44a01b75-0"
})``;
_c1 = MyNewsletterSettingStyled;
const __TURBOPACK__default__export__ = MyNewsletterSetting;
var _c, _c1;
__turbopack_refresh__.register(_c, "MyNewsletterSetting");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$Profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/profile/Profile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$TabButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/TabButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MySubscribe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyBookmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MyBookmark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyNewsletterSetting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/mypage/tabpage/MyNewsletterSetting.tsx [app-client] (ecmascript)");
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
function Page() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('subscribe');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageStyled, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "title",
                children: "마이페이지"
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$profile$2f$Profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$TabButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeTab: activeTab,
                setActiveTab: setActiveTab
            }, void 0, false, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 18,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tab-contents",
                children: [
                    activeTab === 'subscribe' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MySubscribe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/mypage/page.tsx",
                        lineNumber: 20,
                        columnNumber: 35
                    }, this),
                    activeTab === 'bookmark' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyBookmark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/mypage/page.tsx",
                        lineNumber: 21,
                        columnNumber: 34
                    }, this),
                    activeTab === 'newsletterSetting' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mypage$2f$tabpage$2f$MyNewsletterSetting$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/mypage/page.tsx",
                        lineNumber: 22,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/mypage/page.tsx",
                lineNumber: 19,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/mypage/page.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}
_s(Page, "6YybfqHJVotriRBZhCorqP22mno=");
_c = Page;
const PageStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page__PageStyled",
    componentId: "sc-7d169aeb-0"
})`
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

//# sourceMappingURL=src_9a2d2b._.js.map