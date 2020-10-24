import Link from "next/link"
import { Twitter as SVGTwitter } from "react-feather"
import target_blank from "../utils/target_blank"
// import dataset from "../data/dataset"

// export default function Home() {
// 	return (
// 		<>
// 			<div>
// 				<Link href="/a">
// 					<a>a</a>
// 				</Link>
// 			</div>
// 			<div>
// 				<Link href="/b">
// 					<a>b</a>
// 				</Link>
// 			</div>
// 			<div>
// 				<Link href="/c">
// 					<a>c</a>
// 				</Link>
// 			</div>
// 		</>
// 	)
// }

// TODO: Add analytic events.
function ExternalLinks() {
	// prettier-ignore
	const tweetHref = `https://twitter.com/intent/tweet?text=${encodeURI("Check out Feathericons! ✨\n\nMany thanks to @colebemis for Feather Icons and @username_ZAYDEK for feathericons.com. ❤️",)}`
	const GitHubLicenseHref = "https://github.com/feathericons/feather/blob/master/LICENSE"
	const GitHubReleaseHref = "https://github.com/feathericons/feather/releases"

	return (
		// <div className="font-500">
		<div className="hstack sp-8 px-16 py-12">
			{/* LHS */}
			<a className="hstack align-center hover:underline" href={tweetHref} {...target_blank}>
				<SVGTwitter style={{ width: "1.25em", height: "1.25em" }} fill="currentColor" strokeWidth={0} />
				<span>Tweet thank you!</span>
			</a>

			{/* RHS */}
			<div className="spacer"></div>
			<div className="hstack">
				<a className="hstack align-center hover:underline" href={GitHubLicenseHref} {...target_blank}>
					<span>MIT-license</span>
				</a>
				<span>&middot;</span>
				<a className="hstack align-center hover:underline" href={GitHubReleaseHref} {...target_blank}>
					<span>v4.28</span>
				</a>
			</div>
		</div>
		// </div>
	)
}

export default function Home() {
	return <ExternalLinks />
}
