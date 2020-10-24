import { Twitter as SVGTwitter } from "react-feather"
import target_blank from "../utils/target_blank"

// prettier-ignore
const TwitterHref = `https://twitter.com/intent/tweet?text=${encodeURI("Check out Feathericons! ✨\n\nMany thanks to @colebemis for Feather Icons and @username_ZAYDEK for feathericons.com. ❤️",)}`
const GitHubLicenseHref = "https://github.com/feathericons/feather/blob/master/LICENSE"
const GitHubReleaseHref = "https://github.com/feathericons/feather/releases"

// TODO: Add analytic events.
export default function TopRow() {
	return (
		<div className="font-500">
			<div className="hstack sp-8">
				{/* LHS */}
				<a className="hstack align-center hover:underline" href={TwitterHref} {...target_blank}>
					<SVGTwitter style={{ width: "1.25em", height: "1.25em" }} fill="currentColor" strokeWidth={0} />
					<span>Tweet thank you!</span>
				</a>

				{/* RHS */}
				<div className="spacer" />
				<div className="hstack">
					<a className="hover:underline" href={GitHubLicenseHref} {...target_blank}>
						MIT-license
					</a>
					<span>&middot;</span>
					<a className="hover:underline" href={GitHubReleaseHref} {...target_blank}>
						v4.28
					</a>
				</div>
			</div>
		</div>
	)
}
