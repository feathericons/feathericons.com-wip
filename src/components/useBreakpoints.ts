import { useBreakpoints as originalUseBreakpoints } from "@zaydek/lib/dist/hooks"

const breakpoints = {
	xs: 512,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280 + 64,
}

export default function useBreakpoints() {
	return originalUseBreakpoints(breakpoints)
}
