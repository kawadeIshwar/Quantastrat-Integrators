import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          deep: "#E85D04",
          light: "#FFF7F0",
          cream: "#FFFAF6",
          black: "#0A0A0A",
          ink: "#1A1A2E",
          mist: "#F5F5F5"
        }
      },
      fontFamily: {
        display: ["var(--font-sora)", "Sora", "Poppins", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "radial-orange":
          "radial-gradient(60% 60% at 50% 40%, rgba(255,107,0,0.10) 0%, rgba(255,107,0,0) 70%)",
        "mesh-light":
          "radial-gradient(at 10% 10%, rgba(255,107,0,0.06) 0px, transparent 50%),radial-gradient(at 90% 20%, rgba(232,93,4,0.05) 0px, transparent 50%),radial-gradient(at 50% 100%, rgba(255,107,0,0.04) 0px, transparent 50%)",
        "hero-gradient":
          "linear-gradient(135deg, #FFFAF6 0%, #FFF3E8 30%, #FFE8D6 60%, #FFFAF6 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #FF6B00 0%, #E85D04 50%, #D45200 100%)",
        "card-shine":
          "linear-gradient(105deg, transparent 40%, rgba(255,107,0,0.03) 45%, rgba(255,107,0,0.06) 50%, rgba(255,107,0,0.03) 55%, transparent 60%)"
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 45s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(255,107,0,0.30)",
        "glow-sm": "0 0 24px rgba(255,107,0,0.20)",
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(255,107,0,0.06)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.06), 0 12px 40px rgba(255,107,0,0.12)",
        "soft": "0 2px 16px rgba(0,0,0,0.04)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};
export default config;
