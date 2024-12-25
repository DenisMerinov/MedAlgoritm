import { useCallback, useRef } from 'react'

export function useDebounce<T extends any[]>(callback: (...args: T) => void, delay: number) {
	// eslint-disable-next-line no-undef
	const timer = useRef<NodeJS.Timeout | null>(null)

	const debouncedCallback = useCallback(
		(...args: T) => {
			if (timer.current) {
				clearTimeout(timer.current)
			}
			timer.current = setTimeout(() => {
				callback(...args)
			}, delay)
		},
		[callback, delay],
	)

	return debouncedCallback
}
