import App from "../components/App"
import { datasetAsArr } from "../data/dataset"
import { Icon, IconGrid } from "../components/Icon"

export default function Home() {
	return (
		<App>
			<IconGrid>
				{datasetAsArr.map(each => (
					<Icon key={each.name} icon={each} />
				))}
			</IconGrid>
		</App>
	)
}
