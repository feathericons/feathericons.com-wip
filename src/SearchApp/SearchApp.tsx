import React from "react"
import Sidebar from "./Sidebar"
import vars from "./vars"

interface SearchAppProps {
	children?: React.ReactNode
}

export default function SearchApp({ children }: SearchAppProps) {
	return (
		<div className="hstack">
			<div className={`hstack align-start w-full max-w-xl xl:rounded-${vars.rounded} ui-app`}>
				{/* LHS */}
				<div className="spacer">
					{/* TODO: Extract `<SearchBar>`. */}
					<div className="sticky top-0 z-30">
						<div
							className={`hstack space-16 p-24 h-80 md:h-96 border-bottom-1 xl:rounded-top-left-${vars.rounded} ui-search-bar`}
						>
							<div className="w-24 h-24 bg-placeholder rounded-full"></div>
							<div className="w-160 h-8 bg-placeholder rounded-full"></div>
							<div className="spacer"></div>
							<div className="w-24 h-24 bg-placeholder rounded-full"></div>
							<div className="w-24 h-24 bg-placeholder rounded-full"></div>
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
