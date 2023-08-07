import { Nav } from '@/components/content/nav/Nav'
import { ContentWrapper } from '@/components/ui/ContentWrapper'

export default function Home() {
	return (
		<main className='flex-grow'>
			<ContentWrapper>
				<Nav />
			</ContentWrapper>
		</main>
	)
}
