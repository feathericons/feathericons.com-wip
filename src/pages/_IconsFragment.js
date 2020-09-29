import css from "lib/x/tpl"
import dataset from "data/dataset"
import px from "lib/x/px"
import Style from "lib/x/Style"
import SVG from "lib/x/SVG"

export default function IconsFragment() {
	return (
		<>

			<style>
				{css`
					#grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));

						/* TODO: Move gap to <article> as padding. */
						gap: 1rem;
					}
				`}
			</style>

			<div id="grid">
				{dataset.map(each => (
					<article key={each.name} className="pb-full relative bg-transparent hover:bg-gray-100 rounded-full transition duration-300 ease-out">
						<div className="absolute inset-0">
							<div className="flex flex-row justify-center items-center h-full">
								<Style className="w-8 h-8 text-gray-800">
									<SVG svg={each.svgs.stroke} />
								</Style>
							</div>
						</div>
						<div className="py-2 absolute inset-x-0 bottom-0">
							<div className="flex flex-row justify-center">
								{/* <div className="w-16 h-3 bg-gray-400 bg-opacity-25 rounded-full" /> */}
								<Style className="subpixel-antialiased">
									<p
										className="text-center tracking-wide leading-tight text-gray-500"
										style={{
											fontSize: px(13),

											overflowX: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
										}}>
										{each.name}
									</p>
								</Style>
							</div>
						</div>
					</article>
				))}
			</div>

		</>
	)
}
