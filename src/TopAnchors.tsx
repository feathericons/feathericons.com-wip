import { range } from "./lib"
import PlaceholderText from "./PlaceholderText"
import React from "react"

export default function TopAnchors() {
	return (
		<div className="hstack space-16 py-16">
			<PlaceholderText />
			<div className="spacer"></div>
			{range(2).map(each => (
				<PlaceholderText key={each} />
			))}
		</div>
	)
}
