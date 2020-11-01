import AppWrapper from "components/AppWrapper"
import dataset from "data/dataset"
import SmallText from "components/SmallText"
import { IconGrid, LinkedIcon } from "components/IconGrid"

export default function Home() {
	return (
		<AppWrapper>
			<IconGrid>
				{dataset.map(each => (
					<LinkedIcon key={each.name.kebab} icon={each} />
				))}
			</IconGrid>
			<div className="h-64" />
			<div className="prose">
				<SmallText />
			</div>
		</AppWrapper>
	)
}
