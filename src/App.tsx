import React, { useEffect } from "react"
import { DocumentTitle, range } from "./lib"
import { Duomo } from "@zaydek/duomo/dist/runtime"
import { Route, Switch } from "react-router-dom"

function TopRow() {
	return (
		<div className="hstack space-16 px-16 sm:px-24">
			<div className="hstack space-8">
				<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
				<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
			</div>
			<div className="spacer"></div>
			{range(2).map(each => (
				<div key={each} className="hstack space-8">
					<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
					<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
				</div>
			))}
		</div>
	)
}

function Header() {
	function Sponsor() {
		return (
			<div className="vstack space-8">
				<div className="hstack w-192 h-48 bg-gray-200 rounded-full">
					<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
				</div>
				{/* Sponsor text */}
				<div className="hstack space-8">
					<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
					<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
				</div>
			</div>
		)
	}

	return (
		<div className="hstack px-16 sm:px-24">
			<div className="vstack xl:hstack space-32 py-96 w-full" style={{ maxWidth: 1088 }}>
				{/* LHS */}
				<div className="vstack space-24">
					{/* Logo */}
					<div className="w-64 h-64 bg-gray-200 rounded-full"></div>
					<div className="w-192 h-24 bg-gray-200 rounded-full"></div>
					<div className="mt-16 w-320 h-8 bg-gray-200 rounded-full"></div>
					{/* CTA buttons */}
					<div className="vstack md:hstack space-16">
						{range(2).map(each => (
							<div
								key={each}
								className="hstack w-full md:w-192 h-48 bg-gray-200 rounded-16 md:rounded-full"
								style={{ maxWidth: 512 }}
							>
								<div className="hstack space-8">
									<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
									<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* RHS */}
				<div className="hidden md:unhidden spacer"></div>
				<div className="hidden md:unhidden vstack align-self-end space-24">
					{/* Sponsor text */}
					<div className="hstack space-16">
						<div className="hstack space-8">
							<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
							<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
						</div>
						<div className="hstack space-8">
							<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
							<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
						</div>
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

function AppLHS() {
	return (
		<div className="spacer">
			{range(64).map(each => (
				<div key={each}>Hello, world!</div>
			))}
		</div>
	)
}

function AppRHS() {
	return (
		// NOTE: Use `align-self-stretch` because of `w-320`.
		<div className="hidden md:unhidden align-self-stretch w-320 bg-gray-50 border-l-1 xl:rounded-r-24">
			<div className="sticky top-0">
				{/* NOTE: Use `align-stretch` here. */}
				<div className="vstack align-stretch h-screen">
					{/* Preview */}
					{/* NOTE: Use `align-self-stretch` because of `h-320`. */}
					<div className="zstack align-self-stretch h-320 bg-white border-b-1 rounded-tr-24">
						<div className="w-64 h-64 bg-gray-200 rounded-full"></div>
						{/* Top */}
						<div className="absolute top-0 inset-x-0 p-24">
							<div className="hstack space-24">
								{/* <div className="w-96 h-8 bg-gray-200 rounded-full"></div> */}
								<div className="spacer"></div>
								<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
							</div>
						</div>
						{/* Bottom */}
						<div className="absolute bottom-0 inset-x-0 p-24">
							<div className="hstack space-24">
								<div className="spacer h-8 bg-gray-200 rounded-full">
									<div></div>
								</div>
								<div className="w-64 h-24 bg-gray-200 rounded-full"></div>
							</div>
						</div>
					</div>
					{/* Sliders */}
					<div className="overflow-y-scroll">
						{range(2).map(each => (
							<div key={each} className="vstack space-16 p-24 border-b-1">
								{/* Top */}
								<div className="hstack space-24">
									<div className="w-96 h-8 bg-gray-200 rounded-full"></div>
									<div className="spacer"></div>
									<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
								</div>
								{/* Bottom */}
								<div className="hstack space-24">
									<div className="spacer h-8 bg-gray-200 rounded-full">
										<div></div>
									</div>
									<div className="w-64 h-24 bg-gray-200 rounded-full"></div>
								</div>
							</div>
						))}
					</div>
					{/* Ad */}
					<div className="spacer"></div>
					<div className="hstack space-16 p-24 border-t-1">
						<div className="w-128 h-96 bg-gray-200 rounded-4"></div>
						<div className="spacer vstack align-self-start align-start space-8 py-4">
							<div className="h-8 bg-gray-200 rounded-full" data-stagger-3></div>
							<div className="h-8 bg-gray-200 rounded-full" data-stagger-2></div>
							<div className="h-8 bg-gray-200 rounded-full" data-stagger-1></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function App() {
	return (
		<div className="hstack">
			<div className="hstack w-full max-w-xl bg-white xl:rounded-24 shadow shadow-px shadow-md">
				<AppLHS />
				<AppRHS />
			</div>
		</div>
	)
}

function Home() {
	useEffect(() => {
		type DevMode = "development" | "production"
		return Duomo.init(process.env.NODE_ENV as DevMode)
	}, [])

	return (
		<div className="py-16 pb-64 bg-gray-50">
			<style>{`
				:root {
					--border-color-default: hsl(var(--gray-200));
				}
			`}</style>
			<TopRow />
			<Header />
			<App />
		</div>
	)
}

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<DocumentTitle title="Feathericons">
					<Home />
				</DocumentTitle>
			</Route>
		</Switch>
	)
}
