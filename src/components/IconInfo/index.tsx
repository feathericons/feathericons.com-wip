import Markdown from "./icon-docs.md"
import { Demo1, Demo2, Demo3, Demo4, Demo5, Demo6 } from "./Demos"
import { GitHub as SVGGitHub } from "react-feather"
// import { IIcon } from "types"
import { MDXProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"
// import { IconGrid, LinkedIcon } from "components/IconGrid"
// import dataset from "data/dataset.json"

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

// function Recommended() {
// 	return (
// 		<IconGrid>
// 			{dataset.slice(0, 6).map(each => (
// 				<LinkedIcon key={each.name.kebab} icon={each} />
// 			))}
// 		</IconGrid>
// 	)
// }

// {(Feather as { [key: string]: React.FC<Feather.Props> })[name]}

export default function IconInfo({ name }: { name: string }) {
	return (
		<div className="prose">
			<MDXProvider
				components={
					{
						// IconName: () => icon.name.kebab, // `<i data-feather=${icon.name.kebab}></i>`,
						// BentoBox,
						// Demos,
						// Recommended,
					}
				}
			>
				<Markdown />
			</MDXProvider>
		</div>
	)
}
