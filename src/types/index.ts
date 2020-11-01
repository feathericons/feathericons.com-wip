import Feather from "react-feather"
import React from "react"

export interface Tags {
	[key: string]: string[]
}

export interface Icon {
	name: {
		title: string
		kebab: string
	}
	tags: string[]
	// TODO: Change svgs -> svg?
	svgs: {
		stroke: React.FC<Feather.Props>
	}
	new: boolean
}
