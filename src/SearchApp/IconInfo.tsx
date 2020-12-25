import Docs from "./docs.mdx"
import React from "react"
import { File, Folder, GitHub, Plus } from "react-feather"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"

// components={{
// 	KebabCase: () => name,
// 	BentoBox: () => <BentoBox SVG={SVG} />,
// 	Demos: () => <Demos SVG={SVG} />,
// 	More: () =>
// 		!metadata.more.length ? null : (
// 			<>
// 				<br />
// 				<h2>
// 					More Icons Like <code>{name}</code>
// 				</h2>
// 				<div>
// 					<More name={name} />
// 				</div>
// 			</>
// 		),
// }}

function BentoBox() {
	// prettier-ignore
	const ratios = [
		Math.round(24 * 1.67 * 1.67 * 1.67),
		Math.round(24 * 1.67 * 1.67),
		Math.round(24 * 1.67),
		24,
	]

	return (
		<div className="bento">
			<div className="hstack bento-item">
				<div
					className="bento-item-svg bg-gray-800 rounded-full"
					style={{ width: rem(ratios[0]!), height: rem(ratios[0]!) }}
				/>
			</div>
			<div className="hstack hidden lg:unhidden bento-item">
				<div
					className="bento-item-svg bg-gray-800 rounded-full"
					style={{ width: rem(ratios[1]!), height: rem(ratios[1]!) }}
				/>
			</div>
			<div className="hstack hidden lg:unhidden bento-item">
				<div
					className="bento-item-svg bg-gray-800 rounded-full"
					style={{ width: rem(ratios[2]!), height: rem(ratios[2]!) }}
				/>
			</div>
			<div className="hstack hidden lg:unhidden bento-item">
				<div
					className="bento-item-svg bg-gray-800 rounded-full"
					style={{ width: rem(ratios[3]!), height: rem(ratios[3]!) }}
				/>
			</div>
		</div>
	)
}

interface DemoWrapperProps {
	children?: React.ReactNode
}

function DemoWrapper({ children }: DemoWrapperProps) {
	return (
		// prettier-ignore
		<div className="hstack border-1 rounded-6">
			{children}
		</div>
	)
}

function Demos() {
	// prettier-ignore
	const demo1Ratios = [
		16 * Math.pow(1.5, 0),
		16 * Math.pow(1.5, 1),
		16 * Math.pow(1.5, 2),
		16 * Math.pow(1.5, 3),
	]

	return (
		<div
			className="grid gap-12"
			style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${rem(256)}, 1fr))`, gridAutoRows: rem(160) }}
		>
			{/* Demo 1 */}
			<DemoWrapper>
				<div className="hstack space-24">
					{demo1Ratios.map(each => (
						// <div style={{ width: rem(each), height: rem(each) }}>h</div>
						<div className="bg-gray-800 rounded-full" style={{ width: rem(each), height: rem(each) }}></div>
					))}
				</div>
			</DemoWrapper>

			{/* Demo 3 */}
			<DemoWrapper>
				<div
					className="align-self-center hstack space-12 px-24 py-12 rounded-8 shadow shadow-xs shadow-sm"
					style={{ backgroundColor: "#1da1f2" }}
				>
					{/* <SVG className="w-20 h-20 text-white" /> */}
					<div className="w-20 h-20 bg-white rounded-full"></div>
					<div className="weight-500 text-18 color-white">Follow me</div>
				</div>
			</DemoWrapper>

			{/* Demo 6 */}
			<DemoWrapper>
				<div className="vstack space-8">
					<div className="hstack space-12 px-12 w-192 h-36 bg-gray-100 rounded-8">
						<File className="w-16 h-16 text-gray-600" />
						<p>File</p>
						<div className="spacer"></div>
						<Plus className="w-16 h-16 text-gray-400" />
					</div>
					<div className="hstack space-12 px-12 w-192 h-36 bg-gray-100 rounded-8">
						<Folder className="w-16 h-16 text-gray-600" />
						<p>Folder</p>
						<div className="spacer"></div>
					</div>
					<div className="hstack space-12 px-12 w-192 h-36 bg-gray-100 rounded-8">
						<GitHub className="w-16 h-16 text-gray-600" />
						<p>Widget</p>
						<div className="spacer"></div>
					</div>
				</div>
			</DemoWrapper>
		</div>
	)
}

export default function IconInfo() {
	return (
		<div className="prose">
			<MarkdownProvider
				components={{
					KebabCase: () => "github",
					BentoBox,
					Demos,
				}}
			>
				<Docs />
			</MarkdownProvider>
		</div>
	)
}
