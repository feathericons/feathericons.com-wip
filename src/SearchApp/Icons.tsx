import AspectRatioBox from "../AspectRatioBox"
import PlaceholderText from "../PlaceholderText"
import React from "react"
import { range } from "../lib"

export default function Icons() {
	return (
		<div
			className="grid gap-16 px-16 sm:px-24 xl:px-64 py-64 pb-96"
			style={{ gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))" }}
		>
			{range(100).map(each => (
				<AspectRatioBox key={each}>
					{/* NOTE: Use `h-full` because of `<AspectRatioBox>`. */}
					<div className="zstack h-full">
						<div className="w-48 h-48 bg-important rounded-full"></div>
						<div className="bottom-0 inset-x-0 py-8">
							<PlaceholderText />
						</div>
					</div>
				</AspectRatioBox>
			))}
		</div>
	)
}
