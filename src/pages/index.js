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

export default function Home() {
	return (
		<div className="vstack px-16 sm:px-24">
			<TopRow />
			<Header />
			<div>TODO</div>
		</div>
	)
}
