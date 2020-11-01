import * as Demos from "components/Demos" // TODO: Move to submodule?
import { IconGrid, LinkedIcon } from "components/IconGrid"
import React from "react"
import SmallText from "components/SmallText"
import { IIcon } from "types"
import dataset from "data/dataset"

interface IconInfoProps {
	icon: IIcon
}

export default function IconInfo({ icon }: IconInfoProps) {
	return (
		<div className="vstack s-48">
			<div className="prose">
				<React.Fragment>
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
				</React.Fragment>

				{/* <React.Fragment>
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
				</React.Fragment> */}

				{/* <React.Fragment>
					<h2 id="using-inline-styles">
						<a href="#using-inline-styles">Using Inline Styles</a>
					</h2>
					<p>
						Another trick you can use is <code>style=&quot;width: 1em; height: 1em;&quot;</code>. This means that an icon will assume the <code>width</code> and{" "}
						<code>height</code> of the parent element’s <code>font-size</code>, which by default is <code>16px</code>. If the parent element’s{" "}
						<code>font-size</code> is <code>32px</code>, your icon will also appear as <code>32px</code>.
					</p>
					<p>You can always extract this pattern as a CSS class so you don&#39;t need to repeat yourself.</p>
				</React.Fragment> */}

				{/* <React.Fragment>
					<h2 id="contribute-on-github">
						<a href="#contribute-on-github">Contribute on GitHub</a>
					</h2>
					<p>You are more than welcome to submit a pull request to enhance the docs, add translations, and contribute examples.</p>
					<ul>
						<li>
							<a href="TODO">Star Feather on GitHub</a>
						</li>
						<li>
							<a href="TODO">Star the new feathericons.com on GitHub</a>
						</li>
					</ul>
				</React.Fragment> */}
			</div>

			{/* TODO: https://github.com/zaydek/sorcery/issues/47 */}
			<div className="vstack s-24">
				<div className="prose">
					<h2 id="demo">
						<a href="#demo">
							{/* TODO: `no-macos-retina` */}
							Demos Using <code style={{ WebkitFontSmoothing: "antialiased" }}>&lt;{icon.name.title}&gt;</code>
						</a>
					</h2>
				</div>
				<div className="s-0">
					{/* TODO: Add grid-cols-256? */}
					<div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}>
						<Demos.Demo1 />
						<Demos.Demo2 />
						<Demos.Demo3 />
						<Demos.Demo4 />
						<Demos.Demo5 />
						<Demos.Demo6 />
					</div>
				</div>
			</div>

			<IconGrid>
				{dataset.slice(0, 6).map(each => (
					<LinkedIcon icon={each} />
				))}
			</IconGrid>

			<div className="prose">
				<SmallText />
			</div>
		</div>
	)
}
