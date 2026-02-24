/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#facd04", // Deeper Gold
                secondary: "#e5e7eb",
                purple: {
                    light: "#a78bfa",
                    DEFAULT: "#5b21b6",
                    dark: "#1e0b4b", // Darker Purple
                    deep: "#0f0525", // Even Darker
                },
                gold: {
                    light: "#fef08a",
                    DEFAULT: "#facd04", // Richer Gold
                    dark: "#a16207",
                }
            },
            fontFamily: {
                barlow: ["Barlow", "sans-serif"],
                courier: ["Courier", "monospace"],
                aesthetic: ["'Playfair Display'", "serif"],
                modern: ["'Inter'", "sans-serif"],
                funky: ["'Bungee'", "cursive"],
            },
            animation: {
                "meteor-effect": "meteor 5s linear infinite",
                "float": "float 3s ease-in-out infinite",
                "ripple": "ripple 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                "spin-slow": "spin 8s linear infinite",
                "flap": "flap 0.4s ease-in-out infinite alternate",
                "text-shimmer": "text-shimmer 2s ease-in-out infinite alternate",
            },
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-1500px)",
                        opacity: "0",
                    },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                ripple: {
                    "0%": { transform: "scale(1)", opacity: "0.5" },
                    "100%": { transform: "scale(2.5)", opacity: "0" },
                },
                flap: {
                    "0%": { transform: "scaleX(1)" },
                    "100%": { transform: "scaleX(0.4)" },
                },
                "text-shimmer": {
                    "0%": { opacity: "0.5", filter: "blur(0px)" },
                    "100%": { opacity: "1", filter: "blur(0.5px)" },
                }
            },
        },
    },
    plugins: [],
}
