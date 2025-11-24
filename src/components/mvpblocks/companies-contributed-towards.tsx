export default function CompaniesContributedTowards() {
	const companyLogos: { src: string; altText: string | '' }[] = [
		{ src: './PA_logo.gif', altText: '' },
		{ src: './JPS_logo.png', altText: '' },
		{ src: './thinknchange_logo.png', altText: '' },
	]
	return (
		<div
			className="h-[70vh] w-full overflow-hidden bg-[#0a0613]"
			style={{
				background: 'linear-gradient(135deg, #120b22 0%, #120b22 100%)',
			}}>
			<div className="mx-auto mt-32 w-full max-w-2xl">
				<div className="text-center text-3xl text-white">
					<span className="text-[#9b87f5]">Technical contributions</span>

					<br />

					<span>across industry leaders.</span>
				</div>

				<div className="mt-14 grid grid-cols-5 gap-4 items-center hover:grayscale-0 transition-all duration-300">
					{/* Load logos from config above */}
					{companyLogos.map((item, index) => (
						<img className="grayscale-100 hover:grayscale-0 transition-all duration-300" key={index} src={item.src} alt={item.altText} />
					))}
				</div>
			</div>

			<div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#9b87f5,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#9b87f5] after:bg-[#110f1b]"></div>
		</div>
	)
}
