function E({ e }) {
	// prettier-ignore
	return <span role="img" data-emoji={e}>{e}</span>
}

// <h2 id="getting-started">
// 	{/* prettier-ignore */}
// 	<a href="#getting-started">
// 		Getting started
// 	</a>
// </h2>

export default function IconInfo({ icon }) {
	return (
		<div className="prose">
			<h1 id="simply-beautiful-open-source-icons">
				{/* prettier-ignore */}
				<a href="#simply-beautiful-open-source-icons">
					Simply beautiful open source icons
				</a>
			</h1>

			<p>
				<a href="TODO">Feather</a> is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity,
				consistency, and flexibility.
			</p>
			<p>
				The easiest way to get started is to simply click-to-copy an icon and paste as needed. For the best experience, we recommend using the provided
				JavaScript (Node) or React.js packages. <a href="TODO">Click here</a> for more packages.
			</p>
			<p>
				<small>
					<a href="TODO">Cole Bemis</a> created Feather and and <a href="TODO">Zaydek Michels-Gualtieri</a> created the new <a href="TODO">feathericons.com</a>.
					<br />
					Both are licenesed as <a href="TODO">MIT open source</a>.
				</small>
			</p>

			<hr />

			<h2 id="get-started">
				{/* prettier-ignore */}
				<a href="#get-started">
					Get Started
				</a>
			</h2>

			<h3 id="javascript">
				{/* prettier-ignore */}
				<a href="#javascript">
					JavaScript (Node)
				</a>
			</h3>
			<p>To use Feather with JavaScript, use this command:</p>
			<pre>
				<code>
					npm install feather-icons
					<br />
					<span data-type="comm"># or yarn add feather-icons</span>
				</code>
			</pre>

			{/* ... */}

			<h3 id="react">
				{/* prettier-ignore */}
				<a href="#react">
					React.js
				</a>
			</h3>
			<p>
				Or if you prefer <a href="TODO">React.js</a>, use this command:
			</p>
			<pre>
				<code>
					npm install react-feather
					<br />
					<span data-type="comm"># or yarn add react-feather</span>
				</code>
			</pre>

			{/* ... */}

			<h3 id="codepen">
				{/* prettier-ignore */}
				<a href="#codepen">
					CodePen
				</a>
			</h3>
			<p>
				Finally, you can experiment by editing this <a href="TODO">CodePen template</a>.
			</p>

			<hr />

			<h2 id="quick-start">
				{/* prettier-ignore */}
				<a href="#quick-start">
					Quick Start
				</a>
			</h2>

			<h3 id="css-classes">
				{/* prettier-ignore */}
				<a href="#css-classes">
					CSS Classes
				</a>
			</h3>
			<p>Depending on your needs, one technique is to author several icon classes like this:</p>
			<pre>
				<code>
					{`
/* CSS */
.icon-sm {
	width: 12px;
	height: 12px;
}

<!-- HTML -->
<svg class="icon-sm" ...>
`.trim()}
				</code>
			</pre>
			<p>
				Then you can tack on classes as you need them. Note that Feather icons by default will appear as 24px by <code>24px</code> and have a 1:1 aspect ratio.
			</p>
			<p>
				If you use <a href="TODO">Tailwind CSS</a>, you can add <code>class="w-6 h-6"</code> for <code>24px</code> or <code>class="w-8 h-8"</code> for{" "}
				<code>32px</code>.
			</p>

			{/* ... */}

			<h3 id="inline-styles-in-html">
				{/* prettier-ignore */}
				<a href="#inline-styles-in-html">
					Inline Styles in HTML
				</a>
			</h3>
			<p>
				Another technique is to use inline styles like this: <code>style="width: 1em; height: 1em;"</code>. Now an icon will assume the same <code>width</code>{" "}
				and <code>height</code> as the parent element’s <code>font-size</code>.
			</p>

			<hr />

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
					That means you can use Feather Icons personally and commercially without attribution. <E e="👌" />
				</small>
			</p>
		</div>
	)
}
