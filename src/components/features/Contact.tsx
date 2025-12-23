'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SparklesCore } from '@/components/ui/sparkles'
import { Textarea } from '@/components/ui/textarea'
import { motion, useInView } from 'framer-motion'
import { Check, Github, Linkedin, Loader2, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)

	const formRef = useRef(null)
	const isInView = useInView(formRef, { once: true, amount: 0.3 })

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			// Perform form submission logic here
			console.log('Form submitted:', { name, email, message })
			await new Promise((resolve) => setTimeout(resolve, 1000))
			setName('')
			setEmail('')
			setMessage('')
			setIsSubmitted(true)
			setTimeout(() => {
				setIsSubmitted(false)
			}, 5000)
		} catch (error) {
			console.error('Error submitting form:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className="bg-transparent relative w-full overflow-hidden py-16 md:py-24">
			<div
				className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
				style={{
					background: `radial-gradient(circle at center, #9b87f5, transparent 70%)`,
				}}
			/>

			<div className="relative z-10 container mx-auto px-4 md:px-6">
				<div className="border-border/40 bg-secondary/20 mx-auto max-w-5xl overflow-hidden rounded-[28px] border shadow-xl backdrop-blur-sm">
					<div className="grid md:grid-cols-2">
						<div className="relative p-6 md:p-10" ref={formRef}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="flex w-full gap-2">
								<h2 className="from-foreground to-foreground/80 mb-2 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">Contact</h2>
								<span className="text-primary relative z-10 w-full text-4xl font-bold tracking-tight italic md:text-5xl">Me</span>
								<SparklesCore
									id="tsparticles"
									background="transparent"
									minSize={0.6}
									maxSize={1.4}
									particleDensity={500}
									className="absolute inset-0 top-0 h-24 w-full"
									particleColor="#9b87f5"
								/>
							</motion.div>

							<motion.form
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								onSubmit={handleSubmit}
								className="mt-8 space-y-6">
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
									<motion.div className="space-y-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
										<Label htmlFor="name">Name</Label>
										<Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
									</motion.div>

									<motion.div className="space-y-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
									</motion.div>
								</div>

								<motion.div className="space-y-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
									<Label htmlFor="message">Message</Label>
									<Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" required className="h-40 resize-none" />
								</motion.div>

								<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
									<Button
										type="submit"
										disabled={isSubmitting}
										className="w-full bg-linear-to-b from-purple-500 to-purple-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
										{isSubmitting ? (
											<span className="flex items-center justify-center">
												<Loader2 className="mr-2 h-4 w-4 animate-spin" />
												Sending...
											</span>
										) : isSubmitted ? (
											<span className="flex items-center justify-center">
												<Check className="mr-2 h-4 w-4" />
												Message Sent!
											</span>
										) : (
											<span>Send Message</span>
										)}
									</Button>
								</motion.div>
							</motion.form>
						</div>

						<div className="mt-10 mb-5">
							<h3 className="mb-10 text-2xl font-semibold text-slate-300">Connect with Me</h3>
							<div className="mb-12 flex gap-8">
								<Link
									prefetch={false}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
									href="#">
									<Mail className="h-5 w-5 text-white" />
								</Link>
								<div className="text-md text-slate-300">
									<p>Email me at </p>
									<p>roshane1johnson[at]gmail.com</p>
								</div>
							</div>

							<div className="mb-12 flex gap-8">
								<Link
									prefetch={false}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
									href="#">
									<Phone className="h-5 w-5 text-white" />
								</Link>
								<div className="text-md text-slate-300">
									<p>Call me at </p>
									<p>+1 (876) 232-0468</p>
								</div>
							</div>

							<div className="mb-12 flex gap-8">
								<Link
									prefetch={false}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 px-2 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
									href="#">
									<MapPin className="h-5 w-5 text-white" />
								</Link>
								<div className="text-md text-slate-300">
									<p>Location at </p>
									<p>Hybrid (Jamaica), Remote (Globally)</p>
								</div>
							</div>

							<div className="flex space-x-12 py-7">
								<Link
									prefetch={false}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
									target="_blank"
									href="https://twitter.com/kendrip_">
									<Twitter className="h-5 w-5 text-white" />
								</Link>
								<Link
									prefetch={false}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
									target="_blank"
									href="#">
									<Github className="h-5 w-5 text-white" />
								</Link>
								<Link
									prefetch={false}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
									target="_blank"
									href="#">
									<Linkedin className="h-5 w-5 text-white" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
