import Link from "next/link"
import { AspectRatio } from "@zaydek/sorcery/dist/runtime"
import { IIcon } from "types"
import { rem } from "@zaydek/sorcery/dist/runtime"

interface SVGProps extends React.ComponentProps<"svg"> {
	svg: React.ElementType
}

function SVG({ svg: SVG, ...props }: SVGProps) {
	return <SVG {...props} />
}

interface IconProps {
	icon: IIcon
}

export function LinkedIcon({ icon }: IconProps) {
	return (
		<Link href={`/${icon.name.kebab}`}>
			<a>
				<AspectRatio aspectRatio={1 / 1}>
					<div className="hstack align-center h-full">
						<SVG className="w-32 h-32" svg={icon.svgs.stroke} />
						<div className="absolute b-0 x-0">
							{/* TODO: Add tracking */}
							<div className="text-center text-13 leading-1.25 text-gray-600">{icon.name.kebab}</div>
						</div>
					</div>
				</AspectRatio>
			</a>
		</Link>
	)
}

interface IconGridProps {
	children?: React.ReactNode
}

export function IconGrid({ children }: IconGridProps) {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(auto-fill, minmax(${rem(128)}, 1fr))`,
			}}
		>
			{children}
		</div>
	)
}
