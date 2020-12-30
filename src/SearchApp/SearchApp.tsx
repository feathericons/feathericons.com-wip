import React from "react"
import Sidebar from "./Sidebar"
import vars from "./vars"
import { ThemeApp, ThemeSearchBar } from "../ThemeElements"

interface SearchAppProps {
	children?: React.ReactNode
}

export default function SearchApp({ children }: SearchAppProps) {
	return (
		<div className="hstack">
			<ThemeApp className={`hstack align-start w-full max-w-xl xl:rounded-${vars.rounded}`}>
				{/* LHS */}
				<div className="spacer">
					<div className="sticky t-0 z-30">
						<ThemeSearchBar
							className={`hstack space-16 p-24 h-80 md:h-96 border-bottom-1 xl:rounded-top-left-${vars.rounded}`}
						>
							<div className="w-24 h-24 bg-placeholder rounded-full" />
							<div className="w-160 h-8 bg-placeholder rounded-full" />
							<div className="spacer" />
							<div className="w-24 h-24 bg-placeholder rounded-full" />
							<div className="w-24 h-24 bg-placeholder rounded-full" />
						</ThemeSearchBar>
					</div>
					{/* prettier-ignore */}
					<div className="px-16 sm:px-24 xl:px-64 py-64 pb-96">
						{children}
					</div>
				</div>

				{/* RHS */}
				<Sidebar />
			</ThemeApp>
		</div>
	)
}
