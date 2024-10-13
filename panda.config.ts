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
    tokens: {
      colors: {
        accent: {
          purple: {
            light: {
              value: "#fff"
            },
            dark: {
              value: "#fff"
            }
          }
        },
        neutral: {
          100: {
            light: {
              value: '#888888'
            },
            dark: {
              value: '#161616',
            }
          },
          200: {
            light: {
              value: '#fff'
            },
            dark: {
              value: '#fff'
            }
          },
          300: {
            light: {
              value: "#fff"
            },
            dark: {
              value: "#fff"
            }
          },
          950: {
            light: {
              value: "#123"
            },
            dark: {
              value: "#987"
            }
          }
        }
      }

    },
    semanticTokens: {
      colors: {
        brand: {
          primary: {
            value: {
              base: '{colors.accent.pruple.light}',
              _dark: '{colors.accent.pruple.dark}'
            }
          }
        },
        bg: {
          primary: {
            value: {
              base: '{colors.neutral.100.light}',
              _dark: '{colors.neutral.100.dark}'
            }
          },
          secondary: {
            value: {
              base: '{colors.neutral.200.light}',
              _dark: '{colors.neutral.200.dark}',
            }
          },
          tertiary: {
            value: {
              base: '{colors.neutral.300.light}',
              _dark: '{colors.neutral.300.dark}',
            }
          }
        },
        fg: {
          primary: {
            value: {
              base: '{colors.neutral.950.light}',
              _dark: '{colors.neutral.950.dark}'
            }
          },
          secondary: {
            value: {
              base: '{colors.neutral.900.light}',
              _dark: '{colors.neutral.900.dark}',
            }
          },
          tertiary: {
            value: {
              base: '{colors.neutral.800.light}',
              _dark: '{colors.neutral.800.dark}',
            }
          },
          muted: {
            value: {
              base: '{colors.neutral.600.light}',
              _dark: '{colors.neutral.600.dark}',
            }
          }
        },
        status: {
          info: {
            value: {
              base: '{colors.accent.lightblue.light}',
              dark: '{colors.accent.darkblue.dark}',
            }
          },
          success: {
            value: {
              base: '{colors.accent.lightgreen.light}',
              dark: '{colors.accent.darkgreen.dark}',
            }
          },
          warning: {
            value: {
              base: '{colors.accent.lightorange.light}',
              dark: '{colors.accent.darkorange.dark}',
            }
          },
          error: {
            value: {
              base: '{colors.accent.lightred.light}',
              dark: '{colors.accent.darkred.dark}',
            }
          },
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
