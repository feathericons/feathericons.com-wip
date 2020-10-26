import Link from "next/link"
import PageWrapper from "../components/PageWrapper"
import dataset from "../data/dataset"
import useBreakpoints from "../utils/useBreakpoints"

function Icons() {
	const screen = useBreakpoints()
	return (
		<div className="spacer vstack">
			{/* prettier-ignore */}
			<div className="sticky t-0 xl:-mt-24 xl:pt-24">
				hello
			</div>
			{dataset.map(each => (
				<Link key={each.name} href={`/${each.name}`}>
					{/* prettier-ignore */}
					<a>
						{each.name}
					</a>
				</Link>
			))}
		</div>
	)
}

export default function Top() {
	return (
		<PageWrapper>
			<Icons />
		</PageWrapper>
	)
}
