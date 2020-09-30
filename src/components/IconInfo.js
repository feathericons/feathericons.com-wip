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
						font-size: ${24 / 16}rem;
						line-height: 1.4;
						color: var(--black);
					}
					article h2 {
						margin-top: ${24 / 16}em;
						margin-bottom: ${8 / 16}rem;
						font-weight: 600;
						font-size: ${20 / 16}rem;
						line-height: 1.4;
						color: var(--black);
					}
					article h1 code,
					article h2 code {
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}

					article p {
						margin-bottom: ${12 / 16}rem;
						font-size: ${17 / 16}rem;
						line-height: 1.6;
						color: var(--gray-800);
					}

					article code {
						-webkit-font-smoothing: auto;
						-moz-osx-font-smoothing: auto;

						padding-top: ${2 / 16}em;
						padding-right: ${4 / 16}em;
						padding-bottom: ${2 / 16}em;
						padding-left: ${4 / 16}em;
						font-size: ${14 / 16}em;
						color: var(--blue-600);
						background-color: var(--white);
						border: 1px solid var(--gray-300);
						border-radius: ${4 / 16}em;
					}

				`}
			</style>

			<div className="h-12" />
			<article>
				<h1>
					Get Started With the <code>github</code> Icon
				</h1>
				<p>
					By default, icons will appear as <code>24px</code>.{" "}
					This is because of the <code>width="24" height="24"</code> attributes that come with every icon.{" "}
					To resize an icon to your preferred size, you can use classes in CSS or inline styles in HTML.
				</p>
				<h2>
					Classes in CSS
				</h2>
				<p>
					You can add classes to an icon like <code>class="icon-sm"</code> or <code>class="icon-lg"</code> and then write <code>.icon-sm</code> or <code>.icon-lg</code> rules in your CSS.{" "}
					All icons have a 1:1 aspect ratio, so <code>width</code> and <code>height</code> should be the same.
				</p>
				<p>
					If you use a utility-first library like <a href="TODO" {...target_blank}>Tailwind CSS</a>, you can add <code>class="w-6 h-6"</code> for <code>24px</code> or <code>class="w-8 h-8"</code> for <code>32px</code>.{" "}
					<a href="https://tailwindcss.com/docs/width" {...target_blank}>Size classes are described here</a>.
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
				<h2>
					Styling in React
				</h2>
				<p>
					React.js uses JSX instead of HTML which has some small differences.{" "}
					Instead of <code>class="..."</code>, you need to use <code>className="..."</code>.{" "}
					And for inline styles, use an object. For example: <code>{"style={{ width: \"1em\", height: \"1em\" }}" }</code>.
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
