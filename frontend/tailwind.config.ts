import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#F2F2F2',
        primaryLight: '#0F4C81',
        primaryDark: '#0F4C81',
        secondaryLight: '#F2F2F2',
        secondaryDark: '#F2F2F2',
        textPrimary: '#0F4C81',
        textSecondary: '#F2F2F2',
      }
    },
  },
  plugins: [],
}
export default config
