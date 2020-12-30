import React from "react"
import vars from "./vars"
import { range } from "../lib"
import { ThemeSidebar, ThemeToolbarPreview } from "../ThemeElements"

export default function Sidebar() {
	return (
		<ThemeSidebar
			className={`hidden md:unhidden align-self-stretch w-320 border-left-1 xl:rounded-right-${vars.rounded}`}
		>
			<div className="sticky t-0">
				<div className="vstack align-stretch">
					<ThemeToolbarPreview
						className={`zstack align-self-stretch h-320 border-bottom-1 xl:rounded-top-right-${vars.rounded}`}
					>
						<div className="w-64 h-64 bg-placeholder rounded-full" />
						<div className="tr-0 p-24">
							<div className="w-24 h-24 bg-placeholder rounded-full" />
						</div>
						<div className="x-0 b-0 p-24">
							<div className="hstack space-24">
								<div className="spacer h-8 bg-placeholder rounded-full">
									<div />
								</div>
								<div className="w-64 h-24 bg-placeholder rounded-full" />
							</div>
						</div>
					</ThemeToolbarPreview>

					<div className="overflow-y-scroll">
						{range(2).map(each => (
							<div key={each} className="vstack space-16 p-24 border-bottom-1">
								<div className="hstack space-24">
									<div className="w-96 h-8 bg-placeholder rounded-full" />
									<div className="spacer" />
									<div className="w-24 h-24 bg-placeholder rounded-full" />
								</div>
								<div className="hstack space-24">
									<div className="spacer h-8 bg-placeholder rounded-full">
										<div />
									</div>
									<div className="w-64 h-24 bg-placeholder rounded-full" />
								</div>
							</div>
						))}
					</div>

					<div className="hstack align-start space-16 p-24 border-bottom-1">
						<div className="w-128 h-96 bg-placeholder rounded-4" />
						<div className="spacer">
							<div className="vstack align-start space-8 py-4">
								<div className="h-6 bg-placeholder rounded-full" data-stagger-id="1" />
								<div className="h-6 bg-placeholder rounded-full" data-stagger-id="2" />
								<div className="h-6 bg-placeholder rounded-full" data-stagger-id="3" />
								<div className="h-6 bg-placeholder rounded-full" data-stagger-id="4" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</ThemeSidebar>
	)
}
