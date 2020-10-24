import { Download as SVGDownload, GitHub as SVGGitHub } from "react-feather"

// import dataset from "../data/dataset"
// import target_blank from "../utils/target_blank"
import Link from "next/link"
import ExtAnchors from "../components/ExtAnchors"

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

function HeaderLHS() {
	return (
		<div className="vstack align-center sp-24">
			<div className="w-64 h-64 bg-cool-gray-100 rounded-full" />
			<div className="vstack sp-12">
				<div className="text-center font-500 text-36 leading-1">
					{/* prettier-ignore */}
					Open source icons
				</div>
				<div className="text-center font-500 text-17 leading-1.25">
					Created by <span className="font-600 hover:underline">@colebemis</span> and
					<span className="font-600 hover:underline">@username_ZAYDEK</span>
				</div>
			</div>
			<div className="hstack sp-12">
				<div className="hstack align-center px-32 h-56 bg-cool-gray-100 rounded-full">
					<SVGGitHub className="w-19 h-19" strokeWidth={2.25} />
					<div className="hstack font-500 text-17 leading-1">
						{/* prettier-ignore */}
						Read docs
					</div>
				</div>
				<div className="hstack align-center px-32 h-56 bg-cool-gray-100 rounded-full">
					<SVGDownload className="w-19 h-19" strokeWidth={2.25} />
					<div className="hstack font-500 text-17 leading-1">
						{/* prettier-ignore */}
						Download all
					</div>
				</div>
			</div>
		</div>
	)
}

function Sponsor() {
	return <div className="hstack align-center px-32 h-56 bg-cool-gray-100 rounded-full" style={{ width: `${160 / 16}rem` }} />
}

function Sponsors() {
	return (
		<>
			{/* (xs-xl) */}
			<div className="hidden xs:hstack xl:hidden wrap -m-sp/2 pt-sp">
				<div class="m-sp/2">
					<Sponsor />
				</div>
				<div class="m-sp/2">
					<Sponsor />
				</div>
				<div class="m-sp/2">
					<Sponsor />
				</div>
				<div class="m-sp/2">
					<Sponsor />
				</div>
				<div class="m-sp/2">
					<Sponsor />
				</div>
			</div>

			{/* (xl+) */}
			<div className="hidden xl:hstack -m-sp/2 pt-sp">
				<div class="m-sp/2">
					<Sponsor />
				</div>
				<div class="m-sp/2">
					<Sponsor />
				</div>
				<div class="m-sp/2">
					<Sponsor />
				</div>
			</div>
			<div className="hidden xl:hstack -m-sp/2 pt-sp">
				<div class="m-sp/2">
					<Sponsor />
				</div>
				<div class="m-sp/2">
					<Sponsor />
				</div>
			</div>
		</>
	)
}

function HeaderRHS() {
	return (
		<div className="hidden xs:vstack sp-24">
			<div className="hstack sp-8 font-700 text-11 leading-1">
				<div>CHECK OUT OUR SPONSORS</div>
				<div>·</div>
				<div>BECOME A SPONSOR</div>
				<div className="w-12 h-12 bg-gray-200 rounded-full" />
			</div>
			<Sponsors />
		</div>
	)
}

function Header() {
	return (
		<div className="hstack pt-48">
			<div className="vstack sp-48 xl:hstack w-full max-w-lg">
				<div className="no-shrink">
					<HeaderLHS />
				</div>
				<div className="spacer" />
				<HeaderRHS />
			</div>
		</div>
	)
}

// style={{ width: "100%", maxWidth: 72 * 16 /* 1152px */ }}
export default function Home() {
	return (
		<div className="vstack px-16 sm:px-24">
			<ExtAnchors />
			<Header />
			<div>TODO</div>
		</div>
	)
}
