(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_4e927f._.js", {

"[project]/src/styles/global.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
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

    html, body {
      margin: 0;
      padding: 0;
      color: ${({ theme })=>theme.color.text};
      background: ${({ theme })=>theme.color.background};
      scroll-behavior: smooth;

      @media ${({ theme })=>theme.mediaQuery.mobile} {     
        /* 스크롤바 숨김 처리 (브라우저별 설정) */
        scrollbar-width: none; /* Firefox */

        &::-webkit-scrollbar {
            display: none; /* Webkit 기반 브라우저 (Chrome, Safari, Edge) */
        }
        -ms-overflow-style: none; /* IE, Edge */
      }
    }

    a {
        text-decoration: none;
        color: ${({ theme })=>theme.color.text};
    }

    input {
        outline: none;
    }

    ul, li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
    }

    button {
      border: none;
      background-color: transparent;

      &:focus {
          outline: none;
      }
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
        tertiary: '#F4F1FF',
        background: '#FFFFFF',
        surface: '#F9F9F9',
        disabled: '#BDBDBD',
        success: '#8BC34A',
        error: '#E57373',
        warning: '#FFB300',
        text: '#000000',
        subText: '#808080',
        neutral: '#F0F0F0',
        border: '#d9d9d9'
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
        extraSmall: {
            fontSize: '1.5rem'
        },
        small: {
            fontSize: '1.75rem'
        },
        medium: {
            fontSize: '2rem'
        },
        large: {
            fontSize: '2.25rem'
        },
        extraLarge: {
            fontSize: '3rem'
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
            color: '#ffffff',
            background: '#3610e1',
            border: '1px solid #3610e1',
            fontWeight: '500',
            hover: {
                color: '#f4f1ff',
                background: '#2001af'
            }
        },
        secondary: {
            color: '#000000',
            background: 'transparent',
            border: '1px solid transparent',
            fontWeight: '500',
            hover: {
                color: '#3610e1',
                background: '#F4F1FF'
            }
        },
        outline: {
            color: '#3610e1',
            background: 'transparent',
            border: '1px solid #3610e1',
            fontWeight: '500',
            hover: {
                color: '#ffffff',
                background: '#2705C0'
            }
        },
        mono: {
            color: '#ffffff',
            background: '#222222',
            border: '1px solid transparent',
            fontWeight: '500',
            hover: {
                color: '#f1f1f1',
                background: '#111111'
            }
        },
        monoOutline: {
            color: '#444444',
            background: 'transparent',
            border: '1px solid #999999',
            fontWeight: '500',
            hover: {
                color: '#444444',
                background: '#f1f1f1',
                border: '1px solid #444444'
            }
        },
        danger: {
            color: '#FFFFFF',
            background: '#E57373',
            border: '1px solid #E57373',
            fontWeight: '500',
            hover: {
                color: '#ffffff',
                background: '#D32F2F',
                border: '1px solid #D32F2F'
            }
        },
        default: {
            color: '#000000',
            background: 'transparent',
            border: '1px solid transparent',
            fontWeight: '500',
            hover: {
                color: '#3610e1',
                fontWeight: '700'
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
            large: '1024px',
            medium: '768px',
            small: '375px'
        }
    },
    mediaQuery: {
        desktop: '(max-width: 1024px)',
        tablet: '(max-width: 768px)',
        mobile: '(max-width: 425px)'
    }
};
const darkTheme = {
    ...lightTheme,
    name: 'dark',
    color: {
        primary: '#9ca9ff',
        secondary: '#6980ff',
        tertiary: '#0f1d7a',
        background: '#121212',
        surface: '#1E1E1E',
        disabled: '#555555',
        success: '#66BB6A',
        error: '#EF5350',
        warning: '#FFB300',
        text: '#f1f1f1',
        subText: '#a3a3a3',
        neutral: '#2D2D2D',
        border: '#333333'
    },
    buttonScheme: {
        primary: {
            color: '#121212',
            background: '#8C9EFF',
            border: '1px solid transparent',
            fontWeight: '500',
            hover: {
                color: '#000000',
                background: '#6c80ed'
            }
        },
        secondary: {
            color: '#f1f1f1',
            background: 'transparent',
            border: '1px solid transparent',
            fontWeight: '500',
            hover: {
                color: '#9ca9ff',
                background: '#0f1d7a'
            }
        },
        outline: {
            color: '#9ca9ff',
            background: 'transparent',
            border: '1px solid #9ca9ff',
            fontWeight: '500',
            hover: {
                color: '#121212',
                background: '#9ca9ff'
            }
        },
        mono: {
            color: '#121212',
            background: '#f1f1f1',
            border: '1px solid transparent',
            fontWeight: '500',
            hover: {
                color: '#121212',
                background: '#d9d9d9'
            }
        },
        monoOutline: {
            color: '#f1f1f1',
            background: 'transparent',
            border: '1px solid #808080',
            fontWeight: '500',
            hover: {
                color: '#f1f1f1',
                background: '#191919',
                border: '1px solid #999999'
            }
        },
        danger: {
            color: '#FFFFFF',
            background: '#EF5350',
            border: '1px solid #EF5350',
            fontWeight: '500',
            hover: {
                color: '#FFFFFF',
                background: '#D32F2F',
                border: '1px solid #D32F2F'
            }
        },
        default: {
            color: '#f1f1f1',
            background: 'transparent',
            border: '1px solid transparent',
            fontWeight: '500',
            hover: {
                color: '#9ca9ff',
                fontWeight: '700'
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/styles/global.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const DEFAULT_THEME_NAME = 'light';
const THEME_LOCALSTORAGE_KEY = 'qru_theme';
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    themeName: DEFAULT_THEME_NAME,
    toggleTheme: ()=>{}
});
const AppThemeProvider = ({ children })=>{
    _s();
    const [themeName, setThemeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_THEME_NAME);
    const toggleTheme = ()=>{
        const newTheme = themeName === 'light' ? 'dark' : 'light';
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$global$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalStyle"], {
                    themeName: themeName
                }, void 0, false, {
                    fileName: "[project]/src/context/themeContext.tsx",
                    lineNumber: 38,
                    columnNumber: 5
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/context/themeContext.tsx",
            lineNumber: 37,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/context/themeContext.tsx",
        lineNumber: 36,
        columnNumber: 3
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
"[project]/src/stores/toastStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "useTimeout": (()=>useTimeout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useTimeout = (callback, delay)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeout.useEffect": ()=>{
            if (delay === null) return;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
const Button = ({ children, ref, size, scheme, disabled, isLoading, tooltip, icon, iconPosition = 'right', ...props })=>{
    const textContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).filter((child)=>typeof child === 'string').join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
        title: textContent,
        ref: ref,
        size: size,
        scheme: scheme,
        disabled: disabled,
        isLoading: isLoading,
        "data-tooltip": tooltip,
        iconPosition: iconPosition,
        ...props,
        children: [
            icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/common/Button.tsx",
                lineNumber: 47,
                columnNumber: 40
            }, this),
            children,
            icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/common/Button.tsx",
                lineNumber: 49,
                columnNumber: 41
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Button.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this);
};
_c = Button;
const StyledButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    shouldForwardProp: (prop)=>![
            'isLoading',
            'iconPosition'
        ].includes(prop)
})`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	line-height: 1;
	width: fit-content;
	height: fit-content;

	font-size: ${({ theme, size })=>theme.button[size ?? 'small'].fontSize};
  font-weight: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].fontWeight};
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
	-webkit-tap-highlight-color: transparent;

	a {
		text-decoration: none;
		color: inherit;
		padding: 0;
		margin: 0;
	}

	svg {
		width: ${({ theme, size })=>theme.button[size ?? 'small'].fontSize}
		height: ${({ theme, size })=>theme.button[size ?? 'small'].fontSize}
		font-size: ${({ theme, size })=>theme.button[size ?? 'small'].fontSize};
		color: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].color};

    display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
    padding: 0;
    margin: 0;

    transform: scale(1.25);
	}

	&:hover {
		color: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.color};
		background: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.background};
		border: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.border};
		font-weight: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.fontWeight};
    
		svg {
			color: ${({ theme, scheme })=>theme.buttonScheme[scheme ?? 'default'].hover.color};
		}
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
		color: ${({ theme })=>theme.color.neutral};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/toastStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useTimeout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
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
const TOAST_REMOVE_DELAY = 300;
const Toast = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ id, message, type })=>{
    _s();
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
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
        className: `${isFadingOut ? 'fade-out' : 'fade-in'} ${type}`,
        onAnimationEnd: handleAnimationEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    type === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/toast/Toast.tsx",
                        lineNumber: 36,
                        columnNumber: 25
                    }, this),
                    type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/toast/Toast.tsx",
                        lineNumber: 37,
                        columnNumber: 28
                    }, this),
                    type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosWarning"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/toast/Toast.tsx",
                        lineNumber: 38,
                        columnNumber: 26
                    }, this),
                    message
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/toast/Toast.tsx",
                lineNumber: 35,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                scheme: "secondary",
                onClick: handleRemoveToast,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoClose"], {}, void 0, false, {
                    fileName: "[project]/src/components/common/toast/Toast.tsx",
                    lineNumber: 42,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/toast/Toast.tsx",
                lineNumber: 41,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/toast/Toast.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this);
}, "d1VYFzWhO21bPHrOuT8jv0QK0X4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"]
    ];
})), "d1VYFzWhO21bPHrOuT8jv0QK0X4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTimeout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"]
    ];
});
_c1 = Toast;
Toast.displayName = 'Toast';
const StyledToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/toastStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$toast$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/toast/Toast.tsx [app-client] (ecmascript)");
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
const ToastContainer = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(()=>{
    _s();
    const toasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
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
                columnNumber: 5
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/common/toast/ToastContainer.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this), document.body // 브라우저 환경에서만 접근
    );
}, "UwVo/yjhW/KaIW+WdA0i+ClBEOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
})), "UwVo/yjhW/KaIW+WdA0i+ClBEOM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$toastStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = ToastContainer;
ToastContainer.displayName = 'ToastContainer';
const StyledToastContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
"[project]/src/stores/headerStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useHeaderStore": (()=>useHeaderStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useHeaderStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isOpen: true,
        setOpen: (open)=>set({
                isOpen: open
            }),
        isSubOpen: false,
        setSubOpen: (open)=>set({
                isSubOpen: open
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useHeader.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useHeader": (()=>useHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$headerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/headerStore.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useHeader = ()=>{
    _s();
    const { isOpen: isHeaderOpen, setOpen: setHeaderOpen, isSubOpen, setSubOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$headerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderStore"])();
    const headerHeight = isHeaderOpen && isSubOpen ? '6rem' : isHeaderOpen || isSubOpen ? '3rem' : '0';
    return {
        isHeaderOpen,
        setHeaderOpen,
        isSubOpen,
        setSubOpen,
        headerHeight
    };
};
_s(useHeader, "5Cj4mhxJdSLJ5ZKOLS2n6j5IweI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$headerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/mocks/mypage/users.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "usersData": (()=>usersData)
});
const USER1 = {
    id: 1,
    name: 'gmail0',
    email: 'gmail0@gmail.com',
    subscribe: 1,
    keyword: [
        {
            id: 1,
            keyword: '키워드 1'
        },
        {
            id: 2,
            keyword: '키워드 2'
        },
        {
            id: 3,
            keyword: '키워드 3'
        },
        {
            id: 4,
            keyword: '키워드 4'
        },
        {
            id: 5,
            keyword: '키워드 5'
        }
    ]
};
const USER2 = {
    id: 2,
    name: 'gmail1',
    email: 'gmail1@gmail.com',
    subscribe: 2,
    keyword: [
        {
            id: 1,
            keyword: '키워드 1'
        },
        {
            id: 2,
            keyword: '키워드 2'
        },
        {
            id: 3,
            keyword: '키워드 3'
        },
        {
            id: 4,
            keyword: '키워드 4'
        },
        {
            id: 5,
            keyword: '키워드 5'
        },
        {
            id: 6,
            keyword: '키워드 6'
        },
        {
            id: 7,
            keyword: '키워드 7'
        },
        {
            id: 8,
            keyword: '키워드 8'
        },
        {
            id: 9,
            keyword: '키워드 9'
        },
        {
            id: 10,
            keyword: '키워드 10'
        }
    ]
};
const USER3 = {
    id: 3,
    name: 'gmail2',
    email: 'gmail3@gmail.com',
    subscribe: 3,
    keyword: [
        {
            id: 1,
            keyword: '키워드 1'
        },
        {
            id: 2,
            keyword: '키워드 2'
        },
        {
            id: 3,
            keyword: '키워드 3'
        }
    ]
};
const usersData = {
    USER1,
    USER2,
    USER3
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/stores/authStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAuthStore": (()=>useAuthStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
// `typeof window !== 'undefined'` 체크하여 SSR에서 `localStorage` 접근 방지
const storage = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage) // 클라이언트 환경에서는 `localStorage` 사용
 : ("TURBOPACK unreachable", undefined); // SSR 환경에서는 `undefined`로 설정
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        isAuthenticated: false,
        user: null,
        token: null,
        login: (user, token)=>{
            set({
                isAuthenticated: true,
                user,
                token
            });
        },
        logout: ()=>{
            set({
                isAuthenticated: false,
                user: null,
                token: null
            });
        }
    }), {
    name: 'auth-storage',
    storage
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useAuth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/authStore.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useAuth = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated, user, token, login, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const handleLogin = (user, token)=>{
        login(user, token);
        router.push('/');
    };
    const handleLogout = ()=>{
        logout();
        router.push('/');
    };
    return {
        isAuthenticated,
        user,
        token,
        handleLogin,
        handleLogout
    };
};
_s(useAuth, "TFO/dQUMQjH48PjX4djEyBYK5Bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/stores/modalStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useModalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        modalType: null,
        isOpen: false,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/modalStore.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const useModal = ()=>{
    _s();
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return {
        isOpen,
        modalType,
        openModal,
        closeModal
    };
};
_s(useModal, "I/jLwndUg+XOhch8VDeSbqzollw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/stores/dropdownStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useDropdownStore": (()=>useDropdownStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useDropdownStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        dropdowns: {},
        setOpen: (type, open)=>set((state)=>({
                    dropdowns: {
                        ...state.dropdowns,
                        [type]: open
                    }
                })),
        closeAll: ()=>set({
                dropdowns: {}
            }),
        getState: ()=>get().dropdowns
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useDropdown.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useDropdown": (()=>useDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dropdownStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/dropdownStore.ts [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
const useDropdown = (dropdownType)=>{
    _s();
    const { dropdowns, setOpen, closeAll, getState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dropdownStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdownStore"])();
    // 현재 상태 가져오기
    const isDropdownOpen = typeof dropdownType === 'string' ? dropdowns[dropdownType] ?? false // 문자열이면 직접 접근
     : dropdownType.some((type)=>dropdowns[type] ?? false); // 배열이면 하나라도 열려 있는지 확인
    // 드롭다운 열기
    const openDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[openDropdown]": ()=>{
            if (typeof dropdownType === 'string') {
                setOpen(dropdownType, true);
            } else {
                dropdownType.forEach({
                    "useDropdown.useCallback[openDropdown]": (type)=>setOpen(type, true)
                }["useDropdown.useCallback[openDropdown]"]);
            }
        }
    }["useDropdown.useCallback[openDropdown]"], [
        dropdownType,
        setOpen
    ]);
    // 드롭다운 닫기
    const closeDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[closeDropdown]": ()=>{
            if (typeof dropdownType === 'string') {
                setOpen(dropdownType, false);
            } else {
                dropdownType.forEach({
                    "useDropdown.useCallback[closeDropdown]": (type)=>setOpen(type, false)
                }["useDropdown.useCallback[closeDropdown]"]);
            }
        }
    }["useDropdown.useCallback[closeDropdown]"], [
        dropdownType,
        setOpen
    ]);
    // 드롭다운 토글
    const toggleDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropdown.useCallback[toggleDropdown]": ()=>{
            const currentState = typeof dropdownType === 'string' ? getState()[dropdownType] ?? false // 현재 상태 가져오기
             : dropdownType.some({
                "useDropdown.useCallback[toggleDropdown]": (type)=>getState()[type] ?? false
            }["useDropdown.useCallback[toggleDropdown]"]);
            if (typeof dropdownType === 'string') {
                setOpen(dropdownType, !currentState);
            } else {
                dropdownType.forEach({
                    "useDropdown.useCallback[toggleDropdown]": (type)=>setOpen(type, !currentState)
                }["useDropdown.useCallback[toggleDropdown]"]);
            }
        }
    }["useDropdown.useCallback[toggleDropdown]"], [
        dropdownType,
        getState,
        setOpen
    ]);
    // 모든 드롭다운 닫기
    const closeAllDropdowns = ()=>closeAll();
    return {
        isDropdownOpen,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        closeAllDropdowns
    };
};
_s(useDropdown, "DHVYHmQfVaAqSkBSLUb9Vh6QSbc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$dropdownStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdownStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/common/svg/LogoSVG.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MoLogo": (()=>MoLogo),
    "PCLogo": (()=>PCLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
;
const PCLogo = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconStyled, {
        className: className,
        viewBox: "0 0 130 26",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M120.091 24.7528V24.1844H121.566L117.944 16.8582L117.336 17.0161V24.1844H118.81V24.7528H109.613V24.1844H111.375V1.63726H109.484V1.06885H117.336V16.3845L117.848 16.195L125.059 10.2898H122.046V9.72139H128.359V10.2898H126.116L122.303 13.4793L127.847 24.1844H129V24.7528H120.091Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M103.406 9.97418C102.466 9.97418 101.793 10.4794 101.387 11.49C100.982 12.5005 100.779 14.1741 100.779 16.511V18.153C100.779 20.2372 101.014 21.732 101.484 22.6372C101.954 23.5425 102.819 23.9951 104.079 23.9951C105.34 23.9951 106.344 23.574 107.092 22.7319C107.839 21.8898 108.32 20.932 108.534 19.8583L109.11 19.9214C108.705 21.732 107.957 23.0372 106.867 23.8372C105.756 24.6582 104.229 25.0688 102.285 25.0688C99.8065 25.0688 97.9051 24.4161 96.5806 23.1109C95.256 21.7846 94.5938 19.8583 94.5938 17.332C94.5938 14.7847 95.3415 12.8268 96.8369 11.4584C98.3538 10.09 100.458 9.40576 103.15 9.40576C105.051 9.40576 106.504 9.77418 107.508 10.511C108.512 11.2268 109.014 12.1321 109.014 13.2268C109.014 14.3215 108.769 15.1215 108.277 15.6268C107.807 16.132 107.145 16.3846 106.29 16.3846C105.457 16.3846 104.784 16.1636 104.272 15.7215C103.759 15.2794 103.502 14.6268 103.502 13.7636C103.502 13.3847 103.556 13.0057 103.663 12.6268H104.72C104.87 12.2057 104.945 11.8268 104.945 11.49C104.945 10.4794 104.432 9.97418 103.406 9.97418Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M88.9756 7.54306C87.8433 7.54306 87.0315 7.25885 86.5401 6.69044C86.0701 6.12202 85.8351 5.41676 85.8351 4.57467C85.8351 3.73257 86.0915 3.03784 86.6042 2.49048C87.1383 1.94311 87.9395 1.66943 89.0077 1.66943C90.0759 1.66943 90.8877 1.92206 91.4431 2.42732C91.9986 2.91153 92.2763 3.61678 92.2763 4.54309C92.2763 5.44834 92.0093 6.17465 91.4752 6.72201C90.9411 7.26938 90.1079 7.54306 88.9756 7.54306ZM84.1367 9.72198H91.9879V24.185H93.7825V24.7534H84.2649V24.185H86.0274V10.2904H84.1367V9.72198Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.1133 2.64746H73.5347C76.7606 2.64746 79.1641 3.11061 80.745 4.03692C82.3259 4.94218 83.1164 6.57374 83.1164 8.93161C83.1164 11.5421 82.155 13.3421 80.2323 14.3316C78.4377 15.2368 75.9275 15.6894 72.7015 15.6894H72.4452V24.1525H76.4509V24.7525H64.1133V24.1525H66.1962V3.24745H64.1133V2.64746ZM72.4452 3.24745V15.0894H73.1181C74.3999 15.0894 75.2865 14.6579 75.7779 13.7947C76.2693 12.9316 76.515 11.5316 76.515 9.59476V8.07899C76.515 6.28953 76.28 5.03691 75.81 4.32113C75.3613 3.60535 74.5281 3.24745 73.3104 3.24745H72.4452Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M48.1866 10.2896V9.72119H56.4544V10.2896H55.1405L58.0247 20.9316L60.8767 10.2896H58.6656V9.72119H62.9917V10.2896H61.6458L57.8003 24.7526H53.4101L50.6221 15.058L47.6098 24.7526H43.3157L38.5729 10.2896H37.1309V9.72119H46.8407V10.2896H44.918L47.8662 21.0263L50.1735 13.6369L49.3723 10.2896H48.1866Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M30.1018 25.0688C27.3458 25.0688 25.2736 24.374 23.8849 22.9846C22.5176 21.5741 21.834 19.6267 21.834 17.1425C21.834 14.6373 22.6031 12.7215 24.1413 11.3952C25.7008 10.0689 27.677 9.40576 30.0697 9.40576C34.9193 9.40576 37.248 11.8057 37.0557 16.6057H28.0188V17.8373C28.0188 19.9004 28.2859 21.4583 28.8199 22.5109C29.354 23.5635 30.2834 24.0898 31.6079 24.0898C34.0861 24.0898 35.7098 22.7846 36.4789 20.1741L37.0557 20.2688C36.6498 21.7846 35.9127 22.9635 34.8445 23.8056C33.7977 24.6477 32.2168 25.0688 30.1018 25.0688ZM28.0508 15.9741H31.3516V14.4268C31.3516 12.7215 31.2447 11.5636 31.0311 10.9531C30.8388 10.3215 30.4329 10.0058 29.8134 10.0058C29.2152 10.0058 28.7665 10.3426 28.4674 11.0163C28.1897 11.6689 28.0508 12.8057 28.0508 14.4268V15.9741Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.1058 3.24745V24.7525H14.6194L3.62775 4.32113V24.1525H5.39026V24.7525H1V24.1525H2.76251V3.24745H1V2.64746H9.84461L18.2406 18.4999V3.24745H16.4781V2.64746H20.8683V3.24745H19.1058Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = PCLogo;
const MoLogo = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconStyled, {
        className: className,
        viewBox: "0 0 38 38",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.0706 30.3571L17.4277 29.7143V7H26.8421C32.3117 7 35.4277 10.3481 35.4277 15.0884C35.4277 19.895 32.2454 23.1768 26.7095 23.1768H22.4001V31H18.7134L18.0706 30.3571ZM22.4001 19.1657H25.9139C28.8642 19.1657 30.2896 17.5083 30.2896 15.0884C30.2896 12.7017 28.8642 11.0773 25.9139 11.0773H22.4001V19.1657Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.1429 7V31H18.1438L7.31315 15.7514H7.1088V31H2V7H6.49574L17.2583 22.2486H17.4967V7H22.1429Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/svg/LogoSVG.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
_c1 = MoLogo;
const IconStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg`
    path {
        fill: currentColor;
    }
`;
_c2 = IconStyled;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "PCLogo");
__turbopack_refresh__.register(_c1, "MoLogo");
__turbopack_refresh__.register(_c2, "IconStyled");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$svg$2f$LogoSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/svg/LogoSVG.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const Logo = ({ logoType })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledLogo, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$svg$2f$LogoSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCLogo"], {
                    className: logoType === 'footer-logo' ? 'footer-desktop-logo' : 'desktop-logo'
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Logo.tsx",
                    lineNumber: 15,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$svg$2f$LogoSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoLogo"], {
                    className: logoType === 'footer-logo' ? 'footer-mobile-logo' : 'mobile-logo'
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Logo.tsx",
                    lineNumber: 16,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/Logo.tsx",
            lineNumber: 14,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Logo.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
};
_c = Logo;
const StyledLogo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
	color: ${({ theme })=>theme.color.primary};
	font-size: ${({ theme })=>theme.fontSize.large};
	font-weight: ${({ theme })=>theme.fontWeight.bold};
	cursor: pointer;
	display: flex;
	justify-content: center;

	.mobile-logo,
	.footer-mobile-logo {
		display: none;
	}

	.desktop-logo {
		height: 22px;
	}

	.footer-desktop-logo {
		color: ${({ theme })=>theme.color.subtext};
		height: 32px;
	}

	@media ${({ theme })=>theme.mediaQuery.tablet} {
		.desktop-logo,
		.footer-desktop-logo {
			display: none;
		}

		.mobile-logo {
			display: block;
			height: 36px;
			width: 36px;
		}

		.footer-mobile-logo {
			display: block;
			color: ${({ theme })=>theme.color.subtext};
			height: 48px;
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
"[project]/src/components/common/modal/Modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
                    fileName: "[project]/src/components/common/modal/Modal.tsx",
                    lineNumber: 85,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "modal-close",
                    onClick: handleClose,
                    "aria-label": "Close modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoClose"], {}, void 0, false, {
                        fileName: "[project]/src/components/common/modal/Modal.tsx",
                        lineNumber: 87,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/common/modal/Modal.tsx",
                    lineNumber: 86,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/modal/Modal.tsx",
            lineNumber: 84,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/modal/Modal.tsx",
        lineNumber: 79,
        columnNumber: 3
    }, this), document.body // 포털 렌더링 대상 DOM
    );
}
_s(Modal, "u9WR4hthB9D9EiT7doihms2hZdg=");
_c = Modal;
const StyledModal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
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
		
		align-items: center;
		justify-content: center;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDropdown.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const Dropdown = ({ type, children, toggleButton, className })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isDropdownOpen, closeDropdown, toggleDropdown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"])(type);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            closeDropdown();
        }
    }["Dropdown.useEffect"], [
        pathname,
        closeDropdown
    ]);
    // 외부 클릭 시 닫기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            const handleOutsideClick = {
                "Dropdown.useEffect.handleOutsideClick": (event)=>{
                    if (!dropdownRef.current || dropdownRef.current.contains(event.target)) return;
                    closeDropdown();
                }
            }["Dropdown.useEffect.handleOutsideClick"];
            if (isDropdownOpen) {
                document.addEventListener('mousedown', handleOutsideClick);
            }
            return ({
                "Dropdown.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleOutsideClick);
                }
            })["Dropdown.useEffect"];
        }
    }["Dropdown.useEffect"], [
        isDropdownOpen,
        closeDropdown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledDropdown, {
        ref: dropdownRef,
        className: `${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toggle-button",
                onClick: toggleDropdown,
                children: toggleButton && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(toggleButton) && (toggleButton.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(toggleButton, {
                    className: isDropdownOpen ? 'open' : ''
                }) : toggleButton)
            }, void 0, false, {
                fileName: "[project]/src/components/common/Dropdown.tsx",
                lineNumber: 41,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `panel ${isDropdownOpen ? 'open' : ''}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/common/Dropdown.tsx",
                lineNumber: 50,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/Dropdown.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, this);
};
_s(Dropdown, "B7abulrEBnNa1bDAlCxO2EEJV7E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"]
    ];
});
_c = Dropdown;
const StyledDropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
	position: relative;
	cursor: pointer;
	z-index: 1000;

	.toggle-button {
		background: none;
		cursor: pointer;
		outline: none;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;

		svg {
			width: ${({ theme })=>theme.fontSize.large};
			height: ${({ theme })=>theme.fontSize.large};
			aspect-ratio: 1 / 1;
			font-size: ${({ theme })=>theme.fontSize.large};
		}
	}

	&.auth {
		.panel {
			position: absolute;
			top: 2.75rem;
			right: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 1rem;

			font-size: ${({ theme })=>theme.fontSize.small};
			background: ${({ theme })=>theme.color.surface};
			box-shadow: ${({ theme })=>theme.shadow.medium};
			border: 1px solid ${({ theme })=>theme.color.border};
			border-radius: ${({ theme })=>theme.borderRadius.soft};
			z-index: 1000;
			white-space: nowrap;

			visibility: hidden;
			opacity: 0;
			transform: scale(0);
			transform-origin: top right;
			overflow: hidden;
			transition: all 0.3s ease;

			&.open {
				width: fit-content;
				visibility: visible;
				opacity: 1;
				transform: scale(1);
			}

			a {
				padding: 0;
				margin: 0;
				width: 100%;
			}

			.item {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 1rem 2rem;

				font-size: ${({ theme })=>theme.fontSize.small};
				cursor: pointer;

				button {
					width: 100%;
				}
			}

			.item:first-child {
				border-bottom: 1px solid ${({ theme })=>theme.color.border};
			}
		}
	}

	&.drawer {
		.panel {
			visibility: hidden;
			position: absolute;
			top: calc(100% + 1rem - 2px);
			left: 0;
			margin-left: -1rem;
			background: ${({ theme })=>theme.color.surface};
			box-shadow: ${({ theme })=>theme.shadow.medium};

			display: flex;
			flex-direction: column;
			justify-content: center;

			transform-origin: top;
			transition: all 0.3s ease;

			@media ${({ theme })=>theme.mediaQuery.tablet} {
				width: 100vw;
				height: 0;

				border: 1px solid ${({ theme })=>theme.color.border};
				visibility: hidden;
				opacity: 0;
				transform: scaleY(0);
				overflow: hidden;

				&.open {
					height: fit-content;
					visibility: visible;
					opacity: 1;
					transform: scaleY(1);
				}
			}

			a {
				width: 100%;
				height: 100%;
				padding: 0;
				margin: 0;
			}

			button {
				width: 100%;
				padding: 0.75rem 0;
			}

			.item {
				width: 100%;
				height: 0;
				position: relative;
				visibility: hidden;
				opacity: 0;
				transform: scaleY(0);

				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				cursor: pointer;
				box-shadow: 0 -1px 0 ${({ theme })=>theme.color.border};
				font-weight: ${({ theme })=>theme.fontWeight.bold};

				transfrom-origin: top center;
				transition: transform 0.3s ease;

				&:hover {
					color: ${({ theme })=>theme.color.primary};
				}

				@media ${({ theme })=>theme.mediaQuery.tablet} {
					height: fit-content;
					visibility: visible;
					opacity: 1;
					transform: scaleY(1);
				}
			}

			.sub-item {
				width: 100%;
				position: relative;
				top: 100%;
				left: 0;

				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				background: ${({ theme })=>theme.color.neutral};
				cursor: pointer;
			}
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
"[project]/src/constants/categories.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CATEGORIES": (()=>CATEGORIES)
});
const CATEGORIES = [
    {
        id: 0,
        title: '전체'
    },
    {
        id: 1,
        title: '정치'
    },
    {
        id: 2,
        title: '경제'
    },
    {
        id: 3,
        title: '사회'
    },
    {
        id: 4,
        title: '문화'
    },
    {
        id: 5,
        title: 'IT'
    },
    {
        id: 6,
        title: '세계'
    }
];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/categories.ts [app-client] (ecmascript)");
;
const NAVIGATION = [
    {
        id: 0,
        title: '시작하기',
        link: '/start'
    },
    {
        id: 1,
        title: '뉴스레터',
        link: '/articles',
        subItems: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((category, index)=>({
                    id: index,
                    title: category.title,
                    link: index === 0 ? '/articles' : `/articles/categories/${category.id}`
                }))
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/header/Navigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/navigation.ts [app-client] (ecmascript)");
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
const Navigation = ()=>{
    _s();
    const { isSubOpen, setSubOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            setSubOpen(isSubOpen);
        }
    }["Navigation.useEffect"], [
        isSubOpen,
        setSubOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledNavigation, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAVIGATION"].map((item, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    onMouseEnter: ()=>item.subItems && setSubOpen(true),
                    onMouseLeave: ()=>setSubOpen(false),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.link,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header/Navigation.tsx",
                                lineNumber: 26,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/Navigation.tsx",
                            lineNumber: 25,
                            columnNumber: 8
                        }, this),
                        item.subItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub-navigation",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel",
                                children: item.subItems.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: subItem.link,
                                        className: "item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: subItem.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/header/Navigation.tsx",
                                            lineNumber: 34,
                                            columnNumber: 13
                                        }, this)
                                    }, subIndex, false, {
                                        fileName: "[project]/src/components/layout/header/Navigation.tsx",
                                        lineNumber: 33,
                                        columnNumber: 12
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header/Navigation.tsx",
                                lineNumber: 31,
                                columnNumber: 10
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/Navigation.tsx",
                            lineNumber: 30,
                            columnNumber: 9
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/layout/header/Navigation.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header/Navigation.tsx",
            lineNumber: 17,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header/Navigation.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
};
_s(Navigation, "PqUtXvH3XkgOQ5QkcOVYDCLrbJc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"]
    ];
});
_c = Navigation;
const StyledNavigation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	ul {
		display: flex;
		gap: 1rem;
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			position: relative;
			padding: 0.5rem;
			cursor: pointer;
			font-size: ${({ theme })=>theme.fontSize.small};

			&:hover {
				box-shadow: inset 0 -2px ${({ theme })=>theme.color.primary};

				.sub-navigation {
					opacity: 1;
					transform: scaleY(1);
					pointer-events: all;
				}
			}

			.sub-navigation {
				width: 100vw;

				position: fixed;
				top: 3rem;
				left: 0;
				z-index: 1000;

				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				background: ${({ theme })=>theme.color.surface};
				border-top: 1px solid ${({ theme })=>theme.color.border};
				box-shadow: ${({ theme })=>theme.shadow.light};
				transform-origin: top;
				opacity: 0;
				transform: scaleY(0);
				transition: all 0.3s ease;
				pointer-events: none;

				.panel {
					width: 100%;
					max-width: ${({ theme })=>theme.layout.width.large};

					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					margin: 0 auto;
				}

				.item {
					width: clamp(1.5rem, 3.5rem, 7rem);
					display: flex;
					justify-content: center;
					align-items: center;

					padding: 0.5rem 1rem;
					margin: 0;
					text-decoration: none;
				}
			}
		}
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
"[project]/src/components/layout/header/ThemeSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const ThemeSwitcher = ({ className, scheme, styles })=>{
    _s();
    const { themeName, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        scheme: scheme,
        onClick: toggleTheme,
        style: styles,
        children: themeName === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdLightMode"], {
            className: "light"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header/ThemeSwitcher.tsx",
            lineNumber: 20,
            columnNumber: 29
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDarkMode"], {
            className: "dark"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/header/ThemeSwitcher.tsx",
            lineNumber: 20,
            columnNumber: 65
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/header/ThemeSwitcher.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
};
_s(ThemeSwitcher, "XSkUf7bEe5V3+ZOXlSgtMWfLyaI=");
_c = ThemeSwitcher;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ThemeSwitcher);
var _c, _c1;
__turbopack_refresh__.register(_c, "ThemeSwitcher");
__turbopack_refresh__.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/header/Drawer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/layout/header/ThemeSwitcher.tsx [app-client] (ecmascript)");
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
const Drawer = ()=>{
    _s();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        type: "drawer",
        className: "drawer",
        toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledDrawerButton, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/layout/header/Drawer.tsx",
                    lineNumber: 21,
                    columnNumber: 6
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/layout/header/Drawer.tsx",
                    lineNumber: 22,
                    columnNumber: 6
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/src/components/layout/header/Drawer.tsx",
                    lineNumber: 23,
                    columnNumber: 6
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/header/Drawer.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, void 0),
        children: [
            !isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "item"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/header/Drawer.tsx",
                lineNumber: 27,
                columnNumber: 25
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAVIGATION"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "item",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.link,
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/header/Drawer.tsx",
                                lineNumber: 31,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/header/Drawer.tsx",
                            lineNumber: 30,
                            columnNumber: 6
                        }, this),
                        item.subItems && item.subItems.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sub-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: subItem.link,
                                        children: subItem.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/header/Drawer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/header/Drawer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 9
                                }, this)
                            }, `sub-drawer-${subIndex}`, false, {
                                fileName: "[project]/src/components/layout/header/Drawer.tsx",
                                lineNumber: 35,
                                columnNumber: 8
                            }, this))
                    ]
                }, `drawer-${index}`, true, {
                    fileName: "[project]/src/components/layout/header/Drawer.tsx",
                    lineNumber: 29,
                    columnNumber: 5
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/header/Drawer.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
};
_s(Drawer, "1LGxUrjNz4q7iKM/2JDC9lJQ3xY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Drawer;
const StyledDrawerButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
	width: 0;
	height: 0;
	visibility: hidden;
	transform-origin: center;
	transform: scaleX(0);
	transition: all 0.5s ease;
	cursor: pointer;

	span {
		position: absolute;
		width: 100%;
		height: 0.125rem;
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

	@media ${({ theme })=>theme.mediaQuery.tablet} {
		position: relative;
		visibility: visible;
		width: 1.25rem;
		height: 1.25rem;
		display: flex;
		transform: scaleX(1);
		align-items: center;
		justify-content: center;
		margin-right: 1rem;

		&::before {
			content: '';
			position: absolute;
			width: 3rem;
			height: 3rem;
			background: transparent;
			top: -0.8rem;
			left: -0.8rem;
			cursor: pointer;
		}
	}
`;
const __TURBOPACK__default__export__ = Drawer;
var _c;
__turbopack_refresh__.register(_c, "Drawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/mocks/mypage/users.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useModal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useDropdown.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/layout/header/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/layout/header/Drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/layout/header/ThemeSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
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
;
;
const Header = ()=>{
    _s();
    const { USER1 } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mocks$2f$mypage$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usersData"];
    const { isAuthenticated, handleLogin, handleLogout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isHeaderOpen, setHeaderOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"])();
    const { closeDropdown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"])([
        'auth',
        'sub-navigation',
        'drawer'
    ]);
    const { isOpen, modalType, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])();
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const handleScroll = {
                    "Header.useEffect.handleScroll": ()=>{
                        const container = document.documentElement || document.body;
                        const currentScrollY = window.scrollY || container.scrollTop || 0;
                        const maxScrollY = container.scrollHeight - container.clientHeight;
                        // 최상단이면 항상 헤더 보이게
                        if (currentScrollY <= 0) {
                            setHeaderOpen(true);
                            return;
                        }
                        // 최하단이면 닫지 않음
                        if (currentScrollY >= maxScrollY) {
                            return;
                        }
                        // 일반 스크롤 처리
                        if (currentScrollY > lastScrollY.current) {
                            setHeaderOpen(false);
                            closeDropdown();
                        } else {
                            setHeaderOpen(true);
                        }
                        lastScrollY.current = currentScrollY;
                    }
                }["Header.useEffect.handleScroll"];
                window.addEventListener('scroll', handleScroll);
                return ({
                    "Header.useEffect": ()=>{
                        window.removeEventListener('scroll', handleScroll);
                    }
                })["Header.useEffect"];
            }
        }
    }["Header.useEffect"], [
        setHeaderOpen,
        closeDropdown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledHeader, {
        $isFolded: isHeaderOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "left-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$Drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 71,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 70,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "center-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 75,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 74,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "right-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                scheme: "secondary",
                                className: isAuthenticated ? 'hidden' : 'mobile-hidden'
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 78,
                                columnNumber: 6
                            }, this),
                            isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "auth",
                                className: "auth",
                                toggleButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCircle"], {
                                        className: "userCircle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 85,
                                        columnNumber: 10
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 84,
                                    columnNumber: 9
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$header$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "item"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 90,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/mypage",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "item",
                                                children: "마이 페이지"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 92,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 91,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "item",
                                            onClick: handleLogout,
                                            children: "로그아웃"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 94,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 80,
                                columnNumber: 7
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        scheme: "secondary",
                                        onClick: ()=>handleLogin({
                                                id: USER1.id,
                                                name: USER1.name,
                                                email: USER1.email
                                            }, 'mock'),
                                        style: {
                                            width: '5rem'
                                        },
                                        children: "로그인"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 101,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        scheme: "primary",
                                        style: {
                                            width: '5rem'
                                        },
                                        onClick: ()=>openModal('subscribe'),
                                        children: "구독하기"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 117,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 77,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this),
            isOpen && modalType === 'subscribe' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                onClose: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "구독하기 모달 내용"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 126,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, this);
};
_s(Header, "9VNvmFqJK5bGgeJ+7l1apqSUaSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDropdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropdown"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useModal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"]
    ];
});
_c = Header;
const StyledHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header`
	position: fixed;
	top: ${({ $isFolded })=>$isFolded ? '0' : '-3rem'};
	left: 0;
	z-index: 1000;

	width: 100%;
	margin: 0;
	padding: 0;

	background: ${({ theme })=>theme.color.background};
	border-bottom: 1px solid ${({ theme })=>theme.color.border};
	transition: top 0.3s ease, transform 0.3s ease;

	.header {
		position: relative;
		background: ${({ theme })=>theme.color.background};
		z-index: 1000;

		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		margin: 0 auto;
		gap: 1rem;

		width: 100%;
		max-width: ${({ theme })=>theme.layout.width.large};
	}

	.left-section {
		position: relative;
		left: 0;

		width: fit-content;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.center-section {
		position: relative;
		left: 0;

		width: fit-content;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		@media ${({ theme })=>theme.mediaQuery.tablet} {
			width: 0;
			visibility: hidden;
		}
	}

	.right-section {
		position: relative;
		right: 0;

		width: fit-content;
		height: 100%;
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5rem;

		.userCircle {
			border-radius: ${({ theme })=>theme.borderRadius.circle};
			object-fit: cover;
		}
	}

	.hidden {
		width: 0;
		height: 0;
		visibility: hidden;
		transform: scaleX(0);
	}

	.mobile-hidden {
		@media ${({ theme })=>theme.mediaQuery.tablet} {
			width: 0;
			height: 0;
			visibility: hidden;
			transform: scaleX(0);
			padding: 0;
		}
	}

	.desktop-hidden {
		width: 0;
		height: 0;
		visibility: hidden;
		transform: scaleX(0);

		@media ${({ theme })=>theme.mediaQuery.tablet} {
			width: fit-content;
			height: fit-content;
			visibility: visible;
			transform: scaleX(1);
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
"[project]/src/components/common/Text.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const Text = ({ className, children, size = 'medium', weight = 'light', color = 'text' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledText, {
        className: className,
        $size: size,
        $weight: weight,
        $color: color,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/common/Text.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this);
};
_c = Text;
const StyledText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span`
	font-size: ${({ theme, $size })=>theme.fontSize[$size]};
	font-weight: ${({ theme, $weight })=>theme.fontWeight[$weight]};
	color: ${({ theme, $color })=>theme.color[$color]};
	transition: color 0.3s ease;
	margin: 0;

	${({ $styles })=>$styles || ''}
`;
_c1 = StyledText;
const __TURBOPACK__default__export__ = Text;
var _c, _c1;
__turbopack_refresh__.register(_c, "Text");
__turbopack_refresh__.register(_c1, "StyledText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledFooter, {
        id: "footer-el",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    logoType: "footer-logo"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "extraSmall",
                            children: "서비스 이용 문의"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "footer-item email",
                            href: "mailto:newpick@gmail.com",
                            children: "newpick@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "footer-item",
                            href: "#",
                            children: "개인정보처리방침"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "footer-item",
                            href: "#",
                            children: "이용약관"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "footer-item",
                            href: "https://github.com/Devcourse-NewPick",
                            target: "_blank",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "extraSmall",
                    color: "subText",
                    children: "© 2025 NewPick. All Rights Reserved."
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 29,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 12,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
};
_c = Footer;
const StyledFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer`
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	width: 100%;
	margin-top: auto;
	padding: 3rem 0;
	background: ${({ theme })=>theme.color.surface};
	border-top: 1px solid ${({ theme })=>theme.color.border};

	.footer {
		width: 100%;
		max-width: ${({ theme })=>theme.layout.width.large};

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: 1rem;

		color: ${({ theme })=>theme.color.subText};
	}

	.footer-menu {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: ${({ theme })=>theme.fontSize.extraSmall};

		a {
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
"[project]/src/components/common/ScrollButtons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function ScrollButtons() {
    _s();
    const [showButtons, setShowButtons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleScrollToBottom = ()=>{
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollButtons.useEffect": ()=>{
            const handleScroll = {
                "ScrollButtons.useEffect.handleScroll": ()=>{
                    const footer = document.getElementById('footer-el');
                    if (!footer) return;
                    const footerTop = footer.offsetTop;
                    const scrollBottom = window.scrollY + window.innerHeight;
                    const isNearBottom = scrollBottom > footerTop;
                    setShowButtons(window.scrollY > 100 && !isNearBottom);
                }
            }["ScrollButtons.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "ScrollButtons.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                }
            })["ScrollButtons.useEffect"];
        }
    }["ScrollButtons.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButtonsContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                onClick: handleScrollToTop,
                className: showButtons ? 'fade-in' : 'fade-out',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronUp"], {}, void 0, false, {
                    fileName: "[project]/src/components/common/ScrollButtons.tsx",
                    lineNumber: 45,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/ScrollButtons.tsx",
                lineNumber: 44,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                onClick: handleScrollToBottom,
                className: showButtons ? 'fade-in' : 'fade-out',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {}, void 0, false, {
                    fileName: "[project]/src/components/common/ScrollButtons.tsx",
                    lineNumber: 48,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/ScrollButtons.tsx",
                lineNumber: 47,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/ScrollButtons.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this);
}
_s(ScrollButtons, "sQhfbBVTkc0ZD3kvTdkcCLkyCX8=");
_c = ScrollButtons;
const ScrollButtonsContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
	position: fixed;
	bottom: 1.5rem;
	right: 1.5rem;
	display: flex;
	flex-direction: column;
	z-index: 999;
`;
_c1 = ScrollButtonsContainer;
const ScrollButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button`
	height: 2.5rem;
	width: 2.5rem;
	cursor: pointer;
	color: ${({ theme })=>theme.color.primary};
	background: ${({ theme })=>theme.color.background};
	border: 0.5px solid ${({ theme })=>theme.color.border};
	opacity: 0;
	transform: translateY(10px);
	transition: opacity 0.3s ease, transform 0.3s ease;

	&:hover {
		background: ${({ theme })=>theme.color.tertiary};
	}

	&.fade-in {
		opacity: 80%;
		transform: translateY(0);
	}

	&.fade-out {
		opacity: 0;
		transform: translateY(60px);
	}

	svg {
		position: absolute;
		width: 1.25rem;
		height: 1.25rem;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;
_c2 = ScrollButton;
const __TURBOPACK__default__export__ = ScrollButtons;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "ScrollButtons");
__turbopack_refresh__.register(_c1, "ScrollButtonsContainer");
__turbopack_refresh__.register(_c2, "ScrollButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/layout/MainLayout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/common/ScrollButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const Layout = ({ children })=>{
    _s();
    const { headerHeight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledLayout, {
        $headerHeight: headerHeight,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.tsx",
                lineNumber: 18,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                className: "content",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.tsx",
                lineNumber: 19,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ScrollButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/layout/MainLayout.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/MainLayout.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this);
};
_s(Layout, "N5pU2IulGTzNP83mwNmCh05WEh8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeader"]
    ];
});
_c = Layout;
const StyledLayout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100vw;
	height: 100vh;

	padding-top: ${({ $headerHeight })=>$headerHeight};
	transition: padding-top 0.3s ease;

	@media ${({ theme })=>theme.mediaQuery.desktop} {
		header {
			padding: 0 1rem;
		}
		main {
			padding: 0 1rem;
		}
		footer {
			.footer {
				padding: 0 1rem;
			}
		}
	}
`;
_c1 = StyledLayout;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].main`
	width: 100%;
	max-width: ${({ theme })=>theme.layout.width.large};
	margin: 0 auto;
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

//# sourceMappingURL=src_4e927f._.js.map