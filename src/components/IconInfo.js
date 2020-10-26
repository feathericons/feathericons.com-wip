export default function IconInfo({ icon }) {
	// console.log(icon)
	return (
		<div className="prose">
			<h2>Classes in CSS</h2>
			<p>
				You can add classes to an icon like <code>class="icon-sm"</code> or <code>class="icon-lg"</code> and then write <code>.icon-sm</code> or{" "}
				<code>.icon-lg</code> rules in your CSS. All icons have a 1:1 aspect ratio, so <code>width</code> and <code>height</code> should be the same.
			</p>
			<p>
				If you use <a href="TODO">Tailwind CSS</a>, you can add <code>class="w-6 h-6"</code> for <code>24px</code> or <code>class="w-8 h-8"</code> for{" "}
				<code>32px</code>.
			</p>
			<h2>Inline Styles in HTML</h2>
			<p>
				Another trick you can use is <code>style="width: 1em; height: 1em;"</code>. This means that an icon will assume the <code>width</code> and{" "}
				<code>height</code> of the parent element’s <code>font-size</code>, which by default is <code>16px</code>. If the parent element’s{" "}
				<code>font-size</code> is <code>32px</code>, your icon will also appear as <code>32px</code>.
			</p>
			<p>You can always extact this rule as a CSS class so you don’t need to write inline styles everywhere.</p>
			<h6>Contribute on GitHub</h6>
			<p>You are welcome to submit a pull request to enhance the docs, add translations, and contribute examples.</p>
			<p>
				Follow <a href="TODO">@colebemis</a> and <a href="TODO">@username_ZAYDEK</a> on Twitter.
			</p>
			<p>
				<small>
					Feather Icons is licensed as MIT open source software.
					<br />
					You can use the icons personally and commerically without attribution.
				</small>
			</p>
		</div>
	)
}
