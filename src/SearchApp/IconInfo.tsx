import Docs from "./docs.mdx"
import React, { useState } from "react"
import { disableAutoCorrect } from "../lib"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"

import {
	ThemeCard,
	ThemeFadedSVG,
	ThemeGrayUI,
	ThemeRaisedUI,
	ThemeRaisedUISeparator,
	ThemeSVG,
	ThemeText,
} from "../ThemeElements"

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

function LargeDemo() {
	// prettier-ignore
	const specs = [
		24 * Math.pow(1.5, 0),
		24 * Math.pow(1.5, 1),
		24 * Math.pow(1.5, 2),
		24 * Math.pow(1.5, 3),
	]

	return (
		<ThemeCard className="hstack space-24 -mx-16 sm:mx-0 h-320 sm:rounded-8">
			{specs.map(each => (
				<ThemeSVG
					key={each}
					tag={GitHub}
					style={{
						width: rem(each),
						height: rem(each),
					}}
				/>
			))}
		</ThemeCard>
	)
}

interface DemoWrapperProps {
	children?: React.ReactNode
}

function DemoWrapper({ children }: DemoWrapperProps) {
	return <ThemeCard className="hstack sm:rounded-8">{children}</ThemeCard>
}

function Demo1() {
	// prettier-ignore
	const specs = [
		16 * Math.pow(1.5, 0),
		16 * Math.pow(1.5, 1),
		16 * Math.pow(1.5, 2),
		16 * Math.pow(1.5, 3),
	]

	return (
		<DemoWrapper>
			<div className="hstack space-16">
				{specs.map((each, x) => (
					<ThemeSVG
						key={x}
						tag={GitHub}
						style={{
							width: rem(each),
							height: rem(each),
						}}
					/>
				))}
			</div>
		</DemoWrapper>
	)
}

function Demo2() {
	const [user, setUser] = useState("username")
	const [pass, setPass] = useState("p455w0rd!")
	const [show, setShow] = useState(false)

	return (
		<DemoWrapper>
			<ThemeRaisedUI className="w-224 rounded-8">
				{/* Username */}
				<div className="zstack align-stretch h-48">
					<ThemeText
						tag="input"
						className="pl-48"
						type="text"
						value={user}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)}
						{...disableAutoCorrect}
					/>
					<div className="l-0 y-0 px-16 pointer-events-none">
						<div className="hstack h-full">
							<ThemeSVG tag={GitHub} className="transform scale-110" />
						</div>
					</div>
				</div>

				{/* Password */}
				<ThemeRaisedUISeparator className="h-1" />
				<div className="zstack align-stretch h-48">
					<ThemeText
						tag="input"
						className="px-48"
						style={{ letterSpacing: !show ? "0.1em" : undefined }}
						type={!show ? "password" : "text"}
						value={pass}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
						{...disableAutoCorrect}
					/>
					<div className="l-0 y-0 px-16 pointer-events-none">
						<div className="hstack h-full">
							<ThemeSVG tag={Lock} className="transform scale-110" />
						</div>
					</div>
					<div className="r-0 y-0 px-16" style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
						<div className="hstack h-full">
							<ThemeFadedSVG tag={!show ? EyeOff : Eye} className="transform scale-110" />
						</div>
					</div>
				</div>
			</ThemeRaisedUI>
		</DemoWrapper>
	)
}

function Demo3() {
	return (
		<DemoWrapper>
			<ThemeGrayUI className="align-self-center hstack space-8 px-24 py-16 rounded-full">
				<ThemeSVG tag={GitHub} className="w-18 h-18" />
				<ThemeText className="text-18">Tweet thanks! ❤️</ThemeText>
			</ThemeGrayUI>
		</DemoWrapper>
	)
}

function Demo4() {
	return (
		<DemoWrapper>
			<div className="hstack space-8">
				{[Heart, MessageCircle, GitHub].map((each, x) => (
					<ThemeGrayUI key={x} className="align-self-center hstack space-8 px-16 py-8 rounded-full">
						<ThemeSVG tag={each} />
						<ThemeText style={{ fontFeatureSettings: "'tnum'" }}>{0 + Math.floor(Math.random() * 20)}</ThemeText>
					</ThemeGrayUI>
				))}
			</div>
		</DemoWrapper>
	)
}

function Demo5() {
	return (
		<DemoWrapper>
			<div className="hstack space-8">
				{[Inbox, Trash2, Archive, GitHub].map((each, x) => (
					<ThemeGrayUI key={x} className="hstack w-48 h-48 rounded-full">
						<ThemeSVG tag={each} className="w-20 h-20" />
					</ThemeGrayUI>
				))}
			</div>
		</DemoWrapper>
	)
}

function Demo6() {
	return (
		<DemoWrapper>
			<div className="vstack space-8 w-192">
				{/* Item */}
				<ThemeGrayUI className="align-self-stretch hstack space-12 px-16 h-36 rounded-12">
					<ThemeSVG tag={File} className="transform scale-110" />
					<ThemeText>File</ThemeText>
					<div className="spacer" />
					<ThemeFadedSVG tag={Plus} className="transform scale-110" />
				</ThemeGrayUI>

				{/* Item */}
				<ThemeGrayUI className="align-self-stretch hstack space-12 px-16 h-36 rounded-12">
					<ThemeSVG tag={Folder} className="transform scale-110" />
					<ThemeText>Folder</ThemeText>
					<div className="spacer" />
				</ThemeGrayUI>

				{/* Item */}
				<ThemeGrayUI className="align-self-stretch hstack space-12 px-16 h-36 rounded-12">
					<ThemeSVG tag={GitHub} className="transform scale-110" />
					<ThemeText>Widget</ThemeText>
					<div className="spacer" />
				</ThemeGrayUI>
			</div>
		</DemoWrapper>
	)
}

function Demos() {
	return (
		<div id="demos" className="-mx-16 sm:mx-0">
			<Demo1 />
			<Demo2 />
			<Demo3 />
			<Demo4 />
			<Demo5 />
			<Demo6 />
		</div>
	)
}

export default function IconInfo() {
	return (
		<article className="prose">
			<MarkdownProvider
				components={{
					KebabCase: () => "github",
					LargeDemo,
					Demos,
				}}
			>
				<Docs />
			</MarkdownProvider>
		</article>
	)
}
