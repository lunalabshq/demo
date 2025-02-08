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
        brand: 'var(--brand)'
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        brand: 'var(--brand)'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
        error: 'var(--text-error)',
        warning: 'var(--text-warning)',
        success: 'var(--text-success)',
        brand: 'var(--brand)'
      },
      borderColor: {
        main: 'var(--border-main)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--border-error)',
        brand: 'var(--brand)'
      },
      outlineColor: {
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--outline-error)',
        brand: 'var(--brand)'

      },
      placeholderColor: {
        main: 'var(--text-placeholder)'
      },
    },
  },
  plugins: [],
} satisfies Config;
