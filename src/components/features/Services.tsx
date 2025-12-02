'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowRight, Code, RocketIcon, SearchIcon, Sparkles } from 'lucide-react'
import { Badge } from '../ui/badge'

const features = [
	{
		icon: <Code className="h-6 w-6" />,
		title: 'Custom Website Development',
		desc: 'Custom responsive websites that convert visitors into customers. By using smart tools for design and content, your site grows faster and performs better.',
	},
	{
		icon: <SearchIcon className="h-6 w-6" />,
		title: 'Google Business & Review Strategy',
		desc: 'Claim and optimize your Google Business profile and implement a proven review system that makes collecting authentic reviews effortless.',
	},
	{
		icon: <RocketIcon className="h-6 w-6" />,
		title: 'Growth & Conversion Strategy',
		desc: 'An actionable growth plan combining your website, Google presence, and customer engagement to optimize and increase traffic, leads, and sales efficiently.',
	},
]
export default function Services() {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring' as const, damping: 25 },
		},
	}
	return (
		<section className="relative py-14 font-light">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="relative mx-auto max-w-2xl sm:text-center">
					<div className="relative z-10">
						<Badge variant="outline" className="border-[#9b87f5]/20 bg-[#9b87f5]/5 rounded-full px-4 py-1 text-sm font-medium">
							<Sparkles className="text-[#9b87f5] mr-1 h-3.5 w-3.5" />
							Services
						</Badge>

						<h3 className="mt-4 text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl">Smart Development for</h3>
						<p className="font-serif font-stretch-extra-condensed mt-4 text-3xl font-normal tracking-tighter text-[#9b87f5]  sm:text-4xl md:text-5xl italic">Winning Brands</p>

						<p className="mt-3 text-white/60">My services will help you stay on track, keep things simple, and build a solid digital system.</p>
					</div>
					<div
						className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
						style={{
							background: 'linear-gradient(152.92deg, rgba(155, 135, 245, 0.2) 4.54%, rgba(155, 135, 245, 0.26) 34.2%, rgba(155, 135, 245, 0.1) 77.55%)',
						}}></div>
				</div>
				<div className="relative mt-12">
					<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((item, idx) => (
							<motion.div
								key={idx}
								variants={variants}
								className={cn(
									'group border-[#9b87f5]/10 bg-transparent hover:border-[#9b87f5]/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500'
								)}>
								<div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#31163d5e_1px,transparent_1px),linear-gradient(to_bottom,#31163d5e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

								<div className="text-[#9b87f5]/5 group-hover:text-[#9b87f5]/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">{item.icon}</div>

								<div className="relative z-10 flex h-full flex-col justify-between">
									<div>
										<div className="bg-[#9b87f5]/10 text-[#9b87f5] shadow-[#9b87f5]/10 group-hover:bg-[#9b87f5]/20 group-hover:shadow-[#9b87f5]/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
											{item.icon}
										</div>
										<h3 className="mb-2 text-xl font-semibold tracking-tight text-white">{item.title}</h3>
										<p className="text-muted-foreground text-sm">{item.desc}</p>
									</div>
									<div className="text-[#9b87f5] mt-4 flex items-center text-sm">
										<span className="mr-1">Learn more</span>
										<ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
									</div>
								</div>
								<div className="from-[#9b87f5] to-[#9b87f5]/30 absolute bottom-0 left-0 h-1 w-full bg-linear-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
							</motion.div>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
