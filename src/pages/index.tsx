import AppWrapper from "components/AppWrapper"
import dataset from "data/dataset"
import { IconGrid, LinkedIcon } from "components/IconGrid"
import SmallText from "components/SmallText"

export default function Home() {
	return (
		<AppWrapper>
			{/* <div className="vstack s-64"> */}
			{/* TODO: Remove the need for s-0. */}
			{/* <div className="s-0"> */}
			{/* <div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(112px, 1fr))" }}> */}
			{/* TODO: Add `spacer`? */}
			<IconGrid>
				{dataset.map(each => (
					<LinkedIcon key={each.name.kebab} icon={each} />
				))}
			</IconGrid>
			{/* </div> */}
			{/* </div> */}
			<div className="h-64" />
			<div className="prose">
				<SmallText />
			</div>
			{/* </div> */}
		</AppWrapper>
	)
}
