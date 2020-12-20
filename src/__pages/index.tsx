import App from "../components/App"
import { datasetAsArr } from "../data/dataset"
import { IconGrid, IconSquare } from "../components/Icon"

export default function Home() {
	return (
		<App>
			<IconGrid>
				{datasetAsArr.map(each => (
					<IconSquare key={each.name} metadata={each} />
				))}
			</IconGrid>
		</App>
	)
}
