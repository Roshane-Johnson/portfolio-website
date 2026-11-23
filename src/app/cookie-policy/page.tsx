import React from 'react'

const CookiePolicyPage: React.FC = () => {
	return (
		<div className="pt-40">
			<div className="relative mx-auto max-w-2xl sm:text-center">
				<div className="relative z-10 text-center">
					<h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">Cookie Policy</h3>
					<p className="font-geist text-foreground/60 mt-3">
						This policy specifically explains how we, our partners, and users of our services deploy cookies, as well as the options you have to control them.
					</p>
				</div>
				<div
					className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
					style={{
						background: 'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
					}}></div>
			</div>
			<hr className="bg-foreground/30 mx-auto mt-5 mb-10 h-px w-1/2" />
			<div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', lineHeight: 1.6 }}>
				<h1>Cookie Policy</h1>

				<h2>1. Introduction</h2>
				<p>This Cookie Policy explains how cookies and similar technologies are used on this website. By using the website, you consent to the use of cookies as described in this policy.</p>

				<h2>2. What Are Cookies?</h2>
				<p>
					Cookies are small text files stored on your device when you visit a website. They allow the site to recognize your device and remember certain information, such as preferences, login
					status, and activity on the site. Cookies help improve browsing experience and analyze site usage.
				</p>

				<h2>3. Types of Cookies Used</h2>
				<ul>
					<li>
						<strong>Strictly Necessary Cookies:</strong> Essential for the website to function, including navigation and secure areas.
					</li>
					<li>
						<strong>Performance and Analytics Cookies:</strong> Collect anonymous information about how visitors use the website to improve performance.
					</li>
					<li>
						<strong>Functionality Cookies:</strong> Remember preferences such as language or theme for a personalized experience.
					</li>
					<li>
						<strong>Advertising and Targeting Cookies:</strong> Track browsing activity to deliver relevant marketing content.
					</li>
				</ul>

				<h2>4. Third-Party Cookies</h2>
				<p>
					Third-party cookies may be set by analytics providers, social media widgets, or advertising networks. These parties may collect information about your activity across websites. We are
					not responsible for third-party cookies and recommend reviewing their policies.
				</p>

				<h2>5. Managing Cookies</h2>
				<p>Cookies can be managed through browser settings. Options include deleting, blocking, or receiving notifications about cookies. Disabling cookies may affect website functionality.</p>

				<h2>6. Consent</h2>
				<p>
					By using the website without changing cookie settings, you consent to the use of cookies. Consent can be withdrawn at any time by adjusting browser settings or using third-party opt-out
					tools.
				</p>

				<h2>7. Data Protection and Privacy</h2>
				<p>Information collected via cookies is handled in accordance with privacy regulations. Cookies do not collect personally identifiable information unless voluntarily provided.</p>

				<h2>8. Updates to This Policy</h2>
				<p>This policy may be updated to reflect changes in law, practices, or website functionality. Updates are posted here with the effective date.</p>

				<p>
					<strong>Effective Date:</strong> 18 December 2025
				</p>
			</div>
		</div>
	)
}

export default CookiePolicyPage
