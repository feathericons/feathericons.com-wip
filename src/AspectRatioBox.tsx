import React, { cloneElement } from "react"

interface AspectRatioSquareProps {
	children?: JSX.Element
}

export default function AspectRatioSquare({ children }: AspectRatioSquareProps) {
	return (
		// prettier-ignore
		<div className="relative" style={{ paddingBottom: "100%" }}>
			<div className="absolute a-0">
				{children && (
					cloneElement(children, {
						...children.props, // Takes precedence
						className: !children.props.className
							? "h-full"
							: children.props.className + " h-full",
					})
				)}
			</div>
		</div>
	)
}
