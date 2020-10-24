import { Download as SVGDownload, GitHub as SVGGitHub } from "react-feather"

import Sponsors from "./Sponsors"
import useBreakpoints from "../utils/useBreakpoints"

// TODO: Add anchors and analytics.
//
// prettier-ignore
function HeaderLHS() {
	const screen = useBreakpoints()
	return (
		<div className="vstack s-24" style={{ width: !screen.xs && "100%", maxWidth: 32 * 16 /* 512px */ }}>
			<div className="hstack">
				<div className="w-64 h-64 bg-cool-gray-100 rounded-full" />
			</div>
			<div className="vstack s-12">
				<div className="text-center font-500 text-36 leading-1">
					Open source icons
				</div>
				<div className="text-center font-500 text-17 leading-1.25">
					Created by <span className="font-600 hover:underline">@colebemis</span> and{" "}
					<span className="font-600 hover:underline">@username_ZAYDEK</span>
				</div>
			</div>
			<div className="vstack xs:hstack s-12">
				<div className="hstack align-center px-32 h-56 bg-cool-gray-100 rounded-16 xs:rounded-full">
					<SVGGitHub className="w-20 h-20" strokeWidth={2.25} />
					<div className="font-500 text-17 leading-1">
						Read docs
					</div>
				</div>
				<div className="hstack align-center px-32 h-56 bg-cool-gray-100 rounded-16 xs:rounded-full">
					<SVGDownload className="w-20 h-20" strokeWidth={2.25} />
					<div className="font-500 text-17 leading-1">
						Download
					</div>
				</div>
			</div>
		</div>
	)
}

// TODO: Add anchors and analytics.
function HeaderRHS() {
	return (
		<div className="vstack s-24 xl:max-w-xs">
			<div className="hstack s-8 font-700 text-11 leading-1">
				<div>CHECK OUT OUR SPONSORS</div>
				<div>·</div>
				<div>BECOME A SPONSOR</div>
				<div className="w-12 h-12 bg-gray-200 rounded-full" />
			</div>
			<Sponsors />
		</div>
	)
}

export default function Header() {
	const screen = useBreakpoints()
	return (
		<div className="hstack">
			<div className="vstack xl:hstack align-center xl:align-end s-48" style={{ width: "100%", maxWidth: 68 * 16 /* 1088px */ }}>
				<HeaderLHS />
				{screen.xs && (
					<>
						<div className="spacer" />
						<HeaderRHS />
					</>
				)}
			</div>
		</div>
	)
}
