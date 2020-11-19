import * as Feather from "react-feather"
import AppBackpack from "components/AppBackpack"
import datasetAsArray from "data/datasetAsArray"
import React from "react"

export default function Home() {
	return (
		<AppBackpack>
			<div className="grid-cols-128 gap-16">
				{datasetAsArray.map(each => (
					<div key={each.name.kebab} className="aspect-ratio-1:1">
						<div className="group vstack stack-center space-16">
							{React.createElement((Feather as { [key: string]: React.FC<Feather.Props> })[each.name.title], {
								className: "w-32 h-32",
							})}
							<div className="absolute x-0 b-0">
								<div className="text-center text-14 leading-1.25 text-gray-600 group-on:underline">
									{each.name.kebab}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</AppBackpack>
	)
}
