import * as Feather from "react-feather"
import Link from "next/link"
import React from "react"
import { IFeather, IIconMetadata } from "../types"
import { rem } from "@zaydek/duomo/dist/runtime"
import { toTitleCase } from "@zaydek/lib/dist/helpers"

export function IconSquare({ metadata }: { metadata: IIconMetadata }) {
	const SVG = (Feather as IFeather)[toTitleCase(metadata.name)]

	return (
		<Link href={metadata.name}>
			<a className="square">
				<div className="group vstack stack-center space-16">
					<SVG className="w-32 h-32" />
					<div className="absolute x-0 b-0">
						<div className="text-center text-13 tracking-1.25 leading-1.25 group-on:underline text-gray-600">
							{metadata.name}
						</div>
					</div>
				</div>
			</a>
		</Link>
	)
}

export function IconGrid({ children }: { children?: React.ReactNode }) {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(auto-fill, minmax(${rem(128)}, 1fr))`,
				gap: rem(16),
			}}
		>
			{children}
		</div>
	)
}
