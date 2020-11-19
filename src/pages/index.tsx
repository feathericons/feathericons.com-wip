import AppBackpack from "components/AppBackpack"
import datasetAsArray from "data/datasetAsArray"
import React from "react"
import { Icon, IconGrid } from "components/Icon"

export default function Home() {
	return (
		<AppBackpack>
			<IconGrid>
				{/* TODO */}
				{datasetAsArray.map(each => (
					<Icon icon={each} />
				))}
			</IconGrid>
		</AppBackpack>
	)
}
