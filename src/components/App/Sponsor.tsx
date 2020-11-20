import React from "react"
import { ExtAnchor } from "@zaydek/lib/dist/components"
import { ExternalLink } from "react-feather"
import { ISponsor } from "../../fixtures/sponsors"

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
					<span className="text-12 leading-1 group-on:underline text-white">{sponsor.subtext}</span>
					<ExternalLink className="w-12 h-12 text-gray-200" />
				</div>
			</div>
		</ExtAnchor>
	)
}
