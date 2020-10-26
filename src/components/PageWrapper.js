import { Fragment } from "react"
import Header from "./Header"
import TopRow from "./TopRow"
import useBreakpoints from "../utils/useBreakpoints"

function InteractiveWrapper({ children }) {
	const screen = useBreakpoints()
	return (
		<div className="hstack xl:px-24">
			<div style={{ width: "100%", maxWidth: 84 * 16 /* 1344px */ }}>
				{/* {screen.xs && (
					<div className="sticky t-0 -mt-24">
						<div className="h-24 bg-red-100" />
					</div>
				)} */}
				<div className="bg-white xl:rounded-24" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
					<div className="hstack">
						<div className="spacer" />
						{/* prettier-ignore */}
						<div className="w-full max-w-md px-16 xl:px-24 py-64">
							{children}
						</div>
						<div className="spacer" />
						{screen.md && (
							<div className="vstack bg-cool-gray-100 xl:rounded-r-24" style={{ flexShrink: 0, width: 20 * 16 /* 320px */ }}>
								<div className="sticky t-0 xl:-mt-24 xl:pt-24">hello</div>
								<div className="spacer" />
							</div>
						)}
					</div>
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
				<div className="xl:px-24">
					<div className="s-0">
						{/* prettier-ignore */}
						<InteractiveWrapper>
							{children}
						</InteractiveWrapper>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
