import Link from "next/link"
import SVGEmbossedFeather from "components/SVGEmbossedFeather"
import { Download as SVGDownload, GitHub as SVGGitHub } from "react-feather"
import { px, rem } from "@zaydek/sorcery/dist/runtime"
import { useBreakpoints } from "@zaydek/lib/hooks"

// TODO: Add anchors and analytics.
//
// prettier-ignore
function HeaderLHS() {
	const screen = useBreakpoints()
	return (
		// @ts-ignore
		<div className="vstack space-24" style={{ width: !screen.xs && "100%", maxWidth: px(32 * 16) /* 512px */ }}>
			<div className="hstack">
				<Link href="/">
					<a>
						{/* <div className="w-64 h-64 bg-cool-gray-100 rounded-full" /> */}
						<SVGEmbossedFeather className="w-56 h-56 text-white" />
					</a>
				</Link>
			</div>
			<div className="vstack space-12">
				<div className="text-center font-500 text-32 leading-1 text-white">
					Open source icons
				</div>
				<div className="text-center font-500 text-17 leading-1.25 text-white">
					Created by <span className="font-700 hover:underline">@colebemis</span> and{" "}
					<span className="font-700 hover:underline">@username_ZAYDEK</span>
				</div>
			</div>
			<div className="vstack xs:hstack space-12">
				<div className="hstack align-center px-40 h-56 bg-cool-gray-100 rounded-12 xs:rounded-full">
					<SVGGitHub className="w-20 h-20" strokeWidth={2.25} />
					<div className="font-500 text-17 leading-1">
						Read docs
					</div>
				</div>
				<div className="hstack align-center px-40 h-56 bg-cool-gray-100 rounded-12 xs:rounded-full">
					<SVGDownload className="w-20 h-20" strokeWidth={2.25} />
					<div className="font-500 text-17 leading-1">
						Download
					</div>
				</div>
			</div>
		</div>
	)
}

function Sponsor() {
	return (
		<div className="vstack space-8">
			<div className="h-56 bg-cool-gray-100 rounded-full" style={{ width: rem(176) }} />
			{/* prettier-ignore */}
			<div className="font-500 text-center text-12 leading-1">
				Placeholder
			</div>
		</div>
	)
}

// TODO: Add sponsors.
function Sponsors() {
	const screen = useBreakpoints()
	return (
		<>
			{screen.xs && !screen.xl && (
				<div className="hstack -m-s-1/2 pt-s" style={{ flexWrap: "wrap" }}>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
					<div className="m-s-1/2">
						<Sponsor />
					</div>
				</div>
			)}
			{screen.xl && (
				<>
					<div className="hstack -m-s-1/2 pt-s">
						<div className="m-s-1/2">
							<Sponsor />
						</div>
						<div className="m-s-1/2">
							<Sponsor />
						</div>
						<div className="m-s-1/2">
							<Sponsor />
						</div>
					</div>
					<div className="hstack -m-s-1/2 pt-s">
						<div className="m-s-1/2">
							<Sponsor />
						</div>
						<div className="m-s-1/2">
							<Sponsor />
						</div>
					</div>
				</>
			)}
		</>
	)
}

// TODO: Add anchors and analytics.
function HeaderRHS() {
	return (
		<div className="vstack space-24 xl:max-w-xs">
			<div className="hstack space-8 font-700 text-11 leading-1">
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
			<div
				className="vstack xl:hstack align-center xl:align-end space-48"
				style={{ width: "100%", maxWidth: px(68 * 16) /* 1088px */ }}
			>
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
