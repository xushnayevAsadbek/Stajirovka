window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabContents = document.querySelectorAll('.tab_content'),
		tabParents = document.querySelector('.tabheader__items')

	function hideTabContents() {
		tabContents.forEach(tabContent => {
			tabContent.classList.add('hide')
			tabContent.classList.remove('show')
		})

		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}
	function showTabContents(index = 0) {
		tabContents[index].classList.add('show', 'fade')
		tabContents[index].classList.remove('hide')
		tabs[index].classList.add('tabheader__item_active')
	}

	hideTabContents()
	showTabContents()

	tabParents.addEventListener('click', event => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (target === tab) {
					hideTabContents()
					showTabContents(index)
				}
			})
		}
	})

	// Loader

	const loaderWrapper = document.querySelector('.loader-wrapper')
	setTimeout(() => {
		loaderWrapper.style.display = 'none'
	}, 1000)

	// Modal

	const modalOpenBtns = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-modal-close]'),
		modalContent = document.querySelector('.modal__content')

	function openModal() {
		modalContent.classList.add('modal_fade')
		modal.classList.add('show')
		modal.classList.remove('hide')
		document.body.style.overflow = 'hidden'
		clearInterval(modalTimerId)
	}

	function closeModal() {
		modal.classList.add('hide')
		modal.classList.remove('show')
		document.body.style.overflow = ''
	}

	modalOpenBtns.forEach(btn => {
		btn.addEventListener('click', openModal)
	})

	modalCloseBtn.addEventListener('click', closeModal)

	modal.addEventListener('click', event => {
		if (event.target === modal) {
			closeModal()
		}
	})

	document.addEventListener('keydown', event => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			closeModal()
		}
	})

	const modalTimerId = setTimeout(openModal, 5000)
})
