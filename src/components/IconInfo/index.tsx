import * as Feather from "react-feather"
import Demos from "./Demos"
import Markdown from "./markdown.md"
import React from "react"
import { datasetAsMap } from "../../data/dataset"
import { Icon, IconGrid } from "../Icon"
import { IFeather } from "../../types"
import { MDXProvider } from "@mdx-js/react"
import { toTitleCase } from "@zaydek/lib/dist/helpers"

function BentoBox({ icon }: { icon: React.FC<Feather.Props> }) {
	return (
		// prettier-ignore
		<div className="hstack stack-center h-320 bg-gray-100">
			{React.createElement(icon, { className: "w-48 h-48" })}
		</div>
	)
}

function More({ name }: { name: string }) {
	const icon = datasetAsMap[name]
	return (
		<IconGrid>
			{icon.more.map(each => (
				<Icon key={each} icon={datasetAsMap[each]} />
			))}
		</IconGrid>
	)
}

export default function IconInfo({ name }: { name: string }) {
	const icon = (Feather as IFeather)[toTitleCase(name)]

	return (
		<div className="prose">
			<MDXProvider
				components={{
					IconName: () => name,
					FeatherIconName: () => `<i data-feather="${name}"></i>`,
					BentoBox: () => <BentoBox icon={icon} />,
					Demos,
					More: () =>
						!datasetAsMap[name].more.length ? null : (
							<>
								<h2>
									More Icons Like <code>{name}</code>
								</h2>
								<div>
									<More name={name} />
								</div>
							</>
						),
				}}
			>
				<Markdown />
			</MDXProvider>
		</div>
	)
}
