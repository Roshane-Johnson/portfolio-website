'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface SmoothScrollProps {
	offset?: number
}

export function SmoothScroll({ offset = 80 }: SmoothScrollProps) {
	const router = useRouter()

	useEffect(() => {
		// Intercept all clicks on the page
		const handleClick = (e: MouseEvent) => {
			const target = (e.target as HTMLElement).closest('a')

			if (target) {
				const href = target.getAttribute('href')

				// Check if it's a hash link (either #section or /#section)
				if (href?.startsWith('#') || href?.startsWith('/#')) {
					e.preventDefault()

					// Extract the hash part
					const hash = href.includes('#') ? '#' + href.split('#')[1] : href
					const id = hash.slice(1)
					const element = document.getElementById(id)

					// Route to correct path when hashtag link is clicked outside home page
					if (location.pathname !== '/') {
						const newPath = `/${hash}`
						router.push(newPath)
					}

					if (element) {
						const top = element.offsetTop - offset
						window.scrollTo({ top, behavior: 'smooth' })
						// Update URL without triggering navigation
						window.history.replaceState(null, '', hash)
					} else if (id === 'home' || id === 'top') {
						// Special case: scroll to top if #home or #top and no element found
						window.scrollTo({ top: 0, behavior: 'smooth' })
						window.history.replaceState(null, '', hash)
					} else {
						console.warn('No element found with id:', id)
					}
				}
			}
		}

		document.addEventListener('click', handleClick, true)

		// Handle initial load with hash
		const hash = window.location.hash
		if (hash) {
			const id = hash.slice(1)
			const element = document.getElementById(id)
			if (element) {
				setTimeout(() => {
					const top = element.offsetTop - offset
					window.scrollTo({ top, behavior: 'smooth' })
				}, 100)
			}
		}

		return () => document.removeEventListener('click', handleClick, true)
	}, [offset])

	return null
}
