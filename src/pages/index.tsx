import AppWrapper from "components/AppWrapper"
import dataset from "data/dataset"
// import SmallText from "components/SmallText"
import { IconGrid, LinkedIcon } from "components/IconGrid"

export default function Home() {
	return (
		<>
			<AppWrapper>
				<IconGrid>
					{dataset.map(each => (
						<LinkedIcon key={each.name.kebab} icon={each} />
					))}
				</IconGrid>
			</AppWrapper>
			<div className="pb-48">
				<div className="prose">
					<p className="text-center">
						{/* prettier-ignore */}
						<small>
							<a href="TODO">Feather</a>{" "}
							is by <a href="TODO">Cole Bemis</a>{" "}
							and the new <a href="TODO">feathericons.com</a>{" "}
							is by <a href="TODO">Zaydek MG</a>.
							<br />
							Both are licenesed as <a href="TODO">MIT open source</a>.
						</small>
					</p>
				</div>
			</div>
		</>
	)
}
