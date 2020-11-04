import dataset from "data/dataset"
import Markdown from "./icon-docs.md"
import { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6 } from "components/Demos"
import { GitHub as SVGGitHub } from "react-feather"
import { IconGrid, LinkedIcon } from "components/IconGrid"
import { IIcon } from "types"
import { MDXProvider } from "@mdx-js/react"
import { rem } from "@zaydek/sorcery/dist/runtime"

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

function Recommended() {
	return (
		<IconGrid>
			{dataset.slice(0, 6).map(each => (
				<LinkedIcon key={each.name.kebab} icon={each} />
			))}
		</IconGrid>
	)
}

interface IconInfoProps extends React.ComponentProps<"div"> {
	icon: IIcon
}

// TODO: Use `stack-center` not `align-center`?
export default function IconInfo({ icon }: IconInfoProps) {
	return (
		<div className="prose">
			<MDXProvider
				components={{
					IconName: () => icon.name.kebab, // `<i data-feather=${icon.name.kebab}></i>`,
					BentoBox,
					Demos,
					Recommended,
				}}
			>
				<Markdown />
			</MDXProvider>
		</div>
	)
}
