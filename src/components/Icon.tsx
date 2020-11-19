import * as Feather from "react-feather"
import Link from "next/link"
import React from "react"
import { IIcon } from "types"
import { toTitleCase } from "@zaydek/lib/dist/helpers"

export function Icon({ icon }: { icon: IIcon }) {
	return (
		// prettier-ignore
		// <Link href={icon.name}>
		// <a key={icon.name} className="aspect-ratio-1:1">
		<div className="group vstack stack-center space-16">
					{JSON.stringify(icon)}
					{/* {React.createElement((Feather as { [key: string]: React.FC<Feather.Props> })[toTitleCase(icon.name)], {
						className: "w-32 h-32",
					})}
					<div className="absolute x-0 b-0">
						<div className="text-center text-14 leading-1.25 text-gray-600 group-on:underline">
							{icon.name}
						</div>
					</div> */}
				</div>
		// </a>
		// </Link>
	)
}

export function IconGrid({ children }: { children?: React.ReactNode }) {
	return <div className="grid-cols-128 gap-16">{children}</div>
}
