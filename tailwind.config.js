module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutral: {
        0: '#111111',
        10: '#353436',
        20: '#605E61',
        30: '#ACA9AC',
        40: '#D4D4D4',
        50: '#E4E0E5',
        60: '#F6F6F6',
      },
      // Primary 색상
      primary: {
        0: '#7F00FF',
        10: '#560CB9',
        20: '#8857F9',
        30: '#9F7AFA',
        40: '#B79BFB',
        50: '#E8DCFD',
      },
      // Secondary 색상
      secondary: {
        0: '#EF89FF',
        10: '#6D1D86',
        20: '#EBB1FC',
        30: '#F8D8FD',
        40: '#FBECFB',
        50: '#FEF7FA',
      },
      // Error 색상
      error: {
        0: '#DE3730',
        10: '#410002',
        20: '#FF5449',
        30: '#FF897D',
        40: '#FFDAD6',
      },
      // Background 색상
      background: {
        A: '#FFFFFF',
        B: '#FBEEFE',
        C: '#FEF8FC',
        D: '#FEF7FF',
      },
    },
    extend: {
      fontFamily: {
        pretendard: ['Pretendard Variable', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'heading-h1': [
          '96px',
          {
            lineHeight: '120%',
            letterSpacing: '-0.025em',
            fontWeight: '700',
          },
        ],
        'heading-h2': [
          '60px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '700' },
        ],
        'heading-h3': [
          '48px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '600' },
        ],
        'heading-h4': [
          '32px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '600' },
        ],

        // Subtitles
        'subtitle-h1': [
          '36px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '500' },
        ],
        'subtitle-h2': [
          '32px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '500' },
        ],
        'subtitle-h3': [
          '24px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '600' },
        ],
        'subtitle-h4': [
          '20px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '600' },
        ],

        // Headlines
        'headline-1': [
          '16px',
          { lineHeight: '140%', letterSpacing: '-0.025em', fontWeight: '500' },
        ],
        'headline-2': [
          '14px',
          { lineHeight: '140%', letterSpacing: '-0.025em', fontWeight: '500' },
        ],

        // Body Text
        'body-1': [
          '16px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '400' },
        ],
        'body-2': [
          '14px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '400' },
        ],

        // Buttons
        'button-1': [
          '16px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '600' },
        ],
        'button-2': [
          '13px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '600' },
        ],
        'button-3': [
          '12px',
          { lineHeight: '120%', letterSpacing: '-0.025em', fontWeight: '500' },
        ],

        // Caption & Badge
        caption: [
          '12px',
          { lineHeight: '140%', letterSpacing: '-0.025em', fontWeight: '400' },
        ],
        badge: [
          '11px',
          { lineHeight: '140%', letterSpacing: '-0.025em', fontWeight: '400' },
        ],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
