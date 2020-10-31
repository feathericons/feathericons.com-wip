import hrefs from "../fixtures/hrefs"
import { target_blank } from "@zaydek/lib/attrs"
import { Twitter as SVGTwitter } from "react-feather"

// TODO: Add analytic events.
export default function TopNav() {
	return (
		// prettier-ignore
		<div className="hstack s-8">
			{/* LHS */}
			<a
				className="hstack align-center font-500 hover:underline"
				href={hrefs.shareOnTwitter}
				{...target_blank}
			>
				<SVGTwitter style={{ width: "1.25em", height: "1.25em" }} fill="currentColor" strokeWidth={0} />
				<span>Tweet thank you!</span>
			</a>
			{/* RHS */}
			<div className="spacer" />
			<a
				className="hstack align-center font-500 hover:underline"
				href={hrefs.GitHubLicense}
				{...target_blank}
			>
				MIT-license
			</a>
			<span>&middot;</span>
			<a
				className="hstack align-center font-500 hover:underline"
				href={hrefs.GitHubRelease}
				{...target_blank}
			>
				v4.28
			</a>
		</div>
	)
}
