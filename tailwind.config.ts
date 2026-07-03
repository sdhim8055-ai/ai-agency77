import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#001944",
        "secondary": "#afc6ff",
        "surface": "#131313",
        "on-tertiary-container": "#51504f",
        "error": "#ffb4ab",
        "on-surface": "#e5e2e1",
        "on-secondary-container": "#002760",
        "inverse-on-surface": "#313030",
        "primary-container": "#00d4ff",
        "surface-tint": "#3cd7ff",
        "tertiary": "#e1dedd",
        "on-error-container": "#ffdad6",
        "on-background": "#e5e2e1",
        "tertiary-container": "#c5c2c2",
        "surface-container-highest": "#353534",
        "on-primary-container": "#00586b",
        "background": "#131313",
        "primary-fixed-dim": "#3cd7ff",
        "on-primary-fixed": "#001f27",
        "surface-container": "#201f1f",
        "error-container": "#93000a",
        "primary": "#a8e8ff",
        "secondary-fixed-dim": "#afc6ff",
        "surface-variant": "#353534",
        "on-secondary-fixed-variant": "#00429a",
        "on-tertiary-fixed-variant": "#474646",
        "on-tertiary": "#313030",
        "on-error": "#690005",
        "surface-dim": "#131313",
        "on-surface-variant": "#bbc9cf",
        "on-secondary": "#002d6d",
        "secondary-fixed": "#d9e2ff",
        "surface-container-high": "#2a2a2a",
        "on-primary-fixed-variant": "#004e5f",
        "inverse-primary": "#00677e",
        "surface-bright": "#393939",
        "inverse-surface": "#e5e2e1",
        "outline-variant": "#3c494e",
        "secondary-container": "#548dff",
        "surface-container-low": "#1c1b1b",
        "surface-container-lowest": "#0e0e0e",
        "tertiary-fixed": "#e5e2e1",
        "outline": "#859398",
        "primary-fixed": "#b4ebff",
        "on-primary": "#003642",
        "on-tertiary-fixed": "#1c1b1b",
        "tertiary-fixed-dim": "#c9c6c5"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "stack-sm": "12px",
        "stack-md": "24px",
        "base": "8px",
        "margin-desktop": "40px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "container-max": "1280px",
        "stack-lg": "48px"
      },
      fontFamily: {
        "subheading": ["Inter"],
        "headline-lg-mobile": ["Sora"],
        "headline-lg": ["Sora"],
        "mono-data": ["Geist"],
        "body-md": ["Inter"],
        "headline-xl": ["Sora"],
        "label-sm": ["Geist"]
      },
      fontSize: {
        "subheading": ["18px", {"lineHeight": "1.5", "letterSpacing": "0.02em", "fontWeight": "500"}],
        "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
        "mono-data": ["14px", {"lineHeight": "1.4", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "500"}]
      }
    },
  },
  plugins: [],
};
export default config;
