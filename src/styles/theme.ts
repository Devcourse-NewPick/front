export type ThemeName = 'light' | 'dark';

export type ColorKey =
  | 'primary' // 주요 색상
  | 'secondary' // 보조 색상
  | 'background' // 배경 색상
  | 'surface' // 표면 색상 ex) 카드, 버튼
  | 'disabled' // 비활성 색상
  | 'success' // 성공 색상
  | 'error' // 오류 색상
  | 'warning' // 경고 색상
  | 'text' // 텍스트 색상
  | 'subtext' // 보조텍스트 색상
  | 'lightGrey' // 옅은 그레이 색상
  | 'line' // 분기라인 색상
  | 'border'; // 테두리 색상

export type HeadingSize = 'extraLarge' | 'large' | 'medium' | 'small';
export type FontSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
export type FontWeight = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';

export type BorderRadius = 'flat' | 'soft' | 'medium' | 'rounded' | 'capsule' | 'circle';
export type Shadow = 'light' | 'medium' | 'heavy';

export type ButtonSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
export type ButtonScheme = 'primary' | 'secondary' | 'mono' | 'monoOutline' | 'danger';
export type LayoutWidth = 'small' | 'medium' | 'large';
export type MediaQuery = 'mobile' | 'tablet' | 'desktop';

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;

  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  };

  borderRadius: Record<BorderRadius, string>;
  shadow: Record<Shadow, string>;

  button: {
    [key in ButtonSize]: {
      fontSize: string;
			padding: string;
      // height: string;
      // width: string;
      gap?: string;
    };
  };
  buttonScheme: {
    [key in ButtonScheme]: {
      color: string;
      fontWeight?: string;
      background: string;
      border: string;
      hover: {
        color: string;
        fontWeight?: string;
        background?: string;
        border?: string;
      };
    };
  };

  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
  mediaQuery: {
    [key in MediaQuery]: string;
  };
}

export const lightTheme: Theme = {
  name: 'light',
  color: {
    primary: '#2705C0',
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
    border: '#999999',
  },
  fontSize: {
    extraSmall: '0.875rem',
    small: '1rem',
    medium: '1.125rem',
    large: '1.375rem',
    extraLarge: '1.75rem',
  },
  fontWeight: {
    light: '400',
    regular: '500',
    medium: '600',
    semiBold: '700',
    bold: '800',
    extraBold: '900',
  },
  heading: {
    extraLarge: {
      fontSize: '3rem',
    },
    large: {
      fontSize: '2.25rem',
    },
    medium: {
      fontSize: '2rem',
    },
    small: {
      fontSize: '1.75rem',
    },
  },
  borderRadius: {
    flat: '0',
    soft: '4px',
    medium: '8px',
    rounded: '16px',
    capsule: '9999px',
    circle: '50%',
  },
  button: {
    extraLarge: {
      fontSize: '1.125rem',
	    padding: '1rem 2rem',
      // width: '13.75rem',
      // height: '3.75rem',
      gap: '0.75rem',
    },
    large: {
      fontSize: '1rem',
	    padding: '1rem 1.5rem',
      // width: '12rem',
      // height: '3.25rem',
      gap: '0.75rem',
    },
    medium: {
      fontSize: '1rem',
	    padding: '0.8rem 1.2rem',
      // width: '10.5rem',
      // height: '3.125rem',
      gap: '0.75rem',
    },
    small: {
      fontSize: '0.875rem',
	    padding: '0.5rem 0.8rem',
      // width: '8rem',
      // height: '2.75rem',
      gap: '0.75rem',
    },
    extraSmall: {
      fontSize: '0.875rem',
	    padding: '0 0.5rem',
      // width: '5.75rem',
      // height: '2.125rem',
      gap: '0.75rem',
    },
  },
  buttonScheme: {
    primary: {
      color: '#FFFFFF',
      fontWeight: '600',
      background: '#2705C0',
      border: '1px solid #2705C0',
      hover: {
        color: '#2705C0',
        fontWeight: '700',
        background: 'transparent',
        border: '1px solid #2705C0',
      },
    },
    secondary: {
      color: '#2705C0',
      fontWeight: '700',
      background: 'transparent',
      border: '1px solid #2705C0',
      hover: {
        color: '#ffffff',
        fontWeight: '600',
        background: '#2705C0',
	      border: '1px solid #2705C0',
      },
    },
    mono: {
      color: '#ffffff',
      fontWeight: '600',
      background: '#222222',
	    border: '1px solid #222222',
      hover: {
        color: '#444444',
        fontWeight: '700',
        background: 'transparent',
        border: '1px solid #999999',
      },
    },
    monoOutline: {
      color: '#444444',
      fontWeight: '700',
      background: 'transparent',
      border: '1px solid #999999',
      hover: {
        color: '#ffffff',
        fontWeight: '600',
        background: '#222222',
	      border: '1px solid #222222',
      },
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
	      border: '1px solid #D32F2F',
      },
    },
  },
  shadow: {
    light: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    heavy: '0px 10px 15px rgba(0, 0, 0, 0.1)',
  },
  layout: {
    width: {
      large: '1020px',
      medium: '760px',
      small: '320px',
    },
  },
  mediaQuery: {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)',
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  name: 'dark',
  color: {
    primary: '#8C9EFF',
    secondary: '#364ECC',
    background: '#121212',
    surface: '#1E1E1E',
    disabled: '#555555',
    success: '#66BB6A',
    error: '#EF5350',
    warning: '#FFB300',
    text: '#000000',
    subtext: '#f1f1f1',
    lightGrey: '#999999',
    line: '#2D2D2D',
    border: '#3C3C3C',
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
        border: '1px solid #8C9EFF',
      },
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
	      border: '1px solid #8C9EFF',
      },
    },
    mono: {
      color: '#f1f1f1',
      fontWeight: '700',
      background: '#222222',
	    border: '1px solid #222222',
      hover: {
        color: '#999999',
        fontWeight: '600',
        background: 'transparent',
        border: '1px solid #444444',
      },
    },
    monoOutline: {
      color: '#999999',
      fontWeight: '600',
      background: 'transparent',
      border: '1px solid #444444',
      hover: {
        color: '#f1f1f1',
        fontWeight: '700',
        background: '#222222',
	      border: '1px solid #222222',
      },
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
	      border: '1px solid #D32F2F',
      },
    },
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  return themeName === 'dark' ? darkTheme : lightTheme;
};
