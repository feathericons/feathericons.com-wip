// prettier-ignore
export interface ISponsor {
	name:    string
	href:    string
	src:     string
	subtext: string
}

export default [
	{
		name: "QA Wolf",
		href: "https://github.com/qawolf/qawolf",
		src: "/static/images/sponsors/qawolf.png",
		subtext: "Awesome Browser Testing",
	},
	{
		name: "SPELLL",
		href: "https://spelll.design",
		src: "/static/images/sponsors/spelll.png",
		subtext: "Spell Checker for Figma",
	},
	{
		name: "SkillSyncer",
		href: "https://skillsyncer.com",
		src: "/static/images/sponsors/skillsyncer.png",
		subtext: "Resumé Optimizer",
	},
	{
		name: "Streamline",
		href: "https://streamlineicons.com",
		src: "/static/images/sponsors/streamline.png",
		subtext: "Download 30,000 Icons",
	},
	{
		name: "CodeTisans",
		href: "https://codetisans.com",
		src: "/static/images/sponsors/codetisans.png",
		subtext: "Laravel Softwarehouse",
	},
] as ISponsor[]
