import css from "lib/x/tpl"
import px from "lib/x/px"
import Style from "lib/x/Style"
import SVG from "lib/x/SVG"

import {
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

export function Demo1() {
	return (
		<div id="demo-1" className="flex flex-row justify-center items-center h-full">

			<style>
				{css`
					#demo-1 > svg:nth-of-type(1) {
						width: ${px(16)};
						height: ${px(16)};
					}
					#demo-1 > svg:nth-of-type(2) {
						width: ${px(24)};
						height: ${px(24)};
					}
					#demo-1 > svg:nth-of-type(3) {
						width: ${px(36)};
						height: ${px(36)};
					}
					#demo-1 > svg:nth-of-type(4) {
						width: ${px(54)};
						height: ${px(54)};
					}
				`}
			</style>

			<SVGGitHub className="m-3 text-gray-800" />
			<SVGGitHub className="m-3 text-gray-800" />
			<SVGGitHub className="m-3 text-gray-800" />
			<SVGGitHub className="m-3 text-gray-800" />
		</div>
	)
}

export function Demo2() {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<div className="!rounded-1 border border-gray-200">

				<div className="relative">
					<div className="px-4 absolute inset-y-0 left-0">
						<div className="flex flex-row items-center h-full">
							<SVGGitHub
								className="text-gray-600"
								// style={{
								// 	width: px(17),
								// 	height: px(17),
								// }}
								style={{
									width: "1em",
									height: "1em",
								}}
							/>
						</div>
					</div>
					<input
						className="px-4 pl-11 w-64 h-10 text-gray-800 bg-white !rounded-t-1"
						// style={{ fontSize: px(15) }}
						placeholder="Username"
						value="username_ZAYDEK"
					/>
				</div>

				<hr className="border-t border-gray-100" />
				<div className="relative">
					<div className="px-4 absolute inset-y-0 left-0">
						<div className="flex flex-row items-center h-full">
							<SVGLock
								className="text-gray-600"
								// style={{
								// 	width: px(17),
								// 	height: px(17),
								// }}
								style={{
									width: "1em",
									height: "1em",
								}}
							/>
						</div>
					</div>
					<div className="px-4 absolute inset-y-0 right-0">
						<div className="flex flex-row items-center h-full">
							<SVGEyeOff
								className="text-gray-400"
								// style={{
								// 	width: px(17),
								// 	height: px(17),
								// }}
								style={{
									width: "1em",
									height: "1em",
								}}
							/>
						</div>
					</div>
					<Style className="tracking-widest">
						<input
							className="px-4 pl-11 w-64 h-10 text-gray-800 bg-white !rounded-b-1"
							// style={{ fontSize: px(15) }}
							placeholder="Password"
							value="••••••••••"
						/>
					</Style>
				</div>

			</div>
		</div>
	)
}

export function Demo3() {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<button className="px-8 py-4 rounded-full" style={{ backgroundColor: "#1da1f2" }}>
				<p className="font-medium leading-none text-white" style={{ fontSize: px(17) }}>
					<span className="inline-flex flex-row items-center align-top">
						<SVGGitHub style={{ width: px(19), height: px(19) }} /* strokeWidth={2.25} */ />
						&nbsp;&nbsp;
						<span>
							Follow on Twitter
						</span>
					</span>
				</p>
			</button>
		</div>
	)
}

export function Demo5() {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<div className="flex flex-row">

				<button className="p-2 group">
					<Style className="text-gray-800 group-hover:text-blue-600">
						<p className="leading-none">
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-blue-100">
									<div className="flex flex-row justify-center items-center w-8 h-8 rounded-full transition duration-300 ease-out">
										<SVGMessageCircle style={{ width: "1em", height: "1em" }} />
									</div>
								</Style>
								<span>
									31
								</span>
							</span>
						</p>
					</Style>
				</button>

				{/* Button */}
				<button className="p-2 group">
					<Style className="text-gray-800 group-hover:text-green-600">
						<p className="leading-none">
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-green-100">
									<div className="flex flex-row justify-center items-center w-8 h-8 rounded-full transition duration-300 ease-out">
										<SVGSend style={{ width: "1em", height: "1em" }} />
									</div>
								</Style>
								<span>
									59
								</span>
							</span>
						</p>
					</Style>
				</button>

				{/* Button */}
				<button className="p-2 group">
					<Style className="text-gray-800 group-hover:text-red-600">
						<p className="leading-none">
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-red-100">
									<div className="flex flex-row justify-center items-center w-8 h-8 rounded-full transition duration-300 ease-out">
										<SVGHeart style={{ width: "1em", height: "1em" }} />
									</div>
								</Style>
								<span>
									41
								</span>
							</span>
						</p>
					</Style>
				</button>

				{/* Button */}
				<button className="p-2 group">
					<Style className="text-gray-800 group-hover:text-purple-600">
						<p className="leading-none">
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-purple-100">
									<div className="flex flex-row justify-center items-center w-8 h-8 rounded-full transition duration-300 ease-out">
										<SVGGitHub style={{ width: "1em", height: "1em" }} />
									</div>
								</Style>
							</span>
						</p>
					</Style>
				</button>

			</div>
		</div>
	)
}

export function Demo6() {
	const svgs = [SVGInstagram, SVGTwitter, SVGGitHub, SVGMail]

	return (
		<div className="flex flex-row justify-center items-center h-full">
			{svgs.map(each => (
				<button key={each.name} className="group p-3">
					<SVG className="w-5 h-5 text-gray-800 group-hover:text-blue-600" svg={each} />
				</button>
			))}
		</div>
	)
}
