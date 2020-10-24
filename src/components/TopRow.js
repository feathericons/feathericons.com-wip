import { Twitter as SVGTwitter } from "react-feather"
import hrefs from "../fixtures/hrefs"
import target_blank from "../utils/target_blank"

function A(props) {
	return <a className="hstack align-center font-500 hover:underline" {...target_blank} {...props} />
}

// TODO: Add analytic events.
export default function TopRow() {
	return (
		<div className="hstack s-8">
			{/* LHS */}
			<A href={hrefs.shareOnTwitter}>
				<SVGTwitter style={{ width: "1.25em", height: "1.25em" }} fill="currentColor" strokeWidth={0} />
				<span>Tweet thank you!</span>
			</A>
			{/* RHS */}
			<div className="spacer" />
			{/* prettier-ignore */}
			<A href={hrefs.GitHubLicense}>
				MIT-license
			</A>
			<span>&middot;</span>
			{/* prettier-ignore */}
			<A href={hrefs.GitHubRelease}>
				v4.28
			</A>
		</div>
	)
}
