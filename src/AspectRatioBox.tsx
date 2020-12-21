import React from "react"

interface AspectRatioBoxProps {
	children?: React.ReactNode
}

export default function AspectRatioBox({ children }: AspectRatioBoxProps) {
	return (
		// prettier-ignore
		<div className="relative" style={{ paddingBottom: "100%" }}>
			<div className="absolute inset-0">
				{children}
			</div>
		</div>
	)
}
