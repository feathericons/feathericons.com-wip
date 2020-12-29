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
			<div className="hstack border-y-1 sm:border-x-1 sm:rounded-6 ui-card">
				<GitHub
					className="ui-svg"
					style={{
						width: rem(sizes[0]!),
						height: rem(sizes[0]!),
					}}
				/>
			</div>
			<div className="hidden lg:unhidden hstack border-1 rounded-6 ui-card">
				<GitHub
					className="ui-svg"
					style={{
						width: rem(sizes[1]!),
						height: rem(sizes[1]!),
					}}
				/>
			</div>
			<div className="hidden lg:unhidden hstack border-1 rounded-6 ui-card">
				<GitHub
					className="ui-svg"
					style={{
						width: rem(sizes[2]!),
						height: rem(sizes[2]!),
					}}
				/>
			</div>
			<div className="hidden lg:unhidden hstack border-1 rounded-6 ui-card">
				<GitHub
					className="ui-svg"
					style={{
						width: rem(sizes[3]!),
						height: rem(sizes[3]!),
					}}
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
		<div className="hstack border-1 rounded-6 ui-card">
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
			<div className="w-224 rounded-8 ui-card ui-demo-2">
				{/* Username */}
				<div className="zstack align-stretch h-48">
					<input
						className="px-16 pl-48 w-full bg-transparent ui-demo-2-username"
						type="text"
						value={user}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setUser(e.target.value)
						}}
						{...disableAutoCorrect}
					/>
					<div className="inset-y-0 left-0 px-16 pointer-events-none">
						<div className="hstack h-full">
							<GitHub className="w-16 h-16 transform scale-110 ui-svg" />
						</div>
					</div>
				</div>
				{/* Password */}
				<div className="h-1 ui-demo-2-hr" />
				<div className="zstack align-stretch h-48">
					<input
						className="px-48 w-full bg-transparent ui-demo-2-username"
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
							<Lock className="w-16 h-16 transform scale-110 ui-svg" />
						</div>
					</div>
					<div className="inset-y-0 right-0 px-16" style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
						<div className="hstack h-full">
							<SVG svg={!show ? EyeOff : Eye} className="w-16 h-16 transform scale-110 ui-faded-svg" />
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
								className="ui-svg"
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
					className="align-self-center hstack space-12 px-24 py-12 rounded-8 ui-demo-3"
				>
					<GitHub className="w-18 h-18 ui-demo-3-svg" />
					<div className="weight-500 text-18 ui-demo-3-text">Follow me</div>
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
						<div key={x} className="hstack w-40 h-40 rounded-full shadow shadow-px shadow-xs">
							<Each className="w-18 h-18 ui-svg" />
						</div>
					))}
				</div>
			</DemoWrapper>

			{/* Demo 6 */}
			<DemoWrapper>
				<div className="vstack space-8 w-192">
					<div className="align-self-stretch hstack space-16 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<File className="w-16 h-16 ui-svg" />
						<p>File</p>
						<div className="spacer"></div>
						<Plus className="w-16 h-16 ui-faded-svg" />
					</div>
					<div className="align-self-stretch hstack space-16 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<Folder className="w-16 h-16 ui-svg" />
						<p>Folder</p>
						<div className="spacer"></div>
					</div>
					<div className="align-self-stretch hstack space-16 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<GitHub className="w-16 h-16 ui-svg" />
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
