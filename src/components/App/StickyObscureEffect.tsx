import useBreakpoints from "../hooks/useBreakpoints"

export default function StickyObscureEffect() {
	const screen = useBreakpoints()
	return (
		<>
			{screen.xl && (
				// NOTE: Use `z-20` not `z-10` here.
				<div id="obscure-effect" className="sticky t-0 -mx-8 -mb-24 z-20">
					<div className="hstack">
						<svg
							className="w-8 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 1 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width={1} height={1} />
						</svg>
						<svg
							className="w-24 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 24 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V40C0 26.7451 10.7451 16 24 16V0Z" />
						</svg>
						<svg
							className="w-full h-16 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 1 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width={1} height={1} />
						</svg>
						<svg
							className="w-24 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 24 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V40C24 26.7451 13.2549 16 0 16V0Z" />
						</svg>
						<svg
							className="w-8 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 1 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width={1} height={1} />
						</svg>
					</div>
				</div>
			)}
		</>
	)
}
