import React from "react"
import { GitHub as SVGGitHub } from "react-feather"

interface DemoWrapperProps {
	children?: React.ReactNode
}

function DemoWrapper({ children }: DemoWrapperProps) {
	return (
		<div className="hstack bg-gray-100" style={{ height: `${160 / 16}rem` }}>
			<div className="vstack">{children}</div>
		</div>
	)
}

export function Demo1() {
	return <DemoWrapper>Hello</DemoWrapper>
}
export function Demo2() {
	return <DemoWrapper>Hello</DemoWrapper>
}
export function Demo3() {
	return (
		<DemoWrapper>
			<div className="hstack s-8 px-20 py-14 rounded-full" style={{ backgroundColor: "#1da1f2" }}>
				<SVGGitHub className="w-20 h-20 text-white" />
				<div className="vstack">
					<div className="font-500 text-17 leading-1 text-white">Follow on Twitter!</div>
				</div>
			</div>
		</DemoWrapper>
	)
}
export function Demo4() {
	return <DemoWrapper>Hello</DemoWrapper>
}
export function Demo5() {
	return <DemoWrapper>Hello</DemoWrapper>
}
export function Demo6() {
	return <DemoWrapper>Hello</DemoWrapper>
}
