// TODO: https://github.com/zaydek/sorcery/issues/54

interface AspectRatioProps {
	aspectRatio: number
	children?: React.ReactNode
}

// Ex:
//
// <AspectRatio aspectRatio={16 / 9}>
//   {children}
// </AspectRatio>
//
// https://css-tricks.com/aspect-ratio-boxes
export default function AspectRatio({ aspectRatio, children }: AspectRatioProps) {
	return (
		<div className="relative" style={{ paddingBottom: (1 / aspectRatio) * 100 + "%" }}>
			{/* prettier-ignore */}
			<div className="absolute y-0 x-0">
				{children}
			</div>
		</div>
	)
}
