import React from 'react'

const Projects: React.FC = () => {
	return (
		<div className="pt-40">
			<div className="relative mx-auto max-w-2xl sm:text-center">
				<div className="relative z-10 text-center">
					<h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">Projects</h3>
					<p className="font-geist text-foreground/60 mt-3">A collection of projects I've developed for everyday internet users.</p>
				</div>
				<div
					className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
					style={{
						background: 'linear-gradient(152.92deg, rgba(29, 192, 15, 0.2) 4.54%, rgba(11, 192, 56, 0.26) 34.2%, rgba(15, 192, 18, 0.1) 77.55%)',
					}}></div>
			</div>
			<hr className="bg-foreground/30 mx-auto mt-5 mb-10 h-px w-1/2" />
			<div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', lineHeight: 1.6 }}></div>
		</div>
	)
}

export default Projects
