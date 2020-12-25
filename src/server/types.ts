export interface Route {
	SEO?: () => JSX.Element
}

export interface Routes {
	[key: string]: null | Route
}
