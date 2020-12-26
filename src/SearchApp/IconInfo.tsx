import Docs from "./docs.mdx"
import React, { useState } from "react"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"
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
	Trash2,
} from "react-feather"

function BentoBox() {
	// prettier-ignore
	const dimensions = [
		24 * Math.pow(1.5, 3),
		24 * Math.pow(1.5, 2),
		24 * Math.pow(1.5, 1),
		24 * Math.pow(1.5, 0),
	]

	return (
		<div className="bento-grid -mx-16 sm:mx-0">
			<div className="bento-grid-area hstack border-1 border-card">
				<GitHub
					className="bento-svg color-gray-800"
					style={{ width: rem(dimensions[0]!), height: rem(dimensions[0]!) }}
				/>
			</div>
			<div className="bento-grid-area hidden lg:unhidden hstack border-1 border-card">
				<GitHub
					className="bento-svg color-gray-800"
					style={{ width: rem(dimensions[1]!), height: rem(dimensions[1]!) }}
				/>
			</div>
			<div className="bento-grid-area hidden lg:unhidden hstack border-1 border-card">
				<GitHub
					className="bento-svg color-gray-800"
					style={{ width: rem(dimensions[2]!), height: rem(dimensions[2]!) }}
				/>
			</div>
			<div className="bento-grid-area hidden lg:unhidden hstack border-1 border-card">
				<GitHub
					className="bento-svg color-gray-800"
					style={{ width: rem(dimensions[3]!), height: rem(dimensions[3]!) }}
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
		// NOTE: Use `-mx-16 sm:mx-0 ... sm:rounded-6` to match `<pre>`.
		// NOTE: Use `-mt-1 sm:mt-0` to mask `border-1`.
		//
		// prettier-ignore
		<div className="hstack -mx-16 sm:mx-0 -mt-1 sm:mt-0 bg-gray-50 border-1 border-card sm:rounded-6">
			{children}
		</div>
	)
}

function Demo2() {
	const [show, setShow] = useState(false)

	return (
		<DemoWrapper>
			<div className="w-224 bg-white rounded-8 shadow shadow-px shadow-xs">
				<div className="hstack space-16 px-16 h-48">
					<GitHub className="w-18 h-18 color-gray-600" />
					<div className="spacer overflow-x-scroll">
						<div>username_ZAYDEK</div>
					</div>
				</div>
				{/* TODO */}
				<div className="h-1 bg-gray-100" />
				<div className="hstack space-16 px-16 h-48">
					<Lock className="w-18 h-18 color-gray-600" />
					<div className="spacer overflow-x-scroll">
						<div className={!show ? "tracking-10" : undefined}>{!show ? "•".repeat(11) : "l337h4xbr0!"}</div>
					</div>
					{!show ? (
						// prettier-ignore
						<EyeOff
							className="w-18 h-18 color-gray-400"
							onClick={() => setShow(!show)}
						/>
					) : (
						// prettier-ignore
						<Eye
							className="w-18 h-18 color-gray-400"
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
	const dimensions = [
		16 * Math.pow(1.5, 0),
		16 * Math.pow(1.5, 1),
		16 * Math.pow(1.5, 2),
		16 * Math.pow(1.5, 3),
	]

	return (
		<div
			className="grid sm:gap-12 !gap-1 -mx-16 sm:mx-0 !bg-gray-200 sm:rounded-4 !border-1 border-gray-200 sm:overflow-hidden"
			style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${rem(256)}, 1fr))`, gridAutoRows: rem(160) }}
		>
			{/* Demo 1 */}
			<DemoWrapper>
				<div className="hstack space-24">
					{dimensions.map((each, x) => (
						<GitHub key={x} className="color-gray-800" style={{ width: rem(each), height: rem(each) }} />
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
					{[Heart, MessageCircle, GitHub].map((Each, x) => (
						<div key={x} className="hstack space-8">
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
					{[Inbox, Trash2, Archive, GitHub].map((Each, x) => (
						<div key={x} className="hstack w-40 h-40 bg-white rounded-full shadow shadow-px shadow-xs">
							<Each className="w-18 h-18 color-gray-800" />
						</div>
					))}
				</div>
			</DemoWrapper>

			{/* Demo 6 */}
			<DemoWrapper>
				<div className="vstack space-8 w-192">
					<div className="align-self-stretch hstack space-16 px-16 h-36 bg-white rounded-8 shadow shadow-px shadow-xs">
						<File className="w-16 h-16 color-gray-600" />
						<p>File</p>
						<div className="spacer"></div>
						<Plus className="w-16 h-16 color-gray-400" />
					</div>
					<div className="align-self-stretch hstack space-16 px-16 h-36 bg-white rounded-8 shadow shadow-px shadow-xs">
						<Folder className="w-16 h-16 color-gray-600" />
						<p>Folder</p>
						<div className="spacer"></div>
					</div>
					<div className="align-self-stretch hstack space-16 px-16 h-36 bg-white rounded-8 shadow shadow-px shadow-xs">
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
		<article className="prose">
			<MarkdownProvider
				components={{
					KebabCase: () => "github",
					BentoBox,
					Demos,
				}}
			>
				<Docs />
			</MarkdownProvider>
		</article>
	)
}
