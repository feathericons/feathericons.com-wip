import Header from "../components/Header"
import TopRow from "../components/TopRow"
import useBreakpoints from "../utils/useBreakpoints"

export default function AppWrapper({ children }) {
	const screen = useBreakpoints()
	return (
		<>
			<div className="absolute t-0 x-0">
				<div className="px-16 sm:px-24 py-12">
					<TopRow />
				</div>
			</div>
			<div className="vstack s-96 pt-96 xl:pb-48">
				<div className="px-16 sm:px-24">
					<Header />
				</div>
				<div className="hstack xl:px-24">
					<div style={{ width: "100%", maxWidth: 84 * 16 /* 1344px */ }}>
						{screen.xs && (
							<div className="sticky t-0 -mt-24">
								<div className="h-24 bg-red-100" />
							</div>
						)}
						<div className="bg-white xl:rounded-24" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
							{/* prettier-ignore */}
							<div className="s-0">
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
