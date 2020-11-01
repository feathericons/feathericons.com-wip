import React, { useState } from "react"

import {
	Eye as SVGEye,
	EyeOff as SVGEyeOff,
	GitHub as SVGGitHub,
	Heart as SVGHeart,
	Instagram as SVGInstagram,
	Lock as SVGLock,
	Mail as SVGMail,
	MessageCircle as SVGMessageCircle,
	Send as SVGSend,
	Twitter as SVGTwitter,
} from "react-feather"

interface DemoWrapperProps {
	children?: React.ReactNode
}

function DemoVStack({ children }: DemoWrapperProps) {
	return (
		<div className="hstack bg-gray-100" style={{ height: `${160 / 16}rem` }}>
			<div className="vstack">{children}</div>
		</div>
	)
}

// TODO: Order precedence of `align-*`?
// TODO: Check uses of `<div className="vstack">`.
export function Demo1() {
	return (
		<DemoVStack>
			<div className="hstack align-center s-20">
				<SVGGitHub className="text-gray-800" style={{ width: 16, height: 16 }} />
				<SVGGitHub className="text-gray-800" style={{ width: 24, height: 24 }} />
				<SVGGitHub className="text-gray-800" style={{ width: 36, height: 36 }} />
				<SVGGitHub className="text-gray-800" style={{ width: 54, height: 54 }} />
			</div>
		</DemoVStack>
	)
}

export function Demo2() {
	const [show, setShow] = useState(false)
	return (
		<DemoVStack>
			<div className="bg-white rounded-8" style={{ width: `${240 / 16}rem`, boxShadow: "var(--shadow-xs), var(--shadow)" }}>
				<div className="hstack align-center s-16 px-16 h-48">
					<SVGGitHub className="w-18 h-18 text-gray-600" />
					{/* TODO: Refactor code. */}
					<div className="spacer vstack h-full overflow-x-scroll">
						<div className="leading-1 text-gray-800">username_ZAYDEK</div>
					</div>
				</div>
				<div className="h-1 bg-gray-100" />
				<div className="hstack align-center s-16 px-16 h-48">
					<SVGLock className="w-18 h-18 text-gray-600" />
					{/* TODO: Refactor code. */}
					<div className="spacer vstack h-full overflow-x-scroll">
						<div className="leading-1 text-gray-800" style={{ letterSpacing: "0.1em" }}>
							••••••••••
						</div>
					</div>
					{!show ? (
						// prettier-ignore
						<SVGEyeOff
							className="w-18 h-18 text-gray-400 hover:text-gray-600"
							onClick={() => setShow(!show)}
						/>
					) : (
						// prettier-ignore
						<SVGEye
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
			<div className="hstack align-center s-8 px-20 py-14 rounded-full" style={{ backgroundColor: "#1da1f2" }}>
				<SVGGitHub className="w-20 h-20 text-white" />
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
			<div className="hstack s-20">
				<div className="hstack align-center s-8">
					<SVGHeart className="w-17 h-17 text-gray-800" />
					<div className="text-15 leading-1">31</div>
				</div>
				<div className="hstack s-8">
					<SVGSend className="w-17 h-17 text-gray-800" />
					<div className="text-15 leading-1">41</div>
				</div>
				<div className="hstack s-8">
					<SVGMessageCircle className="w-17 h-17 text-gray-800" />
					<div className="text-15 leading-1">59</div>
				</div>
				<div className="hstack s-8">
					<SVGGitHub className="w-17 h-17 text-gray-800" />
				</div>
			</div>
		</DemoVStack>
	)
}

// TODO: Add brand colors for hover.
export function Demo6() {
	return (
		<DemoVStack>
			<div className="hstack s-24">
				<SVGGitHub className="w-20 h-20 text-gray-800" />
				<SVGInstagram className="w-20 h-20 text-gray-800" />
				<SVGMail className="w-20 h-20 text-gray-800" />
				<SVGTwitter className="w-20 h-20 text-gray-800" />
			</div>
		</DemoVStack>
	)
}