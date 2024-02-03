/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ["./dist/*.html"],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1.25rem",
			},
			colors: {
				primary: '#00D991',
				dark: "#171923",
				light: "#fff",
				body: "#1D1E28"
			},
		},
	},
	plugins: [],
};
