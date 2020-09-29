import px from "lib/x/px"
import Style from "lib/x/Style"
import SVG from "lib/x/SVG"

export default function Icon({ svg }) {
	return (
		<article className="pb-full relative bg-transparent hover:bg-gray-100 rounded-full transition duration-300 ease-out">
			<div className="absolute inset-0">
				<div className="flex flex-row justify-center items-center h-full">
					<Style className="w-8 h-8 text-gray-800">
						<SVG svg={svg.svgs.stroke} />
					</Style>
				</div>
			</div>
			<div className="py-2 absolute bottom-0 inset-x-0">
				<div className="flex flex-row justify-center">
					<Style className="subpixel-antialiased">
						<p
							className="text-center tracking-wide leading-tight text-gray-500"
							style={{
								fontSize: px(13),

								// overflowX: "hidden",
								// textOverflow: "ellipsis",
								// whiteSpace: "nowrap",
							}}>
							{svg.name}
						</p>
					</Style>
				</div>
			</div>
		</article>
	)
}
