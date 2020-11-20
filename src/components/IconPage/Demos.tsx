import { Eye, EyeOff, GitHub, Heart, Instagram, Lock, Mail, MessageCircle, Send, Twitter } from "react-feather"
import { rem } from "@zaydek/duomo/dist/runtime"
import { useState } from "react"

interface DemoWrapperProps {
	children?: React.ReactNode
}

// TODO
function DemoVStack({ children }: DemoWrapperProps) {
	return (
		// TODO: Use `stack-center`?
		<div className="hstack bg-gray-100">
			{/* prettier-ignore */}
			<div className="vstack">
				{children}
			</div>
		</div>
	)
}

export function Demo1() {
	return (
		<div className="hstack stack-center space-20 bg-gray-100">
			<GitHub className="w-16 h-16 text-gray-800" />
			<GitHub className="w-24 h-24 text-gray-800" />
			<GitHub className="w-36 h-36 text-gray-800" />
			<GitHub className="w-54 h-54 text-gray-800" />
		</div>
	)
}

export function Demo2() {
	const [show, setShow] = useState(false)
	return (
		<DemoVStack>
			<div
				className="bg-white rounded-8"
				style={{ width: rem(240), boxShadow: "var(--shadow-xs), var(--shadow-base)" }}
			>
				<div className="hstack stack-center space-16 px-16 h-48">
					<GitHub className="w-18 h-18 text-gray-600" />
					{/* TODO: Refactor code. */}
					<div className="spacer vstack h-full overflow-x-scroll">
						<div className="leading-1 text-gray-800">username_ZAYDEK</div>
					</div>
				</div>
				<div className="h-1 bg-gray-100" />
				<div className="hstack stack-center space-16 px-16 h-48">
					<Lock className="w-18 h-18 text-gray-600" />
					{/* TODO: Refactor code. */}
					<div className="spacer vstack h-full overflow-x-scroll">
						<div className="leading-1 text-gray-800" style={{ letterSpacing: "0.1em" }}>
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
		</DemoVStack>
	)
}

const TwitterBlue = "#1da1f2"

export function Demo3() {
	return (
		<div className="hstack stack-center bg-gray-100">
			{/* TODO: Change to <button>. */}
			<div className="hstack stack-center space-8 px-24 py-12 rounded-full" style={{ backgroundColor: TwitterBlue }}>
				<GitHub className="w-20 h-20 text-white" />
				<div className="text-17 leading-1 text-white">Follow me</div>
			</div>
		</div>
	)
}

// TODO
export function Demo4() {
	return <DemoVStack>Hello</DemoVStack>
}

export function Demo5() {
	return (
		<div className="hstack stack-center space-20 bg-gray-100">
			<div className="hstack stack-center space-8">
				<Heart className="w-17 h-17 text-gray-800" />
				<div className="text-15 leading-1">31</div>
			</div>
			<div className="hstack space-8">
				<Send className="w-17 h-17 text-gray-800" />
				<div className="text-15 leading-1">41</div>
			</div>
			<div className="hstack space-8">
				<MessageCircle className="w-17 h-17 text-gray-800" />
				<div className="text-15 leading-1">59</div>
			</div>
			<div className="hstack space-8">
				<GitHub className="w-17 h-17 text-gray-800" />
			</div>
		</div>
	)
}

// TODO: Add brand colors for hover.
export function Demo6() {
	return (
		<div className="hstack stack-center space-20 bg-gray-100">
			<GitHub className="w-20 h-20 text-gray-800" />
			<Instagram className="w-20 h-20 text-gray-800" />
			<Mail className="w-20 h-20 text-gray-800" />
			<Twitter className="w-20 h-20 text-gray-800" />
		</div>
	)
}

export default function Demos() {
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
				<Each />
			))}
		</div>
	)
}
