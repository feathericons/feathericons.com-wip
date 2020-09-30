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

// https://stackoverflow.com/a/7228322
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// https://github.com/alexdevero/leet-speak-converter/blob/master/src/leet-converter.js#L1
const mungedVowels = {
	a: "4",
	e: "3",
	i: "1",
	o: "0",
	u: "u",
}

function munge(src) {
	let dst = ""
	for (let x = 0; x < src.length; x++) {
		const ch = mungedVowels[src[x].toLowerCase()]
		if (ch !== undefined) {
			dst += ch
			continue
		}
		dst += src[x]
	}
	return dst
}

// const mungedPasswords = [
// 	munge("MadeYouLook! 🤓"),
// 	munge("NiceTry! 😂"),
// 	munge("GuessAgain! 😎"),
// 	munge("NewPhoneWhoDis? 💁‍♀️"),
// 	munge("Bananas! 🍌"),
// 	munge("AreYouSerious? 🤬"),
// 	munge("LeetHax! 👊"),
// ]

export function Demo2() {
	const [username, setUsername] = React.useState("username_ZAYDEK")
	const [password, setPassword] = React.useState(() => munge("MadeYouLook! 🤓"))
	const [showPassword, setShowPassword] = React.useState(false)

	return (
		<div className="flex flex-row justify-center items-center h-full">
			<div className="rounded-2 shadow-px-2">

				<div className="relative">
					<div className="px-4 absolute inset-y-0 left-0">
						<div className="flex flex-row items-center h-full">
							<SVGGitHub
								className="text-gray-600"
								style={{ width: px(18), height: px(18) }}
							/>
						</div>
					</div>
					<input
						className="px-4 pl-12 w-64 h-12 placeholder-gray-600 text-gray-800 bg-white rounded-t-2"
						// style={{ fontSize: px(16) }}
						type="text"
						placeholder="Username"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</div>

				<hr className="border-t border-gray-100" />
				<div className="relative">

					{/* LHS */}
					<div className="px-4 absolute inset-y-0 left-0">
						<div className="flex flex-row items-center h-full">
							<SVGLock
								className="text-gray-600"
								style={{ width: px(18), height: px(18) }}
							/>
						</div>
					</div>

					{/* RHS */}
					<div
						className="group px-4 absolute inset-y-0 right-0"
						onClick={e => setShowPassword(!showPassword)}
					>
						<div className="flex flex-row items-center h-full">
							<SVGEyeOff
								className="text-gray-400 group-hover:text-gray-800 transition duration-300 ease-out"
								style={{ width: px(18), height: px(18) }}
							/>
						</div>
					</div>

					{/* <input> */}
					<Style className={(password && !showPassword) && "tracking-widest"}>
						<input
							className="px-4 px-12 w-64 h-12 placeholder-gray-600 text-gray-800 bg-white rounded-b-2"
							// style={{ fontSize: px(16) }}
							type={!showPassword ? "password" : "text"}
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
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
			<button className="px-6 py-4 rounded-full" style={{ backgroundColor: "#1da1f2" }}>
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

				{/* Button */}
				<button className="p-1.5 group">
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
				<button className="p-1.5 group">
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
				<button className="p-1.5 group">
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
				<button className="p-1.5 group">
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
					<SVG className="w-5 h-5 text-gray-800 group-hover:text-blue-600 transition duration-300 ease-out" svg={each} />
				</button>
			))}
		</div>
	)
}
