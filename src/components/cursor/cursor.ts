const cursorDot = document.querySelector<HTMLElement>('.cursor-dot')
const cursorOutline = document.querySelector<HTMLElement>('.cursor-outline')

window.addEventListener('mousemove', function (e: MouseEvent) {
	const posX: number = e.clientX
	const posY: number = e.clientY

	if (cursorDot && cursorOutline) {
		cursorDot.style.left = `${posX}px`
		cursorDot.style.top = `${posY}px`

		cursorOutline.style.left = `${posX - 15}px`
		cursorOutline.style.top = `${posY - 15}px`
	}
})
