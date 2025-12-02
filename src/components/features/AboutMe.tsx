'use client'

import { cn } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import { Building, CheckCircle, Clock, DollarSign, LineChart, Sparkles, Zap } from 'lucide-react'
import { useTheme } from 'next-themes'
import { JSX, useRef } from 'react'
import { Badge } from '../ui/badge'
import NumberTicker from '../ui/number-ticker'

interface StatItemProps {
	value: number
	label: string
	icon: React.ReactNode
	delay?: number
	decimalPlaces?: number
	color?: string
	prefix?: string
	suffix?: string
}

const StatItem = ({ value, label, icon, delay = 0, decimalPlaces = 0, color = 'from-[#9b87f5] to-[#9b87f5]/70', prefix = '', suffix = '' }: StatItemProps) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, amount: 0.3 })
	const { resolvedTheme } = useTheme()

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
			transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
			className={cn('group border-border/30 bg-card relative overflow-hidden rounded-xl border p-6', resolvedTheme === 'dark' ? 'shadow-xl shadow-black/5' : 'shadow-lg shadow-black/3')}>
			<div className={cn('absolute -top-6 -right-6 h-24 w-24 rounded-full bg-linear-to-bg opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl', color)} />

			<div className="flex items-center gap-4">
				<div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-linear-to-bg text-white', color)}>{icon}</div>

				<div className="flex flex-col">
					<h3 className="flex items-baseline text-3xl font-bold tracking-tight">
						<span className="ml-1 text-3xl font-medium opacity-70">{prefix}</span>
						<NumberTicker value={value} decimalPlaces={decimalPlaces} className="tabular-nums" />
						<span className="ml-1 text-3xl font-medium opacity-70">{suffix}</span>
					</h3>
					<p className="text-muted-foreground text-sm font-medium">{label}</p>
				</div>
			</div>
		</motion.div>
	)
}

interface Stats {
	value: number
	label: string
	icon: JSX.Element
	delay: number
	color: string
	decimalPlaces: number
	prefix?: string
	suffix?: string
}

export default function AboutMe() {
	const aboutRef = useRef(null)
	const statsRef = useRef(null)
	const timelineRef = useRef(null)

	const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
	const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 })

	const stats: Stats[] = [
		{
			value: 52560,
			label: 'Code Hours',
			icon: <Clock className="h-5 w-5" />,
			delay: 0,
			color: 'from-rose-500 to-orange-500',
			decimalPlaces: 0,
			suffix: '+',
		},
		{
			value: 5,
			label: 'Years Experience',
			icon: <Clock className="h-5 w-5" />,
			delay: 0.1,
			color: 'from-blue-500 to-cyan-500',
			decimalPlaces: 0,
			suffix: '+',
		},
		{
			value: 14,
			label: 'Project Contributions',
			icon: <CheckCircle className="h-5 w-5" />,
			delay: 0.2,
			color: 'from-green-500 to-emerald-500',
			decimalPlaces: 0,
			suffix: '+',
		},
		{
			value: 467,
			label: 'AI Software Market',
			icon: <DollarSign className="h-5 w-5" />,
			delay: 0.3,
			color: 'from-purple-500 to-violet-500',
			decimalPlaces: 0,
			prefix: '$',
			suffix: 'B',
		},
	]

	return (
		<section className="relative w-full overflow-hidden pt-5 pb-16 md:py-24">
			{/* Background pattern */}
			<div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
				<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
							<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
			</div>

			<div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
				{/* Header Section with Badge */}
				<div className="relative mx-auto max-w-2xl sm:text-center mb-16">
					<div className="relative z-10">
						<Badge variant="outline" className="border-[#9b87f5]/20 bg-[#9b87f5]/5 rounded-full px-4 py-1 text-sm font-medium">
							<Sparkles className="text-[#9b87f5] mr-1 h-3.5 w-3.5" />
							About Me
						</Badge>

						<h3 className="mt-4 text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl">The Engineer Behind Your</h3>
						<p className="font-serif font-stretch-extra-condensed mt-4 text-3xl font-normal tracking-tighter text-[#9b87f5]  sm:text-4xl md:text-5xl italic">Digital Advantage</p>

						<p className="mt-3 text-white/60"> Your Imagination is the Blueprint. I am the Builder.</p>
					</div>
				</div>

				{/* Stats Section */}
				<div ref={statsRef} className="mb-20">
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{stats.map((stat, index) => (
							<StatItem
								key={index}
								value={stat.value}
								label={stat.label}
								icon={stat.icon}
								delay={stat.delay || index * 0.1}
								decimalPlaces={stat.decimalPlaces}
								color={stat.color}
								prefix={stat.prefix}
								suffix={stat.suffix}
							/>
						))}
					</div>
				</div>

				{/* About Content Section */}
				<div ref={aboutRef} className="relative mx-auto mb-20">
					<div className="grid gap-16 md:grid-cols-2">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
							className="relative space-y-6">
							<div className="from-[#9b87f5]/80 to-[#9b87f5]/60 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-bg text-white shadow-lg">
								<Zap className="h-6 w-6" />
							</div>

							<h2 className="text-2xl font-bold tracking-tight">My Mission</h2>

							<p className="text-muted-foreground text-base leading-relaxed">
								To help Jamaican businesses level up with practical, modern digital solutions that boost revenue, improve customer experience, and keep them ahead in a fast-changing tech
								world.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
							className="relative space-y-6">
							<div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-bg from-blue-500/80 to-blue-500/60 text-white shadow-lg">
								<LineChart className="h-6 w-6" />
							</div>

							<h2 className="text-2xl font-bold tracking-tight">My Vision</h2>

							<p className="text-muted-foreground text-base leading-relaxed">
								To become the go-to digital partner for Jamaican businesses, known for delivering real results through smart innovation, solid execution, and solutions that genuinely move
								companies forward.
							</p>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
						className="mt-16 flex items-start gap-4">
						<div className="from-[#9b87f5]/20 to-[#9b87f5]/5 text-[#9b87f5] inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-bg">
							<Building className="h-5 w-5" />
						</div>
						<p className="text-muted-foreground text-base leading-relaxed">
							Is your digital presence a cost center or your greatest growth engine? I help leaders bridge that gap. Stop spending on maintenance. Start investing in dominance.
						</p>
					</motion.div>
				</div>

				{/* Timeline Section */}
				<div ref={timelineRef} className="relative mx-auto max-w-4xl">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, ease: 'easeOut' }}
						className="mb-10 text-center text-2xl font-bold tracking-tight md:text-3xl">
						My Journey
					</motion.h2>

					<div className="border-border/60 relative ml-4 border-l pl-8 md:ml-0 md:border-none md:pl-0">
						{[
							{
								year: 'Jul 2020',
								title: 'Webmaster',
								company: 'Pixolon Digital',
								description:
									'Built and maintained company websites, implemented content updates, improved site performance and SEO, and established monitoring and backups to keep sites reliable.',
							},
							{
								year: 'Jul 2021',
								title: 'Trainee Software Developer',
								company: 'Amber Innovation (My Amber Group)',
								description:
									'Supported the engineering team by implementing features, fixing bugs, and writing tests; contributed to deployments and automation that helped scale services to 20+ countries.',
							},
							{
								year: 'Feb 2023',
								title: 'Software Developer',
								company: 'Amber Innovation (My Amber Group)',
								description:
									'Owned end-to-end features and integrations, improved system reliability and performance, and collaborated on product architecture—contributing to recognized, production-ready solutions.',
							},
							{
								year: 'Feb 2024',
								title: 'Software Developer',
								company: 'ThinkNChange',
								description:
									'Delivered new product features and service integrations, worked with stakeholders to define requirements, and helped launch offerings targeted to evolving market needs.',
							},
							{
								year: 'Jun 2024',
								title: 'Software Developer Technical Lead',
								company: 'ThinkNChange',
								description:
									'Led a small engineering team: mentored developers, drove architecture and delivery decisions, introduced CI/CD and best practices, and guided successful launches of core services.',
							},
							{
								year: 'Nov 2024 - Present',
								title: 'FullStack Software Developer',
								company: 'Freelance',
								description:
									'Designs and delivers end-to-end web and mobile applications for Jamaican businesses—handling requirements, development, deployment, and ongoing maintenance to improve client outcomes.',
							},
						].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
								transition={{
									duration: 0.5,
									delay: 0.1 * index,
									ease: 'easeOut',
								}}
								className="relative mb-10 md:grid md:grid-cols-5 md:gap-8">
								<div className="md:col-span-1">
									<div className="border-border bg-card absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold md:static md:h-auto md:w-auto md:rounded-none md:border-none md:bg-transparent md:text-xl">
										{item.year}
									</div>
								</div>
								<div className="md:col-span-4">
									<h3 className="text-lg font-bold md:text-xl">
										{item.title} -<span className="ml-1 text-sm font-medium  text-[#9b87f5]">{item.company}</span>
									</h3>
									<p className="text-muted-foreground mt-1">{item.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
