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
import { disableAutoCorrect } from "../lib"

function Bento() {
	// prettier-ignore
	const sizes = [
		24 * Math.pow(1.5, 3),
		24 * Math.pow(1.5, 2),
		24 * Math.pow(1.5, 1),
		24 * Math.pow(1.5, 0),
	]

	return (
		<div id="bento" className="-mx-16 sm:mx-0">
			<li className="hstack border-y-1 sm:border-x-1 sm:rounded-6" data-id="card">
				<GitHub
					data-id="svg"
					style={{
						width: rem(sizes[0]!),
						height: rem(sizes[0]!),
					}}
				/>
			</li>
			<li className="hidden lg:unhidden hstack border-1 rounded-6" data-id="card">
				<GitHub
					data-id="svg"
					style={{
						width: rem(sizes[1]!),
						height: rem(sizes[1]!),
					}}
				/>
			</li>
			<li className="hidden lg:unhidden hstack border-1 rounded-6" data-id="card">
				<GitHub
					data-id="svg"
					style={{
						width: rem(sizes[2]!),
						height: rem(sizes[2]!),
					}}
				/>
			</li>
			<li className="hidden lg:unhidden hstack border-1 rounded-6" data-id="card">
				<GitHub
					data-id="svg"
					style={{
						width: rem(sizes[3]!),
						height: rem(sizes[3]!),
					}}
				/>
			</li>
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
		<div className="hstack border-1 rounded-6" data-id="card">
			{children}
		</div>
	)
}

// TODO: Possibly change `"svg"` to any.
interface SVGProps extends React.ComponentProps<"svg"> {
	svg?: React.FunctionComponent
}

// TODO: Extract this.
function SVG({ svg: Component, ...props }: SVGProps) {
	return <>{Component && <Component {...props} />}</>
}

function Demo2() {
	const [user, setUser] = useState("username_ZAYDEK")
	const [pass, setPass] = useState("l337h4xbr0!")
	const [show, setShow] = useState(false)

	return (
		<DemoWrapper>
			<div className="w-224 rounded-8" data-id="demo-2">
				{/* Username */}
				<div className="zstack align-stretch h-48">
					<input
						className="px-16 pl-48 w-full bg-transparent"
						data-id="demo-2-username"
						type="text"
						value={user}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setUser(e.target.value)
						}}
						{...disableAutoCorrect}
					/>
					<div className="inset-y-0 left-0 px-16 pointer-events-none">
						<div className="hstack h-full">
							<GitHub className="w-16 h-16 transform scale-110" data-id="svg" />
						</div>
					</div>
				</div>
				{/* Password */}
				<div className="h-1" data-id="demo-2-hr" />
				<div className="zstack align-stretch h-48">
					<input
						className="px-48 w-full bg-transparent"
						data-id="demo-2-username"
						style={{ letterSpacing: !show ? "0.1em" : undefined }}
						type={!show ? "password" : "text"}
						value={pass}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setPass(e.target.value)
						}}
						{...disableAutoCorrect}
					/>
					<div className="inset-y-0 left-0 px-16 pointer-events-none">
						<div className="hstack h-full">
							<Lock className="w-16 h-16 transform scale-110" data-id="svg" />
						</div>
					</div>
					<div className="inset-y-0 right-0 px-16" style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
						<div className="hstack h-full">
							<SVG svg={!show ? EyeOff : Eye} className="w-16 h-16 transform scale-110" data-id="faded-svg" />
						</div>
					</div>
				</div>
			</div>
		</DemoWrapper>
	)
}

function Demos() {
	return (
		<div id="demos" className="-mx-16 sm:mx-0">
			{/* Demo 1 */}
			{/* prettier-ignore */}
			<DemoWrapper>
				<div className="hstack space-24">
					{[
						16 * Math.pow(1.5, 0),
						16 * Math.pow(1.5, 1),
						16 * Math.pow(1.5, 2),
						16 * Math.pow(1.5, 3),
					].map(
						(each, x) => (
							<GitHub
								key={x}
								data-id="svg"
								style={{
									width: rem(each),
									height: rem(each),
								}}
							/>
						),
					)}
				</div>
			</DemoWrapper>

			{/* Demo 2 */}
			<Demo2 />

			{/* Demo 3 */}
			<DemoWrapper>
				<div
					// NOTE: Use `align-self-center` because does not use `w-*` or `h-*`.
					className="align-self-center hstack space-12 px-24 py-12 rounded-8"
					data-id="demo-3"
				>
					<GitHub className="w-18 h-18" data-id="demo-3-svg" />
					<div className="weight-500 text-18" data-id="demo-3-text">
						Follow me
					</div>
				</div>
			</DemoWrapper>

			{/* Demo 4 */}
			<DemoWrapper>
				<div className="hstack space-8">
					{[Heart, MessageCircle, GitHub].map((each, x) => (
						<li key={x} className="align-self-center hstack space-8 px-16 py-8 rounded-full" data-id="demo-4-li">
							<SVG svg={each} className="w-16 h-16" data-id="demo-4-li-svg" />
							<div className="text-16" data-id="demo-4-li-text" style={{ fontFeatureSettings: "'tnum'" }}>
								{0 + Math.floor(Math.random() * 20)}
							</div>
						</li>
					))}
				</div>
			</DemoWrapper>

			{/* Demo 5 */}
			<DemoWrapper>
				<div className="hstack space-12">
					{[Inbox, Trash2, Archive, GitHub].map((each, x) => (
						<li key={x} className="hstack w-48 h-48 rounded-full" data-id="demo-5-li">
							<SVG svg={each} className="w-20 h-20" data-id="svg" />
						</li>
					))}
				</div>
			</DemoWrapper>

			{/* Demo 6 */}
			<DemoWrapper>
				<div className="vstack space-8 w-192">
					<div className="align-self-stretch hstack space-16 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<File className="w-16 h-16" data-id="svg" />
						<p>File</p>
						<div className="spacer"></div>
						<Plus className="w-16 h-16" data-id="faded-svg" />
					</div>
					<div className="align-self-stretch hstack space-16 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<Folder className="w-16 h-16" data-id="svg" />
						<p>Folder</p>
						<div className="spacer"></div>
					</div>
					<div className="align-self-stretch hstack space-16 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<GitHub className="w-16 h-16" data-id="svg" />
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
					Bento,
					Demos,
				}}
			>
				<Docs />
			</MarkdownProvider>
		</article>
	)
}
