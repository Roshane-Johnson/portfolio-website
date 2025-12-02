'use client'

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/components/ui/marquee'
import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import Image from 'next/image'

const Companies: React.FC = () => {
	const [companyImages, _] = useState([
		{ src: '/JPS_logo.png', altText: 'Jamaica Public Service' },
		{ src: '/PA_logo.gif', altText: 'Palace Amusement Ltd.' },
		{ src: '/thinknchange_logo.png', altText: "ThnkN'Change" },
		{ src: '/ambergroup_logo.png', altText: 'My Amber Group' },
	])

	return (
		<div className="max-w-7xl mx-auto py-16">
			<div className="relative mx-auto max-w-2xl sm:text-center mb-10">
				<div className="relative z-10">
					<p className="mt-3 text-white/60 text-center">Technical Contribution Across Industry Leaders</p>
				</div>
				<div
					className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
					style={{
						background: 'linear-gradient(152.92deg, rgba(155, 135, 245, 0.2) 4.54%, rgba(155, 135, 245, 0.26) 34.2%, rgba(155, 135, 245, 0.1) 77.55%)',
					}}></div>
			</div>
			<div className="flex size-full items-center justify-center bg-transparent">
				<Marquee>
					<MarqueeFade side="left" className="md:from-[#110a20] from-transparent" />
					<MarqueeFade side="right" className="md:from-[#150d26]  from-transparent" />
					<MarqueeContent className="transition-all">
						{companyImages.map((image, index) => (
							<Tooltip key={index}>
								<TooltipTrigger asChild>
									<MarqueeItem className=" grayscale hover:grayscale-0 h-20 w-20 flex items-center justify-center" key={index}>
										<Image src={image.src} alt={image.altText} className="overflow-hidden" />
									</MarqueeItem>
								</TooltipTrigger>
								<TooltipContent>
									<p>{image.altText}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</MarqueeContent>
				</Marquee>
			</div>
		</div>
	)
}

export default Companies
