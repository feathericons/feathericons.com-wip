import React, { createElement } from "react"

interface ThemeProps extends React.PropsWithChildren<any> {
	tag?: React.FunctionComponent<any> | string
}

export default function theme(themeID: string) {
	function ThemeComponent({ tag, ...props }: ThemeProps) {
		const renderType = tag || "div"
		const renderProps = { ...props, "data-theme-id": themeID }
		return createElement(renderType, renderProps)
	}
	return ThemeComponent
}

export const Btn = theme("btn")
export const BtnText = theme("btn-text")

export const ThemeApp = theme("App")
export const ThemeSearchBar = theme("SearchBar")
export const ThemeSidebar = theme("Sidebar")
export const ThemeToolbarPreview = theme("ToolbarPreview")
export const ThemeCard = theme("Card")
export const ThemeSVG = theme("SVG")
export const ThemeFadedSVG = theme("FadedSVG")
export const ThemeText = theme("Text")
export const ThemeGrayUI = theme("GrayUI")
export const ThemeRaisedUI = theme("RaisedUI")
export const ThemeRaisedUISeparator = theme("RaisedUISeparator")
