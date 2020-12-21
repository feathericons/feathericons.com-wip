import PlaceholderText from "./PlaceholderText"
import React from "react"
import { range } from "./lib"

function Sponsor() {
	return (
		<div className="vstack space-8">
			<div className="hstack w-192 h-48 bg-less-important rounded-full" />
			<PlaceholderText />
		</div>
	)
}

export default function Header() {
	return (
		<div className="hstack px-16 sm:px-24">
			<div className="vstack xl:hstack space-32 py-96 w-full" style={{ maxWidth: 1088 }}>
				{/* LHS */}
				<div className="vstack space-24">
					{/* Logo */}
					<div className="w-64 h-64 bg-more-important rounded-full"></div>
					<div className="mt-32 w-192 h-24 bg-less-important rounded-full"></div>
					<div className="mt-16 w-320 h-8 bg-less-important rounded-full"></div>
					{/* CTA buttons */}
					<div className="vstack md:hstack space-16">
						{range(2).map(each => (
							<div
								key={each}
								className="hstack w-full md:w-192 h-48 bg-less-important rounded-16 md:rounded-full"
								style={{ maxWidth: 512 }}
							>
								<PlaceholderText />
							</div>
						))}
					</div>
				</div>
				{/* RHS */}
				<div className="hidden md:unhidden spacer"></div>
				<div className="hidden md:unhidden vstack align-self-end space-24">
					{/* Sponsor text */}
					<div className="hstack space-16">
						{range(2).map(each => (
							<PlaceholderText key={each} />
						))}
					</div>
					{/* Sponsors / Honeycomb pattern */}
					<div className="hidden xl:unhidden hstack space-24">
						{range(3).map(each => (
							<Sponsor key={each} />
						))}
					</div>
					<div className="hidden xl:unhidden hstack space-24">
						{range(2).map(each => (
							<Sponsor key={each} />
						))}
					</div>
					{/* Sponsors / Wrap pattern */}
					<div className="unhidden xl:hidden">
						<div className="-m-12 hstack" style={{ flexWrap: "wrap" }}>
							{range(5).map(each => (
								<div key={each} className="m-12">
									<Sponsor />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
