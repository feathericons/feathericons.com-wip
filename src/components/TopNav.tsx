import { Twitter as SVGTwitter } from "react-feather"

// TODO: Add `--spacing: 0.25em`?
// TODO: Add `... w-1em w-1.1em w-1.15em w-1.2em w-1.25em`

// TODO: Add analytic events.
export default function TopNav() {
	return (
		<div className="font-500 text-17 text-white">
			<div className="hstack">
				{/* LHS */}
				<a className="hover:underline">
					<div className="hstack align-center space-8">
						<SVGTwitter style={{ width: "1.25em", height: "1.25em" }} fill="currentColor" strokeWidth={0} />
						<span>Tweet thank you!</span>
					</div>
				</a>
				{/* RHS */}
				<div className="spacer" />
				<div className="hstack align-center space-8">
					<a className="hover:underline">MIT-license</a>
					<span>&middot;</span>
					<a className="hover:underline">v4.28</a>
				</div>
			</div>
		</div>
	)
}
