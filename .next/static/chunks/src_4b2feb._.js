(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_4b2feb._.js", {

"[project]/src/components/common/InputCheck.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
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
        className: "input-check",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/common/InputCheck.tsx",
                lineNumber: 31,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                ref: ref,
                onBlur: handleBlur,
                onChange: handleChange,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/common/InputCheck.tsx",
                lineNumber: 32,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/InputCheck.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this);
});
_c1 = InputCheck;
const StyledInputCheck = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputCheck__StyledInputCheck",
    componentId: "sc-89aa6a05-0"
})`
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

	input {
		display: flex;
		align-items: center;
		justify-content: center;

		height: ${({ $size, theme })=>$size ? theme.fontSize[$size] : theme.fontSize.large};
		width: ${({ $size, theme })=>$size ? theme.fontSize[$size] : theme.fontSize.large};
		aspect-ratio: 1;

		cursor: pointer;
		appearance: none;
		border-radius: 8px;
		background: ${({ theme })=>theme.color.blur};
		box-shadow: ${({ theme })=>theme.shadow.light};

		&:checked {
			background: ${({ theme })=>theme.color.primary};
		}

		&:focus {
			box-shadow: ${({ theme })=>theme.shadow.default};
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
"[project]/src/components/common/InputSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const InputSelect = ({ name, value, label, options, onChange, onBlur, placeholder = '선택하세요', children })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleToggle = (e)=>{
        e.preventDefault();
        setIsOpen((prev)=>!prev);
    };
    const handleOptionClick = (optionValue)=>{
        onChange(optionValue);
        setIsOpen(false);
        if (!optionValue && onBlur) {
            onBlur(name, optionValue);
        }
    };
    const handleClickOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSelect.useCallback[handleClickOutside]": (e)=>{
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                if (isOpen) {
                    if (onBlur) {
                        onBlur(name, '');
                    }
                    setIsOpen(false);
                }
            }
        }
    }["InputSelect.useCallback[handleClickOutside]"], [
        isOpen,
        name,
        onBlur
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputSelect.useEffect": ()=>{
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "InputSelect.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["InputSelect.useEffect"];
        }
    }["InputSelect.useEffect"], [
        handleClickOutside
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledInputSelect, {
        ref: selectRef,
        $open: isOpen,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/common/InputSelect.tsx",
                lineNumber: 69,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "select-display",
                onClick: handleToggle,
                children: [
                    value ? options.find((option)=>option.value === value)?.label || placeholder : placeholder,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdArrowDropdown"], {
                        className: `select-arrow ${isOpen ? 'open' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/InputSelect.tsx",
                        lineNumber: 72,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/InputSelect.tsx",
                lineNumber: 70,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "options-list",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: `option-item ${option.value === value ? 'selected' : ''}`,
                        onClick: ()=>handleOptionClick(option.value),
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/src/components/common/InputSelect.tsx",
                        lineNumber: 76,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/common/InputSelect.tsx",
                lineNumber: 74,
                columnNumber: 4
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/InputSelect.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, this);
};
_s(InputSelect, "NGpw5VinEy0wG5SwV+miWVA8y3E=");
_c = InputSelect;
const StyledInputSelect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSelect__StyledInputSelect",
    componentId: "sc-81a8c8b-0"
})`
	position: relative;

	.select-display {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		box-shadow: ${({ theme })=>theme.shadow.light};
		border-radius: ${({ theme })=>theme.borderRadius.default};
		background: ${({ theme })=>theme.color.blur};
		font-size: ${({ theme })=>theme.fontSize.small};
		cursor: pointer;
		line-height: 1.8;
		height: 2.5rem;
		z-index: 1000;

		.select-arrow {
			margin-left: 0.5rem;
			transition: transform 0.25s ease-in-out;
			font-size: ${({ theme })=>theme.fontSize.large};
			color: ${({ theme })=>theme.color.primary};

			&.open {
				transform: rotate(180deg);
			}
		}
	}

	.options-list {
		width: 100%;
		visibility: ${({ $open })=>$open ? 'visible' : 'hidden'};
		max-height: ${({ $open })=>$open ? 'auto' : '0'};
		opacity: ${({ $open })=>$open ? '1' : '0'};
		transform-origin: top;
		transform: ${({ $open })=>$open ? 'scaleY(1)' : 'scaleY(0)'};
		transition: all 0.3s ease-in-out;

		position: absolute;
		top: 100%;
		max-height: 10rem;
		overflow-y: auto;
		margin: 0;
		padding: 0.5rem;

		list-style: none;
		box-shadow: ${({ theme })=>theme.shadow.default};
		border-radius: ${({ theme })=>theme.borderRadius.default};
		background: ${({ theme })=>theme.color.surface};
		z-index: 2000;

		.option-item {
			padding: 0.5rem 1rem;
			border-radius: ${({ theme })=>theme.borderRadius.default};
			cursor: pointer;
			margin: 0.5rem;
			white-space: nowrap;

			&.selected {
				background: ${({ theme })=>theme.color.blur};
				box-shadow: ${({ theme })=>theme.shadow.light};
			}

			&:hover {
				background: ${({ theme })=>theme.color.secondary};
				box-shadow: ${({ theme })=>theme.shadow.light};
			}
		}
	}
`;
_c1 = StyledInputSelect;
const __TURBOPACK__default__export__ = InputSelect;
var _c, _c1;
__turbopack_refresh__.register(_c, "InputSelect");
__turbopack_refresh__.register(_c1, "StyledInputSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/test/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$InputCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/InputCheck.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$InputSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/InputSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const TestPage = ()=>{
    _s();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleDateChange = (date)=>{
        setSelectedDate(date);
        console.log('Selected Date:', date);
    };
    const handleCheckboxChange = (name, checked)=>{
        setIsChecked(checked);
        console.log(`Checkbox ${name} is now`, checked ? 'Checked' : 'Unchecked');
    };
    const handleSelectChange = (value)=>{
        setSelectedOption(value);
        console.log('Selected Option:', value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledTestPage, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "공통 컴포넌트 테스팅"
            }, void 0, false, {
                fileName: "[project]/src/app/test/page.tsx",
                lineNumber: 32,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Button"
                    }, void 0, false, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 35,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: ()=>alert('Button clicked!'),
                        children: "클릭"
                    }, void 0, false, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 36,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/test/page.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "InputCheck"
                    }, void 0, false, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 50,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$InputCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "testCheckbox",
                        label: "테스트 체크박스",
                        onChange: handleCheckboxChange,
                        checked: isChecked
                    }, void 0, false, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 51,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "체크 상태: ",
                            isChecked ? '체크됨' : '체크 안 됨'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 57,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/test/page.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "InputSelect"
                    }, void 0, false, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 61,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$InputSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "testSelect",
                        label: "테스트 셀렉트",
                        value: selectedOption,
                        options: [
                            {
                                label: '옵션 1',
                                value: 'option1'
                            },
                            {
                                label: '옵션 2',
                                value: 'option2'
                            },
                            {
                                label: '옵션 3',
                                value: 'option3'
                            }
                        ],
                        onChange: handleSelectChange
                    }, void 0, false, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 62,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "선택된 옵션: ",
                            selectedOption || '없음'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/test/page.tsx",
                        lineNumber: 73,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/test/page.tsx",
                lineNumber: 60,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/test/page.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this);
};
_s(TestPage, "0biXRfgGJ4Yo3IbfE2sRj2SzIMc=");
_c = TestPage;
const StyledTestPage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page__StyledTestPage",
    componentId: "sc-875b9bf8-0"
})`
	padding: 2rem;
	font-family: Arial, sans-serif;

	h1 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: ${({ theme })=>theme.color.primary};
	}

	section {
		margin-bottom: 2rem;

		h2 {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
			color: ${({ theme })=>theme.color.text};
		}

		p {
			margin-top: 0.5rem;
			color: ${({ theme })=>theme.color.secondaryText};
		}

		button {
			margin-top: 1rem;
		}
	}

	label {
		margin-bottom: 0.5rem;
		display: block;
		color: ${({ theme })=>theme.color.text};
	}
`;
_c1 = StyledTestPage;
const __TURBOPACK__default__export__ = TestPage;
var _c, _c1;
__turbopack_refresh__.register(_c, "TestPage");
__turbopack_refresh__.register(_c1, "StyledTestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/test/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_4b2feb._.js.map