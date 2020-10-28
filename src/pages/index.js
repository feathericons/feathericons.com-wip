import Link from "next/link"
import PageWrapper from "../components/PageWrapper"
import dataset from "../data/dataset"

export default function Top() {
	return (
		<PageWrapper>
			<div className="spacer vstack">
				{dataset.map(each => (
					<Link key={each.name} href={`/${each.name}`}>
						{/* prettier-ignore */}
						<a>
						{each.name}
					</a>
					</Link>
				))}
			</div>
		</PageWrapper>
	)
}
