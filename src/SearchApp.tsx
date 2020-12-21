import AspectRatioBox from "./AspectRatioBox"
import React from "react"
import { range } from "./lib"

const rounded = 24

function SearchAppLHS() {
	return (
		<div className="spacer">
			<div className="sticky top-0 z-10">
				<div className={`hstack space-16 p-24 h-80 md:h-96 bg-white border-b-1 xl:rounded-tl-${rounded}`}>
					<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
					<div className="w-160 h-8 bg-gray-200 rounded-full"></div>
					<div className="spacer"></div>
					<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
					<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
					<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
				</div>
			</div>
			<div
				className="grid gap-16 px-16 sm:px-24 xl:px-64 py-64 pb-96"
				style={{ gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))" }}
			>
				{range(200).map(each => (
					<AspectRatioBox key={each}>
						<div className="zstack h-full">
							<div className="w-48 h-48 bg-gray-200 rounded-full"></div>
							<div className="absolute bottom-0 inset-x-0 py-8">
								<div className="hstack space-8">
									<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
									<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
								</div>
							</div>
						</div>
					</AspectRatioBox>
				))}
			</div>
		</div>
	)
}

function SearchAppRHS() {
	return (
		// NOTE: Use `align-self-stretch` because of `w-320`.
		<div className={`hidden md:unhidden align-self-stretch w-320 bg-gray-50 border-l-1 xl:rounded-r-${rounded}`}>
			<div className="sticky top-0">
				{/* <div className="vstack align-stretch h-screen"> */}
				<div className="vstack align-stretch">
					{/* Preview */}
					{/* NOTE: Use `align-self-stretch` because of `h-320`. */}
					<div className={`zstack align-self-stretch h-320 bg-white border-b-1 xl:rounded-tr-${rounded}`}>
						<div className="w-64 h-64 bg-gray-200 rounded-full"></div>
						{/* Top */}
						<div className="absolute top-0 inset-x-0 p-24">
							<div className="hstack space-24">
								{/* <div className="w-96 h-8 bg-gray-200 rounded-full"></div> */}
								<div className="spacer"></div>
								<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
							</div>
						</div>
						{/* Bottom */}
						<div className="absolute bottom-0 inset-x-0 p-24">
							<div className="hstack space-24">
								<div className="spacer h-8 bg-gray-200 rounded-full">
									<div></div>
								</div>
								<div className="w-64 h-24 bg-gray-200 rounded-full"></div>
							</div>
						</div>
					</div>
					{/* Sliders */}
					<div className="overflow-y-scroll">
						{range(2).map(each => (
							<div key={each} className="vstack space-16 p-24 border-b-1">
								{/* Top */}
								<div className="hstack space-24">
									<div className="w-96 h-8 bg-gray-200 rounded-full"></div>
									<div className="spacer"></div>
									<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
								</div>
								{/* Bottom */}
								<div className="hstack space-24">
									<div className="spacer h-8 bg-gray-200 rounded-full">
										<div></div>
									</div>
									<div className="w-64 h-24 bg-gray-200 rounded-full"></div>
								</div>
							</div>
						))}
					</div>
					{/* Ad / Sponsor */}
					{/* <div className="spacer"></div> */}
					<div className="hstack space-16 p-24 border-b-1">
						<div className="w-128 h-96 bg-gray-200 rounded-4"></div>
						<div className="spacer vstack align-self-start align-start space-8 py-4">
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-1></div>
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-2></div>
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-3></div>
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-4></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function SearchApp() {
	return (
		<div className="hstack">
			<div className={`hstack w-full max-w-xl bg-white xl:rounded-${rounded} shadow shadow-px shadow-md`}>
				<SearchAppLHS />
				<SearchAppRHS />
			</div>
		</div>
	)
}
