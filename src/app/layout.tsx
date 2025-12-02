import type { Metadata } from 'next'
import { Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const geistSans = Plus_Jakarta_Sans({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})
const playfairDisplay = Playfair_Display({
	variable: '--font-playfair-display',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: "Roshane's Portfolio",
	description: 'The official home on the internet for the FullStack Developer, Roshane Johnson from Jamaica.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="bg-[#0a0613] dark">
			<body className={` ${geistMono.variable} ${playfairDisplay.variable} ${geistSans.variable} antialiased`}>{children}</body>
		</html>
	)
}
