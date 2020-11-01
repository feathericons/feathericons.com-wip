import AppWrapper from "components/AppWrapper"
import dataset from "data/dataset"
import Link from "next/link"

export default function Home() {
	return (
		<AppWrapper>
			<div className="spacer vstack">
				{dataset.map(each => (
					<Link key={each.name.kebab} href={`/${each.name.kebab}`}>
						{/* prettier-ignore */}
						<a>
						{each.name.kebab}
					</a>
					</Link>
				))}
			</div>
		</AppWrapper>
	)
}
