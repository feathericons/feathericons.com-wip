import Apply from "lib/x/Apply"
import Link from "next/Link"
import Reset from "lib/x/Reset"

import {
	ArrowUpRight as ArrowUpRightSVG,
	ExternalLink as ExternalLinkSVG,
	Feather as FeatherSVG,
	Figma as FigmaSVG,
	GitHub as GitHubSVG,
	Heart as HeartSVG,
	Info as InfoSVG,
} from "react-feather"

const APP_WIDE = 1280 + 64
const SIDE_PANEL_WIDTH = 384
const MAIN_PANEL_WIDTH = APP_WIDE - SIDE_PANEL_WIDTH

const Header = () => (
	<header className="flex flex-row justify-between">

		{/* LHS */}
		<div className="px-6 flex flex-row justify-center w-full" style={{ maxWidth: MAIN_PANEL_WIDTH }}>
			<div>

				{/* H1 */}
				<h1 className="text-center font-semibold text-5xl" style={{ letterSpacing: "-0.0125em" }}>
					<span className="inline-flex flex-row items-baseline">
						Feathericons{" "}
						<Apply className="ml-2 w-10 h-10 text-theme" style={{ strokeWidth: 2.25 }}>
							<FeatherSVG />
						</Apply>
					</span>
				</h1>

				{/* H2 */}
				<div className="h-3" />
				<h2 className="text-center text-2xl">
					<span className="inline-flex flex-row items-baseline">
						<Apply className="mr-2 w-5 h-5 text-red-500 fill-current" style={{ strokeWidth: 2.25 }}>
							<HeartSVG />
						</Apply>
						MIT open source icons by Cole Bemis
					</span>
				</h2>

				{/* CTA */}
				<div className="h-8" />
				<div className="!-mx-6 space-x-3 flex flex-row justify-center">

					{/* Figma */}
					<Reset className="block">
						{/* style={{ backdropFilter: "brightness(110%) saturate(110%)" }} */}
						<a className="h-16 bg-blue-100" style={{ borderRadius: "1rem" }} href="TODO">
							<div className="px-4 flex flex-row justify-center items-center h-full">
								<Apply className="mr-3 w-5 h-5 text-theme" style={{ strokeWidth: 2.25 }}>
									<svg viewBox="0 0 38 57">
										<path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
										<path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
										<path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
										<path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
										<path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
									</svg>
								</Apply>
								<p className="text-lg text-theme">
									<span className="inline-flex flex-row items-center">
										Open in Figma{" "}
										<Apply className="ml-1.5 w-4 h-4 text-blue-600 opacity-75" style={{ strokeWidth: 2.25 }}>
											<ExternalLinkSVG />
										</Apply>
									</span>
								</p>
							</div>
						</a>
					</Reset>

					{/* GitHub */}
					<Reset className="block">
						{/* style={{ backdropFilter: "brightness(110%) saturate(110%)" }} */}
						<a className="h-16 bg-blue-100" style={{ borderRadius: "1rem" }} href="TODO">
							<div className="px-4 flex flex-row justify-center items-center h-full">
								<Apply className="mr-3 w-5 h-5 text-theme" style={{ strokeWidth: 2.25 }}>
									<svg viewBox="0 0 16 16" fill="currentColor">
										<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
									</svg>
								</Apply>
								<p className="text-lg text-theme">
									<span className="inline-flex flex-row items-center">
										Open in GitHub{" "}
										<Apply className="ml-1.5 w-4 h-4 text-blue-600 opacity-75" style={{ strokeWidth: 2.25 }}>
											<ExternalLinkSVG />
										</Apply>
									</span>
								</p>
							</div>
						</a>
					</Reset>

				</div>

			</div>
		</div>

		{/* RHS */}
		<div className="relative" style={{ width: SIDE_PANEL_WIDTH }}>
			{/* NOTE: Uses -mx-2 to offset mx-2. */}
			<div className="-mx-2 absolute inset-y-0 right-0 flex flex-row items-center" style={{ marginLeft: -128 }}>
				<div className="w-full max-w-lg">

					{/* NOTE: Uses -mb-1 to offset mb-1. */}
					<h6 className="text-center font-bold tracking-wider text-blue-600" style={{ fontSize: "0.6875rem" }}>
						SPONSORED BY
					</h6>

					{/* Sponsors */}
					<div className="flex flex-row justify-center flex-wrap">
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-800">
									QA Wolf
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}>
										open source browser driver
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}>
											<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-800">
									Hot Tips Ebook
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}>
										designer ebook
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}>
											<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-36 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-800">
									SkillSyncer
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}>
										resumé software
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}>
											<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-36 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-800">
									codetisans_
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}>
										developer studio
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}>
											<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-36 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-800">
									Streamline
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}>
										icons and graphics
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}>
											<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-800">
									SPELLL
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}>
										Figma spellchecker plugin
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}>
											<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-800">
									codex
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}>
										open source markdown editor
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}>
											<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
					</div>

					<div className="h-4" />
					<h6 className="text-center font-bold tracking-wider text-blue-600" style={{ fontSize: "0.6875rem" }}>
						SPONSOR US{" "}
						<span className="ml-1 relative">
							<span className="absolute left-full inset-y-0 inline-flex flex-row items-baseline">
								<Apply className="w-3 h-3 text-blue-600 opacity-75" style={{ strokeWidth: 2.25 }}>
									<ExternalLinkSVG />
								</Apply>
							</span>
						</span>
					</h6>
					{/* </Apply> */}

				</div>
			</div>
		</div>

	</header>
)

const Main = () => (
	// NOTE: Uses items-start because of sticky top-0.
	<main className="mt-24 flex flex-row items-start">

		{/* LHS */}
		{/* */}
		{/* NOTE: w-full is needed. */}
		<div className="w-full">
			<div className="-mt-4 pt-4 sticky top-0 inset-x-0">
				<div className="shadow-sm" style={{ borderRadius: "1rem" }}>
					<div className="px-6 py-4 w-full !h-20 bg-white shadow-hero-lg" style={{ height: "4.5rem" /* TODO */, borderRadius: "1rem" }}>
							Search 282 icons
					</div>
				</div>
			</div>
			<div className="h-4" />
			<div className="shadow-sm" style={{ borderRadius: "1rem" }}>
				<div className="px-6 py-4 w-full h-full bg-white shadow-hero-lg" style={{ borderRadius: "1rem" }}>
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
					icon<br />
				</div>
			</div>
		</div>

		{/* RHS */}
		<Apply className="flex-shrink-0">
			<div className="w-4" />
		</Apply>
		<div className="-mt-4 pt-4 sticky top-0 right-0">
			<div className="shadow-sm" style={{ borderRadius: "1rem" }}>
				<div className="px-6 py-4 bg-white shadow-hero-lg" style={{ width: 400 /* TODO */, borderRadius: "1rem" }}>
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
					Hello<br />
				</div>
			</div>
		</div>

	</main>
)

const Footer = () => (
	<footer className="mt-8 flex flex-row justify-center" style={{ maxWidth: MAIN_PANEL_WIDTH }}>

		<p className="text-center">
			<span className="inline-flex flex-row items-center h-full">
				Feathericons created by{" "}
				<span className="mx-1 w-5 h-5 bg-gray-300 rounded-full" />{" "}
				<span className="text-blue-600">
					@colebemis
				</span>
				.
			</span>{" "}
			<span className="inline-flex flex-row items-center h-full">
				feathericons.com created by{" "}
				<span className="mx-1 w-5 h-5 bg-gray-300 rounded-full" />{" "}
				<span className="text-blue-600">
					@username_ZAYDEK
				</span>
				.
			</span>
		</p>

	</footer>
)

const Page = () => (
	<div className="mx-4 mt-24 mb-8 flex flex-row justify-center">
		<div className="w-full" style={{ maxWidth: APP_WIDE }}>
			<Header />
			<Main />
			<Footer />
		</div>
	</div>
)

export default Page
