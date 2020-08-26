import Apply from "lib/x/Apply"
import ApplyTransition from "lib/x/ApplyTransition"
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

		{/* <div className="p-6 absolute top-0 left-0"> */}
		{/* 	<Apply className="w-6 h-6 text-gray-100"> */}
		{/* 		<svg viewBox="0 0 24 24" fill="currentColor"> */}
		{/* 			<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" /> */}
		{/* 		</svg> */}
		{/* 	</Apply> */}
		{/* </div> */}

		<div className="px-6 py-4 absolute top-0 left-0">
			<p className="text-sm">
				<span className="inline-flex flex-row items-center text-gray-100">
					<Apply className="mr-3 w-5 h-5 text-gray-100" /* style={{ color: "rgb(29, 161, 242)" }} */>
						<svg viewBox="0 0 24 24" fill="currentColor">
							<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
						</svg>
					</Apply>
					Share with your followers
				</span>
			</p>
		</div>

		{/* LHS */}
		<Apply style={{ marginTop: -25 }}>
			<div className="px-6 flex flex-col items-center w-full" style={{ maxWidth: MAIN_PANEL_WIDTH }}>

				{/* H1 */}
				<h1 className="text-center font-semibold text-5xl text-gray-100" style={{ fontSize: 40 }}>
					<span className="inline-flex flex-row items-baseline">
						{/* Feathericons{" "} */}
						<Apply className="ml-2 w-10 h-10 text-red-500 fill-current" style={{ strokeWidth: 2.125 }}>
							<HeartSVG />
						</Apply>
						<Apply className="ml-2 w-10 h-10" style={{ strokeWidth: 2.125 }}>
							<FeatherSVG />
						</Apply>
					</span>
				</h1>

				{/* H2 */}
				<div className="h-5" />
				<h2 className="text-center text-3xl text-gray-100">
					<span className="inline-flex flex-row items-baseline">
						{/* <Apply className="mr-2 w-5 h-5 text-red-500 fill-current" style={{ strokeWidth: 2.25 }}> */}
						{/* 	<HeartSVG /> */}
						{/* </Apply> */}
						{/* MIT open source icons by Cole Bemis */}
						Simply beautiful open source icons
					</span>
				</h2>

			</div>
		</Apply>

		{/* RHS */}
		<div className="relative" style={{ width: SIDE_PANEL_WIDTH }}>
			<div className="absolute right-0 flex flex-row items-center" style={{ marginLeft: -112, marginRight: -16, marginTop: -48 }}>
				<div className="w-full max-w-lg">

					<h6 className="text-center font-bold tracking-wider text-gray-100" style={{ fontSize: "0.6875rem" }}>
						SPONSORED BY
					</h6>

					{/* Sponsors */}
					<div className="h-2" />
					<div className="flex flex-row justify-center flex-wrap">
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 w-44 h-14 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									QA Wolf
								</p>
								{/* <div className="absolute bottom-0 inset-x-0 flex flex-row justify-center"> */}
								{/* 	<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}> */}
								{/* 		open source browser driver */}
								{/* 		<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}> */}
								{/* 			<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}> */}
								{/* 				<ExternalLinkSVG /> */}
								{/* 			</Apply> */}
								{/* 		</span> */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 w-44 h-14 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									Hot Tips Ebook
								</p>
								{/* <div className="absolute bottom-0 inset-x-0 flex flex-row justify-center"> */}
								{/* 	<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}> */}
								{/* 		designer ebook */}
								{/* 		<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}> */}
								{/* 			<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}> */}
								{/* 				<ExternalLinkSVG /> */}
								{/* 			</Apply> */}
								{/* 		</span> */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 w-36 h-14 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									SkillSyncer
								</p>
								{/* <div className="absolute bottom-0 inset-x-0 flex flex-row justify-center"> */}
								{/* 	<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}> */}
								{/* 		resumé software */}
								{/* 		<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}> */}
								{/* 			<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}> */}
								{/* 				<ExternalLinkSVG /> */}
								{/* 			</Apply> */}
								{/* 		</span> */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 w-36 h-14 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									codetisans_
								</p>
								{/* <div className="absolute bottom-0 inset-x-0 flex flex-row justify-center"> */}
								{/* 	<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}> */}
								{/* 		developer studio */}
								{/* 		<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}> */}
								{/* 			<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}> */}
								{/* 				<ExternalLinkSVG /> */}
								{/* 			</Apply> */}
								{/* 		</span> */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 w-36 h-14 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									Streamline
								</p>
								{/* <div className="absolute bottom-0 inset-x-0 flex flex-row justify-center"> */}
								{/* 	<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}> */}
								{/* 		icons and graphics */}
								{/* 		<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}> */}
								{/* 			<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}> */}
								{/* 				<ExternalLinkSVG /> */}
								{/* 			</Apply> */}
								{/* 		</span> */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 w-44 h-14 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									SPELLL
								</p>
								{/* <div className="absolute bottom-0 inset-x-0 flex flex-row justify-center"> */}
								{/* 	<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}> */}
								{/* 		Figma spellchecker plugin */}
								{/* 		<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}> */}
								{/* 			<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}> */}
								{/* 				<ExternalLinkSVG /> */}
								{/* 			</Apply> */}
								{/* 		</span> */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</Apply>
						<Apply className="relative flex flex-row justify-center items-center">
							<div className="mx-2 w-44 h-14 rounded-full">
								<p className="font-bold text-2xl text-gray-100">
									codex
								</p>
								{/* <div className="absolute bottom-0 inset-x-0 flex flex-row justify-center"> */}
								{/* 	<p className="text-gray-800" style={{ fontSize: "0.6875rem" }}> */}
								{/* 		open source markdown editor */}
								{/* 		<span className="inline-flex flex-row items-center" style={{ verticalAlign: "-0.0625rem" }}> */}
								{/* 			<Apply className="ml-1 w-2.5 h-2.5 text-blue-600 opacity-75" style={{ strokeWidth: 3 }}> */}
								{/* 				<ExternalLinkSVG /> */}
								{/* 			</Apply> */}
								{/* 		</span> */}
								{/* 	</p> */}
								{/* </div> */}
							</div>
						</Apply>
					</div>

					<div className="h-2" />
					<h6 className="text-center font-bold tracking-wider text-gray-100" style={{ fontSize: "0.6875rem" }}>
						SPONSOR US{" "}
						{/* <span className="ml-1 relative"> */}
						{/* 	<span className="absolute left-full inset-y-0 inline-flex flex-row items-baseline"> */}
						{/* 		<Apply className="w-3 h-3 text-blue-600 opacity-75" style={{ strokeWidth: 2.25 }}> */}
						{/* 			<ExternalLinkSVG /> */}
						{/* 		</Apply> */}
						{/* 	</span> */}
						{/* </span> */}
					</h6>
					{/* </Apply> */}

				</div>
			</div>
		</div>

	</header>
)

const Main = () => (
	// NOTE: Uses items-start because of sticky top-0.
	<main className="pt-40 flex flex-row items-start">

		{/* LHS */}
		<div className="flex-1">
			{false && (
				<>
					<div className="-mt-4 pt-4 sticky top-0 inset-x-0">
						<div className="shadow-sm" style={{ borderRadius: "1rem" }}>
							<div className="px-6 py-4 w-full bg-white shadow-hero-lg" style={{ height: "4.5rem" /* TODO */, borderRadius: "1rem" }}>
								Search 282 icons
							</div>
						</div>
					</div>
					<div className="h-4" />
				</>
			)}
			<div className="shadow-sm" style={{ borderRadius: "1rem" }}>
				<div className="bg-white shadow-hero-lg" style={{ borderRadius: "1rem" }}>

					{/* Search */}
					<div className="sticky top-0 inset-x-0" style={{ top: "1rem" }}>
						<div className="px-10 py-8 h-20 bg-white border-b border-gray-100" style={{ boxShadow: "0 0 0 1px var(--blue-300), 0 0 0 4px var(--blue-200)", borderRadius: "1rem" }}>
							<div className="flex flex-row items-center h-full">
								Search 282 icons
							</div>
						</div>
					</div>

					{/* Icons */}
					<div className="px-6 py-4">
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
	<footer className="pt-8 flex flex-row justify-center" style={{ maxWidth: MAIN_PANEL_WIDTH }}>

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

const Page = () => {

	// Canvas Gradient Animation by Luis Jose Rivera
	//
	// https://codepen.io/luisjoserivera/pen/oePeNy
	React.useLayoutEffect(() => {
		try {
			const c = document.getElementById("canv")
			const $ = c.getContext("2d")
			const col = function(x, y, r, g, b) {
				$.fillStyle = "rgb(" + r + "," + g + "," + b + ")"
				$.fillRect(x, y, 1, 1)
			}
			const R = function(x, y, t) {
				return 0 // (Math.floor(100 + 64 * Math.cos((x * x - y * y) / 300 + t)))
			}
			// 72
			const G = function(x, y, t) {
				return (Math.floor(96 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)))
			}
			// 320
			const B = function(x, y, t) {
				return (Math.floor(320 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)))
			}
			let t = 0
			var run = function() {
				for (let x = 0; x <= 32; x++) {
					for (let y = 0; y <= 32; y++) {
						col(x, y, R(x, y, t), G(x, y, t), B(x, y, t))
					}
				}
				t += 0.12 / 2
				window.requestAnimationFrame(run)
			}
			run()
		} catch (error) {
			console.error(error)
		}
	}, [])

	return (
		<div className="px-4 pt-40 pb-8 flex flex-row justify-center">

			<div className="absolute inset-0" style={{ zIndex: -1, height: 560 }}>
				<canvas id="canv" className="w-full h-full bg-gradient-to-tl from-blue-600 to-blue-500" width={32} height={32} />
				{/* <div className="absolute bottom-0 inset-x-0"> */}
				{/* 	<div className="h-64 bg-gradient-to-b from-transparent to-white" /> */}
				{/* </div> */}
			</div>

			<div className="w-full" style={{ maxWidth: APP_WIDE }}>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}

export default Page
