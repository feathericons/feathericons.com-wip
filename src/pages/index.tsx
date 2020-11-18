// import { rem } from "@zaydek/duomo/dist/runtime"

import Head from "next/head"
import { range } from "@zaydek/lib/dist/helpers"
import { useBreakpoints } from "@zaydek/lib/dist/hooks"

// TODO: Extract `<AppContainer>`.
export default function Home() {
	const screen = useBreakpoints({
		xs: 512,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280 + 64,
	})

	function Sponsor({ className }: { className?: string }) {
		return (
			<div className={"vstack stack-center space-8" + (!className ? "" : " " + className)}>
				<div className="w-160 h-48 bg-gray-200 rounded-full" />
				<p className="text-center">Sponsor</p>
			</div>
		)
	}

	return (
		<>
			<Head>
				<title>Feathericons</title>
				<link href="static/index.css" rel="stylesheet" />
			</Head>

			{/* Top row */}
			<div className="absolute x-0 t-0">
				<div className="hstack space-8 px-16 lg:px-24 p-12">
					<div className="hstack stack-center space-8">
						<div className="w-24 h-24 bg-gray-200 rounded-full" />
						<p>Tweet thank you!</p>
					</div>
					<div className="spacer" />
					<div className="hstack stack-center space-8">
						<p>Star on GitHub</p>
						<div className="w-24 h-24 bg-gray-200 rounded-full" />
					</div>
				</div>
			</div>
			{/* Wrapper */}
			<div className="vstack space-96 pt-96 xl:pb-64 bg-gray-50">
				{/**/}

				{/* CTA and sponsors */}
				<div className="hstack px-16 lg:px-24">
					<div className="vstack xl:hstack space-32 w-full" style={{ maxWidth: 1024 + 64 }}>
						{/**/}

						{/* LHS: CTA */}
						<div className="hstack">
							<div className="vstack stack-center space-16 w-full max-w-xs">
								<div className="w-64 h-64 bg-gray-400 rounded-full" />
								<h1 className="text-center">Open source icons</h1>
								<h2 className="mt-8 text-center">
									Created by{" "}
									<a href="TODO" className="on:underline">
										@colebemis
									</a>{" "}
									and{" "}
									<a href="TODO" className="on:underline">
										@username_ZAYDEK
									</a>
								</h2>
								{/* CTA buttons */}
								<div className="vstack sm:hstack space-16 w-full max-w-sm">
									{/* CTA button 1 */}
									<div className="vstack sm:w-192 h-56 bg-gray-200 rounded-12 sm:rounded-full">
										<div className="hstack space-8">
											<div className="w-24 h-24 bg-gray-400 rounded-full" />
											<p>Read docs</p>
										</div>
									</div>
									{/* CTA button 2 */}
									<div className="vstack sm:w-192 h-56 bg-gray-200 rounded-12 sm:rounded-full">
										<div className="hstack space-8">
											<div className="w-24 h-24 bg-gray-400 rounded-full" />
											<p>Download</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* RHS: Sponsors */}
						<div className="spacer" />
						{screen.sm && (
							<div className="hstack">
								<div className="vstack stack-center space-16">
									<div className="hstack stack-center space-8">
										<span>CHECK OUT OUR SPONSORS</span>
										<span>&middot;</span>
										<span>BECOME A SPONSOR</span>
										<span className="w-16 h-16 bg-gray-400 rounded-full" />
									</div>
									<div /* NOTE: Escapes the `m-*` context. */>
										{(!screen.xl && (
											<div className="-m-8 hstack" style={{ flexWrap: "wrap" }}>
												{/* <Sponsor className="m-8" />
												<Sponsor className="m-8" /> */}
												<Sponsor className="m-8" />
												<Sponsor className="m-8" />
												<Sponsor className="m-8" />
												<Sponsor className="m-8" />
												<Sponsor className="m-8" />
											</div>
										)) || (
											// NOTE: Do not use `flex-wrap: wrap`.
											<div className="vstack space-16">
												{/* <div className="hstack space-32">
													<Sponsor />
													<Sponsor />
												</div> */}
												<div className="hstack space-16">
													<Sponsor />
													<Sponsor />
													<Sponsor />
												</div>
												<div className="hstack space-16">
													<Sponsor />
													<Sponsor />
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						)}

						{/**/}
					</div>
				</div>

				{/* App */}
				<div className="hstack">
					{/* TODO: Add `overflow-x-hidden` because of `sticky t-0`? */}
					<div className="w-full max-w-xl bg-white xl:rounded-24 shadow-app">
						{screen.xl && (
							// NOTE: Use `>= z-20` not `z-10` here.
							<div className="sticky t-0 -mx-8 -mb-24 z-20">
								<div className="hstack">
									<svg
										className="w-8 h-40 text-gray-200 fill-currentColor"
										preserveAspectRatio="none"
										viewBox="0 0 1 1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width={1} height={1} />
									</svg>
									<svg
										className="w-24 h-40 text-gray-200 fill-currentColor"
										preserveAspectRatio="none"
										viewBox="0 0 24 40"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V40C0 26.7451 10.7451 16 24 16V0Z" />
									</svg>
									<svg
										className="w-full h-16 text-gray-200 fill-currentColor"
										preserveAspectRatio="none"
										viewBox="0 0 1 1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width={1} height={1} />
									</svg>
									<svg
										className="w-24 h-40 text-gray-200 fill-currentColor"
										preserveAspectRatio="none"
										viewBox="0 0 24 40"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V40C24 26.7451 13.2549 16 0 16V0Z" />
									</svg>
									<svg
										className="w-8 h-40 text-gray-200 fill-currentColor"
										preserveAspectRatio="none"
										viewBox="0 0 1 1"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width={1} height={1} />
									</svg>
								</div>
							</div>
						)}

						<div className="hstack">
							{/* LHS */}
							<div className="spacer">
								{/* Searh bar */}
								<div className="sticky t-0 xl:t-16 z-10">
									<div className="hstack stack-center space-16 p-24 bg-white border-b-1 xl:rounded-tl-24">
										<div className="w-32 h-32 bg-gray-200 rounded-full" />
										<div className="spacer" />
										{/* TODO: Change to `sm` or `lg`? */}
										<div className="hidden md:vstack px-6 w-128 h-32 bg-gray-100 rounded-full">
											<div className="hstack">
												<div className="w-20 h-20 bg-gray-300 rounded-full" />
												<div className="spacer" />
											</div>
										</div>
										<div className="w-32 h-32 bg-gray-200 rounded-full" />
									</div>
								</div>
								{/* Icons */}
								<div className="grid-cols-128 gap-16 px-16 sm:px-24 xl:px-64 py-64">
									{range(60).map(key => (
										<div key={key} className="aspect-ratio-1:1">
											<div className="vstack stack-center space-16">
												<div className="w-56 h-56 bg-gray-400 rounded-full" />
												<div className="w-96 h-12 bg-gray-200 rounded-full" />
											</div>
										</div>
									))}
								</div>
							</div>
							{/* RHS */}
							<div className="hidden md:block w-320 bg-gray-50 border-l-1 rounded-tr-24">
								<div className="sticky t-0 xl:t-16 z-10">
									{/* Preview */}
									{/* NOTE: Uses a nested `sticky` so preview appears on top. */}
									<div className="sticky t-0 xl:t-16 z-10">
										<div className="vstack h-288 bg-white border-b-1 rounded-tr-24">
											<div className="hstack stack-center space-16 p-24">
												<div className="w-32 h-32 bg-gray-200 rounded-full" />
												<div className="w-160 h-16 bg-gray-100 rounded-full" />
												<div className="spacer" />
											</div>
											<div className="spacer" />
										</div>
									</div>
									{/* Controls */}
									{range(2).map(key => (
										<div key={key} className="vstack space-16 p-24 border-b-1">
											<div className="hstack stack-center">
												<div className="w-96 h-12 bg-gray-200 rounded-full" />
												<div className="spacer" />
												<div className="w-16 h-16 bg-gray-200 rounded-full" />
											</div>
											<div className="hstack stack-center space-24">
												<div className="spacer">
													<div className="w-full h-8 bg-gray-200 rounded-full" />
												</div>
												<div className="w-64 h-32 bg-gray-200 rounded-full" />
											</div>
										</div>
									))}
									{/* Carbon */}
									<div className="hstack space-16 p-24 border-b-1">
										<div className="w-128 h-96 bg-gray-200 rounded-4" />
										<div className="spacer vstack space-8" data-stagger>
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="spacer" />
											<div className="h-8 bg-gray-200 rounded-full" style={{ alignSelf: "flex-end" }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="hidden xl:hstack mt-24">
					<div className="prose">
						<p className="text-center">
							<small>
								Feather is by <a href="TODO">Cole Bemis</a> and <a href="TODO">feathericons.com</a> by{" "}
								<a href="TODO">Zaydek</a>
								<br />
								Built using <a href="TODO">Duomo CSS</a> ☀️ and <a href="TODO">Prose CSS</a> 🧐
							</small>
						</p>
					</div>
				</div> */}

				{/**/}
			</div>
		</>
	)
}
