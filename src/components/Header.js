import { Download as SVGDownload, GitHub as SVGGitHub } from "react-feather"

// TODO: Add anchors and analytics.
function HeaderLHS() {
	return (
		<div className="vstack sp-24" style={{ width: 28 * 16 /* 448px */ }}>
			<div className="hstack">
				<div className="w-64 h-64 bg-cool-gray-100 rounded-full" />
			</div>
			<div className="vstack sp-12">
				{/* prettier-ignore */}
				<div className="text-center font-500 text-36 leading-1">
					Open source icons
				</div>
				{/* prettier-ignore */}
				<div className="text-center font-500 text-17 leading-1.25">
					Created by <span className="font-600 hover:underline">@colebemis</span> and{" "}
					<span className="font-600 hover:underline">@username_ZAYDEK</span>
				</div>
			</div>
			<div className="hstack sp-12">
				{/* prettier-ignore */}
				<div className="hstack align-center px-32 h-56 bg-cool-gray-100 rounded-full">
					<SVGGitHub className="w-20 h-20" strokeWidth={2.25} />
					<div className="hstack font-500 text-17 leading-1">
						Read docs
					</div>
				</div>
				{/* prettier-ignore */}
				<div className="hstack align-center px-32 h-56 bg-cool-gray-100 rounded-full">
					<SVGDownload className="w-20 h-20" strokeWidth={2.25} />
					<div className="hstack font-500 text-17 leading-1">
						Download all
					</div>
				</div>
			</div>
		</div>
	)
}

function Sponsor() {
	return (
		<div className="vstack sp-8">
			<div className="h-56 bg-cool-gray-100 rounded-full" style={{ width: `${176 / 16}rem` }} />
			<div className="font-500 text-center text-12 leading-1">Placeholder</div>
		</div>
	)
}

// TODO: Add anchors and analytics.
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

// TODO: Add anchors and analytics.
function HeaderRHS() {
	return (
		<div className="vstack sp-24">
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

export default function Header() {
	return (
		<div className="hstack">
			<div className="vstack xl:hstack align-center xl:align-end sp-48 xl:sp-0 w-full max-w-lg" style={{ width: "100%", maxWidth: 68 * 16 /* 1088px */ }}>
				<HeaderLHS />
				<div className="hidden xs:block spacer" />
				<div className="hidden xs:block">
					<HeaderRHS />
				</div>
			</div>
		</div>
	)
}
