import css from "lib/x/tpl"
import dataset from "data/dataset"
import IconsInfo from "./_IconsInfo"
import px from "lib/x/px"

import { Circle as SVGCircle } from "react-feather"

function Demo1() {
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

			<SVGCircle className="m-3 text-gray-800" />
			<SVGCircle className="m-3 text-gray-800" />
			<SVGCircle className="m-3 text-gray-800" />
			<SVGCircle className="m-3 text-gray-800" />
		</div>
	)
}

function Demo3() {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<div>

				{/* Button */}
				<button className="px-10 py-4 bg-gray-200 rounded-2 shadow-px-2">
					<p className="font-medium">
						<span className="inline-flex flex-row items-center align-top">
							<SVGCircle className="text-gray-800" />
							<span className="w-3" />
							<span>
								Click to Subscribe
							</span>
						</span>
					</p>
				</button>

				{/* Text */}
				<div className="relative">
					<div className="p-3 absolute top-full inset-x-0">
						<div className="flex flex-row justify-center">
							<p className="font-medium text-xs text-gray-800">
								You can always unsubscribe later.
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

function Demo6() {
	return (
		<div className="flex flex-row justify-center items-center h-full">
			<SVGCircle className="m-3 w-5 h-5 text-gray-800" />
			<SVGCircle className="m-3 w-5 h-5 text-gray-800" />
			<SVGCircle className="m-3 w-5 h-5 text-gray-800" />
			<SVGCircle className="m-3 w-5 h-5 text-gray-800" />
		</div>
	)
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
						grid-template-rows: 0.62fr 0.38fr;
						grid-template-columns: 0.62fr 0.14fr 0.24fr;
						grid-template-areas:
							"a b b"
							"a d c";
						gap: 1rem;

						height: 20rem;
					}

					.bento-child {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;

						background-color: var(--gray-100);
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

					@media (max-width: 639px) {
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

			<div className="h-8" />
			<div id="bento-grid">
				<div className="bento-child">
					<SVGCircle className="text-gray-800" />
				</div>
				<div className="bento-child">
					<SVGCircle className="text-gray-800" />
				</div>
				<div className="bento-child">
					<SVGCircle className="text-gray-800" />
				</div>
				<div className="bento-child">
					<SVGCircle className="text-gray-800" />
				</div>
			</div>

			{/* Demo */}
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
						grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
						gap: 1rem;
					}
				`}
			</style>

			<div className="h-8" />
			<div id="demo-grid">
				<div className="h-40 bg-gray-100">
					<Demo1 />
				</div>
				<div className="h-40 bg-gray-100">
					{/* <Demo1 /> */}
				</div>
				<div className="h-40 bg-gray-100">
					<Demo3 />
				</div>
				<div className="h-40 bg-gray-100">
					{/* <Demo1 /> */}
				</div>
				<div className="h-40 bg-gray-100">
					{/* <Demo1 /> */}
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

			<div className="h-8" />
			<IconsInfo svgs={dataset.slice(0, 6)} />

		</>
	)
}
