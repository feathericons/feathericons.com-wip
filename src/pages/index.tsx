import AppWrapper from "../components/AppWrapper"
import dataset from "../data/dataset"
import Link from "next/link"

export default function Home() {
	return (
		<AppWrapper>
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
		</AppWrapper>
	)
}
