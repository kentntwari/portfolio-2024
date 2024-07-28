import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "728px",
      lg: "834px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1440px",
      "4xl": "1536px",
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
            fontWeight: 700,
          },
        ],
        "4xl": [
          "3rem",
          {
            lineHeight: "3.5rem",
            fontWeight: 700,
          },
        ],
        "3xl": [
          "2rem",
          {
            lineHeight: "2.75rem",
            fontWeight: 700,
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2.25rem",
            fontWeight: 700,
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.875rem",
            fontWeight: 500,
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 500,
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 400,
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.375rem",
            fontWeight: 400,
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            fontWeight: 400,
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
    },
  },
  plugins: [],
} satisfies Config;
