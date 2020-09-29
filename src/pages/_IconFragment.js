import css from "lib/x/tpl"
import px from "lib/x/px"

export default function IconFragment() {
	return (
		<>

			<style>
				{css`
					.bento {
						display: grid;
						grid-template-rows: 0.62fr 0.38fr;
						grid-template-columns: 0.62fr 0.14fr 0.24fr;
						grid-template-areas:
							"a b b"
							"a d c";
						gap: 0.75rem;

						/* width: 60rem; */
						height: 20rem;
					}

					.bento-item {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;

						background-color: lightgray;
					}

					.bento-item:nth-child(1) {
						grid-area: a;
					}
					.bento-item:nth-child(2) {
						grid-area: b;
					}
					.bento-item:nth-child(3) {
						grid-area: c;
					}
					.bento-item:nth-child(4) {
						grid-area: d;
					}

					.bento-item:nth-child(1) > .svg {
						width: ${px(104)};
						height: ${px(104)};
						background-color: gray;
						border-radius: 50%;
					}
					.bento-item:nth-child(2) > .svg {
						width: ${px(64)};
						height: ${px(64)};
						background-color: gray;
						border-radius: 50%;
					}
					.bento-item:nth-child(3) > .svg {
						width: ${px(40)};
						height: ${px(40)};
						background-color: gray;
						border-radius: 50%;
					}
					.bento-item:nth-child(4) > .svg {
						width: ${px(24)};
						height: ${px(24)};
						background-color: gray;
						border-radius: 50%;
					}

					@media (max-width: 639px) {
						.bento {
							grid-template-rows: 1fr;
							grid-template-columns: 1fr;
							gap: 0;
						}
						.bento-item:nth-child(2) {
							display: none;
						}
						.bento-item:nth-child(3) {
							display: none;
						}
						.bento-item:nth-child(4) {
							display: none;
						}
					}
				`}
			</style>

			{/* Name */}
			<div className="flex flex-row items-center">
				<div className="w-8 h-8 rounded-full bg-gray-100" />
				<div className="w-4" />
				<div className="w-40 h-6 bg-gray-100 rounded-full" />
			</div>

			<div className="h-8" />
			<div className="bento">
				<div className="bento-item">
					<div className="svg"></div>
				</div>
				<div className="bento-item">
					<div className="svg"></div>
				</div>
				<div className="bento-item">
					<div className="svg"></div>
				</div>
				<div className="bento-item">
					<div className="svg"></div>
				</div>
			</div>


		</>
	)
}
