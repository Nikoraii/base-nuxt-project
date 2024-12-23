import daisyui from "daisyui";
import tailTypography from "@tailwindcss/typography";
import tailPrime from "tailwindcss-primeui";
import { dark, light } from "daisyui/src/theming/themes";

const colors = {
  msRed: {
    400: "#e41334",
  },
  msGray: {
    200: "#262626",
    400: "#353535",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "ms-gray": {
          200: colors.msGray[200],
          400: colors.msGray[400],
        },
        "ms-red": {
          400: colors.msRed[400],
        },
      },
      fontFamily: {
        nulshock: "Nulshock, sans-serif",
        prompt: "Prompt, sans-serif",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...light,
          primary: "#e41334",
        },
      },
      {
        dark: {
          ...dark,
          primary: "#e41334",
        },
      },
    ],
  },
  plugins: [tailTypography, tailPrime, daisyui],
};
