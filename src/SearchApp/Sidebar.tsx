import AspectRatioBox from "../AspectRatioBox"
import React from "react"
import { range } from "../lib"

const rounded = 24

export default function Sidebar() {
	return (
		<div className={`hidden md:unhidden align-self-stretch w-320 bg-gray-50 border-l-1 xl:rounded-r-${rounded}`}>
			<div className="sticky top-0">
				<div className="vstack align-stretch">
					{/* Preview */}
					<div className={`zstack align-self-stretch h-320 bg-white border-b-1 xl:rounded-tr-${rounded}`}>
						<div className="w-64 h-64 bg-gray-200 rounded-full"></div>
						<div className="absolute top-right-0 p-24">
							<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
						</div>
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
								<div className="hstack space-24">
									<div className="w-96 h-8 bg-gray-200 rounded-full"></div>
									<div className="spacer"></div>
									<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
								</div>
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