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
	Trash2,
} from "react-feather"
import { disableAutoCorrect } from "../lib"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"
import { ThemeDemoBtn, ThemeDemoBtnText } from "../ThemeElements"

// TODO: Extract.
function SVG({ svg: Component, ...props }: SVGProps) {
	return <>{Component && <Component {...props} />}</>
}

interface SVGProps extends React.ComponentProps<"svg"> {
	svg?: React.FunctionComponent
}

function ThemeDemoBtnSVG({ svg, ...props }: SVGProps) {
	return <SVG svg={svg} data-theme-id="DemoBtnSVG" {...props} />
}
function ThemeDemoBtnFadedSVG({ svg, ...props }: SVGProps) {
	return <SVG svg={svg} data-theme-id="DemoBtnFadedSVG" {...props} />
}

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
			<ThemeDemoBtn className="hstack border-y-1 sm:border-x-1 sm:rounded-6">
				<ThemeDemoBtnSVG
					svg={GitHub}
					style={{
						width: rem(sizes[0]!),
						height: rem(sizes[0]!),
					}}
				/>
			</ThemeDemoBtn>
			<ThemeDemoBtn className="hidden lg:unhidden hstack border-1 rounded-6">
				<ThemeDemoBtnSVG
					svg={GitHub}
					style={{
						width: rem(sizes[1]!),
						height: rem(sizes[1]!),
					}}
				/>
			</ThemeDemoBtn>
			<ThemeDemoBtn className="hidden lg:unhidden hstack border-1 rounded-6">
				<ThemeDemoBtnSVG
					svg={GitHub}
					style={{
						width: rem(sizes[2]!),
						height: rem(sizes[2]!),
					}}
				/>
			</ThemeDemoBtn>
			<ThemeDemoBtn className="hidden lg:unhidden hstack border-1 rounded-6">
				<ThemeDemoBtnSVG
					svg={GitHub}
					style={{
						width: rem(sizes[3]!),
						height: rem(sizes[3]!),
					}}
				/>
			</ThemeDemoBtn>
		</div>
	)
}

interface DemoWrapperProps {
	children?: React.ReactNode
}

function Demo({ children }: DemoWrapperProps) {
	return <div className="hstack border-1 rounded-6">{children}</div>
}

function Demo2() {
	const [user, setUser] = useState("username_ZAYDEK")
	const [pass, setPass] = useState("l337h4xbr0!")
	const [show, setShow] = useState(false)

	return (
		<Demo>
			<div className="vstack space-1">
				{/* Username */}
				<ThemeDemoBtn className="w-224 rounded-8 rounded-bottom-0">
					<div className="zstack align-stretch h-48">
						<ThemeDemoBtnText
							tag="input"
							className="px-20 pl-56"
							type="text"
							value={user}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)}
							{...disableAutoCorrect}
						/>
						<div className="l-0 y-0 px-20 pointer-events-none">
							<div className="hstack h-full">
								<ThemeDemoBtnSVG svg={GitHub} className="transform scale-110" />
							</div>
						</div>
					</div>
				</ThemeDemoBtn>

				{/* Password */}
				<ThemeDemoBtn className="w-224 rounded-8 rounded-top-0">
					<div className="zstack align-stretch h-48">
						<ThemeDemoBtnText
							tag="input"
							className="px-20 pl-56"
							style={{ letterSpacing: !show ? "0.1em" : undefined }}
							type={!show ? "password" : "text"}
							value={pass}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPass(e.target.value)}
							{...disableAutoCorrect}
						/>
						<div className="l-0 y-0 px-20 pointer-events-none">
							<div className="hstack h-full">
								<ThemeDemoBtnSVG svg={Lock} className="transform scale-110" />
							</div>
						</div>
						<div className="r-0 y-0 px-20" style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
							<div className="hstack h-full">
								<ThemeDemoBtnFadedSVG svg={!show ? EyeOff : Eye} className="transform scale-110" />
							</div>
						</div>
					</div>
				</ThemeDemoBtn>
			</div>
		</Demo>
	)
}

// prettier-ignore
const d1Specs = [
	16 * Math.pow(1.5, 0),
	16 * Math.pow(1.5, 1),
	16 * Math.pow(1.5, 2),
	16 * Math.pow(1.5, 3),
]

function Demos() {
	return (
		<div id="demos" className="-mx-16 sm:mx-0">
			{/* Demo 1 */}
			<Demo>
				<div className="hstack space-16">
					{d1Specs.map((each, x) => (
						<ThemeDemoBtnSVG
							key={x}
							svg={GitHub}
							style={{
								width: rem(each),
								height: rem(each),
							}}
						/>
					))}
				</div>
			</Demo>

			{/* Demo 2 */}
			<Demo2 />

			{/* Demo 3 */}
			<Demo>
				{/* NOTE: Use `align-self-center` because `w-*` and `h-*` are unspecified. */}
				<ThemeDemoBtn className="align-self-center hstack space-12 px-24 py-16 rounded-8">
					<ThemeDemoBtnSVG svg={GitHub} className="w-18 h-18" />
					<ThemeDemoBtnText className="text-18">Follow me</ThemeDemoBtnText>
				</ThemeDemoBtn>
			</Demo>

			{/* Demo 4 */}
			<Demo>
				<div className="hstack space-8">
					{[Heart, MessageCircle, GitHub].map((each, x) => (
						// NOTE: Use `align-self-center` because `w-*` and `h-*` are unspecified.
						<ThemeDemoBtn key={x} className="align-self-center hstack space-8 px-16 py-8 rounded-full">
							<ThemeDemoBtnSVG svg={each} />
							<ThemeDemoBtnText style={{ fontFeatureSettings: "'tnum'" }}>
								{0 + Math.floor(Math.random() * 20)}
							</ThemeDemoBtnText>
						</ThemeDemoBtn>
					))}
				</div>
			</Demo>

			{/* Demo 5 */}
			<Demo>
				<div className="hstack space-12">
					{[Inbox, Trash2, Archive, GitHub].map((each, x) => (
						<ThemeDemoBtn key={x} className="hstack w-48 h-48 rounded-full">
							<ThemeDemoBtnSVG svg={each} className="w-20 h-20" />
						</ThemeDemoBtn>
					))}
				</div>
			</Demo>

			{/* Demo 6 */}
			<Demo>
				<div className="vstack space-8 w-192">
					<ThemeDemoBtn className="align-self-stretch hstack space-12 px-16 h-36 rounded-8">
						<ThemeDemoBtnSVG svg={File} />
						<ThemeDemoBtnText>File</ThemeDemoBtnText>
						<div className="spacer" />
						<ThemeDemoBtnFadedSVG svg={Plus} />
					</ThemeDemoBtn>
					<ThemeDemoBtn className="align-self-stretch hstack space-12 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<ThemeDemoBtnSVG svg={Folder} />
						<ThemeDemoBtnText>Folder</ThemeDemoBtnText>
						<div className="spacer" />
					</ThemeDemoBtn>
					<ThemeDemoBtn className="align-self-stretch hstack space-12 px-16 h-36 rounded-8 shadow shadow-px shadow-xs">
						<ThemeDemoBtnSVG svg={GitHub} />
						<ThemeDemoBtnText>Widget</ThemeDemoBtnText>
						<div className="spacer" />
					</ThemeDemoBtn>
				</div>
			</Demo>
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
