import Apply from "lib/x/Apply"
import Link from "next/Link"
import Reset from "lib/x/Reset"

import { ExternalLink as ExternalLinkSVG } from "react-feather"
import { Feather as FeatherSVG } from "react-feather"

// // ??
// const tw = tw => `${tw * 4}rem`

const Home = () => (
	<div className="px-4 py-16 flex flex-row justify-center bg-gray-100">
		<div className="flex flex-row justify-between w-full max-w-screen-xl">

			{/* LHS */}
			<div>

				{/* H1 */}
				<div className="flex flex-row items-center">
					<h1
						className="font-bold text-5xl"
						// style={{
						// 	fontSize: "3rem",
						// 	lineHeight: 1,
						// }}
					>
						Feathericons
					</h1>
					<Apply className="ml-2 w-10 h-10 text-blue-600">
						<FeatherSVG />
					</Apply>
				</div>

				{/* H2 */}
				<div className="h-4" />
				<h2 className="text-xl">
					<span className="inline-flex flex-row items-center">
						<Apply className="w-4 h-4 text-blue-600" style={{ strokeWidth: 2.5 }}>
							<FeatherSVG className="inline-block" />
						</Apply>
					</span>{" "}
					Feathericons by{" "}
					<span className="inline-flex flex-row items-center">
						<a className="font-medium text-blue-600" href="https://twitter.com/colebemis">
							@colebemis{" "}
							<Apply className="ml-1 w-4 h-4" style={{ strokeWidth: 3.25 }}>
								<ExternalLinkSVG className="inline-block" />
							</Apply>
						</a>
					</span>
				</h2>
				<h2 className="text-xl">
					feathericons.dev by{" "}
					<span className="inline-flex flex-row items-center">
						<a className="font-medium text-blue-600" href="https://twitter.com/username_ZAYDEK">
							@username_ZAYDEK{" "}
							<Apply className="ml-1 w-4 h-4" style={{ strokeWidth: 3.25 }}>
								<ExternalLinkSVG className="inline-block" />
							</Apply>
						</a>
					</span>
				</h2>

				{/* CTA */}
				<div className="h-8" />
				<div className="-mx-4">
					<div className="-mx-2 flex flex-row">

						<Reset className="block">
							<a className="mx-2 my-1 h-16 bg-white rounded-full">
								<div className="px-6 flex flex-row justify-center items-center h-full">
									<div className="mr-3 w-4 h-4 bg-gray-200" />
									<p className="font-medium">
										Open in Figma
									</p>
									<div className="ml-3 w-4 h-4 bg-gray-200" />
								</div>
							</a>
						</Reset>
						<Reset className="block">
							<a className="mx-2 my-1 h-16 bg-white rounded-full">
								<div className="px-6 flex flex-row justify-center items-center h-full">
									<div className="mr-3 w-4 h-4 bg-gray-200" />
									<p className="font-medium">
										Open in GitHub
									</p>
									<div className="ml-3 w-4 h-4 bg-gray-200" />
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
					<div className="mx-2 my-1 w-44 h-12 bg-white rounded-full" />
					<div className="mx-2 my-1 w-44 h-12 bg-white rounded-full" />
					<div className="mx-2 my-1 w-36 h-12 bg-white rounded-full" />
					<div className="mx-2 my-1 w-36 h-12 bg-white rounded-full" />
					<div className="mx-2 my-1 w-36 h-12 bg-white rounded-full" />
					<div className="mx-2 my-1 w-44 h-12 bg-white rounded-full" />
					<div className="mx-2 my-1 w-44 h-12 bg-white rounded-full" />
				</div>

				<div className="h-4" />
				<h6 className="text-center font-bold text-xs tracking-wider text-blue-600">
					BECOME A SPONSOR
				</h6>

			</div>

		</div>
	</div>
)

export default Home
