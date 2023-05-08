let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__list-links')

burger.addEventListener('click', 

	function() {

		burger.classList.toggle('burger--active');

		menu.classList.toggle('header__menu--active');

		document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
	el.addEventListener('click', function () {

		burger.classList.remove('burger--active');

		menu.classList.remove('header__menu--active');

		document.body.classList.remove('stop-scroll');

	})
})