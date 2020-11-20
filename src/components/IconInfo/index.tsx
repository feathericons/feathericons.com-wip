// import * as Feather from "react-feather"
import MarkdownDocs from "./doc.md"
import React from "react"
import { datasetAsMap } from "../../data/dataset"
import { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6 } from "./Demos"
import { GitHub as SVGGitHub } from "react-feather"
import { Icon, IconGrid } from "../Icon"
import { MDXProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"
// TODO

// // TODO
// function BentoBox() {
// 	return (
// 		<div className="hstack bg-gray-100" style={{ height: rem(320) }}>
// 			<div className="vstack">
// 				<SVGGitHub className="w-48 h-48" />
// 			</div>
// 		</div>
// 	)
// }
//
// function Demos() {
// 	return (
// 		<div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}>
// 			<Demo1 />
// 			<Demo2 />
// 			<Demo3 />
// 			<Demo4 />
// 			<Demo5 />
// 			<Demo6 />
// 		</div>
// 	)
// }

function More({ name }: { name: string }) {
	const icon = datasetAsMap[name]
	return (
		<IconGrid>
			{icon.more.map(each => (
				<Icon icon={datasetAsMap[each]} />
			))}
		</IconGrid>
	)
}

export default function IconInfo({ name }: { name: string }) {
	return (
		<div className="prose">
			<MDXProvider
				components={{
					IconName: () => name,
					FeatherIconName: () => `<i data-feather=${name}></i>`,
					// BentoBox,
					// Demos,

					// TODO
					More: () => <More name={name} />,
				}}
			>
				<MarkdownDocs />
			</MDXProvider>
		</div>
	)
}
