import css from "lib/x/tpl"
import Icon from "./_Icon"

export default function IconsFragment({ svgs }) {
	return (
		<>

			<style>
				{css`
					#feather-grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
						gap: 0.75rem;
					}
				`}
			</style>

			<div id="feather-grid">
				{svgs.map(each => (
					<Icon key={each.name} svg={each} />
				))}
			</div>

		</>
	)
}
