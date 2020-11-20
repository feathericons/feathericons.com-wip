import * as Feather from "react-feather"
import BentoBox from "./BentoBox"
import Demos from "./Demos"
import Markdown from "./markdown.md"
import React from "react"
import { datasetAsMap } from "../../data/dataset"
import { IconBlock, IconGrid } from "../IconBlock"
import { IFeather, IIcon } from "../../types"
import { MDXProvider } from "@mdx-js/react"
import { toTitleCase } from "@zaydek/lib/dist/helpers"

function More({ name }: { name: string }) {
	const metadata = datasetAsMap[name]
	return (
		<IconGrid>
			{metadata.more.map(each => (
				<IconBlock key={each} icon={datasetAsMap[each]} />
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
					KebabCase: () => name,
					TitleCase: () => toTitleCase(name),

					JavasScript: () => `<i data-feather="${name}"></i>`,
					ReactJS: () => `<${toTitleCase(name)} />`,
					VueJS: () => `<${toTitleCase(name)} />`,
					AlpineJS: () => `<${toTitleCase(name)} />`,
					SvelteJS: () => `<${toTitleCase(name)} />`,

					BentoBox: () => <BentoBox icon={icon} />,
					Demos,
					More: () =>
						!metadata.more.length ? null : (
							<>
								<h2>More Icons</h2>
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
