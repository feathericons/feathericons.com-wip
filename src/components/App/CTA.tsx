import EmbossedFeather from "./EmbossedFeather"
import Link from "next/link"
import React from "react"
import sponsors from "../../fixtures/sponsors"
import useBreakpoints from "../hooks/useBreakpoints"
import { Download, ExternalLink, GitHub } from "react-feather"
import { ExtAnchor } from "@zaydek/lib/dist/components"
import { Sponsor } from "./Sponsor"

export default function CTA() {
	const screen = useBreakpoints()

	return (
		<div
			className="hstack px-16 lg:px-24 py-96"
			style={{ backgroundImage: "linear-gradient(90deg, #0065ff, #7648ff)" }}
		>
			<div className="vstack xl:hstack space-48 w-full" style={{ maxWidth: 1024 + 32 }}>
				{/**/}

				{/* CTA buttons */}
				<div className="hstack">
					<div className="vstack stack-center space-24 w-full max-w-xs">
						<Link href="/">
							<a>
								<EmbossedFeather className="w-56 h-56 text-white" />
							</a>
						</Link>
						<h1
							className="text-center text-36 -tracking-1.25 leading-1 text-white"
							style={{ fontFamily: "'DM Sans', ui-sans-serif, sans-serif" }}
						>
							Open source icons
						</h1>
						<h2 className="mt-12 text-center text-17 text-white">
							Created by{" "}
							<ExtAnchor className="font-600 on:underline" href="TODO">
								@colebemis
							</ExtAnchor>{" "}
							and{" "}
							<ExtAnchor className="font-600 on:underline" href="TODO">
								@username_ZAYDEK
							</ExtAnchor>
						</h2>
						{/* CTA buttons */}
						<div className="vstack md:hstack space-12 md:space-16 w-full max-w-md">
							{/* TODO: Change to `<button>` or `<ExtAnchor>`. */}
							<div className="vstack md:w-192 h-56 bg-white rounded-12 md:rounded-full">
								<div className="hstack stack-center space-8">
									<GitHub className="w-20 h-20" />
									<p className="font-500 text-17 leading-1 text-gray-800">Read docs</p>
								</div>
							</div>
							{/* TODO: Change to `<button>` or `<ExtAnchor>`. */}
							<div className="vstack md:w-192 h-56 bg-blue-500 rounded-12 md:rounded-full">
								<div className="hstack stack-center space-8">
									<Download className="w-20 h-20 text-white" />
									<p className="font-500 text-17 leading-1 text-white">Download</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Sponsors */}
				{screen.md && (
					<>
						<div className="spacer" />
						<div className="vstack">
							<div className="spacer" />
							<div className="hstack">
								<div className="vstack stack-center space-24">
									<div className="hstack stack-center space-8">
										{/* NOTE: Use `<span>` because of `hstack` context. */}
										<span className="font-500 text-10 tracking-2.5 leading-1 text-white">CHECK OUT OUR SPONSORS</span>
										<span className="font-500 text-10 tracking-2.5 leading-1 text-white">&middot;</span>
										<a className="group hstack stack-center space-6" href="TODO">
											<span className="font-500 text-10 tracking-2.5 leading-1 group-on:underline text-white">
												BECOME A SPONSOR
											</span>
											<ExternalLink className="w-13 h-12 text-gray-200" />
										</a>
									</div>
									{/* NOTE: Use `<div>` to escape the `-m-*` context. */}
									<div className="block xl:hidden">
										<div className="-m-12  hstack" style={{ flexWrap: "wrap" }}>
											{sponsors.map(each => (
												<Sponsor key={each.href} className="m-12" sponsor={each} />
											))}
										</div>
									</div>
									<div className="hidden xl:vstack space-24">
										<div className="hstack space-24">
											{sponsors.slice(0, 3).map(each => (
												<Sponsor key={each.href} sponsor={each} />
											))}
										</div>
										<div className="hstack space-24">
											{sponsors.slice(3).map(each => (
												<Sponsor key={each.href} sponsor={each} />
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}

				{/**/}
			</div>
		</div>
	)
}
