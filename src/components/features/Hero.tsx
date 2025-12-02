'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'
import Earth from '../ui/Earth'
import TextRotate from '../ui/text-rotate'
import Image from 'next/image'

const Hero: React.FC = () => {
	return (
		<section className="relative w-full overflow-hidden bg-transparent pt-32 pb-10 font-light antialiased md:pt-20 md:pb-16">
			<div
				className="absolute top-0 right-0 h-1/2 w-1/2"
				style={{
					background: 'radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)',
				}}
			/>
			<div
				className="absolute top-0 left-0 h-1/2 w-1/2 -scale-x-100"
				style={{
					background: 'radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)',
				}}
			/>

			<div className="relative z-10 container mx-auto max-w-2xl px-4 pt-7 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
					<Badge variant="outline" className=" border-[#9b87f5]/30 bg-[#9b87f5]/5 rounded-full px-4 py-1 text-xs mb-6 text-[#9b87f5] tracking-wide">
						REBUILDING JAMAICA STRONGER AFTER STORM MELISSA
					</Badge>
					<h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-[3.7rem] tracking-tight">
						Get Online with
						<span>
							<TextRotate
								texts={['Stunning ✽', 'AI-Powered', 'High Quality']}
								mainClassName="flex justify-center md:inline-flex text-center text-[#9b87f5] mx-auto w-[350px] tracking-tight"
								staggerFrom={'last'}
								initial={{ y: '100%' }}
								animate={{ y: 0 }}
								exit={{ y: '-125%' }}
								staggerDuration={0.025}
								splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-3"
								transition={{ type: 'spring', damping: 30, stiffness: 400 }}
								rotationInterval={2000}
							/>
						</span>
						Websites
					</h1>

					<p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">Stop losing customers to competitors. Get in the game with an AI-powered website.</p>

					<div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
						<Link
							prefetch={false}
							href="#!"
							className="text-sm neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-linear-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 sm:w-auto">
							Get My Business Online
						</Link>
						<a href="#how-it-works" className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto">
							<span>Learn how it works</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
								<path d="m6 9 6 6 6-6"></path>
							</svg>
						</a>
					</div>
				</motion.div>
				<motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
					<Earth baseColor={[0.608, 0.529, 0.961]} markerColor={[0.608, 0.529, 0.961]} glowColor={[0.608, 0.529, 0.961]} />
					<div className="w-[90vw] absolute top-[35%] left-1/2 -translate-x-1/2 z-10 mx-auto overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)] mt-4">
						<Image src="hero.png" alt="Lunexa Dashboard" width={1920} height={1080} className="h-full w-full rounded-lg border border-white/10" />
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
