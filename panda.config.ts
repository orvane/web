import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,ts,svelte}'],

  // Files to exclude
  exclude: [],

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &"
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          red: {
            value: '#f72a3f',
          },
          darkred: {
            value: "#6e030e"
          }
        }
      }
    },
    semanticTokens: {
      colors: {
        neutral: {
          100: {
            value: {
              base: '{colors.red}',
              _dark: '{colors.darkred}'
            }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
