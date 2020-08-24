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

const tw = tw => `${tw * 4}rem`

// background-color: #21D4FD;
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
const Home = () => (
	<>

		{/* Background */}
		<div className="absolute inset-0" style={{ zIndex: -1 }}>
			<div className="relative" style={{ width: 1440, height: 675 }}>

				{/* Background */}
				<img src="light-mode-gradient.png" />

				{/* Background fade-out */}
				<div className="absolute bottom-0 inset-x-0">
					<div class="h-64 bg-gradient-to-b from-transparent to-white" />
				</div>

			</div>
		</div>

		{/* App */}
		<div className="px-4 py-16 flex flex-row justify-center">
			<div className="flex flex-row justify-between w-full max-w-screen-xl">

				{/* LHS */}
				<div>

					{/* H1 */}
					{/* */}
					{/* TODO: Propagate app stroke-width here. */}
					<h1 className="font-semibold text-5xl tracking-tight text-theme" style={{ fontFamily: "Poppins" }}>
						<span className="inline-flex flex-row items-center">
							Feathericons
							{/* {" "} */}
							{/* <Apply className="ml-2 w-10 h-10" style={{ color: "#00a3ff" }}> */}
							{/* 	<FeatherSVG /> */}
							{/* </Apply> */}
						</span>
					</h1>

					{/* H2 */}
					<div className="h-2" />
					<h2 className="font-medium text-xl text-theme">
						<a className="inline-flex flex-row items-center" href="https://twitter.com/username_ZAYDEK">
							<Apply className="mr-2 w-5 h-5 fill-current" style={{ strokeWidth: 2 }}>
								<HeartSVG />
							</Apply>
							Simply beautiful MIT open source icons
						</a>
					</h2>

					{/* H3 */}
					{/* <div className="h-8" /> */}
					{/* <h3 className="text-xl gray-800"> */}
					{/* 	Icons by{" "} */}
					{/* 	<a className="inline-flex flex-row items-center texttext-theme600" href="https://twitter.com/colebemis"> */}
					{/* 		@colebemis{" "} */}
					{/* 		<Apply className="ml-1 w-4 h-4 text-theme" style={{ strokeWidth: 3 }}> */}
					{/* 			<ExternalLinkSVG /> */}
					{/* 		</Apply> */}
					{/* 	</a> */}
					{/* </h3> */}
					{/* <h3 className="text-xl gray-800"> */}
					{/* 	Website by{" "} */}
					{/* 	<a className="inline-flex flex-row items-center text-theme" href="https://twitter.com/username_ZAYDEK"> */}
					{/* 		@username_ZAYDEK{" "} */}
					{/* 		<Apply className="ml-1 w-4 h-4 text-theme" style={{ strokeWidth: 3 }}> */}
					{/* 			<ExternalLinkSVG /> */}
					{/* 		</Apply> */}
					{/* 	</a> */}
					{/* </h3> */}

					{/* CTA */}
					{/* */}
					{/* NOTE: Uses -mx-4 to offset borderRadius: 1rem. */}
					<div className="h-8" />
					<div className="-mx-4">
						<div className="space-x-3 flex flex-row">

							{/* Figma */}
							<Reset className="block">
								<a className="h-16 bg-white bg-opacity-25" style={{ backdropFilter: "saturate(200%)", borderRadius: "1rem" }} href="TODO">
									<div className="px-6 flex flex-row justify-center items-center h-full">
										<Apply className="mr-3 w-6 h-6 text-white">
											<FigmaSVG />
										</Apply>
										<p className="text-lg text-white">
											<span className="inline-flex flex-row items-center">
												Open in Figma
												{/* <Apply className="ml-1.5 w-4 h-4 text-theme" style={{ strokeWidth: 3 }}> */}
												{/* 	<ExternalLinkSVG /> */}
												{/* </Apply> */}
											</span>
										</p>
									</div>
								</a>
							</Reset>

							{/* GitHub */}
							<Reset className="block">
								<a className="h-16 bg-white bg-opacity-25" style={{ backdropFilter: "saturate(200%)", borderRadius: "1rem" }} href="TODO">
									<div className="px-6 flex flex-row justify-center items-center h-full">
										<Apply className="mr-3 w-6 h-6 text-white">
											<GitHubSVG />
										</Apply>
										<p className="text-lg text-white">
											<span className="inline-flex flex-row items-center">
												Open in GitHub
												{/* <Apply className="ml-1.5 w-4 h-4 text-theme" style={{ strokeWidth: 3 }}> */}
												{/* 	<ExternalLinkSVG /> */}
												{/* </Apply> */}
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

					{/* <h6 className="text-center font-bold text-xs tracking-wider text-theme"> */}
					{/* 	SPONSORED BY */}
					{/* </h6> */}

					{/* Sponsors */}
					{/* <div className="h-4" /> */}
					<div className="flex flex-row justify-center flex-wrap">
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									QA Wolf
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="font-medium text-xs text-theme">
										browser testing
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
											<Apply className="ml-1 w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									Hot Tips Ebook
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="font-medium text-xs text-theme">
										designer ebook
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
											<Apply className="ml-1 w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-36 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									SkillSyncer
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="font-medium text-xs text-theme">
										resume optimizer
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
											<Apply className="ml-1 w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-36 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									codetisans_
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="font-medium text-xs text-theme">
										development agency
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
											<Apply className="ml-1 w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-36 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									Streamline
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="font-medium text-xs text-theme">
										graphics and icons
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
											<Apply className="ml-1 w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									SPELLL
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="font-medium text-xs text-theme">
										figma plugin
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
											<Apply className="ml-1 w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 my-1 w-44 h-16 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									codex
								</p>
								<div className="absolute bottom-0 inset-x-0 flex flex-row justify-center">
									<p className="font-medium text-xs text-theme">
										markdown editor
										<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.125rem" }}>
											<Apply className="ml-1 w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
												<ExternalLinkSVG />
											</Apply>
										</span>
									</p>
								</div>
							</div>
						</Apply>
					</div>

					<div className="h-4" />
					<h6 className="text-center font-bold text-xs tracking-wider text-theme">
						BECOME A SPONSOR{" "}
						<span className="ml-1 relative">
							<span className="mt-px absolute left-full inset-y-0 inline-flex flex-row items-baseline">
								<Apply className="w-3 h-3 text-theme" style={{ strokeWidth: 3 }}>
									<ExternalLinkSVG />
								</Apply>
							</span>
						</span>
					</h6>
					{/* </Apply> */}

				</div>

			</div>
		</div>

		<div className="-mt-16 px-4 py-16 flex flex-row justify-center">
			<div className="flex flex-row justify-between w-full max-w-screen-xl">

				<main className="flex flex-row items-start w-full">

					{/* LHS */}
					{/* */}
					{/* NOTE: w-full is needed. */}
					<div className="w-full">
						<div className="px-6 py-4 w-full h-20 bg-white shadow-hero-lg" style={{ borderRadius: "1rem" }}>
							Search 282 icons
						</div>
						<div className="h-8" />
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

					{/* RHS */}
					<div className="w-8" />
					<div className="-mt-4 pt-4 sticky top-0 right-0">
						<div className="px-6 py-4 bg-white shadow-hero-lg" style={{ width: 560, borderRadius: "1rem" }}>
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

				</main>

			</div>
		</div>

	</>
)

export default Home
