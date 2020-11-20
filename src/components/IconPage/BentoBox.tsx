import React from "react"

export default function BentoBox({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
	return (
		// prettier-ignore
		<div className="bento-box">
			<div><SVG /></div>
			<div><SVG /></div>
			<div><SVG /></div>
			<div><SVG /></div>
		</div>
	)
}
