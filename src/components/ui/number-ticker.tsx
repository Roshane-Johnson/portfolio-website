import { useEffect, useRef, useState } from 'react'

interface NumberTickerProps {
	value: number
	decimalPlaces?: number
	className?: string
}

const NumberTicker: React.FC<NumberTickerProps> = ({ value, decimalPlaces = 0, className = '' }) => {
	const [displayValue, setDisplayValue] = useState<number>(0)
	const ref = useRef<HTMLSpanElement | null>(null)
	const duration = 2_000 // animation duration in ms

	useEffect(() => {
		let observer: IntersectionObserver
		let startTime: number | null = null

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp
			const progress = Math.min((timestamp - startTime) / duration, 1)
			setDisplayValue(parseFloat((value * progress).toFixed(decimalPlaces)))
			if (progress < 1) {
				requestAnimationFrame(animate)
			}
		}

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					requestAnimationFrame(animate)
					observer.disconnect()
				}
			})
		}

		observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 })
		if (ref.current) observer.observe(ref.current)

		return () => {
			if (observer) observer.disconnect()
		}
	}, [value, decimalPlaces])

	return (
		<span ref={ref} className={className}>
			{displayValue.toLocaleString(undefined, {
				minimumFractionDigits: decimalPlaces,
				maximumFractionDigits: decimalPlaces,
			})}
		</span>
	)
}

export default NumberTicker
