import React from "react"
import { IIcon } from "../../types"

export default function BentoBox({ icon }: { icon: IIcon }) {
	return (
		// prettier-ignore
		<div className="hstack stack-center h-320 bg-gray-100">
			{React.createElement(icon, { className: "w-48 h-48" })}
		</div>
	)
}
