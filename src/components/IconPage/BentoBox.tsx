import React from "react"

export default function BentoBox({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
	return (
		// prettier-ignore
		<div className="hstack stack-center h-320 bg-white rounded-8" style={{ boxShadow: "var(--shadow-xs), var(--shadow-base)" }} data-primer-grid>
			<SVG className="w-96 h-96" />
		</div>
	)
}
