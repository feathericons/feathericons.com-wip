import { Eye, EyeOff, GitHub, Instagram, Lock, Mail, MessageCircle, Share2, Twitter } from "react-feather"
import { rem } from "@zaydek/duomo/dist/runtime"
import { useState } from "react"

function DemoWrapper({ children }: { children?: React.ReactNode }) {
	return (
		<div className="hstack bg-gray-100">
			<div className="vstack">{children}</div>
		</div>
	)
}

export function Demo1({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
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

export function Demo2({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
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
							className="w-18 h-18 text-gray-400 hover:text-gray-600"
							onClick={() => setShow(!show)}
						/>
					) : (
						// prettier-ignore
						<Eye
							className="w-18 h-18 text-gray-400 hover:text-gray-600"
							onClick={() => setShow(!show)}
						/>
					)}
				</div>
			</div>
		</DemoWrapper>
	)
}

export function Demo3({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
	return (
		// TODO: Change to `<button>`.
		<DemoWrapper>
			<div className="hstack stack-center space-12 px-24 py-12 rounded-full" style={{ backgroundColor: "#1da1f2" }}>
				<SVG className="w-20 h-20 text-white" />
				<div className="text-17 leading-1 text-white">Follow me</div>
			</div>
		</DemoWrapper>
	)
}

export function Demo4({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
	return (
		<DemoWrapper>
			<div className="hstack space-24">
				<div className="hstack stack-center space-8">
					<SVG className="w-17 h-17" />
					<div className="text-15 leading-1">31</div>
				</div>
				<div className="hstack space-8">
					<MessageCircle className="w-17 h-17" />
					<div className="text-15 leading-1">41</div>
				</div>
				<div className="hstack space-8">
					<Share2 className="w-17 h-17" />
					<div className="text-15 leading-1">59</div>
				</div>
			</div>
		</DemoWrapper>
	)
}

export function Demo5({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
	return (
		<DemoWrapper>
			<div className="hstack stack-center space-24">
				{[SVG, Instagram, Mail, Twitter].map(Each => (
					<Each className="w-20 h-20" />
				))}
			</div>
		</DemoWrapper>
	)
}

// // TODO
export function Demo6() {
	return <div>TODO</div>
}

export default function Demos({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
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
