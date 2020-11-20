// TODO
import * as Feather from "react-feather"
import dataset_map from "../../data/dataset_map"
import MarkdownDocs from "./docs.md"
import React from "react"
import { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6 } from "./Demos"
import { GitHub as SVGGitHub } from "react-feather"
import { Icon, IconGrid } from "../Icon"
import { MDXProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"

// TODO
function BentoBox() {
	return (
		<div className="hstack bg-gray-100" style={{ height: rem(320) }}>
			<div className="vstack">
				<SVGGitHub className="w-48 h-48" />
			</div>
		</div>
	)
}

function Demos() {
	return (
		<div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}>
			<Demo1 />
			<Demo2 />
			<Demo3 />
			<Demo4 />
			<Demo5 />
			<Demo6 />
		</div>
	)
}

function SimilarIcons({ name }: { name: string }) {
	return (
		<IconGrid>
			{(dataset_map as { [key: string]: any })[name].common.map(each => (
				<Icon icon={dataset_map[each as string]} />
			))}
		</IconGrid>
	)
}

// {(Feather as { [key: string]: React.FC<Feather.Props> })[name]}

export default function IconInfo({ name }: { name: string }) {
	return (
		<div className="prose">
			<MDXProvider
				components={{
					// IconName: () => icon.name.kebab, // `<i data-feather=${icon.name.kebab}></i>`,
					// BentoBox,
					// Demos,
					SimilarIcons: () => <SimilarIcons name={name} />,
				}}
			>
				<MarkdownDocs />
			</MDXProvider>
		</div>
	)
}
