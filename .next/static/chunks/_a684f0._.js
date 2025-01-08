(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a684f0._.js", {

"[project]/src/styles/globals.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GlobalStyle": (()=>GlobalStyle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
const Pretendard = '/fonts/Pretendard.woff2';
const GlobalStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobalStyle"]`
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'), url(${Pretendard}) format('woff2');
  }

  * {
    font-family: 'Pretendard', sans-serif;
  }

  html,body {
    margin: 0;
    padding: 0;
    color: ${({ theme })=>theme.color.text};
    background: ${({ theme })=>theme.color.background};
  }

  a {
    text-decoration: none;
  }

  input {
	  outline: none;
  }
  
  ul, li {
	  list-style: none;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/registry.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>StyledComponentsRegistry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function StyledComponentsRegistry({ children }) {
    _s();
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StyledComponentsRegistry.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerStyleSheet"]()
    }["StyledComponentsRegistry.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"])({
        "StyledComponentsRegistry.useServerInsertedHTML": ()=>{
            const styles = styledComponentsStyleSheet.getStyleElement();
            styledComponentsStyleSheet.instance.clearTag();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: styles
            }, void 0, false);
        }
    }["StyledComponentsRegistry.useServerInsertedHTML"]);
    if ("TURBOPACK compile-time truthy", 1) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    "TURBOPACK unreachable";
}
_s(StyledComponentsRegistry, "JO0TVXMWaWpk04kGnSFOnr+4ipc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"]
    ];
});
_c = StyledComponentsRegistry;
var _c;
__turbopack_refresh__.register(_c, "StyledComponentsRegistry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/theme.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "darkTheme": (()=>darkTheme),
    "getTheme": (()=>getTheme),
    "lightTheme": (()=>lightTheme)
});
const lightTheme = {
    name: 'light',
    color: {
        primary: '#3610e1',
        secondary: '#5564F1',
        background: '#FFFFFF',
        surface: '#F9F9F9',
        disabled: '#BDBDBD',
        success: '#8BC34A',
        error: '#E57373',
        warning: '#FFB300',
        text: '#000000',
        subtext: '#444444',
        lightGrey: '#999999',
        line: '#d9d9d9',
        border: '#999999'
    },
    fontSize: {
        extraSmall: '0.875rem',
        small: '1rem',
        medium: '1.125rem',
        large: '1.375rem',
        extraLarge: '1.75rem'
    },
    fontWeight: {
        light: '400',
        regular: '500',
        medium: '600',
        semiBold: '700',
        bold: '800',
        extraBold: '900'
    },
    heading: {
        extraLarge: {
            fontSize: '3rem'
        },
        large: {
            fontSize: '2.25rem'
        },
        medium: {
            fontSize: '2rem'
        },
        small: {
            fontSize: '1.75rem'
        }
    },
    borderRadius: {
        flat: '0',
        soft: '4px',
        medium: '8px',
        rounded: '16px',
        capsule: '9999px',
        circle: '50%'
    },
    button: {
        extraLarge: {
            fontSize: '1.125rem',
            padding: '1rem 2rem',
            gap: '0.75rem'
        },
        large: {
            fontSize: '1rem',
            padding: '1rem 1.5rem',
            gap: '0.75rem'
        },
        medium: {
            fontSize: '1rem',
            padding: '0.8rem 1.2rem',
            gap: '0.75rem'
        },
        small: {
            fontSize: '0.875rem',
            padding: '0.5rem 0.8rem',
            gap: '0.75rem'
        },
        extraSmall: {
            fontSize: '0.875rem',
            padding: '0 0.5rem',
            gap: '0.75rem'
        }
    },
    buttonScheme: {
        primary: {
            color: '#FFFFFF',
            fontWeight: '700',
            background: '#3610e1',
            border: '1px solid #3610e1',
            hover: {
                color: '#3610e1',
                fontWeight: '700',
                background: 'transparent',
                border: '1px solid #3610e1'
            }
        },
        secondary: {
            color: '#3610e1',
            fontWeight: '700',
            background: 'transparent',
            border: '1px solid #3610e1',
            hover: {
                color: '#ffffff',
                fontWeight: '700',
                background: '#2705C0',
                border: '1px solid #3610e1'
            }
        },
        mono: {
            color: '#ffffff',
            fontWeight: '700',
            background: '#222222',
            border: '1px solid #222222',
            hover: {
                color: '#444444',
                fontWeight: '700',
                background: 'transparent',
                border: '1px solid #999999'
            }
        },
        monoOutline: {
            color: '#444444',
            fontWeight: '700',
            background: 'transparent',
            border: '1px solid #999999',
            hover: {
                color: '#ffffff',
                fontWeight: '700',
                background: '#222222',
                border: '1px solid #222222'
            }
        },
        danger: {
            color: '#FFFFFF',
            fontWeight: '700',
            background: '#E57373',
            border: '1px solid #E57373',
            hover: {
                color: '#ffffff',
                fontWeight: '700',
                background: '#D32F2F',
                border: '1px solid #D32F2F'
            }
        },
        default: {
            color: '#000000',
            fontWeight: '700',
            background: 'transparent',
            border: 'none',
            hover: {
                color: '#3610e1',
                background: '#f4f1ff'
            }
        }
    },
    shadow: {
        light: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        medium: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        heavy: '0px 10px 15px rgba(0, 0, 0, 0.1)'
    },
    layout: {
        width: {
            large: '1020px',
            medium: '760px',
            small: '320px'
        }
    },
    mediaQuery: {
        mobile: '(max-width: 768px)',
        tablet: '(max-width: 1024px)',
        desktop: '(min-width: 1025px)'
    }
};
const darkTheme = {
    ...lightTheme,
    name: 'dark',
    color: {
        primary: '#9ca9ff',
        secondary: '#6980ff',
        background: '#121212',
        surface: '#1E1E1E',
        disabled: '#555555',
        success: '#66BB6A',
        error: '#EF5350',
        warning: '#FFB300',
        text: '#f1f1f1',
        subtext: '#a3a3a3',
        lightGrey: '#606060',
        line: '#2D2D2D',
        border: '#808080'
    },
    buttonScheme: {
        primary: {
            color: '#121212',
            fontWeight: '700',
            background: '#8C9EFF',
            border: '1px solid #8C9EFF',
            hover: {
                color: '#8C9EFF',
                fontWeight: '600',
                background: 'transparent',
                border: '1px solid #8C9EFF'
            }
        },
        secondary: {
            color: '#8C9EFF',
            fontWeight: '600',
            background: 'transparent',
            border: '1px solid #8C9EFF',
            hover: {
                color: '#121212',
                fontWeight: '700',
                background: '#8C9EFF',
                border: '1px solid #8C9EFF'
            }
        },
        mono: {
            color: '#121212',
            fontWeight: '700',
            background: '#f1f1f1',
            border: '1px solid #808080',
            hover: {
                color: '#f1f1f1',
                fontWeight: '600',
                background: 'transparent',
                border: '1px solid #808080'
            }
        },
        monoOutline: {
            color: '#f1f1f1',
            fontWeight: '600',
            background: 'transparent',
            border: '1px solid #f1f1f1',
            hover: {
                color: '#121212',
                fontWeight: '700',
                background: '#f1f1f1',
                border: '1px solid #808080'
            }
        },
        danger: {
            color: '#FFFFFF',
            fontWeight: '600',
            background: '#EF5350',
            border: '1px solid #EF5350',
            hover: {
                color: '#FFFFFF',
                fontWeight: '600',
                background: '#D32F2F',
                border: '1px solid #D32F2F'
            }
        },
        default: {
            color: '#f1f1f1',
            fontWeight: '700',
            background: 'transparent',
            border: 'none',
            hover: {
                color: '#9ca9ff',
                background: '#0f1d7a'
            }
        }
    }
};
const getTheme = (themeName)=>{
    return themeName === 'dark' ? darkTheme : lightTheme;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/themeContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AppThemeProvider": (()=>AppThemeProvider),
    "ThemeContext": (()=>ThemeContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$globals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/globals.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const DEFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "qru_theme";
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    themeName: DEFAULT_THEME_NAME,
    toggleTheme: ()=>{}
});
const AppThemeProvider = ({ children })=>{
    _s();
    const [themeName, setThemeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_THEME_NAME);
    const toggleTheme = ()=>{
        const newTheme = themeName === "light" ? "dark" : "light";
        setThemeName(newTheme);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppThemeProvider.useEffect": ()=>{
            const savedTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY);
            setThemeName(savedTheme || DEFAULT_THEME_NAME);
        }
    }["AppThemeProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            themeName,
            toggleTheme
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTheme"])(themeName),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$globals$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalStyle"], {
                    themeName: themeName
                }, void 0, false, {
                    fileName: "[project]/src/context/themeContext.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/context/themeContext.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/context/themeContext.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
_s(AppThemeProvider, "1cFYafDH/kN55OA93ldOSf3w8yg=");
_c = AppThemeProvider;
var _c;
__turbopack_refresh__.register(_c, "AppThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/toastStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useToastStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        toasts: [],
        addToast: (message, type = 'info')=>{
            set((state)=>({
                    toasts: [
                        ...state.toasts,
                        {
                            message,
                            type,
                            id: Date.now()
                        }
                    ]
                }));
        },
        removeToast: (id)=>{
            set((state)=>({
                    toasts: state.toasts.filter((toast)=>toast.id !== id)
                }));
        }
    }));
const __TURBOPACK__default__export__ = useToastStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useTimeout.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "useTimeout": (()=>useTimeout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useTimeout = (callback, delay)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeout.useEffect": ()=>{
            const timer = setTimeout(callback, delay);
            return ({
                "useTimeout.useEffect": ()=>clearTimeout(timer)
            })["useTimeout.useEffect"];
        }
    }["useTimeout.useEffect"], [
        callback,
        delay
    ]);
};
_s(useTimeout, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const __TURBOPACK__default__export__ = useTimeout;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StyledButton": (()=>StyledButton),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
const Button = ({ children, ref, size, scheme, disabled, isLoading, tooltip, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
        ref: ref,
        size: size,
        scheme: scheme,
        disabled: disabled,
        isLoading: isLoading,
        "data-tooltip": tooltip,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/Button.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
};
_c = Button;
const StyledButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    shouldForwardProp: (prop)=>![
            'isLoading',
            'styles'
        ].includes(prop)
}).withConfig({
    displayName: "Button__StyledButton",
    componentId: "sc-8c374797-0"
})`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	line-height: 1;
	width: 100%;

	font-size: ${({ theme, size })=>theme.button[size ?? 'small'].fontSize};
	padding: ${({ theme, size })=>theme.button[size ?? 'small'].padding};
	gap: ${({ theme, size })=>theme.button[size ?? 'small'].gap};

	color: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].color};
	background: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].background};
	border: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].border};
	border-radius: ${({ theme })=>theme.borderRadius.flat};
	opacity: ${({ disabled })=>disabled ? 0.5 : 1};
	pointer-events: ${({ disabled })=>disabled ? 'none' : 'auto'};
	cursor: ${({ disabled })=>disabled ? 'none' : 'pointer'};

	white-space: nowrap;
	text-overflow: ellipsis;
	transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
	-webkit-tap-highlight-color: transparent;

	svg {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		width: calc(${({ theme, size })=>theme.button[size ?? 'small'].fontSize} * 1.2);
		height: calc(${({ theme, size })=>theme.button[size ?? 'small'].fontSize} * 1.2);

		&:hover {
			color: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.color};
			background: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.background};
		}
	}

	&:hover {
		color: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.color};
		background: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.background};
		border: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.border};
		// font-weight: ${({ theme })=>theme.fontWeight.semiBold};
	}

	&[data-tooltip]:hover::after,
	&[data-tooltip]:focus::after {
		width: max-content;
		max-width: calc(60vw - 2rem);
		content: attr(data-tooltip);
		position: absolute;
		top: 100%;
		left: 0;
		margin-top: 0.5rem;
		padding: 1rem 1.5rem;

		line-height: 1.8;
		white-space: break-spaces;
		text-align: left;

		background: ${({ theme })=>theme.color.surface};
		color: ${({ theme })=>theme.color.lightGrey};
		font-size: ${({ theme })=>theme.fontSize.small};
		border-radius: ${({ theme })=>theme.borderRadius.medium};
		box-shadow: ${({ theme })=>theme.shadow.soft};

		opacity: 1;
		transform: scaleY(1);
		transition: all 0.3s ease;
	}

	&[data-tooltip]::after {
		pointer-events: none;
		opacity: 0;
		transform-origin: top;
		transform: scaleY(0);
	}

	${({ styles })=>styles || ''}
`;
_c1 = StyledButton;
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button");
__turbopack_refresh__.register(_c1, "StyledButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/toast/Toast.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/toastStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useTimeout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
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
;
const TOAST_REMOVE_DELAY = 300;
const Toast = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ id, message, type })=>{
    _s();
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Toast.useToastStore[removeToast]": (state)=>state.removeToast
    }["Toast.useToastStore[removeToast]"]);
    const [isFadingOut, setIsFadingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleRemoveToast = ()=>{
        setIsFadingOut(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])({
        "Toast.useTimeout": ()=>{
            setIsFadingOut(true);
        }
    }["Toast.useTimeout"], TOAST_REMOVE_DELAY);
    const handleAnimationEnd = ()=>{
        if (isFadingOut) {
            removeToast(id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledToast, {
        className: `${isFadingOut ? "fade-out" : "fade-in"} ${type}`,
        onAnimationEnd: handleAnimationEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    type === "info" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/toast/Toast.tsx",
                        lineNumber: 39,
                        columnNumber: 29
                    }, this),
                    type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/toast/Toast.tsx",
                        lineNumber: 40,
                        columnNumber: 32
                    }, this),
                    type === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosWarning"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/toast/Toast.tsx",
                        lineNumber: 41,
                        columnNumber: 30
                    }, this),
                    message
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/toast/Toast.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                scheme: "secondary",
                onClick: handleRemoveToast,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoClose"], {}, void 0, false, {
                    fileName: "[project]/src/components/common/toast/Toast.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/toast/Toast.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/toast/Toast.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}, "d1VYFzWhO21bPHrOuT8jv0QK0X4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"]
    ];
})), "d1VYFzWhO21bPHrOuT8jv0QK0X4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"]
    ];
});
_c1 = Toast;
Toast.displayName = "Toast";
const StyledToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Toast__StyledToast",
    componentId: "sc-7115c73b-0"
})`
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(1rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(1rem);
    }
  }

  &.fade-in {
    animation: fade-in 0.3s ease-in-out forwards;
  }

  &.fade-out {
    animation: fade-out 0.3s ease-in-out forwards;
  }

  &.info {
    color: ${({ theme })=>theme.color.text};
    background: ${({ theme })=>theme.color.surface};

    svg {
      color: ${({ theme })=>theme.color.text};

      &:hover {
        color: ${({ theme })=>theme.color.primary};
      }
    }
  }

  &.success {
    color: ${({ theme })=>theme.color.onPrimary};
    background: ${({ theme })=>theme.color.primary};

    svg {
      color: ${({ theme })=>theme.color.onPrimary};

      &:hover {
        color: ${({ theme })=>theme.color.text};
      }
    }
  }

  &.error {
    color: ${({ theme })=>theme.color.onError};
    background: ${({ theme })=>theme.color.error};

    svg {
      color: ${({ theme })=>theme.color.onError};

      &:hover {
        color: ${({ theme })=>theme.color.text};
      }
    }
  }

  background: ${({ theme })=>theme.color.surface};
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme })=>theme.borderRadius.default};
  box-shadow: ${({ theme })=>theme.shadow.default};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 9999;

  p {
    font-size: ${({ theme })=>theme.fontSize.small};
    margin: 0;
    flex: 1;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    box-shadow: none;

    &:hover {
      background: transparent;
      color: ${({ theme })=>theme.color.primary};
      box-shadow: none;
      transform: rotate(90deg);
      transition: transform 0.3s ease;
    }
  }
`;
_c2 = StyledToast;
const __TURBOPACK__default__export__ = Toast;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Toast$React.memo");
__turbopack_refresh__.register(_c1, "Toast");
__turbopack_refresh__.register(_c2, "StyledToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/toast/ToastContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/toastStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$toast$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/toast/Toast.tsx [app-client] (ecmascript)");
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
const ToastContainer = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(()=>{
    _s();
    const toasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "ToastContainer.useToastStore[toasts]": (state)=>state.toasts
    }["ToastContainer.useToastStore[toasts]"]);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastContainer.useEffect": ()=>{
            setIsMounted(true);
        }
    }["ToastContainer.useEffect"], []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledToastContainer, {
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$toast$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: toast.id,
                message: toast.message,
                type: toast.type
            }, toast.id, false, {
                fileName: "[project]/src/components/common/toast/ToastContainer.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/common/toast/ToastContainer.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this), document.body // 브라우저 환경에서만 접근
    );
}, "UwVo/yjhW/KaIW+WdA0i+ClBEOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
})), "UwVo/yjhW/KaIW+WdA0i+ClBEOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = ToastContainer;
ToastContainer.displayName = "ToastContainer";
const StyledToastContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ToastContainer__StyledToastContainer",
    componentId: "sc-ea3f7f72-0"
})`
  pointer-events: none;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 32px;
  right: 24px;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  gap: 12px;
`;
_c2 = StyledToastContainer;
const __TURBOPACK__default__export__ = ToastContainer;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ToastContainer$React.memo");
__turbopack_refresh__.register(_c1, "ToastContainer");
__turbopack_refresh__.register(_c2, "StyledToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/modalStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useModalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isOpen: false,
        modalType: null,
        openModal: (type)=>set({
                isOpen: true,
                modalType: type
            }),
        closeModal: ()=>set({
                isOpen: false,
                modalType: null
            })
    }));
const __TURBOPACK__default__export__ = useModalStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useModal.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useModal": (()=>useModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/modalStore.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useModal = ()=>{
    _s();
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return {
        isOpen,
        modalType,
        openModal,
        closeModal
    };
};
_s(useModal, "I/jLwndUg+XOhch8VDeSbqzollw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/pc_logo.svg [app-client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/pc_logo.4e83d9ff.svg");}}),
"[project]/public/icons/pc_logo.svg.mjs { IMAGE => \"[project]/public/icons/pc_logo.svg [app-client] (static)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$pc_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/icons/pc_logo.svg [app-client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$pc_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 140,
    height: 40,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/icons/mo_logo.svg [app-client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/mo_logo.8d1683a1.svg");}}),
"[project]/public/icons/mo_logo.svg.mjs { IMAGE => \"[project]/public/icons/mo_logo.svg [app-client] (static)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$mo_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/icons/mo_logo.svg [app-client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$mo_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 38,
    height: 38,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Logo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$pc_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$pc_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/icons/pc_logo.svg.mjs { IMAGE => "[project]/public/icons/pc_logo.svg [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$mo_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$mo_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/icons/mo_logo.svg.mjs { IMAGE => "[project]/public/icons/mo_logo.svg [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const Logo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledLogo, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$pc_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$pc_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], {
                    fill: "#121212",
                    className: "desktop-logo"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Logo.tsx",
                    lineNumber: 12,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$icons$2f$mo_logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$icons$2f$mo_logo$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"], {
                    className: "mobile-logo"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Logo.tsx",
                    lineNumber: 13,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/Logo.tsx",
            lineNumber: 11,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Logo.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
};
_c = Logo;
const StyledLogo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Logo__StyledLogo",
    componentId: "sc-5f86beb6-0"
})`
	color: ${({ theme })=>theme.color.primary};
	font-size: ${({ theme })=>theme.fontSize.large};
	font-weight: ${({ theme })=>theme.fontWeight.bold};
	cursor: pointer;

	.desktop-logo {
		display: block;
		width: 100px;
		height: 36px;

		path {
			fill: currentColor;
		}
	}

	@media ${({ theme })=>theme.mediaQuery.mobile} {
		.desktop-logo {
			display: none;
		}

		.mobile-logo {
			display: block;
			width: 36px;
			height: 36px;
			path {
				fill: currentColor;
			}
		}
	}
`;
_c1 = StyledLogo;
const __TURBOPACK__default__export__ = Logo;
var _c, _c1;
__turbopack_refresh__.register(_c, "Logo");
__turbopack_refresh__.register(_c1, "StyledLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
function Modal({ children, isOpen, onClose }) {
    _s();
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // 애니메이션 상태
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // 모달 내부 DOM 요소 참조
    const previousFocusedElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // 모달이 열리기 전 포커스된 요소
    // 모달 닫기 핸들러
    const handleClose = ()=>{
        setIsAnimating(true); // 닫기 애니메이션 실행
    };
    // 모달 외부를 클릭했을 때 닫기
    const handleOverlayClick = (e)=>{
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    };
    // ESC 키로 모달 닫기
    const handleKeydown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Modal.useCallback[handleKeydown]": (e)=>{
            if (e.key === 'Escape') {
                handleClose();
            }
        }
    }["Modal.useCallback[handleKeydown]"], []);
    // 애니메이션 종료 시 모달 닫기 처리
    const handleAnimationEnd = ()=>{
        if (isAnimating) {
            setIsAnimating(false);
            onClose(); // 부모 컴포넌트에서 전달받은 닫기 함수 호출
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (isOpen) {
                // 모달이 열리면 이전 포커스된 요소 저장 및 ESC 키 이벤트 리스너 추가
                previousFocusedElement.current = document.activeElement;
                window.addEventListener('keydown', handleKeydown);
                if (modalRef.current) {
                    modalRef.current.focus(); // 모달 내부에 포커스 설정
                }
            } else {
                // 모달이 닫히면 ESC 키 이벤트 리스너 제거
                window.removeEventListener('keydown', handleKeydown);
            }
            return ({
                "Modal.useEffect": ()=>{
                    // 컴포넌트 언마운트 시 ESC 키 이벤트 리스너 제거 및 포커스 복원
                    window.removeEventListener('keydown', handleKeydown);
                    if (previousFocusedElement.current) {
                        previousFocusedElement.current.focus();
                    }
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        isOpen,
        handleKeydown
    ]);
    // 브라우저 환경에서만 포털 렌더링
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            setMounted(true); // 브라우저에서 렌더링되었음을 설정
            return ({
                "Modal.useEffect": ()=>setMounted(false)
            })["Modal.useEffect"]; // 컴포넌트 언마운트 시 초기화
        }
    }["Modal.useEffect"], []);
    if (!mounted || !isOpen && !isAnimating) return null; // 포털 렌더링 조건
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledModal, {
        className: isAnimating ? 'fade-out' : 'fade-in',
        onClick: handleOverlayClick,
        onAnimationEnd: handleAnimationEnd,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-body",
            ref: modalRef,
            role: "dialog",
            tabIndex: -1,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-contents",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Modal.tsx",
                    lineNumber: 85,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "modal-close",
                    onClick: handleClose,
                    "aria-label": "Close modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoClose"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/Modal.tsx",
                        lineNumber: 87,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Modal.tsx",
                    lineNumber: 86,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/Modal.tsx",
            lineNumber: 84,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Modal.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, this), document.body // 포털 렌더링 대상 DOM
    );
}
_s(Modal, "u9WR4hthB9D9EiT7doihms2hZdg=");
_c = Modal;
const StyledModal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Modal__StyledModal",
    componentId: "sc-9eb42e8f-0"
})`
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	&.fade-in {
		animation: fade-in 0.3s ease-in-out forwards;
	}

	&.fade-out {
		animation: fade-out 0.3s ease-in-out forwards;
	}

	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.6);

	/* 스크롤바 숨김 처리 (브라우저별 설정) */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Webkit 기반 브라우저 (Chrome, Safari, Edge) */
	}
	-ms-overflow-style: none; /* IE, Edge */

	.modal-body {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: ${({ theme })=>theme?.borderRadius?.medium};
		box-shadow: ${({ theme })=>theme?.shadow?.medium};
		background: ${({ theme })=>theme?.color?.background};
		min-width: 30rem;
		max-width: 80vw;
		max-height: 80vh;
		min-height: 20rem;
		display: flex;
		flex-direction: column;
	}

	.modal-contents {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding: 0.5rem 1rem;
		border-radius: ${({ theme })=>theme.borderRadius.medium};
	}

	.modal-close {
		border: none;
		color: ${({ theme })=>theme?.color?.text};
		background: transparent;
		cursor: pointer;
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 1000;

		svg {
			width: 2rem;
			height: 2rem;

			&:hover {
				color: ${({ theme })=>theme?.color?.primary};
				transform: rotate(90deg);
				transition: transform 0.3s ease;
			}
		}
	}
`;
_c1 = StyledModal;
const __TURBOPACK__default__export__ = Modal;
var _c, _c1;
__turbopack_refresh__.register(_c, "Modal");
__turbopack_refresh__.register(_c1, "StyledModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Dropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const Dropdown = ({ children, toggleButton, isOpen = false, className })=>{
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isOpen);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            function handleOutsideClick(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener("mousedown", handleOutsideClick);
            return ({
                "Dropdown.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleOutsideClick);
                }
            })["Dropdown.useEffect"];
        }
    }["Dropdown.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledDropdown, {
        $open: open,
        ref: dropdownRef,
        className: `${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpen(!open),
                children: toggleButton && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toggleButton) && (toggleButton.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(toggleButton, {
                    className: open ? "open" : ""
                }) : toggleButton)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Dropdown.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel",
                onClick: ()=>setOpen(false),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/common/Dropdown.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Dropdown.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
_s(Dropdown, "6ZczgSRr+cX65K336cnSKQoYXkM=");
_c = Dropdown;
const StyledDropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Dropdown__StyledDropdown",
    componentId: "sc-6c6eed3-0"
})`
  position: relative;
  cursor: pointer;

  button {
    cursor: pointer;

    svg {
      font-size: ${({ theme })=>theme.fontSize.large};
    }
  }

  &.auth {
    .panel {
      position: absolute;
      top: 2.3rem;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: auto;
      height: auto;
      max-height: ${({ $open })=>$open ? "300px" : "0"};
      padding: ${({ $open })=>$open ? "1rem" : "0"};
      gap: 0.5rem;
      font-size: ${({ theme })=>theme.fontSize.small};

      background: ${({ theme })=>theme.color.surface};
      box-shadow: ${({ theme })=>theme.shadow.medium};
      border: 1px solid ${({ theme })=>theme.color.border};
      border-radius: ${({ theme })=>theme.borderRadius.soft};
      z-index: 1000;
      white-space: nowrap;

      transform-origin: top right;
      opacity: ${({ $open })=>$open ? "1" : "0"};
      transition: max-height 0.5s ease, opacity 0.3s ease, padding 0.3s ease;
      overflow: hidden;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.3rem 1rem;
        cursor: pointer;

        color: ${({ theme })=>theme.color.text};
        font-size: ${({ theme })=>theme.fontSize.small};

        a {
          padding: 0;
          margin: 0;
        }
          
          button {
              background: rebeccapurple;
          }

        &:hover {
          color: ${({ theme })=>theme.color.primary};
        }
      }
    }
  }

  &.drawer {
    .panel {
      transform-origin: top;
      transform: ${({ $open })=>$open ? "scaleY(1)" : "scaleY(0)"};
      opacity: ${({ $open })=>$open ? "1" : "0"};
      transition: transform 0.3s ease, opacity 0.3s ease;
      overflow: hidden;

      width: 100vw;
      position: absolute;
      top: 2.11rem;
      left: 0;
      margin-left: -1rem;
      background: ${({ theme })=>theme.color.surface};
      border: 1px solid ${({ theme })=>theme.color.border};
      box-shadow: ${({ theme })=>theme.shadow.medium};

      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      gap: 0.5rem;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.3rem 0;
        cursor: pointer;

        color: ${({ theme })=>theme.color.text};
        font-size: ${({ theme })=>theme.fontSize.small};

        a {
          padding: 0;
          margin: 0;
        }

        &:hover {
          color: ${({ theme })=>theme.color.primary};
        }
      }
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`;
_c1 = StyledDropdown;
const __TURBOPACK__default__export__ = Dropdown;
var _c, _c1;
__turbopack_refresh__.register(_c, "Dropdown");
__turbopack_refresh__.register(_c1, "StyledDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/navigation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NAVIGATION": (()=>NAVIGATION)
});
const NAVIGATION = [
    {
        title: '정치',
        link: '#menu1'
    },
    {
        title: '사회',
        link: '#menu2'
    },
    {
        title: '경제',
        link: '#menu3'
    },
    {
        title: '테크',
        link: '#menu4'
    },
    {
        title: '세계',
        link: '#menu5'
    },
    {
        title: '문화',
        link: '#menu6'
    },
    {
        title: '스포츠',
        link: '#menu7'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/header/Navigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
;
const Navigation = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledNavigation, {
        id: "navigation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAVIGATION"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: item.title
                }, index, false, {
                    fileName: "[project]/src/components/header/Navigation.tsx",
                    lineNumber: 9,
                    columnNumber: 6
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/header/Navigation.tsx",
            lineNumber: 7,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header/Navigation.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, this);
};
_c = Navigation;
const StyledNavigation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].nav.withConfig({
    displayName: "Navigation__StyledNavigation",
    componentId: "sc-fec254c6-0"
})`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	white-space: nowrap;

	width: 100%;
	height: 100%;

	ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		list-style: none;
		padding: 0;
		margin: 0 1rem 0 1rem;
		gap: 1.2rem;
		line-height: 1;

		li {
			padding: 0;
			margin: 0;
			cursor: pointer;

			font-size: ${({ theme })=>theme.fontSize.small};

			&:hover {
				color: ${({ theme })=>theme.color.primary};
				font-weight: ${({ theme })=>theme.fontWeight.semiBold};
			}

			a {
				font-size: ${({ theme })=>theme.fontSize.medium};
				font-weight: ${({ theme })=>theme.fontWeight.medium};
				color: ${({ theme })=>theme.color.text};
				text-decoration: none;
				transition: color 0.3s ease;
			}
		}
	}

	@media ${({ theme })=>theme.mediaQuery.mobile} {
		display: none;
	}
`;
_c1 = StyledNavigation;
const __TURBOPACK__default__export__ = Navigation;
var _c, _c1;
__turbopack_refresh__.register(_c, "Navigation");
__turbopack_refresh__.register(_c1, "StyledNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/header/ThemeSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const ThemeSwitcher = ({ className, styles })=>{
    _s();
    const { themeName, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledThemeSwitcher, {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            scheme: "default",
            size: "small",
            onClick: toggleTheme,
            styles: styles,
            children: themeName === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdLightMode"], {
                className: "light"
            }, void 0, false, {
                fileName: "[project]/src/components/header/ThemeSwitcher.tsx",
                lineNumber: 19,
                columnNumber: 35
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDarkMode"], {
                className: "dark"
            }, void 0, false, {
                fileName: "[project]/src/components/header/ThemeSwitcher.tsx",
                lineNumber: 19,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/header/ThemeSwitcher.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/header/ThemeSwitcher.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(ThemeSwitcher, "XSkUf7bEe5V3+ZOXlSgtMWfLyaI=");
_c = ThemeSwitcher;
const StyledThemeSwitcher = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ThemeSwitcher__StyledThemeSwitcher",
    componentId: "sc-785fb4a6-0"
})`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        fill: ${({ theme })=>theme.color.text};;
    }
`;
_c1 = StyledThemeSwitcher;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ThemeSwitcher);
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ThemeSwitcher");
__turbopack_refresh__.register(_c1, "StyledThemeSwitcher");
__turbopack_refresh__.register(_c2, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/header/Drawer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/header/ThemeSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const Drawer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledDrawerButton, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/header/Drawer.tsx",
                    lineNumber: 14,
                    columnNumber: 6
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/header/Drawer.tsx",
                    lineNumber: 15,
                    columnNumber: 6
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/header/Drawer.tsx",
                    lineNumber: 16,
                    columnNumber: 6
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/header/Drawer.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, void 0),
        className: "drawer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/header/Drawer.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAVIGATION"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.link,
                    className: "item",
                    children: item.title
                }, index, false, {
                    fileName: "[project]/src/components/header/Drawer.tsx",
                    lineNumber: 23,
                    columnNumber: 5
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header/Drawer.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
};
_c = Drawer;
const StyledDrawerButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Drawer__StyledDrawerButton",
    componentId: "sc-ed7adeeb-0"
})`
	position: relative;
	width: 1.2rem;
	aspect-ratio: 1.1 / 1;
	cursor: pointer;

	span {
		position: absolute;
		width: 100%;
		height: 0.15rem;
		background: ${({ theme })=>theme.color.text};
		left: 0;
		border-radius: 0.2rem;
		transition: all 0.3s ease;
	}

	/* 기본 상태 */
	span:nth-of-type(1) {
		top: 0;
		transform: translateY(0) rotate(0);
	}

	span:nth-of-type(2) {
		top: 50%;
		opacity: 1;
		transform: translateY(-50%);
	}

	span:nth-of-type(3) {
		top: 100%;
		transform: translateY(-100%) rotate(0);
	}

	/* .open 클래스가 추가된 상태 */
	&.open {
		span:nth-of-type(1) {
			top: 50%;
			transform: translateY(-50%) rotate(45deg);
		}

		span:nth-of-type(2) {
			opacity: 0;
		}

		span:nth-of-type(3) {
			top: 50%;
			transform: translateY(-50%) rotate(-45deg);
		}
	}

	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
`;
const __TURBOPACK__default__export__ = Drawer;
var _c;
__turbopack_refresh__.register(_c, "Drawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/header/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/header/Drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/header/ThemeSwitcher.tsx [app-client] (ecmascript)");
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
const Header = ()=>{
    _s();
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])();
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const user = null;
    const toggleLogin = ()=>{
        setIsLogin(!isLogin);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledHeader, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "left-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/common/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/common/Header.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/Header.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "right-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "mobile-hidden"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/Header.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            isLogin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "auth",
                                toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        scheme: "secondary",
                                        children: "내 정보"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/common/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 19
                                    }, void 0)
                                }, void 0, false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "desktop-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Header.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/myPage",
                                            className: "item",
                                            children: "마이페이지"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Header.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            scheme: "default",
                                            onClick: toggleLogin,
                                            children: "로그아웃"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/common/Header.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/Header.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                scheme: "secondary",
                                onClick: toggleLogin,
                                style: {
                                    width: '5rem'
                                },
                                children: "로그인"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/Header.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                scheme: "primary",
                                style: {
                                    width: '5rem'
                                },
                                onClick: ()=>openModal('subscribe'),
                                children: "구독하기"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/Header.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/Header.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            isOpen && modalType === 'subscribe' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "구독하기 모달 내용"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Header.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Header.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Header.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
_s(Header, "+ao59XAXgwlr5Vp1W5+C+3jloes=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"]
    ];
});
_c = Header;
const StyledHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header__StyledHeader",
    componentId: "sc-5944b458-0"
})`
    width: 100%;
    padding: 0;
    margin: 0;

    -ms-overflow-style: none;

    ::-webkit-scrollbar {
        display: none;
    }

    background: ${({ theme })=>theme.color.background};
    border-bottom: 1px solid ${({ theme })=>theme.color.border};

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin: 0 auto;
        padding: 0.5rem 1rem;
        gap: 1rem;

        width: 100%;
        max-width: ${({ theme })=>theme.layout.width.large};
    }

    .left-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .right-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        .userCircle {
            border-radius: ${({ theme })=>theme.borderRadius.circle};
            object-fit: cover;
        }
	    button {
		    font-size: ${({ theme })=>theme.fontSize.small};
	    }
    }

    .mobile-hidden {
        @media ${({ theme })=>theme.mediaQuery.mobile} {
            display: none;
        }
    }

    .desktop-hidden {
        display: none;

        @media ${({ theme })=>theme.mediaQuery.mobile} {
            display: block;
        }
    }
`;
_c1 = StyledHeader;
const __TURBOPACK__default__export__ = Header;
var _c, _c1;
__turbopack_refresh__.register(_c, "Header");
__turbopack_refresh__.register(_c1, "StyledHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledFooter, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/common/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "footer-item",
                            href: "#",
                            children: "Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "footer-item",
                            href: "#",
                            children: "Terms of Service"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "footer-item",
                            href: "#",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "© 2025 NewPick. All Rights Reserved."
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Footer.tsx",
                    lineNumber: 23,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/Footer.tsx",
            lineNumber: 10,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Footer.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this);
};
_c = Footer;
const StyledFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer.withConfig({
    displayName: "Footer__StyledFooter",
    componentId: "sc-312610ea-0"
})`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	margin-top: auto;
	padding: 4rem 0 3rem 0;
	background: ${({ theme })=>theme.color.surface};
	border-top: 1px solid ${({ theme })=>theme.color.border};

	.footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;

		width: 100%;
		max-width: ${({ theme })=>theme.layout.width.large};
		padding: 0 1rem;
	}

	.footer-menu {
		display: grid;
		grid-template-columns: repeat(4, max-content);
		gap: 1rem;

		a {
			font-size: ${({ theme })=>theme.fontSize.small};
			color: ${({ theme })=>theme.color.text};
			cursor: pointer;

			&:hover {
				text-decoration: none;
				color: ${({ theme })=>theme.color.primary};
			}
		}
	}
`;
_c1 = StyledFooter;
const __TURBOPACK__default__export__ = Footer;
var _c, _c1;
__turbopack_refresh__.register(_c, "Footer");
__turbopack_refresh__.register(_c1, "StyledFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/Layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Layout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledLayout, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/Layout.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Layout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
_c = Layout;
const StyledLayout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Layout__StyledLayout",
    componentId: "sc-fc63ec60-0"
})`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;
_c1 = StyledLayout;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].main.withConfig({
    displayName: "Layout__Content",
    componentId: "sc-fc63ec60-1"
})`
  width: 100%;
  max-width: ${({ theme })=>theme.layout.width.large};
  margin: 0 auto;
  padding: 0.5rem 1rem;

  @media ${({ theme })=>theme.mediaQuery.mobile} {
    padding: 20px 12px;
  }
`;
_c2 = Content;
const __TURBOPACK__default__export__ = Layout;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Layout");
__turbopack_refresh__.register(_c1, "StyledLayout");
__turbopack_refresh__.register(_c2, "Content");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_a684f0._.js.map