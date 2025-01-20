/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        signup_bg:
          "url('https://s3-alpha-sig.figma.com/img/7411/31d5/f00469f1f5b3f859a65599521f6a917f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHaYNPtyHq6OlsvCMXkaQ-YSAY5Cbjw0eVrNlVDH1CXktMQcneaYpqZlKppLvRWXyvy1SK4T3PjY5DTcrza0Gsx4OHsAE3ErtFARGJeYhjcs5mFuh3z77Vtvj4Y6MlAomaLkc80bloywGv1SvheJTX7CW0E9Df2CGbh7hcLwErnJLnB9swhF8KUNMEVDM3VHJPhEP7Jf4lvtMV-CzNaYRxVTlPgc-tdEd3y0t5j4qHMkQE8oq2VA2ZZCYD6Cm6A7zeddKndV1HR06iasKuYtVkatSaA0P6D9beIdbU1NO10jDUZCMZGfR1wUNbBLePo6o--amb3-3ssrcVux1QyImg__')",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },

    boxShadow: {
      custom: "0px 4px 12px 0px #10182814",
      custom1: "0px 4px 16px 0px #0000001F",
      custom2: " 0px 1px 2px 0px #1018280D",
    },

    letterSpacing: {
      "2-percent": "0.02em", // 2% letter spacing
    },

    backgroundImage: {
      "custom-gradient-progress-bar":
        "linear-gradient(90deg, #008080 0%, #F9DB6D 100%)",
    },
  },
  plugins: [animate],
};
