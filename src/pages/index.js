import AppWrapper from "../components/AppWrapper"
import Link from "next/link"
import dataset from "../data/dataset"
import useBreakpoints from "../utils/useBreakpoints"

function Icons() {
	const screen = useBreakpoints()
	return (
		<div className="hstack">
			{/* LHS */}
			<div className="spacer vstack">
				{/* prettier-ignore */}
				<div className="sticky t-0 xl:-mt-24 xl:pt-24">
					hello
				</div>
				{dataset.map(each => (
					<Link key={each.name} href={`/${each.name}`}>
						{/* prettier-ignore */}
						<a>
							{each.name}
						</a>
					</Link>
				))}
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

export default function Top() {
	return (
		<AppWrapper>
			<Icons />
		</AppWrapper>
	)
}
