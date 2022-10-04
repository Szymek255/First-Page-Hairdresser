const navBtn = document.querySelector('.navbar__burger-icon')
const navMenu = document.querySelector('.navbar__list')
const allNavItem = document.querySelectorAll('.navbar__list')

navBtn.addEventListener('click', () => {
	navMenu.classList.toggle('navbar__list--active')
})

const closeMobileNav = () => {
	allNavItem.forEach(item => {
		item.addEventListener('click', () => {
			navMenu.classList.remove('navbar__list--active')
		})
	})
}

closeMobileNav()
