import * as Demos from "components/Demos"
import dataset from "data/dataset"
import markdown from "./IconInfoMarkdown.md"
import ProseMarkdown from "components/ProseMarkdown"
import { GitHub as SVGGitHub } from "react-feather"
import { IconGrid, LinkedIcon } from "components/IconGrid"
import { IIcon } from "types"
import { rem } from "@zaydek/sorcery/dist/runtime"

interface IconInfoProps {
	icon: IIcon
}

// TODO: https://github.com/zaydek/sorcery/issues/47

// TODO: Use `stack-center` not `align-center`?
export default function IconInfo({ icon }: IconInfoProps) {
	return (
		<div className="vstack space-64">
			<div className="vstack space-24">
				<ProseMarkdown markdown={`# The \`${"<" + icon.name.kebab + ">"}\` Icon`} />
				<div className="hstack bg-gray-100" style={{ height: rem(320) }}>
					<div className="vstack">
						<SVGGitHub className="w-48 h-48" />
					</div>
				</div>
			</div>
			<ProseMarkdown markdown={markdown} />
			<div className="vstack space-24">
				<ProseMarkdown markdown={`## Demos Using \`${"<" + icon.name.kebab + ">"}\``} />
				<div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}>
					<Demos.Demo1 />
					<Demos.Demo2 />
					<Demos.Demo3 />
					<Demos.Demo4 />
					<Demos.Demo5 />
					<Demos.Demo6 />
				</div>
			</div>
			<div className="vstack space-24">
				<ProseMarkdown markdown={`## Related to \`${"<" + icon.name.kebab + ">"}\``} />
				<IconGrid>
					{dataset.slice(0, 6).map(each => (
						<LinkedIcon key={each.name.kebab} icon={each} />
					))}
				</IconGrid>
			</div>
		</div>
	)
}
