import App from "../components/App"
import { datasetAsArr } from "../data/dataset"
import { IconBlock, IconGrid } from "../components/IconBlock"

export default function Home() {
	return (
		<App>
			<IconGrid>
				{datasetAsArr.map(each => (
					<IconBlock key={each.name} icon={each} />
				))}
			</IconGrid>
		</App>
	)
}
