import css from "lib/x/tpl"
import Icon from "./_Icon"

export default function IconsInfo({ svgs }) {
	return (
		<div id="feather-grid">

			<style>
				{css`
					#feather-grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
						gap: 1rem;
					}
				`}
			</style>

			{svgs.map(each => (
				<Icon key={each.name} svg={each} />
			))}

		</div>
	)
}
