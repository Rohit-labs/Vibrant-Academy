/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "brand-teal": "#0891B2",
        "brand-purple": "#7B2D8B",
        "brand-navy": "#1E2D6B",
        "brand-yellow": "#F5C518",
        "brand-whatsapp": "#25D366",
        "brand-gold": "#D97706"
      },
      borderRadius: {
        "lg": "12px",
        "xl": "16px",
        "full": "9999px"
      },
      spacing: {
        "stack_sm": "8px",
        "stack_xs": "4px",
        "margin_mobile": "16px",
        "stack_xl": "80px",
        "stack_lg": "48px",
        "navbar_height": "70px",
        "container_max_width": "1280px",
        "gutter": "32px",
        "stack_md": "24px"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "dancing": ["Dancing Script", "cursive"],
        "headline-h1": ["Poppins"],
        "body-md": ["Poppins"],
        "label-md": ["Poppins"]
      }
    },
  },
  plugins: [],
}
