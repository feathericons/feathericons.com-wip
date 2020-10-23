import Link from "next/link"

export default function Home() {
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
