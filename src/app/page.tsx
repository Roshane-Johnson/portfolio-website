import Hero from '@/components/features/Hero'
import Navbar from '@/components/features/Navbar'
import Services from '@/components/features/Services'
import Companies from '@/components/features/Companies'
import AboutMe from '@/components/features/AboutMe'
import Contact from '@/components/features/Contact'
import HowItWorks from '@/components/features/HowItWorks'
import Footer from '@/components/features/Footer'

export default function Home() {
	return (
		<div
			className=" bg-[#0a0613] antialiased"
			style={{
				background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
			}}>
			<Navbar />
			<Hero />
			<Services />
			<Companies />
			<AboutMe />
			<HowItWorks />
			<Contact />
			<Footer />
		</div>
	)
}
