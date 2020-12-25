import Docs from "./docs.mdx"
import React, { useState } from "react"
import {
	Archive,
	Eye,
	EyeOff,
	File,
	Folder,
	GitHub,
	Heart,
	Inbox,
	Lock,
	MessageCircle,
	Plus,
	Share2,
	Trash2,
} from "react-feather"
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
		<div className="bento-grid -mx-16 sm:mx-0">
			<div className="bento-grid-area hstack border-1">
				<div
					className="bento-svg bg-gray-800 rounded-full"
					style={{ width: rem(ratios[0]!), height: rem(ratios[0]!) }}
				/>
			</div>
			<div className="bento-grid-area hidden lg:unhidden hstack border-1">
				<div
					className="bento-svg bg-gray-800 rounded-full"
					style={{ width: rem(ratios[1]!), height: rem(ratios[1]!) }}
				/>
			</div>
			<div className="bento-grid-area hidden lg:unhidden hstack border-1">
				<div
					className="bento-svg bg-gray-800 rounded-full"
					style={{ width: rem(ratios[2]!), height: rem(ratios[2]!) }}
				/>
			</div>
			<div className="bento-grid-area hidden lg:unhidden hstack border-1">
				<div
					className="bento-svg bg-gray-800 rounded-full"
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
		<div className="hstack bg-gray-50 border-1 rounded-6">
			{children}
		</div>
	)
}

function Demo2() {
	const [show, setShow] = useState(false)

	return (
		<DemoWrapper>
			<div className="w-224 bg-white rounded-8 shadow shadow-xs shadow-sm">
				<div className="hstack space-16 px-16 h-48">
					<GitHub className="w-16 h-16 color-gray-600" />
					<div className="spacer overflow-x-scroll">
						<div>username_ZAYDEK</div>
					</div>
				</div>
				<hr className="border-gray-100" />
				<div className="hstack space-16 px-16 h-48">
					<Lock className="w-16 h-16 color-gray-600" />
					<div className="spacer overflow-x-scroll">
						<div className={!show ? "tracking-10" : undefined}>{!show ? "•".repeat(11) : "l337h4xbr0!"}</div>
					</div>
					{!show ? (
						// prettier-ignore
						<EyeOff
							className="w-16 h-16 color-gray-400 on:text-gray-600"
							onClick={() => setShow(!show)}
						/>
					) : (
						// prettier-ignore
						<Eye
							className="w-16 h-16 color-gray-400 on:text-gray-600"
							onClick={() => setShow(!show)}
						/>
					)}
				</div>
			</div>
		</DemoWrapper>
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

			{/* Demo 2 */}
			<Demo2 />

			{/* Demo 3 */}
			<DemoWrapper>
				<div
					className="align-self-center hstack space-12 px-24 py-12 rounded-8 shadow shadow-px shadow-md"
					style={{ backgroundColor: "#1da1f2" }}
				>
					<GitHub className="w-20 h-20 color-white color-opacity-95" />
					<div className="weight-500 text-18 color-white color-opacity-95">Follow me</div>
				</div>
			</DemoWrapper>

			{/* Demo 4 */}
			<DemoWrapper>
				<div className="hstack space-16">
					{[Heart, MessageCircle, GitHub].map(Each => (
						<div className="hstack space-8">
							<Each className="w-16 h-16" />
							<div className="text-16" style={{ fontFeatureSettings: "'tnum'" }}>
								{10 + Math.floor(Math.random() * 90)}
							</div>
						</div>
					))}
				</div>
			</DemoWrapper>

			{/* Demo 5 */}
			<DemoWrapper>
				<div className="hstack space-12">
					{[Inbox, Trash2, Archive, GitHub].map(Each => (
						<div className="hstack w-40 h-40 bg-gray-100 rounded-full">
							<Each className="w-18 h-18 color-gray-800" />
						</div>
					))}
				</div>
			</DemoWrapper>

			{/* Demo 6 */}
			<DemoWrapper>
				<div className="vstack space-8">
					<div className="hstack space-12 px-12 w-192 h-36 bg-gray-100 rounded-8">
						<File className="w-16 h-16 color-gray-600" />
						<p>File</p>
						<div className="spacer"></div>
						<Plus className="w-16 h-16 color-gray-400" />
					</div>
					<div className="hstack space-12 px-12 w-192 h-36 bg-gray-100 rounded-8">
						<Folder className="w-16 h-16 color-gray-600" />
						<p>Folder</p>
						<div className="spacer"></div>
					</div>
					<div className="hstack space-12 px-12 w-192 h-36 bg-gray-100 rounded-8">
						<GitHub className="w-16 h-16 color-gray-600" />
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
