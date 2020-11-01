import Header from "./Header"
import React from "react"
import TopNav from "./TopNav"
import { useBreakpoints } from "@zaydek/lib/hooks"
import { RotateCcw } from "react-feather"

interface InteractiveWrapperProps {
	children?: React.ReactNode
}

function StickyTopObscureEffect() {
	return (
		// NOTE: Uses `overflow-x-hidden` because of `-mx-2`.
		<div className="sticky t-0 -mb-24 z-10 !bg-red-100 overflow-x-hidden">
			{/* prettier-ignore */}
			<div className="-mx-2 hstack">
				<svg
					className="w-1 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					preserveAspectRatio="none"
					viewBox="0 0 1 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width={1} height={1} />
				</svg>
				<svg
					className="w-24 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					viewBox="0 0 24 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0V40C0 26.7451 10.7451 16 24 16V0Z" />
				</svg>
				<svg
					className="w-full h-16"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					preserveAspectRatio="none"
					viewBox="0 0 1 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width={1} height={1} />
				</svg>
				<svg
					className="w-24 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					viewBox="0 0 24 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V40C24 26.7451 13.2549 16 0 16V0Z" />
				</svg>
				<svg
					className="w-1 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					preserveAspectRatio="none"
					viewBox="0 0 1 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width={1} height={1} />
				</svg>
			</div>
		</div>
	)
}

function InteractiveWrapper({ children }: InteractiveWrapperProps) {
	const screen = useBreakpoints()
	return (
		<div className="hstack s-0">
			<div className="w-full !max-w-xl" style={{ maxWidth: 1344 }}>
				{screen.xl && <StickyTopObscureEffect />}
				<div className="hstack bg-white xl:rounded-24" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
					{/* NOTE: Do not use a stack because of sticky. */}
					<div className="spacer">
						{/* prettier-ignore */}
						<div className="sticky t-0 xl:-mt-24 xl:pt-24">
							hello
						</div>
						<div className="px-16 sm:px-24 xl:px-64 py-64 w-full">
							{/* prettier-ignore */}
							<div className="w-full max-w-md">
								{children}
							</div>
						</div>
					</div>
					{screen.md && (
						<div className="vstack bg-cool-gray-100 xl:rounded-r-24" style={{ width: 20 * 16 /* 320px */ }}>
							<div className="sticky t-0 xl:-mt-24 xl:pt-24">hello</div>
							<div className="spacer" />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

interface AppWrapperProps {
	children?: React.ReactNode
}

export default function AppWrapper({ children }: AppWrapperProps) {
	return (
		<React.Fragment>
			<div className="absolute t-0 x-0">
				<div className="px-16 sm:px-24 py-12">
					<TopNav />
				</div>
			</div>
			<div className="vstack s-96 pt-96 xl:pb-48">
				<div className="px-16 sm:px-24">
					<Header />
				</div>
				{/* prettier-ignore */}
				<InteractiveWrapper>
					{children}
				</InteractiveWrapper>
			</div>
		</React.Fragment>
	)
}
