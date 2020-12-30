import AspectRatioBox from "../AspectRatioBox"
import PlaceholderText from "../PlaceholderText"
import React from "react"
import { range } from "../lib"

export default function Icons() {
	return (
		<div id="icons">
			{range(10).map(each => (
				<AspectRatioBox key={each}>
					<div className="zstack">
						<div className="w-48 h-48 bg-placeholder rounded-full"></div>
						<div className="x-0 b-0 py-8">
							<PlaceholderText />
						</div>
					</div>
				</AspectRatioBox>
			))}
		</div>
	)
}
