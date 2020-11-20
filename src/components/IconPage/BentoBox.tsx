import React from "react"
import { range } from "@zaydek/lib/dist/helpers"

export default function BentoBox({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
	return (
		<div className="bento-box">
			{range(4).map(each => (
				<div key={each}>
					<SVG />
				</div>
			))}
		</div>
	)
}
