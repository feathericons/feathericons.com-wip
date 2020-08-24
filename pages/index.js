import Apply from "lib/x/Apply"
import Link from "next/Link"
import Reset from "lib/x/Reset"

import {
	ExternalLink as ExternalLinkSVG,
	Feather as FeatherSVG,
	Figma as FigmaSVG,
	GitHub as GitHubSVG,
} from "react-feather"

// // ??
// const tw = tw => `${tw * 4}rem`

const Home = () => (
	<div className="px-4 py-20 flex flex-row justify-center bg-blue-100">
		<div className="flex flex-row justify-between w-full max-w-screen-xl">

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
					</span>{" "}
				</h1>

				{/* H2 */}
				<div className="h-8" />
				<h2 className="text-xl gray-800">
					<span className="inline-flex flex-row items-center font-medium text-blue-600">
						<Apply className="w-4 h-4" style={{ strokeWidth: 2.25 }}>
							<FeatherSVG />
						</Apply>
					</span>{" "}
					Feathericons by{" "}
					<a className="inline-flex flex-row items-center text-blue-600" href="https://twitter.com/colebemis">
						@colebemis{" "}
						<Apply className="ml-1 w-4 h-4 text-blue-500" style={{ strokeWidth: 3 }}>
							<ExternalLinkSVG />
						</Apply>
					</a>
				</h2>
				<h2 className="text-xl gray-800">
					feathericons.dev by{" "}
					<a className="inline-flex flex-row items-center text-blue-600" href="https://twitter.com/username_ZAYDEK">
						@username_ZAYDEK{" "}
						<Apply className="ml-1 w-4 h-4 text-blue-500" style={{ strokeWidth: 3 }}>
							<ExternalLinkSVG />
						</Apply>
					</a>
				</h2>

				{/* CTA */}
				{/* */}
				{/* NOTE: Uses -mx-4 to offset borderRadius: 1rem. */}
				<div className="h-8" />
				<div className="-mx-4">
					<div className="space-x-3 flex flex-row">

						{/* Figma */}
						<Reset className="block">
							<a className="h-16 bg-blue-50 shadow-hero-sm" href="TODO" style={{ borderRadius: "1rem" }}>
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
							<a className="h-16 bg-blue-50 shadow-hero-sm" href="TODO" style={{ borderRadius: "1rem" }}>
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
					OUR SPONSORS
				</h6>

				{/* Sponsors */}
				<div className="h-4" />
				<div className="flex flex-row justify-center flex-wrap">
					<div className="mx-2 my-1 w-44 h-12 bg-blue-50 rounded-full shadow-hero-sm" />
					<div className="mx-2 my-1 w-44 h-12 bg-blue-50 rounded-full shadow-hero-sm" />
					<div className="mx-2 my-1 w-36 h-12 bg-blue-50 rounded-full shadow-hero-sm" />
					<div className="mx-2 my-1 w-36 h-12 bg-blue-50 rounded-full shadow-hero-sm" />
					<div className="mx-2 my-1 w-36 h-12 bg-blue-50 rounded-full shadow-hero-sm" />
					<div className="mx-2 my-1 w-44 h-12 bg-blue-50 rounded-full shadow-hero-sm" />
					<div className="mx-2 my-1 w-44 h-12 bg-blue-50 rounded-full shadow-hero-sm" />
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

		</div>
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
