const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Noto Sans Variable", ...defaultTheme.fontFamily.sans],
		},
		lineColor: {
			primary: "#e5e5e5",
			secondary: "#9ca3af",
			"brand-solid": "#4f46e5",
			success: "#bbf7d0",
			"success-subtle": "#f0fdf4",
			"focus-brand": "rgba(68, 76, 231, 0.12)"
		},
		borderColor: ({ theme }) => ({
			primary: theme("lineColor.primary"),
			secondary: theme("lineColor.secondary"),
			success: theme("lineColor.success"),
			"brand-solid": theme("lineColor.brand-solid"),
		}),
		backgroundColor:
			({ theme }) => ({
				primary: "#fff",
				secondary: "#e5e7eb",
				"success-subtle": theme("lineColor.success-subtle"),
			}),
		ringColor: ((theme) => ({
			brand: theme("lineColor.focus-brand"),
		})),
		textColor: {
			primary: "#171717",
			secondary: "#525252",
			tertiary: "#737373",
			brand: "#4338ca",
			success: "#15803d",
		},
		fontSize: {
			sm: [
				"0.875rem",
				{
					lineHeight: "1.25rem",
					fontWeight: "400",
				},
			],
			base: [
				"1rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "400",
				},
			],
			lg: [
				"1.125rem",
				{
					lineHeight: "1.5rem",
					fontWeight: "600",
				},
			],
		},
		boxShadow: {
			base: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
		},
		extend: {
			spacing: {
				min: "1px",
			},
		},
	},
	plugins: [],
};
