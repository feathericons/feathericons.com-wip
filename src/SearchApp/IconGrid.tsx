import AspectRatioBox from "../AspectRatioBox"
import PlaceholderText from "../PlaceholderText"
import React from "react"
// import v from "./vars"
import { range } from "../lib"

export default function IconGrid() {
	return (
		<>
			{/* <div className="sticky top-0 z-10">
				<div
					className={`hstack space-16 p-24 h-80 md:h-96 bg-search-app border-b-1 border-hr xl:rounded-top-left-${vars.rounded}`}
				>
					<div className="w-24 h-24 bg-important rounded-full"></div>
					<div className="w-160 h-8 bg-important rounded-full"></div>
					<div className="spacer"></div>
					<div className="w-24 h-24 bg-important rounded-full"></div>
					<div className="w-24 h-24 bg-important rounded-full"></div>
				</div>
			</div> */}
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
		</>
	)
}
