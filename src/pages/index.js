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

const APP_WIDE_MAX_WIDTH = 1280 + 64

const Header = () => (
	<header className="flex flex-row justify-between">

		{/* LHS */}
		<div className="px-6 flex flex-row justify-center items-center w-full" style={{ maxWidth: APP_WIDE_MAX_WIDTH - 400 - 16 /* TODO */ }}>
			<div>

				{/* H1 */}
				<h1 className="text-center font-medium text-4xl text-theme" /* style={{ fontFamily: "Poppins", letterSpacing: "-0.0125em" }} */>
					<span className="inline-flex flex-row items-center">
						Feathericons{" "}
						<Apply className="ml-2 w-6 h-6 text-alt-theme !transform !scale-110 !origin-bottom-left" style={{ strokeWidth: 2.25 }}>
							<FeatherSVG />
						</Apply>
					</span>
				</h1>

				{/* H2 */}
				<div className="h-2" />
				<h2 className="text-center text-xl text-blue-200">
					{/* Free, MIT Open Source Icons By Cole Bemis */}
					{/* <span className="inline-flex flex-row items-center" href="https://twitter.com/username_ZAYDEK"> */}
					{/* 	<Apply className="mr-2 w-4 h-4 fill-current text-alt-theme !transform !scale-110 !origin-bottom-right"> */}
					{/* 		<HeartSVG /> */}
					{/* 	</Apply> */}
					{/* 	Free, MIT Open Source Icons By Cole Bemis */}
					{/* </span> */}
					Free, MIT Open Source Icons By Cole Bemis
				</h2>

				{/* <a className="inline-flex flex-row items-center" href="https://twitter.com/username_ZAYDEK"> */}
				{/* 	<Apply className="mr-2 w-4 h-4 fill-current text-alt-theme !transform !scale-110 !origin-bottom-right"> */}
				{/* 		<HeartSVG /> */}
				{/* 	</Apply> */}
				{/* 	Free */}
				{/* </a>,{" "} */}

				{/* H3 */}
				{/* <div className="h-2" /> */}
				{/* <h3 className="font-medium text-blue-600"> */}
				{/* 	Icons by{" "} */}
				{/* 	<a className="inline-flex flex-row items-center" href="https://twitter.com/colebemis"> */}
				{/* 		@colebemis.{" "} */}
				{/* 		<Apply className="ml-1 w-4 h-4 text-blue-600 opacity-75" style={{ strokeWidth: 2.25 }}> */}
				{/* 			<ExternalLinkSVG /> */}
				{/* 		</Apply> */}
				{/* 	</a>{" "}&nbsp; */}
				{/* 	Website by{" "} */}
				{/* 	<a className="inline-flex flex-row items-center" href="https://twitter.com/username_ZAYDEK"> */}
				{/* 		@username_ZAYDEK{" "} */}
				{/* 		<Apply className="ml-1 w-4 h-4 text-blue-600 opacity-75" style={{ strokeWidth: 2.25 }}> */}
				{/* 			<ExternalLinkSVG /> */}
				{/* 		</Apply> */}
				{/* 	</a> */}
				{/* </h3> */}

				{/* H3 */}
				{/* <div className="h-8" /> */}
				{/* <h3 className="text-xl gray-800"> */}
				{/* 	Icons by{" "} */}
				{/* 	<a className="inline-flex flex-row items-center texttext-theme600" href="https://twitter.com/colebemis"> */}
				{/* 		@colebemis{" "} */}
				{/* 		<Apply className="ml-1 w-4 h-4" style={{ strokeWidth: 3 }}> */}
				{/* 			<ExternalLinkSVG /> */}
				{/* 		</Apply> */}
				{/* 	</a> */}
				{/* </h3> */}
				{/* <h3 className="text-xl gray-800"> */}
				{/* 	Website by{" "} */}
				{/* 	<a className="inline-flex flex-row items-center" href="https://twitter.com/username_ZAYDEK"> */}
				{/* 		@username_ZAYDEK{" "} */}
				{/* 		<Apply className="ml-1 w-4 h-4" style={{ strokeWidth: 3 }}> */}
				{/* 			<ExternalLinkSVG /> */}
				{/* 		</Apply> */}
				{/* 	</a> */}
				{/* </h3> */}

				{/* CTA */}
				<div className="h-8" />
				<div className="!-mx-6 space-x-3 flex flex-row justify-center">

					{/* Figma */}
					<Reset className="block">
						<a className="h-16 !bg-white bg-opacity-25" style={{ backdropFilter: "brightness(110%) saturate(110%)", borderRadius: "1rem" }} href="TODO">
							<div className="px-4 flex flex-row justify-center items-center h-full">
								<Apply className="mr-2 w-5 h-5 text-theme" style={{ strokeWidth: 2.25 }}>
									{/* <FigmaSVG /> */}
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
										Open in Figma
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
						<a className="h-16 !bg-white bg-opacity-25" style={{ backdropFilter: "brightness(110%) saturate(110%)", borderRadius: "1rem" }} href="TODO">
							<div className="px-4 flex flex-row justify-center items-center h-full">
								<Apply className="mr-2 w-5 h-5 text-theme" style={{ strokeWidth: 2.25 }}>
									{/* <GitHubSVG /> */}
									<svg viewBox="0 0 16 16" fill="currentColor">
										<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
									</svg>
								</Apply>
								<p className="text-lg text-theme">
									<span className="inline-flex flex-row items-center">
										Open in GitHub
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
		{/* */}
		{/* NOTE: Uses -mx-2 to offset sponsors mx-2 */}
		<div className="relative" style={{ width: 400 }}>
			<div className="absolute inset-y-0 right-0 flex flex-row items-center" style={{ marginLeft: -128 /* TODO */ }}>
				<div className="-mx-2 w-full max-w-lg">

					<h6 className="text-center font-bold !text-xs tracking-wider text-gray-800" style={{ fontSize: "0.6875rem" }}>
						SPONSORED BY
					</h6>

					{/* Sponsors */}
					{/* <div className="h-4" /> */}
					<div className="flex flex-row justify-center flex-wrap">
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-600">
									QA Wolf
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="!text-xs text-gray-600" style={{ fontSize: "0.6875rem" }}>
										browser testing
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
								<p className="font-bold text-2xl text-gray-600">
									Hot Tips Ebook
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="!text-xs text-gray-600" style={{ fontSize: "0.6875rem" }}>
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
								<p className="font-bold text-2xl text-gray-600">
									SkillSyncer
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="!text-xs text-gray-600" style={{ fontSize: "0.6875rem" }}>
										resume optimizer
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
								<p className="font-bold text-2xl text-gray-600">
									codetisans_
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="!text-xs text-gray-600" style={{ fontSize: "0.6875rem" }}>
										development agency
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
								<p className="font-bold text-2xl text-gray-600">
									Streamline
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="!text-xs text-gray-600" style={{ fontSize: "0.6875rem" }}>
										graphics and icons
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
								<p className="font-bold text-2xl text-gray-600">
									SPELLL
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="!text-xs text-gray-600" style={{ fontSize: "0.6875rem" }}>
										figma plugin
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
								<p className="font-bold text-2xl text-gray-600">
									codex
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="!text-xs text-gray-600" style={{ fontSize: "0.6875rem" }}>
										markdown editor
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
					<h6 className="text-center font-bold !text-xs tracking-wider text-gray-800" style={{ fontSize: "0.6875rem" }}>
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
	<footer className="mt-8">

		<Apply className="text-center">
			<p>
				<span className="inline-flex flex-row items-center h-full">
					Feathericons created by{" "}
					<span className="mx-1 w-5 h-5 bg-gray-300 rounded-full" />{" "}
					@colebemis.
				</span>{" "}
				<span className="inline-flex flex-row items-center h-full">
					feathericons.com created by{" "}
					<span className="mx-1 w-5 h-5 bg-gray-300 rounded-full" />{" "}
					@username_ZAYDEK.
				</span>
			</p>
		</Apply>

	</footer>
)

const Home = () => (
	<div className="px-4 pt-24 pb-8 flex flex-row justify-center">
		<div className="w-full" style={{ maxWidth: APP_WIDE_MAX_WIDTH }}>
			<Header />
			<Main />
			<Footer />
		</div>
	</div>
)

export default Home
