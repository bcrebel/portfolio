/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	fontFamily: {
    		sans: [
    			'PP Mori-Regular',
    			'sans-serif'
    		],
    		display: [
    			'PP Mori-SemiBold',
    			'sans-serif'
    		]
    	},
    	extend: {
    		colors: {
    			black: '#101110',
    			lime: '#E5F887',
				green: '#249A6B',
				purple: "#A259FF",
				orange: "#F0926C",
				lilac: "#FBC6F1"
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
