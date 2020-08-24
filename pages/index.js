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

// // ??
// const tw = tw => `${tw * 4}rem`

const Home = () => (
	<div className="px-4 py-20 flex flex-row justify-center bg-blue-100">
		<header className="flex flex-row justify-between w-full max-w-6xl">

			{/* LHS */}
			<div>

				{/* H1 */}
				{/* */}
				{/* TODO: Propagate app stroke-width here. */}
				<h1 className="font-bold text-5xl">
					<span className="inline-flex flex-row items-center">
						Feathericons{" "}
						<Apply className="ml-2 w-10 h-10 text-blue-600">
							<FeatherSVG />
						</Apply>
					</span>
				</h1>

				{/* H2 */}
				<div className="h-4" />
				<h2 className="font-medium text-2xl">
					<a className="inline-flex flex-row items-center text-gray-800" href="https://twitter.com/username_ZAYDEK">
						<Apply className="mr-2 w-6 h-6 text-blue-600" style={{ strokeWidth: 2.5 }}>
							<HeartSVG />
						</Apply>
						Simply beautiful MIT open source icons
					</a>
				</h2>

				{/* H3 */}
				<div className="h-8" />
				<h3 className="text-xl gray-800">
					Icons by{" "}
					<a className="inline-flex flex-row items-center text-blue-600" href="https://twitter.com/colebemis">
						@colebemis{" "}
						<Apply className="ml-1 w-4 h-4 text-blue-500" style={{ strokeWidth: 3 }}>
							<ExternalLinkSVG />
						</Apply>
					</a>
				</h3>
				<h3 className="text-xl gray-800">
					Website by{" "}
					<a className="inline-flex flex-row items-center text-blue-600" href="https://twitter.com/username_ZAYDEK">
						@username_ZAYDEK{" "}
						<Apply className="ml-1 w-4 h-4 text-blue-500" style={{ strokeWidth: 3 }}>
							<ExternalLinkSVG />
						</Apply>
					</a>
				</h3>

				{/* CTA */}
				{/* */}
				{/* NOTE: Uses -mx-4 to offset borderRadius: 1rem. */}
				<div className="h-8" />
				<div className="-mx-4">
					<div className="space-x-3 flex flex-row">

						{/* Figma */}
						<Reset className="block">
							<a className="h-16 bg-blue-50 rounded-full shadow-hero-sm" href="TODO">
								<div className="px-6 flex flex-row justify-center items-center h-full">
									<Apply className="mr-3 w-6 h-6">
										<FigmaSVG />
									</Apply>
									<p className="text-lg gray-800">
										<span className="inline-flex flex-row items-center">
											Open in Figma
											<Apply className="ml-1.5 w-4 h-4 text-blue-500" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</a>
						</Reset>

						{/* GitHub */}
						<Reset className="block">
							<a className="h-16 bg-blue-50 rounded-full shadow-hero-sm" href="TODO">
								<div className="px-6 flex flex-row justify-center items-center h-full">
									<Apply className="mr-3 w-6 h-6">
										<GitHubSVG />
									</Apply>
									<p className="text-lg gray-800">
										<span className="inline-flex flex-row items-center">
											Open in GitHub
											<Apply className="ml-1.5 w-4 h-4 text-blue-500" style={{ strokeWidth: 3 }}>
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
			<div className="-mx-2 w-full max-w-lg">

				<h6 className="text-center font-bold text-xs tracking-wider text-blue-600">
					SPONSORED BY
				</h6>

				{/* Sponsors */}
				<div className="h-4" />
				<div className="flex flex-row justify-center flex-wrap">
					<Apply className="relative flex flex-row justify-center items-center">
						<div className="mx-2 my-1 w-44 h-16 rounded-full">
							<p className="font-bold text-2xl text-gray-800">
								QA Wolf
							</p>
							<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
								<p className="font-medium text-xs text-blue-800">
									browser testing
									<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
										<Apply className="ml-1 w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
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
								<p className="font-medium text-xs text-blue-800">
									designer ebook
									<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
										<Apply className="ml-1 w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
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
								<p className="font-medium text-xs text-blue-800">
									resume optimizer
									<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
										<Apply className="ml-1 w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
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
								<p className="font-medium text-xs text-blue-800">
									development agency
									<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
										<Apply className="ml-1 w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
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
								<p className="font-medium text-xs text-blue-800">
									graphics and icons
									<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
										<Apply className="ml-1 w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
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
								<p className="font-medium text-xs text-blue-800">
									figma plugin
									<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
										<Apply className="ml-1 w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
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
								<p className="font-medium text-xs text-blue-800">
									markdown editor
									<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
										<Apply className="ml-1 w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
											<ExternalLinkSVG />
										</Apply>
									</span>
								</p>
							</div>
						</div>
					</Apply>
				</div>

				<div className="h-4" />
				<h6 className="text-center font-bold text-xs tracking-wider text-blue-600">
					BECOME A SPONSOR{" "}
					<span className="ml-1 relative">
						<span className="mt-px absolute left-full inset-y-0 inline-flex flex-row items-baseline">
							<Apply className="w-3 h-3 text-blue-500" style={{ strokeWidth: 3 }}>
								<ExternalLinkSVG />
							</Apply>
						</span>
					</span>
				</h6>
				{/* </Apply> */}

			</div>

		</header>
	</div>
)

// <h6 className="text-center font-bold text-xs tracking-wider leading-normal text-blue-600">
// 	<span className="inline-flex flex-row items-center">
// 		OPEN IN GITHUB
// 		<Apply className="ml-1 -mt-px w-3 h-3 text-blue-600" style={{ strokeWidth: 3 }}>
// 			<ExternalLinkSVG className="inline-block" />
// 		</Apply>
// 	</span>
// </h6>

export default Home
