import PlaceholderText from "./PlaceholderText"
import React from "react"
import { range } from "./lib"

function Sponsor() {
	return (
		<div className="vstack space-8">
			<div className="hstack w-192 h-48 bg-placeholder rounded-full" />
			<PlaceholderText />
		</div>
	)
}

function TopAnchors() {
	return (
		<div className="hstack space-16 py-16">
			<PlaceholderText />
			<div className="spacer" />
			{range(2).map(each => (
				<PlaceholderText key={each} />
			))}
		</div>
	)
}

export default function Header() {
	return (
		<div className="zstack">
			<div className="hstack px-16 sm:px-24">
				<div className="vstack xl:hstack space-32 py-96 w-full" style={{ maxWidth: 1088 }}>
					{/* LHS */}
					<div className="vstack space-24">
						{/* Logo */}
						<div className="w-64 h-64 bg-placeholder rounded-full" />
						<div className="mt-32 w-192 h-24 bg-placeholder rounded-full" />
						<div className="mt-16 w-320 h-8 bg-placeholder rounded-full" />
						{/* CTA buttons */}
						<div className="vstack md:hstack space-16">
							<div
								className="hstack w-full md:w-192 h-48 bg-placeholder rounded-12 md:rounded-full"
								style={{ maxWidth: 512 }}
							/>
							<div
								// FIXME
								className="hstack w-full md:w-192 h-48 bg-placeholder bg-opacty-50 rounded-12 md:rounded-full"
								style={{ maxWidth: 512 }}
							/>
						</div>
					</div>

					{/* RHS */}
					<div className="hidden md:unhidden spacer" />
					<div className="hidden md:unhidden">
						<div className="vstack align-self-end space-24">
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
								<div className="-m-12 hstack wrap">
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
			</div>
			<div className="x-0 t-0 px-16 sm:px-24">
				<TopAnchors />
			</div>
		</div>
	)
}
