import { Code, Terminal, Paintbrush, Rocket, Book, PlusCircle, SearchIcon, ChartBarIncreasingIcon, LineChartIcon, RocketIcon } from 'lucide-react'

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
	return (
		<section className="relative py-14 font-light">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8">
				<div className="relative mx-auto max-w-2xl sm:text-center">
					<div className="relative z-10">
						<span className="mb-4 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 font-normal text-xs text-[#9b87f5]">My Services</span>

						<h3 className="mt-4 text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl">Smart Development for</h3>
						<p className="font-serif font-stretch-extra-condensed mt-4 text-3xl font-normal tracking-tighter text-[#9b87f5]  sm:text-4xl md:text-5xl italic">Winning Brands</p>

						<p className="mt-3 text-white/60">Our services will help you stay on track, keep things simple, and build a solid digital system.</p>
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
							<li key={idx} className="transform-gpu space-y-3 rounded-xl border border-[#140c25]/60 bg-transparent px-5 py-4 [box-shadow:0_-20px_80px_-20px_#9b87f52f_inset]">
								<div className="w-fit transform-gpu rounded-full border border-[#9b87f5] p-4 [box-shadow:0_-20px_80px_-20px_#9b87f53f_inset]" style={{ color: '#9b87f5' }}>
									{item.icon}
								</div>
								<h4 className="font-geist text-lg font-semibold tracking-tighter text-white">{item.title}</h4>
								<p className="text-gray-300">{item.desc}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
