import { rem } from "@zaydek/duomo/dist/runtime"
import { useState } from "react"
import { Archive, Eye, EyeOff, File, Folder, Lock, MessageCircle, Plus, Share2, Trash2 } from "react-feather"

interface SVGProps {
	SVG: React.FC<React.SVGAttributes<SVGElement>>
}

function DemoWrapper({ children }: { children?: React.ReactNode }) {
	return (
		<div className="hstack bg-gray-100">
			<div className="vstack">{children}</div>
		</div>
	)
}

export function Demo1({ SVG }: SVGProps) {
	return (
		<DemoWrapper>
			<div className="hstack stack-center space-24">
				{[16, 24, 36, 54].map(each => (
					<SVG className={`w-${each} h-${each}`} />
				))}
			</div>
		</DemoWrapper>
	)
}

export function Demo2({ SVG }: SVGProps) {
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
				<div className="h-1 bg-gray-100" />
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

export function Demo3({ SVG }: SVGProps) {
	return (
		// TODO: Change to `<button>`.
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
					<div className="text-17 leading-1 text-white">Follow me</div>
				</div>
			</div>
		</DemoWrapper>
	)
}

export function Demo4({ SVG }: SVGProps) {
	return (
		<DemoWrapper>
			<div className="hstack space-24">
				{[SVG, MessageCircle, Share2].map(Each => (
					<div className="hstack stack-center space-8">
						<Each className="w-16 h-16" />
						<div className="text-16 -tracking-2.5 leading-1" style={{ fontFeatureSettings: "'tnum'" }}>
							{10 + Math.floor(Math.random() * 90)}
						</div>
					</div>
				))}
			</div>
		</DemoWrapper>
	)
}

export function Demo5({ SVG }: SVGProps) {
	return (
		<DemoWrapper>
			<div className="hstack stack-center space-16">
				{[SVG, Trash2, Archive].map(Each => (
					<div className="hstack stack-center w-48 h-48 bg-gray-200 rounded-full">
						<Each className="w-20 h-20" />
					</div>
				))}
			</div>
		</DemoWrapper>
	)
}

export function Demo6({ SVG }: SVGProps) {
	return (
		<DemoWrapper>
			<div className="vstack space-8">
				<div className="hstack stack-center space-12 w-192 h-36 bg-gray-200 rounded-8 px-12">
					<SVG className="w-20 h-20 text-gray-600" />
					<div>Widget</div>
					<div className="spacer" />
					<Plus className="w-20 h-20 text-gray-400" />
				</div>
				<div className="hstack stack-center space-12 w-192 h-36 bg-gray-200 rounded-8 px-12">
					<File className="w-20 h-20 text-gray-600" />
					<div>File</div>
					<div className="spacer" />
				</div>
				<div className="hstack stack-center space-12 w-192 h-36 bg-gray-200 rounded-8 px-12">
					<Folder className="w-20 h-20 text-gray-600" />
					<div>Folder</div>
					<div className="spacer" />
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
			{[Demo1, Demo2, Demo3, Demo4, Demo5, Demo6].map(Each => (
				<Each SVG={SVG} />
			))}
		</div>
	)
}
