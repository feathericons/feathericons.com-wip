function Emoji({ emoji }) {
	// prettier-ignore
	return <span role="img" data-emoji={emoji}>{emoji}</span>
}

export default function IconInfo({ icon }) {
	// console.log(icon)
	return (
		<div className="prose">
			<h1 id="classes-in-css">
				{/* prettier-ignore */}
				<a href="#classes-in-css">
					Getting started
				</a>
			</h1>
			<p>
				Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and
				flexibility.
			</p>
			<p>The easiest way to get started with Feather is to run the following command:</p>
			<pre>
				<code>
					npm install feather-icons
					<br />
					<span data-type="comm"># or yarn add feather-icons</span>
				</code>
			</pre>
			<h2 id="classes-in-css">
				{/* prettier-ignore */}
				<a href="#classes-in-css">
					Classes in CSS
				</a>
			</h2>
			<p>
				You can add classes to an icon like <code>class="icon-sm"</code> or <code>class="icon-lg"</code> and then write <code>.icon-sm</code> or{" "}
				<code>.icon-lg</code> rules in your CSS. All icons have a 1:1 aspect ratio, so <code>width</code> and <code>height</code> should be the same.
			</p>
			<p>
				If you use <a href="TODO">Tailwind CSS</a>, you can add <code>class="w-6 h-6"</code> for <code>24px</code> or <code>class="w-8 h-8"</code> for{" "}
				<code>32px</code>.
			</p>
			<h2 id="inline-styles-in-html">
				{/* prettier-ignore */}
				<a href="#inline-styles-in-html">
					Inline Styles in HTML
				</a>
			</h2>
			<p>
				Another trick you can use is <code>style="width: 1em; height: 1em;"</code>. This means that an icon will assume the <code>width</code> and{" "}
				<code>height</code> of the parent element’s <code>font-size</code>, which by default is <code>16px</code>. If the parent element’s{" "}
				<code>font-size</code> is <code>32px</code>, your icon will also appear as <code>32px</code>.
			</p>
			<p>You can always extact this rule as a CSS class so you don’t need to write inline styles everywhere.</p>
			<h2 id="contribute-on-github">
				{/* prettier-ignore */}
				<a href="#contribute-on-github">
					Contribute on GitHub
				</a>
			</h2>
			<p>
				<a href="TODO">Feather Icons</a> and <a href="TODO">feathericons.com</a> are MIT open source software and contributions are welcome. Some examples of
				useful contributions include:
				{/* Some examples of useful contributions include creating an issue to report a bug or request a new icon, submitting a pull request to enhance the docs, add translations. */}
			</p>
			{/* prettier-ignore */}
			<ul>
				<li>
					Create an issue to report a bug
				</li>
				<li>
					Create an issue to request an icon
				</li>
				<li>
					Submit a pull request to enhance the docs
				</li>
				{/* <li>Submit a pull request to add translations for the docs</li> */}
				<li>
					Have your own idea? <a href="TODO">Let us know!</a>
				</li>
			</ul>
			<p>
				Follow <a href="TODO">@colebemis</a> and <a href="TODO">@username_ZAYDEK</a> on Twitter.
			</p>
			<p>
				<small>
					<a href="TODO">Feather</a> is licensed as <a href="TODO">MIT open source</a> software.
					<br />
					That means you can use Feather Icons personally and commercially without attribution. <Emoji emoji="👌" />
				</small>
			</p>
		</div>
	)
}
