import Link from "next/link"
import { IIcon } from "types"

interface SVGProps {
	// https://github.com/microsoft/TypeScript/issues/28631#issuecomment-472606019
	svg: React.ElementType
	props: React.ReactPropTypes
}

function SVG({ svg: SVG, ...props }: SVGProps) {
	return <SVG {...props} />
}

interface IconProps {
	icon: Icon
}

export function LinkedIcon({ icon }: IconProps) {
	return (
		<Link href={`/${icon.name.kebab}`}>
			<a>
				<div className="relative" style={{ paddingBottom: "100%" }}>
					<div className="absolute x-0 y-0 !bg-gray-100 !rounded-full">
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
		<div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(112px, 1fr))" }}>
			{children}
		</div>
	)
}
