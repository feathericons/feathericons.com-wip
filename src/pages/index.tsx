import App from "../components/App"
import dataset_arr from "../data/dataset_arr"
import { Icon, IconGrid } from "../components/Icon"

export default function Home() {
	return (
		<App>
			<IconGrid>
				{dataset_arr.map(each => (
					<Icon icon={each} />
				))}
			</IconGrid>
		</App>
	)
}
