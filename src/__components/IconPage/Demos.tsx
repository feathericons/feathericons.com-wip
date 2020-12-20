import { rem } from "@zaydek/duomo/dist/runtime"
import { useState } from "react"
import {
	Archive,
	Eye,
	EyeOff,
	File,
	Folder,
	Heart,
	Inbox,
	Lock,
	MessageCircle,
	Plus,
	Share2,
	Trash2,
} from "react-feather"

interface SVGProps {
	SVG: React.FC<React.SVGAttributes<SVGElement>>
}

function DemoWrapper({ children }: { children?: React.ReactNode }) {
	return (
		<div className="hstack border-1 rounded-4">
			{/* prettier-ignore */}
			<div className="vstack">
				{children}
			</div>
		</div>
	)
}

// TODO
function Demo2({ SVG }: SVGProps) {
	const [show, setShow] = useState(false)

	return (
		<DemoWrapper>
			<div
				className="bg-white rounded-8"
				style={{ width: rem(240), boxShadow: "var(--shadow-xs), var(--shadow-base)" }}
			>
				<div className="hstack stack-center space-16 px-16 h-48">
					<SVG className="w-18 h-18 text-gray-600" />
					{/* TODO: Refactor code. */}
					<div className="spacer vstack h-full overflow-x-scroll">
						<div className="leading-1">username_ZAYDEK</div>
					</div>
				</div>
				{/* <hr className="border-t-4 border-gray-50" /> */}
				<hr className="border-gray-100" />
				<div className="hstack stack-center space-16 px-16 h-48">
					<Lock className="w-18 h-18 text-gray-600" />
					{/* TODO: Refactor code. */}
					<div className="spacer vstack h-full overflow-x-scroll">
						<div className="leading-1" style={{ letterSpacing: "0.1em" }}>
							••••••••••
						</div>
					</div>
					{!show ? (
						// prettier-ignore
						<EyeOff
							className="w-18 h-18 text-gray-400 on:text-gray-600"
							onClick={() => setShow(!show)}
						/>
					) : (
						// prettier-ignore
						<Eye
							className="w-18 h-18 text-gray-400 on:text-gray-600"
							onClick={() => setShow(!show)}
						/>
					)}
				</div>
			</div>
		</DemoWrapper>
	)
}

export default function Demos({ SVG }: SVGProps) {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(auto-fill, minmax(${rem(256)}, 1fr))`,
				gridAutoRows: rem(160),
				gap: rem(12),
			}}
		>
			{/* 1 */}
			<DemoWrapper>
				<div className="hstack stack-center space-24">
					{[16, 24, 36, 54].map(each => (
						<SVG className={`w-${each} h-${each}`} />
					))}
				</div>
			</DemoWrapper>

			{/* 2 */}
			<Demo2 SVG={SVG} />

			{/* 3 */}
			<DemoWrapper>
				<div className="vstack space-8">
					<div
						className="hstack stack-center space-12 px-24 py-12 rounded-8"
						style={{
							backgroundColor: "#1da1f2",
							boxShadow: "var(--shadow-xs), var(--shadow-base)",
						}}
					>
						<SVG className="w-20 h-20 text-white" />
						<div className="text-18 leading-1 text-white">Follow me</div>
					</div>
				</div>
			</DemoWrapper>

			{/* 4 */}
			<DemoWrapper>
				<div className="hstack space-16">
					{[Heart, MessageCircle, Share2, SVG].map((Each, x) => (
						<div className="hstack stack-center space-8">
							<Each className="w-16 h-16" />
							{x < 3 && (
								<div className="text-16 -tracking-2.5 leading-1" style={{ fontFeatureSettings: "'tnum'" }}>
									{10 + Math.floor(Math.random() * 90)}
								</div>
							)}
						</div>
					))}
				</div>
			</DemoWrapper>

			{/* 5 */}
			<DemoWrapper>
				{/* NOTE: Uses `space-12` not `space-16`. */}
				<div className="hstack stack-center space-12">
					{[Inbox, Trash2, Archive, SVG].map(Each => (
						<div className="hstack stack-center w-40 h-40 bg-gray-100 rounded-full">
							<Each className="w-18 h-18" />
						</div>
					))}
				</div>
			</DemoWrapper>

			{/* 6 */}
			<DemoWrapper>
				<div className="vstack space-8">
					<div className="hstack stack-center space-12 w-192 h-36 bg-gray-100 rounded-8 px-12">
						<File className="w-18 h-18 text-gray-600" />
						<p>File</p>
						<div className="spacer" />
						<Plus className="w-18 h-18 text-gray-400" />
					</div>
					<div className="hstack stack-center space-12 w-192 h-36 bg-gray-100 rounded-8 px-12">
						<Folder className="w-18 h-18 text-gray-600" />
						<p>Folder</p>
						<div className="spacer" />
					</div>
					<div className="hstack stack-center space-12 w-192 h-36 bg-gray-100 rounded-8 px-12">
						<SVG className="w-18 h-18 text-gray-600" />
						<p>Widget</p>
						<div className="spacer" />
					</div>
				</div>
			</DemoWrapper>
		</div>
	)
}
