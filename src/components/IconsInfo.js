import css from "lib/x/tpl"
import Icon from "components/Icon"

export default function IconsInfo({ svgs }) {
	return (
		<div id="feather-grid">

			<style>
				{css`
					#feather-grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
						gap: 0.75rem;
					}
				`}
			</style>

			{svgs.map(each => (
				<Icon key={each.name} svg={each} />
			))}

		</div>
	)
}
