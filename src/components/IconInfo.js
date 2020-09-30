import css from "lib/x/tpl"
import dataset from "data/dataset"
import IconsInfo from "components/IconsInfo"
import px from "lib/x/px"
import SVG from "lib/x/SVG"
import { Demo1, Demo2, Demo3, Demo5, Demo6 } from "components/Demos"

import { GitHub as SVGGitHub } from "react-feather"

function Demo4() {
	return null
}

export default function IconInfo() {
	return (
		<>

			{/* Bento */}
			<div className="flex flex-row justify-between">

				{/* LHS */}
				<div className="flex flex-row items-center">
					<div className="w-8 h-8 rounded-full bg-gray-100" />
					<div className="w-4" />
					<div className="w-40 h-6 bg-gray-100 rounded-full" />
				</div>

				{/* RHS */}
				<div className="flex flex-row items-center">
					<div className="w-40 h-6 bg-gray-100 rounded-full" />
					<div className="w-4" />
					<div className="w-8 h-8 rounded-full bg-gray-100" />
				</div>
			</div>

			<style>
				{css`
					#bento-grid {
						display: grid;
						grid-template-rows: 0.6fr 0.4fr;
						grid-template-columns: 0.6fr 0.15fr 0.25fr;
						grid-template-areas:
							"a b b"
							"a d c";
						gap: 0.75rem;

						height: 20rem;
					}

					.bento-child:nth-of-type(1) {
						grid-area: a;
					}
					.bento-child:nth-of-type(2) {
						grid-area: b;
					}
					.bento-child:nth-of-type(3) {
						grid-area: c;
					}
					.bento-child:nth-of-type(4) {
						grid-area: d;
					}

					.bento-child:nth-of-type(1) > svg {
						width: ${px(54)};
						height: ${px(54)};
					}
					.bento-child:nth-of-type(2) > svg {
						width: ${px(36)};
						height: ${px(36)};
					}
					.bento-child:nth-of-type(3) > svg {
						width: ${px(24)};
						height: ${px(24)};
					}
					.bento-child:nth-of-type(4) > svg {
						width: ${px(16)};
						height: ${px(16)};
					}

					@media (max-width: ${816 - 1}px) {
						#bento-grid {
							grid-template-rows: 1fr;
							grid-template-columns: 1fr;
							gap: 0;
						}
						.bento-child:nth-of-type(2) {
							display: none;
						}
						.bento-child:nth-of-type(3) {
							display: none;
						}
						.bento-child:nth-of-type(4) {
							display: none;
						}
					}
				`}
			</style>

			<div className="h-4" />
			<div id="bento-grid">
				<div className="bento-child flex flex-row justify-center items-center bg-gray-100">
					<SVGGitHub className="text-gray-800" />
				</div>
				<div className="bento-child flex flex-row justify-center items-center bg-gray-100">
					<SVGGitHub className="text-gray-800" />
				</div>
				<div className="bento-child flex flex-row justify-center items-center bg-gray-100">
					<SVGGitHub className="text-gray-800" />
				</div>
				<div className="bento-child flex flex-row justify-center items-center bg-gray-100">
					<SVGGitHub className="text-gray-800" />
				</div>
			</div>

			{/* Demos */}
			<div className="h-16" />
			<div className="flex flex-row items-center">
				<div className="w-8 h-8 rounded-full bg-gray-100" />
				<div className="w-4" />
				<div className="w-40 h-6 bg-gray-100 rounded-full" />
			</div>

			<style>
				{css`
					#demo-grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
						gap: 0.75rem;
					}
				`}
			</style>

			<div className="h-4" />
			<div id="demo-grid">
				<div className="h-40 bg-gray-100">
					<Demo1 />
				</div>
				<div className="h-40 bg-gray-100">
					<Demo2 />
				</div>
				<div className="h-40 bg-gray-100">
					<Demo3 />
				</div>
				<div className="h-40 bg-gray-100">
					<Demo4 />
				</div>
				<div className="h-40 bg-gray-100">
					<Demo5 />
				</div>
				<div className="h-40 bg-gray-100">
					<Demo6 />
				</div>
			</div>

			{/* More */}
			<div className="h-16" />
			<div className="flex flex-row items-center">
				<div className="w-8 h-8 rounded-full bg-gray-100" />
				<div className="w-4" />
				<div className="w-40 h-6 bg-gray-100 rounded-full" />
			</div>

			<div className="h-4" />
			<IconsInfo svgs={dataset.slice(0, 6)} />

		</>
	)
}
