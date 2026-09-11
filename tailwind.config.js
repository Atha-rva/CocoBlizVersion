/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coco: {
          green: '#173F35',
          deep: '#0D2923',
          dark: '#101412',
          cream: '#F6F2E8',
          sand: '#DCCBA9',
          sandlight: '#E8DCC4',
          sanddark: '#C9B590',
        },
        accent: {
          gold: '#C4A35A',
          golddark: '#A8863E',
          goldlight: '#D9BE7E',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        display: ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        section: ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
