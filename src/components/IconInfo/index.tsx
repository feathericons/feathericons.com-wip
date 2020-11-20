import * as Feather from "react-feather"
import BentoBox from "./BentoBox"
import Demos from "./Demos"
import Markdown from "./markdown.md"
import React from "react"
import { datasetAsMap } from "../../data/dataset"
import { Icon, IconGrid } from "../Icon"
import { IFeather, IIcon } from "../../types"
import { MDXProvider } from "@mdx-js/react"
import { toTitleCase } from "@zaydek/lib/dist/helpers"

function More({ name }: { name: string }) {
	const metadata = datasetAsMap[name]
	return (
		<IconGrid>
			{metadata.more.map(each => (
				<Icon key={each} icon={datasetAsMap[each]} />
			))}
		</IconGrid>
	)
}

export default function IconInfo({ name }: { name: string }) {
	const icon = (Feather as IFeather)[toTitleCase(name)]
	const metadata = datasetAsMap[name]

	return (
		<div className="prose">
			<MDXProvider
				components={{
					IconName: () => name,
					FeatherIconName: () => `<i data-feather="${name}"></i>`,
					BentoBox: () => <BentoBox icon={icon} />,
					Demos,
					More: () =>
						!metadata.more.length ? null : (
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
