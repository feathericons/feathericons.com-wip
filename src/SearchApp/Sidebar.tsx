import React from "react"
import vars from "./vars"
import { range } from "../lib"

export default function Sidebar() {
	return (
		<div
			className={`hidden md:unhidden align-self-stretch w-320 bg-search-app-sidebar border-left-1 xl:rounded-right-${vars.rounded}`}
		>
			<div className="sticky top-0">
				<div className="vstack align-stretch">
					{/* TODO: Extract `<SiderbarPreview>`? */}
					<div
						className={`zstack align-self-stretch h-320 border-bottom-1 xl:rounded-top-right-${vars.rounded}`}
						data-theme-id="sidebar-preview"
					>
						<div className="w-64 h-64 bg-placeholder rounded-full"></div>
						<div className="absolute top-right-0 p-24">
							<div className="w-24 h-24 bg-placeholder rounded-full"></div>
						</div>
						<div className="bottom-0 inset-x-0 p-24">
							<div className="hstack space-24">
								<div className="spacer h-8 bg-placeholder rounded-full">
									<div></div>
								</div>
								<div className="w-64 h-24 bg-placeholder rounded-full"></div>
							</div>
						</div>
					</div>
					{/* Sliders */}
					<div className="overflow-y-scroll">
						{range(2).map(each => (
							<div key={each} className="vstack space-16 p-24 border-bottom-1">
								<div className="hstack space-24">
									<div className="w-96 h-8 bg-placeholder rounded-full"></div>
									<div className="spacer"></div>
									<div className="w-24 h-24 bg-placeholder rounded-full"></div>
								</div>
								<div className="hstack space-24">
									<div className="spacer h-8 bg-placeholder rounded-full">
										<div></div>
									</div>
									<div className="w-64 h-24 bg-placeholder rounded-full"></div>
								</div>
							</div>
						))}
					</div>
					{/* Ad / Sponsor */}
					<div className="hstack space-16 p-24 border-bottom-1">
						<div className="w-128 h-96 bg-placeholder rounded-4"></div>
						{/* FIXME: Change `spacer vstack`. */}
						<div className="spacer vstack align-self-start align-start space-8 py-4">
							<div className="h-6 bg-placeholder rounded-full" data-stagger="1"></div>
							<div className="h-6 bg-placeholder rounded-full" data-stagger="2"></div>
							<div className="h-6 bg-placeholder rounded-full" data-stagger="3"></div>
							<div className="h-6 bg-placeholder rounded-full" data-stagger="4"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
