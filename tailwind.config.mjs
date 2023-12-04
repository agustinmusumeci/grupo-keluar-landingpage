/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
			sans : ["TT Firs Neue Regular",...defaultTheme.fontFamily.sans],
			keluar_medium : ["TT Firs Neue Medium",...defaultTheme.fontFamily.sans],
			keluar_light : ["TT Firs Neue Light",...defaultTheme.fontFamily.sans],
			keluar_extralight : ["TT Firs Neue ExtraLight",...defaultTheme.fontFamily.sans],
			keluar_bold : ["TT Firs Neue Bold",...defaultTheme.fontFamily.sans],
		},
		colors : {
			keluar: "#214433"
		},
		backgroundImage: {
			"green-keluar": "url('./public/images/bg-green.png')"
		},
		backgroundSize: {
			"100" : "100%"
		}
	},
},
	plugins: [],
}
