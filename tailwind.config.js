/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primary: {
					DEFAULT: '#10B981', // green-500
					dark: '#059669', // green-600
					light: '#34D399', // green-400
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: '#F3F4F6', // gray-100
					dark: '#D1D5DB', // gray-300
					light: '#E5E7EB', // gray-200
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: '#F59E0B', // yellow-500
					dark: '#D97706', // yellow-600
					light: '#FBBF24', // yellow-400
				},
				error: {
					DEFAULT: '#EF4444', // red-500
					dark: '#B91C1C', // red-700
				},
				background: {
					DEFAULT: '#FFFFFF', // white
					alt: '#F9FAFB', // gray-50
				},
				text: {
					primary: '#111827', // gray-900
					secondary: '#4B5563', // gray-600
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},

					muted: {
						DEFAULT: 'hsl(var(--muted))',
						foreground: 'hsl(var(--muted-foreground))'
					},
				
					destructive: {
						DEFAULT: 'hsl(var(--destructive))',
						foreground: 'hsl(var(--destructive-foreground))'
					},
				border: 'hsl(var(--border))',
					input: 'hsl(var(--input))',
					ring: 'hsl(var(--ring))',
					chart: {
						'1': 'hsl(var(--chart-1))',
						'2': 'hsl(var(--chart-2))',
						'3': 'hsl(var(--chart-3))',
						'4': 'hsl(var(--chart-4))',
						'5': 'hsl(var(--chart-5))'
					},
					sidebar: {
						DEFAULT: 'hsl(var(--sidebar-background))',
						foreground: 'hsl(var(--sidebar-foreground))',
						primary: 'hsl(var(--sidebar-primary))',
						'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
						accent: 'hsl(var(--sidebar-accent))',
						'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
						border: 'hsl(var(--sidebar-border))',
						ring: 'hsl(var(--sidebar-ring))'
					}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

