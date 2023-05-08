let tabsBtn = document.querySelectorAll('.work__list-links');
let tabsItem = document.querySelectorAll('.work__item');

tabsBtn.forEach(function(element) {
	element.addEventListener('click', function(e) {
		const path = e.currentTarget.dataset.path;

		tabsBtn.forEach(function(btn){ btn.classList.remove('work__list--active')});
		e.currentTarget.classList.add('work__list--active');

		tabsItem.forEach(function(element){ element.classList.remove('work__item--active')});
		document.querySelector(`[data-target="${path}"]`).classList.add('work__item--active');
	});
});