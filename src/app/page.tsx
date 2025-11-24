import CompaniesContributedTowards from '@/components/mvpblocks/companies-contributed-towards'
import Services from '@/components/mvpblocks/services'
import Hero from '../components/ui/Hero'
import Navbar from '../components/ui/Navbar'

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
			<CompaniesContributedTowards />
		</div>
	)
}
