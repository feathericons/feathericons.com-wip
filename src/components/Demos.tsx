import React from "react"
import {
	GitHub as SVGGitHub,
	Heart as SVGHeart,
	Instagram as SVGInstagram,
	Mail as SVGMail,
	MessageCircle as SVGMessageCircle,
	Send as SVGSend,
	Twitter as SVGTwitter,
} from "react-feather"

interface DemoWrapperProps {
	children?: React.ReactNode
}

function DemoWrapper({ children }: DemoWrapperProps) {
	return (
		<div className="hstack bg-gray-100" style={{ height: `${160 / 16}rem` }}>
			{/* prettier-ignore */}
			<div className="vstack">
				{children}
			</div>
		</div>
	)
}

export function Demo1() {
	// export function Demo1() {
	// 	return (
	// 		<div id="demo-1" className="flex flex-row justify-center items-center h-full">
	//
	// 			<style>
	// 				{css`
	// 					#demo-1 > svg:nth-of-type(1) {
	// 						width: ${px(16)};
	// 						height: ${px(16)};
	// 					}
	// 					#demo-1 > svg:nth-of-type(2) {
	// 						width: ${px(24)};
	// 						height: ${px(24)};
	// 					}
	// 					#demo-1 > svg:nth-of-type(3) {
	// 						width: ${px(36)};
	// 						height: ${px(36)};
	// 					}
	// 					#demo-1 > svg:nth-of-type(4) {
	// 						width: ${px(54)};
	// 						height: ${px(54)};
	// 					}
	// 				`}
	// 			</style>
	//
	// 			<SVGGitHub className="m-3 text-gray-800" />
	// 			<SVGGitHub className="m-3 text-gray-800" />
	// 			<SVGGitHub className="m-3 text-gray-800" />
	// 			<SVGGitHub className="m-3 text-gray-800" />
	// 		</div>
	// 	)
	// }
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
	return (
		<DemoWrapper>
			<div className="hstack s-20">
				<div className="hstack s-8">
					<SVGHeart className="w-17 h-17 text-gray-800" />
					<div className="vstack">
						<div className="text-15 leading-1">31</div>
					</div>
				</div>
				<div className="hstack s-8">
					<SVGSend className="w-17 h-17 text-gray-800" />
					<div className="vstack">
						<div className="text-15 leading-1">41</div>
					</div>
				</div>
				<div className="hstack s-8">
					<SVGMessageCircle className="w-17 h-17 text-gray-800" />
					<div className="vstack">
						<div className="text-15 leading-1">59</div>
					</div>
				</div>
				<div className="hstack s-8">
					<SVGGitHub className="w-17 h-17 text-gray-800" />
				</div>
			</div>
		</DemoWrapper>
	)
}

// TODO: Add brand colors for hover.
export function Demo6() {
	return (
		<DemoWrapper>
			<div className="hstack s-24">
				<SVGGitHub className="w-20 h-20 text-gray-800" />
				<SVGInstagram className="w-20 h-20 text-gray-800" />
				<SVGMail className="w-20 h-20 text-gray-800" />
				<SVGTwitter className="w-20 h-20 text-gray-800" />
			</div>
		</DemoWrapper>
	)
}
