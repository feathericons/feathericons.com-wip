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

	if (screen.xs && !screen.xl) {
		return (
			<div className="hstack -m-s/2 pt-s" style={{ flexWrap: "wrap" }}>
				<div className="m-s/2">
					<Sponsor />
				</div>
				<div className="m-s/2">
					<Sponsor />
				</div>
				<div className="m-s/2">
					<Sponsor />
				</div>
				<div className="m-s/2">
					<Sponsor />
				</div>
				<div className="m-s/2">
					<Sponsor />
				</div>
			</div>
		)
	} else if (screen.xl) {
		return (
			<>
				<div className="hstack -m-s/2 pt-s">
					<div className="m-s/2">
						<Sponsor />
					</div>
					<div className="m-s/2">
						<Sponsor />
					</div>
					<div className="m-s/2">
						<Sponsor />
					</div>
				</div>
				<div className="hstack -m-s/2 pt-s">
					<div className="m-s/2">
						<Sponsor />
					</div>
					<div className="m-s/2">
						<Sponsor />
					</div>
				</div>
			</>
		)
	}
	return null
}
