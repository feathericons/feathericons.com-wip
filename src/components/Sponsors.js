import useBreakpoints from "../utils/useBreakpoints"

function Sponsor() {
	return (
		<div className="vstack s-8">
			<div className="h-56 bg-cool-gray-100 rounded-full" style={{ width: `${176 / 16}rem` }} />
			{/* prettier-ignore */}
			<div className="font-500 text-center text-12 leading-1">
				Placeholder
			</div>
		</div>
	)
}

// TODO: Add sponsors.
export default function Sponsors() {
	const screen = useBreakpoints()
	return (
		<>
			{screen.xs && !screen.xl && (
				<div className="hstack -m-s-1/2 pt-s" style={{ flexWrap: "wrap" }}>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
				</div>
			)}
			{screen.xl && (
				<>
					<div className="hstack -m-s-1/2 pt-s">
						<div className="m-s-1/2">
							<Sponsor />
						</div>
						<div className="m-s-1/2">
							<Sponsor />
						</div>
						<div className="m-s-1/2">
							<Sponsor />
						</div>
					</div>
					<div className="hstack -m-s-1/2 pt-s">
						<div className="m-s-1/2">
							<Sponsor />
						</div>
						<div className="m-s-1/2">
							<Sponsor />
						</div>
					</div>
				</>
			)}
		</>
	)
}
