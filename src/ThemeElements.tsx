import React, { createElement } from "react"

interface ThemeProps extends React.PropsWithChildren<any> {
	tag?: string
}

export default function theme(themeID: string) {
	function ThemeComponent({ tag, ...props }: ThemeProps) {
		const renderType = tag || "div"
		const renderProps = { ...props, "data-theme-id": themeID }
		return createElement(renderType, renderProps)
	}
	return ThemeComponent
}

export const ThemeApp = theme("App")
export const ThemeSearchBar = theme("SearchBar")
export const ThemeSidebar = theme("Sidebar")
export const ThemeToolbarPreview = theme("ToolbarPreview")
export const ThemeDemoBtn = theme("DemoBtn")
export const ThemeDemoBtnSVG = theme("DemoBtnSVG")
export const ThemeDemoBtnFadedSVG = theme("DemoBtnFadedSVG")
export const ThemeDemoBtnText = theme("DemoBtnText")
