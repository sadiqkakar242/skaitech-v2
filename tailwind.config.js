/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f14",
        surface: "#0f1620",
        card: "#121a26",
        border: "#1f2a3a",
        muted: "#8a96a8",
        text: "#e6edf5",
        cyan: {
          DEFAULT: "#22d3ee",
          glow: "#67e8f9",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui"],
        body: ['Inter', "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 10px 40px -10px rgba(34,211,238,0.45)",
      },
      backgroundImage: {
        'grad-cyan': 'linear-gradient(135deg, #22d3ee 0%, #67e8f9 100%)',
        'radial-glow': 'radial-gradient(ellipse at top, rgba(34,211,238,0.18), transparent 60%)',
      },
    },
  },
  plugins: [],
}
