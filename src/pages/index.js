// import dataset from "../data/dataset"
// import Link from "next/link"
// import target_blank from "../utils/target_blank"

import Header from "../components/Header"
import TopRow from "../components/TopRow"
import useBreakpoints from "../utils/useBreakpoints"

// export default function Home() {
// 	return (
// 		<>
// 			<div>
// 				<Link href="/a">
// 					<a>a</a>
// 				</Link>
// 			</div>
// 			<div>
// 				<Link href="/b">
// 					<a>b</a>
// 				</Link>
// 			</div>
// 			<div>
// 				<Link href="/c">
// 					<a>c</a>
// 				</Link>
// 			</div>
// 		</>
// 	)
// }

function IconApp() {
	const screen = useBreakpoints()
	return (
		<div className="hstack">
			{/* LHS */}
			<div className="spacer vstack">
				<div className="sticky t-0 xl:-mt-24 xl:pt-24">hello</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
				<div>a</div>
			</div>

			{/* RHS */}
			{screen.lg && (
				<div className="vstack bg-cool-gray-100 xl:rounded-r-24" style={{ width: 20 * 16 /* 320px */ }}>
					<div className="sticky t-0 xl:-mt-24 xl:pt-24">hello</div>
					<div className="spacer" />
				</div>
			)}
		</div>
	)
}

export default function Home() {
	const screen = useBreakpoints()
	return (
		<div className="vstack s-96">
			<div className="absolute t-0 x-0">
				{/* {screen.xs && ( */}
				<div className="px-16 sm:px-24 py-12">
					<TopRow />
				</div>
				{/* )} */}
			</div>
			<div className="px-16 sm:px-24">
				<Header />
			</div>
			{/* TODO: Extract <IconAppContainer>. */}
			<div className="hstack s-0 xl:px-24 xl:pb-s/2">
				<div style={{ width: "100%", maxWidth: 84 * 16 /* 1344px */ }}>
					{screen.xs && (
						<div className="sticky t-0 -mt-24">
							<div className="h-24 bg-red-100" />
						</div>
					)}
					<div className="bg-white xl:rounded-24" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
						<IconApp />
					</div>
				</div>
			</div>
		</div>
	)
}
