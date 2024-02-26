import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      'sm': '640px',
      'md': '768px',
      'mdplus': '890px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {

        'background': 'hsl(var(--clr-background))',
        'foreground': 'hsl(var(--clr-foreground))',

        'accent': 'hsl(var(--clr-accent))',

        'neutral-light': 'hsl(var(--clr-neutral-light))',
        'neutral-md': 'hsl(var(--clr-neutral-md))',
        'neutral-dark': 'hsl(var(--clr-neutral-dark))',
        
        'btn': 'hsl(var(--clr-btn))',
        'btn-text': 'hsl(var(--clr-btn-text))',
        'btn-loader': 'hsl(var(--clr-btn-loader))',

        'input': 'hsl(var(--clr-input))',
        'input-text': 'hsl(var(--clr-input-text))'
      },
    },
  },
  plugins: [],
}
export default config
