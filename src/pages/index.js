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

// TODO: bg-cool-gray-50
export default function Home() {
	return (
		<div className="vstack sp-64">
			<div className="px-16 sm:px-24">
				<TopRow />
			</div>
			<div className="px-16 sm:px-24">
				<Header />
			</div>
			<div className="xl:px-24 xl:pb-24">
				<div className="hstack sp-0 min-h-screen bg-white xl:rounded-24 overflow-hidden" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
					{/* prettier-ignore */}
					<div className="spacer vstack">
            a
          </div>
					<div className="hidden lg:vstack bg-cool-gray-100" style={{ width: 20 * 16 /* 320px */ }}></div>
				</div>
			</div>
		</div>
	)
}
