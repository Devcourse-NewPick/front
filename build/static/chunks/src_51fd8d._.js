(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_51fd8d._.js", {

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
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_51fd8d._.js.map