/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"spinner-grow": {
                    "0%": {
                        transform: "scale(0)",
                    },
      
                    "100%": {
                        transform: "none",
                        opacity: "1",
                    },
                },

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"spinner-grow": 'spinner-grow 1s ease-in-out 0.25s 1',
				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

					primary: "#106ad0",
					dark_pink: "#fed9d1",
					light_pink: "#ffeedd",
					light_blue:"#ebf2f9",
					orange:"#e27111",
					black: "#191919",
          "neon-gold":"#FDBD01",


			},
			fontFamily: {

				montserrat: [ "Montserrat", "sans-serif" ],
				pt_serif: [ "PT Serif", "serif" ],

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
