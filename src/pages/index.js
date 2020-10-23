import Link from "next/link"
import dataset from "../data/dataset"

export default function Home() {
	console.log(dataset)
	return (
		<>
			<div>
				<Link href="/a">
					<a>a</a>
				</Link>
			</div>
			<div>
				<Link href="/b">
					<a>b</a>
				</Link>
			</div>
			<div>
				<Link href="/c">
					<a>c</a>
				</Link>
			</div>
		</>
	)
}
