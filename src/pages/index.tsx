import AppWrapper from "components/AppWrapper"
import dataset from "data/dataset"
import SmallText from "components/SmallText"
// import SorceryRuntime from "@zaydek/sorcery/dist/runtime"
import { IconGrid, LinkedIcon } from "components/IconGrid"
// import { useEffect } from "react"

export default function Home() {
	// useEffect(() => {
	// 	SorceryRuntime.init()
	// }, [])

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
