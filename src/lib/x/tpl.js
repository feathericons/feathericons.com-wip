// https://dev.to/patarapolw/fake-tagged-template-string-literal-to-enable-syntax-highlighting-in-vscode-34g1
export default function css(arr, ...args) {
	return arr.map((each, x) => `${each}${args[x] || ""}`).join("")
}
