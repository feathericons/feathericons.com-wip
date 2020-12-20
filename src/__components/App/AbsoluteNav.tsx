import OctofaceIcon24x24 from "./OctofaceIcon24x24"
import React from "react"
import { ExtAnchor } from "@zaydek/lib/dist/components"
import { GitHub_FeatherSite, Twitter_ShareOnTwitter } from "../../fixtures/hrefs"
import { Twitter } from "react-feather"

// TODO: Add analytics.
export default function AbsoluteNav() {
	return (
		// NOTE: Uses `z-10` becaused of `<svg>` background.
		<div className="absolute x-0 t-0 z-10">
			<nav className="hstack px-16 lg:px-24 py-12">
				<ExtAnchor className="group hstack stack-center space-8" href={GitHub_FeatherSite}>
					<OctofaceIcon24x24 className="w-20 h-20 text-white" />
					<p className="hstack space-6 group-on:underline text-white">
						<span>Star on GitHub</span>
					</p>
				</ExtAnchor>
				<div className="spacer" />
				<ExtAnchor className="group hstack stack-center space-8" href={Twitter_ShareOnTwitter}>
					<p className="group-on:underline text-white">Tweet thank you</p>
					<Twitter className="w-20 h-20 text-white" fill="currentColor" strokeWidth={0} />
				</ExtAnchor>
			</nav>
		</div>
	)
}
