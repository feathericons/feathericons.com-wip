import Feather from "react-feather"
import React from "react"

export interface ITags {
	[key: string]: string[]
}

export interface IIcon {
	name: {
		kebab: string
		title: string
	}
	tags: string[]
	svgs: {
		stroke: React.FC<Feather.Props>
	}
	new: boolean
}
