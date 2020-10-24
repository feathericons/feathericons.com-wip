// import dataset from "../data/dataset"
// import Link from "next/link"
// import target_blank from "../utils/target_blank"

import Header from "../components/Header"
import TopRow from "../components/TopRow"

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

function App() {
	return (
		// NOTE: Reset var(--spacing).
		<div className="hstack sp-0 bg-white xl:rounded-24" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
			{/* LHS */}
			<div className="spacer vstack">
				<div className="sticky t-0">hello</div>
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
			<div className="hidden lg:vstack bg-cool-gray-100" style={{ width: 20 * 16 /* 320px */ }}>
				<div className="sticky t-0">hello</div>
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
		</div>
	)
}

// TODO: bg-cool-gray-50
export default function Home() {
	return (
		<>
			<div className="vstack sp-96">
				<div className="absolute t-0 x-0">
					<div className="px-16 sm:px-24 py-12">
						<TopRow />
					</div>
				</div>
				<div className="px-16 sm:px-24">
					<Header />
				</div>
				<div className="xl:px-24 xl:pb-24">
					<App />
				</div>
			</div>
		</>
	)
}
