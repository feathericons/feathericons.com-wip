import React from "react"
import Sidebar from "./Sidebar"
import vars from "./vars"

interface SearchAppProps {
	children?: React.ReactNode
}

export default function SearchApp({ children }: SearchAppProps) {
	return (
		<div className="hstack">
			<div
				className={`hstack align-start w-full max-w-xl bg-search-app xl:rounded-${vars.rounded} shadow shadow-px shadow-md`}
			>
				{/* LHS */}
				<div className="spacer">
					{/* Search bar */}
					<div className="sticky top-0 z-30">
						<div
							className={`hstack space-16 p-24 h-80 md:h-96 bg-search-app-content-search-bar border-bottom-1 border-hr xl:rounded-top-left-${vars.rounded}`}
						>
							<div className="w-24 h-24 bg-important rounded-full"></div>
							<div className="w-160 h-8 bg-important rounded-full"></div>
							<div className="spacer"></div>
							<div className="w-24 h-24 bg-important rounded-full"></div>
							<div className="w-24 h-24 bg-important rounded-full"></div>
						</div>
					</div>
					{/* prettier-ignore */}
					<div className="px-16 sm:px-24 xl:px-64 py-64 pb-96">
						{children}
					</div>
				</div>
				{/* RHS */}
				<Sidebar />
			</div>
		</div>
	)
}
