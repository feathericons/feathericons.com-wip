import css from "lib/x/tpl"
import px from "lib/x/px"
import Style from "lib/x/Style"
import SVG from "lib/x/SVG"

import {
	GitHub as SVGGitHub,
	Heart as SVGHeart,
	Instagram as SVGInstagram,
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
			<div>

				<div className="relative">
					<div className="px-5 py-2 absolute bottom-full inset-x-0">
						<p className="font-medium text-xs leading-none text-gray-800">
							<span className="inline-flex flex-row items-center align-top">
								<SVGGitHub className="text-gray-600" style={{ width: "1em", height: "1em" /* , color: "#1da1f2" */ }} /* strokeWidth={2.25} */ />
								&nbsp;&nbsp;
								<span>
									Username:
								</span>
							</span>
						</p>
					</div>
				</div>

				{/* TODO: <input> */}
				<div className="relative">
					<input
						// NOTE: Use text-black not text-gray-*.
						className="px-5 w-56 h-10 bg-gray-200 rounded-full"
						placeholder="username"
						value="username_ZAYDEK"
					/>
				</div>

				{/* <div className="relative"> */}
				{/* 	<div className="p-3 absolute top-full inset-x-0"> */}
				{/* 		<div className="flex flex-row justify-end"> */}
				{/* 			<p className="font-medium text-xs leading-none text-gray-800"> */}
				{/* 				<span className="inline-flex flex-row items-center align-top"> */}
				{/* 					<span> */}
				{/* 						Available */}
				{/* 					</span> */}
				{/* 					&nbsp; */}
				{/* 					<SVGCheck */}
				{/* 						className="text-green-400" */}
				{/* 						style={{ width: "1em", height: "1em" }} */}
				{/* 						strokeWidth={3} */}
				{/* 					/> */}
				{/* 				</span> */}
				{/* 			</p> */}
				{/* 		</div> */}
				{/* 	</div> */}
				{/* </div> */}

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
						<SVGGitHub style={{ width: px(20), height: px(20) }} /* strokeWidth={2.25} */ />
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

				<button className="m-1.5 p-1 group">
					<Style className="text-gray-600 group-hover:text-blue-600">
						<p className="leading-none" style={{ fontSize: px(15) }}>
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-blue-100">
									<div className="flex flex-row justify-center items-center w-7 h-7 rounded-full transition duration-300 ease-out">
										<SVGMessageCircle
											style={{ width: "1em", height: "1em" }}
											// strokeWidth={2.25}
										/>
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
				<button className="m-1.5 p-1 group">
					<Style className="text-gray-600 group-hover:text-green-600">
						<p className="leading-none" style={{ fontSize: px(15) }}>
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-green-100">
									<div className="flex flex-row justify-center items-center w-7 h-7 rounded-full transition duration-300 ease-out">
										<SVGSend
											style={{ width: "1em", height: "1em" }}
											// strokeWidth={2.25}
										/>
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
				<button className="m-1.5 p-1 group">
					<Style className="text-gray-600 group-hover:text-red-600">
						<p className="leading-none" style={{ fontSize: px(15) }}>
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-red-100">
									<div className="flex flex-row justify-center items-center w-7 h-7 rounded-full transition duration-300 ease-out">
										<SVGHeart
											style={{ width: "1em", height: "1em" }}
											// strokeWidth={2.25}
										/>
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
				<button className="m-1.5 p-1 group">
					<Style className="text-gray-600 group-hover:text-purple-600">
						<p className="leading-none" style={{ fontSize: px(15) }}>
							<span className="inline-flex flex-row items-center align-top">
								<Style className="bg-transparent group-hover:bg-purple-100">
									<div className="flex flex-row justify-center items-center w-7 h-7 rounded-full transition duration-300 ease-out">
										<SVGGitHub
											style={{ width: "1em", height: "1em" }}
											// strokeWidth={2.25}
										/>
									</div>
								</Style>
								{/* <span> */}
								{/* 	41 */}
								{/* </span> */}
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
				<SVG key={each.name} className="m-3 w-5 h-5 text-gray-800" svg={each} />
			))}
		</div>
	)
}
