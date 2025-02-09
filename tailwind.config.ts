import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: 'var(--bg-brand)'
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        error: 'var(--bg-error)',
        warning: 'var(--bg-warning)',
        success: 'var(--bg-success)',
        info: 'var(--bg-info)',
        brand: 'var(--bg-brand)'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        error: 'var(--text-error)',
        warning: 'var(--text-warning)',
        success: 'var(--text-success)',
        info: 'var(--text-info)',
        brand: 'var(--text-brand)'
      },
      borderColor: {
        main: 'var(--border-main)',
        success: 'var(--border-success)',
        warning: 'var(--border-warning)',
        error: 'var(--border-error)',
        info: 'var(--border-info)',
        brand: 'var(--border-brand)'
      },
      outlineColor: {
        success: 'var(--outline-success)',
        warning: 'var(--outline-warning)',
        error: 'var(--outline-error)',
        info: 'var(--outline-info)',
        brand: 'var(--outline-brand)'
      },
      placeholderColor: {
        main: 'var(--text-placeholder)'
      },
    },
  },
  plugins: [],
} satisfies Config;
