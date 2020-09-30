import css from "lib/x/tpl"
import dataset from "data/dataset"
import IconsInfo from "components/IconsInfo"
import px from "lib/x/px"
import Style from "lib/x/Style"
import SVG from "lib/x/SVG"
import target_blank from "lib/x/target_blank"
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

			<style>
				{css`

					article > *:first-child {
						margin-top: 0;
					}

					article h1 {
						margin-top: ${24 / 16}em;
						margin-bottom: ${8 / 16}rem;
						font-weight: 600;
						font-size: ${28 / 16}rem;
						line-height: 1.4;
						color: var(--text-gray-800);
					}
					article h2 {
						margin-top: ${24 / 16}em;
						margin-bottom: ${8 / 16}rem;
						font-weight: 600;
						font-size: ${24 / 16}rem;
						line-height: 1.4;
						color: var(--text-gray-800);
					}
					article h6 {
						margin-top: ${24 / 16}em;
						margin-bottom: ${8 / 16}rem;
						font-weight: 600;
						font-size: ${18 / 16}rem;
						line-height: 1.4;
						color: var(--text-gray-800);
					}
					article h1 code,
					article h2 code,
					article h6 code {
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}

					article p {
						margin-bottom: 1em;
						font-size: ${18 / 16}rem;
						line-height: 1.6;
						color: var(--gray-800);
					}
					/* article p small { */
					/* 	font-size: ${13 / 16}em; */
					/* } */

					article a {
						text-decoration: underline;
						color: var(--gray-600);
					}

					article code {
						-webkit-font-smoothing: auto;
						-moz-osx-font-smoothing: auto;

						padding-top: ${2 / 16}em;
						padding-right: ${4 / 16}em;
						padding-bottom: ${2 / 16}em;
						padding-left: ${4 / 16}em;
						font-size: ${13 / 16}em;
						color: var(--blue-600);
						background-color: var(--white);
						border: 1px solid var(--gray-300);
						border-radius: ${4 / 16}em;
					}

				`}
			</style>

			<div className="h-12" />
			<article>
				<h2>
					Classes in CSS
				</h2>
				<p>
					You can add classes to an icon like <code>class="icon-sm"</code> or <code>class="icon-lg"</code> and then write <code>.icon-sm</code> or <code>.icon-lg</code> rules in your CSS.{" "}
					All icons have a 1:1 aspect ratio, so <code>width</code> and <code>height</code> should be the same.
				</p>
				<p>
					If you use <a href="TODO" {...target_blank}>Tailwind CSS</a>, you can add <code>class="w-6 h-6"</code> for <code>24px</code> or <code>class="w-8 h-8"</code> for <code>32px</code>.
				</p>
				<h2>
					Inline Styles in HTML
				</h2>
				<p>
					Another trick you can use is <code>style="width: 1em; height: 1em;"</code>.{" "}
					This means that an icon will assume the <code>width</code> and <code>height</code> of the parent element’s <code>font-size</code>, which by default is <code>16px</code>.{" "}
					If the parent element’s <code>font-size</code> is <code>32px</code>, your icon will also appear as <code>32px</code>.
				</p>
				<p>
					You can always extact this rule as a CSS class so you don’t need to write inline styles everywhere.
				</p>
				<h6>
					Contribute on GitHub
				</h6>
				<p>
					You are welcome to submit a pull request to enhance the documentation, add translations, and or contribute icon usage examples.
				</p>
				<p>
					<small>
						{/* Feather Icons are designed by Cole Bemis @colebemis and this site is maintained by Zaydek @username_ZAYDEK.<br /> */}
						Feather Icons and this site are licensed as MIT open source software.<br />
						You can use the icons and the code for this site personally or commerically and without attribution.
					</small>
				</p>
			</article>

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
