import React from "react"
import { ExtAnchor } from "@zaydek/lib/dist/components"
import { ExternalLink } from "react-feather"
import { ISponsor } from "../fixtures/sponsors"

interface SponsorProps {
	className?: string
	sponsor: ISponsor
}

export function Sponsor({ className, sponsor }: SponsorProps) {
	return (
		<ExtAnchor className={className} href={sponsor.href}>
			<div className="group vstack stack-center space-8">
				<img src={sponsor.src} className="h-48" />
				<div className="hstack stack-center space-6">
					<span className="font-500 text-11 leading-1 group-on:underline">{sponsor.subtext}</span>
					<ExternalLink className="w-13 h-13" />
				</div>
			</div>
		</ExtAnchor>
	)
}
