import { Fragment } from "react"
import Header from "./Header"
import TopRow from "./TopRow"
import useBreakpoints from "../utils/useBreakpoints"

function InteractiveWrapper({ children }) {
	const screen = useBreakpoints()
	return (
		<div className="hstack s-0">
			<div className="w-full max-w-xl">
				{/* NOTE: Do not use stack because of sticky. */}
				{screen.xs && (
					<div className="sticky t-0 -mt-24">
						<div className="h-24 bg-red-100" />
					</div>
				)}
				<div className="hstack bg-white xl:rounded-24" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
					{/* NOTE: Do not use stack because of sticky. */}
					<div className="spacer">
						<div className="sticky t-0 xl:-mt-24 xl:pt-24">hello</div>
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

export default function PageWrapper({ children }) {
	return (
		<Fragment>
			<div className="absolute t-0 x-0">
				<div className="px-16 sm:px-24 py-12">
					<TopRow />
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
		</Fragment>
	)
}
