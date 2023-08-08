import { Nav } from '@/components/content/nav/Nav'
import { Pannel } from '@/components/pannel/Pannel'
import { ContentWrapper } from '@/components/ui/ContentWrapper'

export default function Home() {
	return (
		<main className='h-full flex flex-col lg:flex-row'>
			<Pannel />
			<ContentWrapper>
				<Nav />
			</ContentWrapper>
		</main>
	)
}
