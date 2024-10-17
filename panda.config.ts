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
        white: {
          value: '#ffffff'
        },
        black: {
          value: "#000000"
        },
        red: {
          value: "#e61034"
        },
        orange: {
          value: "#e67e10"
        },
        green: {
          value: "#10e697"
        },
        blue: {
          value: "#106de6"
        },
        neutral: {
          50: {
            value: '#f6f6f6'
          },
          100: {
            value: '#e7e7e7'
          },
          200: {
            value: '#d1d1d1'
          },
          300: {
            value: '#b0b0b0'
          },
          400: {
            value: '#888888'
          },
          500: {
            value: '#6d6d6d'
          },
          600: {
            value: '#5d5d5d'
          },
          700: {
            value: '#4f4f4f'
          },
          800: {
            value: '#454545'
          },
          900: {
            value: '#3d3d3d'
          },
          950: {
            value: '#161616'
          }
        },
        pink: {
          50: {
            value: '#faf5ff'
          },
          100: {
            value: '#f2e8ff'
          },
          200: {
            value: '#e8d4ff'
          },
          300: {
            value: '#d1aaff'
          },
          400: {
            value: '#bd82fe'
          },
          500: {
            value: '#a353f9'
          },
          600: {
            value: '#8e31ec'
          },
          700: {
            value: '#7920d0'
          },
          800: {
            value: '#671faa'
          },
          900: {
            value: '#551b88'
          },
          950: {
            value: '#380665'
          }
        }
      }
    },
    semanticTokens: {
      colors: {
        brand: {
          primary: {
            value: {
              base: '{colors.pink.400}',
              _dark: '{colors.pink.400}'
            }
          }
        },
        bg: {
          primary: {
            value: {
              base: '{colors.neutral.50}',
              _dark: '{colors.neutral.950}'
            }
          },
          secondary: {
            value: {
              base: '{colors.neutral.100}',
              _dark: '{colors.neutral.800}',
            }
          },
          tertiary: {
            value: {
              base: '{colors.neutral.200}',
              _dark: '{colors.neutral.700}',
            }
          }
        },
        fg: {
          primary: {
            value: {
              base: '{colors.neutral.950}',
              _dark: '{colors.white}'
            }
          },
          secondary: {
            value: {
              base: '{colors.neutral.900}',
              _dark: '{colors.neutral.50}',
            }
          },
          tertiary: {
            value: {
              base: '{colors.neutral.700}',
              _dark: '{colors.neutral.200}',
            }
          },
          muted: {
            value: {
              base: '{colors.neutral.600}',
              _dark: '{colors.neutral.600}',
            }
          },
          accent: {
            value: {
              base: '{colors.pink.600}',
              _dark: '{colors.pink.400}'
            }
          }
        },
        border: {
          primary: {
            value: {
              base: "{colors.neutral.400}",
              _dark: "{colors.neutral.700}",
            }
          }
        },
        status: {
          info: {
            value: {
              base: '{colors.blue}',
              dark: '{colors.blue}',
            }
          },
          success: {
            value: {
              base: '{colors.green}',
              dark: '{colors.green}',
            }
          },
          warning: {
            value: {
              base: '{colors.orange}',
              dark: '{colors.orange}',
            }
          },
          error: {
            value: {
              base: '{colors.red}',
              dark: '{colors.red}',
            }
          },
        }
      }
    }
  },
  patterns: {
    input: {
      description: "Every element that allows user input",
      properties: {
        type: {
          type: 'enum',
          value: ['text', 'password'],
        },
        size: {
          type: 'enum',
          value: ['sm', 'md', 'lg']
        }
      },
      defaultValues: {
        type: 'text',
        size: 'md'
      },
      transform({ type, size, ...rest }) {
        const multiplier = {
          sm: 1,
          md: 2,
          lg: 3
        }[size] || 1;

        return {
          borderWidth: 2,
          borderColor: 'border.primary',
          borderRadius: 6 * 2,
          paddingX: 6 * 2,
          paddingY: 3 * 2,
          width: '100%',

          ...rest
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
