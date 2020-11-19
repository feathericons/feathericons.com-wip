import OctofaceIcon24x24 from "./OctofaceIcon24x24"
import React from "react"
import { ExtAnchor } from "@zaydek/lib/dist/components"
import { GitHub_FeatherSite, Twitter_ShareOnTwitter } from "../fixtures/hrefs"
import { Twitter } from "react-feather"

// TODO: Add analytics.
export function AbsoluteTopRow() {
	return (
		<div className="absolute x-0 t-0">
			<div className="hstack px-16 lg:px-24 py-12">
				<ExtAnchor className="group hstack stack-center space-8" href={Twitter_ShareOnTwitter}>
					<Twitter className="w-24 h-24" style={{ fill: "currentColor", strokeWidth: 0 }} />
					<p className="group-on:underline">Tweet thank you!</p>
				</ExtAnchor>
				<div className="spacer" />
				<ExtAnchor className="group hstack stack-center space-8" href={GitHub_FeatherSite}>
					<p className="group-on:underline">Star on GitHub!</p>
					<OctofaceIcon24x24 className="w-20 h-20" />
				</ExtAnchor>
			</div>
		</div>
	)
}
