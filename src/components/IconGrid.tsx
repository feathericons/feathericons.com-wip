import Link from "next/link"
import { IIcon } from "types"
import { rem } from "@zaydek/sorcery/dist/runtime"

interface SVGProps extends React.ComponentProps<"svg"> {
	// https://github.com/microsoft/TypeScript/issues/28631#issuecomment-472606019
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
				<div className="relative" style={{ paddingBottom: "100%" }}>
					<div className="absolute y-0 x-0">
						<div className="hstack align-center h-full">
							<SVG className="w-32 h-32" svg={icon.svgs.stroke} />
							<div className="absolute b-0 x-0">
								{/* TODO: Add tracking */}
								<div className="text-center text-13 leading-1.25 text-gray-600">{icon.name.kebab}</div>
							</div>
						</div>
					</div>
				</div>
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
				// gridGap: rem(12),
				gridTemplateColumns: `repeat(auto-fill, minmax(${rem(128)}, 1fr))`,
			}}
		>
			{children}
		</div>
	)
}
