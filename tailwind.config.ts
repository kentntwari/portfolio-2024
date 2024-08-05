import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "834px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1728px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        body: ['"Rethink Sans"', "sans-serif"],
      },
      fontSize: {
        "5xl": [
          "4rem",
          {
            lineHeight: "4.5rem",
          },
        ],
        "4xl": [
          "3rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.75rem",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem",
          },
        ],
      },
      colors: {
        site: "hsl(var(--color-site))",
        light: "hsl(var(--color-light))",
        "very-dark-maroon": "hsl(var(--color-very-dark-maroon))",
        "very-light-maroon": "hsl(var(--color-very-light-maroon))",
        "ghost-light-maroon": "hsl(var(--color-ghost-light-maroon))",
      },
      cursor: {
        visit: "url(/visit-link.svg), pointer",
      },
    },
  },
  plugins: [],
} satisfies Config;
