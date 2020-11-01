import AppWrapper from "components/AppWrapper"
import dataset from "data/dataset"
import Link from "next/link"

interface SVGProps {
	// https://github.com/microsoft/TypeScript/issues/28631#issuecomment-472606019
	svg: React.ElementType
	props: React.ReactPropTypes
}

function SVG({ svg: SVG, ...props }: SVGProps) {
	return <SVG {...props} />
}

export default function Home() {
	return (
		<AppWrapper>
			<div className="spacer grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(112px, 1fr))" }}>
				{dataset.map(each => (
					<Link key={each.name.kebab} href={`/${each.name.kebab}`}>
						<a>
							<div className="relative" style={{ paddingBottom: "100%" }}>
								<div className="absolute x-0 y-0 !bg-gray-100 !rounded-full">
									<div className="hstack align-center h-full">
										<SVG className="w-32 h-32" svg={each.svgs.stroke} />
										<div className="absolute b-0 x-0">
											<div className="text-center text-14 leading-1.25 text-gray-500">{each.name.kebab}</div>
										</div>
									</div>
								</div>
							</div>
						</a>
					</Link>
				))}
			</div>
		</AppWrapper>
	)
}
