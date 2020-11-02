import * as Demos from "components/Demos"
import dataset from "data/dataset"
import Prose from "components/Prose"
import { GitHub as SVGGitHub } from "react-feather"
import { IconGrid, LinkedIcon } from "components/IconGrid"
import { IIcon } from "types"
import { rem } from "@zaydek/sorcery/dist/runtime"
// import IconInfoTitle from "components/IconInfoTitle.mdx"

interface IconInfoProps {
	icon: IIcon
}

// console.log(IconInfoTitle)

// TODO: Use `stack-center` not `align-center`?
export default function IconInfo({ icon }: IconInfoProps) {
	return (
		<div className="vstack space-64">
			<div className="vstack space-24">
				{/* <IconInfoTitle icon={icon} /> */}
				<Prose>
					<h2 id="get-started">
						<a href="#get-started">
							The <code style={{ WebkitFontSmoothing: "antialiased" }}>&lt;{icon.name.title}&gt;</code> Icon
						</a>
					</h2>
				</Prose>
				<div className="hstack bg-gray-100" style={{ height: rem(320) }}>
					<div className="vstack">
						<SVGGitHub className="w-48 h-48" />
					</div>
				</div>
			</div>

			<Prose>
				<h2 id="get-started">
					<a href="#get-started">Get Started</a>
				</h2>
				<p>
					<a href="TODO">Feather</a> is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on
					simplicity, consistency, and flexibility.
				</p>
				<p>
					Get started with JavaScript (<a href="TODO">docs here</a>) by running this command:
				</p>
				<pre>
					<code>
						yarn add feather-icons
						<br />
						<span className="text-gray-300"># or npm i feather-icons</span>
					</code>
				</pre>
				<p>
					Or for React.js (<a href="TODO">docs here</a>) with this command:
				</p>
				<pre>
					<code>
						yarn add react-feather
						<br />
						<span className="text-gray-300"># or npm i react-feather</span>
					</code>
				</pre>
				<p>
					Feather can be used in almost everywhere. <a href="TODO">Click here</a> to see all supported environments.
				</p>

				<>
					<h2 id="using-classes">
						<a href="#using-classes">Using Classes</a>
					</h2>
					<p>
						Because icons are SVGs, you can add classes like <code>class=&quot;icon-sm&quot;</code> or <code>class=&quot;icon-lg&quot;</code> to style them. In
						your CSS, write rules for the corresponding classes, e.g. <code>.icon-sm</code> or <code>.icon-lg</code>. All icons have a 1:1 aspect ratio, so
						their <code>width</code> and <code>height</code> should be the same.
					</p>
					<p>
						If you use <a href="TODO">Tailwind CSS</a>, you can add <code>class=&quot;w-6 h-6&quot;</code> for <code>24px</code> or{" "}
						<code>class=&quot;w-8 h-8&quot;</code> for <code>32px</code>.
					</p>
				</>

				<>
					<h2 id="using-inline-styles">
						<a href="#using-inline-styles">Using Inline Styles</a>
					</h2>
					<p>
						Another trick you can use is <code>style=&quot;width: 1em; height: 1em;&quot;</code>. This means that an icon will assume the <code>width</code> and{" "}
						<code>height</code> of the parent element’s <code>font-size</code>, which by default is <code>16px</code>. If the parent element’s{" "}
						<code>font-size</code> is <code>32px</code>, your icon will also appear as <code>32px</code>.
					</p>
					<p>You can always extract this pattern as a CSS class so you don&#39;t need to repeat yourself.</p>
				</>

				<>
					<h2 id="contribute-on-github">
						<a href="#contribute-on-github">Contribute on GitHub</a>
					</h2>
					<p>You are welcome to submit a pull request to enhance the docs, add translations, and contribute examples.</p>
					<p>
						<small>
							<a href="TODO">Feather</a> is by <a href="TODO">Cole Bemis</a> and <a href="TODO">feathericons.com</a> by <a href="TODO">Zaydek</a>.
							<br />
							Licensed as <a href="TODO">MIT</a>. You can use the icons personally and commerically without attribution.
							<br />
							Built using <a href="TODO">Sorcery 🔮</a> and <a href="TODO">Prose 🧐</a>.
						</small>
					</p>
				</>
			</Prose>

			{/* TODO: https://github.com/zaydek/sorcery/issues/47 */}
			{/* TODO: Add grid-cols-256? */}
			{/* TODO: `no-macos-retina` */}
			<div className="vstack space-24">
				<Prose>
					<h2 id="demo">
						<a href="#demo">
							Demos Using <code style={{ WebkitFontSmoothing: "antialiased" }}>&lt;{icon.name.title}&gt;</code>
						</a>
					</h2>
				</Prose>
				<div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}>
					<Demos.Demo1 />
					<Demos.Demo2 />
					<Demos.Demo3 />
					<Demos.Demo4 />
					<Demos.Demo5 />
					<Demos.Demo6 />
				</div>
			</div>

			<div className="vstack space-24">
				<Prose>
					<h2 id="related">
						<a href="#related">
							{/* TODO: `no-macos-retina` */}
							Related to <code style={{ WebkitFontSmoothing: "antialiased" }}>&lt;{icon.name.title}&gt;</code>
						</a>
					</h2>
				</Prose>
				<IconGrid>
					{dataset.slice(0, 6).map(each => (
						<LinkedIcon key={each.name.kebab} icon={each} />
					))}
				</IconGrid>
			</div>
		</div>
	)
}
