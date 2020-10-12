import { em, rem } from "lib/x/cssUnits"
import styled, { StyleSheetManager, createGlobalStyle } from "styled-components"

import Link from "next/link"

const GlobalStyle = createGlobalStyle`
	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const BaseButton = styled.button`
	padding: ${rem(14)} ${rem(20)};
	font: 500 ${rem(18)} / 1 var(--sans);
	background-color: var(--gray-100);
	border-radius: ${rem(14)};
	transition: 100ms ease-out;
	&:focus {
		outline: none; /* Reset */
		box-shadow: 0 0 0 ${rem(3)} var(--blue-300);
	}
`

const SubmitButton = styled(BaseButton)`
	color: var(--white);
	background-color: var(--blue-500);
	&:hover,
	&:focus {
		background-color: var(--blue-600);
	}
`
const CancelButton = styled(BaseButton)`
	color: var(--black);
	background-color: var(--gray-200);
	&:hover,
	&:focus {
		background-color: var(--gray-300);
	}
`

const Gap = styled.div`
	${({ x, y }) => `
		width: ${x && rem(x)};
		height: ${y && rem(y)};
	`}
`

function App() {
	return (
		<Center style={{ minHeight: "100vh" }}>
			<SubmitButton>Proceed to Checkout</SubmitButton>
			<Gap x={14} />
			<CancelButton>Go Back</CancelButton>
		</Center>
	)
}

export default function AppTop() {
	return (
		// https://styled-components.com/docs/api#stylesheetmanager
		<StyleSheetManager disableVendorPrefixes={true}>
			<>
				<GlobalStyle />
				<App />
			</>
		</StyleSheetManager>
	)
}
