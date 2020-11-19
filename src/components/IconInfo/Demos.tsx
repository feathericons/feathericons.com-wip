import { rem } from "@zaydek/duomo/dist/runtime"
import { useState } from "react"
import { Eye, EyeOff, GitHub, Heart, Instagram, Lock, Mail, MessageCircle, Send, Twitter } from "react-feather"

interface DemoWrapperProps {
	children?: React.ReactNode
}

// TODO
function DemoVStack({ children }: DemoWrapperProps) {
	return (
		// TODO: Use `stack-center`?
		<div className="hstack bg-gray-100" style={{ height: rem(160) }}>
			{/* prettier-ignore */}
			<div className="vstack">
				{children}
			</div>
		</div>
	)
}

export function Demo1() {
	return (
		<DemoVStack>
			<div className="hstack stack-center space-20">
				{/* TODO */}
				<GitHub className="text-gray-800" style={{ width: 16, height: 16 }} />
				<GitHub className="text-gray-800" style={{ width: 24, height: 24 }} />
				<GitHub className="text-gray-800" style={{ width: 36, height: 36 }} />
				<GitHub className="text-gray-800" style={{ width: 54, height: 54 }} />
			</div>
		</DemoVStack>
	)
}

export function Demo2() {
	const [show, setShow] = useState(false)
	return (
		<DemoVStack>
			{/* TODO: Shadow. */}
			<div className="bg-white rounded-8" style={{ width: rem(240), boxShadow: "var(--shadow-xs), var(--shadow)" }}>
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

export function Demo3() {
	return (
		<DemoVStack>
			<div className="hstack stack-center space-8 px-20 py-14 rounded-full" style={{ backgroundColor: "#1da1f2" }}>
				<GitHub className="w-20 h-20 text-white" />
				<div className="font-500 text-17 leading-1 text-white">Follow on Twitter!</div>
			</div>
		</DemoVStack>
	)
}

export function Demo4() {
	return <DemoVStack>Hello</DemoVStack>
}

export function Demo5() {
	return (
		<DemoVStack>
			<div className="hstack space-20">
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
		</DemoVStack>
	)
}

// TODO: Add brand colors for hover.
export function Demo6() {
	return (
		<DemoVStack>
			<div className="hstack space-24">
				<GitHub className="w-20 h-20 text-gray-800" />
				<Instagram className="w-20 h-20 text-gray-800" />
				<Mail className="w-20 h-20 text-gray-800" />
				<Twitter className="w-20 h-20 text-gray-800" />
			</div>
		</DemoVStack>
	)
}
