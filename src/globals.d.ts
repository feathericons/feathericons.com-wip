declare const __DEV__: string

// `.mdx`-delimited markdown files.
declare module "*.mdx" {
	const content: string
	export default content
}
